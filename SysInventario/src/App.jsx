import { useState } from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import './App.css'

export function App() {


  return (
    <>
      
        <ul>
          <li>
            <Link to='/Login'>Ir al Login</Link>
          </li>
          
          <li>
            <Link to='/Dashboard'>Ir al Dashboard</Link>
          </li>

          <li>
            
          </li>

          {/*
          <li>
            <Link to='/Landing'>Ir al Landing</Link>
          </li>
          */}

        </ul>
    </>
  )
}

