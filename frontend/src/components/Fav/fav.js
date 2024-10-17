import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../../App";
import { useParams } from "react-router-dom";

const Fav = () => {
  const [fav, setFav] = useState([]);
  const [addToCart, setAddToCart] = useState(true);
  const [favId, setFavId] = useState([]);
  const [add, setAdd] = useState(false);
  const { token, userId } = useContext(tokenContext);
  // const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/fav`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.Product);
        setFav(res.data.Product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>My Fav</div>
      {fav.map((ele) => {
        console.log(ele);
        return (
          <>
            <div>
              <h1>{ele.productId[0].name}</h1>
              <img className="img" src={ele.productId[0].img} />
              <h2>{"Price : " + ele.productId[0].price + " JOD"}</h2>
              <h2>{"Size :" + ele.productId[0].size}</h2>
              <h2>{"Rate : " + ele.productId[0].rate}</h2>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
                id={ele._id}
                onClick={() => {
                  setFavId(ele._id);
                  console.log(ele._id);
                  axios
                    .delete(`http://localhost:5000/fav`, {
                      data: { favId: ele._id },
                    })
                    .then((res) => {
                      console.log(res);
                      setFav(
                        fav.filter((elem) => {
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
              <button>Add To Cart</button>
              {addToCart ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-cart-plus"
                  viewBox="0 0 16 16"
                  onClick={() => {
                    console.log(token);
                    const productId = ele._id;
                    const quantity = 0;
                    const product = { productId, quantity };
                    setAddToCart(false);
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
                  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-cart-dash"
                  viewBox="0 0 16 16"
                  onClick={() => {
                    setAddToCart(true);
                  }}
                >
                  <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              )}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Fav;
