import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../../App";
import { useParams } from "react-router-dom";

const Fav = () => {
  const [fav, setFav] = useState([]);
  const [favId, setFavId] = useState([]);
  const { token, userId } = useContext(tokenContext);
  // const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/fav`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.Product.productId);
        setFav(res.data.Product.productId);
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
              <h1>{ele.name}</h1>
              <img className="img" src={ele.img} />
              <h2>{"Price : " + ele.price + " JOD"}</h2>
              <h2>{"Size :" + ele.size}</h2>
              <h2>{"Rate : " + ele.rate}</h2>
              <button
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
                Reomve From Fav
              </button>
              <button>Add To Cart</button>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Fav;
