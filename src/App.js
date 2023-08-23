import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./styles/Login.css";
import "./styles/Register.css";
import Login from "./component/Login";
import Register from "./component/Register";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Login/>} />
            <Route path="/homepage" exact element={<HomePage/>} />
            <Route path="/register" exact element={<Register/>} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
