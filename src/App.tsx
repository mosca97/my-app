import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <div className="main">
        <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
