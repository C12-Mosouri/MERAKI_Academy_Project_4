import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../../App";
import { useParams } from "react-router-dom";

const Fav = () => {
  const [fav, setFav] = useState([]);
  const [favId, setFavId] = useState("");
  const { token, userId } = useContext(tokenContext);
  // const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/fav`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.Category);
        setFav(res.data.Category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>My Fav</div>
      {fav.map((ele) => {
        // console.log(ele.productId);
        return (
          <>
            <div>
              <h1>{ele.productId.name}</h1>
              <img className="img" src={ele.productId.img} />
              <h2>{"Price : " + ele.productId.price + " JOD"}</h2>
              <h2>{"Size :" + ele.productId.size}</h2>
              <h2>{"Rate : " + ele.productId.rate}</h2>
              <button
                onClick={() => {
                  setFavId(ele._id);
                  console.log(ele._id);
                  const favId1 = { favId };
                  axios
                    .delete(`http://localhost:5000/fav`, favId1)
                    .then((res) => {
                      console.log(res);
                      setFav("");
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
