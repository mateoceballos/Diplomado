import React, { lazy } from "react";
import ProyectLayout from "../Layout/proyectLayout";

// Importación de suspense
import Loader from "../components/Loader/Loader";
// Rutas del diplomado
const Home = Loader(lazy(() => import("../views/Home/index")));
const NoMatch = Loader(lazy(() => import("../views/error")));

const ProyectRoutes = {
  path: "/",
  element: <ProyectLayout />,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "*",
      element: <NoMatch />,
    },
  ],
};
export default ProyectRoutes;
