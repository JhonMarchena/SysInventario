import Footer from "../components/footer";
import Navbar from '../components/navbar';
import MainHp from "../components/mainhp";
import React from 'react'
import '../styles/homepage.css';

function HomePage(){
  return (
    <div className="BodyHP">
    <Navbar/>
    <MainHp/>
    <Footer/>
    </div>
  )
}

export default HomePage