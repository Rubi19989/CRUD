import React, { createContext, useState, useEffect } from "react";
import { api } from "../../assets/Api/Api";

const ContentContext = createContext();

const ContextProvider = ({ children }) => {
  const [tokens, setTokens] = useState({
    accessToken: localStorage.getItem("accessToken"),
    refreshToken: localStorage.getItem("refreshToken"),
  });

  const loginAuth = async (log) => {
    try {
      const { email, password } = log;
      const response = await api.post("auth/login", { email, password });

      const { access_token, refresh_token } = response.data;

      setTokens({
        accessToken: access_token,
        refreshToken: refresh_token,
      });

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);

      console.log("Login successful:", response.data);
      return true
    } catch (error) {
      console.error("Error fetching login:", error);
      return false
    }
  };

  useEffect(() => {
    if (tokens.accessToken) {
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${tokens.accessToken}`;
    }
  }, [tokens.accessToken]);

  const values = {
    loginAuth,
    tokens,
  };

  return (
    <ContentContext.Provider value={values}>{children}</ContentContext.Provider>
  );
};

export { ContentContext, ContextProvider };
