import { useEffect, useState } from "react";
import type { ExerciseType } from "../../types/ExerciseType";
import ExerciseCard from "./ExerciseCard";

const exerciseData = {
  name: "3/4 sit-up",
  bodyPart: "waist",
  category: "strength",
  description:
    "The 3/4 sit-up is an abdominal exercise performed with body weight. It involves curling the torso up to a 45-degree angle, engaging the abs, hip flexors, and lower back. This movement is commonly used to build core strength and stability.",
  difficulty: "beginner",
  equipment: "body weight",
};

// const exerciseDataList = [
//   {
//     ...exerciseData,
//     name: "3/4 sit-up",
//     id: 1,
//   },
//   {
//     ...exerciseData,
//     name: "Full sit-up",
//     difficulty: "intermediate",
//     id: 2,
//   },
//   {
//     ...exerciseData,
//     name: "Crunch",
//     description:
//       "A crunch is a short-range abdominal exercise focused on the upper abs.",
//     id: 3,
//   },
//   {
//     ...exerciseData,
//     name: "Leg raise",
//     equipment: "none",
//     difficulty: "beginner",
//     id: 4,
//   },
//   {
//     ...exerciseData,
//     name: "Russian twist",
//     difficulty: "advanced",
//     equipment: "medicine ball",
//     id: 5,
//   },
// ];

function ExercisesList() {
  const [exercises, setExercises] = useState<ExerciseType[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://exercisedb.p.rapidapi.com/exercises", {
          headers: {
            "X-RapidAPI-Key":
              "b5956ff108msh2d437dae1a1df9fp12acabjsnda0d134e95ef",
          },
        });
        const data = await res.json();
        setExercises(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchExercises();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6">
      {isLoading && <p>loading...</p>}
      {exercises?.map((exercise) => (
        <ExerciseCard exercise={exercise} key={exercise.id} />
      ))}
    </div>
  );
}

export default ExercisesList;
