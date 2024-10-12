import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./category.css";

const Category = () => {
  const [category, setCategory] = useState([]);
  // const [categoryImg, setCategoryImg] = useState("");
  useEffect(() => {
    console.log("testFromCaregotys");
    axios
      .get("http://localhost:5000/category")
      .then((res) => {
        console.log(res.data);
        setCategory(res.data.Category);
        // setCategoryImg(res.data.Category);
        // console.log(categoryImg)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>category</div>
      {category.map((ele, i) => {
        return (
          <>
            <h1>{ele.name}</h1>
            <img className="img" src={ele.img} />
          </>
        );
      })}
    </>
  );
};

export default Category;
