import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BookmarkedProvider } from "./context/bookmark/BookmarkProvider.tsx";
import { ExerciseProvider } from "./context/exercise/ExerciseProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExerciseProvider>
      <BookmarkedProvider>
        <App />
      </BookmarkedProvider>
    </ExerciseProvider>
  </StrictMode>
);
