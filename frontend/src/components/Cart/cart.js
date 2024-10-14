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
        console.log(res);
        // setCart(res.data.Category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>My Cart</div>
      {cart.map((ele) => {
        console.log(ele.product);
        return (
          <>
            {/* <h1>{ele.productId.name}</h1>
            <img className="img" src={ele.productId.img} />
            <h2>{"Price : " + ele.productId.price + " JOD"}</h2>
            <h2>{"Size :" + ele.productId.size}</h2>
            <h2>{"Rate : " + ele.productId.rate}</h2> */}
          </>
        );
      })}
    </>
  );
};

export default Cart;
