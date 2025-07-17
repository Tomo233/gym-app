import { useBookmarkedContext } from "../../context/bookmark/BookmarkContext";
import BookmarkedCard from "./BookmarkedCard";

function BookmarkedList() {
  const { bookmarked, handleRemoveBookmarked } = useBookmarkedContext();
  return (
    <div className="grid grid-cols-1 gap-6">
      {bookmarked?.map((bookmarkedExercise) => (
        <BookmarkedCard
          key={bookmarkedExercise.id}
          bookmarked={bookmarkedExercise}
          onRemoveBookmarked={handleRemoveBookmarked}
        />
      ))}
    </div>
  );
}

export default BookmarkedList;
