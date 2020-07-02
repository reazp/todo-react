import React from "react";
import Image from "./Image";

const HomePage = () => {
  return (
    <div>
      <Image
        imageUrl="https://via.placeholder.com/300.png/09f/fff"
        alt="React"
        width="120"
      />
      <h1>Welcome to Todo List Application</h1>
    </div>
  );
};

export default HomePage;
