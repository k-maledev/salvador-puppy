import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

import {
  Home,
  Create,
  CreateResult,
  Reviews,
  Feedback,
  Donate,
  Review,
} from "./pages";
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
        path: "/create",
        element: <Create />,
      },
      {
        path: "/create-result",
        element: <CreateResult />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/reviews/:reviewId",
        element: <Review />,
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
  return (
    <>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </>
  );
};

export default App;
