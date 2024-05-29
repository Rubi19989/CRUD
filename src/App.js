import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { CrudIndex } from "./Components/Crud";
import { LoginIndex } from "./Components/Login ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginIndex />} />
        <Route path="/crud" element={<CrudIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
