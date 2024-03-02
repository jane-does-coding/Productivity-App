"use client";
import React from "react";
import axios from "axios";

const page = () => {
  const postTask = () => {
    axios
      .post("/api/create", { data: "Hello" })
      .then(() => {
        console.log("then");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("not loading");
      });
  };

  return (
    <div>
      <button onClick={postTask}>POST</button>
    </div>
  );
};

export default page;
