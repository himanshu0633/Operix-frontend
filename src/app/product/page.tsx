import Link from "next/link";
import Header from "../landing/components/Header";
import Footer from "../landing/components/Footer";
import "./product.css";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Box,
  Calculator,
  CheckCircle2,
  CreditCard,
  FileText,
  Globe2,
  Megaphone,
  MessageCircle,
  Package,
  PackageCheck,
  Send,
  ShoppingCart,
  TrendingUp,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";

const moduleCards = [
  {
    icon: Box,
    title: "Product Management",
    text: "Manage your complete catalog - variants, pricing, images, SEO, and performance analytics - all in one workspace.",
    tone: "blue",
  },
  {
    icon: Warehouse,
    title: "Inventory Control",
    text: "Real-time stock visibility across warehouses. Automate purchase orders, track movement, and prevent stockouts.",
    tone: "teal",
  },
  {
    icon: ShoppingCart,
    title: "Order Management",
    text: "Centralized order hub for all channels. Process, fulfill, and ship orders with automated workflows.",
    tone: "blue",
  },
  {
    icon: Users,
    title: "Customer Management",
    text: "Build rich customer profiles. Track lifetime value, segment audiences, and deliver personalized experiences.",
    tone: "teal",
  },
  {
    icon: Calculator,
    title: "Accounting",
    text: "Automated bookkeeping, real-time P&L, and tax-ready reports. No accountant required for day-to-day operations.",
    tone: "amber",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    text: "Business intelligence across every module. Identify trends, optimize performance, and make data-driven decisions.",
    tone: "blue",
  },
];

const integrationNodes = [
  { icon: CreditCard, title: "Payment", text: "Stripe, PayPal, Square", className: "payment" },
  { icon: Truck, title: "Shipping", text: "FedEx, UPS, DHL", className: "shipping" },
  { icon: Megaphone, title: "Marketing", text: "Mailchimp, Google, Meta", className: "marketing" },
  { icon: MessageCircle, title: "Comms", text: "Slack, WhatsApp, Email", className: "comms" },
  { icon: FileText, title: "Finance", text: "QuickBooks, Xero, MYOB", className: "finance" },
];

const workflowSteps = [
  { icon: Box, label: "Add Products" },
  { icon: Warehouse, label: "Receive Inventory" },
  { icon: Globe2, label: "Publish Website" },
  { icon: Send, label: "Launch Marketing" },
  { icon: ShoppingCart, label: "Receive Orders" },
  { icon: Users, label: "Manage Customers", active: true },
  { icon: Calculator, label: "Track Finances" },
  { icon: TrendingUp, label: "Analyze Growth" },
];

export default function ProductPage() {
  return (
    <div className="landing-page product-page">
      <Header />
      <main>
        <section className="product-hero">
          <div className="lp-container product-hero-inner">
            <h1>
              Everything Your Business Needs <span>In One Place</span>
            </h1>
            <p>Join thousands of businesses that run their entire operation on Operix.</p>
            <div className="product-hero-actions">
              <Link href="/admin/dashboard" className="product-primary-btn">
                Start Free Trial <ArrowRight size={18} />
              </Link>
              <Link href="#book-demo" className="product-outline-btn">
                <Calculator size={16} /> Book Demo
              </Link>
            </div>
            <div className="product-trust-row">
              {["All 12 modules included", "No credit card required", "14-day free trial", "Cancel anytime"].map((item) => (
                <span key={item}>
                  <CheckCircle2 size={15} /> {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="product-section integrations-map-section">
          <div className="lp-container">
            <div className="product-section-heading">
              <span>Integration Ecosystem</span>
              <h2>Connects With Everything You Use</h2>
              <p>Seamless integrations across payments, shipping, marketing, communication, and accounting platforms.</p>
            </div>

            <div className="integration-map" aria-label="Operix integrations ecosystem">
              <div className="integration-orbit orbit-one" />
              <div className="integration-orbit orbit-two" />
              <div className="integration-core">
                <span className="core-icon"><PackageCheck size={22} /></span>
                <strong>Operix</strong>
              </div>
              {integrationNodes.map(({ icon: Icon, title, text, className }) => (
                <div className={`integration-card ${className}`} key={title}>
                  <span><Icon size={22} /></span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </div>
              ))}
              <div className="mini-node node-phone"><MessageCircle size={18} /></div>
              <div className="mini-node node-mail"><Send size={16} /></div>
              <div className="mini-node node-web"><Globe2 size={17} /></div>
              <div className="mini-node node-ai"><Bot size={17} /></div>
            </div>
          </div>
        </section>

        <section className="product-section ai-product-section">
          <div className="lp-container">
            <div className="product-section-heading">
              <span className="pill-label"><Bot size={14} /> AI Business Assistant</span>
              <h2>Ask Your Business Anything</h2>
              <p>Get instant answers from your business data.</p>
            </div>

            <div className="ai-console">
              <div className="ai-console-top">
                <div className="ai-agent">
                  <span><Bot size={18} /></span>
                  <div>
                    <strong>Operix AI</strong>
                    <small>Online</small>
                  </div>
                </div>
                <div className="window-dots"><i /><i /><i /></div>
              </div>
              <div className="ai-prompts">
                <button>"What was last month's profit?"</button>
                <button className="active">"Which products need restocking?"</button>
                <button>"Who are my top customers?"</button>
              </div>
              <div className="ai-chat">
                <div className="chat-bubble user">Which products need restocking?</div>
                <div className="assistant-row">
                  <span><Package size={17} /></span>
                  <div className="chat-bubble assistant">
                    3 products are below reorder threshold: Running Shoes (12 units), Wireless Headphones (8 units), and Cotton T-Shirts (5 units). Purchase orders created automatically.
                  </div>
                </div>
              </div>
              <div className="ai-input">
                <span>Ask your business anything...</span>
                <button aria-label="Send message"><Send size={20} /></button>
              </div>
            </div>
          </div>
        </section>

        <section className="product-section module-explorer-section">
          <div className="lp-container">
            <div className="product-section-heading">
              <span>Module Explorer</span>
              <h2>Explore Every Module</h2>
              <p>Hover to explore the full depth of each module.</p>
            </div>
            <div className="module-grid">
              {moduleCards.map(({ icon: Icon, title, text, tone }) => (
                <article className="module-card" key={title}>
                  <span className={`module-icon ${tone}`}><Icon size={24} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="product-section workflow-section">
          <div className="lp-container">
            <div className="product-section-heading">
              <span>How It Works</span>
              <h2>From Setup to Scale</h2>
              <p>Eight steps to a fully operational business - in one platform.</p>
            </div>
            <div className="workflow-track">
              {workflowSteps.map(({ icon: Icon, label, active }) => (
                <div className={`workflow-step ${active ? "active" : ""}`} key={label}>
                  <span><Icon size={22} /></span>
                  <small>{label}</small>
                </div>
              ))}
            </div>
            <div className="workflow-detail">
              <span className="detail-icon"><Users size={34} /></span>
              <div>
                <small>Step 6</small>
                <h3>Manage Customers</h3>
                <p>Build rich customer profiles with full purchase history, preferences, and communications. Segment and engage with precision.</p>
              </div>
              <strong>06</strong>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
