import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

import { Home, Create, CreateResult, Album, Feedback, Donate } from "./pages";
import PageLayout from "./layout/PageLayout";
import { HelmetProvider } from "react-helmet-async";

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
        element: <Album />,
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
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <RouterProvider router={router} />
        </RecoilRoot>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
