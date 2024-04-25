import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { CustomerLayout } from "../layouts/CustomerLayout";
import { AdminLayout } from "../layouts/AdminLayout";
import { Login } from "../pages/Auth/Login/Login";
import { Register } from "../pages/Auth/Register/Register";
import Home from "../pages/Customer/home";
import { PageNotFound } from "../common/errors/page-not-found/PageNotFound";
const routes = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "",
    element: <CustomerLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin-layout",
    element: <AdminLayout />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

const RouterIndex = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element}>
          {route.children &&
            route.children.map((routeChildren, indexChildren) => (
              <Route
                key={indexChildren}
                path={routeChildren.path}
                element={routeChildren.element}
              ></Route>
            ))}
        </Route>
      ))}
    </Routes>
  );
};

export default RouterIndex;