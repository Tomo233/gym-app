import { createContext, useContext } from "react";
import type { ExerciseType } from "../../types/ExerciseType";

type ExerciseContextValue = {
  exercises: ExerciseType[];
  query: string;
  onSetQuery: (value: string) => void;
  isLoading: boolean;
};

const ExerciseContext = createContext<ExerciseContextValue | null>(null);

function useExerciseContext() {
  const context = useContext(ExerciseContext);
  if (!context) {
    throw new Error(
      "useExerciseContext must be used within BookmarkedProvider"
    );
  }
  return context;
}
export { ExerciseContext, useExerciseContext };
