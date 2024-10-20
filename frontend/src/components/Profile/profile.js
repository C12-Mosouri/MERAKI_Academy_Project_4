import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { tokenContext } from "../../App";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const [myInfo, setMyInfo] = useState("");
  const { token, userId } = useContext(tokenContext);
  console.log(userId);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.result);
        setMyInfo(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>My Profile</div>
      <Form className="text">
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={myInfo.email} />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextFirstName"
        >
          <Form.Label column sm="2">
            FirstName
          </Form.Label>
          <Col sm="10">
            <Form.Control
              plaintext
              readOnly
              type="text"
              placeholder="My First Name"
              defaultValue={myInfo.firstName}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            FirstName
          </Form.Label>
          <Col sm="10">
            <Form.Control
              plaintext
              readOnly
              type="text"
              placeholder="My last Name"
              defaultValue={myInfo.lastName}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            My Country
          </Form.Label>
          <Col sm="10">
            <Form.Control
              plaintext
              readOnly
              type="text"
              placeholder="My Country"
              defaultValue={myInfo.country}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            My Age
          </Form.Label>
          <Col sm="10">
            <Form.Control
              plaintext
              readOnly
              type="text"
              placeholder="My Age"
              defaultValue={myInfo.age}
            />
          </Col>
        </Form.Group>
      </Form>
      <Button
        variant="danger"
        className="order"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Sign Out
      </Button>{" "}
      {/*    <h1>{"My Name : " + myInfo.firstName + " " + myInfo.lastName}</h1>
      <h4>{"My Age : " + myInfo.age}</h4>
      <h4>{"My Country : " + myInfo.country}</h4>
      <h4>{"My Email : " + myInfo.email}</h4> */}
    </>
  );
};

export default Profile;
