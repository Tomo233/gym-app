import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import BookmarkedPage from "./pages/BookmarkedPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/bookmarked",
          element: <BookmarkedPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
