import Link from "next/link";
import Header from "../landing/components/Header";
import Footer from "../landing/components/Footer";
import "./solutions.css";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  Calculator,
  Check,
  CheckCircle2,
  Clock3,
  Factory,
  Gift,
  Globe2,
  Megaphone,
  Package,
  Rocket,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Store,
  Truck,
  Users,
  Warehouse,
  X,
  Zap,
} from "lucide-react";

const industries = [
  { icon: ShoppingBag, label: "Retail", caption: "Multi-location ops", tone: "blue" },
  { icon: Package, label: "Wholesale", caption: "B2B order management", tone: "teal" },
  { icon: Factory, label: "Manufacturing", caption: "Production tracking", tone: "amber" },
  { icon: Rocket, label: "D2C Brands", caption: "Direct-to-consumer", tone: "blue" },
  { icon: Truck, label: "Distributors", caption: "Multi-territory ops", tone: "teal" },
  { icon: Briefcase, label: "Agencies", caption: "Client management", tone: "blue" },
];

const caseStudies = [
  {
    initials: "MC",
    name: "Meridian Commerce",
    tag: "Wholesale Distributor",
    location: "Chicago, IL",
    tone: "blue",
    metrics: [
      ["+43%", "Revenue Increase", "in 6 months"],
      ["18hrs", "Time Saved", "per week"],
      ["99.2%", "Stock Accuracy", "across 4 locations"],
    ],
    quote:
      "Operix replaced six different tools in the first month. We went from spending 20 hours a week on reports to getting them automatically every Monday morning.",
    person: "James Okonkwo",
    role: "Operations Director, Meridian Commerce",
  },
  {
    initials: "NT",
    name: "NovaTech Solutions",
    tag: "D2C Electronics Brand",
    location: "Austin, TX",
    tone: "teal",
    metrics: [
      ["+28%", "Revenue Increase", "year over year"],
      ["12hrs", "Time Saved", "per week"],
      ["97.8%", "Stock Accuracy", "up from 82%"],
    ],
    quote:
      "Our inventory used to be a constant headache. With Operix, stockouts dropped to near zero. The automated reordering alone paid for the platform in the first quarter.",
    person: "Sarah Mitchell",
    role: "CEO, NovaTech Solutions",
  },
  {
    initials: "BH",
    name: "BlueHaven Retail",
    tag: "Multi-Location Retail",
    location: "Seattle, WA",
    tone: "amber",
    metrics: [
      ["+61%", "Revenue Increase", "after expansion"],
      ["22hrs", "Time Saved", "per week"],
      ["99.5%", "Stock Accuracy", "across 3 locations"],
    ],
    quote:
      "We launched three new locations in four months because Operix handles everything centrally. Inventory, accounting, staff - it all just works across all sites.",
    person: "Priya Sharma",
    role: "Founder, BlueHaven Retail",
  },
];

const lifecycle = [
  {
    icon: Truck,
    step: "Step 1",
    label: "Supplier",
    title: "Source & Purchase",
    text: "Send purchase orders to suppliers, track lead times, and receive goods directly into your inventory.",
    stat: "3x",
    statText: "faster PO processing",
    tone: "blue",
  },
  {
    icon: Warehouse,
    step: "Step 2",
    label: "Inventory",
    title: "Stock & Organize",
    text: "All incoming goods are instantly tracked across locations. Reorder thresholds trigger POs automatically.",
    stat: "99.2%",
    statText: "stock accuracy",
    tone: "teal",
  },
  {
    icon: Globe2,
    step: "Step 3",
    label: "Website",
    title: "Publish & Sell",
    text: "Your products publish to your AI-built storefront automatically. Website stock is always in sync.",
    stat: "< 1hr",
    statText: "to launch a store",
    tone: "blue",
  },
  {
    icon: Megaphone,
    step: "Step 4",
    label: "Marketing",
    title: "Promote & Grow",
    text: "AI creates campaigns based on your products. Publish across email, social, and ads from one place.",
    stat: "3.4x",
    statText: "avg engagement lift",
    tone: "amber",
  },
  {
    icon: ShoppingCart,
    step: "Step 5",
    label: "Orders",
    title: "Process & Fulfill",
    text: "Orders flow in from all channels into a single hub. Routing, packing, and shipping are automated.",
    stat: "40%",
    statText: "faster fulfillment",
    tone: "blue",
  },
  {
    icon: Users,
    step: "Step 6",
    label: "Customers",
    title: "Retain & Engage",
    text: "Every order builds a rich customer profile. Segment, communicate, and grow lifetime value.",
    stat: "28%",
    statText: "higher retention",
    tone: "teal",
  },
  {
    icon: Calculator,
    step: "Step 7",
    label: "Accounting",
    title: "Track & Report",
    text: "Every transaction is automatically categorized. P&L, cash flow, and tax reports update in real time.",
    stat: "18hrs",
    statText: "saved per month",
    tone: "amber",
  },
];

const roleFeatures = [
  "Unified P&L and cash flow dashboard",
  "AI-powered growth forecasting",
  "Team performance and workload view",
  "Instant AI business insights",
];

const industryCards = [
  {
    icon: ShoppingBag,
    title: "Retail",
    subtitle: "From storefront to back office, unified.",
    tone: "blue",
    challenges: [
      "Inventory fragmented across multiple store locations",
      "POS disconnected from accounting and reports",
      "Manual stock counts causing frequent discrepancies",
    ],
    solves: [
      "Real-time stock visibility across all locations",
      "Automated accounting sync on every transaction",
      "Barcode scanning with instant reconciliation",
    ],
  },
  {
    icon: Package,
    title: "Wholesale",
    subtitle: "Manage bulk orders at any scale.",
    tone: "teal",
    challenges: [
      "Complex customer-specific pricing tiers",
      "Bulk order processing slow and error-prone",
      "No unified supplier and customer portal",
    ],
    solves: [
      "Customer-group pricing with tiered discounts",
      "Automated bulk order workflows and approvals",
      "Supplier portal with PO and delivery tracking",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    subtitle: "Track production from raw material to finish.",
    tone: "amber",
    challenges: [
      "No visibility into raw material consumption",
      "Production scheduling disconnected from orders",
      "Quality control records spread across spreadsheets",
    ],
    solves: [
      "Bill of materials with real-time consumption tracking",
      "Production schedules linked to order demand",
      "Digital quality control checklist and records",
    ],
  },
  {
    icon: Rocket,
    title: "D2C Brands",
    subtitle: "Launch fast. Grow faster.",
    tone: "blue",
    challenges: [
      "Managing multiple sales channels is chaotic",
      "Marketing tools disconnected from sales data",
      "No single source of truth for customer behavior",
    ],
    solves: [
      "Unified order hub across all channels",
      "AI marketing linked to real sales performance",
      "360 customer profiles with full history",
    ],
  },
  {
    icon: Truck,
    title: "Distributors",
    subtitle: "Multi-territory, one platform.",
    tone: "teal",
    challenges: [
      "Territory performance hard to track and compare",
      "Route and delivery coordination is manual",
      "No self-service portal for trade customers",
    ],
    solves: [
      "Territory-based dashboards with drill-down analytics",
      "Delivery route planning with live status updates",
      "Customer self-service portal for reorders",
    ],
  },
  {
    icon: Briefcase,
    title: "Agencies",
    subtitle: "Serve clients from one workspace.",
    tone: "blue",
    challenges: [
      "Juggling multiple client accounts in separate tools",
      "Time tracking and billing is fragmented",
      "Reporting requires manual data collection",
    ],
    solves: [
      "Multi-client workspace with role-based access",
      "Automated time tracking and invoice generation",
      "Scheduled reports delivered to clients automatically",
    ],
  },
];

const roleTabs = [
  { icon: Briefcase, label: "Business Owner", active: true },
  { icon: Settings, label: "Operations Manager" },
  { icon: Warehouse, label: "Inventory Manager" },
  { icon: TrendingIcon, label: "Sales Manager" },
  { icon: Megaphone, label: "Marketing Manager" },
  { icon: Calculator, label: "Accountant" },
];

function TrendingIcon({ size = 18 }: { size?: number }) {
  return <BarChart3 size={size} />;
}

export default function SolutionsPage() {
  return (
    <div className="landing-page solutions-page">
      <Header />
      <main>
        <section className="solutions-hero">
          <div className="lp-container">
            <div className="solution-pills">
              {industries.map(({ icon: Icon, label, tone }) => (
                <span className={`solution-pill ${tone}`} key={label}>
                  <Icon size={13} /> {label}
                </span>
              ))}
            </div>
            <h1>
              Find The Right Solution <span>For Your Business</span>
            </h1>
            <p>Talk to our team and get a personalized demo tailored to your industry and workflow.</p>
            <div className="solutions-actions">
              <Link href="/admin/dashboard" className="solutions-primary-btn">
                Start Free Trial <ArrowRight size={18} />
              </Link>
              <Link href="#book-demo" className="solutions-outline-btn">
                <Calculator size={16} /> Book a Demo
              </Link>
            </div>
            <div className="solutions-trust-row">
              {["Industry-specific onboarding", "No credit card required", "Cancel anytime"].map((item) => (
                <span key={item}>
                  <CheckCircle2 size={15} /> {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="solutions-section">
          <div className="lp-container">
            <div className="solutions-heading">
              <span>Case Studies</span>
              <h2>Real Results From Real Businesses</h2>
              <p>See how growing businesses transformed their operations with Operix.</p>
            </div>
            <div className="case-study-grid">
              {caseStudies.map((study) => (
                <article className={`case-card ${study.tone}`} key={study.name}>
                  <div className="case-chart">
                    <span className="case-avatar">{study.initials}</span>
                    <div className="case-bars">
                      {Array.from({ length: 12 }).map((_, index) => (
                        <i key={index} style={{ height: `${24 + ((index * 7) % 38)}px` }} />
                      ))}
                    </div>
                    <small>{study.name} Dashboard</small>
                  </div>
                  <div className="case-body">
                    <h3>{study.name}</h3>
                    <div className="case-meta">
                      <span>{study.tag}</span>
                      <small>{study.location}</small>
                    </div>
                    <div className="case-metrics">
                      {study.metrics.map(([value, label, sub]) => (
                        <div key={label}>
                          <BarChart3 size={18} />
                          <strong>{value}</strong>
                          <span>{label}</span>
                          <small>{sub}</small>
                        </div>
                      ))}
                    </div>
                    <blockquote>
                      <Gift size={18} />
                      <p>"{study.quote}"</p>
                      <cite>{study.person}</cite>
                      <small>{study.role}</small>
                    </blockquote>
                    <Link href="#case-study" className="case-link">
                      Read {study.name} Story <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="solutions-section lifecycle-section">
          <div className="lp-container">
            <div className="solutions-heading">
              <span>Business Lifecycle</span>
              <h2>Your Complete Business Workflow</h2>
              <p>Every stage of your business connected and automated - from supplier to sale.</p>
            </div>
            <div className="lifecycle-list">
              {lifecycle.map(({ icon: Icon, step, label, title, text, stat, statText, tone }, index) => (
                <article className={`lifecycle-item ${index % 2 === 0 ? "left" : "right"} ${tone}`} key={title}>
                  <div className="lifecycle-card">
                    <small><strong>{step}</strong> • {label}</small>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span className="lifecycle-stat"><strong>{stat}</strong> {statText}</span>
                  </div>
                  <span className="lifecycle-icon"><Icon size={26} /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="solutions-section role-section">
          <div className="lp-container">
            <div className="solutions-heading">
              <span>Role-Based Solutions</span>
              <h2>Built Around How You Work</h2>
              <p>Every role gets the tools and data they need - without the noise they don't.</p>
            </div>
            <div className="role-tabs">
              {roleTabs.map(({ icon: Icon, label, active }) => (
                <button className={active ? "active" : ""} key={label}>
                  <Icon size={17} /> {label}
                </button>
              ))}
            </div>
            <div className="role-panel">
              <div className="role-copy">
                <span><Briefcase size={16} /> Business Owner</span>
                <h3>Full Business Visibility in One Dashboard</h3>
                <p>See revenue, operations, inventory, and team performance in real time - without asking anyone for a report.</p>
                <div className="role-feature-list">
                  {roleFeatures.map((feature) => (
                    <div key={feature}>
                      <BarChart3 size={16} /> {feature}
                    </div>
                  ))}
                </div>
                <Link href="#business-owner" className="role-link">
                  Explore for Business Owner <ArrowRight size={16} />
                </Link>
              </div>
              <div className="role-preview">
                <div className="preview-top"><i /><i /><i /><span /></div>
                <div className="preview-center">
                  <Briefcase size={22} />
                  <small>Business Owner Dashboard</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="solutions-section">
          <div className="lp-container">
            <div className="solutions-heading">
              <span className="teal-label">Industry Solutions</span>
              <h2>Tailored For Your Industry</h2>
              <p>Every industry has unique challenges. Operix is built to solve them all.</p>
            </div>
            <div className="industry-grid">
              {industryCards.map(({ icon: Icon, title, subtitle, challenges, solves, tone }) => (
                <article className={`industry-card ${tone}`} key={title}>
                  <div className="industry-title">
                    <span><Icon size={25} /></span>
                    <div>
                      <h3>{title}</h3>
                      <p>{subtitle}</p>
                    </div>
                  </div>
                  <h4>Common Challenges</h4>
                  <ul className="problem-list">
                    {challenges.map((challenge) => (
                      <li key={challenge}><X size={14} /> {challenge}</li>
                    ))}
                  </ul>
                  <h4 className="solve-heading">How Operix Solves It</h4>
                  <ul className="solve-list">
                    {solves.map((solve) => (
                      <li key={solve}><Check size={14} /> {solve}</li>
                    ))}
                  </ul>
                  <Link href="#industry" className="industry-link">
                    View {title} Solution <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="solutions-final">
          <div className="lp-container solutions-final-grid">
            <div>
              <span className="final-badge"><i /> Solutions</span>
              <h2>Built For <span>Every Growing</span> Business</h2>
              <p>Whether you sell products, manage inventory, or run teams, the platform adapts to your workflow.</p>
              <div className="solutions-actions final-actions">
                <Link href="#industry" className="solutions-primary-btn">
                  Find Your Solution <ArrowRight size={18} />
                </Link>
                <Link href="#book-demo" className="solutions-outline-btn">Book Demo</Link>
              </div>
              <div className="solutions-trust-row final-trust">
                {["6 industry solutions", "Role-based access", "Custom workflows"].map((item) => (
                  <span key={item}><Check size={14} /> {item}</span>
                ))}
              </div>
            </div>
            <div className="final-industry-grid">
              {industries.map(({ icon: Icon, label, caption, tone }) => (
                <article className={tone} key={label}>
                  <span><Icon size={24} /></span>
                  <strong>{label}</strong>
                  <small>{caption}</small>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
