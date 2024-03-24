import { Outlet } from "react-router";
import React from "react";
import Header from "../components/header/header";

export default function proyectLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
