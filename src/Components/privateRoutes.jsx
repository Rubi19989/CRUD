import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ContentContext } from "./Login /Context";

const PrivateRoutes = () => {
  const { accessToken } = useContext(ContentContext);
  return accessToken ? <Outlet /> : <Navigate to="/" />;
};

export { PrivateRoutes };