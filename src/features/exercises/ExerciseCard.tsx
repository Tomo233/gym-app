import firstExercise from "../../assets/exercise-1.jpg";
import type { ExerciseType } from "../../types/ExerciseType";

function ExerciseCard({ exercise }: { exercise: ExerciseType }) {
  return (
    <div className=" bg-black/30 backdrop-blur-md border-2 border-[#3a3a3a] rounded-2xl p-4 shadow-lg text-white">
      <img src={firstExercise} alt={exercise.name} className="mb-2" />
      <h2 className="text-lg font-semibold mb-1">{exercise.name}</h2>
      <p className="text-sm text-gray-400 mb-1">
        <span className="font-semibold text-white">Body Part:</span>
        {exercise.bodyPart}
      </p>
      <p className="text-sm text-gray-400 mb-1">
        <span className="font-semibold text-white">Difficulty:</span>
        {exercise.difficulty}
      </p>
      <p className="text-sm text-gray-400 mb-1">
        <span className="font-semibold text-white">Equipment:</span>
        {exercise.equipment}
      </p>
      <p className="text-sm text-gray-400 mb-1">
        <span className="font-semibold text-white">Category:</span>
        {exercise.category}
      </p>

      <div className="flex justify-center mt-1">
        <button className="bg-[#AD131A] px-12 py-3 rounded-lg font-medium cursor-pointer">
          Add To List
        </button>
      </div>
    </div>
  );
}

export default ExerciseCard;
