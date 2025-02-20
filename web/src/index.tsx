import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDOM from "react-dom";
import HttpsRedirect from "react-https-redirect";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { theme } from "./theme";

ReactDOM.render(
  <HttpsRedirect>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </HttpsRedirect>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
