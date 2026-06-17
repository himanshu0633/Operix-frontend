import Link from "next/link";
import "./Modules.css";

import {
  Box,
  Archive,
  Globe,
  Megaphone,
  Target,
  Calculator,
  BarChart3,
  FileText,
  ArrowRight,
} from "lucide-react";

interface Module {
  id: string;
  icon: React.ComponentType<{ size?: number | string }>;
  title: string;
  desc: string;
}

const modules: Module[] = [
  {
    id: "product",
    icon: Box,
    title: "Product Management",
    desc: "Manage your full product catalog with variants, pricing, images, and SEO in one place.",
  },
  {
    id: "inventory",
    icon: Archive,
    title: "Inventory Control",
    desc: "Track stock across locations, set reorder points, and automate purchase orders.",
  },
  {
    id: "website",
    icon: Globe,
    title: "Website Builder",
    desc: "Build AI-powered storefronts with drag-and-drop simplicity. No code required.",
  },
  {
    id: "marketing",
    icon: Megaphone,
    title: "Marketing Studio",
    desc: "Generate on-brand content with AI, manage creatives, and publish across channels.",
  },
  {
    id: "campaigns",
    icon: Target,
    title: "Campaign Manager",
    desc: "Plan, launch, and optimize marketing campaigns with real-time performance tracking.",
  },
  {
    id: "accounting",
    icon: Calculator,
    title: "Accounting",
    desc: "Automated invoicing, expense tracking, profit reports, and tax-ready financials.",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics",
    desc: "Deep-dive into sales, traffic, customer behavior, and product performance.",
  },
  {
    id: "reports",
    icon: FileText,
    title: "Reports",
    desc: "Schedule and share beautiful reports across your team with custom data views.",
  },
];

export default function Modules() {
  return (
    <section id="product" className="section-padding">
      <div className="lp-container">
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot"></span>
            <span>Platform Modules</span>
          </div>
          <h2>Built For Modern Businesses</h2>
          <p>Every tool you need to operate and grow.</p>
        </div>

        <div className="modules-grid">
          {modules.map((module) => (
            <div key={module.id} className="module-card glass-panel">
              <div className="module-icon-box">
                <module.icon size={20} />
              </div>
              <h3 className="module-title">{module.title}</h3>
              <p className="module-desc">{module.desc}</p>
              <Link href="/admin/dashboard" className="module-link">
                <span>Learn more</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
