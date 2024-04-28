import Footer from "../components/footer";
import Navbar from '../components/navbar';
import {Link} from 'react-router-dom'
import React from 'react'
import '../styles/homepage.css';

function HomePage(){
  return (
    <>
    <Navbar/>
    <Link to="/">Volver al inicio</Link> 
    </>
  )
}

export default HomePage