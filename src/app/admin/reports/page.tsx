"use client";

import { useState } from "react";
import {
  Download,
  CalendarDays,
  Plus,
  FileText,
  Clock,
  BarChart3,
  Star,
  ShoppingCart,
  Package,
  DollarSign,
  Users,
  Megaphone,
  UserCheck,
  Truck,
  ChevronRight,
  ArrowLeft,
  Mail,
  Check,
  ShieldCheck,
  Sparkles,
  Printer,
  Share2
} from "lucide-react";
import { AdminShell } from "../components/AdminShell";

// Type definitions
interface Report {
  name: string;
  type: string;
  date: string;
  status: "generated" | "scheduled" | "draft";
}

export default function ReportsPage() {
  const [view, setView] = useState<"dashboard" | "schedule" | "schedule-success" | "builder" | "builder-success">("dashboard");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Recent Reports State
  const [reportsList, setReportsList] = useState<Report[]>([
    { name: "Q1 2026 Sales Summary", type: "Sales", date: "2026-04-01", status: "generated" },
    { name: "April Inventory Snapshot", type: "Inventory", date: "2026-05-01", status: "generated" },
    { name: "Customer Retention — March", type: "Customer", date: "2026-04-15", status: "scheduled" },
    { name: "GST Return Q4 FY25", type: "Tax", date: "2026-03-31", status: "generated" },
    { name: "Marketing ROI — April", type: "Marketing", date: "2026-05-05", status: "draft" }
  ]);

  // Statistics State
  const [totalReportsCount, setTotalReportsCount] = useState(58);
  const [scheduledReportsCount, setScheduledReportsCount] = useState(7);
  const [reportsThisMonthCount, setReportsThisMonthCount] = useState(14);

  // ==========================================
  // Schedule Form State
  // ==========================================
  const [schedReportType, setSchedReportType] = useState("");
  const [schedRecipients, setSchedRecipients] = useState("");
  const [schedFrequency, setSchedFrequency] = useState("");
  const [schedDeliveryMethod, setSchedDeliveryMethod] = useState("");
  const [schedReportName, setSchedReportName] = useState("");
  const [schedNotifyOnGen, setSchedNotifyOnGen] = useState(false);
  const [schedSendTest, setSchedSendTest] = useState(false);
  const [schedIncludeAi, setSchedIncludeAi] = useState(false);

  // ==========================================
  // Report Builder State (5 Steps)
  // ==========================================
  const [builderStep, setBuilderStep] = useState(1);
  const [buildType, setBuildType] = useState("Sales"); // Default type
  const [buildStartDate, setBuildStartDate] = useState("");
  const [buildEndDate, setBuildEndDate] = useState("");
  const [buildPreset, setBuildPreset] = useState("Last 30 days");
  
  // Step 3 Filters & Sections
  const [buildBizUnit, setBuildBizUnit] = useState("All");
  const [buildCategory, setBuildCategory] = useState("All");
  const [buildRegion, setBuildRegion] = useState("All");
  const [buildComparePeriod, setBuildComparePeriod] = useState("All");
  const [buildSections, setBuildSections] = useState<string[]>([
    "Charts & Graphs",
    "Data Tables",
    "AI Summary"
  ]);

  // Step 5 Format & Meta
  const [buildFormat, setBuildFormat] = useState("PDF");
  const [buildEmail, setBuildEmail] = useState("email@company.com");
  const [buildName, setBuildName] = useState("Sales Report — May 2026");

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Main Category Generate Button: jumps straight to Date Selection with category loaded
  const handleCategoryCardClick = (catName: string) => {
    const reportTypeShort = catName.replace(" Reports", "");
    setBuildType(reportTypeShort);
    setBuildName(`${reportTypeShort} Report — May 2026`);
    setBuilderStep(2);
    setView("builder");
  };

  const handleStartBuilder = () => {
    setBuilderStep(1);
    setBuildType("Sales");
    setBuildName("Sales Report — May 2026");
    setView("builder");
  };

  // Schedule Saved
  const handleSaveSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!schedReportName || !schedReportType || !schedFrequency) {
      triggerToast("Please fill in Report Name, Type, and Frequency.");
      return;
    }

    // Add to reports list as scheduled
    const today = new Date().toISOString().split("T")[0];
    const newReport: Report = {
      name: schedReportName,
      type: schedReportType,
      date: today,
      status: "scheduled"
    };
    
    setReportsList([newReport, ...reportsList]);
    setScheduledReportsCount((prev) => prev + 1);
    setTotalReportsCount((prev) => prev + 1);

    setView("schedule-success");
  };

  const handleSendTestReport = () => {
    if (!schedRecipients) {
      triggerToast("Please add at least one recipient email.");
      return;
    }
    triggerToast(`Test report sent to: ${schedRecipients}`);
  };

  // Quick Preset Date Select
  const handlePresetSelect = (preset: string) => {
    setBuildPreset(preset);
    const today = new Date();
    let start = new Date();
    
    if (preset === "Last 7 days") {
      start.setDate(today.getDate() - 7);
    } else if (preset === "Last 30 days") {
      start.setDate(today.getDate() - 30);
    } else if (preset === "This Quarter") {
      start.setMonth(today.getMonth() - 3);
    } else if (preset === "This Year") {
      start.setMonth(0);
      start.setDate(1);
    }

    setBuildStartDate(start.toISOString().split("T")[0]);
    setBuildEndDate(today.toISOString().split("T")[0]);
  };

  // Toggle Included Sections
  const handleToggleSection = (section: string) => {
    if (buildSections.includes(section)) {
      setBuildSections(buildSections.filter((s) => s !== section));
    } else {
      setBuildSections([...buildSections, section]);
    }
  };

  // Finish Builder and Generate
  const handleFinishBuilder = (e: React.FormEvent) => {
    e.preventDefault();
    
    const today = new Date().toISOString().split("T")[0];
    const newReport: Report = {
      name: buildName,
      type: buildType,
      date: today,
      status: "generated"
    };

    setReportsList([newReport, ...reportsList]);
    setTotalReportsCount((prev) => prev + 1);
    setReportsThisMonthCount((prev) => prev + 1);

    setView("builder-success");
  };

  // Category list definitions
  const categories = [
    { name: "Sales Reports", count: "12 reports", desc: "Revenue, orders, conversions", icon: ShoppingCart },
    { name: "Inventory Reports", count: "8 reports", desc: "Stock levels, movement, dead stock", icon: Package },
    { name: "Financial Reports", count: "10 reports", desc: "P&L, balance sheet, cash flow", icon: DollarSign },
    { name: "Customer Reports", count: "7 reports", desc: "Acquisition, retention, LTV", icon: Users },
    { name: "Marketing Reports", count: "6 reports", desc: "Campaigns, ROI, engagement", icon: Megaphone },
    { name: "Employee Reports", count: "6 reports", desc: "Attendance, performance, payroll", icon: UserCheck },
    { name: "Supplier Reports", count: "4 reports", desc: "Purchase orders, lead times", icon: Truck },
    { name: "Tax Reports", count: "6 reports", desc: "GST, TDS, compliance", icon: FileText }
  ];

  // Helper object to map icon names
  const categoryTypes = [
    { type: "Sales", label: "Sales Reports", icon: ShoppingCart },
    { type: "Inventory", label: "Inventory Reports", icon: Package },
    { type: "Financial", label: "Financial Reports", icon: DollarSign },
    { type: "Customer", label: "Customer Reports", icon: Users },
    { type: "Marketing", label: "Marketing Reports", icon: Megaphone },
    { type: "Employee", label: "Employee Reports", icon: UserCheck },
    { type: "Supplier", label: "Supplier Reports", icon: Truck },
    { type: "Tax", label: "Tax Reports", icon: FileText }
  ];

  // Advanced types list definitions
  const advancedTypes = [
    { title: "Executive Summary", desc: "Board-level business overview", icon: Star },
    { title: "Comparative Report", desc: "Month-over-month / Year-over-year", icon: BarChart3 },
    { title: "AI Report Summary", desc: "AI-generated insights & commentary", icon: Sparkles },
    { title: "Compliance Report", desc: "Regulatory & audit documentation", icon: ShieldCheck },
    { title: "Audit Report", desc: "Full transaction audit trail", icon: FileText }
  ];

  // Get dynamic values for the step 4 preview based on chosen report type
  const getPreviewValues = () => {
    switch (buildType) {
      case "Inventory":
        return { val1: "8,450 units", lab1: "Total Stock Value", val2: "12 items", lab2: "Low Stock Items", val3: "94.2%", lab3: "Fulfillment Rate" };
      case "Financial":
        return { val1: "₹18.4L", lab1: "Net Cashflow", val2: "₹6.2L", lab2: "Operating Expenses", val3: "+12.4%", lab3: "Profit Margin" };
      case "Customer":
        return { val1: "4,820", lab1: "Active Customers", val2: "87.5%", lab2: "Retention Rate", val3: "₹4,250", lab3: "Avg Lifetime Value" };
      case "Marketing":
        return { val1: "4.2x", lab1: "Ad Spend ROI", val2: "124.6K", lab2: "Impressions", val3: "3.8%", lab3: "Conversion Rate" };
      case "Employee":
        return { val1: "96.5%", lab1: "Attendance Rate", val2: "148 people", lab2: "Total Workforce", val3: "₹18.6L", lab3: "Monthly Payroll" };
      case "Supplier":
        return { val1: "42 shipments", lab1: "Deliveries Processed", val2: "4.2 days", lab2: "Avg Lead Time", val3: "98.2%", lab3: "Order Accuracy" };
      case "Tax":
        return { val1: "₹2.4L", lab1: "GST Receivable", val2: "₹1.1L", lab2: "TDS Deductions", val3: "100%", lab3: "Compliance Score" };
      case "Sales":
      default:
        return { val1: "₹42.8L", lab1: "Total Revenue", val2: "1,284", val2Suffix: "", lab2: "Total Orders", val3: "+18.2%", lab3: "Growth Rate" };
    }
  };

  const preview = getPreviewValues();

  return (
    <AdminShell activePage="reports">
      <section className="reportsContent">
        
        {/* Toast Alerts */}
        {toastMessage && (
          <div className="reportsToast" role="alert">
            <span>{toastMessage}</span>
          </div>
        )}

        {/* ==========================================================================
           1. MAIN DASHBOARD VIEW
           ========================================================================== */}
        {view === "dashboard" && (
          <>
            {/* Page Header */}
            <div className="reportsHero">
              <div>
                <h1>Reports</h1>
                <p>Generate, schedule, export, and share business reports.</p>
              </div>
              <div className="reportsActions">
                <button type="button" onClick={() => triggerToast("Exporting reports database...")}>
                  <Download size={14} /> Export Data
                </button>
                <button type="button" onClick={() => setView("schedule")}>
                  <CalendarDays size={14} /> Schedule Report
                </button>
                <button type="button" className="primary" onClick={handleStartBuilder}>
                  <Plus size={14} /> Generate Report
                </button>
              </div>
            </div>

            {/* Stats Cards Row */}
            <div className="statsCardsGrid">
              <div className="statsCard">
                <div className="statsIcon blue">
                  <FileText size={18} />
                </div>
                <div className="statsInfo">
                  <strong>{totalReportsCount}</strong>
                  <span className="title">Total Reports</span>
                  <span className="sub">generated all time</span>
                </div>
              </div>

              <div className="statsCard">
                <div className="statsIcon teal">
                  <Clock size={18} />
                </div>
                <div className="statsInfo">
                  <strong>{scheduledReportsCount}</strong>
                  <span className="title">Scheduled Reports</span>
                  <span className="sub">running automatically</span>
                </div>
              </div>

              <div className="statsCard">
                <div className="statsIcon amber">
                  <BarChart3 size={18} />
                </div>
                <div className="statsInfo">
                  <strong>{reportsThisMonthCount}</strong>
                  <span className="title">Reports This Month</span>
                  <span className="sub">+3 vs last month</span>
                </div>
              </div>

              <div className="statsCard">
                <div className="statsIcon purple">
                  <Star size={18} />
                </div>
                <div className="statsInfo">
                  <strong>9</strong>
                  <span className="title">Saved Favorites</span>
                  <span className="sub">quick access reports</span>
                </div>
              </div>
            </div>

            {/* Report Categories Section */}
            <div className="categorySection">
              <h2>Report Categories</h2>
              <div className="categoriesGrid">
                {categories.map((cat) => (
                  <article className="categoryCard" key={cat.name}>
                    <div className="categoryHeader">
                      <div className="categoryIcon">
                        <cat.icon size={18} />
                      </div>
                      <span className="categoryCount">{cat.count}</span>
                    </div>
                    <h3>{cat.name}</h3>
                    <p>{cat.desc}</p>
                    <button type="button" onClick={() => handleCategoryCardClick(cat.name)}>
                      Generate
                    </button>
                  </article>
                ))}
              </div>
            </div>

            {/* Split Recent Reports + Advanced Options */}
            <div className="reportsSplitLayout">
              {/* Recent Reports List */}
              <div className="reportBlock">
                <div className="reportBlockHeader">
                  <h2>Recent Reports</h2>
                  <button type="button" className="viewAllLink" onClick={() => triggerToast("Loading complete reports library...")}>
                    View All
                  </button>
                </div>
                <div className="recentReportsList">
                  {reportsList.map((rep, idx) => (
                    <div className="reportRow" key={`${rep.name}-${idx}`}>
                      <div className="reportMeta">
                        <div className="reportMetaIcon">
                          <FileText size={16} />
                        </div>
                        <div className="reportDetails">
                          <span className="name">{rep.name}</span>
                          <span className="subText">{rep.type} • {rep.date}</span>
                        </div>
                      </div>
                      <div className="reportControls">
                        <span className={`statusBadge ${rep.status}`}>
                          {rep.status.charAt(0).toUpperCase() + rep.status.slice(1)}
                        </span>
                        <button 
                          type="button" 
                          className="downloadIconBtn"
                          title="Download PDF"
                          onClick={() => triggerToast(`Downloading PDF for: ${rep.name}`)}
                        >
                          <Download size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advanced Report Types List */}
              <div className="reportBlock">
                <div className="reportBlockHeader">
                  <h2>Advanced Report Types</h2>
                </div>
                <div className="advancedTypesList">
                  {advancedTypes.map((type) => (
                    <div 
                      className="advancedTypeItem" 
                      key={type.title}
                      onClick={() => triggerToast(`Creating advanced ${type.title} layout...`)}
                    >
                      <div className="advancedTypeMeta">
                        <div className="advancedTypeIcon">
                          <type.icon size={16} />
                        </div>
                        <div className="advancedTypeDetails">
                          <span className="title">{type.title}</span>
                          <span className="desc">{type.desc}</span>
                        </div>
                      </div>
                      <div className="advancedChevron">
                        <ChevronRight size={14} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* ==========================================================================
           2. SCHEDULE REPORT FORM VIEW
           ========================================================================== */}
        {view === "schedule" && (
          <div className="scheduleContainer">
            {/* Header */}
            <div className="scheduleHeader">
              <button type="button" className="backBtn" onClick={() => setView("dashboard")} aria-label="Go back">
                <ArrowLeft size={16} />
              </button>
              <div className="scheduleHeaderInfo">
                <h1>Schedule Report</h1>
                <p>Automate report generation and delivery to your team.</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSaveSchedule} className="formGrid">
              <div className="formGroup">
                <label htmlFor="reportType">Report Type</label>
                <select 
                  id="reportType"
                  value={schedReportType}
                  onChange={(e) => {
                    setSchedReportType(e.target.value);
                    if (e.target.value && !schedReportName) {
                      setSchedReportName(`Automated Monthly ${e.target.value} Report`);
                    }
                  }}
                  required
                >
                  <option value="">Select Report Type</option>
                  <option value="Sales">Sales Report</option>
                  <option value="Inventory">Inventory Report</option>
                  <option value="Financial">Financial Report</option>
                  <option value="Customer">Customer Report</option>
                  <option value="Marketing">Marketing Report</option>
                  <option value="Employee">Employee Report</option>
                  <option value="Supplier">Supplier Report</option>
                  <option value="Tax">Tax Report</option>
                </select>
              </div>

              <div className="formGroup">
                <label htmlFor="recipients">Recipients</label>
                <input 
                  type="text" 
                  id="recipients"
                  value={schedRecipients}
                  onChange={(e) => setSchedRecipients(e.target.value)}
                  placeholder="email1@company.com, email2@company.com"
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="frequency">Frequency</label>
                <select 
                  id="frequency"
                  value={schedFrequency}
                  onChange={(e) => setSchedFrequency(e.target.value)}
                  required
                >
                  <option value="">Select Frequency</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                </select>
              </div>

              <div className="formGroup">
                <label htmlFor="deliveryMethod">Delivery Method</label>
                <select 
                  id="deliveryMethod"
                  value={schedDeliveryMethod}
                  onChange={(e) => setSchedDeliveryMethod(e.target.value)}
                  required
                >
                  <option value="">Select Delivery Method</option>
                  <option value="Email">Email</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Download Link">Download Link</option>
                  <option value="All Methods">All Methods</option>
                </select>
              </div>

              <div className="formGroup fullWidth">
                <label htmlFor="reportName">Report Name</label>
                <input 
                  type="text" 
                  id="reportName"
                  value={schedReportName}
                  onChange={(e) => setSchedReportName(e.target.value)}
                  placeholder="Automated Monthly Sales Report"
                  required
                />
              </div>

              <div className="formGroup fullWidth">
                <label>Notification Preference</label>
                <div className="checkboxesGroup">
                  <label className="checkboxRow">
                    <input 
                      type="checkbox" 
                      checked={schedNotifyOnGen}
                      onChange={(e) => setSchedNotifyOnGen(e.target.checked)}
                    />
                    <span>Notify me when report is generated</span>
                  </label>
                  <label className="checkboxRow">
                    <input 
                      type="checkbox" 
                      checked={schedSendTest}
                      onChange={(e) => setSchedSendTest(e.target.checked)}
                    />
                    <span>Send test report before activating</span>
                  </label>
                  <label className="checkboxRow">
                    <input 
                      type="checkbox" 
                      checked={schedIncludeAi}
                      onChange={(e) => setSchedIncludeAi(e.target.checked)}
                    />
                    <span>Include AI summary in email</span>
                  </label>
                </div>
              </div>

              {/* Actions */}
              <div className="formActions">
                <button type="button" className="cancelBtn" onClick={() => setView("dashboard")}>
                  Cancel
                </button>
                <button type="button" className="testBtn" onClick={handleSendTestReport}>
                  <Mail size={14} /> Send Test Report
                </button>
                <button type="submit" className="saveBtn">
                  <Check size={14} /> Save Schedule
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ==========================================================================
           3. SCHEDULE SUCCESS VIEW
           ========================================================================== */}
        {view === "schedule-success" && (
          <div className="successView">
            <div className="successIconWrap">
              <Check size={28} strokeWidth={2.5} />
            </div>
            <h2>Schedule Saved!</h2>
            <p>Your report will be automatically generated and sent at the scheduled frequency.</p>
            
            <div className="successButtonsRow">
              <button type="button" className="outline" onClick={() => setView("dashboard")}>
                Back to Reports
              </button>
              <button 
                type="button" 
                className="primary" 
                onClick={() => {
                  setSchedReportType("");
                  setSchedRecipients("");
                  setSchedFrequency("");
                  setSchedDeliveryMethod("");
                  setSchedReportName("");
                  setSchedNotifyOnGen(false);
                  setSchedSendTest(false);
                  setSchedIncludeAi(false);
                  setView("schedule");
                }}
              >
                Schedule Another
              </button>
            </div>
          </div>
        )}

        {/* ==========================================================================
           4. REPORT BUILDER WIZARD (5 STEPS)
           ========================================================================== */}
        {view === "builder" && (
          <div className="builderContainer">
            {/* Header */}
            <div className="scheduleHeader">
              <button 
                type="button" 
                className="backBtn" 
                onClick={() => {
                  if (builderStep > 1) {
                    setBuilderStep(builderStep - 1);
                  } else {
                    setView("dashboard");
                  }
                }} 
                aria-label="Go back"
              >
                <ArrowLeft size={16} />
              </button>
              <div className="scheduleHeaderInfo">
                <h1>Report Builder</h1>
                <p>Generate a detailed business report in 5 steps.</p>
              </div>
            </div>

            {/* Horizontal Steps Indicator */}
            <div className="builderProgressBar" aria-label="Build progress">
              <div className={`progressStep ${builderStep === 1 ? "active" : builderStep > 1 ? "completed" : ""}`}>
                <div className="stepBadge">{builderStep > 1 ? <Check size={11} /> : "1"}</div>
                <span className="stepLabel">Report Type</span>
              </div>
              <div className={`progressLine ${builderStep > 1 ? "completed" : ""}`} />

              <div className={`progressStep ${builderStep === 2 ? "active" : builderStep > 2 ? "completed" : ""}`}>
                <div className="stepBadge">{builderStep > 2 ? <Check size={11} /> : "2"}</div>
                <span className="stepLabel">Date Range</span>
              </div>
              <div className={`progressLine ${builderStep > 2 ? "completed" : ""}`} />

              <div className={`progressStep ${builderStep === 3 ? "active" : builderStep > 3 ? "completed" : ""}`}>
                <div className="stepBadge">{builderStep > 3 ? <Check size={11} /> : "3"}</div>
                <span className="stepLabel">Apply Filters</span>
              </div>
              <div className={`progressLine ${builderStep > 3 ? "completed" : ""}`} />

              <div className={`progressStep ${builderStep === 4 ? "active" : builderStep > 4 ? "completed" : ""}`}>
                <div className="stepBadge">{builderStep > 4 ? <Check size={11} /> : "4"}</div>
                <span className="stepLabel">Preview</span>
              </div>
              <div className={`progressLine ${builderStep > 4 ? "completed" : ""}`} />

              <div className={`progressStep ${builderStep === 5 ? "active" : ""}`}>
                <div className="stepBadge">5</div>
                <span className="stepLabel">Export</span>
              </div>
            </div>

            {/* WIZARD CONTENT STEPS */}
            <form onSubmit={handleFinishBuilder}>
              {/* STEP 1: REPORT TYPE */}
              {builderStep === 1 && (
                <div className="builderSection">
                  <h2>Select Report Type</h2>
                  <div className="selectableGrid">
                    {categoryTypes.map((cat) => {
                      const isSelected = buildType === cat.type;
                      return (
                        <div 
                          className={`selectableCard ${isSelected ? "selected" : ""}`}
                          key={cat.type}
                          onClick={() => {
                            setBuildType(cat.type);
                            setBuildName(`${cat.type} Report — May 2026`);
                          }}
                        >
                          <div className="selectableCardIcon">
                            <cat.icon size={18} />
                          </div>
                          <span className="selectableCardLabel">{cat.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: DATE RANGE */}
              {builderStep === 2 && (
                <div className="builderSection">
                  <h2>Select Date Range</h2>
                  <div className="formGrid">
                    <div className="formGroup">
                      <label htmlFor="startDate">Start Date</label>
                      <input 
                        type="date" 
                        id="startDate"
                        value={buildStartDate}
                        onChange={(e) => {
                          setBuildStartDate(e.target.value);
                          setBuildPreset("");
                        }}
                        required
                      />
                    </div>
                    <div className="formGroup">
                      <label htmlFor="endDate">End Date</label>
                      <input 
                        type="date" 
                        id="endDate"
                        value={buildEndDate}
                        onChange={(e) => {
                          setBuildEndDate(e.target.value);
                          setBuildPreset("");
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="datePresetsRow">
                    {["Last 7 days", "Last 30 days", "This Quarter", "This Year"].map((preset) => (
                      <button 
                        type="button" 
                        className={`datePresetBtn ${buildPreset === preset ? "active" : ""}`}
                        key={preset}
                        onClick={() => handlePresetSelect(preset)}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: APPLY FILTERS */}
              {builderStep === 3 && (
                <div className="builderSection">
                  <h2>Apply Filters</h2>
                  <div className="formGrid" style={{ marginBottom: "24px" }}>
                    <div className="formGroup">
                      <label htmlFor="bizUnit">Business Unit</label>
                      <select id="bizUnit" value={buildBizUnit} onChange={(e) => setBuildBizUnit(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Retail">Retail Storefront</option>
                        <option value="Wholesale">Wholesale Hub</option>
                        <option value="Online">Online Store</option>
                      </select>
                    </div>

                    <div className="formGroup">
                      <label htmlFor="buildCategory">Category</label>
                      <select id="buildCategory" value={buildCategory} onChange={(e) => setBuildCategory(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Clothing">Clothing & Apparel</option>
                        <option value="Textiles">Raw Textiles</option>
                        <option value="Accessories">Accessories</option>
                      </select>
                    </div>

                    <div className="formGroup">
                      <label htmlFor="region">Region</label>
                      <select id="region" value={buildRegion} onChange={(e) => setBuildRegion(e.target.value)}>
                        <option value="All">All</option>
                        <option value="North">North India</option>
                        <option value="South">South India</option>
                        <option value="East">East India</option>
                        <option value="West">West India</option>
                      </select>
                    </div>

                    <div className="formGroup">
                      <label htmlFor="comparePeriod">Comparison Period</label>
                      <select id="comparePeriod" value={buildComparePeriod} onChange={(e) => setBuildComparePeriod(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Previous Month">Previous Month</option>
                        <option value="Previous Quarter">Previous Quarter</option>
                        <option value="Previous Year">Previous Year (YoY)</option>
                      </select>
                    </div>
                  </div>

                  <h2>Include Sections</h2>
                  <div className="checkboxCardsGrid">
                    {[
                      "Charts & Graphs",
                      "Data Tables",
                      "AI Summary",
                      "Executive Notes",
                      "Comparisons",
                      "Attachments"
                    ].map((section) => {
                      const isChecked = buildSections.includes(section);
                      return (
                        <div 
                          className={`checkboxCard ${isChecked ? "checked" : ""}`}
                          key={section}
                          onClick={() => handleToggleSection(section)}
                        >
                          <div className="checkboxBox">
                            {isChecked && <Check size={11} />}
                          </div>
                          <span className="checkboxLabel">{section}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: PREVIEW */}
              {builderStep === 4 && (
                <div className="builderSection">
                  <h2>Report Preview</h2>
                  
                  <div className="reportPreviewWrapper">
                    <div className="previewHeaderBlock">
                      <div className="previewHeaderInfo">
                        <h3>{buildType} Report</h3>
                        <span>Generated: {new Date().toLocaleDateString()} • Period: {buildPreset || "Custom Range"}</span>
                      </div>
                      <div className="previewTools">
                        <button type="button" onClick={() => triggerToast("Printing preview page...")}>
                          <Printer size={12} /> Print
                        </button>
                        <button type="button" onClick={() => triggerToast("Generating shareable report link...")}>
                          <Share2 size={12} /> Share
                        </button>
                      </div>
                    </div>

                    <div className="previewBodyBlock">
                      <div className="previewKpiGrid">
                        <div className="previewKpiCard">
                          <strong>{preview.val1}</strong>
                          <span>{preview.lab1}</span>
                        </div>
                        <div className="previewKpiCard">
                          <strong>{preview.val2}</strong>
                          <span>{preview.lab2}</span>
                        </div>
                        <div className="previewKpiCard">
                          <strong>{preview.val3}</strong>
                          <span>{preview.lab3}</span>
                        </div>
                      </div>

                      {buildSections.includes("Charts & Graphs") && (
                        <div className="chartPlaceholder">
                          <BarChart3 size={24} />
                          <span>Chart preview will appear here</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: EXPORT FORMAT & META */}
              {builderStep === 5 && (
                <div className="builderSection">
                  <h2>Export Options</h2>
                  <div className="formatGrid">
                    {["PDF", "Excel", "CSV", "Google Sheets"].map((format) => {
                      const isSelected = buildFormat === format;
                      return (
                        <div 
                          className={`formatCard ${isSelected ? "selected" : ""}`}
                          key={format}
                          onClick={() => setBuildFormat(format)}
                        >
                          <div className="formatCardIcon">
                            <FileText size={20} />
                          </div>
                          <span className="formatCardLabel">{format}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="formGrid">
                    <div className="formGroup">
                      <label htmlFor="exportEmail">Email Recipients</label>
                      <input 
                        type="email" 
                        id="exportEmail"
                        value={buildEmail}
                        onChange={(e) => setBuildEmail(e.target.value)}
                        placeholder="email@company.com"
                        required
                      />
                    </div>
                    <div className="formGroup">
                      <label htmlFor="buildName">Report Name</label>
                      <input 
                        type="text" 
                        id="buildName"
                        value={buildName}
                        onChange={(e) => setBuildName(e.target.value)}
                        placeholder="Sales Report — May 2026"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Actions Footer */}
              <div className="formActions">
                {builderStep === 1 ? (
                  <button type="button" className="cancelBtn" onClick={() => setView("dashboard")}>
                    Cancel
                  </button>
                ) : (
                  <button type="button" className="cancelBtn" onClick={() => setBuilderStep(builderStep - 1)}>
                    Previous
                  </button>
                )}

                {builderStep < 5 ? (
                  <button 
                    type="button" 
                    className="saveBtn"
                    onClick={() => {
                      if (builderStep === 2 && (!buildStartDate || !buildEndDate)) {
                        triggerToast("Please enter Start and End Dates.");
                        return;
                      }
                      setBuilderStep(builderStep + 1);
                    }}
                  >
                    Continue <ChevronRight size={14} />
                  </button>
                ) : (
                  <button type="submit" className="saveBtn">
                    <Check size={14} /> Generate
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {/* ==========================================================================
           5. BUILDER SUCCESS VIEW
           ========================================================================== */}
        {view === "builder-success" && (
          <div className="successView">
            <div className="successIconWrap">
              <Check size={28} strokeWidth={2.5} />
            </div>
            <h2>Report Generated!</h2>
            <p>Your {buildType} report has been generated and is ready to download as {buildFormat}.</p>
            
            <div className="successButtonsRow">
              <button 
                type="button" 
                className="primary" 
                onClick={() => triggerToast(`Downloading report file in ${buildFormat} format...`)}
              >
                <Download size={14} /> Download {buildFormat}
              </button>
              <button 
                type="button" 
                className="outline" 
                onClick={() => triggerToast(`Emailing generated report to: ${buildEmail}`)}
              >
                <Mail size={14} /> Email Report
              </button>
              <button type="button" className="outline" onClick={() => setView("dashboard")}>
                Back to Reports
              </button>
            </div>
          </div>
        )}

      </section>
    </AdminShell>
  );
}
