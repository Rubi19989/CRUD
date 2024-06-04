import React, { useContext } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ContentContext } from "./Context";

const RemoveToken = () => {
  const { logout } = useContext(ContentContext);
  const navigate = useNavigate();


  const salir = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <Button onClick={salir}> Logout </Button>
    </>
  );
};

export { RemoveToken };
