import React, { useState, useContext } from "react";
import App from "../../App";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { tokenContext } from "../../App";
import "./login,register,navbar.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");
  const { setToken } = useContext(tokenContext);
  // const navigate = useNavigate();
  return (
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
              console.log(res.data.message);
              setUser(true);
              console.log(user);
              setMessage(res.data.message);
              console.log(res.data.token);
              setToken(res.data.token);
              localStorage.setItem("token", res.data.token);
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
      {setUser ? <h1>{message}</h1> : <h1>{message}</h1>}
    </div>
  );
};

export default Login;
