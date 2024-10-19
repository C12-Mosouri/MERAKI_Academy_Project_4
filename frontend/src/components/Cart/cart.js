import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate()
  const [cart, setCart] = useState([]);
  const [cartId, setCartId] = useState([]);
  const { token, userId } = useContext(tokenContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.Product);
        setCart(res.data.Product);
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
        console.log(ele.product[0].quantity);
        console.log(ele._id);
        // setCartId(ele._id);

        return (
          <>
             <h1>{ele.product[0].name}</h1>
            <img className="img" src={ele.product[0].productId.img} />
            <h2>{"Price : " + ele.product[0].productId.price + " JOD"}</h2>
            <h2>{"Size :" + ele.product[0].productId.size}</h2>
            <h2>{"Rate : " + ele.product[0].productId.rate}</h2> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-cart-dash"
              viewBox="0 0 16 16"
              onClick={() => {
                // setAddToCart(true);
                axios
                  .delete(`http://localhost:5000/cart`, {
                    data: { cartId: ele._id },
                  })
                  .then((res) => {
                    console.log(res);
                    setCart(
                      cart.filter((elem) => {
                        return elem._id !== ele._id;
                      })
                    );
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cash" viewBox="0 0 16 16"
            onClick={()=>{
              navigate("/order")
            }}>
  <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"/>
</svg>
          </>
        );
      })}
      {/*   <h1>{cart2.name}</h1>
      <img className="img" src={cart2.img} />
      <h2>{"Price : " + cart2.price + " JOD"}</h2>
      <h2>{"Size :" + cart2.size}</h2>
      <h2>{"Rate : " + cart2.rate}</h2>
      <button>Remove From My Cart</button> */}
    </>
  );
};

export default Cart;
