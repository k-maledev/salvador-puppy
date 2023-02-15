import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

import { Home, Create, CreateResult, Reviews, Feedback, Donate } from "./pages";
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
        path: "/album",
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
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
};

export default App;
