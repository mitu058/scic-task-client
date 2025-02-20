import React from "react";
import banner from "../assets/effective-workflow.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="bg-cover  bg-center h-screen  mb-20"
      style={{ backgroundImage: `url(${banner})` }}
    >
    
    </div>
  );
};

export default Banner;
