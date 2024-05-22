import React, { createContext, useState, useEffect } from "react";
import { api } from "../Api/Api";

const ContentContext = createContext();

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [oneUsers, setOneUsers] = useState(null);



  const getUsers = async () => {
    try {
      const response = await api.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getOneUsers = async (id) => {
    try {
      const response = await api.get(`/users/${id}`);
      setOneUsers(response.data);
    } catch (error) {
      console.error("Error getting user:", error);
    }
  };

  const createUsers = async (newProduct) => {
    try {
      const response = await api.post("/users", newProduct);
      await getUsers();
      console.log("Product created:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const editUsers = async (id, updatedProduct) => {
    try {
      const { email, name } = updatedProduct;
      const editData = {
        email,
        name,
      };

      await api.put(`/users/${id}`, editData);
      await getUsers();
      console.log("Product updated successfully!");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteUsers = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      await getUsers();
      console.log("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
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
