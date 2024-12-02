import { Suspense } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { CircularProgress } from "@/components/Atoms";

export const Page = {
  Home: {
    name: "home",
    to: "/home",
    path: "/home",
    element: <HomePage />,
  },
};

export const AppRoutes = () => {
  const element = useRoutes([
    ...protectedRoutes,
    { path: "*", element: <AuthMainNavigator /> },
  ]);
  return <>{element}</>;
};

const AuthMainNavigator = () => {
  return (
    <>
      <Navigate to={Page.Home.to} />
    </>
  );
};

const protectedRoutes = [
  {
    to: Page.Home.to,
    element: (
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    ),
    children: [Page.Home, { to: "*", element: <Navigate to="." /> }],
  },
];
