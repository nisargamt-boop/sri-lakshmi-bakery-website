import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sri Lakshmi Bakery</h3>
            <p>Freshly baked happiness, crafted with passion and love.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-icon" title="Facebook">f</a>
              <a href="#" className="social-icon" title="Instagram">📷</a>
              <a href="#" className="social-icon" title="Twitter">𝕏</a>
              <a href="#" className="social-icon" title="LinkedIn">in</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Hours</h4>
            <p>Mon - Fri: 8:00 AM - 9:00 PM<br />
               Sat - Sun: 9:00 AM - 10:00 PM</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sri Lakshmi Bakery. All rights reserved.</p>
          <p>Made with 🍰 and ❤️</p>
        </div>
      </div>
    </footer>
  );
}
