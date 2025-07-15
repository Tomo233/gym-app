import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BookmarkedProvider } from "./context/BookmarkProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BookmarkedProvider>
      <App />
    </BookmarkedProvider>
  </StrictMode>
);
