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
      main: "#efba7d",
    },
    success: {
      main: "#90fc03",
    },
  },
  components: {
    // Name of the component
    MuiSelect: {
      styleOverrides: {
        // Name of the slot
      },
    },
  },
  MuiList: {
    styleOverrides: {
      // Name of the slot
      root: {
        // Some CSS
        color: "white",
        backgroundColor: "#3d3d3d",
      },
    },
  },
});

export default theme;
