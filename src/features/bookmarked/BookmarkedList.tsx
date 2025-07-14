import type { ExerciseType } from "../../types/ExerciseType";
import BookmarkedCard from "./BookmarkedCard";

const exerciseData = {
  name: "3/4 sit-up",
  bodyPart: "waist",
  category: "strength",
  description:
    "The 3/4 sit-up is an abdominal exercise performed with body weight. It involves curling the torso up to a 45-degree angle, engaging the abs, hip flexors, and lower back. This movement is commonly used to build core strength and stability.",
  difficulty: "beginner",
  equipment: "body weight",
};

const bookmarked: ExerciseType[] = [
  {
    ...exerciseData,
    name: "3/4 sit-up",
    id: 1,
  },
  {
    ...exerciseData,
    name: "Full sit-up",
    difficulty: "intermediate",
    id: 2,
  },
  {
    ...exerciseData,
    name: "Crunch",
    description:
      "A crunch is a short-range abdominal exercise focused on the upper abs.",
    id: 3,
  },
  {
    ...exerciseData,
    name: "Leg raise",
    equipment: "none",
    difficulty: "beginner",
    id: 4,
  },
  {
    ...exerciseData,
    name: "Russian twist",
    difficulty: "advanced",
    equipment: "medicine ball",
    id: 5,
  },
];
function BookmarkedList() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {bookmarked?.map((bookmarkedExercise) => (
        <BookmarkedCard
          key={bookmarkedExercise.id}
          bookmarked={bookmarkedExercise}
        />
      ))}
    </div>
  );
}

export default BookmarkedList;
