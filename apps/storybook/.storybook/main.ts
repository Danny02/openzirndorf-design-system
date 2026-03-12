import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const storybookBasePath = process.env.STORYBOOK_BASE_PATH;

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (viteConfig) => {
    viteConfig.plugins = [
      ...(viteConfig.plugins ?? []),
      tsconfigPaths(),
      tailwindcss(),
    ];

    if (storybookBasePath) {
      viteConfig.base = storybookBasePath.endsWith("/")
        ? storybookBasePath
        : `${storybookBasePath}/`;
    }

    return viteConfig;
  },
};

export default config;
