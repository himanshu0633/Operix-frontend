"use client";

import Link from "next/link";
import { useState } from "react";
import "./Pricing.css";
import "../../pricing/pricing.css";
import ScrollReveal from "./ScrollReveal";
import { Check, Zap, Phone, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For new and small businesses getting started.",
    prices: {
      monthly: { price: "$49", suffix: "/mo", billing: "Billed monthly" },
      annual: { price: "$39", suffix: "/mo", billing: "Billed annually ($468/yr)" },
    },
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
    prices: {
      monthly: { price: "$149", suffix: "/mo", billing: "Billed monthly" },
      annual: { price: "$119", suffix: "/mo", billing: "Billed annually ($1428/yr)" },
    },
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
    prices: {
      monthly: { price: "Custom", suffix: "", billing: "Contact us for a tailored quote" },
      annual: { price: "Custom", suffix: "", billing: "Contact us for a tailored quote" },
    },
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

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
  const [activePlan, setActivePlan] = useState<string>("Growth");

  return (
    <section id="pricing" className="section-padding">
      <div className="lp-container">
        <ScrollReveal animation="slide-up" duration={800}>
          <div className="section-header">
            <div className="badge">
              <span className="badge-dot"></span>
              <span>Pricing</span>
            </div>
            <h2>Simple Pricing</h2>
            <p>No hidden fees. No per-user traps. Cancel anytime.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" duration={800} delay={100}>
          <div className="pp-toggle" aria-label="Billing period">
            <button 
              className={billingPeriod === "monthly" ? "active" : ""}
              onClick={() => setBillingPeriod("monthly")}
            >
              Monthly
            </button>
            <button 
              className={billingPeriod === "annual" ? "active" : ""}
              onClick={() => setBillingPeriod("annual")}
            >
              Annual <span>Save 20%</span>
            </button>
          </div>
        </ScrollReveal>

        <div className="pp-plan-grid">
          {plans.map((plan, index) => {
            const planPrice = plan.prices[billingPeriod];
            const isActive = plan.name === activePlan;
            return (
              <ScrollReveal 
                animation="slide-up" 
                duration={700} 
                delay={index * 100}
                key={plan.name}
                className="pp-plan-card-reveal-wrapper"
              >
                <article 
                  className={`pp-plan-card ${isActive ? "featured" : ""}`} 
                  onClick={() => setActivePlan(plan.name)}
                >
                  <div className="pp-plan-top">
                    <h2>{plan.name}</h2>
                    {plan.featured && <span className="pp-popular"><Zap size={13} /> Most Popular</span>}
                  </div>
                  <p>{plan.description}</p>
                  <div className="pp-price">
                    {planPrice.price.startsWith("$") && <small>$</small>}
                    <strong>{planPrice.price.replace("$", "")}</strong>
                    {planPrice.suffix && <span>{planPrice.suffix}</span>}
                  </div>
                  <small className="pp-billing">{planPrice.billing}</small>
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
              </ScrollReveal>
            );
          })}
        </div>
        
        <ScrollReveal animation="slide-up" duration={800} delay={300}>
          <p className="pp-plan-note" style={{ marginTop: "40px" }}>All plans include a 14-day free trial. No credit card required. Cancel anytime.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
