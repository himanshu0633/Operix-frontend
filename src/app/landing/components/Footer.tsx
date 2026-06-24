import Link from "next/link";
import "./Footer.css";
import { BRAND_NAME, BRAND_EMAIL, BRAND_COPYRIGHT } from "../../config/branding";

import { Twitter, Linkedin, Github, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="lp-footer">
      <div className="lp-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ display: "flex", alignItems: "center" }}>
              <img 
                src="/logo-full.png" 
                alt={`${BRAND_NAME} Logo`} 
                style={{ 
                  height: "40px", 
                  width: "auto",
                  objectFit: "contain"
                }} 
              />
            </Link>
            <p className="footer-desc">
              The complete business operating system for modern companies.
            </p>
            <div className="social-links">
              <Link href="https://twitter.com" target="_blank" className="social-icon" aria-label="Twitter">
                <Twitter size={16} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={16} />
              </Link>
              <Link href="https://github.com" target="_blank" className="social-icon" aria-label="GitHub">
                <Github size={16} />
              </Link>
              <Link href="https://youtube.com" target="_blank" className="social-icon" aria-label="YouTube">
                <Youtube size={16} />
              </Link>
              <Link href={`mailto:${BRAND_EMAIL}`} className="social-icon" aria-label="Email">
                <Mail size={16} />
              </Link>
            </div>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4 className="footer-col-title">Product</h4>
            <ul className="footer-links">
              <li><Link href="#product-management" className="footer-link">Product Management</Link></li>
              <li><Link href="#inventory" className="footer-link">Inventory</Link></li>
              <li><Link href="#website-builder" className="footer-link">Website Builder</Link></li>
              <li><Link href="#marketing-campaigns" className="footer-link">Marketing Studio</Link></li>
              <li><Link href="#marketing-campaigns" className="footer-link">Campaigns</Link></li>
              <li><Link href="#accounting-analytics" className="footer-link">Accounting</Link></li>
              <li><Link href="#accounting-analytics" className="footer-link">Analytics</Link></li>
              <li><Link href="#product" className="footer-link">Reports</Link></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="footer-col-title">Solutions</h4>
            <ul className="footer-links">
              <li><Link href="#retail" className="footer-link">Retail Businesses</Link></li>
              <li><Link href="#ecommerce" className="footer-link">E-commerce</Link></li>
              <li><Link href="#wholesale" className="footer-link">Wholesale</Link></li>
              <li><Link href="#dropshipping" className="footer-link">Dropshipping</Link></li>
              <li><Link href="#services" className="footer-link">Service Businesses</Link></li>
              <li><Link href="#multilocation" className="footer-link">Multi-location</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><Link href="#about" className="footer-link">About Us</Link></li>
              <li><Link href="#careers" className="footer-link">Careers</Link></li>
              <li><Link href="#blog" className="footer-link">Blog</Link></li>
              <li><Link href="#press" className="footer-link">Press Kit</Link></li>
              <li><Link href="#contact" className="footer-link">Contact Us</Link></li>
              <li><Link href="#partners" className="footer-link">Partners</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-links">
              <li><Link href="#docs" className="footer-link">Documentation</Link></li>
              <li><Link href="#api" className="footer-link">API Reference</Link></li>
              <li><Link href="#help" className="footer-link">Help Center</Link></li>
              <li><Link href="#community" className="footer-link">Community</Link></li>
              <li><Link href="#status" className="footer-link">Status</Link></li>
              <li><Link href="#changelog" className="footer-link">Changelog</Link></li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-links">
              <li><Link href="#privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link href="#terms" className="footer-link">Terms of Service</Link></li>
              <li><Link href="#cookies" className="footer-link">Cookie Policy</Link></li>
              <li><Link href="#security" className="footer-link">Security</Link></li>
              <li><Link href="#gdpr" className="footer-link">GDPR</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            &copy; {BRAND_COPYRIGHT} All rights reserved.
          </div>
          <div className="footer-legal-links">
            <Link href="#privacy" className="footer-link">Privacy Policy</Link>
            <Link href="#terms" className="footer-link">Terms of Service</Link>
            <Link href="#contact" className="footer-link">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
