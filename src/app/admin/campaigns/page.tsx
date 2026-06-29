"use client";

import { useState } from "react";
import {
  Megaphone,
  TrendingUp,
  BarChart3,
  Target,
  Zap,
  Copy,
  Plus,
  Search,
  ChevronDown,
  Play,
  Pause,
  Edit3,
  MoreHorizontal,
  ArrowLeft,
  Check,
  Globe,
  Facebook,
  Instagram,
  MessageSquare,
  Mail,
  Image as ImageIcon,
  Clock,
  Star,
  Send
} from "lucide-react";
import { AdminShell } from "../components/AdminShell";

// Campaign Interface
interface Campaign {
  id: string;
  name: string;
  product: string;
  platform: "Instagram" | "Facebook" | "Website" | "WhatsApp" | "Email";
  status: "Running" | "Scheduled" | "Completed" | "Paused" | "Draft";
  reach: string;
  clicks: string;
  orders: string;
  revenue: string;
  roas: string;
  startDate: string;
  // Detail metrics
  conversion: string;
  // Optimizations
  bestCreative?: string;
  recommendedKeywords?: string;
  bestTime?: string;
  nextProduct?: string;
  // Timeline events
  timeline?: Array<{ title: string; time: string }>;
  // Sparkline data array
  sparklineReach?: number[];
  sparklineClicks?: number[];
  sparklineConversion?: number[];
}

// Initial Mock Dataset for Campaigns
const initialCampaigns: Campaign[] = [
  {
    id: "camp-1",
    name: "Summer Fashion Sale",
    product: "Cotton Kurta",
    platform: "Instagram",
    status: "Running",
    reach: "48.2K",
    clicks: "3,840",
    orders: "184",
    revenue: "₹2.39L",
    roas: "4.8x",
    startDate: "2026-05-01",
    conversion: "3.8%",
    bestCreative: "Creative 1 — 68% CTR",
    recommendedKeywords: "cotton kurta, ethnic wear sale",
    bestTime: "7—9 PM IST (weekdays)",
    nextProduct: "Silk Saree Collection",
    timeline: [
      { title: "Campaign Created", time: "2026-05-01 09:00" },
      { title: "Creative Uploaded", time: "2026-05-01 09:15" },
      { title: "Published on Instagram", time: "2026-05-01 10:00" },
      { title: "Reached 10K milestone", time: "2026-05-05 14:30" },
      { title: "Budget 50% spent", time: "2026-05-14 18:00" }
    ],
    sparklineReach: [10, 15, 12, 18, 22, 28, 35, 42, 48.2],
    sparklineClicks: [800, 1200, 1100, 1600, 1900, 2400, 2900, 3400, 3840],
    sparklineConversion: [2.5, 2.8, 2.7, 3.1, 3.3, 3.2, 3.5, 3.7, 3.8]
  },
  {
    id: "camp-2",
    name: "Festive Saree Launch",
    product: "Silk Saree",
    platform: "Facebook",
    status: "Scheduled",
    reach: "—",
    clicks: "—",
    orders: "—",
    revenue: "—",
    roas: "—",
    startDate: "2026-06-01",
    conversion: "—",
    bestCreative: "Creative 2 (Pending approval)",
    recommendedKeywords: "banarasi silk, festive sarees",
    bestTime: "6—8 PM IST",
    nextProduct: "Brass Deity Idol Set",
    timeline: [
      { title: "Campaign Created", time: "2026-05-24 11:30" },
      { title: "Ad Accounts Synced", time: "2026-05-24 11:45" },
      { title: "Budget Approved", time: "2026-05-25 10:00" },
      { title: "Targeting Configured", time: "2026-05-26 12:00" },
      { title: "Scheduled for Launch", time: "2026-05-26 16:00" }
    ],
    sparklineReach: [0, 0, 0, 0, 0],
    sparklineClicks: [0, 0, 0, 0, 0],
    sparklineConversion: [0, 0, 0, 0, 0]
  },
  {
    id: "camp-3",
    name: "New Arrival — Home",
    product: "Handloom Bedsheet",
    platform: "Website",
    status: "Completed",
    reach: "22.1K",
    clicks: "1,240",
    orders: "86",
    revenue: "₹0.77L",
    roas: "2.9x",
    startDate: "2026-04-10",
    conversion: "6.9%",
    bestCreative: "Banner A — 42% engagement",
    recommendedKeywords: "handloom sheets, home decor discount",
    bestTime: "12—2 PM IST",
    nextProduct: "Traditional Dhokra Lamp",
    timeline: [
      { title: "Campaign Created", time: "2026-04-10 08:00" },
      { title: "Banner Assets Live", time: "2026-04-10 08:30" },
      { title: "Newsletter Dispatched", time: "2026-04-10 10:00" },
      { title: "Mid-Campaign Review", time: "2026-04-20 15:00" },
      { title: "Campaign Completed", time: "2026-05-10 23:59" }
    ],
    sparklineReach: [2, 5, 8, 12, 15, 17, 19, 21, 22.1],
    sparklineClicks: [150, 320, 510, 720, 890, 980, 1050, 1180, 1240],
    sparklineConversion: [4.2, 5.0, 5.5, 6.1, 6.4, 6.5, 6.8, 6.7, 6.9]
  },
  {
    id: "camp-4",
    name: "Clearance Flash Sale",
    product: "Mixed Products",
    platform: "WhatsApp",
    status: "Paused",
    reach: "12.8K",
    clicks: "980",
    orders: "42",
    revenue: "₹0.31L",
    roas: "1.9x",
    startDate: "2026-05-15",
    conversion: "4.3%",
    bestCreative: "Text + Image broadcast",
    recommendedKeywords: "flash sale, clearance offers",
    bestTime: "10—12 AM IST",
    nextProduct: "Organic Turmeric Powder",
    timeline: [
      { title: "Campaign Created", time: "2026-05-14 17:30" },
      { title: "Broadcast List Prepared", time: "2026-05-15 09:00" },
      { title: "Campaign Launched", time: "2026-05-15 10:00" },
      { title: "First 500 Responses", time: "2026-05-15 12:30" },
      { title: "Campaign Paused", time: "2026-05-20 18:00" }
    ],
    sparklineReach: [1, 3, 6, 8, 10, 11.5, 12.2, 12.8, 12.8],
    sparklineClicks: [80, 240, 490, 680, 820, 910, 950, 980, 980],
    sparklineConversion: [3.5, 3.8, 4.0, 4.2, 4.5, 4.4, 4.3, 4.3, 4.3]
  },
  {
    id: "camp-5",
    name: "Brand Awareness Q2",
    product: "All Products",
    platform: "Instagram",
    status: "Draft",
    reach: "—",
    clicks: "—",
    orders: "—",
    revenue: "—",
    roas: "—",
    startDate: "2026-06-15",
    conversion: "—",
    bestCreative: "Draft Video Script v1",
    recommendedKeywords: "organic lifestyle, local artisans",
    bestTime: "TBD",
    nextProduct: "Handmade Leather Wallet",
    timeline: [
      { title: "Draft Created", time: "2026-06-15 14:00" },
      { title: "Objectives Outlined", time: "2026-06-15 14:30" },
      { title: "Asset Checklist Added", time: "2026-06-16 09:00" }
    ],
    sparklineReach: [0, 0, 0],
    sparklineClicks: [0, 0, 0],
    sparklineConversion: [0, 0, 0]
  }
];

// Product Options (Step 1)
const builderProducts = [
  { id: "prod-1", name: "Premium Cotton Kurta", price: "₹1,299", color: "#8a6652" },
  { id: "prod-2", name: "Silk Saree — Banarasi", price: "₹4,999", color: "#9c27b0" },
  { id: "prod-3", name: "Embroidered Dupatta", price: "₹649", color: "#1e88e5" },
  { id: "prod-4", name: "Handloom Bedsheet", price: "₹899", color: "#4caf50" }
];

// Creative Options (Step 2)
const builderCreatives = [
  { id: "crt-1", name: "Creative 1", color: "#23263a" },
  { id: "crt-2", name: "Creative 2", color: "#192231" },
  { id: "crt-3", name: "Creative 3", color: "#1a1f26" },
  { id: "crt-4", name: "Creative 4", color: "#162722" },
  { id: "crt-5", name: "Creative 5", color: "#22192a" },
  { id: "crt-6", name: "Creative 6", color: "#1a252c" }
];

export default function CampaignsPage() {
  // Navigation & Core States
  const [campaigns, setCampaigns] = useState<Campaign[]>(initialCampaigns);
  const [view, setView] = useState<"list" | "details" | "builder" | "success">("list");
  const [selectedCampaignId, setSelectedCampaignId] = useState<string | null>(null);

  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Campaign Builder States
  const [builderStep, setBuilderStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(builderProducts[0]);
  const [selectedCreative, setSelectedCreative] = useState(builderCreatives[0]);
  const [creativeTab, setCreativeTab] = useState("AI Generated");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["Instagram"]);
  const [formName, setFormName] = useState("");
  const [formGoal, setFormGoal] = useState("Sales");
  const [formStartDate, setFormStartDate] = useState("2026-06-26");
  const [formEndDate, setFormEndDate] = useState("");
  const [formBudget, setFormBudget] = useState("5000");

  // Get active campaign count
  const activeCount = campaigns.filter((c) => c.status === "Running").length;

  // Render Platform Icon
  const getPlatformIcon = (platform: string, size = 16) => {
    switch (platform) {
      case "Instagram":
        return <Instagram size={size} />;
      case "Facebook":
        return <Facebook size={size} />;
      case "Website":
        return <Globe size={size} />;
      case "WhatsApp":
        return <MessageSquare size={size} />;
      case "Email":
        return <Mail size={size} />;
      default:
        return <Globe size={size} />;
    }
  };

  // Generate SVG points string for sparklines
  const getSparklinePoints = (data: number[] | undefined) => {
    if (!data || data.length === 0 || data.every((v) => v === 0)) {
      return "0,35 100,35";
    }
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    return data
      .map((val, idx) => {
        const x = (idx / (data.length - 1)) * 100;
        const y = 40 - ((val - min) / range) * 35 - 2; // scale in 40px height with padding
        return `${x},${y}`;
      })
      .join(" ");
  };

  // Toggle status (Pause/Play) on list view
  const toggleCampaignStatus = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setCampaigns(
      campaigns.map((c) => {
        if (c.id === id) {
          const nextStatus: Campaign["status"] = c.status === "Running" ? "Paused" : "Running";
          return { ...c, status: nextStatus };
        }
        return c;
      })
    );
  };

  // Handle launch campaign submission
  const handleLaunchCampaign = () => {
    const newCamp: Campaign = {
      id: `camp-${Date.now()}`,
      name: formName || `Campaign — ${selectedProduct.name}`,
      product: selectedProduct.name.split(" — ")[0],
      platform: (selectedPlatforms[0] as Campaign["platform"]) || "Instagram",
      status: "Scheduled",
      reach: "—",
      clicks: "—",
      orders: "—",
      revenue: "—",
      roas: "—",
      startDate: formStartDate,
      conversion: "—",
      bestCreative: `${selectedCreative.name} (AI)`,
      recommendedKeywords: "ethnic wear, sale, premium buy",
      bestTime: "6—8 PM IST",
      nextProduct: "Handloom Bedsheet",
      timeline: [
        { title: "Campaign Created", time: `${formStartDate} 10:00` },
        { title: "Creative Selected", time: `${formStartDate} 10:05` },
        { title: "Scheduled to Launch", time: `${formStartDate} 11:00` }
      ],
      sparklineReach: [0, 0, 0, 0, 0],
      sparklineClicks: [0, 0, 0, 0, 0],
      sparklineConversion: [0, 0, 0, 0, 0]
    };

    setCampaigns([newCamp, ...campaigns]);
    setView("success");
  };

  // Reset Form States
  const resetForm = () => {
    setBuilderStep(1);
    setFormName("");
    setFormGoal("Sales");
    setFormBudget("5000");
    setFormEndDate("");
    setSelectedProduct(builderProducts[0]);
    setSelectedCreative(builderCreatives[0]);
    setSelectedPlatforms(["Instagram"]);
  };

  // Helper to toggle platform selections
  const togglePlatform = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      if (selectedPlatforms.length > 1) {
        setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform));
      }
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
    }
  };

  // Get selected campaign object
  const currentCampaign = campaigns.find((c) => c.id === selectedCampaignId);

  // Filter campaigns
  const filteredCampaigns = campaigns.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.product.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminShell activePage="campaigns">
      <section className="content campaignsContent">
        {/* ==========================================================================
           1. LIST VIEW
           ========================================================================== */}
        {view === "list" && (
          <>
            <div className="campaignsHero">
              <div>
                <h1>Campaigns</h1>
                <p>Launch, monitor, and optimize marketing campaigns.</p>
              </div>
              <div className="campaignActions">
                <button type="button">
                  <Copy size={15} />
                  Duplicate Campaign
                </button>
                <button
                  type="button"
                  className="primary"
                  onClick={() => setView("builder")}
                >
                  <Plus size={16} />
                  Create Campaign
                </button>
              </div>
            </div>

            {/* Overall Metrics */}
            <section className="campaignStatsGrid" aria-label="Campaign stats metrics">
              <div className="campaignStatCard">
                <div className="cardIcon">
                  <Megaphone size={16} />
                </div>
                <strong>{activeCount}</strong>
                <span>Active Campaigns</span>
              </div>
              <div className="campaignStatCard">
                <div className="cardIcon">
                  <TrendingUp size={16} />
                </div>
                <strong>₹3.47L</strong>
                <span>Revenue Generated</span>
              </div>
              <div className="campaignStatCard">
                <div className="cardIcon">
                  <BarChart3 size={16} />
                </div>
                <strong>83.1K</strong>
                <span>Total Reach</span>
              </div>
              <div className="campaignStatCard">
                <div className="cardIcon">
                  <Target size={16} />
                </div>
                <strong>6,060</strong>
                <span>Total Clicks</span>
              </div>
              <div className="campaignStatCard">
                <div className="cardIcon">
                  <Zap size={16} />
                </div>
                <strong>3.2%</strong>
                <span>Avg Conversion</span>
              </div>
            </section>

            {/* Campaign Table container */}
            <section className="campaignsTableWrap">
              <h2 className="campaignTableTitle">All Campaigns</h2>
              <div className="campaignsTable">
                <div className="campaignRow campaignHead">
                  <span>Campaign</span>
                  <span>Product</span>
                  <span>Platform</span>
                  <span>Status</span>
                  <span>Reach</span>
                  <span>Clicks</span>
                  <span>Orders</span>
                  <span>Revenue</span>
                  <span>ROAS</span>
                  <span>Start Date</span>
                  <span>Actions</span>
                </div>

                {filteredCampaigns.map((camp) => (
                  <div
                    className="campaignRow"
                    key={camp.id}
                    onClick={() => {
                      setSelectedCampaignId(camp.id);
                      setView("details");
                    }}
                  >
                    <span className="campaignName">{camp.name}</span>
                    <span>{camp.product}</span>
                    <span className="platformBadge">
                      {getPlatformIcon(camp.platform, 15)}
                      <span>{camp.platform}</span>
                    </span>
                    <div>
                      <span className={`campaignStatus ${camp.status.toLowerCase()}`}>
                        {camp.status}
                      </span>
                    </div>
                    <span>{camp.reach}</span>
                    <span>{camp.clicks}</span>
                    <span>{camp.orders}</span>
                    <span>{camp.revenue}</span>
                    <span className={camp.roas !== "—" ? "greenText" : ""}>
                      {camp.roas}
                    </span>
                    <span>{camp.startDate}</span>
                    <div className="actionBtns">
                      {(camp.status === "Running" || camp.status === "Paused") && (
                        <button
                          type="button"
                          className="actionBtn"
                          title={camp.status === "Running" ? "Pause Campaign" : "Resume Campaign"}
                          onClick={(e) => toggleCampaignStatus(e, camp.id)}
                        >
                          {camp.status === "Running" ? <Pause size={13} /> : <Play size={13} />}
                        </button>
                      )}
                      <button
                        type="button"
                        className="actionBtn"
                        title="Edit Campaign"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCampaignId(camp.id);
                          setView("details");
                        }}
                      >
                        <Edit3 size={13} />
                      </button>
                      <button type="button" className="actionBtn" title="More Options">
                        <MoreHorizontal size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* ==========================================================================
           2. DETAILED VIEW
           ========================================================================== */}
        {view === "details" && currentCampaign && (
          <>
            <div className="backNav" onClick={() => setView("list")}>
              <button type="button" className="backBtn">
                <ArrowLeft size={16} />
              </button>
              <div className="detailsHeaderInfo">
                <h1>
                  {currentCampaign.name}
                  <span className={`campaignStatus ${currentCampaign.status.toLowerCase()}`}>
                    {currentCampaign.status}
                  </span>
                </h1>
                <span>
                  {currentCampaign.platform} • Started {currentCampaign.startDate}
                </span>
              </div>
            </div>

            <div className="detailsLayout">
              {/* Main Column */}
              <div className="detailsMainCol">
                {/* 6 stats cards */}
                <section className="campaignStatsGrid" style={{ gridTemplateColumns: "repeat(6, 1fr)" }} aria-label="Campaign deep dive metrics">
                  <div className="campaignStatCard">
                    <div className="cardIcon">
                      <TrendingUp size={15} />
                    </div>
                    <strong>{currentCampaign.revenue}</strong>
                    <span>Revenue</span>
                  </div>
                  <div className="campaignStatCard">
                    <div className="cardIcon">
                      <Megaphone size={15} />
                    </div>
                    <strong>{currentCampaign.orders}</strong>
                    <span>Orders</span>
                  </div>
                  <div className="campaignStatCard">
                    <div className="cardIcon">
                      <BarChart3 size={15} />
                    </div>
                    <strong>{currentCampaign.reach}</strong>
                    <span>Reach</span>
                  </div>
                  <div className="campaignStatCard">
                    <div className="cardIcon">
                      <Target size={15} />
                    </div>
                    <strong>{currentCampaign.clicks}</strong>
                    <span>Clicks</span>
                  </div>
                  <div className="campaignStatCard">
                    <div className="cardIcon">
                      <Zap size={15} />
                    </div>
                    <strong>{currentCampaign.conversion}</strong>
                    <span>Conversion</span>
                  </div>
                  <div className="campaignStatCard">
                    <div className="cardIcon">
                      <Star size={15} />
                    </div>
                    <strong>{currentCampaign.roas}</strong>
                    <span>ROAS</span>
                  </div>
                </section>

                {/* Engagement Analytics & Sparklines */}
                <div className="analyticsCard">
                  <h3>Engagement Analytics</h3>
                  <div className="sparklineGrid">
                    <div className="sparklineCol blue">
                      <span className="sparklineTitle">Reach Trend</span>
                      <strong className="sparklineVal">{currentCampaign.reach}</strong>
                      <div className="sparklineContainer">
                        <svg className="sparklineSvg" viewBox="0 0 100 40" preserveAspectRatio="none">
                          <path
                            d={`M ${getSparklinePoints(currentCampaign.sparklineReach)}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="sparklineCol green">
                      <span className="sparklineTitle">Clicks Trend</span>
                      <strong className="sparklineVal">{currentCampaign.clicks}</strong>
                      <div className="sparklineContainer">
                        <svg className="sparklineSvg" viewBox="0 0 100 40" preserveAspectRatio="none">
                          <path
                            d={`M ${getSparklinePoints(currentCampaign.sparklineClicks)}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="sparklineCol amber">
                      <span className="sparklineTitle">Conversion Trend</span>
                      <strong className="sparklineVal">{currentCampaign.conversion}</strong>
                      <div className="sparklineContainer">
                        <svg className="sparklineSvg" viewBox="0 0 100 40" preserveAspectRatio="none">
                          <path
                            d={`M ${getSparklinePoints(currentCampaign.sparklineConversion)}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Performance Section */}
                <div className="productPerformanceCard">
                  <h3>Product Performance</h3>
                  <div className="productMetricsGrid">
                    <div className="productMetricSubCard">
                      <strong>1</strong>
                      <span>Products Promoted</span>
                    </div>
                    <div className="productMetricSubCard">
                      <strong>{currentCampaign.orders !== "—" ? currentCampaign.orders : "0"}</strong>
                      <span>Units Sold</span>
                    </div>
                    <div className="productMetricSubCard">
                      <strong>{currentCampaign.revenue !== "—" ? currentCampaign.revenue : "₹0"}</strong>
                      <span>Revenue Generated</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Column */}
              <div className="detailsSideCol">
                {/* Optimization */}
                <div className="sideCard">
                  <h3>
                    <TrendingUp size={16} /> Campaign Optimization
                  </h3>
                  <div className="optSuggestions">
                    <div className="optCard">
                      <span className="optLabel">Best Performing Creative</span>
                      <div className="optValue">{currentCampaign.bestCreative || "Creative 1"}</div>
                      <span className="optLink">Apply Suggestion &rarr;</span>
                    </div>
                    <div className="optCard">
                      <span className="optLabel">Recommended Keywords</span>
                      <div className="optValue">
                        {currentCampaign.recommendedKeywords || "cotton kurta, buy store"}
                      </div>
                      <span className="optLink">Apply Suggestion &rarr;</span>
                    </div>
                    <div className="optCard">
                      <span className="optLabel">Best Posting Time</span>
                      <div className="optValue">{currentCampaign.bestTime || "7-9 PM IST"}</div>
                      <span className="optLink">Apply Suggestion &rarr;</span>
                    </div>
                    <div className="optCard">
                      <span className="optLabel">Next Product to Promote</span>
                      <div className="optValue">{currentCampaign.nextProduct || "Silk Saree"}</div>
                      <span className="optLink">Apply Suggestion &rarr;</span>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="sideCard">
                  <h3>
                    <Clock size={16} /> Campaign Timeline
                  </h3>
                  <div className="timeline">
                    {currentCampaign.timeline?.map((evt, idx) => (
                      <div className="timelineItem" key={idx}>
                        <div className="timelineDot">
                          <Clock size={9} />
                        </div>
                        <div className="timelineContent">
                          <span className="timelineTitle">{evt.title}</span>
                          <span className="timelineTime">{evt.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ==========================================================================
           3. CAMPAIGN BUILDER VIEW
           ========================================================================== */}
        {view === "builder" && (
          <>
            <div
              className="backNav"
              onClick={() => {
                setView("list");
                setBuilderStep(1);
              }}
            >
              <button type="button" className="backBtn">
                <ArrowLeft size={16} />
              </button>
              <div className="detailsHeaderInfo">
                <h1>Campaign Builder</h1>
                <span>Create and launch a new marketing campaign.</span>
              </div>
            </div>

            {/* Stepper indicator progress bar */}
            <div className="stepperContainer">
              <div className={`stepNode ${builderStep === 1 ? "active" : builderStep > 1 ? "completed" : ""}`}>
                <div className="stepCircle">{builderStep > 1 ? "✓" : "1"}</div>
                <span className="stepLabel">Select Product</span>
              </div>
              <div className="stepConnector">
                <div className="stepConnectorActive" style={{ width: builderStep > 1 ? "100%" : "0%" }} />
              </div>

              <div className={`stepNode ${builderStep === 2 ? "active" : builderStep > 2 ? "completed" : ""}`}>
                <div className="stepCircle">{builderStep > 2 ? "✓" : "2"}</div>
                <span className="stepLabel">Choose Creative</span>
              </div>
              <div className="stepConnector">
                <div className="stepConnectorActive" style={{ width: builderStep > 2 ? "100%" : "0%" }} />
              </div>

              <div className={`stepNode ${builderStep === 3 ? "active" : builderStep > 3 ? "completed" : ""}`}>
                <div className="stepCircle">{builderStep > 3 ? "✓" : "3"}</div>
                <span className="stepLabel">Platforms</span>
              </div>
              <div className="stepConnector">
                <div className="stepConnectorActive" style={{ width: builderStep > 3 ? "100%" : "0%" }} />
              </div>

              <div className={`stepNode ${builderStep === 4 ? "active" : builderStep > 4 ? "completed" : ""}`}>
                <div className="stepCircle">{builderStep > 4 ? "✓" : "4"}</div>
                <span className="stepLabel">Campaign Details</span>
              </div>
              <div className="stepConnector">
                <div className="stepConnectorActive" style={{ width: builderStep > 4 ? "100%" : "0%" }} />
              </div>

              <div className={`stepNode ${builderStep === 5 ? "active" : ""}`}>
                <div className="stepCircle">5</div>
                <span className="stepLabel">Review & Launch</span>
              </div>
            </div>

            {/* Stepper Panels content */}
            <div className="builderSection">
              {/* STEP 1: SELECT PRODUCT */}
              {builderStep === 1 && (
                <>
                  <h2>Select Product to Promote</h2>
                  <div className="productGrid">
                    {builderProducts.map((p) => (
                      <div
                        className={`productSelectCard ${selectedProduct.id === p.id ? "selected" : ""}`}
                        key={p.id}
                        onClick={() => setSelectedProduct(p)}
                      >
                        <div className="productColorBox" style={{ background: p.color }} />
                        <div className="productInfoBlock">
                          <strong>{p.name}</strong>
                          <span>{p.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* STEP 2: CHOOSE CREATIVE */}
              {builderStep === 2 && (
                <>
                  <h2>Choose Creative</h2>
                  <div className="creativeTabs">
                    <div
                      className={`creativeTab ${creativeTab === "AI Generated" ? "active" : ""}`}
                      onClick={() => setCreativeTab("AI Generated")}
                    >
                      AI Generated
                    </div>
                    <div
                      className={`creativeTab ${creativeTab === "Templates" ? "active" : ""}`}
                      onClick={() => setCreativeTab("Templates")}
                    >
                      Templates
                    </div>
                    <div
                      className={`creativeTab ${creativeTab === "Uploaded Designs" ? "active" : ""}`}
                      onClick={() => setCreativeTab("Uploaded Designs")}
                    >
                      Uploaded Designs
                    </div>
                  </div>

                  <div className="creativeGrid">
                    {builderCreatives.map((crt) => (
                      <div
                        className={`creativeCard ${selectedCreative.id === crt.id ? "selected" : ""}`}
                        key={crt.id}
                        onClick={() => setSelectedCreative(crt)}
                      >
                        <div className="creativeThumbnail" style={{ background: crt.color }}>
                          <ImageIcon size={28} />
                          {selectedCreative.id === crt.id && (
                            <div className="creativeCheck">
                              <Check size={11} strokeWidth={3} />
                            </div>
                          )}
                        </div>
                        <span className="creativeName">{crt.name}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* STEP 3: PLATFORMS */}
              {builderStep === 3 && (
                <>
                  <h2>Select Platforms</h2>
                  <p style={{ color: "#9aa7ba", fontSize: "13px", marginTop: "-12px", marginBottom: "20px" }}>
                    Select one or more platforms to publish this campaign.
                  </p>
                  <div className="platformsCheckList">
                    {["Instagram", "Facebook", "Website", "WhatsApp", "Email"].map((p) => {
                      const isSelected = selectedPlatforms.includes(p);
                      return (
                        <div
                          className={`platformSelectCard ${isSelected ? "selected" : ""}`}
                          key={p}
                          onClick={() => togglePlatform(p)}
                        >
                          <div className="platformSelectLeft">
                            {getPlatformIcon(p, 16)}
                            <span>{p}</span>
                          </div>
                          {isSelected && (
                            <div className="platformCheckIcon">
                              <Check size={16} strokeWidth={2.5} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              {/* STEP 4: CAMPAIGN DETAILS */}
              {builderStep === 4 && (
                <>
                  <h2>Campaign Details</h2>
                  <div className="detailsForm">
                    <div className="formGroup fullWidth">
                      <label htmlFor="campName">Campaign Name</label>
                      <input
                        id="campName"
                        placeholder="e.g. Summer Fashion Sale 2026"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                      />
                    </div>
                    <div className="formGroup">
                      <label htmlFor="campGoal">Campaign Goal</label>
                      <select
                        id="campGoal"
                        value={formGoal}
                        onChange={(e) => setFormGoal(e.target.value)}
                      >
                        <option value="Sales">Sales</option>
                        <option value="Leads">Leads</option>
                        <option value="Traffic">Traffic</option>
                        <option value="Brand Awareness">Brand Awareness</option>
                      </select>
                    </div>
                    <div className="formGroup">
                      <label htmlFor="budget">Budget (₹)</label>
                      <input
                        id="budget"
                        type="number"
                        placeholder="5000"
                        value={formBudget}
                        onChange={(e) => setFormBudget(e.target.value)}
                      />
                    </div>
                    <div className="formGroup">
                      <label htmlFor="startDate">Start Date</label>
                      <input
                        id="startDate"
                        type="date"
                        value={formStartDate}
                        onChange={(e) => setFormStartDate(e.target.value)}
                      />
                    </div>
                    <div className="formGroup">
                      <label htmlFor="endDate">End Date</label>
                      <input
                        id="endDate"
                        type="date"
                        value={formEndDate}
                        onChange={(e) => setFormEndDate(e.target.value)}
                      />
                    </div>
                  </div>
                </>
              )}

              {/* STEP 5: REVIEW & LAUNCH */}
              {builderStep === 5 && (
                <>
                  <h2>Review & Launch</h2>
                  <div className="reviewList">
                    <div className="reviewRow">
                      <span className="reviewLabel">Product</span>
                      <span className="reviewVal">{selectedProduct.name}</span>
                    </div>
                    <div className="reviewRow">
                      <span className="reviewLabel">Creative</span>
                      <span className="reviewVal">AI Generated — {selectedCreative.name}</span>
                    </div>
                    <div className="reviewRow">
                      <span className="reviewLabel">Platforms</span>
                      <span className="reviewVal">{selectedPlatforms.join(", ")}</span>
                    </div>
                    <div className="reviewRow">
                      <span className="reviewLabel">Goal</span>
                      <span className="reviewVal">{formGoal}</span>
                    </div>
                    <div className="reviewRow">
                      <span className="reviewLabel">Budget</span>
                      <span className="reviewVal">
                        {formBudget ? `₹${Number(formBudget).toLocaleString("en-IN")}` : "₹0"}
                      </span>
                    </div>
                    <div className="reviewRow">
                      <span className="reviewLabel">Duration</span>
                      <span className="reviewVal">
                        {formStartDate} {formEndDate ? `\u2192 ${formEndDate}` : ""}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer Builder buttons */}
            <div className="builderFooter">
              {builderStep === 1 ? (
                <button
                  type="button"
                  className="secondary"
                  onClick={() => setView("list")}
                >
                  &lt; Cancel
                </button>
              ) : (
                <button
                  type="button"
                  className="secondary"
                  onClick={() => setBuilderStep(builderStep - 1)}
                >
                  &lt; Previous
                </button>
              )}

              {builderStep === 5 ? (
                <button
                  type="button"
                  className="primary"
                  onClick={handleLaunchCampaign}
                >
                  <Send size={14} style={{ marginRight: 6 }} /> Launch Campaign
                </button>
              ) : (
                <button
                  type="button"
                  className="primary"
                  onClick={() => setBuilderStep(builderStep + 1)}
                >
                  Continue &gt;
                </button>
              )}
            </div>
          </>
        )}

        {/* ==========================================================================
           4. SUCCESS SCREEN
           ========================================================================== */}
        {view === "success" && (
          <div className="successScreen">
            <div className="successIconWrap">
              <Check size={32} strokeWidth={2.5} />
            </div>
            <h2>Campaign Launched!</h2>
            <p>
              Your campaign is now live. You can track performance in real time from
              the Campaigns dashboard.
            </p>
            <div className="successBtns">
              <button
                type="button"
                className="primary"
                onClick={() => {
                  resetForm();
                  setView("list");
                }}
              >
                View Campaigns
              </button>
              <button
                type="button"
                className="secondary"
                onClick={() => {
                  resetForm();
                  setView("builder");
                }}
              >
                Create Another
              </button>
            </div>
          </div>
        )}
      </section>
    </AdminShell>
  );
}
