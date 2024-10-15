import React, { useState, useContext, createContext, useEffect } from "react";
import App from "../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  return (
    <div className="register">
      <h1>Register</h1>
      <br></br>
      <input
        type="text"
        placeholder="First Name *"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="Last Name *"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="number"
        placeholder="Age *"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="text"
        placeholder="Country *"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="email"
        placeholder="Email *"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="password"
        placeholder="Password *"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <br></br>
      <button
        on
        onClick={() => {
          // console.log(firstName);
          const userData = {
            firstName,
            lastName,
            age,
            country,
            email,
            password,
          };
          axios
            .post("http://localhost:5000/users/register", userData)
            .then((res) => {
              console.log(res.data.message);
              setUser(true);
              console.log(user);
              setMessage(res.data.message);
            })
            .catch((err) => {
              console.log(err);
              setUser(false);
              setMessage(err.response.data.message);
            });
        }}
      >
        Sign In
      </button>
      {setUser ? <h1>{message}</h1> : <h1>{message}</h1>}
      <h6>
        {"Already have an account ? "}
        <a
          href=""
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </a>
      </h6>
    </div>
  );
};

export default Register;
