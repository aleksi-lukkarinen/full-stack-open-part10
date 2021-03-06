import { Platform } from "react-native";

const theme = {
  colors: {
    foreground: "#24292e",
    background: "#ffffff",
    foregroundInverted: "#ffffff",
    backgroundInverted: "#24292e",
    warning: "#990000",
    accent1: "#4499ff",
    accent2: "#999999",
    separator: "#eeeeee",
  },
  fontSizes: {
    heading1: 18,
    heading2: 16,
    body: 14,
    small: 12,
  },
  fonts: {
    main: Platform.select({
      ios: "Arial",
      android: "Roboto",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

theme.colors.foregroundInverted = theme.colors.background;
theme.colors.backgroundInverted = theme.colors.foreground;

export default theme;
