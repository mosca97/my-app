import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter, Routes, Route } from "react-router";
import Api from "./Components/Api";

function App() {
  return (
    <>
      <div className="main">
        {/* <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        </BrowserRouter> */}
        <Api />
      </div>
    </>
  );
}

export default App;
