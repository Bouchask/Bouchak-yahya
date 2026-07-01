import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initAnalytics } from "./hooks/use-analytics";

// Initialize Google Analytics
initAnalytics();

createRoot(document.getElementById("root")!).render(<App />);
