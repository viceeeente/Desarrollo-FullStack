import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Level-UP GAMER. Todos los derechos reservados.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145812.png" alt="Twitter" />
          </a>
          <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </footer>
  );
}
