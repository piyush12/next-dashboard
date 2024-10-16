import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      purple: {
        100: "#e3e1fc",
        200: "#c7c2f9",
        300: "#aba4f6",
        400: "#8f85f3",
        500: "#7367f0",
        600: "#675dd8",
        700: "#6258cc",
        800: "#5c52c0",
        900: "#564db4",
      },
      gray: {
        100: "#e6e6e9",
        200: "#ccccd3",
        300: "#b3b5bc",
        400: "#999ca6",
        500: "#808390",
        600: "#737682",
        700: "#6d6f7a",
        800: "#666973",
        900: "#60626c",
      },
      info: {
        100: "#ccf1f6",
        200: "#99e3ed",
        300: "#66d6e3",
        400: "#33c8da",
        500: "#00bad1",
        600: "#00a7bc",
        700: "#009eb2",
        800: "#0095a7",
        900: "#008c9d",
      },
      success: {
        100: "#d4f4e2",
        200: "#a9e9c5",
        300: "#7edda9",
        400: "#53d28c",
        500: "#28c76f",
        600: "#24b364",
        700: "#22a95e",
        800: "#209f59",
        900: "#1e9553",
      },
      warning: {
        100: "#ffeccd",
        200: "#ffd9b4",
        300: "#ffc58e",
        400: "#ffb269",
        500: "#ff9f43",
        600: "#e68f3c",
        700: "#d98739",
        800: "#cc7f36",
        900: "#bf7732",
      },
      error: {
        100: "#ffdbdc",
        200: "#ffb7b9",
        300: "#ff9497",
        400: "#ff7074",
        500: "#ff4c51",
        600: "#e64449",
        700: "#d94145",
        800: "#cc3d41",
        900: "#bf393d",
      },
      blueGray: {
        100: "#535876",
        200: "#636784",
        300: "#727692",
        400: "#8285a0",
        500: "#9293ae",
        600: "#a2a2bd",
        700: "#b2b1cb",
        800: "#c1c0d9",
        900: "#cfcce4",
      },
      dark: {
        snackbar: "#f7f4ff",
        bg: "#25293c",
        paperBg: "#2f3349",
        tableHeader: "#2f3349",
        chatBg: "#202534",
        trackBg: "#3a3f57",
        grayLight: "#353a52",
        primary: "#E1DEF5",
        secondary: "theme(colors.dark.primary / 70%)",
        border: "theme(colors.dark.primary / 12%)",
        divider: "theme(colors.dark.primary / 12%)",
      },
      light: {
        snackbar: "#2f2b3d",
        bg: "#f8f7fa",
        paperBg: "#ffffff",
        tableHeader: "#ffffff",
        chatBg: "#f3f2f5",
        trackBg: "#f1f0f2",
        grayLight: "#fafafa",
        primary: "#2F2B3D",
        secondary: "theme(colors.light.primary / 70%)",
        border: "theme(colors.light.primary / 22%)",
        divider: "theme(colors.light.primary / 12%)",
      },
      boxShadow: {
        purple: {
          xs: "0 2px 6px 0 theme(colors.purple.500 / 30%)",
          md: "0 4px 16px 0 theme(colors.purple.500 / 40%)",
          lg: "0 6px 20px 0 theme(colors.purple.500 / 50%)",
        },
        gray: {
          xs: "0 2px 6px 0 theme(colors.gray.500 / 30%)",
          md: "0 4px 16px 0 theme(colors.gray.500 / 40%)",
          lg: "0 6px 20px 0 theme(colors.gray.500 / 50%)",
        },
        info: {
          xs: "0 2px 6px 0 theme(colors.info.500 / 30%)",
          md: "0 4px 16px 0 theme(colors.info.500 / 40%)",
          lg: "0 6px 20px 0 theme(colors.info.500 / 50%)",
        },
        success: {
          xs: "0 2px 6px 0 theme(colors.success.500 / 30%)",
          md: "0 4px 16px 0 theme(colors.success.500 / 40%)",
          lg: "0 6px 20px 0 theme(colors.success.500 / 50%)",
        },
        warning: {
          xs: "0 2px 6px 0 theme(colors.warning.500 / 30%)",
          md: "0 4px 16px 0 theme(colors.warning.500 / 40%)",
          lg: "0 6px 20px 0 theme(colors.warning.500 / 50%)",
        },
        danger: {
          xs: "0 2px 6px 0 theme(colors.danger.500 / 30%)",
          md: "0 4px 16px 0 theme(colors.danger.500 / 40%)",
          lg: "0 6px 20px 0 theme(colors.danger.500 / 50%)",
        },
        blueGray: {
          xs: "0 2px 6px 0 theme(colors.blueGray.500 / 30%)",
          md: "0 4px 16px 0 theme(colors.blueGray.500 / 40%)",
          lg: "0 6px 20px 0 theme(colors.blueGray.500 / 50%)",
        },
        dark: {
          xs: "0 2px 6px 0 theme(colors.snackbar.500 / 30%)",
          md: "0 4px 16px 0 theme(colors.snackbar.500 / 40%)",
          lg: "0 6px 20px 0 theme(colors.snackbar.500 / 50%)",
        },
        light: {
          xs: "0 2px 6px 0 theme(colors.snackbar.500 / 30%)",
          md: "0 4px 16px 0 theme(colors.snackbar.500 / 40%)",
          lg: "0 6px 20px 0 theme(colors.snackbar.500 / 50%)",
        },
      },
      transparent: "transparent",
      white: "#ffffff",
    },

    fontWeight: {
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    fontSize: {
      h1: ["2.875rem", "4.25rem"], // Size: 46px / Line Height: 68px
      h2: ["2.375rem", "3.5rem"], // Size: 38px / Line Height: 56px
      h3: ["1.75rem", "2.625rem"], // Size: 28px / Line Height: 42px
      h4: ["1.5rem", "2.375rem"], // Size: 24px / Line Height: 38px
      h5: ["1.125rem", "1.75rem"], // Size: 18px / Line Height: 28px
      h6: ["0.9375rem", "1.375rem"], // Size: 15px / Line Height: 22px
      subtitle1: ["0.9375rem", "1.375rem"], // Size: 15px / Line Height: 22px
      subtitle2: ["0.8125rem", "1.25rem"], // Size: 13px / Line Height: 20px
      body1: ["0.9375rem", "1.375rem"], // Size: 15px / Line Height: 22px
      body2: ["0.8125rem", "1.25rem"], // Size: 13px / Line Height: 20px
      caption: ["0.8125rem", "1.125rem"], // Size: 13px / Line Height: 18px
      overline: ["0.75rem", "0.875rem"], // Size: 12px / Line Height: 14px
      buttonLarge: ["1.0625rem", "1.625rem"], // Size: 17px / Line Height: 26px
      buttonMedium: ["0.9375rem", "1.375rem"], // Size: 15px / Line Height: 22px
      buttonSmall: ["0.8125rem", "1.125rem"], // Size: 13px / Line Height: 18px
      inputLabel: ["0.8125rem", "0.9375rem"], // Size: 15px / Line Height: 15px
      helperText: ["0.8125rem", "0.8125rem"], // Size: 13px / Line Height: 13px
      inputTextLarge: ["1.0625rem", "1.75rem"], // Size: 17px / Line Height: 28px
      inputText: ["0.9375rem", "1.5rem"], // Size: 15px / Line Height: 24px
      inputTextSmall: ["0.8125rem", "1.375rem"], // Size: 13px / Line Height: 22px
      avatarInitials: ["0.9375rem", "1.125rem"], // Size: 15px / Line Height: 18px
      chip: ["0.8125rem", "1.25rem"], // Size: 13px / Line Height: 20px
      tooltip: ["0.8125rem", "1.25rem"], // Size: 13px / Line Height: 20px
      alertTitle: ["1.125rem", "1.5rem"], // Size: 18px / Line Height: 24px
      tableHeader: ["0.75rem", "1.5rem"], // Size: 12px / Line Height: 24px
      badgeLabel: ["0.8125rem", "1.25rem"], // Size: 13px / Line Height: 20px
      toast: ["0.9375rem", "1.375rem"], // Size: 15px / Line Height: 22px
    },
    extend: {},
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [],
};
export default config;
