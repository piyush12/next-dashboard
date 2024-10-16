import type { Preview } from "@storybook/react";
import {
  withThemeByDataAttribute,
  withThemeByClassName,
} from "@storybook/addon-themes";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
  },
  decorators: [
    withThemeByDataAttribute({
      attributeName: "data-theme",
      parentSelector: "html",
      defaultTheme: "light",
      themes: {
        light: "light",
        dark: "dark",
      },
    }),
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
