"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Calculator,
  Globe2,
  LineChart,
  LucideIcon,
  Megaphone,
  Package,
  Settings,
  Target,
  Warehouse,
  Zap,
} from "lucide-react";

type RoleTone = "blue" | "teal" | "amber";

type RoleSolution = {
  label: string;
  icon: LucideIcon;
  tone: RoleTone;
  title: string;
  text: string;
  features: {
    icon: LucideIcon;
    text: string;
  }[];
  stats: string[];
  sidebar: string[];
  rail: string[];
  chartSeed: number;
  previewMode?: "inventory" | "marketing";
};

const roleSolutions: RoleSolution[] = [
  {
    label: "Business Owner",
    icon: Briefcase,
    tone: "blue",
    title: "Full Business Visibility in One Dashboard",
    text: "See revenue, operations, inventory, and team performance in real time - without asking anyone for a report.",
    features: [
      { icon: BarChart3, text: "Unified P&L and cash flow dashboard" },
      { icon: BarChart3, text: "AI-powered growth forecasting" },
      { icon: BarChart3, text: "Team performance and workload view" },
      { icon: BarChart3, text: "Instant AI business insights" },
    ],
    stats: ["₹24.86L", "1,847", "94.2%", "48,291"],
    sidebar: ["Overview", "Dashboard", "Products", "Orders", "Customers", "Marketing", "Accounting"],
    rail: ["Low stock", "Pending invoices", "Campaigns"],
    chartSeed: 11,
  },
  {
    label: "Operations Manager",
    icon: Settings,
    tone: "teal",
    title: "Automate Every Operational Workflow",
    text: "Remove bottlenecks from fulfillment, supplier management, and team coordination with smart automation.",
    features: [
      { icon: Settings, text: "Drag-and-drop workflow automation" },
      { icon: Package, text: "Supplier purchase order automation" },
      { icon: LineChart, text: "Fulfillment SLA tracking and alerts" },
      { icon: BarChart3, text: "Operational metrics and reporting" },
    ],
    stats: ["12", "₹66.68L", "3", "74%"],
    sidebar: ["Dashboard", "Products", "Supplier", "Inventory", "Orders", "Customers", "Analytics"],
    rail: ["Transfer pending", "SLA alert", "PO approved"],
    chartSeed: 7,
  },
  {
    label: "Inventory Manager",
    icon: Warehouse,
    tone: "amber",
    title: "Zero Stockouts. Zero Overstock.",
    text: "Track every unit across every location in real time. Automate reorders and never lose a sale to poor stock management.",
    features: [
      { icon: Warehouse, text: "Multi-location real-time stock levels" },
      { icon: Zap, text: "Automated reorder point triggers" },
      { icon: Package, text: "Stock transfer between locations" },
      { icon: BarChart3, text: "FIFO/LIFO cost and movement reports" },
    ],
    stats: ["12", "₹66.68L", "3", "2"],
    sidebar: ["Dashboard", "Products", "Supplier", "Inventory", "Orders", "Customers", "Analytics"],
    rail: ["320 available", "15 reserved", "60 reorder"],
    chartSeed: 15,
    previewMode: "inventory",
  },
  {
    label: "Sales Manager",
    icon: LineChart,
    tone: "blue",
    title: "Track Pipeline, Orders, and Revenue",
    text: "Give sales teams clean customer data, live targets, and order visibility so every opportunity keeps moving.",
    features: [
      { icon: LineChart, text: "Sales pipeline and territory dashboards" },
      { icon: Briefcase, text: "Customer order history and reorder prompts" },
      { icon: Package, text: "Quote-to-order workflow tracking" },
      { icon: BarChart3, text: "Sales target and commission reporting" },
    ],
    stats: ["₹9.4L", "126", "31%", "18"],
    sidebar: ["Leads", "Deals", "Customers", "Quotes", "Orders", "Targets", "Reports"],
    rail: ["Hot lead", "Quote due", "Target risk"],
    chartSeed: 19,
  },
  {
    label: "Marketing Manager",
    icon: Megaphone,
    tone: "blue",
    title: "Campaign ROI Backed by Real Data",
    text: "Create AI-powered content, run multi-channel campaigns, and track attribution from ad to order.",
    features: [
      { icon: Megaphone, text: "AI content generation for all channels" },
      { icon: Target, text: "Campaign builder with budget tracking" },
      { icon: Globe2, text: "Multi-channel publishing in one click" },
      { icon: BarChart3, text: "Full-funnel attribution analytics" },
    ],
    stats: ["84", "6", "31", "2.4L", "₹8.2L"],
    sidebar: ["Dashboard", "Products", "Supplier", "Inventory", "Orders", "Customers", "Marketing"],
    rail: ["AI draft ready", "Budget check", "Promo live"],
    chartSeed: 23,
    previewMode: "marketing",
  },
  {
    label: "Accountant",
    icon: Calculator,
    tone: "amber",
    title: "Close the Books With Less Manual Work",
    text: "Keep transactions, invoices, taxes, and reports synced automatically across every sales and operations flow.",
    features: [
      { icon: Calculator, text: "Automated transaction categorization" },
      { icon: Calculator, text: "Invoice, payment, and tax reconciliation" },
      { icon: BarChart3, text: "Real-time P&L and cash flow reports" },
      { icon: Package, text: "Export-ready statements for compliance" },
    ],
    stats: ["₹18.2L", "96%", "37", "5"],
    sidebar: ["Ledger", "Invoices", "Payments", "Taxes", "Reports", "Expenses", "Payroll"],
    rail: ["Tax due", "Unmatched", "Paid today"],
    chartSeed: 29,
  },
];

export default function RoleSolutions() {
  const [activeRole, setActiveRole] = useState(
    roleSolutions.find((role) => role.label === "Operations Manager") ?? roleSolutions[0],
  );
  const ActiveIcon = activeRole.icon;

  return (
    <>
      <div className="role-tabs" role="tablist" aria-label="Role-based solutions">
        {roleSolutions.map((role) => {
          const Icon = role.icon;
          const isActive = activeRole.label === role.label;

          return (
            <button
              className={`${isActive ? "active" : ""} ${isActive ? role.tone : ""}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              key={role.label}
              onClick={() => setActiveRole(role)}
            >
              <Icon size={17} /> {role.label}
            </button>
          );
        })}
      </div>

      <div key={activeRole.label} className={`role-panel ${activeRole.tone} role-panel-animate`}>
        <div className="role-copy">
          <span>
            <ActiveIcon size={16} /> {activeRole.label}
          </span>
          <h3>{activeRole.title}</h3>
          <p>{activeRole.text}</p>
          <div className="role-feature-list">
            {activeRole.features.map(({ icon: FeatureIcon, text }) => (
              <div key={text}>
                <FeatureIcon size={16} /> {text}
              </div>
            ))}
          </div>
          <Link href={`#${activeRole.label.toLowerCase().replaceAll(" ", "-")}`} className="role-link">
            Explore for {activeRole.label} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="role-preview">
          <div className="role-dashboard">
            <div className="dash-sidebar">
              <strong>BirOS</strong>
              {activeRole.sidebar.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="dash-main">
              <div className="dash-toolbar">
                <span>Search products, orders, customers...</span>
                <i />
              </div>
              <h4>{activeRole.label === "Operations Manager" ? "Inventory" : activeRole.label}</h4>
              <div className={`dash-stats ${activeRole.previewMode === "marketing" ? "marketing-stats" : ""}`}>
                {activeRole.stats.map((value) => (
                  <div key={value}>
                    <strong>{value}</strong>
                    <small>+12.3%</small>
                  </div>
                ))}
              </div>
              {activeRole.previewMode === "marketing" ? (
                <div className="marketing-studio">
                  <div className="campaign-products">
                    <strong>Choose Product To Promote</strong>
                    <span>Search products</span>
                    {["Premium Cotton Kurta", "Silk Saree - Banarasi", "Embroidered Dupatta", "Handloom Bedsheet", "Cotton Dress Set"].map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                    <button type="button">Promote Product</button>
                  </div>
                  <div className="content-generator">
                    <strong>AI Content Generator</strong>
                    <span>Campaign Goal</span>
                    <span>Tone</span>
                    <span>Target Audience</span>
                    <button type="button">Generate Content</button>
                  </div>
                </div>
              ) : (
                <div className="dash-chart">
                  {Array.from({ length: 13 }).map((_, index) => (
                    <i key={index} style={{ height: `${32 + ((index * activeRole.chartSeed) % 54)}px` }} />
                  ))}
                </div>
              )}
            </div>
            <div className="dash-rail">
              <strong>Alerts</strong>
              {activeRole.rail.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            {activeRole.previewMode === "inventory" && (
              <div className="inventory-detail-card">
                <div className="inventory-detail-head">
                  <strong>Rose Water 500ml</strong>
                  <span>Barcode</span>
                </div>
                <small>SKU: ORG-500ml</small>
                <div className="stock-overview">
                  <p>Stock Overview</p>
                  <div>
                    <span>Available <strong>320</strong></span>
                    <span>Reserved <strong>15</strong></span>
                    <span>Reorder At <strong>60</strong></span>
                    <span>Unit <strong>Bottle</strong></span>
                  </div>
                </div>
                <div className="barcode-strip">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div className="pricing-grid">
                  <span>Purchase Price <strong>₹900</strong></span>
                  <span>Selling Price <strong>₹1200</strong></span>
                  <span>Inventory Value <strong>₹3,84,000</strong></span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
