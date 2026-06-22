import Link from "next/link";
import { Fragment } from "react";
import Header from "../landing/components/Header";
import Footer from "../landing/components/Footer";
import "./pricing.css";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  DollarSign,
  Minus,
  Phone,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For new and small businesses getting started.",
    price: "$49",
    suffix: "/mo",
    billing: "Billed monthly",
    limits: ["Up to 3 members", "500 products", "1,000 orders/mo", "5 GB storage"],
    features: [
      "Product & inventory management",
      "Basic order processing",
      "1 published website",
      "Basic email marketing",
      "Customer management (2,500)",
      "Standard reporting",
      "Email support",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Growth",
    description: "Everything you need to scale operations and revenue.",
    price: "$149",
    suffix: "/mo",
    billing: "Billed monthly",
    limits: ["Up to 15 members", "Unlimited products", "Unlimited orders", "50 GB storage"],
    features: [
      "Everything in Starter",
      "Advanced inventory & suppliers",
      "Up to 3 websites with AI builder",
      "AI marketing studio & campaigns",
      "Full accounting module",
      "HRM & team management",
      "Advanced analytics & custom reports",
      "API access (read-only)",
      "Priority support & onboarding",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    description: "Tailored for complex, multi-entity organizations.",
    price: "Custom",
    suffix: "",
    billing: "Contact us for a tailored quote",
    limits: ["Unlimited members", "Unlimited products", "Unlimited orders", "Custom storage"],
    features: [
      "Everything in Growth",
      "Unlimited team members",
      "Unlimited websites",
      "Custom integrations & full API",
      "Dedicated account manager",
      "99.99% uptime SLA",
      "Multi-entity & multi-currency",
      "White-label options",
      "Custom onboarding & training",
    ],
    cta: "Contact Sales",
    enterprise: true,
  },
];

const compareSections = [
  {
    category: "Core Operations",
    rows: [
      ["Inventory Control", "Basic", true, true],
      ["Supplier Management", "—", true, true],
      ["Order Management", "1,000/mo", "Unlimited", "Unlimited + Custom"],
      ["Customer Management", "Up to 2,500", "Unlimited", "Unlimited + API"],
    ],
  },
  {
    category: "Commerce",
    rows: [
      ["Website Builder", "1 site", "Up to 3 sites", "Unlimited sites"],
      ["AI Site Generation", "—", true, true],
      ["Custom Domain", true, true, true],
      ["Storefront Analytics", "Basic", true, true],
    ],
  },
  {
    category: "Marketing",
    rows: [
      ["Marketing Studio", "Basic", "AI-powered", "AI-powered"],
      ["Campaign Management", "2 active", "Unlimited", "Unlimited"],
      ["Email Marketing", "2,500 contacts", "Unlimited", "Unlimited"],
      ["Social Publishing", "—", true, true],
    ],
  },
  {
    category: "Finance & People",
    rows: [
      ["Accounting", "Basic", "Full suite", "Full + Multi-entity"],
      ["Tax Reports", "—", true, true],
      ["HRM", "—", true, true],
      ["Payroll Integration", "—", "—", true],
      ["Multi-currency", "—", "—", true],
    ],
  },
  {
    category: "Intelligence",
    rows: [
      ["Analytics Dashboard", "Basic", "Advanced", "Advanced + Custom BI"],
      ["Custom Reports", "—", true, true],
      ["Scheduled Reports", "—", "—", true],
      ["AI Business Assistant", "—", true, true],
    ],
  },
  {
    category: "Platform",
    rows: [
      ["Team Members", "Up to 3", "Up to 15", "Unlimited"],
      ["Role-Based Access", "Basic", "Advanced", "Advanced + Custom"],
      ["API Access", "—", "Read-only", "Full access"],
      ["SSO / SAML", "—", "—", true],
      ["Audit Logs", "—", "—", true],
      ["Uptime SLA", "—", "99.9%", "99.99%"],
      ["Support", "Email", "Priority chat", "Dedicated manager"],
    ],
  },
];

const faqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes. Every plan comes with a 14-day free trial with full access to all features in that plan. No credit card is required to start - just sign up and explore.",
  },
  { question: "Can I change my plan later?" },
  { question: "What happens if I exceed my plan limits?" },
  { question: "Do you offer discounts for annual billing?" },
  { question: "Is there a setup fee?" },
  { question: "Can I cancel anytime?" },
  { question: "Is my business data secure?" },
  { question: "Do you offer startup or nonprofit discounts?" },
  { question: "What payment methods do you accept?" },
  { question: "Can I white-label Operix for my clients?" },
];

function CompareValue({ value, plan }: { value: string | boolean; plan: "starter" | "growth" | "enterprise" }) {
  if (value === true) {
    return (
      <span className={`pp-check-dot ${plan}`}>
        <Check size={14} />
      </span>
    );
  }

  if (value === "Basic") {
    return (
      <span className="pp-basic-badge">
        <Check size={12} /> Basic
      </span>
    );
  }

  if (value === "—") {
    return <span className="pp-muted-value">—</span>;
  }

  return <span>{value}</span>;
}

export default function PricingPage() {
  return (
    <div className="landing-page pp-page">
      <Header />
      <main>
        <section className="pp-hero">
          <div className="lp-container">
            <span className="pp-badge"><i /> Pricing</span>
            <h1>
              Simple Pricing. <span>Complete</span>
              <br />
              Business Control.
            </h1>
            <p>Everything included. No hidden modules. No per-feature paywalls. Start free, upgrade when you're ready.</p>
            <div className="pp-stats">
              <div><Users size={16} /><strong>2,400+</strong><span>Businesses</span></div>
              <div><TrendingUp size={16} /><strong>+38%</strong><span>Avg revenue growth</span></div>
              <div><Clock3 size={16} /><strong>18hrs</strong><span>Saved per week</span></div>
              <div><CheckCircle2 size={16} /><strong>99.9%</strong><span>Uptime SLA</span></div>
            </div>
          </div>
        </section>

        <section className="pp-plans-section">
          <div className="lp-container">
            <div className="pp-toggle" aria-label="Billing period">
              <button className="active">Monthly</button>
              <button>Annual <span>Save 20%</span></button>
            </div>
            <div className="pp-plan-grid">
              {plans.map((plan) => (
                <article className={`pp-plan-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
                  <div className="pp-plan-top">
                    <h2>{plan.name}</h2>
                    {plan.featured && <span className="pp-popular"><Zap size={13} /> Most Popular</span>}
                  </div>
                  <p>{plan.description}</p>
                  <div className="pp-price">
                    {plan.price.startsWith("$") && <small>$</small>}
                    <strong>{plan.price.replace("$", "")}</strong>
                    {plan.suffix && <span>{plan.suffix}</span>}
                  </div>
                  <small className="pp-billing">{plan.billing}</small>
                  <div className="pp-limits">
                    {plan.limits.map((limit) => <span key={limit}>{limit}</span>)}
                  </div>
                  <ul className="pp-feature-list">
                    {plan.features.map((feature) => (
                      <li key={feature}><Check size={14} /> {feature}</li>
                    ))}
                  </ul>
                  <Link href={plan.enterprise ? "#contact-sales" : "/admin/dashboard"} className="pp-plan-cta">
                    {plan.enterprise && <Phone size={16} />}
                    {plan.cta}
                    {!plan.enterprise && <ArrowRight size={17} />}
                  </Link>
                </article>
              ))}
            </div>
            <p className="pp-plan-note">All plans include a 14-day free trial. No credit card required. Cancel anytime.</p>
          </div>
        </section>

        <section className="pp-section pp-compare-section">
          <div className="lp-container">
            <div className="pp-section-heading">
              <span>Compare Plans</span>
              <h2>Everything Included. Compare What Fits.</h2>
            </div>
            <div className="pp-table-wrap">
              <table className="pp-compare-table">
                <thead>
                  <tr>
                    <th>Features</th>
                    <th>Starter</th>
                    <th>Growth</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {compareSections.map((section) => (
                    <Fragment key={section.category}>
                      <tr className="pp-category-row">
                        <td colSpan={4}>{section.category}</td>
                      </tr>
                      {section.rows.map(([feature, starter, growth, enterprise]) => (
                        <tr key={feature as string}>
                          <td>{feature}</td>
                          <td><CompareValue value={starter} plan="starter" /></td>
                          <td><CompareValue value={growth} plan="growth" /></td>
                          <td><CompareValue value={enterprise} plan="enterprise" /></td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="pp-section pp-roi-section">
          <div className="lp-container">
            <div className="pp-section-heading">
              <span>ROI Calculator</span>
              <h2>Calculate Your Savings</h2>
              <p>Tell us about your business. We'll estimate what Operix saves you.</p>
            </div>
            <div className="pp-roi-grid">
              <div className="pp-roi-card">
                <h3>Your Business</h3>
                <div className="pp-slider-row blue">
                  <div><span>Orders per month</span><strong>500</strong></div>
                  <i><b style={{ width: "9%" }} /></i>
                </div>
                <div className="pp-slider-row teal">
                  <div><span>Team members</span><strong>5 people</strong></div>
                  <i><b style={{ width: "8%" }} /></i>
                </div>
                <div className="pp-slider-row amber">
                  <div><span>Monthly revenue</span><strong>$50K</strong></div>
                  <i><b style={{ width: "9%" }} /></i>
                </div>
              </div>

              <div className="pp-roi-card">
                <h3>Your Estimated Savings</h3>
                <div className="pp-savings-grid">
                  <div className="blue"><Clock3 size={22} /><strong>26.5 hrs</strong><span>Time Saved Per Week</span><small>hours of manual work eliminated</small></div>
                  <div className="teal"><DollarSign size={22} /><strong>$3.7K</strong><span>Monthly Cost Savings</span><small>in operational overhead saved</small></div>
                  <div className="amber"><Zap size={22} /><strong>+24%</strong><span>Operational Efficiency</span><small>improvement in workflow speed</small></div>
                  <div className="blue"><TrendingUp size={22} /><strong>$4.0K</strong><span>Revenue Impact</span><small>estimated incremental revenue</small></div>
                </div>
                <div className="pp-annual-saving">
                  <span>Annual Savings Estimate</span>
                  <strong>$92.1K</strong>
                  <small>vs. Operix Growth plan at $1428/yr</small>
                </div>
              </div>
            </div>
            <p className="pp-roi-note">Estimates are based on industry averages and are for illustrative purposes only.</p>
          </div>
        </section>

        <section className="pp-section pp-faq-section">
          <div className="lp-container">
            <div className="pp-section-heading">
              <span>FAQ</span>
              <h2>Common Questions</h2>
              <p>Everything you need to know before you start.</p>
            </div>
            <div className="pp-faq-list">
              {faqs.map((faq, index) => (
                <article className={`pp-faq-item ${index === 0 ? "open" : ""}`} key={faq.question}>
                  <div className="pp-faq-question">
                    <h3>{faq.question}</h3>
                    <span>{index === 0 ? <Minus size={18} /> : <ChevronDown size={18} />}</span>
                  </div>
                  {faq.answer && <p>{faq.answer}</p>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pp-final-cta">
          <div className="lp-container">
            <span className="pp-trial-badge"><Sparkles size={14} /> 14-day free trial on all plans</span>
            <h2>Start Growing <span>Today</span></h2>
            <p>Join 2,400+ businesses running their entire operation on Operix. No setup fees. No hidden costs.</p>
            <div className="pp-final-actions">
              <Link href="/admin/dashboard" className="pp-final-primary">
                Start Free Trial <ArrowRight size={18} />
              </Link>
              <Link href="#book-demo" className="pp-final-outline">
                <CalendarDays size={17} /> Book Demo
              </Link>
            </div>
            <small>No credit card required • Free for 14 days • Cancel anytime</small>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
