import axios from "axios";
import React, { useEffect } from "react";

const Order = () => {
useEffect(()=>{
    axios.get("http://localhost:5000/cart/allmycart")
})
  return <div>order</div>

};

export default Order;
