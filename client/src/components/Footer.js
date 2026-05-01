// ============================================================================
// FOOTER Component — MetaMask-Inspired Dark Multi-Column Footer
// ============================================================================

import React from 'react';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">

            {/* Brand Column */}
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="footer-logo-text">Kitty's Finds</span>
                <span className="footer-logo-emoji">🎀</span>
              </div>
              <p className="footer-brand-desc">
                Ribbons, lace &amp; all things dreamy — your destination for
                coquette, Y2K &amp; fairycore fashion. Curated for girls who
                dream in pink.
              </p>
              <div className="footer-socials">
                <a href="https://www.instagram.com/kittykeyn/" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
                  <span>📱</span> Instagram
                </a>
                <a href="https://www.tiktok.com/@kittyfinds444" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="TikTok">
                  <span>🎵</span> TikTok
                </a>
                <a href="https://www.facebook.com/profile.php?id=61571478706126" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook">
                  <span>📌</span> Facebook
                </a>
              </div>
            </div>

            {/* Shop Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Shop</h4>
              <ul className="footer-links">
                <li><a href="/shop">All Collections</a></li>
                <li><a href="/shop?category=coquette">Coquette 🎀</a></li>
                <li><a href="/shop?category=y2k">Y2K ✨</a></li>
                <li><a href="/shop?category=fairycore">Fairycore 🌸</a></li>
                <li><a href="/shop">Best Sellers</a></li>
                <li><a href="/shop">New Arrivals</a></li>
              </ul>
            </div>

            {/* Help Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Help</h4>
              <ul className="footer-links">
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#shipping">Shipping Info</a></li>
                <li><a href="#returns">Returns &amp; Exchanges</a></li>
                <li><a href="#sizing">Size Guide</a></li>
                <li><a href="#track">Track My Order</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-col-title">Contact Us</h4>
              <ul className="footer-contact-list">
                <li>
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:carehew@gmail.com">carehew@gmail.com</a>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <span>0921 405 7325</span>
                </li>
                <li>
                  <span className="contact-icon">🕐</span>
                  <span>Mon–Sun, 12am – 11pm</span>
                </li>
              </ul>
              <div className="footer-badge">
                <span>🔒 Secure Checkout</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-copy">
              © 2026 Kitty's Finds. All rights reserved. Made with 💕
            </p>
            <div className="footer-legal-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="footer-dot">·</span>
              <a href="#terms">Terms of Service</a>
              <span className="footer-dot">·</span>
              <a href="#cookies">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
