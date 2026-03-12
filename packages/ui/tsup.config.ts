import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  loader: {
    ".png": "copy",
    ".webp": "copy",
  },
  splitting: false,
  sourcemap: true,
  external: ["react", "react-dom"],
});
