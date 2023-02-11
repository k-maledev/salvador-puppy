import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Adopt, AdoptResult, Reviews, Feedback, Donate } from "./pages";
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
        path: "/adopt-result",
        element: <AdoptResult />,
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
