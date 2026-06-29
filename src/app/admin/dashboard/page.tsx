"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  BarChart3,
  Bell,
  Box,
  Check,
  CheckCircle2,
  ChevronRight,
  Circle,
  ExternalLink,
  Eye,
  Gauge,
  Globe2,
  Lock,
  Package,
  Palette,
  Pencil,
  Plus,
  ReceiptIndianRupee,
  RefreshCw,
  SearchCheck,
  Send,
  Server,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Upload,
  Wallet,
  Wand2,
} from "lucide-react";
import { AdminShell } from "../components/AdminShell";

const quickActions = ["Add Product", "Create Invoice", "Publish Website", "Run Campaign"];

const metricCards = [
  { label: "Total Revenue", value: "₹24.86L", change: "+12.4%", meta: "vs last month", icon: ReceiptIndianRupee, tone: "blue" },
  { label: "Total Orders", value: "1,847", change: "+8.2%", meta: "vs last month", icon: ShoppingBag, tone: "green" },
  { label: "Inventory Health", value: "94.2%", change: "-2.1%", meta: "3 items low stock", icon: Package, tone: "amber" },
  { label: "Website Traffic", value: "48,291", change: "+22.7%", meta: "unique visitors", icon: Globe2, tone: "cyan" },
];

const revenueChannels = [
  { name: "Online Store", value: "₹1.24 Cr", share: "43%", change: "22.4%", tone: "blue", width: "43%" },
  { name: "Wholesale", value: "₹0.88 Cr", share: "31%", change: "14.1%", tone: "green", width: "31%" },
  { name: "Retail Outlets", value: "₹0.51 Cr", share: "18%", change: "-3.2%", tone: "amber", width: "18%" },
  { name: "Direct / B2B", value: "₹0.23 Cr", share: "8%", change: "8.6%", tone: "cyan", width: "8%" },
];

const stockAlerts = [
  { item: "Basmati Rice Premium 25kg", sku: "SKU-0041", count: "12 left", tone: "red", width: "12%" },
  { item: "Toor Dal 1kg Pack", sku: "SKU-0088", count: "45 left", tone: "amber", width: "28%" },
  { item: "Refined Cooking Oil 5L", sku: "SKU-0112", count: "28 left", tone: "amber", width: "22%" },
];

const invoices = [
  { name: "Mehta Distributors", due: "Due in 3 days", amount: "₹84,500", tone: "cyan" },
  { name: "Singh Suppliers Ltd.", due: "Due tomorrow", amount: "₹1,24,000", tone: "amber" },
  { name: "Gupta Wholesalers", due: "Overdue 2 days", amount: "₹47,200", tone: "red" },
];

const operations = [
  { id: "#ORD-4821", customer: "Priya Sharma", location: "Mumbai", items: 3, amount: "₹4,280", status: "Delivered", date: "May 11" },
  { id: "#ORD-4820", customer: "Rohan Mehta", location: "Delhi", items: 1, amount: "₹1,890", status: "Shipped", date: "May 11" },
  { id: "#ORD-4819", customer: "Anika Rao", location: "Bengaluru", items: 5, amount: "₹7,640", status: "Pending", date: "May 10" },
  { id: "#ORD-4818", customer: "Karan Shah", location: "Pune", items: 2, amount: "₹2,180", status: "Processing", date: "May 10" },
  { id: "#ORD-4817", customer: "Neha Iyer", location: "Chennai", items: 4, amount: "₹5,920", status: "Cancelled", date: "May 09" },
  { id: "#ORD-4816", customer: "Vikram Singh", location: "Jaipur", items: 1, amount: "₹1,890", status: "Shipped", date: "May 09" },
];

const aiCards = [
  {
    title: "Reorder Basmati Rice Premium",
    category: "Inventory",
    priority: "High Priority",
    body: "At current sales velocity, stock will be exhausted in 4 days. Recommended reorder quantity: 500 units from Mehta Distributors.",
    action: "Create Purchase Order",
    tone: "amber",
    icon: Package,
  },
  {
    title: "Email Campaign Performing Well",
    category: "Marketing",
    priority: "Medium",
    body: "Your last email had a 34.2% open rate. A follow-up sequence to engaged users could yield 15-20% more conversions.",
    action: "Schedule Follow-up",
    tone: "blue",
    icon: Send,
  },
  {
    title: "Weekend Revenue 34% Higher",
    category: "Sales Insight",
    priority: "Medium",
    body: "Sales data shows consistent weekend peaks. Consider running flash promotions on Friday evenings to amplify the trend further.",
    action: "Create Campaign",
    tone: "green",
    icon: BarChart3,
  },
  {
    title: "3 Invoices Require Attention",
    category: "Operations",
    priority: "High Priority",
    body: "Total pending and overdue: ₹2,55,700 across 3 vendor invoices. Prompt payment will maintain supplier credit terms.",
    action: "Review Invoices",
    tone: "red",
    icon: Wallet,
  },
];

const activity = [
  { title: "New order placed", meta: "Priya Sharma - ₹4,280", time: "2 min ago", tone: "green" },
  { title: "Product page viewed", meta: "Basmati Rice 25kg × 84 views", time: "5 min ago", tone: "cyan" },
  { title: "Cart abandoned", meta: "3 items - ₹2,140 value", time: "12 min ago", tone: "amber" },
  { title: "New user signup", meta: "kiran.patel@gmail.com", time: "18 min ago", tone: "blue" },
  { title: "Checkout completed", meta: "Vikram Singh - ₹3,420", time: "24 min ago", tone: "green" },
];

const websiteStats = [
  { label: "Website Status", value: "Live", meta: "Deployed 2h ago", icon: Globe2, tone: "mint" },
  { label: "Published Products", value: "124", meta: "12 pending review", icon: Box, tone: "blue" },
  { label: "Website Visitors", value: "2,841", meta: "This week", icon: UsersIcon, tone: "cyan" },
  { label: "Conversion Rate", value: "3.2%", meta: "+0.4% vs last week", icon: BarChart3, tone: "teal" },
  { label: "Active Theme", value: "Lumina", meta: "Edited today", icon: Palette, tone: "amber" },
];

const websiteTemplates = [
  { name: "Lumina", tag: "Fashion", tone: "lumina" },
  { name: "Nexus", tag: "Electronics", tone: "nexus" },
  { name: "Verde", tag: "Grocery", tone: "verde" },
  { name: "Aria", tag: "Beauty", tone: "aria" },
  { name: "Aura", tag: "Decor", tone: "aura" },
  { name: "Terra", tag: "Organic", tone: "terra" },
  { name: "Slate", tag: "Office", tone: "slate" },
  { name: "Saffron", tag: "Crafts", tone: "saffron" },
];

const builderSteps = ["Business Setup", "Choose Template", "Connect Products", "Customization", "Domain & Hosting", "Publish"];

const websiteProducts = [
  { name: "Handwoven Jute Bag", meta: "Bags · 48 in stock", status: "Published", selected: true },
  { name: "Silk Saree — Red", meta: "Clothing · 12 in stock", status: "Draft", selected: true },
  { name: "Ceramic Planter Set", meta: "Home · Out of stock", status: "Published", selected: true, warning: "Out of Stock" },
  { name: "Bamboo Desk Organizer", meta: "Office · 33 in stock", status: "Hidden", selected: false },
  { name: "Clay Candle Holder", meta: "Decor · 20 in stock", status: "Draft", selected: false },
  { name: "Khadi Face Scrub", meta: "Beauty · 88 in stock", status: "Published", selected: false },
];

const readinessChecks = [
  { label: "SEO Readiness", value: "Good", icon: SearchCheck },
  { label: "Mobile Responsiveness", value: "Optimized", icon: Smartphone },
  { label: "Speed Score", value: "91 / 100", icon: Gauge },
  { label: "Products Connected", value: "3 products", icon: Box },
  { label: "SSL Active", value: "Enabled", icon: Lock },
];

const brandColors = ["#7784ff", "#58d0bd", "#e8b75f", "#ea7171", "#39b6e8", "#9a7ce8", "#ff9138", "#eeeeee"];
const typographyOptions = ["Satoshi + Inter", "Playfair + Source Sans", "Syne + Manrope", "DM Serif + DM Sans"];
const layoutStyles = ["Modern Grid", "Classic List", "Magazine", "Minimal"];

function UsersIcon(props: React.ComponentProps<typeof Globe2>) {
  return <ShoppingBag {...props} />;
}

export default function Home() {
  const [adminChartKey, setAdminChartKey] = useState(0);
  const [activeHash, setActiveHash] = useState("");
  const [builderOpen, setBuilderOpen] = useState(false);
  const [builderStep, setBuilderStep] = useState(1);
  const [isPublished, setIsPublished] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("Lumina");
  const [selectedProducts, setSelectedProducts] = useState(
    websiteProducts.filter((product) => product.selected).map((product) => product.name)
  );
  const [brandColor, setBrandColor] = useState(brandColors[0]);
  const [typography, setTypography] = useState(typographyOptions[0]);
  const [layoutStyle, setLayoutStyle] = useState(layoutStyles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAdminChartKey((prev) => prev + 1);
    }, 7500); // 2.5s animation duration + 5s pause
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const syncHash = () => setActiveHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const showWebsiteBuilder = activeHash === "#website";

  if (showWebsiteBuilder) {
    return (
      <AdminShell activePage="website">
        <WebsiteBuilder
          builderOpen={builderOpen}
          builderStep={builderStep}
          isPublished={isPublished}
          onOpenBuilder={(step = 1) => {
            setBuilderOpen(true);
            setBuilderStep(step);
            setIsPublished(false);
          }}
          onCloseBuilder={() => {
            setBuilderOpen(false);
            setBuilderStep(1);
            setIsPublished(false);
          }}
          onNextStep={() => setBuilderStep((step) => Math.min(step + 1, builderSteps.length))}
          onPrevStep={() => setBuilderStep((step) => Math.max(step - 1, 1))}
          onStepSelect={(step) => {
            setBuilderStep(step);
            setIsPublished(false);
          }}
          onPublish={() => setIsPublished(true)}
          selectedTemplate={selectedTemplate}
          onTemplateSelect={setSelectedTemplate}
          selectedProducts={selectedProducts}
          onProductsChange={setSelectedProducts}
          brandColor={brandColor}
          onBrandColorChange={setBrandColor}
          typography={typography}
          onTypographyChange={setTypography}
          layoutStyle={layoutStyle}
          onLayoutStyleChange={setLayoutStyle}
        />
      </AdminShell>
    );
  }

  return (
    <AdminShell activePage="dashboard">
      <section className="content">
          <div className="dashboardHero">
            <div>
              <h1>Good Evening, Himanshu</h1>
              <p>You have 6 pending orders and 3 low-stock alerts today.</p>
            </div>
            <div className="quickActions">
              {quickActions.map((action) =>
                action === "Add Product" ? (
                  <a href="/admin/products/add-product" key={action}>
                    <Plus size={15} />
                    <span>{action}</span>
                  </a>
                ) : action === "Publish Website" ? (
                  <a href="/admin/dashboard#website" key={action}>
                    <Plus size={15} />
                    <span>{action}</span>
                  </a>
                ) : (
                  <button type="button" key={action}>
                    <Plus size={15} />
                    <span>{action}</span>
                  </button>
                )
              )}
            </div>
          </div>

          <section className="metricGrid" aria-label="Business metrics">
            {metricCards.map((item) => (
              <article className={`metricCard ${item.tone}`} key={item.label}>
                <div className="metricTop">
                  <span>{item.label}</span>
                  <div>
                <item.icon size={21} />
              </div>
                </div>
              <strong>{item.value}</strong>
                <p><b>{item.change}</b> {item.meta}</p>
                <div className="miniSpark" />
            </article>
          ))}
        </section>

          <section className="dashboardGrid">
            <article className="revenuePanel">
              <div className="panelTitle">
                <div>
                  <h2>Revenue Overview</h2>
                  <p>Monthly revenue and order trends</p>
                </div>
                <div className="chartLegend">
                  <span><i className="blueDot" /> Revenue</span>
                  <span><i className="greenDot" /> Orders</span>
                </div>
                <div className="rangeTabs">
                  <button>7D</button>
                  <button>30D</button>
                  <button>3M</button>
                  <button className="active">12M</button>
                </div>
              </div>

              <div className="revenueStats">
                <div><strong>₹2.86 Cr</strong><span>Total Revenue (FY)</span></div>
                <div><strong>23,270</strong><span>Total Orders (FY)</span></div>
                <div><strong>+18.6%</strong><span>YoY Growth</span></div>
              </div>

              <div className="chartBox">
                <div className="chartLabels">
                  <span>₹36L</span><span>₹27L</span><span>₹18L</span><span>₹9L</span><span>₹0L</span>
                </div>
                <svg key={adminChartKey} viewBox="0 0 680 260" preserveAspectRatio="none" aria-hidden="true" style={{ overflow: 'visible' }}>
                  <defs>
                    <linearGradient id="admin-rev-glow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7c86ff" stopOpacity="0.16" />
                      <stop offset="100%" stopColor="#7c86ff" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="admin-orders-glow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4ad1b7" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#4ad1b7" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Revenue Fill */}
                  <path d="M10 190 C54 155 83 155 126 175 C165 195 173 130 224 142 C277 157 287 102 350 96 C392 92 403 145 452 134 C515 122 542 90 585 116 C621 138 635 108 670 66 L670 260 L10 260 Z" fill="url(#admin-rev-glow)" className="rev-fill" />
                  {/* Orders Fill */}
                  <path d="M10 210 C54 185 83 175 126 190 C165 210 173 150 224 165 C277 180 287 120 350 115 C392 110 403 170 452 155 C515 140 542 110 585 135 C621 155 635 130 670 95 L670 260 L10 260 Z" fill="url(#admin-orders-glow)" className="orders-fill" />
                  {/* Revenue Line */}
                  <path d="M10 190 C54 155 83 155 126 175 C165 195 173 130 224 142 C277 157 287 102 350 96 C392 92 403 145 452 134 C515 122 542 90 585 116 C621 138 635 108 670 66" className="rev-stroke" />
                  {/* Orders Line */}
                  <path d="M10 210 C54 185 83 175 126 190 C165 210 173 150 224 165 C277 180 287 120 350 115 C392 110 403 170 452 155 C515 140 542 110 585 135 C621 155 635 130 670 95" className="orders-stroke" />
                  
                  {/* Pulsing end points */}
                  <g className="admin-chart-points">
                    {/* Revenue dot */}
                    <circle cx="670" cy="66" r="3" fill="#7c86ff" />
                    <circle cx="670" cy="66" r="3" fill="none" stroke="#7c86ff" strokeWidth="1">
                      <animate attributeName="r" values="3;9" dur="2.2s" repeatCount="indefinite" begin="2s" />
                      <animate attributeName="opacity" values="0.8;0" dur="2.2s" repeatCount="indefinite" begin="2s" />
                    </circle>
                    {/* Orders dot */}
                    <circle cx="670" cy="95" r="3" fill="#4ad1b7" />
                    <circle cx="670" cy="95" r="3" fill="none" stroke="#4ad1b7" strokeWidth="1">
                      <animate attributeName="r" values="3;9" dur="2.2s" repeatCount="indefinite" begin="2.3s" />
                      <animate attributeName="opacity" values="0.8;0" dur="2.2s" repeatCount="indefinite" begin="2.3s" />
                    </circle>
                  </g>
                </svg>
                <div className="months">
                  {["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"].map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>

              <div className="channelList">
                <div className="channelHead"><span>Revenue by Channel</span><span>FY 2024-25</span></div>
                {revenueChannels.map((channel) => (
                  <div className={`channelRow ${channel.tone}`} key={channel.name}>
                    <div><i /><strong>{channel.name}</strong></div>
                    <span>{channel.change}</span>
                    <b>{channel.value}</b>
                    <em>{channel.share}</em>
                    <div className="bar"><span style={{ width: channel.width }} /></div>
                  </div>
                ))}
              </div>
            </article>

            <aside className="rightRail">
              <article className="railCard">
                <div className="railTitle"><h3>Low Stock Alerts</h3><span>3</span></div>
                {stockAlerts.map((alert) => (
                  <div className={`stockItem ${alert.tone}`} key={alert.item}>
                    <div>
                      <strong>{alert.item}</strong>
                      <span>{alert.sku}</span>
                    </div>
                    <b>{alert.count}</b>
                    <div className="stockBar"><span style={{ width: alert.width }} /></div>
                  </div>
                ))}
                <button className="ghostLink" type="button">View all ›</button>
              </article>

              <article className="railCard">
                <div className="railTitle"><h3>Pending Invoices</h3><span>3</span></div>
                {invoices.map((invoice) => (
                  <div className="invoiceItem" key={invoice.name}>
                    <i className={invoice.tone} />
                    <div>
                      <strong>{invoice.name}</strong>
                      <span>{invoice.due}</span>
                    </div>
                    <b>{invoice.amount}</b>
                  </div>
                ))}
              </article>

              <article className="railCard">
                <div className="campaignTitle">
                  <Bell size={16} />
                  <h3>Active Campaigns</h3>
                </div>
                <div className="campaignItem"><span>Akshaya Tritiya Sale</span><b>Live</b></div>
                <div className="campaignItem"><span>Mother's Day Email</span><b>Scheduled</b></div>
              </article>
            </aside>
          </section>

          <section className="operationsPanel">
            <div className="operationsHeader">
              <h2>Recent Operations</h2>
              <div>
                {["Orders", "Products", "Customers", "Invoices"].map((tab, index) => (
                  <button className={index === 0 ? "active" : ""} type="button" key={tab}>{tab}</button>
                ))}
              </div>
            </div>
            <div className="operationsTable">
              <div className="operationsRow head">
                <span>Order ID</span><span>Customer</span><span>Location</span><span>Items</span><span>Amount</span><span>Status</span><span>Date</span>
              </div>
              {operations.map((order) => (
                <div className="operationsRow" key={`${order.id}-${order.customer}-${order.status}`}>
                  <strong>{order.id}</strong>
                  <span>{order.customer}</span>
                  <span>{order.location}</span>
                  <span>{order.items}</span>
                  <b>{order.amount}</b>
                  <em className={order.status.toLowerCase()}>{order.status}</em>
                  <span>{order.date}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bottomGrid">
            <article className="assistantPanel">
              <div className="assistantHead">
                <div>
                  <Sparkles size={18} />
                  <div>
                    <h2>AI Business Assistant</h2>
                    <p>4 insights ready for today</p>
                  </div>
                </div>
                <button type="button">View All ›</button>
              </div>

              <div className="insightGrid">
                {aiCards.map((card) => (
                  <div className={`dbInsightCard ${card.tone}`} key={card.title}>
                    <card.icon size={17} />
                    <div>
                      <span>{card.category}</span>
                      <small>{card.priority}</small>
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                    <button type="button">{card.action} →</button>
                  </div>
                ))}
              </div>
            </article>

            <article className="websitePanel">
              <div className="websiteHead">
                <div>
                  <Globe2 size={18} />
                  <div>
                    <h2>Website Status</h2>
                    <p><i /> Live · shahenterprises.in</p>
                  </div>
                </div>
                <button type="button">Open ↗</button>
              </div>
              <div className="webStats">
                <div><span>+14%</span><strong>2,841</strong><p>Visitors Today</p></div>
                <div><span>+0.4%</span><strong>3.2%</strong><p>Conversion Rate</p></div>
                <div><span>+22%</span><strong>124</strong><p>Online Orders</p></div>
              </div>
              <h3>Hourly Traffic — Today</h3>
              <div className="trafficBars">
                {[12, 28, 42, 55, 47, 63, 72, 44, 18].map((height, index) => (
                  <i style={{ height: `${height}px` }} key={index} />
                ))}
              </div>
              <div className="trafficLabels">
                {["6am", "8am", "10am", "12pm", "2pm", "4pm", "6pm", "8pm", "10pm"].map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
              <h3>Recent Activity</h3>
              <div className="activityList">
                {activity.map((item) => (
                  <div className={`activityItem ${item.tone}`} key={item.title}>
                    <i />
                    <div><strong>{item.title}</strong><span>{item.meta}</span></div>
                    <time>{item.time}</time>
                  </div>
                ))}
              </div>
            </article>
          </section>
      </section>
    </AdminShell>
  );
}

type WebsiteBuilderProps = {
  builderOpen: boolean;
  builderStep: number;
  isPublished: boolean;
  onOpenBuilder: (step?: number) => void;
  onCloseBuilder: () => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  onStepSelect: (step: number) => void;
  onPublish: () => void;
  selectedTemplate: string;
  onTemplateSelect: (template: string) => void;
  selectedProducts: string[];
  onProductsChange: (products: string[]) => void;
  brandColor: string;
  onBrandColorChange: (color: string) => void;
  typography: string;
  onTypographyChange: (typography: string) => void;
  layoutStyle: string;
  onLayoutStyleChange: (layout: string) => void;
};

function WebsiteBuilder({
  builderOpen,
  builderStep,
  isPublished,
  onOpenBuilder,
  onCloseBuilder,
  onNextStep,
  onPrevStep,
  onStepSelect,
  onPublish,
  selectedTemplate,
  onTemplateSelect,
  selectedProducts,
  onProductsChange,
  brandColor,
  onBrandColorChange,
  typography,
  onTypographyChange,
  layoutStyle,
  onLayoutStyleChange,
}: WebsiteBuilderProps) {
  if (builderOpen) {
    return (
      <section className="websiteFlow">
        <div className="flowTopbar">
          <button type="button" onClick={builderStep === 1 ? onCloseBuilder : onPrevStep}>
            <ArrowLeft size={16} />
            Back
          </button>
          <strong>Create Website</strong>
          <span>Step {isPublished ? 6 : builderStep} of 6</span>
        </div>
        <StepProgress activeStep={isPublished ? 6 : builderStep} onStepSelect={onStepSelect} />
        <div className="flowCanvas">
          {isPublished ? (
            <PublishedStep />
          ) : (
            <BuilderStep
              step={builderStep}
              onPublish={onPublish}
              selectedTemplate={selectedTemplate}
              onTemplateSelect={onTemplateSelect}
              selectedProducts={selectedProducts}
              onProductsChange={onProductsChange}
              brandColor={brandColor}
              onBrandColorChange={onBrandColorChange}
              typography={typography}
              onTypographyChange={onTypographyChange}
              layoutStyle={layoutStyle}
              onLayoutStyleChange={onLayoutStyleChange}
            />
          )}
        </div>
        {!isPublished && (
          <div className="flowActions">
            <button className="flowSecondary" type="button" onClick={builderStep === 1 ? onCloseBuilder : onPrevStep}>
              <ArrowLeft size={15} />
              Back
            </button>
            {builderStep < 6 ? (
              <button className="flowPrimary" type="button" onClick={onNextStep}>
                Next Step
                <ChevronRight size={15} />
              </button>
            ) : null}
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="websiteBuilder">
      <div className="wbHero">
        <div>
          <h1>Website Builder</h1>
          <p>Create, customize, and publish your online store in minutes.</p>
        </div>
        <div className="wbActions">
          <button type="button" onClick={() => onOpenBuilder(1)}><Plus size={15} /> Create Website</button>
          <button type="button"><RefreshCw size={15} /> Publish Changes</button>
          <button className="accent" type="button"><ExternalLink size={15} /> Open Live Website</button>
        </div>
      </div>

      <div className="wbStats">
        {websiteStats.map((stat) => (
          <article className={`wbStat ${stat.tone}`} key={stat.label}>
            <span><stat.icon size={18} /></span>
            <strong>{stat.value}</strong>
            <p>{stat.label}</p>
            <small>{stat.meta}</small>
          </article>
        ))}
      </div>

      <div className="wbLayout">
        <div className="wbMain">
          <article className="wbCard launchCard">
            <div className="launchHead">
              <div>
                <h2>Launch your ecommerce website in a few simple steps.</h2>
                <p>2 of 5 steps completed</p>
              </div>
              <button type="button" onClick={() => onOpenBuilder(3)}>Continue Setup</button>
            </div>
            <div className="launchBar"><span /></div>
            <div className="miniSteps">
              {["Choose Theme", "Add Branding", "Connect Products", "Customize", "Publish"].map((step, index) => (
                <div className={index < 2 ? "done" : ""} key={step}>
                  <i>{index < 2 ? <Check size={13} /> : <Circle size={9} />}</i>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </article>

          <TemplateLibrary compact selectedTemplate={selectedTemplate} onTemplateSelect={onTemplateSelect} />

          <article className="wbCard aiWebsite">
            <div className="aiTitle">
              <span><Wand2 size={18} /></span>
              <div>
                <h2>Generate your website with AI.</h2>
                <p>Describe your business and AI will build the structure, sections, and layout.</p>
              </div>
            </div>
            <div className="aiForm">
              <label>Business Name<input placeholder="e.g. Riya Crafts" /></label>
              <label>Industry<input placeholder="e.g. Handmade Goods" /></label>
              <label>Brand Style<input placeholder="e.g. Minimal and Elegant" /></label>
              <label>Color Tone<input placeholder="e.g. Warm neutrals" /></label>
            </div>
            <button type="button" onClick={() => onOpenBuilder(1)}><Wand2 size={16} /> Generate Website</button>
          </article>
        </div>

        <aside className="wbSide">
          <article className="wbCard editorCard">
            <div className="browserMock">
              <div><i /><i /><i /><span /></div>
              <Globe2 size={27} />
              <p>yourbusiness.com</p>
            </div>
            <h2>Website Editor</h2>
            <p>Customize your website visually with drag and drop sections.</p>
            <button type="button"><Pencil size={15} /> Open Editor</button>
          </article>
          <StatusPanel />
          <ProductPublishing />
        </aside>
      </div>
    </section>
  );
}

function StepProgress({ activeStep, onStepSelect }: { activeStep: number; onStepSelect: (step: number) => void }) {
  return (
    <div className="stepProgress">
      {builderSteps.map((step, index) => {
        const number = index + 1;
        const done = number < activeStep;
        const active = number === activeStep;
        return (
          <button
            className={`stepItem ${done ? "done" : ""} ${active ? "active" : ""}`}
            type="button"
            onClick={() => onStepSelect(number)}
            key={step}
          >
            <span>{done ? <Check size={13} /> : number}</span>
            <small>{step}</small>
          </button>
        );
      })}
    </div>
  );
}

function BuilderStep({
  step,
  onPublish,
  selectedTemplate,
  onTemplateSelect,
  selectedProducts,
  onProductsChange,
  brandColor,
  onBrandColorChange,
  typography,
  onTypographyChange,
  layoutStyle,
  onLayoutStyleChange,
}: {
  step: number;
  onPublish: () => void;
  selectedTemplate: string;
  onTemplateSelect: (template: string) => void;
  selectedProducts: string[];
  onProductsChange: (products: string[]) => void;
  brandColor: string;
  onBrandColorChange: (color: string) => void;
  typography: string;
  onTypographyChange: (typography: string) => void;
  layoutStyle: string;
  onLayoutStyleChange: (layout: string) => void;
}) {
  if (step === 2) return <ChooseTemplateStep selectedTemplate={selectedTemplate} onTemplateSelect={onTemplateSelect} />;
  if (step === 3) return <ConnectProductsStep selectedProducts={selectedProducts} onProductsChange={onProductsChange} />;
  if (step === 4) {
    return (
      <CustomizationStep
        brandColor={brandColor}
        onBrandColorChange={onBrandColorChange}
        typography={typography}
        onTypographyChange={onTypographyChange}
        layoutStyle={layoutStyle}
        onLayoutStyleChange={onLayoutStyleChange}
      />
    );
  }
  if (step === 5) return <DomainStep />;
  if (step === 6) return <PublishStep onPublish={onPublish} />;
  return <BusinessSetupStep />;
}

function BusinessSetupStep() {
  return (
    <article className="flowPanel businessStep">
      <h2>Business Setup</h2>
      <p>Start by setting up your brand identity.</p>
      <div className="flowGrid">
        <label>Business Name<input placeholder="e.g. Riya Crafts" /></label>
        <label>Industry<input placeholder="e.g. Handmade Goods" /></label>
        <label>Website Name<input placeholder="e.g. riyacrafts.in" /></label>
        <label>Logo<button type="button"><Upload size={15} /> Upload logo image</button></label>
      </div>
      <label className="wideLabel">Business Description<textarea placeholder="Tell customers what your business is about..." /></label>
    </article>
  );
}

function ChooseTemplateStep({
  selectedTemplate,
  onTemplateSelect,
}: {
  selectedTemplate: string;
  onTemplateSelect: (template: string) => void;
}) {
  return (
    <div className="templateStep">
      <h2>Choose a Template</h2>
      <p>Pick a template to start with. You can customize it later.</p>
      <div className="aiRecommend"><Wand2 size={15} /> <strong>AI Recommended:</strong> Lumina — best fit for your industry</div>
      <TemplateLibrary selectedTemplate={selectedTemplate} onTemplateSelect={onTemplateSelect} />
    </div>
  );
}

function ConnectProductsStep({
  selectedProducts,
  onProductsChange,
}: {
  selectedProducts: string[];
  onProductsChange: (products: string[]) => void;
}) {
  const allSelected = selectedProducts.length === websiteProducts.length;

  const toggleProduct = (productName: string) => {
    onProductsChange(
      selectedProducts.includes(productName)
        ? selectedProducts.filter((name) => name !== productName)
        : [...selectedProducts, productName]
    );
  };

  return (
    <article className="flowPanel productsStep">
      <h2>Connect Products</h2>
      <p>Products and inventory will sync automatically with your website.</p>
      <div className="selectLine">
        <span>{selectedProducts.length} of {websiteProducts.length} selected</span>
        <button type="button" onClick={() => onProductsChange(allSelected ? [] : websiteProducts.map((product) => product.name))}>
          {allSelected ? "Clear All" : "Select All"}
        </button>
      </div>
      <div className="productSelectList">
        {websiteProducts.map((product) => {
          const isSelected = selectedProducts.includes(product.name);

          return (
          <button
            className={isSelected ? "selected" : ""}
            type="button"
            aria-pressed={isSelected}
            onClick={() => toggleProduct(product.name)}
            key={product.name}
          >
            <i>{isSelected ? <Check size={13} /> : null}</i>
            <div><strong>{product.name}</strong><span>{product.meta}</span></div>
            {product.warning ? <em>{product.warning}</em> : null}
          </button>
          );
        })}
      </div>
    </article>
  );
}

function CustomizationStep({
  brandColor,
  onBrandColorChange,
  typography,
  onTypographyChange,
  layoutStyle,
  onLayoutStyleChange,
}: {
  brandColor: string;
  onBrandColorChange: (color: string) => void;
  typography: string;
  onTypographyChange: (typography: string) => void;
  layoutStyle: string;
  onLayoutStyleChange: (layout: string) => void;
}) {
  return (
    <article className="flowPanel customStep">
      <h2>Website Customization</h2>
      <p>Set your brand colors, typography, and layout style.</p>
      <span className="fieldTitle">Brand Color</span>
      <div className="swatches">
        {brandColors.map((color) => (
          <button
            className={brandColor === color ? "active" : ""}
            style={{ background: color }}
            type="button"
            aria-label={`Select brand color ${color}`}
            aria-pressed={brandColor === color}
            onClick={() => onBrandColorChange(color)}
            key={color}
          />
        ))}
      </div>
      <span className="fieldTitle">Typography</span>
      <div className="optionList">
        {typographyOptions.map((option) => (
          <button
            className={typography === option ? "active" : ""}
            type="button"
            aria-pressed={typography === option}
            onClick={() => onTypographyChange(option)}
            key={option}
          >
            {option}
            {typography === option ? <Check size={14} /> : null}
          </button>
        ))}
      </div>
      <span className="fieldTitle">Layout Style</span>
      <div className="layoutOptions">
        {layoutStyles.map((option) => (
          <button
            className={layoutStyle === option ? "active" : ""}
            type="button"
            aria-pressed={layoutStyle === option}
            onClick={() => onLayoutStyleChange(option)}
            key={option}
          >
            <span />
            {option}
          </button>
        ))}
      </div>
    </article>
  );
}

function DomainStep() {
  return (
    <>
      <article className="flowPanel domainStep">
        <h2>Domain & Hosting</h2>
        <p>Connect your domain and choose a hosting plan.</p>
        <label>Connect Existing Domain<div><input placeholder="yourdomain.com" /><button type="button"><ChevronRight size={15} /> Connect</button></div></label>
        <div className="orLine"><span>or</span></div>
        <div className="sslRow"><div><strong>SSL Certificate</strong><span>Secure your website with HTTPS</span></div><button type="button"><i /></button></div>
      </article>
      <section className="hostingPlans">
        <h2>Hosting Plan</h2>
        <div>
          {[
            ["Starter", "Free", "1GB storage", "10K visits/mo", "Subdomain only"],
            ["Pro", "Rs 499/mo", "10 GB storage", "100K visits/mo", "Custom domain"],
            ["Business", "Rs 1299/mo", "Unlimited storage", "Unlimited visits", "Priority support"],
          ].map((plan, index) => (
            <article className={index === 1 ? "active" : ""} key={plan[0]}>
              <h3>{plan[0]}</h3>
              <strong>{plan[1]}</strong>
              {plan.slice(2).map((feature) => <p key={feature}><Check size={13} /> {feature}</p>)}
              {index === 1 ? <Check className="planCheck" size={15} /> : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function PublishStep({ onPublish }: { onPublish: () => void }) {
  return (
    <div className="publishWrap">
      <article className="flowPanel publishStep">
        <h2>Publish Your Website</h2>
        <p>Review everything before going live.</p>
        {readinessChecks.map((item) => (
          <div className="readyRow" key={item.label}>
            <item.icon size={16} />
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </article>
      <div className="publishActions">
        <button type="button"><Eye size={15} /> Preview Live Site</button>
        <button className="publishBtn" type="button" onClick={onPublish}><Globe2 size={15} /> Publish Website</button>
      </div>
    </div>
  );
}

function PublishedStep() {
  return (
    <article className="publishedPanel">
      <span><CheckCircle2 size={30} /></span>
      <h2>Website Published!</h2>
      <p>Your store is now live at yourbusiness.com</p>
      <button type="button"><ExternalLink size={15} /> Open Live Website</button>
    </article>
  );
}

function TemplateLibrary({
  compact = false,
  selectedTemplate,
  onTemplateSelect,
}: {
  compact?: boolean;
  selectedTemplate: string;
  onTemplateSelect: (template: string) => void;
}) {
  return (
    <article className={compact ? "wbCard templateLibrary compact" : "templateLibrary"}>
      {compact ? (
        <div className="templateHead"><div><h2>Template Library</h2><p>Premium ecommerce templates for every category</p></div><button type="button"><Eye size={14} /> View All</button></div>
      ) : null}
      <div className="templateGrid">
        {websiteTemplates.map((template) => (
          <button
            className={`templateCard ${template.tone} ${selectedTemplate === template.name ? "active" : ""}`}
            type="button"
            aria-pressed={selectedTemplate === template.name}
            onClick={() => onTemplateSelect(template.name)}
            key={template.name}
          >
            <div className="templatePreview"><span /><span /><span /><b /><i /><i /><i /></div>
            <div><strong>{template.name}</strong><em>{template.tag}</em></div>
            <p><span>Responsive</span> · <span>AI Optimized</span></p>
          </button>
        ))}
      </div>
    </article>
  );
}

function StatusPanel() {
  return (
    <article className="wbCard statusPanel">
      <h2>Website Status</h2>
      {[
        ["Domain Connected", "Active", Globe2],
        ["SSL Certificate", "Secure", Lock],
        ["Hosting Status", "Running", Server],
        ["Website Speed", "94 / 100", Gauge],
        ["SEO Health", "Needs Work", BarChart3],
      ].map(([label, value, Icon], index) => (
        <div className="statusRow" key={label as string}>
          <Icon size={15} />
          <span>{label as string}</span>
          <strong className={index === 4 ? "warn" : ""}>{value as string}</strong>
        </div>
      ))}
    </article>
  );
}

function ProductPublishing() {
  return (
    <article className="wbCard productPublishing">
      <div className="templateHead"><h2>Product Publishing</h2><button type="button"><Box size={14} /> View All</button></div>
      {websiteProducts.slice(0, 4).map((product) => (
        <div className="publishProduct" key={product.name}>
          <div><strong>{product.name}</strong><span>Stock: {product.meta.split("· ")[1]?.replace(" in stock", "").replace("Out of stock", "Out of stock")}</span></div>
          <em className={product.status.toLowerCase()}>{product.status}</em>
        </div>
      ))}
      <button className="bulkBtn" type="button"><Upload size={13} /> Bulk Publish</button>
    </article>
  );
}
