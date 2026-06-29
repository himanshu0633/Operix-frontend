"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  ChartNoAxesColumn,
  ChevronDown,
  ChevronRight,
  Clock3,
  Calculator,
  CalendarDays,
  CheckSquare,
  Download,
  FileText,
  Headphones,
  LayoutTemplate,
  Mail,
  Megaphone,
  MonitorPlay,
  Play,
  Search,
  Users,
  Warehouse,
  Zap,
} from "lucide-react";
import "./Resources.css";

const resourceStats = [
  { value: "180+", label: "Guides & Articles" },
  { value: "24", label: "Business Templates" },
  { value: "60+", label: "Video Tutorials" },
  { value: "12", label: "Case Studies" },
];

const resourceTags = [
  { icon: BookOpen, label: "Guides", className: "guides" },
  { icon: Zap, label: "Updates", className: "updates" },
  { icon: FileText, label: "Docs", className: "docs" },
  { icon: LayoutTemplate, label: "Templates", className: "templates" },
  { icon: Play, label: "Tutorials", className: "tutorials" },
  { icon: BriefcaseBusiness, label: "Case Studies", className: "case-studies" },
  { icon: BarChart3, label: "Reports", className: "reports" },
  { icon: MonitorPlay, label: "Webinars", className: "webinars" },
];

const resourceCategories = ["All", "Guides", "Documentation", "Templates", "Videos", "Reports", "Case Studies"];

const popularSearches = [
  "Getting started",
  "Inventory setup",
  "Website builder",
  "Marketing automation",
  "Accounting basics",
];

const browseCategories = [
  {
    icon: BookOpen,
    title: "Guides",
    text: "Step-by-step business guides for every module.",
    count: "64",
    tone: "blue",
  },
  {
    icon: FileText,
    title: "Documentation",
    text: "Technical docs and API references.",
    count: "180",
    tone: "teal",
  },
  {
    icon: LayoutTemplate,
    title: "Business Templates",
    text: "Ready-to-use templates for operations.",
    count: "24",
    tone: "amber",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Reports",
    text: "Industry benchmarks and data insights.",
    count: "18",
    tone: "blue",
  },
  {
    icon: Play,
    title: "Video Tutorials",
    text: "Watch and learn with guided video walkthroughs.",
    count: "62",
    tone: "teal",
  },
  {
    icon: BriefcaseBusiness,
    title: "Case Studies",
    text: "How real businesses grow with the platform.",
    count: "12",
    tone: "blue",
  },
  {
    icon: MonitorPlay,
    title: "Webinars",
    text: "Live and on-demand expert webinars.",
    count: "28",
    tone: "amber",
  },
  {
    icon: Zap,
    title: "Product Updates",
    text: "Latest features, releases, and changelogs.",
    count: "36",
    tone: "blue",
  },
];

const featuredResources = [
  {
    icon: BookOpen,
    type: "Guide",
    readTime: "12 min read",
    title: "The Complete Guide to Inventory Management for Growing Businesses",
    text: "Learn how to track stock across locations, set smart reorder thresholds, automate purchase orders, and eliminate stockouts permanently.",
    date: "Jun 10, 2026",
    tone: "blue",
  },
  {
    icon: Play,
    type: "Tutorial",
    readTime: "8 min read",
    title: "Build a High-Converting Product Page in Under an Hour",
    text: "A practical walkthrough of the website builder — from product import to live storefront.",
    date: "Jun 5, 2026",
    tone: "teal",
  },
  {
    icon: BarChart3,
    type: "Report",
    readTime: "15 min read",
    title: "B2B vs D2C: Choosing the Right Business Model in 2026",
    text: "Data-driven analysis of 500 businesses to help you decide which model drives higher margins.",
    date: "May 28, 2026",
    tone: "amber",
  },
  {
    icon: BookOpen,
    type: "Guide",
    readTime: "10 min read",
    title: "Marketing Automation Without the Complexity",
    text: "How to set up AI-powered email sequences, campaign workflows, and attribution tracking in one afternoon.",
    date: "May 20, 2026",
    tone: "blue",
  },
];

const docsSidebar = [
  {
    icon: BookOpen,
    title: "Getting Started",
    links: [
      { label: "Creating your Operix account", hot: true },
      { label: "Setting up your workspace", hot: true },
      { label: "Inviting your team members", hot: true },
      { label: "Connecting your first products", hot: true },
      { label: "Overview of all modules", hot: false },
    ],
  },
  {
    icon: Warehouse,
    title: "Inventory Setup",
    links: [
      { label: "Adding stock locations", hot: true },
      { label: "Configuring reorder points", hot: true },
      { label: "Importing existing inventory", hot: false },
      { label: "Barcode scanning setup", hot: false },
    ],
  },
  {
    icon: MonitorPlay,
    title: "Website Builder",
    links: [
      { label: "Generating your first store with AI", hot: true },
      { label: "Customizing layout and design", hot: true },
      { label: "Connecting a custom domain", hot: false },
      { label: "Publishing your store", hot: false },
      { label: "Setting up product pages", hot: true },
      { label: "SEO settings and metadata", hot: false },
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing",
    links: [
      { label: "Creating your first campaign", hot: true },
      { label: "AI content generation overview", hot: true },
      { label: "Setting up email sequences", hot: false },
      { label: "Tracking campaign performance", hot: false },
    ],
  },
  {
    icon: Calculator,
    title: "Accounting",
    links: [
      { label: "Connecting your bank account", hot: true },
      { label: "Setting up tax rates", hot: false },
      { label: "Understanding the P&L report", hot: true },
      { label: "Reconciling transactions", hot: false },
      { label: "Exporting reports for your accountant", hot: false },
    ],
  },
];

type ArticleDetail = {
  title: string;
  category: string;
  readTime: string;
  outline: string[];
};

const articlesData: Record<string, ArticleDetail> = {
  "Creating your Operix account": {
    title: "Creating your Operix account",
    category: "Getting Started",
    readTime: "3 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Setting up your workspace": {
    title: "Setting up your workspace",
    category: "Getting Started",
    readTime: "5 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Inviting your team members": {
    title: "Inviting your team members",
    category: "Getting Started",
    readTime: "2 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Connecting your first products": {
    title: "Connecting your first products",
    category: "Getting Started",
    readTime: "6 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Overview of all modules": {
    title: "Overview of all modules",
    category: "Getting Started",
    readTime: "8 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Adding stock locations": {
    title: "Adding stock locations",
    category: "Inventory Setup",
    readTime: "4 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Configuring reorder points": {
    title: "Configuring reorder points",
    category: "Inventory Setup",
    readTime: "5 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Importing existing inventory": {
    title: "Importing existing inventory",
    category: "Inventory Setup",
    readTime: "7 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Barcode scanning setup": {
    title: "Barcode scanning setup",
    category: "Inventory Setup",
    readTime: "6 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Generating your first store with AI": {
    title: "Generating your first store with AI",
    category: "Website Builder",
    readTime: "5 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Customizing layout and design": {
    title: "Customizing layout and design",
    category: "Website Builder",
    readTime: "10 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Connecting a custom domain": {
    title: "Connecting a custom domain",
    category: "Website Builder",
    readTime: "4 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Publishing your store": {
    title: "Publishing your store",
    category: "Website Builder",
    readTime: "3 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Setting up product pages": {
    title: "Setting up product pages",
    category: "Website Builder",
    readTime: "6 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "SEO settings and metadata": {
    title: "SEO settings and metadata",
    category: "Website Builder",
    readTime: "7 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Creating your first campaign": {
    title: "Creating your first campaign",
    category: "Marketing",
    readTime: "6 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "AI content generation overview": {
    title: "AI content generation overview",
    category: "Marketing",
    readTime: "5 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Setting up email sequences": {
    title: "Setting up email sequences",
    category: "Marketing",
    readTime: "8 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Tracking campaign performance": {
    title: "Tracking campaign performance",
    category: "Marketing",
    readTime: "4 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Connecting your bank account": {
    title: "Connecting your bank account",
    category: "Accounting",
    readTime: "4 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Setting up tax rates": {
    title: "Setting up tax rates",
    category: "Accounting",
    readTime: "5 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Understanding the P&L report": {
    title: "Understanding the P&L report",
    category: "Accounting",
    readTime: "6 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Reconciling transactions": {
    title: "Reconciling transactions",
    category: "Accounting",
    readTime: "7 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
  "Exporting reports for your accountant": {
    title: "Exporting reports for your accountant",
    category: "Accounting",
    readTime: "3 min",
    outline: [
      "Overview & prerequisites",
      "Step-by-step walkthrough",
      "Configuration options",
      "Common troubleshooting",
      "Related resources",
    ],
  },
};

const templateDownloads = [
  {
    icon: FileText,
    title: "Inventory Management Template",
    text: "Track stock levels, locations, reorder points, and supplier info across all SKUs.",
    size: "2.3 MB",
    downloads: "4,200+ downloads",
    format: "XLSX",
    tone: "teal",
  },
  {
    icon: FileText,
    title: "Professional Invoice Template",
    text: "Polished invoice template with auto-calculated totals, tax lines, and payment terms.",
    size: "0.8 MB",
    downloads: "8,100+ downloads",
    format: "PDF",
    tone: "blue",
  },
  {
    icon: FileText,
    title: "Accounting Ledger Template",
    text: "General ledger with P&L, balance sheet, and cash flow tabs pre-built.",
    size: "1.5 MB",
    downloads: "3,600+ downloads",
    format: "XLSX",
    tone: "amber",
  },
  {
    icon: MonitorPlay,
    title: "Marketing Calendar 2026",
    text: "Annual marketing planner with campaign slots, channels, budgets, and KPI tracking.",
    size: "1.1 MB",
    downloads: "5,900+ downloads",
    format: "XLSX",
    tone: "blue",
  },
  {
    icon: CheckSquare,
    title: "Business Operations Checklist",
    text: "A comprehensive daily, weekly, and monthly checklist for business operations.",
    size: "0.5 MB",
    downloads: "7,300+ downloads",
    format: "PDF",
    tone: "teal",
  },
];

const supportCards = [
  {
    icon: Megaphone,
    title: "Community Forum",
    text: "Join 5,400+ business owners sharing workflows, asking questions, and exchanging insights.",
    action: "Join the Community",
    tone: "blue",
    stats: [
      { icon: Users, value: "5,400+", label: "Members" },
      { icon: Megaphone, value: "12,800", label: "Discussions" },
    ],
  },
  {
    icon: BookOpen,
    title: "Help Center",
    text: "Browse 2,800+ articles covering every feature, setup guide, and troubleshooting step.",
    action: "Browse Help Center",
    tone: "teal",
    stats: [
      { icon: FileText, value: "2,800+", label: "Articles" },
      { icon: BookOpen, value: "98%", label: "Satisfaction" },
    ],
  },
  {
    icon: Headphones,
    title: "Live Support",
    text: "Talk to a real human. Our support team is available via chat, email, and video call.",
    action: "Contact Support",
    tone: "amber",
    stats: [
      { icon: Clock3, value: "< 2hrs", label: "Avg response" },
      { icon: Users, value: "24/5", label: "Availability" },
    ],
  },
];

export default function Resources() {
  const [selectedLink, setSelectedLink] = useState<string>("Creating your Operix account");
  const [expandedMenus, setExpandedMenus] = useState<string[]>(["Getting Started"]);

  const toggleMenu = (title: string) => {
    setExpandedMenus((prev) => {
      if (prev.includes(title)) {
        return prev.filter((item) => item !== title);
      } else {
        const next = [...prev, title];
        if (next.length > 2) {
          return next.slice(1); // Keep at most two open
        }
        return next;
      }
    });
  };

  const currentArticle = articlesData[selectedLink] || articlesData["Creating your Operix account"];

  return (
    <>
      <section id="resources" className="resources-section">
        <div className="lp-container resources-inner">
          {resourceTags.map(({ icon: Icon, label, className }) => (
            <span className={`resource-float ${className}`} key={label}>
              <Icon size={13} /> {label}
            </span>
          ))}

          <div className="resource-kicker">
            <span />
            Resource Library
          </div>

          <h2>
            Resources For <span>Modern Businesses</span>
          </h2>
          <p>
            Guides, tutorials, documentation, and business insights — everything you need to operate and grow.
          </p>

          <div className="resource-stats" aria-label="Resource library statistics">
            {resourceStats.map((stat) => (
              <div className="resource-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <small>{stat.label}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="resource-search-section" aria-label="Search resources">
        <div className="lp-container resource-search-inner">
          <form className="resource-search-box">
            <Search size={22} />
            <input type="search" placeholder="Search guides, reports, tutorials..." aria-label="Search resources" />
            <button type="submit">Search</button>
          </form>

          <div className="resource-category-row" aria-label="Resource categories">
            {resourceCategories.map((category, index) => (
              <button className={index === 0 ? "active" : ""} type="button" key={category}>
                {category}
              </button>
            ))}
          </div>

          <div className="popular-resources">
            <span>Popular:</span>
            {popularSearches.map((item) => (
              <a href="#resources" key={item}>{item}</a>
            ))}
          </div>
        </div>
      </section>

      <section className="resource-category-section" aria-label="Browse resources by category">
        <div className="lp-container">
          <div className="resource-category-heading">
            <span>Browse By Category</span>
            <h2>Everything You Need to Succeed</h2>
          </div>

          <div className="resource-card-grid">
            {browseCategories.map(({ icon: Icon, title, text, count, tone }) => (
              <Link href="/admin/dashboard" className={`resource-card ${tone}`} key={title}>
                <div className="resource-card-top">
                  <span className="resource-card-icon">
                    <Icon size={21} />
                  </span>
                  <small>{count}</small>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="resource-card-action-text">Browse all <span>→</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-resource-section" aria-label="Featured resources">
        <div className="lp-container">
          <div className="featured-resource-heading">
            <div>
              <span>Featured</span>
              <h2>Top Resources This Month</h2>
            </div>
            <a href="#resources">View all resources <span>→</span></a>
          </div>

          <div className="featured-resource-grid">
            {featuredResources.map(({ icon: Icon, type, readTime, title, text, date, tone }) => (
              <Link href="/admin/dashboard" className={`featured-resource-card ${tone}`} key={title}>
                <div className="featured-resource-art">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="featured-resource-body">
                  <div className="featured-meta">
                    <span>
                      <Icon size={13} /> {type}
                    </span>
                    <small>
                      <Clock3 size={12} /> {readTime}
                    </small>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="featured-card-bottom">
                    <time>{date}</time>
                    <div className="featured-card-action-text">Read More <span>→</span></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="docs-hub-section" aria-label="Documentation hub">
        <div className="lp-container">
          <div className="docs-hub-heading">
            <span>Documentation Hub</span>
            <h2>Find Any Answer Fast</h2>
          </div>

          <div className="docs-browser">
            <aside className="docs-sidebar">
              <label className="docs-search">
                <Search size={15} />
                <input type="search" placeholder="Search docs..." aria-label="Search documentation" />
              </label>

              <nav aria-label="Documentation sections">
                {docsSidebar.map(({ icon: Icon, title, links }) => {
                  const isMenuOpen = expandedMenus.includes(title);
                  return (
                    <div className={`docs-nav-group ${isMenuOpen ? "open" : ""}`} key={title}>
                      <button type="button" onClick={() => toggleMenu(title)}>
                        <span>
                          <Icon size={16} /> {title}
                        </span>
                        {isMenuOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                      </button>
                      {isMenuOpen && links && (
                        <div className="docs-nav-links">
                          {links.map((link) => {
                            const label = typeof link === "string" ? link : link.label;
                            const isHot = typeof link === "string" ? false : link.hot;
                            const isActive = selectedLink === label;
                            return (
                              <a
                                className={isActive ? "active" : ""}
                                href="#resources"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setSelectedLink(label);
                                }}
                                key={label}
                              >
                                <span>{label}</span>
                                {isHot && <small>Hot</small>}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </aside>

            <article className="docs-article">
              <div className="docs-breadcrumb">
                <span>Docs</span>
                <ChevronRight size={13} />
                <span>{currentArticle.category}</span>
                <ChevronRight size={13} />
                <span>{currentArticle.title}</span>
              </div>

              <span className="docs-read-time">
                <Clock3 size={13} /> {currentArticle.readTime}
              </span>
              <h3>{currentArticle.title}</h3>

              <div className="docs-outline">
                <strong>In This Article</strong>
                <ol>
                  {currentArticle.outline.map((item) => (
                    <li key={item}>
                      <a href="#resources">{item}</a>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="docs-skeleton" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <i />
                <span />
                <span />
                <span />
                <span />
                <i />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="template-download-section" aria-label="Free template downloads">
        <div className="lp-container">
          <div className="template-download-heading">
            <div>
              <span>Free Downloads</span>
              <h2>Ready-to-Use Templates</h2>
            </div>
            <p>No sign-up required</p>
          </div>

          <div className="template-download-grid">
            {templateDownloads.map(({ icon: Icon, title, text, size, downloads, format, tone }) => (
              <Link href="/admin/dashboard" className={`template-download-card ${tone}`} key={title}>
                <div className="template-card-top">
                  <span className="template-file-icon">
                    <Icon size={22} />
                  </span>
                  <small>{format}</small>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="template-meta">
                  <span>{size}</span>
                  <span>{downloads}</span>
                </div>
                <div className="template-download-button">
                  <Download size={14} /> Free Download
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="support-section" aria-label="Community and support">
        <div className="lp-container">
          <div className="support-heading">
            <span>Community &amp; Support</span>
            <h2>You&apos;re Never Alone</h2>
          </div>

          <div className="support-card-grid">
            {supportCards.map(({ icon: Icon, title, text, action, tone, stats }) => (
              <Link href="/admin/dashboard" className={`support-card ${tone}`} key={title}>
                <span className="support-main-icon">
                  <Icon size={25} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>

                <div className="support-stat-grid">
                  {stats.map(({ icon: StatIcon, value, label }) => (
                    <div className="support-stat" key={label}>
                      <StatIcon size={14} />
                      <strong>{value}</strong>
                      <small>{label}</small>
                    </div>
                  ))}
                </div>

                <div className="support-card-action-text">
                  {action} <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section" aria-label="Weekly newsletter">
        <div className="lp-container">
          <div className="newsletter-card">
            <span className="newsletter-badge">
              <Zap size={13} /> Weekly newsletter
            </span>
            <h2>Stay Updated</h2>
            <p>Get the latest guides, product updates, and business insights delivered to your inbox every week.</p>
            <form className="newsletter-form">
              <label>
                <Mail size={18} />
                <input type="email" placeholder="Enter your work email" aria-label="Work email" />
              </label>
              <button type="submit">
                Subscribe <span>→</span>
              </button>
            </form>
            <small>Join 12,000+ subscribers. Unsubscribe anytime. No spam, ever.</small>
          </div>
        </div>
      </section>

      <section className="resource-final-cta" aria-label="Start building with Operix">
        <div className="lp-container">
          <span className="resource-final-badge">
            <Zap size={14} /> Start in minutes, not months
          </span>
          <h2>
            Ready To Build A <span>Better Business?</span>
          </h2>
          <p>Put everything you&apos;ve learned into practice. Get started with Operix today — free for 14 days.</p>
          <div className="resource-final-actions">
            <a className="resource-final-primary" href="/admin/dashboard">
              Start Free Trial <span>→</span>
            </a>
            <a className="resource-final-secondary" href="#book-demo">
              <CalendarDays size={17} /> Book Demo
            </a>
          </div>
          <small>No credit card required • Free for 14 days • Cancel anytime</small>
        </div>
      </section>
    </>
  );
}
