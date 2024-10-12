import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then((res) => {
        console.log(res.data.Category);
        setProduct(res.data.Category);
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
            <h1>{ele.subCategoryId.name}</h1>
            <h1>{ele.name}</h1>
            <h2>{ele.price + " : JOD"}</h2>
            <img className="img" src={ele.img} />
            <h3>{"Size : " + ele.size}</h3>
            <h3>{"Rate : "+ele.rate}</h3>
          </>
        );
      })}
    </>
  );
};

export default Product;
