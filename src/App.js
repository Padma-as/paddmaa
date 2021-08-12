import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
// import "./Get.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { postUser } from "./actions";

const Post = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const postData = (e) => {
    try {
      const data = { name: name, city: city, age: parseInt(age) };
      axios
        .post("http://localhost:9090/employees", data)
        .then(console.log("data", data));
      e.preventDefault();
    } catch (error) {
      console.log(error);
    }

    dispatch(postUser);
    setAge("");
    setName("");
    setCity("");
  };
  return (
    <div>
      <CssBaseline />
      <div className="adminPage">
        <p>Post Method</p>
        <form className="ui form" onSubmit={postData}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="name"
            />
          </div>
          <div className="field">
            <label>City</label>{" "}
            <input
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              city="city"
            />
          </div>
          <div className="field">
            <label>Age</label>
            <input
              type="text"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              age="age"
            />
          </div>
          <button className="ui button blue"> SUBMIT</button>
        </form>
      </div>
    </div>
  );
};
export default Post;
