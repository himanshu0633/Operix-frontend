import Link from "next/link";
import "./Header.css";


export default function Header() {
  return (
    <header className="lp-header">
      <div className="lp-container header-inner">
        <Link href="/" className="logo">
          <div className="logo-icon">
            <span className="logo-dot"></span>
            <span className="logo-dot"></span>
            <span className="logo-dot"></span>
            <span className="logo-dot"></span>
          </div>
          <span>Operix</span>
        </Link>

        <nav className="lp-nav">
          <Link href="#product" className="nav-link">Product</Link>
          <Link href="#solutions" className="nav-link">Solutions</Link>
          <Link href="#pricing" className="nav-link">Pricing</Link>
          <Link href="#resources" className="nav-link">Resources</Link>
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
