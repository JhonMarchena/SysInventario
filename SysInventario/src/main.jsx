import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './pages/Login.jsx'
import { App } from './App.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { createBrowserRouter, Route, createRoutesFromElements,RouterProvider } from 'react-router-dom'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
    <Route path='/' element={<App />}/>
    <Route path='/Login' element={<Login />} />
    <Route path='/Dashboard' element={<Dashboard />} />
    
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>

)
