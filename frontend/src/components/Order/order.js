import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { tokenContext } from "../../App";
import "./order.css"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate()
  const { token, userId } = useContext(tokenContext);
  const [order, setOrder] = useState([]);
  let price = 0;
  useEffect(() => {
    axios
      .get("http://localhost:5000/cart/allcart", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.Category);
        setOrder(res.data.Category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {/* <div>My order</div> */}
      {order.map((ele) => {
        price = price + ele.product[0].productId.price;
        console.log(price);
        return (
          <>
            {console.log(ele.product[0])}
            <Container
              className="d-flex justify-content-center align-items-center"
              style={{ height: "52vh" }}
            >
              <Row>
                <Col md="auto">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      className="img"
                      variant="top"
                      src={ele.product[0].productId.img}
                    />
                    <Card.Body>
                      <Card.Title>{ele.name}</Card.Title>
                      <Card.Text>
                        <h1>
                          {"Price :" + ele.product[0].productId.price + " JOD"}
                          <h2>{`Quantity : ${ele.product[0].quantity}`}</h2>
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </>
        );
      })}
      <br></br>
      {
        <Button variant="success" className="order" onClick={() => {
          navigate("/payment")
        }}>
          Ready To Deliver
        </Button>
      }
    </>
  );
};

export default Order;
