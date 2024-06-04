import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { CrudIndex } from "./Components/Crud/index";
import { PrivateRoutes } from "./Components/privateRoutes";
import { ContextProvider } from "./Components/Login /Context";
import { FormLogin } from "./Components/Login /Form";
import { PublicRoutes } from "./Components/PublicRoutes";

// "email": "john@mail.com",
// "password": "changeme"

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoutes />}>
            <Route path="/" element={<FormLogin />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/crud" element={<CrudIndex />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
