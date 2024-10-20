import React, { useContext } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "./payment.css";
import axios from "axios";
import { tokenContext } from "../../App";
import Spinner from "react-bootstrap/Spinner";
import Collapse from "react-bootstrap/Collapse";
import { useNavigate } from "react-router-dom";

const Payment = () => {
    const navigate = useNavigate()
  const { token, userId } = useContext(tokenContext);
  const [validated, setValidated] = useState(false);
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [payment, setPayment] = useState("");
  const [open, setOpen] = useState(false);
  const [inValid, setInValid] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="payment">
        {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              //   defaultValue="Mark"
              //   onChange={(e)=>{
              // console.log(e.target.value)
              //   }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              //   defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Address</Form.Label>
            <InputGroup hasValidation>
              {/* <InputGroup.Text id="inputGroupPrepend"></InputGroup.Text> */}
              <Form.Control
                type="text"
                placeholder="Address"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                // aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>PhoneNumber</Form.Label>
            <Form.Control
              type="text"
              placeholder="PhoneNumber"
              required
              onChange={(e) => {
                console.log(e.target.value);
                setPhoneNumber(e.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid PhoneNumber.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            {/* <Form.Label>Zip</Form.Label> */}
            {/* {<Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback> */}
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Payment : Cash On Deliver"
            feedback="You must agree before submitting."
            feedbackType="invalid"
            onClick={() => {
              setPayment("Cash On Deliver");
              console.log(payment);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button
          variant="success"
          type="text"
          onClick={() => {
            setOpen(!open);
            if (payment || phoneNumber || address) {
              axios
                .post(`http://localhost:5000/order`, {
                  payment,
                  phoneNumber,
                  address,
                })
                .then((res) => {
                  console.log(res.data);
                  setInValid(false);
                  setTimeout(() => {
                    navigate("/home")
                  },3000 )
                })
                .catch((err) => {
                  console.log(err);
                });
            } else {
              console.log("invalid");
              setInValid(true);
            }
          }}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Submit form
        </Button>
        {inValid ? (
          <Collapse in={open}>
            <div id="example-collapse-text">Theres Something missing</div>
          </Collapse>
        ) : (
            <>
          <Collapse in={open}>
            <div id="example-collapse-text">Your Order Is Submitted</div>
          </Collapse>
          
          </>
        ) }
        {/* </Form> */}
      </div>
    </>
  );
};

export default Payment;
