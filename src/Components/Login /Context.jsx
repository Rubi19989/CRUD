import React, { createContext, useEffect, useState } from "react";
import { api } from "../../assets/Api/Api";


const ContentContext = createContext();

const ContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));


  const loginAuth = async (log) => {
    try {
      const { email, password } = log;
      const response = await api.post("auth/login", { email, password });

      const { access_token } = response.data;

      setAccessToken({ accessToken: access_token });

      localStorage.setItem("accessToken", access_token);

      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAccessToken(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);
  }, []);


  const values = {
    loginAuth,
    logout,
    accessToken
  };

  return (
    <ContentContext.Provider value={values}>{children}</ContentContext.Provider>
  );
};

export { ContentContext, ContextProvider };
