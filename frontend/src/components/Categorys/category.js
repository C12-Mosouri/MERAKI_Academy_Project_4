import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import "./category.css";
import { useNavigate } from "react-router-dom";
export const CategoryContext = createContext();
const Category = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  // const [categoryImg, setCategoryImg] = useState("");
  useEffect(() => {
    console.log("testFromCaregotys");
    axios
      .get("http://localhost:5000/category")
      .then((res) => {
        // console.log(res.data);
        setCategory(res.data.Category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {/* <div>category</div> */}
      {category.map((ele, i) => {
        return (
          <>
            <div
              className="category-container"
              onClick={() => {
                const id = ele._id;
                setCategoryId(ele._id);
                navigate(`/category/sub/${id}`);
              }}
            >
              <div className="category-card">
                <img src={ele.img} />
                <h3>{ele.name}</h3>
              </div>
            </div>
          </>
        );
      })}
      
      
    </>
  );
};

export default Category;
