import Link from "next/link";
import "./Header.css";
import { BRAND_NAME } from "../../config/branding";


export default function Header() {
  return (
    <header className="lp-header">
      <div className="lp-container header-inner">
        <Link href="/" className="logo" style={{ display: "flex", alignItems: "center" }}>
          <img 
            src="/logo-full.png" 
            alt={`${BRAND_NAME} Logo`} 
            style={{ 
              height: "44px", 
              width: "auto",
              objectFit: "contain"
            }} 
          />
        </Link>

        <nav className="lp-nav">
          <Link href="/product" className="nav-link">Product</Link>
          <Link href="/solutions" className="nav-link">Solutions</Link>
          <Link href="/pricing" className="nav-link">Pricing</Link>
          <Link href="/#resources" className="nav-link">Resources</Link>
        </nav>

        <div className="header-actions">
          <Link href="/admin/dashboard" className="btn-link">Login</Link>
          <Link href="#book-demo" className="btn-link">Book Demo</Link>
          <Link href="/admin/dashboard" className="btn-primary">
            Start Free Trial
          </Link>
        </div>
      </div>
    </header>
  );
}
