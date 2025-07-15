import { useEffect, useState, type ReactNode } from "react";
import type { ExerciseType } from "../types/ExerciseType";
import { BookmarkedContext } from "./BookmarkContext";

export function BookmarkedProvider({ children }: { children: ReactNode }) {
  const [bookmarked, setBookmarked] = useState<ExerciseType[]>(() => {
    const stored = localStorage.getItem("bookmarked");
    return stored ? JSON.parse(stored) : [];
  });

  const handleAddBookmarked = (item: ExerciseType) => {
    setBookmarked((prev) =>
      prev.some((i) => i.id === item.id) ? prev : [...prev, item]
    );
  };

  const handleRemoveBookmarked = (id: number) => {
    setBookmarked((prev) => prev.filter((i) => i.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("bookmarked", JSON.stringify(bookmarked));
  }, [bookmarked]);

  return (
    <BookmarkedContext.Provider
      value={{
        bookmarked,
        handleAddBookmarked,
        handleRemoveBookmarked,
      }}
    >
      {children}
    </BookmarkedContext.Provider>
  );
}
