import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="jhonsc">
          <span className="namesc">
            <h1>Jhon Marchena</h1>
            <h2>Frontend Developer</h2>
          </span>
          <span className="iconsc">
            <Link
              to={"https://www.linkedin.com/in/jhon-marchena-892a8928a/"}
              className="iconlink"
              target="blank"
            >
              <LinkedInIcon />
            </Link>
            <Link
              to={"https://github.com/JhonMarchena"}
              className="iconlink"
              target="blank"
            >
              <GitHubIcon />
            </Link>
            <Link
              to={"https://www.instagram.com/_jh0.m_"}
              className="iconlink"
              target="blank"
            >
              <InstagramIcon />
            </Link>
          </span>
        </section>
      </footer>
    </>
  );
}

export default Footer;
