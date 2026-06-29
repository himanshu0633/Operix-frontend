"use client";

import { useState, useEffect } from "react";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  Users,
  Percent,
  Zap,
  Check,
  Download,
  Lightbulb,
  RefreshCw,
  ArrowLeft,
  Share2,
  Globe2,
  Trash2,
  Plus,
  Eye,
  Star,
  Settings,
  ChevronDown,
  Clock,
  ArrowRight,
  FileText,
  Boxes,
  HelpCircle,
  AlertTriangle
} from "lucide-react";
import { AdminShell } from "../components/AdminShell";

// Types
interface Insight {
  id: string;
  type: "restock" | "opportunity" | "customer" | "risk" | "campaign" | "custom";
  title: string;
  desc: string;
  actionText: string;
}

export default function AnalyticsPage() {
  const [view, setView] = useState<"dashboard" | "builder" | "success">("dashboard");
  const [timeRange, setTimeRange] = useState("Last 30 Days");
  
  // Custom Widgets State
  const defaultWidgets = [
    "Sales Overview",
    "Revenue Trend",
    "Inventory Health",
    "Customer Growth",
    "Marketing ROI",
    "Cash Flow",
    "Top Products",
    "Order Status"
  ];
  const [selectedWidgets, setSelectedWidgets] = useState<string[]>(defaultWidgets);
  const [builderSelected, setBuilderSelected] = useState<string[]>(defaultWidgets);

  // Insights List State
  const initialInsights: Insight[] = [
    {
      id: "insight-1",
      type: "restock",
      title: "Restock Alert",
      desc: "8 products will hit reorder point in 7 days. Restock now to avoid stockouts.",
      actionText: "View Products"
    },
    {
      id: "insight-2",
      type: "opportunity",
      title: "Revenue Opportunity",
      desc: "Summer category products show 34% higher demand. Consider boosting inventory.",
      actionText: "View Category"
    },
    {
      id: "insight-3",
      type: "customer",
      title: "Customer Opportunity",
      desc: "124 customers haven't purchased in 60+ days. A targeted campaign could recover ₹3.2L.",
      actionText: "Launch Campaign"
    },
    {
      id: "insight-4",
      type: "risk",
      title: "Revenue Risk",
      desc: "Top supplier Mehta Textiles has 3 delayed shipments affecting ₹4.8L orders.",
      actionText: "View Supplier"
    },
    {
      id: "insight-5",
      type: "campaign",
      title: "Campaign Recommendation",
      desc: "Instagram ads generating 4.8x ROAS this month. Increase budget for better results.",
      actionText: "Optimize Campaign"
    }
  ];
  const [insights, setInsights] = useState<Insight[]>(initialInsights);
  const [refreshingInsights, setRefreshingInsights] = useState(false);

  // AI Insight Generator Modal State
  const [showInsightModal, setShowInsightModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);
  
  const [businessArea, setBusinessArea] = useState("Sales & Revenue");
  const [modalDateRange, setModalDateRange] = useState("Last 7 days");
  const [analysisDepth, setAnalysisDepth] = useState("Summary Overview");

  // Notification Banner State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleRefreshInsights = () => {
    setRefreshingInsights(true);
    setTimeout(() => {
      setRefreshingInsights(false);
      triggerToast("AI Insights Center refreshed!");
    }, 1000);
  };

  // Simulate AI Insight Generation Loading Steps
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (generating) {
      if (generationStep < 3) {
        timer = setTimeout(() => {
          setGenerationStep((prev) => prev + 1);
        }, 800);
      } else {
        setGenerating(false);
        setShowSuccessModal(true);
        
        // Prepend generated insight based on chosen category
        const newInsightId = `insight-gen-${Date.now()}`;
        let generatedInsight: Insight = {
          id: newInsightId,
          type: "custom",
          title: "AI Analysis Report",
          desc: `AI generated insight for ${businessArea} finished successfully.`,
          actionText: "View Analysis"
        };

        if (businessArea === "Sales & Revenue") {
          generatedInsight = {
            id: newInsightId,
            type: "opportunity",
            title: "Sales Volatility Report",
            desc: "Weekly average order value increased by 14% on weekend campaigns. Adjust baseline prices accordingly.",
            actionText: "Analyze Sales"
          };
        } else if (businessArea === "Inventory & Stock") {
          generatedInsight = {
            id: newInsightId,
            type: "restock",
            title: "Stock Allocation Alert",
            desc: "Stockouts imminent for hot-selling Kurtas. Reallocate 200 units from warehouse B to storefront A.",
            actionText: "Manage Stock"
          };
        } else if (businessArea === "Customer Cohorts") {
          generatedInsight = {
            id: newInsightId,
            type: "customer",
            title: "Loyalty Cohort Spike",
            desc: "High-value tier cohort showing 18% repeat purchase surge. Recommended: Launch loyalty points email campaign.",
            actionText: "View Cohorts"
          };
        } else if (businessArea === "Marketing Campaigns") {
          generatedInsight = {
            id: newInsightId,
            type: "campaign",
            title: "Ad Spend Opportunity",
            desc: "Facebook campaigns for home decor have 5.2x ROI. Shift ₹50k budget from underperforming search ads.",
            actionText: "Adjust Budget"
          };
        } else if (businessArea === "Financial Cashflow") {
          generatedInsight = {
            id: newInsightId,
            type: "risk",
            title: "Cashflow Deficiency Risk",
            desc: "Projected receivables delayed by 12 days. Secure short-term credit line to avoid operational delays.",
            actionText: "Manage Cash"
          };
        }

        setInsights([generatedInsight, ...insights]);
      }
    }
    return () => clearTimeout(timer);
  }, [generating, generationStep, businessArea, insights]);

  const handleStartGeneration = (e: React.FormEvent) => {
    e.preventDefault();
    setGenerating(true);
    setGenerationStep(0);
  };

  const handleToggleWidgetBuilder = (widgetName: string) => {
    if (builderSelected.includes(widgetName)) {
      setBuilderSelected(builderSelected.filter((w) => w !== widgetName));
    } else {
      setBuilderSelected([...builderSelected, widgetName]);
    }
  };

  const handleSaveDashboard = () => {
    setSelectedWidgets(builderSelected);
    setView("success");
  };

  const handleCancelBuilder = () => {
    setBuilderSelected(selectedWidgets);
    setView("dashboard");
  };

  const handleShareDashboard = () => {
    triggerToast("Dashboard link shared to clipboard!");
  };

  return (
    <AdminShell activePage="analytics">
      <section className="content analyticsContent">
        
        {/* Toast Alert */}
        {toastMessage && (
          <div className="analyticsToast">
            <span>{toastMessage}</span>
          </div>
        )}

        {/* ==========================================================================
           1. ANALYTICS MAIN DASHBOARD VIEW
           ========================================================================== */}
        {view === "dashboard" && (
          <>
            {/* Page Header */}
            <div className="analyticsHero">
              <div>
                <h1>Analytics</h1>
                <p>Monitor performance, profitability, customer behavior, inventory health, and growth opportunities.</p>
              </div>
              <div className="analyticsActions">
                <div className="selectDropdownWrap">
                  <select 
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)}
                  >
                    <option value="Last 7 Days">Last 7 Days</option>
                    <option value="Last 30 Days">Last 30 Days</option>
                    <option value="Last 90 Days">Last 90 Days</option>
                  </select>
                  <ChevronDown size={14} className="dropdownIcon" />
                </div>
                
                <button type="button" onClick={() => {
                  setBuilderSelected(selectedWidgets);
                  setView("builder");
                }}>
                  Create Dashboard
                </button>
                
                <button type="button" onClick={() => triggerToast("Exporting data report...")}>
                  <Download size={14} /> Export
                </button>
                
                <button type="button" className="primary" onClick={() => {
                  setShowInsightModal(true);
                  setShowSuccessModal(false);
                  setGenerating(false);
                }}>
                  <Lightbulb size={14} /> Generate Insight
                </button>
              </div>
            </div>

            {/* Split Layout: Dashboard Widgets (Left) + AI Insights (Right) */}
            <div className="analyticsSplitLayout">
              
              <div className="analyticsMainArea">
                {/* 8 KPI Cards Grid */}
                {selectedWidgets.includes("Sales Overview") && (
                  <section className="kpiCardsGrid" aria-label="KPI Performance Cards">
                    {/* Card 1: Revenue */}
                    <div className="kpiCard">
                      <div className="kpiCardHeader">
                        <div className="kpiIconWrap revenue">
                          <DollarSign size={16} />
                        </div>
                        <span className="kpiTrend up">+18.2%</span>
                      </div>
                      <div className="kpiCardBody">
                        <strong>₹42.8L</strong>
                        <span>Revenue</span>
                      </div>
                      <div className="kpiCardChart">
                        <svg viewBox="0 0 100 25" width="100%" height="25">
                          <path d="M0,22 Q15,25 30,18 T60,15 T90,5" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Card 2: Profit */}
                    <div className="kpiCard">
                      <div className="kpiCardHeader">
                        <div className="kpiIconWrap profit">
                          <TrendingUp size={16} />
                        </div>
                        <span className="kpiTrend up">+9.6%</span>
                      </div>
                      <div className="kpiCardBody">
                        <strong>₹12.4L</strong>
                        <span>Profit</span>
                      </div>
                      <div className="kpiCardChart">
                        <svg viewBox="0 0 100 25" width="100%" height="25">
                          <path d="M0,24 Q15,20 30,22 T60,14 T90,8" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Card 3: Orders */}
                    <div className="kpiCard">
                      <div className="kpiCardHeader">
                        <div className="kpiIconWrap orders">
                          <ShoppingBag size={16} />
                        </div>
                        <span className="kpiTrend up">+2.2%</span>
                      </div>
                      <div className="kpiCardBody">
                        <strong>1,284</strong>
                        <span>Orders</span>
                      </div>
                      <div className="kpiCardChart">
                        <svg viewBox="0 0 100 25" width="100%" height="25">
                          <path d="M0,24 Q15,22 30,16 T60,18 T90,10" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Card 4: Customers */}
                    <div className="kpiCard">
                      <div className="kpiCardHeader">
                        <div className="kpiIconWrap customers">
                          <Users size={16} />
                        </div>
                        <span className="kpiTrend up">+14.1%</span>
                      </div>
                      <div className="kpiCardBody">
                        <strong>847</strong>
                        <span>Customers</span>
                      </div>
                      <div className="kpiCardChart">
                        <svg viewBox="0 0 100 25" width="100%" height="25">
                          <path d="M0,23 Q15,19 30,15 T60,12 T90,6" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Card 5: Inventory Value */}
                    <div className="kpiCard">
                      <div className="kpiCardHeader">
                        <div className="kpiIconWrap inventory">
                          <Boxes size={16} />
                        </div>
                        <span className="kpiTrend down">-3.4%</span>
                      </div>
                      <div className="kpiCardBody">
                        <strong>₹18.2L</strong>
                        <span>Inventory Value</span>
                      </div>
                      <div className="kpiCardChart">
                        <svg viewBox="0 0 100 25" width="100%" height="25">
                          <path d="M0,8 Q15,14 30,8 T60,18 T90,20" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Card 6: Conversion Rate */}
                    <div className="kpiCard">
                      <div className="kpiCardHeader">
                        <div className="kpiIconWrap conversion">
                          <Percent size={16} />
                        </div>
                        <span className="kpiTrend up">+0.4%</span>
                      </div>
                      <div className="kpiCardBody">
                        <strong>3.8%</strong>
                        <span>Conversion Rate</span>
                      </div>
                      <div className="kpiCardChart">
                        <svg viewBox="0 0 100 25" width="100%" height="25">
                          <path d="M0,22 Q15,25 30,18 T60,12 T90,5" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Card 7: Marketing ROI */}
                    <div className="kpiCard">
                      <div className="kpiCardHeader">
                        <div className="kpiIconWrap roi">
                          <Zap size={16} />
                        </div>
                        <span className="kpiTrend up">+0.6x</span>
                      </div>
                      <div className="kpiCardBody">
                        <strong>4.2x</strong>
                        <span>Marketing ROI</span>
                      </div>
                      <div className="kpiCardChart">
                        <svg viewBox="0 0 100 25" width="100%" height="25">
                          <path d="M0,23 Q15,20 30,18 T60,14 T90,8" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Card 8: Growth Rate */}
                    <div className="kpiCard">
                      <div className="kpiCardHeader">
                        <div className="kpiIconWrap growth">
                          <TrendingUp size={16} />
                        </div>
                        <span className="kpiTrend down">-2%</span>
                      </div>
                      <div className="kpiCardBody">
                        <strong>18%</strong>
                        <span>Growth Rate</span>
                      </div>
                      <div className="kpiCardChart">
                        <svg viewBox="0 0 100 25" width="100%" height="25">
                          <path d="M0,10 Q15,8 30,14 T60,10 T90,18" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>
                  </section>
                )}

                {/* Sales Analytics panel */}
                {selectedWidgets.includes("Revenue Trend") && (
                  <section className="dashboardSection salesAnalytics">
                    <div className="sectionHeader">
                      <div>
                        <h2>Sales Analytics</h2>
                        <span>Revenue & orders over time</span>
                      </div>
                      <button type="button" className="outlineBtn" onClick={() => triggerToast("Filtering sales data...")}>
                        Filter
                      </button>
                    </div>
                    
                    <div className="salesAnalyticsSplit">
                      {/* Left: Bar Chart */}
                      <div className="chartBlock">
                        <span className="chartSubtitle">Revenue Trend (₹ Lakhs)</span>
                        <div className="barChartContainer">
                          {[
                            { month: "Jan", height: "45%" },
                            { month: "Feb", height: "55%" },
                            { month: "Mar", height: "65%" },
                            { month: "Apr", height: "60%" },
                            { month: "May", height: "80%" },
                            { month: "Jun", height: "90%" }
                          ].map((bar) => (
                            <div className="chartCol" key={bar.month}>
                              <div className="barWrap">
                                <div className="barFill" style={{ height: bar.height }} />
                              </div>
                              <span className="colLabel">{bar.month}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right: Top Products */}
                      {selectedWidgets.includes("Top Products") && (
                        <div className="topProductsBlock">
                          <span className="chartSubtitle">Top Products</span>
                          <div className="productsList">
                            {[
                              { name: "Premium Kurta", val: "₹4.8L", trend: "+32%" },
                              { name: "Silk Saree", val: "₹3.6L", trend: "+18%" },
                              { name: "Embroidered Dupatta", val: "₹2.2L", trend: "+44%" }
                            ].map((prod) => (
                              <div className="productRow" key={prod.name}>
                                <span className="prodName">{prod.name}</span>
                                <div className="prodStats">
                                  <strong>{prod.val}</strong>
                                  <span className="prodTrend">{prod.trend}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </section>
                )}

                {/* Inventory Analytics */}
                {selectedWidgets.includes("Inventory Health") && (
                  <section className="dashboardSection inventoryAnalytics">
                    <div className="sectionHeader">
                      <h2>Inventory Analytics</h2>
                    </div>
                    <div className="inventoryStatsGrid">
                      {[
                        { label: "Fast Moving", count: "68", color: "green" },
                        { label: "Slow Moving", count: "24", color: "yellow" },
                        { label: "Dead Stock", count: "12", color: "red" },
                        { label: "Restock Due", count: "8", color: "purple" }
                      ].map((item) => (
                        <div className="inventoryStatCard" key={item.label}>
                          <span className={`largeCount ${item.color}`}>{item.count}</span>
                          <span className="statLabel">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Customer Analytics */}
                {selectedWidgets.includes("Customer Growth") && (
                  <section className="dashboardSection customerAnalytics">
                    <div className="sectionHeader">
                      <h2>Customer Analytics</h2>
                    </div>
                    <div className="analyticsThreeCol">
                      <div className="colChartCard">
                        <span className="cardLabel">Customer Growth</span>
                        <div className="chartWrap">
                          <svg viewBox="0 0 300 80" width="100%">
                            <path d="M0,65 Q50,55 100,35 T200,30 T300,10" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="colChartCard">
                        <span className="cardLabel">Retention Rate</span>
                        <div className="chartWrap">
                          <svg viewBox="0 0 300 80" width="100%">
                            <path d="M0,60 Q50,65 100,45 T200,50 T300,15" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="colChartCard">
                        <span className="cardLabel">Avg Lifetime Value</span>
                        <div className="chartWrap">
                          <svg viewBox="0 0 300 80" width="100%">
                            <path d="M0,70 Q50,65 100,50 T200,40 T300,15" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </section>
                )}

                {/* Marketing Analytics */}
                {selectedWidgets.includes("Marketing ROI") && (
                  <section className="dashboardSection marketingAnalytics">
                    <div className="sectionHeader">
                      <h2>Marketing Analytics</h2>
                    </div>
                    <div className="marketingCardsGrid">
                      {[
                        { val: "4.2x", label: "Campaign ROI", icon: TrendingUp, color: "green" },
                        { val: "Instagram", label: "Best Channel", icon: Globe2, color: "purple" },
                        { val: "Summer Sale", label: "Top Campaign", icon: Star, color: "yellow" },
                        { val: "3.8%", label: "Conversion Rate", icon: Percent, color: "blue" }
                      ].map((card) => (
                        <div className="marketingCard" key={card.label}>
                          <div className="marketingCardLeft">
                            <strong>{card.val}</strong>
                            <span>{card.label}</span>
                          </div>
                          <div className={`marketingIcon ${card.color}`}>
                            <card.icon size={16} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Financial Analytics */}
                {selectedWidgets.includes("Cash Flow") && (
                  <section className="dashboardSection financialAnalytics">
                    <div className="sectionHeader">
                      <h2>Financial Analytics</h2>
                    </div>
                    <div className="analyticsThreeCol">
                      <div className="colChartCard">
                        <span className="cardLabel">Profit Trend</span>
                        <div className="chartWrap">
                          <svg viewBox="0 0 300 80" width="100%">
                            <path d="M0,65 Q30,55 60,70 T120,45 T180,60 T240,40 T300,25" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="colChartCard">
                        <span className="cardLabel">Expense Breakdown</span>
                        <div className="chartWrap">
                          <svg viewBox="0 0 300 80" width="100%">
                            <path d="M0,65 L30,25 L60,65 L90,35 L120,70 L150,30 L180,75 L210,35 L240,70 L270,25 L300,65" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="colChartCard">
                        <span className="cardLabel">Cash Flow</span>
                        <div className="chartWrap">
                          <svg viewBox="0 0 300 80" width="100%">
                            <path d="M0,70 L30,60 L60,65 L90,50 L120,40 L150,53 L180,33 L210,39 L240,17 L270,23 L300,5" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </div>

              {/* AI Insights Sidebar */}
              <aside className="insightsSidebar">
                <div className="sidebarHeader">
                  <div>
                    <h3>AI Insights Center</h3>
                    <span>Updated every 6 hours</span>
                  </div>
                  <button 
                    type="button" 
                    className={`refreshBtn ${refreshingInsights ? "spinning" : ""}`}
                    onClick={handleRefreshInsights}
                    title="Refresh Insights"
                  >
                    <RefreshCw size={14} />
                  </button>
                </div>

                <div className="insightsList">
                  {insights.map((insight) => (
                    <div className={`insightCard ${insight.type}`} key={insight.id}>
                      <div className="insightHeader">
                        <div className="insightDot" />
                        <strong>{insight.title}</strong>
                      </div>
                      <p>{insight.desc}</p>
                      <button type="button" onClick={() => triggerToast(`Navigating to ${insight.title} Details`)}>
                        {insight.actionText} <ArrowRight size={12} style={{ marginLeft: 4 }} />
                      </button>
                    </div>
                  ))}
                </div>

                <button type="button" className="refreshLargeBtn" onClick={handleRefreshInsights}>
                  <RefreshCw size={14} /> Refresh Insights
                </button>
              </aside>

            </div>
          </>
        )}

        {/* ==========================================================================
           2. DASHBOARD BUILDER CUSTOMIZER SCREEN
           ========================================================================== */}
        {view === "builder" && (
          <div className="dashboardBuilderContainer">
            {/* Header */}
            <div className="builderHeaderNav">
              <button type="button" className="backLinkBtn" onClick={handleCancelBuilder}>
                <ArrowLeft size={16} />
              </button>
              <div>
                <h1>Dashboard Builder</h1>
                <p>Select and arrange widgets for your custom analytics dashboard.</p>
              </div>
            </div>

            {/* Split builder area */}
            <div className="builderSplitLayout">
              {/* Left: Available Widgets */}
              <div className="builderPanel leftPanel">
                <h3>Available Widgets</h3>
                <div className="builderWidgetsList">
                  {defaultWidgets.map((widget) => {
                    const isSelected = builderSelected.includes(widget);
                    return (
                      <div 
                        key={widget}
                        className={`builderWidgetCard ${isSelected ? "checked" : ""}`}
                        onClick={() => handleToggleWidgetBuilder(widget)}
                      >
                        <span>{widget}</span>
                        <div className="widgetSelectionIndicator">
                          {isSelected && <Check size={12} />}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Live Preview */}
              <div className="builderPanel rightPanel">
                <h3>Preview ({builderSelected.length} widgets)</h3>
                <div className="builderPreviewList">
                  {builderSelected.length === 0 ? (
                    <div className="emptyPreview">
                      <span>No widgets selected. Select widgets from the left panel to preview your dashboard layout.</span>
                    </div>
                  ) : (
                    builderSelected.map((widget) => (
                      <div className="previewWidgetCard" key={widget}>
                        <div className="previewWidgetIconWrap">
                          <BarChart3 size={15} />
                        </div>
                        <span>{widget}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Footer buttons */}
            <div className="builderActionsBar">
              <button type="button" className="cancelBtn" onClick={handleCancelBuilder}>
                Cancel
              </button>
              <button type="button" className="shareBtn" onClick={handleShareDashboard}>
                <Share2 size={14} /> Share Dashboard
              </button>
              <button type="button" className="saveBtn" onClick={handleSaveDashboard}>
                <Check size={14} /> Save Dashboard
              </button>
            </div>
          </div>
        )}

        {/* ==========================================================================
           3. DASHBOARD SAVED SUCCESS VIEW
           ========================================================================== */}
        {view === "success" && (
          <div className="successScreen">
            <div className="successIconWrap">
              <Check size={32} strokeWidth={2.5} />
            </div>
            <h2>Dashboard Saved!</h2>
            <p>
              Your custom analytics dashboard is ready.
            </p>
            <div className="successBtns">
              <button
                type="button"
                className="primary"
                onClick={() => setView("dashboard")}
              >
                Back to Analytics
              </button>
            </div>
          </div>
        )}

        {/* ==========================================================================
           4. AI INSIGHT GENERATOR FORM MODAL (OVERLAY)
           ========================================================================== */}
        {showInsightModal && (
          <div className="modalOverlay">
            <div className="insightModal">
              <div className="modalHeader">
                <div className="modalTitleBlock">
                  <Lightbulb size={18} className="bulbIcon" />
                  <h3>AI Insight Generator</h3>
                </div>
                <button type="button" className="closeModalBtn" onClick={() => setShowInsightModal(false)}>
                  ✕
                </button>
              </div>

              {!generating ? (
                <form onSubmit={handleStartGeneration} className="modalForm">
                  <div className="modalFormGroup">
                    <label htmlFor="businessAreaSelect">Business Area</label>
                    <div className="modalSelectWrap">
                      <select
                        id="businessAreaSelect"
                        value={businessArea}
                        onChange={(e) => setBusinessArea(e.target.value)}
                      >
                        <option value="Sales & Revenue">Sales & Revenue</option>
                        <option value="Inventory & Stock">Inventory & Stock</option>
                        <option value="Customer Cohorts">Customer Cohorts</option>
                        <option value="Marketing Campaigns">Marketing Campaigns</option>
                        <option value="Financial Cashflow">Financial Cashflow</option>
                      </select>
                      <ChevronDown size={14} className="modalSelectIcon" />
                    </div>
                  </div>

                  <div className="modalFormGroup">
                    <label htmlFor="dateRangeSelect">Date Range</label>
                    <div className="modalSelectWrap">
                      <select
                        id="dateRangeSelect"
                        value={modalDateRange}
                        onChange={(e) => setModalDateRange(e.target.value)}
                      >
                        <option value="Last 7 days">Last 7 days</option>
                        <option value="Last 30 days">Last 30 days</option>
                        <option value="Last 90 days">Last 90 days</option>
                      </select>
                      <ChevronDown size={14} className="modalSelectIcon" />
                    </div>
                  </div>

                  <div className="modalFormGroup">
                    <label htmlFor="depthSelect">Analysis Depth</label>
                    <div className="modalSelectWrap">
                      <select
                        id="depthSelect"
                        value={analysisDepth}
                        onChange={(e) => setAnalysisDepth(e.target.value)}
                      >
                        <option value="Summary Overview">Summary Overview</option>
                        <option value="Deep Dive Audit">Deep Dive Audit</option>
                        <option value="Actionable Recommendations">Actionable Recommendations</option>
                      </select>
                      <ChevronDown size={14} className="modalSelectIcon" />
                    </div>
                  </div>

                  <div className="modalFooterBtns">
                    <button type="button" className="modalSecondaryBtn" onClick={() => setShowInsightModal(false)}>
                      Cancel
                    </button>
                    <button type="submit" className="modalPrimaryBtn">
                      <Lightbulb size={14} /> Generate
                    </button>
                  </div>
                </form>
              ) : (
                <div className="modalLoadingState">
                  <div className="spinnerBig" />
                  <div className="loadingSteps">
                    <div className={`loadingStep ${generationStep >= 0 ? "active" : ""}`}>
                      <span>Analyzing business metrics...</span>
                    </div>
                    <div className={`loadingStep ${generationStep >= 1 ? "active" : ""}`}>
                      <span>Scanning pattern anomalies...</span>
                    </div>
                    <div className={`loadingStep ${generationStep >= 2 ? "active" : ""}`}>
                      <span>Formulating strategic recommendations...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==========================================================================
           5. INSIGHT GENERATED SUCCESS MODAL (OVERLAY)
           ========================================================================== */}
        {showSuccessModal && (
          <div className="modalOverlay">
            <div className="insightModal successModal">
              <button type="button" className="closeModalBtn absoluteClose" onClick={() => setShowSuccessModal(false)}>
                ✕
              </button>
              
              <div className="successContentWrap">
                <div className="successIconLargeWrap">
                  <Check size={32} strokeWidth={2.5} />
                </div>
                <h3>Insight Generated</h3>
                <p>Your AI business insight report is ready.</p>
                
                <div className="successActionRow">
                  <button 
                    type="button" 
                    className="modalPrimaryBtn"
                    onClick={() => {
                      setShowSuccessModal(false);
                      triggerToast("Downloading insight report PDF...");
                    }}
                  >
                    <Download size={14} /> Export Insight
                  </button>
                  <button type="button" className="modalSecondaryBtn" onClick={() => setShowSuccessModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </section>
    </AdminShell>
  );
}
