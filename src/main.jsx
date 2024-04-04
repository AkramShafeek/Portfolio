// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import {NextUIProvider} from "@nextui-org/react";
import App from "./App";
import "./index.css";
import "./styles/common.css";
import "./styles/codingProfile.css";
import "./styles/project.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-slate-900">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
);