import React, { useEffect, useState } from "react";
import axios from "axios";

const SubCategorys = () => {
  const [subCategory, setSubCategory] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/category/sub")
      .then((res) => {
        console.log(res);
        // setSubCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
    <>
      <div>subcategory</div>
    </>
  );
};

export default SubCategorys;
