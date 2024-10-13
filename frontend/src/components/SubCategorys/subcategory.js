import React, { useEffect, useState } from "react";
import axios from "axios";

const SubCategorys = () => {
  const [subCategory, setSubCategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/category/sub")
      .then((res) => {
        console.log(res.data.Category);
        // setSubCategory(res.data.Category);
        const subCategorys = res.data.Category;
        subCategorys.map((ele) => {
          console.log(ele);
        });
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
            <h1>{ele.name}</h1>
            <img className="img" src={ele.img} />
          </>
        );
      })}
    </>
  );
};

export default SubCategorys;
