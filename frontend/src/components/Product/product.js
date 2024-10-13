import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tokenContext } from "../../App";

const Product = () => {
  const [product, setProduct] = useState([]);
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
                <h3>{"Size : " + ele.size}</h3>
                <h3>{"Rate : " + ele.rate}</h3>
                <button
                  onClick={() => {
                    // const userId = req.token.userId;
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
                  Add To Fav
                </button>
              </>
            ) : (
              <button>Get Out</button>
            )}
          </>
        );
      })}
    </>
  );
};

export default Product;
