import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
  return (
    <>
    <header className="nav">
     <Link to="/Homepage" className="letternv"> Home </Link> 
     <Link to="/" className="letternv">Reports</Link>
     <Link to="/Login" className="letternv">Usuario</Link>
    </header>
    </>
  )
}

export default Navbar
