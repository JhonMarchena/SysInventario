import Footer from "../components/footer";
import Navbar from '../components/navbar';
import MainHp from "../components/mainhp";
import {Link} from 'react-router-dom';
import React from 'react'
import '../styles/homepage.css';

function HomePage(){
  return (
    <div className="BodyHP">
    <Navbar/>
    <MainHp/>
    <Link to="/">Volver al inicio</Link> 
    </div>
  )
}

export default HomePage