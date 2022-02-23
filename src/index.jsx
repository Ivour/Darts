import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/theme";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthContextProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
