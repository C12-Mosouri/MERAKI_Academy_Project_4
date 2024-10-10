import React, { createContext, useState } from "react";
import "./App.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Login from "./components/shared components/Login";
export const tokenContext = createContext();

const App = () => {
  const [token, setToken] = useState("" || localStorage.getItem("token"));
  return (
    <>
      <tokenContext.Provider value={{ token, setToken }}>
        <div className="App">
          <h1>Hello World!</h1>
          <Login />
        </div>
      </tokenContext.Provider>
    </>
  );
};

export default App;
