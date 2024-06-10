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
    console.log('Si se borra el token')
  }; 

  return (
    <>
      <Button onClick={salir}> Logout </Button>
    </>
  );
};

export { RemoveToken };
