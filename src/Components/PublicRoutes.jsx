import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ContentContext } from "./Login /Context";

const PublicRoutes = () => {
  const { accessToken } = useContext(ContentContext);
  return accessToken ? <Navigate to="/crud" /> : <Outlet />;
};

export { PublicRoutes };
