import React, { createContext, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Category from "./components/Categorys/category";
import SubCategorys from "./components/SubCategorys/subcategory";
import Product from "./components/Product/product";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbars from "./components/Login/Navbar";
export const tokenContext = createContext();

const App = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("" || localStorage.getItem("token"));
  const [fav, setFav] = useState("");
  const [add, setAdd] = useState(true);
  return (
    <>
      <Navbars />
      <h1>
        {add ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-heart"
            viewBox="0 0 16 16"
            onClick={() => {
              setAdd(false);
            }}
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-heart-fill"
            viewBox="0 0 16 16"
            onClick={() => {
              setAdd(true);
            }}
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
            />
          </svg>
        )}
      </h1>
      {/* <Button variant="primary">Click Me</Button> */}
      <tokenContext.Provider value={{ token, setToken }}>
        <div className="App">
          {/* <h1>Hello World!</h1> */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category/sub" element={<SubCategorys />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </tokenContext.Provider>
    </>
  );
};

export default App;
