import React from "react";
import logo from "./../../assets/images/logo.png";
import loading from "./../../assets/images/loading.jpg";
import "./Home.css"

export const Home = () => {
  return (
    <div className="container">
      <img className="logo" src={logo} alt="L2M" />
      <img className="loading" src={loading} alt="Loading" />
    </div>
  );
};
