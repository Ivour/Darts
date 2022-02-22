import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    color: "white",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#69e3eb",
    },
    secondary: {
      main: "#69a2eb",
    },

    warning: {
      main: "#fa9f37",
    },
    success: {
      main: "#90fc03",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        root: {
          // Some CSS

          borderRadius: "0.6rem",
        },
        // Name of the slot
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          // Some CSS

          borderRadius: "0.6rem",
        },
        // Name of the slot
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // Some CSS

          borderRadius: "0.6rem",
          backgroundColor: "unset",
        },
        // Name of the slot
      },
    },
  },
});

export default theme;
