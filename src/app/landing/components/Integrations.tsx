import React from "react";
import "./Integrations.css";
import ScrollReveal from "./ScrollReveal";

import {
  Truck,
  Archive,
  Globe,
  Megaphone,
  ShoppingCart,
  Users,
  Calculator,
  BarChart3,
  ArrowRight,
} from "lucide-react";

interface Step {
  id: string;
  icon: React.ComponentType<{ size?: number | string }>;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    id: "suppliers",
    icon: Truck,
    title: "Suppliers",
    desc: "Source & track purchase orders",
  },
  {
    id: "inventory",
    icon: Archive,
    title: "Inventory",
    desc: "Real-time stock levels",
  },
  {
    id: "website",
    icon: Globe,
    title: "Website",
    desc: "AI-built online store",
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing",
    desc: "AI-powered campaigns",
  },
  {
    id: "orders",
    icon: ShoppingCart,
    title: "Orders",
    desc: "Unified order hub",
  },
  {
    id: "customers",
    icon: Users,
    title: "Customers",
    desc: "CRM & support tools",
  },
  {
    id: "accounting",
    icon: Calculator,
    title: "Accounting",
    desc: "Automated financials",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics",
    desc: "Actionable insights",
  },
];

export default function Integrations() {
  return (
    <section id="solutions" className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="lp-container">
        <ScrollReveal animation="slide-up" duration={800}>
          <div className="section-header">
            <div className="badge">
              <span className="badge-dot"></span>
              <span>Connected By Design</span>
            </div>
            <h2>Everything Works Together</h2>
            <p>Your business data flows seamlessly across every module.</p>
          </div>
        </ScrollReveal>

        <div className="flow-container">
          {steps.map((step, idx) => (
            <ScrollReveal
              key={step.id}
              className="flow-step-card"
              animation="slide-up"
              delay={idx * 80}
              duration={600}
            >
              <div className="flow-icon-wrapper">
                <step.icon size={22} />
              </div>
              <div className="flow-title">{step.title}</div>
              <div className="flow-desc">{step.desc}</div>
              
              {idx < steps.length - 1 && (
                <div className="flow-arrow">
                  <ArrowRight size={14} />
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
