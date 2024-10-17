import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { tokenContext } from "../../App";

const Profile = () => {
  const [myInfo, setMyInfo] = useState("");
  const { token, userId } = useContext(tokenContext);
  console.log(userId);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data.result);
        setMyInfo(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>My Profile</div>
      <h1>{"My Name : " + myInfo.firstName + " " + myInfo.lastName}</h1>
      <h4>{"My Age : " + myInfo.age}</h4>
      <h4>{"My Country : " + myInfo.country}</h4>
      <h4>{"My Email : " + myInfo.email}</h4>
    </>
  );
};

export default Profile;
