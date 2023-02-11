import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Adopt, Reviews, Feedback, Donate } from "./pages";
import PageLayout from "./layout/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/adopt",
        element: <Adopt />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/feedback",
        element: <Feedback />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
