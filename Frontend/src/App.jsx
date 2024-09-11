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
  ScholarshipDetail,
  DetailedJobPage,
  OrganizationDetail,
  EditProfile,
  ViewProfile,
  SeeMoreJobPage,
  SeeMoreScholarshipPage,
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
          path: "/career/:jobId", 
          element: <DetailedJobPage />,
        },
        {
          path: "/scholarship",
          element: <ScholarshipPage />,
        },
        // {
        //   path: "/scholarship/:id",
        //   element: <ScholarshipDetailPage />,
        // },
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
        {
          path: "/scholarship/detail/:id",
          element: <ScholarshipDetail/>,
        },
        
        {
          path: "/view",
          element: <ViewProfile/>,
        },
        {
          path: "/view/edit",
          element: <EditProfile/>,
        },
        {
          path: "/organization",
          path: "/scholarship/organization/",
          element: <OrganizationDetail/>,
        },
        {
          path: "/morejobs",
          element:<SeeMoreJobPage/>
        },
        {
          path: "/morescholarships",
          element:<SeeMoreScholarshipPage/>
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
