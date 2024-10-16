import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../../App";
import { useParams } from "react-router-dom";

const Fav = () => {
  const [fav, setFav] = useState([]);
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
                // id={ele._id}
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
            </div>
          </>
        );
      })}
    </>
  );
};

export default Fav;
