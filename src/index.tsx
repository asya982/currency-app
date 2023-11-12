import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const theme = createTheme({
  palette: {
    primary: {
      main: "#48BDE2",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFBF5B",
      contrastText: "#fff",
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={routes} />
  </ThemeProvider>
);

reportWebVitals();
