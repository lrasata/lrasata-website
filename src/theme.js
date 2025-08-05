import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Fira Code", "Source Code Pro", monospace',
    h1: {
      fontWeight: 700,
      fontSize: "1.5rem",
      "@media (min-width:960px)": {
        fontSize: "2rem", // md and up
      },
      lineHeight: "1.7rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.3rem",
      "@media (min-width:960px)": {
        fontSize: "1.5rem",
      },
      lineHeight: "1.7rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.1rem",
      "@media (min-width:960px)": {
        fontSize: "1.3rem",
      },
      lineHeight: "1.6rem",
    },
    body1: {
      fontSize: "0.85rem",
      "@media (min-width:960px)": {
        fontSize: "0.95rem",
      },
      lineHeight: "1.5rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
      fontSize: "0.9rem",
      "@media (min-width:960px)": {
        fontSize: "1rem",
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#8B5E3C", // warm brown
    },
    secondary: {
      main: "#A47551", // lighter brown accent
    },
    background: {
      default: "#FDF8F4", // off-white warm
      paper: "#FFFFFF",
    },
    text: {
      primary: "#3E2C23", // deep brown for contrast
      secondary: "#6E4E37",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "8px 16px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(142, 98, 60, 0.25)",
        },
      },
    },
  },
});

export default theme;
