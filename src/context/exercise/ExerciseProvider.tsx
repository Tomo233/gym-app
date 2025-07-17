import { useEffect, useState, type ReactNode } from "react";
import type { ExerciseType } from "../../types/ExerciseType";
import { ExerciseContext } from "./ExerciseContext";

export function ExerciseProvider({ children }: { children: ReactNode }) {
  const [exercises, setExercises] = useState<ExerciseType[]>([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchExercises = async () => {
      try {
        setIsLoading(true);

        const url = query
          ? `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${query}`
          : `https://exercisedb.p.rapidapi.com/exercises`;

        const res = await fetch(url, {
          headers: {
            "X-RapidAPI-Key":
              "b5956ff108msh2d437dae1a1df9fp12acabjsnda0d134e95ef",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
          },
        });

        const data = await res.json();
        if (data.errors) {
          setExercises([]);
        } else {
          setExercises(data);
        }
      } catch (err) {
        console.error("Error fetching exercises:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercises();

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <ExerciseContext.Provider
      value={{
        exercises,
        query,
        setQuery,
        isLoading,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
}
