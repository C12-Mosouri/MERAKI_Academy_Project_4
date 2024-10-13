import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./category.css";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  // const [categoryImg, setCategoryImg] = useState("");
  useEffect(() => {
    console.log("testFromCaregotys");
    axios
      .get("http://localhost:5000/category")
      .then((res) => {
        // console.log(res.data);
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
            <h1
              onClick={() => {
                const id = ele._id;
               /*  axios
                  .get(`http://localhost:5000/category/sub`)
                  .then((res) => {
                    console.log(res.data);
                    const subCategoryId = res.data.Category;
                    subCategoryId.map((ele)=>{
                      // console.log(ele.categoryId);
                      // console.log(id);
                      if (id === ele.categoryId){
                        console.log(ele);
                        return ele
                      }
                    })
                  })
                  .catch((err) => {
                    console.log(err);
                  }); */
                // console.log(ele._id);
                // console.log(ele);
                navigate(`/category/sub/`);
              }}
            >
              {ele.name}
            </h1>
            <img className="img" src={ele.img} />
          </>
        );
      })}
    </>
  );
};

export default Category;
