import React, { useState, useContext } from "react";
import App from "../../App";
import axios from "axios";
import { tokenContext } from "../../App";
import "./login,register,navbar.css";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const { setToken, setUserId } = useContext(tokenContext);
  // const navigate = useNavigate();
  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <br></br>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br />
        <button
          onClick={() => {
            const userLogin = {
              email,
              password,
            };
            axios
              .post("http://localhost:5000/users/login", userLogin)
              .then((res) => {
                console.log(res.data.userId);
                setUser(true);
                console.log(user);
                setMessage(res.data.message);
                console.log(res.data.token);
                setToken(res.data.token);
                setUserId(res.data.userId);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userId", res.data.userId);
                // navigate("/dashboard");
              })
              .catch((err) => {
                console.log(err);
                setUser(false);
                setMessage(err.response.data.message);
              });
          }}
        >
          Login
        </button>
        {user ? (
          <h1>
            {message}
            {navigate("/category")}
          </h1>
        ) : (
          <h1>{message}</h1>
        )}
        <h6>
          {"Don't have an account ? "}
          <a
            href=""
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </a>
        </h6>
      </div>
    </>
  );
};

export default Login;
