import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = () => {
  if (!localStorage.getItem("token")) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
};

export default ProtectRoute;
