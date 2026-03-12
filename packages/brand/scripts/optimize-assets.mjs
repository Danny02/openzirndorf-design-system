import { mkdir, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const rootDir = path.resolve(import.meta.dirname, "..");
const assetsDir = path.join(rootDir, "src", "assets");

const assetGroups = [
  {
    dir: path.join(assetsDir, "logos"),
    sizes: [64, 128, 256],
    pngSizes: new Set([64, 128, 256]),
    webpSizes: new Set([64, 128, 256]),
  },
  {
    dir: path.join(assetsDir, "mascots"),
    sizes: [256, 512, 800],
    pngSizes: new Set([256, 512]),
    webpSizes: new Set([256, 512, 800]),
  },
];

const generatedVariantPattern = /-(\d+)\.(png|webp)$/i;
async function findLargestInternalTransparentGap(imageBuffer) {
  const { data, info } = await sharp(imageBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const rowCounts = [];

  for (let y = 0; y < info.height; y += 1) {
    let count = 0;

    for (let x = 0; x < info.width; x += 1) {
      if (data[(y * info.width + x) * 4 + 3] > 0) {
        count += 1;
      }
    }

    rowCounts.push(count);
  }

  let largestGap = null;
  let gapStart = null;

  for (let y = 0; y < rowCounts.length; y += 1) {
    if (rowCounts[y] === 0) {
      if (gapStart === null) {
        gapStart = y;
      }
      continue;
    }

    if (gapStart !== null) {
      const gap = {
        start: gapStart,
        end: y - 1,
        length: y - gapStart,
      };

      if (
        gap.start > 0 &&
        gap.end < rowCounts.length - 1 &&
        (largestGap === null || gap.length > largestGap.length)
      ) {
        largestGap = gap;
      }

      gapStart = null;
    }
  }

  return largestGap;
}

async function findOpaqueBounds(imageBuffer) {
  const { data, info } = await sharp(imageBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let left = info.width;
  let top = info.height;
  let right = -1;
  let bottom = -1;

  for (let y = 0; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      if (data[(y * info.width + x) * 4 + 3] === 0) {
        continue;
      }

      left = Math.min(left, x);
      top = Math.min(top, y);
      right = Math.max(right, x);
      bottom = Math.max(bottom, y);
    }
  }

  if (right < left || bottom < top) {
    return null;
  }

  return {
    left,
    top,
    width: right - left + 1,
    height: bottom - top + 1,
  };
}

async function cropToOpaqueBounds(imageBuffer) {
  const bounds = await findOpaqueBounds(imageBuffer);

  if (!bounds) {
    return imageBuffer;
  }

  return sharp(imageBuffer)
    .extract(bounds)
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toBuffer();
}

async function createMarkVariant(group, trimmedBuffer, markStem) {
  const markPath = path.join(group.dir, `${markStem}.png`);
  const gap = await findLargestInternalTransparentGap(trimmedBuffer);

  if (!gap || gap.length < 4) {
    return null;
  }

  const metadata = await sharp(trimmedBuffer).metadata();
  const markCandidateBuffer = await sharp(trimmedBuffer)
    .extract({
      left: 0,
      top: 0,
      width: metadata.width ?? 0,
      height: gap.start,
    })
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toBuffer();
  const croppedBuffer = await cropToOpaqueBounds(markCandidateBuffer);

  const markMetadata = await sharp(croppedBuffer).metadata();

  await writeFile(markPath, croppedBuffer);
  await removeGeneratedVariants(group.dir, markStem);

  const generated = [];

  for (const size of group.sizes) {
    const resizeWidth = Math.min(size, markMetadata.width ?? size);

    if (group.pngSizes.has(size)) {
      const pngOutputPath = path.join(group.dir, `${markStem}-${size}.png`);
      await sharp(croppedBuffer)
        .resize({ width: resizeWidth, withoutEnlargement: true })
        .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
        .toFile(pngOutputPath);
      generated.push(path.basename(pngOutputPath));
    }

    if (group.webpSizes.has(size)) {
      const webpOutputPath = path.join(group.dir, `${markStem}-${size}.webp`);
      await sharp(croppedBuffer)
        .resize({ width: resizeWidth, withoutEnlargement: true })
        .webp({ quality: 82, alphaQuality: 90, effort: 6 })
        .toFile(webpOutputPath);
      generated.push(path.basename(webpOutputPath));
    }
  }

  return {
    file: path.relative(rootDir, markPath),
    beforeBytes: 0,
    afterBytes: (await stat(markPath)).size,
    width: markMetadata.width,
    height: markMetadata.height,
    generated,
  };
}

function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  const units = ["KB", "MB", "GB"];
  let value = bytes / 1024;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(1)} ${units[unitIndex]}`;
}

async function removeGeneratedVariants(dir, stem) {
  const entries = await readdir(dir, { withFileTypes: true });

  await Promise.all(
    entries
      .filter(
        (entry) =>
          entry.isFile() &&
          entry.name.startsWith(`${stem}-`) &&
          generatedVariantPattern.test(entry.name),
      )
      .map((entry) => rm(path.join(dir, entry.name))),
  );
}

async function processPng(filePath, group) {
  const parsed = path.parse(filePath);
  const sourceStats = await stat(filePath);
  const sourceBuffer = await sharp(filePath)
    .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
    .toBuffer();
  const trimmedBuffer = await cropToOpaqueBounds(sourceBuffer);

  const metadata = await sharp(trimmedBuffer).metadata();

  await writeFile(filePath, trimmedBuffer);
  await removeGeneratedVariants(group.dir, parsed.name);

  const generated = [];

  for (const size of group.sizes) {
    const resizeWidth = Math.min(size, metadata.width ?? size);

    if (group.pngSizes.has(size)) {
      const pngOutputPath = path.join(group.dir, `${parsed.name}-${size}.png`);
      await sharp(trimmedBuffer)
        .resize({ width: resizeWidth, withoutEnlargement: true })
        .png({ compressionLevel: 9, adaptiveFiltering: true, palette: false })
        .toFile(pngOutputPath);
      generated.push(path.basename(pngOutputPath));
    }

    if (group.webpSizes.has(size)) {
      const webpOutputPath = path.join(group.dir, `${parsed.name}-${size}.webp`);
      await sharp(trimmedBuffer)
        .resize({ width: resizeWidth, withoutEnlargement: true })
        .webp({ quality: 82, alphaQuality: 90, effort: 6 })
        .toFile(webpOutputPath);
      generated.push(path.basename(webpOutputPath));
    }
  }

  const optimizedStats = await stat(filePath);
  const markStem = parsed.name === "logo" ? "logo-mark" : `${parsed.name}-mark`;
  const markSummary = await createMarkVariant(group, trimmedBuffer, markStem);

  return [
    {
      file: path.relative(rootDir, filePath),
      beforeBytes: sourceStats.size,
      afterBytes: optimizedStats.size,
      width: metadata.width,
      height: metadata.height,
      generated,
    },
    ...(markSummary ? [markSummary] : []),
  ];
}

async function main() {
  const summary = [];

  for (const group of assetGroups) {
    await mkdir(group.dir, { recursive: true });

    const entries = await readdir(group.dir, { withFileTypes: true });
    const pngFiles = entries
      .filter(
        (entry) =>
          entry.isFile() &&
          entry.name.endsWith(".png") &&
          !generatedVariantPattern.test(entry.name) &&
          !entry.name.endsWith("-mark.png"),
      )
      .map((entry) => path.join(group.dir, entry.name))
      .sort();

    for (const pngFile of pngFiles) {
      summary.push(...(await processPng(pngFile, group)));
    }
  }

  const totalBeforeBytes = summary.reduce(
    (total, item) => total + item.beforeBytes,
    0,
  );
  const totalAfterBytes = summary.reduce(
    (total, item) => total + item.afterBytes,
    0,
  );

  console.log("Optimized PNG sources and generated variants:\n");

  for (const item of summary) {
    console.log(
      `- ${item.file}: ${item.width}x${item.height}, ${formatBytes(item.beforeBytes)} -> ${formatBytes(item.afterBytes)}`,
    );

    for (const generatedFile of item.generated) {
      console.log(`  - ${generatedFile}`);
    }
  }

  console.log(
    `\nTotal source PNG size: ${formatBytes(totalBeforeBytes)} -> ${formatBytes(totalAfterBytes)}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});