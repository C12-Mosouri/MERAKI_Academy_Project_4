import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { tokenContext } from "../../App";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);

  const [add, setAdd] = useState(true);
  const [addToFav, setAddToFav] = useState([]);
  const [addToCart, setAddToCart] = useState(true);
  const { id } = useParams();
  const { token, userId } = useContext(tokenContext);
  const [favId, setFavId] = useState("");
  const [cartId, setCartId] = useState("");
  const navigate = useNavigate();
  const [isAdd, setIsAdd] = useState({});
  const [isAddToCard, setIsAddToCard] = useState({});

  useEffect(() => {
    // console.log(id);
    axios
      .get(`http://localhost:5000/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {/* <div>product</div> */}
      {product.map((ele, i) => {
        // console.log(ele._id);
        return (
          <>
            {localStorage.getItem("token") ? (
              <>
                <Container
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "80vh" }}
                >
                  <Row>
                    <Col md="auto">
                      <Card style={{ width: "18rem" }}>
                        <Card.Img className="img" variant="top" src={ele.img} />
                        <Card.Body>
                          <Card.Title>{ele.name}</Card.Title>
                          <Card.Text>
                            <h2>{ele.price + " : JOD"}</h2>
                            <h3>{"Size : " + ele.size}</h3>
                            <h3>{"Rate : " + ele.rate}</h3>
                            <h3>{"Color : " + ele.color}</h3>
                            {!isAdd[ele._id] ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                fill="currentColor"
                                class="bi bi-heart"
                                viewBox="0 0 16 16"
                                className={i}
                                key={ele._id}
                                onClick={() => {
                                  // setAdd(false);
                                  setIsAdd((product) => ({
                                    ...product,
                                    [ele._id]: true,
                                  }));

                                  console.log(token);
                                  const productId = ele._id;
                                  axios
                                    .post(
                                      `http://localhost:5000/fav`,
                                      { productId, userId },
                                      {
                                        headers: {
                                          Authorization: `Bearer ${token}`,
                                        },
                                      }
                                    )
                                    .then((result) => {
                                      console.log(result);
                                      setFavId(result.data.Category._id);
                                      setAddToFav(result.data.Category._id);
                                    })
                                    .catch((err) => {
                                      console.log(err);
                                    });
                                }}
                              >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                fill="currentColor"
                                class="bi bi-heart-fill"
                                viewBox="0 0 16 16"
                                // id={ele._id}
                                onClick={(e) => {
                                  // setAdd(true);

                                  console.log(e.target.id);
                                  console.log(ele);
                                  setIsAdd((product) => ({
                                    ...product,
                                    [ele._id]: false,
                                  }));
                                  axios
                                    .delete(`http://localhost:5000/fav`, {
                                      data: { favId: favId },
                                    })
                                    .then((res) => {
                                      console.log(res);
                                    })
                                    .catch((err) => {
                                      console.log(err);
                                    });
                                }}
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                                />
                              </svg>
                            )}
                            {!isAddToCard[ele._id] ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                fill="currentColor"
                                class="bi bi-cart-plus"
                                viewBox="0 0 16 16"
                                onClick={() => {
                                  console.log(token);
                                  const productId = ele._id;
                                  const quantity = 1;
                                  const product = { productId, quantity };
                                  /* setAddToCart(false); */
                                  setIsAddToCard((product) => ({
                                    ...product,
                                    [ele._id]: true,
                                  }));
                                  axios
                                    .post(
                                      `http://localhost:5000/cart`,
                                      { product, quantity },
                                      {
                                        headers: {
                                          Authorization: `Bearer ${token}`,
                                        },
                                      }
                                    )
                                    .then((result) => {
                                      console.log(result);
                                      console.log(result.data.Category._id);
                                      setCartId(result.data.Category._id);
                                    })
                                    .catch((err) => {
                                      console.log(err);
                                    });
                                }}
                              >
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                fill="currentColor"
                                class="bi bi-cart-dash"
                                viewBox="0 0 16 16"
                                onClick={() => {
                                  // setAddToCart(true);
                                  setIsAddToCard((product) => ({
                                    ...product,
                                    [ele._id]: false,
                                  }));
                                  axios
                                    .delete(`http://localhost:5000/cart`, {
                                      data: { cartId: cartId },
                                    })
                                    .then((res) => {
                                      console.log(res);
                                    })
                                    .catch((err) => {
                                      console.log(err);
                                    });
                                }}
                              >
                                <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                              </svg>
                            )}
                          </Card.Text>
                          <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </>
            ) : (
              <>
                <>
                  <Container
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "85vh" }}
                  >
                    <Row>
                      <Col md="auto">
                        <Card style={{ width: "18rem" }}>
                          <Card.Img
                            className="img"
                            variant="top"
                            src={ele.img}
                          />
                          <Card.Body>
                            <Card.Title>{ele.name}</Card.Title>
                            <Card.Text>
                              <h2>{ele.price + " : JOD"}</h2>
                              <h3>{"Size : " + ele.size}</h3>
                              <h3>{"Rate : " + ele.rate}</h3>
                              <h3>{"Color : " + ele.color}</h3>

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                fill="currentColor"
                                class="bi bi-heart"
                                viewBox="0 0 16 16"
                                className={i}
                                key={ele._id}
                                onClick={() => {
                                  navigate("/login");
                                }}
                              >
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                              </svg>

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                fill="currentColor"
                                class="bi bi-cart-plus"
                                viewBox="0 0 16 16"
                                onClick={() => {
                                  navigate("/login");
                                }}
                              >
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                              </svg>
                            </Card.Text>
                            <Button
                              variant="primary"
                              onClick={() => {
                                navigate("/login");
                              }}
                            >
                              Buy Now
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </>
              </>
            )}
          </>
        );
      })}
    </>
  );
};

export default Product;
