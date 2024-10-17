import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../../App";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [cart2, setCart2] = useState([]);
  const { token, userId } = useContext(tokenContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.Product);
        setCart(res.data.Product);
        cart.map((ele) => {
          console.log(ele.product[0].productId);
          axios
            .get(
              `http://localhost:5000/product/${ele.product[0].productId}/productId`
            )
            .then((ress) => {
              console.log(ress.data.result);
              setCart2(ress.data.result);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>My Cart</div>
      {/* {cart.map((ele) => {
        console.log(ele.product[0].productId);
        const productIdAfterMap = ele.product[0].productId;

        return (
          <>
            <h1>{ele.product[0].name}</h1>
            <img className="img" src={ele.product[0].productId.img} />
            <h2>{"Price : " + ele.product[0].productId.price + " JOD"}</h2>
            <h2>{"Size :" + ele.product[0].productId.size}</h2>
            <h2>{"Rate : " + ele.product[0].productId.rate}</h2>
            <button>Remove From My Cart</button>
          </>
        );
      })} */}
      <h1>{cart2.name}</h1>
      <img className="img" src={cart2.img} />
      <h2>{"Price : " + cart2.price + " JOD"}</h2>
      <h2>{"Size :" + cart2.size}</h2>
      <h2>{"Rate : " + cart2.rate}</h2>
      <button>Remove From My Cart</button>
    </>
  );
};

export default Cart;
