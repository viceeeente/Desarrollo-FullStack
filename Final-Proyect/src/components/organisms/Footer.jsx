import React from "react";
import FacebookLogo from "../../assets/icons/FacebookLogo.png";
import InstagramLogo from "../../assets/icons/IgLogo.png";
import WhatsappLogo from "../../assets/icons/wspLogo.png";
import TwitterLogo from "../../assets/icons/twitterLogo.png";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Level-UP GAMER. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={FacebookLogo} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={InstagramLogo} alt="Instagram" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src={TwitterLogo} alt="Twitter" />
          </a>
          <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer">
            <img src={WhatsappLogo} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </footer>
  );
}
