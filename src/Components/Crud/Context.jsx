import React, { createContext, useState } from "react";
import { api } from "../../assets/Api/Api";
import Swal from "sweetalert2";

const ContentContext = createContext();

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [oneUsers, setOneUsers] = useState();
 

  const handleCheck = (menssagecheck1, messageCheck2) => {
    Swal.fire({
      icon: "success",
      title: menssagecheck1,
      text: messageCheck2,
    });
  };

  const handleError = (messageError) => {
    Swal.fire({
      icon: "Error",
      title: "Oops...",
      text: messageError,
    });
  };

  const getUsers = async () => {
    try {
      const response = await api.get("users?offset=0&limit=5");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const getOneUsers = async (id) => {
    try {
      const response = await api.get(`users/${id}`);
      setOneUsers(response.data);
    } catch (error) {
      console.error("Error getting user:", error);
    }
  };

  const createUsers = async (newProduct) => {
    try {
      const response = await api.post("users", newProduct);
      await getUsers();
      handleCheck("Usuario Creado", "Usuario Creado con exito!");

      return response.data;
    } catch (error) {
      handleError(
        "Ocurrio un error el usuario no se pudo crear, intentelo de nuevo!"
      );
    }
  };

  const editUsers = async (id, updatedProduct) => {
    try {
      await api.put(`users/${id}`, updatedProduct);
      await getUsers();
      handleCheck("Usuario Editado", "El usuario fue actualizado con exito");
    } catch (error) {
      handleError(
        "Ocurrio un error al intentar actualizar el usuario, intente de nuevo!"
      );
    }
  };

  const deleteUsers = async (id) => {
    try {
      await api.delete(`users/${id}`);
      await getUsers();
      handleCheck("El usuario fue eliminado con exito");
    } catch (error) {
      handleError("No se pudo eliminar el usuario, intente de nuevo!");
    }
  };

  const values = {
    users,
    createUsers,
    deleteUsers,
    getUsers,
    getOneUsers,
    oneUsers,
    setOneUsers,
    editUsers,
  };

  return (
    <ContentContext.Provider value={values}>{children}</ContentContext.Provider>
  );
};

export { ContentContext, ContextProvider };
