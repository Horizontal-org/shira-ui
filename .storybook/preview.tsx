import React from 'react';
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/theme"
import { defaultTheme } from "../src/theme";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators:[
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;
