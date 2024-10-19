import React, { createContext, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Category from "./components/Categorys/category";
import SubCategorys from "./components/SubCategorys/subcategory";
import Product from "./components/Product/product";
import Fav from "./components/Fav/fav";
import Cart from "./components/Cart/cart";
import Home from "./components/Home/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Offcanvas from "react-bootstrap/Offcanvas";
import Navbars from "./components/Login/Navbar";
import Profile from "./components/Profile/profile";
export const tokenContext = createContext();

const App = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("" || localStorage.getItem("token"));
  const [userId, setUserId] = useState("" || localStorage.getItem("userId"));
  const [fav, setFav] = useState("");
  const [add, setAdd] = useState(true);
  return (
    <>
      <Navbars />

      {/* <Button variant="primary">Click Me</Button> */}
      <tokenContext.Provider value={{ token, setToken, userId, setUserId }}>
        <div className="App">
          {/* <h1>Hello World!</h1> */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category/sub/:id" element={<SubCategorys />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/fav" element={<Fav />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/myprofile" element={<Profile />} />
          </Routes>
        </div>
      </tokenContext.Provider>
    </>
  );
};

export default App;
