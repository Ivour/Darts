import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./config/theme";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/AuthContext";
import { OptionsContextProvider } from "./store/OptionsContext";

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <OptionsContextProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </OptionsContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
