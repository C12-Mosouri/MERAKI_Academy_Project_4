import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../../App";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const { token, userId } = useContext(tokenContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setCart(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>My Cart</div>
      {cart.map((ele) => {
        console.log(ele.product[0].productId);
        return (
          <>
            <h1>{ele.product[0].productId.name}</h1>
            <img className="img" src={ele.product[0].productId.img} />
            <h2>{"Price : " + ele.product[0].productId.price + " JOD"}</h2>
            <h2>{"Size :" + ele.product[0].productId.size}</h2>
            <h2>{"Rate : " + ele.product[0].productId.rate}</h2>
            <button>Remove From My Cart</button>
          </>
        );
      })}
    </>
  );
};

export default Cart;
