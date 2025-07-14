import firstExercise from "../../assets/exercise-1.jpg";
import type { ExerciseType } from "../../types/ExerciseType";

function BookmarkedCard({ bookmarked }: { bookmarked: ExerciseType }) {
  return (
    <div className="bg-black/30 backdrop-blur-md border-2 border-[#3a3a3a] rounded-2xl p-4 shadow-lg text-white flex justify-between gap-6 items-center">
      <img
        src={firstExercise}
        alt={bookmarked.name}
        className="mb-2 w-xl object-contain rounded-lg"
      />
      <div>
        <h2 className="text-2xl font-semibold mb-1">{bookmarked.name}</h2>
        <p className="text-sm text-gray-400 mb-1">
          <span className="font-semibold text-white">Body Part:</span>
          {bookmarked.bodyPart}
        </p>
        <p className="text-md text-gray-400 mb-1">
          <span className="font-semibold text-white">Difficulty:</span>
          {bookmarked.difficulty}
        </p>
        <p className="text-md text-gray-400 mb-1">
          <span className="font-semibold text-white">Equipment:</span>
          {bookmarked.equipment}
        </p>
        <p className="text-md text-gray-400 mb-1">
          <span className="font-semibold text-white">Category:</span>
          {bookmarked.category}
        </p>
        <p className="text-md text-gray-400 mb-1">{bookmarked.description}</p>
        <button className="bg-[#AD131A] px-12 py-3 rounded-lg font-medium cursor-pointer mt-3">
          Remove From List
        </button>
      </div>
    </div>
  );
}

export default BookmarkedCard;
