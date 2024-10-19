import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./subcategory.css";

const SubCategorys = () => {
  const navigate = useNavigate();
  const [subCategory, setSubCategory] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState("");
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/category/sub/${id}`)
      .then((res) => {
        console.log(res.data.result);
        setSubCategory(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>subcategory</div>
      {subCategory.map((ele) => {
        return (
          <>
            <h1
              onClick={() => {
                const id = ele._id;
                setSubCategoryId(ele._id);
                navigate(`/product/${id}`);
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

export default SubCategorys;
