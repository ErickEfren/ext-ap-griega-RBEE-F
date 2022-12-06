import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { AppRouter } from "./router/AppRouter";

import "./assets/css/styles.min.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/mode.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
