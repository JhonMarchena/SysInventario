import Navbar from '../components/navbar';
import MainHp from "../components/mainhp";
import React from 'react'
import '../styles/homepage.css';

function HomePage(){
  return (
    <div className="BodyHP">
    <Navbar/>
    <MainHp/>
    </div>
  )
}

export default HomePage