import ExerciseCard from "./ExerciseCard";
import Loader from "../../components/Loader";
import { useExerciseContext } from "../../context/exercise/ExerciseContext";

function ExercisesList() {
  const { exercises, isLoading } = useExerciseContext();

  if (exercises.length === 0)
    return <p className="text-xl font-medium text-white">No results</p>;

  return (
    <div className="grid grid-cols-3 gap-6">
      {isLoading ? (
        <Loader />
      ) : (
        exercises?.map((exercise) => (
          <ExerciseCard exercise={exercise} key={exercise.id} />
        ))
      )}
    </div>
  );
}

export default ExercisesList;
