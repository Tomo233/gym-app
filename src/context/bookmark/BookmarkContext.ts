import { createContext, useContext } from "react";
import type { ExerciseType } from "../../types/ExerciseType";

type BookmarkedContextValue = {
  bookmarked: ExerciseType[];
  handleAddBookmarked: (item: ExerciseType) => void;
  handleRemoveBookmarked: (id: number) => void;
};

const BookmarkedContext = createContext<BookmarkedContextValue | null>(null);

function useBookmarkedContext() {
  const context = useContext(BookmarkedContext);
  if (!context) {
    throw new Error("useBookmarked must be used within BookmarkedProvider");
  }
  return context;
}
export { BookmarkedContext, useBookmarkedContext };
