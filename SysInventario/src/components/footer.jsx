import React from 'react'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/homepage.css'


function Footer() {
  return (
    <>
    <footer className='footerhp'>
      <section className="luissc">
      <span className='namesc'>
      <h1>Luis Calderon</h1>
      <h2>Frontend Developer</h2>
      </span>
      <span className="iconsc">
      <Link to={""} className='iconlink' target='blank'><LinkedInIcon/></Link>
      <Link to={"https://github.com/LuisCal14"} className='iconlink' target='blank'><GitHubIcon/></Link>
      <Link to={"https://www.instagram.com/lacrz.14"} className='iconlink' target='blank'><InstagramIcon/></Link>
      </span>
      </section>

      <section className="jhonsc">
      <span className='namesc'>
      <h1>Jhon Marchena</h1>
      <h2>Frontend Developer</h2>
      </span>
      <span className="iconsc">
      <Link to={"https://www.linkedin.com/in/jhon-marchena-892a8928a/"} className='iconlink' target='blank'><LinkedInIcon/></Link>
      <Link to={"https://github.com/JhonMarchena"} className='iconlink' target='blank'><GitHubIcon/></Link>
      <Link to={"https://www.instagram.com/_jh0.m_"} className='iconlink' target='blank'><InstagramIcon/></Link>
      </span>
      </section>
    </footer>
    </>
  )
}

export default Footer
