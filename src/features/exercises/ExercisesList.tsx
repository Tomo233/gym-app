import ExerciseCard from "./ExerciseCard";
import Loader from "../../components/Loader";
import { useExerciseContext } from "../../context/exercise/ExerciseContext";

function ExercisesList() {
  const { exercises, isLoading } = useExerciseContext();

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
