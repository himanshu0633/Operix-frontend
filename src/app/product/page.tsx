"use client";

import { useState, useEffect } from "react";
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
  CalendarDays,
  CheckCircle2,
  CreditCard,
  Database,
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
    text: "Manage your complete catalog — variants, pricing, images, SEO, and performance analytics — all in one workspace.",
    tone: "blue",
    features: [
      "Unlimited SKUs with variant management",
      "Bulk import/export via CSV or API",
      "Supplier linking and cost tracking",
      "Product performance dashboards",
    ],
    screenshotText: "PRODUCT MODULE SCREENSHOT",
    exploreLink: "/admin/products",
  },
  {
    icon: Warehouse,
    title: "Inventory Control",
    text: "Real-time stock visibility across warehouses. Automate purchase orders, track movement, and prevent stockouts.",
    tone: "teal",
    features: [
      "Multi-location stock tracking",
      "Automated reorder point alerts",
      "Stock transfer between locations",
      "FIFO/LIFO cost accounting",
    ],
    screenshotText: "INVENTORY MODULE SCREENSHOT",
    exploreLink: "/admin/inventory",
  },
  {
    icon: ShoppingCart,
    title: "Order Management",
    text: "Centralized order hub for all channels. Process, fulfill, and ship orders with automated workflows.",
    tone: "blue",
    features: [
      "Unified order inbox (all channels)",
      "Automated fulfillment routing",
      "Shipping label generation",
      "Returns and refund automation",
    ],
    screenshotText: "ORDERS MODULE SCREENSHOT",
    exploreLink: "/admin/orders",
  },
  {
    icon: Users,
    title: "Customer Management",
    text: "Build rich customer profiles. Track lifetime value, segment audiences, and deliver personalized experiences.",
    tone: "teal",
    features: [
      "360° customer profiles",
      "LTV and cohort analysis",
      "Smart segmentation builder",
      "Communication history timeline",
    ],
    screenshotText: "CUSTOMERS MODULE SCREENSHOT",
    exploreLink: "/admin/customers",
  },
  {
    icon: Calculator,
    title: "Accounting",
    text: "Automated bookkeeping, real-time P&L, and tax-ready reports. No accountant required for day-to-day operations.",
    tone: "amber",
    features: [
      "Automated transaction categorization",
      "Real-time P&L and balance sheet",
      "Multi-currency support",
      "Tax calculation and reporting",
    ],
    screenshotText: "ACCOUNTING MODULE SCREENSHOT",
    exploreLink: "/admin/dashboard",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    text: "Business intelligence across every module. Identify trends, optimize performance, and make data-driven decisions.",
    tone: "blue",
    features: [
      "Cross-module data correlation",
      "Custom report builder",
      "Scheduled report distribution",
      "AI-powered trend detection",
    ],
    screenshotText: "ANALYTICS MODULE SCREENSHOT",
    exploreLink: "/admin/dashboard",
  },
];

const promptData = [
  {
    prompt: "What was last month's profit?",
    response: "Last month's net profit was $24,850, showing a 12% increase month-over-month. Gross margin remained steady at 64%.",
  },
  {
    prompt: "Which products need restocking?",
    response: "3 products are below reorder threshold: Running Shoes (12 units), Wireless Headphones (8 units), and Cotton T-Shirts (5 units). Purchase orders created automatically.",
  },
  {
    prompt: "Who are my top customers?",
    response: "Your top customers by lifetime value are: 1. Sarah Jenkins ($4,250), 2. Michael Chen ($3,890), and 3. David Rodriguez ($3,420). All have active loyalty status.",
  },
];

const integrationNodes = [
  { icon: CreditCard, title: "Payment", text: "Stripe, PayPal, Square", className: "payment", tone: "blue" },
  { icon: Truck, title: "Shipping", text: "FedEx, UPS, DHL", className: "shipping", tone: "teal" },
  { icon: Megaphone, title: "Marketing", text: "Mailchimp, Google, Meta", className: "marketing", tone: "amber" },
  { icon: MessageCircle, title: "Comms", text: "Slack, WhatsApp, Email", className: "comms", tone: "blue" },
  { icon: FileText, title: "Finance", text: "QuickBooks, Xero, MYOB", className: "finance", tone: "teal" },
];

const integrationLinks = [
  { x2: 280, y2: 70 },   // Payment (top)
  { x2: 480, y2: 215 },  // Shipping (top-right)
  { x2: 404, y2: 450 },  // Marketing (bottom-right)
  { x2: 156, y2: 450 },  // Comms (bottom-left)
  { x2: 80, y2: 215 }   // Finance (top-left)
];

const workflowSteps = [
  {
    icon: Box,
    label: "Add Products",
    number: "01",
    tone: "blue",
    description: "Import your catalog, set up variants, pricing, and images. Organize into categories and collections ready for selling.",
  },
  {
    icon: Warehouse,
    label: "Receive Inventory",
    number: "02",
    tone: "teal",
    description: "Log stock arrivals from suppliers, set reorder thresholds, and let Operix track stock levels automatically across all channels.",
  },
  {
    icon: Globe2,
    label: "Publish Website",
    number: "03",
    tone: "blue",
    description: "Use the AI website builder to generate your storefront in minutes. Connect products, customize layout, and publish live.",
  },
  {
    icon: Send,
    label: "Launch Marketing",
    number: "04",
    tone: "amber",
    description: "Create AI-generated campaigns, schedule email sequences, run ads, and track performance — all from one dashboard.",
  },
  {
    icon: ShoppingCart,
    label: "Receive Orders",
    number: "05",
    tone: "blue",
    description: "Orders flow in from your website, marketplaces, and sales reps into a unified order hub. Process, fulfill, and ship effortlessly.",
  },
  {
    icon: Users,
    label: "Manage Customers",
    number: "06",
    tone: "teal",
    description: "Build rich customer profiles with full purchase history, preferences, and communications. Segment and engage with precision.",
  },
  {
    icon: Calculator,
    label: "Track Finances",
    number: "07",
    tone: "amber",
    description: "Every transaction is automatically categorized. View real-time P&L, cash flow, and prepare tax reports without manual effort.",
  },
  {
    icon: TrendingUp,
    label: "Analyze Growth",
    number: "08",
    tone: "blue",
    description: "Deep analytics across every module. Understand what drives revenue, where you lose margin, and where to focus next.",
  },
];

const heroNodes = [
  { icon: Package, label: "Products", className: "hero-node-products" },
  { icon: Warehouse, label: "Inventory", className: "hero-node-inventory" },
  { icon: Globe2, label: "Website", className: "hero-node-website" },
  { icon: Megaphone, label: "Marketing", className: "hero-node-marketing" },
  { icon: ShoppingCart, label: "Orders", className: "hero-node-orders" },
  { icon: Users, label: "Customers", className: "hero-node-customers" },
  { icon: Calculator, label: "Accounting", className: "hero-node-accounting" },
  { icon: BarChart3, label: "Analytics", className: "hero-node-analytics" },
];

const heroDots = [
  { className: "dot-products", tone: "blue" },
  { className: "dot-inventory", tone: "teal" },
  { className: "dot-website", tone: "blue" },
  { className: "dot-marketing", tone: "amber" },
  { className: "dot-orders", tone: "blue" },
  { className: "dot-customers", tone: "teal" },
  { className: "dot-accounting", tone: "amber" },
  { className: "dot-analytics", tone: "blue" },
];

export default function ProductPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = workflowSteps[activeIndex];
  const ActiveIcon = activeStep.icon;

  const [hoveredIntegrationIndex, setHoveredIntegrationIndex] = useState<number | null>(null);

  const [selectedPrompt, setSelectedPrompt] = useState(1);
  const [chatMessages, setChatMessages] = useState<{ sender: "user" | "assistant"; text: string; isTyping?: boolean }[]>([]);

  useEffect(() => {
    let isCancelled = false;
    setChatMessages([]);

    const timer1 = setTimeout(() => {
      if (isCancelled) return;
      setChatMessages([
        { sender: "user", text: promptData[selectedPrompt].prompt },
        { sender: "assistant", text: "", isTyping: true },
      ]);

      const timer2 = setTimeout(() => {
        if (isCancelled) return;
        setChatMessages((prev) => [
          prev[0],
          { sender: "assistant", text: "", isTyping: false },
        ]);

        const responseText = promptData[selectedPrompt].response;
        let currentIdx = 0;

        const typingInterval = setInterval(() => {
          if (isCancelled) {
            clearInterval(typingInterval);
            return;
          }
          currentIdx += 3;
          if (currentIdx >= responseText.length) {
            setChatMessages((prev) => [
              prev[0],
              { sender: "assistant", text: responseText, isTyping: false },
            ]);
            clearInterval(typingInterval);
          } else {
            setChatMessages((prev) => [
              prev[0],
              { sender: "assistant", text: responseText.slice(0, currentIdx), isTyping: false },
            ]);
          }
        }, 20);
      }, 1000);
    }, 400);

    return () => {
      isCancelled = true;
      clearTimeout(timer1);
    };
  }, [selectedPrompt]);

  return (
    <div className="landing-page product-page">
      <Header />
      <main>
        <section className="product-hero">
          <div className="lp-container product-hero-inner">
            <div className="product-hero-copy">
              <span className="product-hero-badge"><i /> Platform Overview</span>
              <h1>
                One Platform. <span>Every Business</span> Operation.
              </h1>
              <p>Manage products, inventory, websites, marketing, orders, customers, accounting, and analytics from a unified workspace.</p>
              <div className="product-hero-actions">
                <Link href="/admin/dashboard" className="product-primary-btn">
                  Start Free Trial <ArrowRight size={18} />
                </Link>
                <Link href="#book-demo" className="product-outline-btn">
                  Book Demo
                </Link>
              </div>
              <div className="product-trust-row">
                {["No setup required", "All modules included", "14-day free trial"].map((item) => (
                  <span key={item}>
                    <CheckCircle2 size={15} /> {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="product-hero-visual" aria-label="Operix unified business modules">
              <div className="hero-orbit hero-orbit-outer" />
              <div className="hero-orbit hero-orbit-inner" />
              <div className="hero-axis hero-axis-vertical" />
              <div className="hero-axis hero-axis-horizontal" />
              <div className="hero-axis hero-axis-diagonal-one" />
              <div className="hero-axis hero-axis-diagonal-two" />
              <div className="product-hero-core">
                <span><PackageCheck size={21} /></span>
                <strong>Operix</strong>
              </div>
              {heroNodes.map(({ icon: Icon, label, className }) => (
                <div className={`product-hero-node ${className}`} key={label}>
                  <span><Icon size={21} /></span>
                  <strong>{label}</strong>
                </div>
              ))}
              {heroDots.map(({ className, tone }) => (
                <div className={`visual-dot ${className} tone-${tone}`} key={className}>
                  <span className="visual-particle visual-particle-one" />
                  <span className="visual-particle visual-particle-two" />
                  <span className="visual-particle visual-particle-three" />
                  <span className="visual-particle visual-particle-four" />
                  <span className="visual-particle visual-particle-five" />
                </div>
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
              <div className="workflow-line-bg" />
              <div
                className={`workflow-line-active tone-${activeStep.tone}`}
                style={{ width: `calc(${(activeIndex / 7) * 87.5}%)` }}
              />
              {workflowSteps.map((step, idx) => {
                const StepIcon = step.icon;
                const isActive = idx === activeIndex;
                return (
                  <div
                    className={`workflow-step ${isActive ? "active" : ""} tone-${step.tone}`}
                    key={step.label}
                    onMouseEnter={() => setActiveIndex(idx)}
                    style={{ cursor: "pointer" }}
                  >
                    <span><StepIcon size={22} /></span>
                    <small>{step.label}</small>
                  </div>
                );
              })}
            </div>
            <div
              key={activeIndex}
              className={`workflow-detail tone-${activeStep.tone} workflow-detail-animate`}
            >
              <span className="detail-icon"><ActiveIcon size={34} /></span>
              <div>
                <small>Step {activeIndex + 1}</small>
                <h3>{activeStep.label}</h3>
                <p>{activeStep.description}</p>
              </div>
              <strong>{activeStep.number}</strong>
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
              {moduleCards.map(({ icon: Icon, title, text, tone, features, screenshotText, exploreLink }) => (
                <article className={`module-card tone-${tone}`} key={title}>
                  <span className={`module-icon ${tone}`}><Icon size={24} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="module-expanded-content">
                    <ul className="module-features">
                      {features.map((feature, fIdx) => (
                        <li key={fIdx}>{feature}</li>
                      ))}
                    </ul>
                    <div className="module-screenshot">
                      <Icon size={20} />
                      <span>{screenshotText}</span>
                    </div>
                    <Link href={exploreLink} className="module-explore-link">
                      Explore {title} <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
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
                {promptData.map((data, idx) => (
                  <button
                    key={idx}
                    className={selectedPrompt === idx ? "active" : ""}
                    onClick={() => setSelectedPrompt(idx)}
                  >
                    "{data.prompt}"
                  </button>
                ))}
              </div>
              <div className="ai-chat">
                {chatMessages.map((msg, idx) => {
                  if (msg.sender === "user") {
                    return (
                      <div key={idx} className="chat-bubble user message-fade-in">
                        {msg.text}
                      </div>
                    );
                  } else {
                    return (
                      <div key={idx} className="assistant-row message-fade-in">
                        <span><Package size={17} /></span>
                        <div className="chat-bubble assistant" style={{ position: "relative" }}>
                          {/* Invisible full text placeholder to force parent to full height */}
                          <span style={{ visibility: "hidden", display: "block" }}>
                            {promptData[selectedPrompt].response}
                          </span>
                          {msg.isTyping ? (
                            /* Absolute positioned typing indicator overlay */
                            <div className="typing-indicator" style={{ position: "absolute", top: "16px", left: "19px" }}>
                              <span />
                              <span />
                              <span />
                            </div>
                          ) : (
                            /* Visible typing text overlay */
                            <span style={{ position: "absolute", top: "16px", left: "19px", right: "19px", display: "block" }}>
                              {msg.text}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="ai-input">
                <span>Ask your business anything...</span>
                <button aria-label="Send message"><Send size={20} /></button>
              </div>
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
              
              {/* Dynamic SVG Connection Lines */}
              <svg className="integration-lines-svg" viewBox="0 0 560 560">
                {integrationLinks.map((link, idx) => {
                  const targetNode = integrationNodes[idx];
                  const dotColor = 
                    targetNode.tone === "blue" ? "var(--product-blue)" : 
                    targetNode.tone === "teal" ? "var(--product-teal)" : 
                    "var(--product-amber)";
                  return (
                    <g key={idx}>
                      <line
                        x1="280"
                        y1="280"
                        x2={link.x2}
                        y2={link.y2}
                        className={`integration-line tone-${targetNode.tone}`}
                      />
                      <circle r="4.5" fill={dotColor}>
                        <animate attributeName="cx" from="280" to={link.x2} dur="3s" begin={`${idx * 0.6}s`} repeatCount="indefinite" />
                        <animate attributeName="cy" from="280" to={link.y2} dur="3s" begin={`${idx * 0.6}s`} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;1;0" keyTimes="0;0.98;1" dur="3s" begin={`${idx * 0.6}s`} repeatCount="indefinite" />
                      </circle>
                    </g>
                  );
                })}
              </svg>

              <div className="integration-core">
                <span className="core-icon"><PackageCheck size={22} /></span>
                <strong>Operix</strong>
              </div>
              
              {integrationNodes.map(({ icon: Icon, title, text, className, tone }, idx) => {
                const isActive = hoveredIntegrationIndex === idx;
                return (
                  <div
                    className={`integration-card ${className} tone-${tone} ${isActive ? "active" : ""}`}
                    key={title}
                    onMouseEnter={() => setHoveredIntegrationIndex(idx)}
                    onMouseLeave={() => setHoveredIntegrationIndex(null)}
                  >
                    <span><Icon size={22} /></span>
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </div>
                );
              })}
              <div className="mini-node node-phone"><MessageCircle size={17} /></div>
              <div className="mini-node node-ai"><Bot size={17} /></div>
              <div className="mini-node node-db"><Database size={16} /></div>
              <div className="mini-node node-web"><Globe2 size={17} /></div>
              <div className="mini-node node-mail"><Send size={16} /></div>
            </div>
          </div>
        </section>

        <section className="product-final-cta">
          <div className="lp-container product-final-cta-inner">
            <h2>
              Everything Your Business Needs <span>In One Place</span>
            </h2>
            <p>Join thousands of businesses that run their entire operation on Operix.</p>
            <div className="product-final-actions">
              <Link href="/admin/dashboard" className="product-primary-btn">
                Start Free Trial <ArrowRight size={18} />
              </Link>
              <Link href="#book-demo" className="product-outline-btn">
                <CalendarDays size={16} /> Book Demo
              </Link>
            </div>
            <div className="product-final-trust">
              {["All 12 modules included", "No credit card required", "14-day free trial", "Cancel anytime"].map((item) => (
                <span key={item}>
                  <CheckCircle2 size={15} /> {item}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
