import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { tokenContext } from "../../App";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [add, setAdd] = useState(true);
  const [addToFav, setAddToFav] = useState([]);
  const { id } = useParams();
  const { token, userId } = useContext(tokenContext);
  const navigate = useNavigate();
  useEffect(() => {
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
      <div>product</div>
      {product.map((ele) => {
        return (
          <>
            {localStorage.getItem("token") ? (
              <>
                <h1>{ele.subCategoryId.name}</h1>
                <h1>{ele.name}</h1>
                <h2>{ele.price + " : JOD"}</h2>
                <img className="img" src={ele.img} />
                <h3>{"Size : " + ele.size}</h3>
                <h3>{"Rate : " + ele.rate}</h3>
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
                        console.log(token);
                        const productId = ele._id;
                        axios
                          .post(
                            `http://localhost:5000/fav`,
                            { productId, userId },
                            { headers: { Authorization: `Bearer ${token}` } }
                          )
                          .then((result) => {
                            console.log(result);
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
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                      onClick={() => {
                        setAdd(true);
                        console.log(ele);
                        axios
                          .delete(`http://localhost:5000/fav`, {
                            data: { addToFav: ele._id },
                          })
                          .then((res) => {
                            console.log(res);
                            setAddToFav(
                              product.filter((elem) => {
                                return elem._id !== ele._id;
                              })
                            );
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
                </h1>
                <button
                  onClick={() => {
                    console.log(token);
                    const productId = ele._id;
                    axios
                      .post(
                        `http://localhost:5000/fav`,
                        { productId, userId },
                        { headers: { Authorization: `Bearer ${token}` } }
                      )
                      .then((result) => {
                        console.log(result);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  Add To My Fav
                </button>
                <button
                  onClick={() => {
                    console.log(token);
                    const productId = ele._id;
                    const quantity = 0;
                    const product = { productId, quantity };
                    axios
                      .post(
                        `http://localhost:5000/cart`,
                        { product },
                        { headers: { Authorization: `Bearer ${token}` } }
                      )
                      .then((result) => {
                        console.log(result);
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  Add To My Cart
                </button>
              </>
            ) : (
              <>
                <h1>{ele.subCategoryId.name}</h1>
                <h1>{ele.name}</h1>
                <h2>{ele.price + " : JOD"}</h2>
                <img className="img" src={ele.img} />
                <h3>{"Size : " + ele.size}</h3>
                <h3>{"Rate : " + ele.rate}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-heart"
                  viewBox="0 0 16 16"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
              </>
            )}
          </>
        );
      })}
    </>
  );
};

export default Product;
