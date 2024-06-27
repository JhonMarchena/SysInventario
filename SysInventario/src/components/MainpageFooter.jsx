import React from 'react'
import "../styles/App.css";
import Navbar from "../components/navbar";
import Footer from './footer';


const Mainpage = ({ Main }) => {
  return (
    <div className="BodyAU">
      <Navbar />
      <div className="divcontainer">
        <Main />
      </div>
      <Footer/>
    </div>
  )
}

export default Mainpage