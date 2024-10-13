import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../../App";

const Fav = () => {
  const [fav, setFav] = useState([]);
  const { token, userId } = useContext(tokenContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/fav`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        setFav(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>My Fav</div>
    </>
  );
};

export default Fav;
