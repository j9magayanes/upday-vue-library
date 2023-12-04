/** @type { import('@storybook/vue3-vite').StorybookConfig } */

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  refs: {
    local: {
      title: 'Local',
      url: 'http://localhost:6007',
    },
    remote: {
      title: 'Remote',
      url: 'http://upday-react-ui-components-staging.upday.com/',
    },
  },
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
