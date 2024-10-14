import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tokenContext } from "../../App";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [add, setAdd] = useState(true);
  const { id } = useParams();
  const { token, userId } = useContext(tokenContext);
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
                <div class="row">
                  <div class="col-xs-6 col-md-3">
                    <a href="#" class="thumbnail">
                      <img src="..." alt="..." />
                    </a>
                  </div>
                </div>
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
                        // setAdd(true);
                        console.log(ele);
                        axios.delete(`http://localhost:5000/fav/${id}`);
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
              </>
            )}
          </>
        );
      })}
    </>
  );
};

export default Product;
