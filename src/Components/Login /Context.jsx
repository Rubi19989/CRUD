import React, { createContext, useState } from "react";
import { api } from "../../assets/Api/Api";

const ContentContext = createContext();

const ContextProvider = ({ children }) => {

  const accessToken = localStorage.getItem("accessToken")
  const [tokens, setTokens] = useState({accessToken});

  const loginAuth = async (log) => {
    try {
      const { email, password } = log;
      const response = await api.post("auth/login", { email, password });

      const { access_token } = response.data;

      setTokens({accessToken: access_token});

      localStorage.setItem("accessToken", access_token);

      return true;
    } catch (error) {
      return false;
    }
  };

  const values = {
    loginAuth,
    tokens,
  };

  return (
    <ContentContext.Provider value={values}>{children}</ContentContext.Provider>
  );
};

export { ContentContext, ContextProvider };
