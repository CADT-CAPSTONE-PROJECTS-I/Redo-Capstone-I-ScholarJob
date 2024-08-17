import {
  React,
  Register,
  LoginPage,
  HomePage,
  CareerPage,
  ScholarshipPage,
  AboutUsPage,
  CVGeneratePage,
  RouterProvider,
  createBrowserRouter,
} from "./import/all_import.jsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/career",
          element: <CareerPage />,
        },
        {
          path: "/scholarship",
          element: <ScholarshipPage />,
        },
        {
          path: "/about",
          element: <AboutUsPage />,
        },
        {
          path: "/generate",
          element: <CVGeneratePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
