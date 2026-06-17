import Link from "next/link";
import "./Hero.css";

import {
  ArrowRight,
  Check,
  ShoppingCart,
  TrendingUp,
  Box,
  Database,
  Search,
  Sparkles,
  Plus,
  ChevronDown,
  LayoutDashboard,
  Package,
  Users,
  Layers,
  Globe,
  Megaphone,
  Target,
  Calculator,
  UserCheck,
  LineChart,
  FileText,
  User,
  Bell,
  HelpCircle,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="section-padding">
      <div className="lp-container hero-grid">
        <div className="hero-content">
          <div className="badge hero-badge">
            <span className="badge-dot"></span>
            <span>Unified Business Operating System</span>
          </div>
          <h1 style={{ color: '#fff' }}>Run Your Entire Business From One Platform</h1>
          <p className="hero-description">
            Manage products, suppliers, inventory, websites, customers, campaigns,
            accounting, and analytics without switching between tools.
          </p>

          <div className="hero-ctas">
            <Link href="/admin/dashboard" className="btn-primary btn-large">
              <span>Start Free Trial</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="#book-demo" className="btn-secondary btn-large">
              <span>Book Live Demo</span>
            </Link>
          </div>

          <div className="hero-checklist">
            <div className="check-item">
              <span className="check-icon">
                <Check size={10} />
              </span>
              <span>No Technical Setup</span>
            </div>
            <div className="check-item">
              <span className="check-icon">
                <Check size={10} />
              </span>
              <span>Website Included</span>
            </div>
            <div className="check-item">
              <span className="check-icon">
                <Check size={10} />
              </span>
              <span>AI Powered</span>
            </div>
            <div className="check-item">
              <span className="check-icon">
                <Check size={10} />
              </span>
              <span>Unlimited Products</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {/* Main Dashboard Window Mock */}
          <div className="dash-window">
            <div className="dash-scaler">
              {/* Sidebar */}
              <aside className="dash-sidebar">
                <div>
                  <div className="dash-sidebar-logo">
                    <div className="dash-sidebar-logo-icon">
                      <span className="dash-sidebar-logo-dot"></span>
                      <span className="dash-sidebar-logo-dot"></span>
                      <span className="dash-sidebar-logo-dot"></span>
                      <span className="dash-sidebar-logo-dot"></span>
                    </div>
                    <span>BizOS</span>
                  </div>

                  <div className="dash-sidebar-group">
                    <div className="dash-sidebar-title">Core</div>
                    <div className="dash-sidebar-menu">
                      <div className="dash-sidebar-item active">
                        <LayoutDashboard size={11} />
                        <span>Dashboard</span>
                      </div>
                      <div className="dash-sidebar-item">
                        <Package size={11} />
                        <span>Products</span>
                      </div>
                      <div className="dash-sidebar-item">
                        <UserCheck size={11} />
                        <span>Supplier</span>
                      </div>
                      <div className="dash-sidebar-item">
                        <Database size={11} />
                        <span>Inventory</span>
                      </div>
                      <div className="dash-sidebar-item">
                        <ShoppingCart size={11} />
                        <span>Orders</span>
                      </div>
                      <div className="dash-sidebar-item">
                        <Users size={11} />
                        <span>Customers</span>
                      </div>
                    </div>
                  </div>

                  <div className="dash-sidebar-group">
                    <div className="dash-sidebar-title">Commerce</div>
                    <div className="dash-sidebar-menu">
                      <div className="dash-sidebar-item">
                        <Globe size={11} />
                        <span>Website</span>
                      </div>
                      <div className="dash-sidebar-item">
                        <Megaphone size={11} />
                        <span>Marketing</span>
                      </div>
                      <div className="dash-sidebar-item">
                        <Target size={11} />
                        <span>Campaigns</span>
                      </div>
                    </div>
                  </div>

                  <div className="dash-sidebar-group">
                    <div className="dash-sidebar-title">Operations</div>
                    <div className="dash-sidebar-menu">
                      <div className="dash-sidebar-item">
                        <Calculator size={11} />
                        <span>Accounting</span>
                      </div>
                      <div className="dash-sidebar-item">
                        <Layers size={11} />
                        <span>HRM</span>
                      </div>
                      <div className="dash-sidebar-item">
                        <LineChart size={11} />
                        <span>Analytics</span>
                      </div>
                      <div className="dash-sidebar-item">
                        <FileText size={11} />
                        <span>Reports</span>
                      </div>
                    </div>
                  </div>

                  <div className="dash-sidebar-group">
                    <div className="dash-sidebar-title">System</div>
                    <div className="dash-sidebar-menu">
                      <div className="dash-sidebar-item">
                        <Users size={11} />
                        <span>Team</span>
                      </div>
                      <div className="dash-sidebar-item">
                        <HelpCircle size={11} />
                        <span>Support</span>
                      </div>
                    </div>
                  </div>

                  <div className="dash-sidebar-upgrade">
                    <div className="dash-upgrade-title">Upgrade to Pro</div>
                    <p className="dash-upgrade-desc">Get unlimited products, advanced reports, and 24/7 support.</p>
                    <button className="dash-upgrade-btn">Upgrade Plan</button>
                  </div>
                </div>

                <div className="dash-sidebar-profile">
                  <div className="dash-sidebar-avatar">G</div>
                  <div>
                    <div className="dash-profile-name">Himanshu </div>
                    <div className="dash-profile-email">Himanshu@enterprises.in</div>
                  </div>
                </div>
              </aside>

              {/* Main Area */}
              <div className="dash-main-area">
                {/* Header */}
                <div className="dash-header">
                  <div className="dash-switcher">
                    <span>Shah Enterprises</span>
                    <ChevronDown size={10} />
                  </div>
                  <div className="dash-header-search">
                    <Search size={10} />
                    <span>Search products, orders, customers...</span>
                    <kbd className="dash-search-kbd">⌘K</kbd>
                  </div>
                  <div className="dash-header-actions">
                    <div className="dash-header-icon-btn">
                      <Bell size={11} />
                    </div>
                    <div className="dash-header-btn ai">
                      <Sparkles size={10} />
                      <span>AI Assistant</span>
                    </div>
                    <div className="dash-header-avatar-circle">
                      G
                    </div>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="dash-content-body">
                  {/* Welcome Row */}
                  <div className="dash-welcome-row">
                    <div className="dash-welcome">
                      <h3>Good Evening, Himanshu</h3>
                      <p>You have 6 pending orders and 3 low-stock alerts today.</p>
                    </div>
                    <div className="dash-welcome-buttons">
                      <button className="dash-welcome-btn">
                        <Plus size={10} />
                        <span>Add Product</span>
                      </button>
                      <button className="dash-welcome-btn">
                        <span>Create Invoice</span>
                      </button>
                      <button className="dash-welcome-btn">
                        <span>Publish Website</span>
                      </button>
                    </div>
                  </div>

                  {/* Metric widgets */}
                  <div className="dash-widgets-grid">
                    <div className="dash-stat-widget">
                      <div className="dash-stat-widget-header">
                        <div className="dash-stat-widget-title">Total Revenue</div>
                        <div className="dash-stat-icon-wrapper revenue">
                          <TrendingUp size={10} />
                        </div>
                      </div>
                      <div className="dash-stat-widget-val">
                        <span>₹24.86L</span>
                      </div>
                      <div className="dash-stat-widget-sub">
                        <span className="dash-stat-widget-trend trend-up">+12.4%</span>
                        <span> vs last month</span>
                      </div>
                    </div>
                    
                    <div className="dash-stat-widget">
                      <div className="dash-stat-widget-header">
                        <div className="dash-stat-widget-title">Total Orders</div>
                        <div className="dash-stat-icon-wrapper orders">
                          <ShoppingCart size={10} />
                        </div>
                      </div>
                      <div className="dash-stat-widget-val">
                        <span>1,847</span>
                      </div>
                      <div className="dash-stat-widget-sub">
                        <span className="dash-stat-widget-trend trend-up">+8.3%</span>
                        <span> vs last month</span>
                      </div>
                    </div>

                    <div className="dash-stat-widget">
                      <div className="dash-stat-widget-header">
                        <div className="dash-stat-widget-title">Inventory Health</div>
                        <div className="dash-stat-icon-wrapper inventory">
                          <Box size={10} />
                        </div>
                      </div>
                      <div className="dash-stat-widget-val">
                        <span>94.2%</span>
                      </div>
                      <div className="dash-stat-widget-sub">
                        <span className="dash-stat-widget-trend trend-down">-2.1%</span>
                        <span> 3 items low stock</span>
                      </div>
                    </div>

                    <div className="dash-stat-widget">
                      <div className="dash-stat-widget-header">
                        <div className="dash-stat-widget-title">Website Traffic</div>
                        <div className="dash-stat-icon-wrapper traffic">
                          <Globe size={10} />
                        </div>
                      </div>
                      <div className="dash-stat-widget-val">
                        <span>48,291</span>
                      </div>
                      <div className="dash-stat-widget-sub">
                        <span className="dash-stat-widget-trend trend-up">+22.7%</span>
                        <span> unique visitors</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Grid Layout */}
                  <div className="dash-layout-grid">
                    {/* Left Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {/* Revenue Overview Card */}
                      <div className="dash-card">
                        <div className="dash-card-header">
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <span className="dash-card-title">Revenue Overview</span>
                            <span className="dash-card-subtitle">Monthly revenue and order trends</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {/* Legend */}
                            <div className="dash-chart-legend">
                              <span className="legend-item"><span className="legend-dot revenue"></span>Revenue</span>
                              <span className="legend-item"><span className="legend-dot orders"></span>Orders</span>
                            </div>
                            {/* Tabs */}
                            <div className="dash-card-tabs">
                              <span>7D</span>
                              <span>30D</span>
                              <span>3M</span>
                              <span className="active">12M</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="dash-revenue-overview-stats">
                          <div className="dash-rev-stat-item">
                            <span className="dash-rev-stat-title">Total Revenue (FY)</span>
                            <span className="dash-rev-stat-val">₹2.86 Cr</span>
                          </div>
                          <div className="dash-rev-stat-item">
                            <span className="dash-rev-stat-title">Total Orders (FY)</span>
                            <span className="dash-rev-stat-val">23,270</span>
                          </div>
                          <div className="dash-rev-stat-item">
                            <span className="dash-rev-stat-title">YoY Growth</span>
                            <span className="dash-rev-stat-val" style={{ color: '#fbbf24' }}>+18.6%</span>
                          </div>
                        </div>
                        {/* SVG line graph */}
                        <div className="dash-rev-chart">
                          <svg viewBox="0 0 200 40" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
                            <path
                              d="M0,35 Q20,20 40,28 T80,18 T125,25 T165,10 T200,8"
                              fill="none"
                              stroke="#6366f1"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M0,35 Q20,20 40,28 T80,18 T125,25 T165,10 T200,8 L200,40 L0,40 Z"
                              fill="url(#rev-glow)"
                            />
                            <defs>
                              <linearGradient id="rev-glow" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="dash-rev-axis">
                          <span>Jun</span>
                          <span>Aug</span>
                          <span>Oct</span>
                          <span>Dec</span>
                          <span>Feb</span>
                          <span>Apr</span>
                          <span>May</span>
                        </div>
                      </div>

                      {/* Revenue by Channel Card */}
                      <div className="dash-card">
                        <div className="dash-card-header">
                          <span className="dash-card-title">Revenue by Channel</span>
                          <span style={{ fontSize: '7px', color: 'var(--lp-text-muted)' }}>FY 2024-25</span>
                        </div>
                        <div className="dash-channel-list">
                          <div className="dash-channel-item">
                            <div className="dash-channel-meta">
                              <span><span className="channel-dot store"></span>Online Store</span>
                              <span>22.4% (₹1.24 Cr) <span className="channel-percentage-badge">43%</span></span>
                            </div>
                            <div className="dash-channel-bar-bg">
                              <div className="dash-channel-bar" style={{ width: '43%', background: '#10b981' }}></div>
                            </div>
                          </div>
                          <div className="dash-channel-item">
                            <div className="dash-channel-meta">
                              <span><span className="channel-dot wholesale"></span>Wholesale</span>
                              <span>14.1% (₹0.89 Cr) <span className="channel-percentage-badge">31%</span></span>
                            </div>
                            <div className="dash-channel-bar-bg">
                              <div className="dash-channel-bar" style={{ width: '31%', background: '#6366f1' }}></div>
                            </div>
                          </div>
                          <div className="dash-channel-item">
                            <div className="dash-channel-meta">
                              <span><span className="channel-dot retail"></span>Retail Outlets</span>
                              <span>3.2% (₹0.81 Cr) <span className="channel-percentage-badge">18%</span></span>
                            </div>
                            <div className="dash-channel-bar-bg">
                              <div className="dash-channel-bar" style={{ width: '18%', background: '#fbbf24' }}></div>
                            </div>
                          </div>
                          <div className="dash-channel-item">
                            <div className="dash-channel-meta">
                              <span><span className="channel-dot direct"></span>Direct / B2B</span>
                              <span>8.6% (₹0.33 Cr) <span className="channel-percentage-badge">8%</span></span>
                            </div>
                            <div className="dash-channel-bar-bg">
                              <div className="dash-channel-bar" style={{ width: '8%', background: '#a855f7' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {/* Low Stock Alerts */}
                      <div className="dash-card">
                        <div className="dash-card-header">
                          <span className="dash-card-title">Low Stock Alerts</span>
                          <span className="dash-card-badge red">3</span>
                        </div>
                        <div className="dash-alerts-list">
                          <div className="dash-alert-item">
                            <div>
                              <div className="dash-alert-name">Basmati Rice Premium 25kg</div>
                              <div className="dash-alert-sku">SKU-O042</div>
                            </div>
                            <span className="dash-alert-left">12 left</span>
                          </div>
                          <div className="dash-alert-item">
                            <div>
                              <div className="dash-alert-name">Toor Dal 1kg Pack</div>
                              <div className="dash-alert-sku">SKU-O098</div>
                            </div>
                            <span className="dash-alert-left" style={{ color: '#fbbf24' }}>45 left</span>
                          </div>
                          <div className="dash-alert-item">
                            <div>
                              <div className="dash-alert-name">Refined Cooking Oil 5L</div>
                              <div className="dash-alert-sku">SKU-O112</div>
                            </div>
                            <span className="dash-alert-left" style={{ color: '#fbbf24' }}>28 left</span>
                          </div>
                          <div className="dash-card-link-row">
                            <span className="dash-card-link">View all &gt;</span>
                          </div>
                        </div>
                      </div>

                      {/* Pending Invoices */}
                      <div className="dash-card">
                        <div className="dash-card-header">
                          <span className="dash-card-title">Pending Invoices</span>
                          <span className="dash-card-badge orange">3</span>
                        </div>
                        <div className="dash-invoices-list">
                          <div className="dash-invoice-item">
                            <div>
                              <div className="dash-invoice-name">Matrix Distributors</div>
                              <span className="dash-invoice-status due-blue">Due in 2 days</span>
                            </div>
                            <span className="dash-invoice-val">₹94,500</span>
                          </div>
                          <div className="dash-invoice-item">
                            <div>
                              <div className="dash-invoice-name">Singh Suppliers Ltd.</div>
                              <span className="dash-invoice-status due-orange">Due tomorrow</span>
                            </div>
                            <span className="dash-invoice-val">₹1,54,000</span>
                          </div>
                          <div className="dash-invoice-item">
                            <div>
                              <div className="dash-invoice-name">Gupta Wholesalers</div>
                              <span className="dash-invoice-status overdue-red">Overdue 2 days</span>
                            </div>
                            <span className="dash-invoice-val">₹47,200</span>
                          </div>
                        </div>
                      </div>

                      {/* Active Campaigns */}
                      <div className="dash-card">
                        <div className="dash-card-header">
                          <span className="dash-card-title">Active Campaigns</span>
                          <span className="dash-card-badge blue">2</span>
                        </div>
                        <div className="dash-campaigns-list">
                          <div className="dash-campaign-item">
                            <div>
                              <div className="dash-campaign-name">Akshaya Tritiya Sale</div>
                              <div className="dash-campaign-type">SMS Campaign</div>
                            </div>
                            <span className="dash-campaign-status active">Active</span>
                          </div>
                          <div className="dash-campaign-item">
                            <div>
                              <div className="dash-campaign-name">Mother's Day Email</div>
                              <div className="dash-campaign-type">Email Newsletter</div>
                            </div>
                            <span className="dash-campaign-status active">Active</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Operations Table */}
                  <div className="dash-card">
                    <div className="dash-card-header">
                      <span className="dash-card-title">Recent Operations</span>
                      <div className="dash-operations-tabs">
                        <span className="dash-op-tab active">Orders</span>
                        <span className="dash-op-tab">Products</span>
                        <span className="dash-op-tab">Customers</span>
                        <span className="dash-op-tab">Invoices</span>
                      </div>
                    </div>
                    <div className="dash-operations-table-wrapper">
                      <table className="dash-operations-table">
                        <thead>
                          <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Location</th>
                            <th>Items</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ color: '#6366f1', fontWeight: '600' }}>#ORD-4821</td>
                            <td style={{ color: '#fff', fontWeight: '600' }}>Priya Sharma</td>
                            <td>Mumbai</td>
                            <td>3</td>
                            <td>₹4,280</td>
                            <td><span className="dash-op-status delivered">Delivered</span></td>
                            <td>May 11</td>
                          </tr>
                          <tr>
                            <td style={{ color: '#6366f1', fontWeight: '600' }}>#ORD-4820</td>
                            <td style={{ color: '#fff', fontWeight: '600' }}>Rohan Mehta</td>
                            <td>Delhi</td>
                            <td>1</td>
                            <td>₹1,890</td>
                            <td><span className="dash-op-status shipped">Shipped</span></td>
                            <td>May 11</td>
                          </tr>
                          <tr>
                            <td style={{ color: '#6366f1', fontWeight: '600' }}>#ORD-4821</td>
                            <td style={{ color: '#fff', fontWeight: '600' }}>Priya Sharma</td>
                            <td>Mumbai</td>
                            <td>3</td>
                            <td>₹4,280</td>
                            <td><span className="dash-op-status pending">Pending</span></td>
                            <td>May 11</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Metric Card 1: Orders Today */}
          <div className="floating-card card-orders glass-panel">
            <div className="float-icon orders">
              <ShoppingCart size={14} />
            </div>
            <div className="float-title">Orders Today</div>
            <div className="float-value">
              <span>+247</span>
              <span className="float-trend trend-up">+18%</span>
            </div>
          </div>

          {/* Floating Metric Card 2: Revenue */}
          <div className="floating-card card-revenue glass-panel">
            <div className="float-icon revenue">
              <TrendingUp size={14} />
            </div>
            <div className="float-title">Revenue</div>
            <div className="float-value">
              <span>$48.2K</span>
              <span className="float-trend trend-up">+12.4%</span>
            </div>
          </div>

          {/* Floating Metric Card 3: Products */}
          <div className="floating-card card-products glass-panel">
            <div className="float-icon products">
              <Box size={14} />
            </div>
            <div className="float-title">Products</div>
            <div className="float-value">
              <span>1,247</span>
              <span className="float-trend" style={{ color: '#fbbf24' }}>Active</span>
            </div>
          </div>

          {/* Floating Metric Card 4: Inventory */}
          <div className="floating-card card-inventory glass-panel">
            <div className="float-icon inventory">
              <Database size={14} />
            </div>
            <div className="float-title">Inventory</div>
            <div className="float-value">
              <span>94%</span>
              <span className="float-trend trend-up" style={{ color: '#38bdf8' }}>In Stock</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
