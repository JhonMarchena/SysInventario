import React from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./pages/Login.jsx";
import { App } from "./App.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import mainhp from "./components/mainhp.jsx";
import MainAU from "./components/mainau.jsx";
import MainpageFooter from "./components/MainpageFooter.jsx"
import MainpageNavbar from "./components/MainpageNavbar.jsx"

//import './styles/index.css' (ESTILOS MAIN DE LA PAGINA)

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainpageFooter Main={App} />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/HomePage" element={<MainpageNavbar Main={mainhp} />} />
      <Route path="/AboutUs" element={<MainpageFooter Main={MainAU} />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>
);
