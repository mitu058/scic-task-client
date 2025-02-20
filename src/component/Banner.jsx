import React from "react";
import banner from "../assets/control-over-the-time-the-concept-of-time-.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="bg-cover  bg-center h-[600px]  mb-20"
      style={{ backgroundImage: `url(${banner})` }}
    >
    
    </div>
  );
};

export default Banner;
