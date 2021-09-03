
const theme = {
  colors: {
    foreground: "#24292e",
    background: "#ffffff",
    foregroundInverted: "#ffffff",
    backgroundInverted: "#24292e",
    accent1: "#0366d6",
    accent2: "#586069",
  },
  fontSizes: {
    heading1: 18,
    heading2: 16,
    body: 14,
  },
  fonts: {
    main: "System",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

theme.colors.foregroundInverted = theme.colors.background;
theme.colors.backgroundInverted = theme.colors.foreground;

export default theme;
