import BookmarkIcon from "@mui/icons-material/Bookmark";
import Logo from "../assets/gym.png";
import { Link } from "react-router";

function Header() {
  return (
    <header className="flex justify-between items-center border-b-2  border-[#3a3a3a] ">
      <Link to="/">
        <img src={Logo} alt="App Logo" className="w-24" />
      </Link>

      <input
        type="text"
        placeholder="Search Exercises..."
        className="w-full max-w-md px-4 py-3 text-white font-bold text-base bg-[#1a1a1a] border-2 border-[#3a3a3a] rounded-lg shadow-md placeholder-gray-400 focus:outline-none focus:border-[#AD131A] focus:ring-0"
      />

      <Link to="/bookmarked">
        <BookmarkIcon
          sx={{
            fontSize: "55px",
            color: "#AD131A",
            backgroundColor: "#1a1a1a",
            padding: "8px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
            border: "2px solid #3a3a3a",
            textShadow: "1px 1px 2px black",
          }}
        />
      </Link>
    </header>
  );
}

export default Header;
