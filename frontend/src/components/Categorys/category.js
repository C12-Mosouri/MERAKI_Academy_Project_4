import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./category.css";

const Category = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImg, setCategoryImg] = useState("");
  useEffect(() => {
    console.log("testFromCaregotys");
    axios
      .get("http://localhost:5000/category")
      .then((res) => {
        console.log(res.data);
        setCategoryName(res.data.Category[0].name);
        setCategoryImg(res.data.Category[0].img);
        console.log(categoryImg);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>category</div>
      <h1>{categoryName}</h1>
      {console.log(categoryName)}
      <img className="img" src={categoryImg} />
    </>
  );
};

export default Category;
