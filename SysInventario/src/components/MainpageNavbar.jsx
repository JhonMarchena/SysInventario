import React from "react";
import "../styles/App.css";
import Navbar from "../components/navbar";
import Footer from "./footer";

const MainpageNavbar = ({ Main }) => {
  return (
    <div className="BodyAU">
      <Navbar />
      <Main />
    </div>
  );
};

export default MainpageNavbar;
