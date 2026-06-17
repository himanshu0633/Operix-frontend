import Link from "next/link";
import "./ProductShowcase.css";

import {
  Check,
  ArrowRight,
  Search,
  Zap,
  Layers,
  Link as LinkIcon,
  BarChart3,
  Sparkles,
  Plus,
  ChevronDown,
  Mail,
  TrendingUp,
  Coins,
  Megaphone,
  Target,
  ShoppingCart,
  Package,
  Users,
  Database,
  UserCheck,
  Globe,
  Calculator,
  LineChart,
  FileText,
  HelpCircle,
  Bell,
  LayoutDashboard,
  Box,
  Trash2,
  Edit2,
} from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="section-padding" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="lp-container" style={{ display: 'flex', flexDirection: 'column', gap: '140px' }}>
        
        {/* ====================================================
            SECTION 1: PRODUCT MANAGEMENT
           ==================================================== */}
        <div id="product-management" className="feature-block">
          <div className="feature-text-side">
            <div className="badge showcase-badge-pm">
              <span className="badge-dot"></span>
              <span>Product Management</span>
            </div>
            <h2>Manage Products With Precision</h2>
            <p>
              Track inventory, suppliers, stock movement, pricing, purchasing, and product
              performance from one centralized workspace.
            </p>
            
            <div className="feature-checklist-col">
              <div className="feature-check-item">
                <span className="feature-check-icon">
                  <Check size={12} />
                </span>
                <span>Track stock movement and supplier lead times</span>
              </div>
              <div className="feature-check-item">
                <span className="feature-check-icon">
                  <Check size={12} />
                </span>
                <span>Manage variants, bundles, and pricing rules</span>
              </div>
              <div className="feature-check-item">
                <span className="feature-check-icon">
                  <Check size={12} />
                </span>
                <span>Purchase order automation and alerts</span>
              </div>
              <div className="feature-check-item">
                <span className="feature-check-icon">
                  <Check size={12} />
                </span>
                <span>Performance insights per SKU</span>
              </div>
            </div>

            <Link href="/admin/dashboard" className="btn-outline">
              <span>Explore Product Management</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="feature-visual-side">
            <div className="mock-dash-window">
              <div className="mock-dash-scaler">
                {/* Sidebar */}
                <aside className="mock-dash-sidebar">
                  <div>
                    <div className="mock-sidebar-logo">
                      <div className="mock-sidebar-logo-icon">
                        <span className="mock-sidebar-logo-dot"></span>
                        <span className="mock-sidebar-logo-dot"></span>
                        <span className="mock-sidebar-logo-dot"></span>
                        <span className="mock-sidebar-logo-dot"></span>
                      </div>
                      <span>BizOS</span>
                    </div>

                    <div className="mock-sidebar-group">
                      <div className="mock-sidebar-title">Core</div>
                      <div className="mock-sidebar-menu">
                        <div className="mock-sidebar-item">
                          <LayoutDashboard size={11} />
                          <span>Dashboard</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Package size={11} />
                          <span>Products</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <UserCheck size={11} />
                          <span>Supplier</span>
                        </div>
                        <div className="mock-sidebar-item active">
                          <Database size={11} />
                          <span>Inventory</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <ShoppingCart size={11} />
                          <span>Orders</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Users size={11} />
                          <span>Customers</span>
                        </div>
                      </div>
                    </div>

                    <div className="mock-sidebar-group">
                      <div className="mock-sidebar-title">Commerce</div>
                      <div className="mock-sidebar-menu">
                        <div className="mock-sidebar-item">
                          <Globe size={11} />
                          <span>Website</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Megaphone size={11} />
                          <span>Marketing</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Target size={11} />
                          <span>Campaigns</span>
                        </div>
                      </div>
                    </div>

                    <div className="mock-sidebar-group">
                      <div className="mock-sidebar-title">Operations</div>
                      <div className="mock-sidebar-menu">
                        <div className="mock-sidebar-item">
                          <Calculator size={11} />
                          <span>Accounting</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Layers size={11} />
                          <span>HRM</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <LineChart size={11} />
                          <span>Analytics</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <FileText size={11} />
                          <span>Reports</span>
                        </div>
                      </div>
                    </div>

                    <div className="mock-sidebar-group">
                      <div className="mock-sidebar-title">System</div>
                      <div className="mock-sidebar-menu">
                        <div className="mock-sidebar-item">
                          <Users size={11} />
                          <span>Team</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <HelpCircle size={11} />
                          <span>Support</span>
                        </div>
                      </div>
                    </div>

                    <div className="mock-sidebar-upgrade">
                      <div className="mock-upgrade-title">Upgrade to Pro</div>
                      <p className="mock-upgrade-desc">Unlock AI analytics, advanced reports, security & support.</p>
                      <button className="mock-upgrade-btn">Upgrade Plan</button>
                    </div>
                  </div>

                  <div className="mock-sidebar-profile">
                    <div className="mock-sidebar-avatar">G</div>
                    <div>
                      <div className="mock-profile-name">Gautam Shah</div>
                      <div className="mock-profile-email">gautam@enterprises.in</div>
                    </div>
                  </div>
                </aside>

                {/* Main Area */}
                <div className="mock-dash-main-area">
                  {/* Header */}
                  <div className="mock-dash-header">
                    <div className="mock-dash-switcher">
                      <span>Shah Enterprises</span>
                      <ChevronDown size={10} />
                    </div>
                    <div className="mock-dash-header-search">
                      <Search size={10} />
                      <span>Search products, orders, customers...</span>
                      <kbd className="mock-dash-search-kbd">⌘K</kbd>
                    </div>
                    <div className="mock-dash-header-actions">
                      <div className="mock-dash-header-icon-btn">
                        <Bell size={11} />
                      </div>
                      <button className="mock-dash-create-btn">
                        <Plus size={10} />
                        <span>Create</span>
                      </button>
                      <div className="mock-dash-header-btn ai">
                        <Sparkles size={10} />
                        <span>AI Assistant</span>
                      </div>
                      <div className="mock-dash-header-avatar-circle">
                        G
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Content */}
                  <div className="mock-dash-content-body">
                    {/* Welcome Row */}
                    <div className="mock-dash-welcome-row">
                      <div className="mock-dash-welcome">
                        <h3>Inventory</h3>
                        <p>Manage stock levels, product movement, and inventory health.</p>
                      </div>
                      <div className="mock-dash-welcome-buttons">
                        <button className="mock-dash-welcome-btn primary">
                          <Plus size={10} />
                          <span>Add Stock</span>
                        </button>
                        <button className="mock-dash-welcome-btn">
                          <span>Transfer Inventory</span>
                        </button>
                        <button className="mock-dash-welcome-btn">
                          <span>Export Report</span>
                        </button>
                        <button className="mock-dash-welcome-btn">
                          <span>Stock Adjustment</span>
                        </button>
                      </div>
                    </div>

                    {/* Metric widgets */}
                    <div className="mock-dash-widgets-grid">
                      <div className="mock-dash-stat-widget">
                        <div className="mock-dash-stat-widget-title">Total Products</div>
                        <div className="mock-dash-stat-widget-val">12</div>
                        <div className="mock-dash-stat-widget-sub">
                          <span className="mock-dash-stat-widget-trend trend-up">+2 this week</span>
                        </div>
                      </div>
                      
                      <div className="mock-dash-stat-widget">
                        <div className="mock-dash-stat-widget-title">Inventory Value</div>
                        <div className="mock-dash-stat-widget-val">₹66,68,000</div>
                        <div className="mock-dash-stat-widget-sub">
                          <span>Across warehouses</span>
                        </div>
                      </div>

                      <div className="mock-dash-stat-widget">
                        <div className="mock-dash-stat-widget-title">Low Stock Items</div>
                        <div className="mock-dash-stat-widget-val" style={{ color: '#fbbf24' }}>3</div>
                        <div className="mock-dash-stat-widget-sub">
                          <span style={{ color: '#fbbf24' }}>Need restocking</span>
                        </div>
                      </div>

                      <div className="mock-dash-stat-widget">
                        <div className="mock-dash-stat-widget-title">Out of Stock</div>
                        <div className="mock-dash-stat-widget-val" style={{ color: '#f87171' }}>2</div>
                        <div className="mock-dash-stat-widget-sub">
                          <span style={{ color: '#f87171' }}>Needs attention</span>
                        </div>
                      </div>

                      <div className="mock-dash-stat-widget">
                        <div className="mock-dash-stat-widget-title">Warehouse Utilization</div>
                        <div className="mock-dash-stat-widget-val">74%</div>
                        <div className="mock-dash-stat-widget-sub">
                          <span>Main + West</span>
                        </div>
                      </div>
                    </div>

                    {/* Filter bar */}
                    <div className="mock-dash-filter-row">
                      <div className="mock-dash-search-container">
                        <Search size={9} />
                        <span className="mock-dash-search-placeholder">Search inventory...</span>
                      </div>
                      <div className="mock-dash-dropdowns">
                        <div className="mock-dash-dropdown">
                          <span>All Categories</span>
                          <ChevronDown size={8} />
                        </div>
                        <div className="mock-dash-dropdown">
                          <span>All Warehouses</span>
                          <ChevronDown size={8} />
                        </div>
                        <div className="mock-dash-dropdown">
                          <span>All Statuses</span>
                          <ChevronDown size={8} />
                        </div>
                        <span className="mock-dash-items-count">12 items</span>
                      </div>
                    </div>

                    {/* Table */}
                    <div className="mock-dash-table-wrapper">
                      <table className="mock-dash-table">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>SKU</th>
                            <th>Category</th>
                            <th>Warehouse</th>
                            <th>Available</th>
                            <th>Reserved</th>
                            <th>Unit</th>
                            <th>Value</th>
                            <th>Last Restocked</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="product-cell">Banaras Silk Saree</td>
                            <td>003-9062</td>
                            <td>Textiles</td>
                            <td>Main Warehouse</td>
                            <td>142</td>
                            <td>10</td>
                            <td>Piece</td>
                            <td>₹20,40,000</td>
                            <td>22 ago</td>
                            <td><span className="status-badge in-stock">In Stock</span></td>
                          </tr>
                          <tr>
                            <td className="product-cell">Kashmiri Pashmina Shawl</td>
                            <td>KPS-8834</td>
                            <td>Textiles</td>
                            <td>Main Warehouse</td>
                            <td>28</td>
                            <td>5</td>
                            <td>Piece</td>
                            <td>₹8,40,000</td>
                            <td>5d ago</td>
                            <td><span className="status-badge low-stock">Low Stock</span></td>
                          </tr>
                          <tr>
                            <td className="product-cell">Organic Turmeric Powder</td>
                            <td>OTP-9050</td>
                            <td>Spices</td>
                            <td>Cold Storage</td>
                            <td>0</td>
                            <td>0</td>
                            <td>Kg</td>
                            <td>₹0</td>
                            <td>18d ago</td>
                            <td><span className="status-badge out-of-stock">Out of Stock</span></td>
                          </tr>
                          <tr>
                            <td className="product-cell">Premium Basmati Rice</td>
                            <td>PBR-9013</td>
                            <td>Food</td>
                            <td>Main Warehouse</td>
                            <td>520</td>
                            <td>40</td>
                            <td>Kg</td>
                            <td>₹1,80,000</td>
                            <td>9 ago</td>
                            <td><span className="status-badge overstocked">Overstocked</span></td>
                          </tr>
                          <tr>
                            <td className="product-cell">Stainless Steel Kadhai</td>
                            <td>SSK-9005</td>
                            <td>Kitchen</td>
                            <td>West Warehouse</td>
                            <td>94</td>
                            <td>12</td>
                            <td>Piece</td>
                            <td>₹2,12,000</td>
                            <td>2 ago</td>
                            <td><span className="status-badge in-stock">In Stock</span></td>
                          </tr>
                          <tr>
                            <td className="product-cell">Handmade Pottery Set</td>
                            <td>HPS-4102</td>
                            <td>Handicrafts</td>
                            <td>Main Warehouse</td>
                            <td>12</td>
                            <td>3</td>
                            <td>Set</td>
                            <td>₹72,000</td>
                            <td>15d ago</td>
                            <td><span className="status-badge low-stock">Low Stock</span></td>
                          </tr>
                          <tr>
                            <td className="product-cell">Leather Wallet Set</td>
                            <td>LWS-5113</td>
                            <td>Accessories</td>
                            <td>Main Warehouse</td>
                            <td>65</td>
                            <td>8</td>
                            <td>Piece</td>
                            <td>₹3,40,000</td>
                            <td>3d ago</td>
                            <td><span className="status-badge in-stock">In Stock</span></td>
                          </tr>
                          <tr>
                            <td className="product-cell">Coconut Oil Premium 500ml</td>
                            <td>COP-5120</td>
                            <td>Health</td>
                            <td>Cold Storage</td>
                            <td>240</td>
                            <td>20</td>
                            <td>Bottle</td>
                            <td>₹2,04,000</td>
                            <td>4 ago</td>
                            <td><span className="status-badge in-stock">In Stock</span></td>
                          </tr>
                          <tr>
                            <td className="product-cell">Wooden Carved Frame</td>
                            <td>WCF-8135</td>
                            <td>Decor</td>
                            <td>West Warehouse</td>
                            <td>0</td>
                            <td>0</td>
                            <td>Piece</td>
                            <td>₹0</td>
                            <td>30d ago</td>
                            <td><span className="status-badge out-of-stock">Out of Stock</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
            SECTION 2: WEBSITE BUILDER
           ==================================================== */}
        <div id="website-builder" className="feature-block row-reverse">
          <div className="feature-text-side" style={{ paddingLeft: '20px' }}>
            <div className="badge showcase-badge-wb">
              <span className="badge-dot" style={{ backgroundColor: '#2dd4bf', boxShadow: '0 0 8px #2dd4bf' }}></span>
              <span>Website Builder</span>
            </div>
            <h2>Launch Your Store In Minutes</h2>
            <p>
              Generate websites with AI, connect products instantly, customize layouts visually,
              and publish without technical expertise.
            </p>

            <div className="features-2x2-grid">
              <div className="feature-block-card">
                <span className="feature-card-icon">
                  <Zap size={18} />
                </span>
                <span className="feature-card-text">AI website generation in minutes</span>
              </div>
              <div className="feature-block-card">
                <span className="feature-card-icon">
                  <Layers size={18} />
                </span>
                <span className="feature-card-text">Visual drag-and-drop editor</span>
              </div>
              <div className="feature-block-card">
                <span className="feature-card-icon">
                  <LinkIcon size={18} />
                </span>
                <span className="feature-card-text">Connect products instantly</span>
              </div>
              <div className="feature-block-card">
                <span className="feature-card-icon">
                  <BarChart3 size={18} />
                </span>
                <span className="feature-card-text">Built-in conversion analytics</span>
              </div>
            </div>

            <Link href="/admin/dashboard" className="btn-outline">
              <span>Explore Website Builder</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="feature-visual-side">
            <div className="mock-dash-window">
              <div className="mock-dash-scaler">
                {/* Sidebar */}
                <aside className="mock-dash-sidebar">
                  <div>
                    <div className="mock-sidebar-logo">
                      <div className="mock-sidebar-logo-icon">
                        <span className="mock-sidebar-logo-dot"></span>
                        <span className="mock-sidebar-logo-dot"></span>
                        <span className="mock-sidebar-logo-dot"></span>
                        <span className="mock-sidebar-logo-dot"></span>
                      </div>
                      <span>BizOS</span>
                    </div>

                    <div className="mock-sidebar-group">
                      <div className="mock-sidebar-title">Core</div>
                      <div className="mock-sidebar-menu">
                        <div className="mock-sidebar-item">
                          <LayoutDashboard size={11} />
                          <span>Dashboard</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Package size={11} />
                          <span>Products</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <UserCheck size={11} />
                          <span>Supplier</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Database size={11} />
                          <span>Inventory</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <ShoppingCart size={11} />
                          <span>Orders</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Users size={11} />
                          <span>Customers</span>
                        </div>
                      </div>
                    </div>

                    <div className="mock-sidebar-group">
                      <div className="mock-sidebar-title">Commerce</div>
                      <div className="mock-sidebar-menu">
                        <div className="mock-sidebar-item active">
                          <Globe size={11} />
                          <span>Website</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Megaphone size={11} />
                          <span>Marketing</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Target size={11} />
                          <span>Campaigns</span>
                        </div>
                      </div>
                    </div>

                    <div className="mock-sidebar-group">
                      <div className="mock-sidebar-title">Operations</div>
                      <div className="mock-sidebar-menu">
                        <div className="mock-sidebar-item">
                          <Calculator size={11} />
                          <span>Accounting</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Layers size={11} />
                          <span>HRM</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <LineChart size={11} />
                          <span>Analytics</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <FileText size={11} />
                          <span>Reports</span>
                        </div>
                      </div>
                    </div>

                    <div className="mock-sidebar-group">
                      <div className="mock-sidebar-title">System</div>
                      <div className="mock-sidebar-menu">
                        <div className="mock-sidebar-item">
                          <Users size={11} />
                          <span>Team</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <HelpCircle size={11} />
                          <span>Support</span>
                        </div>
                      </div>
                    </div>

                    <div className="mock-sidebar-upgrade">
                      <div className="mock-upgrade-title">Upgrade to Pro</div>
                      <p className="mock-upgrade-desc">Unlock AI analytics, advanced reports, security & support.</p>
                      <button className="mock-upgrade-btn">Upgrade Plan</button>
                    </div>
                  </div>

                  <div className="mock-sidebar-profile">
                    <div className="mock-sidebar-avatar">G</div>
                    <div>
                      <div className="mock-profile-name">Gautam Shah</div>
                      <div className="mock-profile-email">gautam@enterprises.in</div>
                    </div>
                  </div>
                </aside>

                {/* Main Area */}
                <div className="mock-dash-main-area">
                  {/* Header */}
                  <div className="mock-dash-header">
                    <div className="mock-dash-switcher">
                      <span>Shah Enterprises</span>
                      <ChevronDown size={10} />
                    </div>
                    <div className="mock-dash-header-search">
                      <Search size={10} />
                      <span>Search products, orders, customers...</span>
                      <kbd className="mock-dash-search-kbd">⌘K</kbd>
                    </div>
                    <div className="mock-dash-header-actions">
                      <div className="mock-dash-header-icon-btn">
                        <Bell size={11} />
                      </div>
                      <button className="mock-dash-create-btn">
                        <Plus size={10} />
                        <span>Create</span>
                      </button>
                      <div className="mock-dash-header-btn ai">
                        <Sparkles size={10} />
                        <span>AI Assistant</span>
                      </div>
                      <div className="mock-dash-header-avatar-circle">
                        G
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Content */}
                  <div className="mock-dash-content-body" style={{ gap: '8px', padding: '10px 14px' }}>
                    {/* Breadcrumb row */}
                    <div className="mock-wb-breadcrumb">
                      <div className="mock-wb-breadcrumb-left">
                        <span>&lt; Back</span>
                        <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                        <span className="active">Create Website</span>
                      </div>
                      <span>Step 2 of 6</span>
                    </div>

                    {/* Stepper row */}
                    <div className="mock-wb-stepper">
                      <div className="mock-wb-step completed">
                        <div className="mock-wb-step-node"><Check size={8} /></div>
                        <span className="mock-wb-step-label">Business Setup</span>
                      </div>
                      <div className="mock-wb-step active">
                        <div className="mock-wb-step-node">2</div>
                        <span className="mock-wb-step-label">Choose Template</span>
                      </div>
                      <div className="mock-wb-step">
                        <div className="mock-wb-step-node">3</div>
                        <span className="mock-wb-step-label">Connect Products</span>
                      </div>
                      <div className="mock-wb-step">
                        <div className="mock-wb-step-node">4</div>
                        <span className="mock-wb-step-label">Customization</span>
                      </div>
                      <div className="mock-wb-step">
                        <div className="mock-wb-step-node">5</div>
                        <span className="mock-wb-step-label">Domain &amp; Branding</span>
                      </div>
                      <div className="mock-wb-step">
                        <div className="mock-wb-step-node">6</div>
                        <span className="mock-wb-step-label">Publish</span>
                      </div>
                    </div>

                    {/* Choose a template title */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', textAlign: 'left' }}>
                      <h4 style={{ fontSize: '11px', fontWeight: '700', color: '#fff' }}>Choose a Template</h4>
                      <p style={{ fontSize: '8px', color: 'var(--lp-text-muted)' }}>Pick a template to start with. You can customize it later.</p>
                    </div>

                    {/* AI recommended banner */}
                    <div className="mock-wb-ai-banner">
                      <Sparkles size={10} />
                      <span>AI Recommended: Lumina — best fit for your industry</span>
                    </div>

                    {/* Templates grid (8 templates, 4 columns, 2 rows) */}
                    <div className="mock-wb-templates-grid">
                      {/* Template 1: Lumina */}
                      <div className="mock-wb-template-card active">
                        <div className="mock-wb-temp-preview lumina">
                          <div className="mock-wb-temp-preview-header"></div>
                          <div className="mock-wb-temp-preview-body">
                            <div className="mock-wb-temp-preview-left"></div>
                            <div className="mock-wb-temp-preview-right"></div>
                          </div>
                          <span className="mock-wb-temp-dot" style={{ backgroundColor: '#6366f1' }}></span>
                        </div>
                        <div className="mock-wb-temp-meta">
                          <span className="mock-wb-temp-title">Lumina</span>
                          <span className="mock-wb-temp-badge">Fashion</span>
                        </div>
                        <span className="mock-wb-temp-desc">Responsive, AI-Optimized</span>
                      </div>

                      {/* Template 2: Nexus */}
                      <div className="mock-wb-template-card">
                        <div className="mock-wb-temp-preview nexus">
                          <div className="mock-wb-temp-preview-header"></div>
                          <div className="mock-wb-temp-preview-body">
                            <div className="mock-wb-temp-preview-left" style={{ flex: 1 }}></div>
                            <div className="mock-wb-temp-preview-right" style={{ flex: 1.5 }}></div>
                          </div>
                          <span className="mock-wb-temp-dot" style={{ backgroundColor: '#38bdf8' }}></span>
                        </div>
                        <div className="mock-wb-temp-meta">
                          <span className="mock-wb-temp-title">Nexus</span>
                          <span className="mock-wb-temp-badge">Electronics</span>
                        </div>
                        <span className="mock-wb-temp-desc">Responsive, AI-Optimized</span>
                      </div>

                      {/* Template 3: Varda */}
                      <div className="mock-wb-template-card">
                        <div className="mock-wb-temp-preview varda">
                          <div className="mock-wb-temp-preview-header"></div>
                          <div className="mock-wb-temp-preview-body">
                            <div className="mock-wb-temp-preview-left"></div>
                            <div className="mock-wb-temp-preview-right"></div>
                          </div>
                          <span className="mock-wb-temp-dot" style={{ backgroundColor: '#10b981' }}></span>
                        </div>
                        <div className="mock-wb-temp-meta">
                          <span className="mock-wb-temp-title">Varda</span>
                          <span className="mock-wb-temp-badge">Grocery</span>
                        </div>
                        <span className="mock-wb-temp-desc">Responsive, AI-Optimized</span>
                      </div>

                      {/* Template 4: Aria */}
                      <div className="mock-wb-template-card">
                        <div className="mock-wb-temp-preview aria">
                          <div className="mock-wb-temp-preview-header"></div>
                          <div className="mock-wb-temp-preview-body">
                            <div className="mock-wb-temp-preview-left"></div>
                            <div className="mock-wb-temp-preview-right"></div>
                          </div>
                          <span className="mock-wb-temp-dot" style={{ backgroundColor: '#a855f7' }}></span>
                        </div>
                        <div className="mock-wb-temp-meta">
                          <span className="mock-wb-temp-title">Aria</span>
                          <span className="mock-wb-temp-badge">Beauty</span>
                        </div>
                        <span className="mock-wb-temp-desc">Responsive, AI-Optimized</span>
                      </div>

                      {/* Template 5: Solis */}
                      <div className="mock-wb-template-card">
                        <div className="mock-wb-temp-preview solis">
                          <div className="mock-wb-temp-preview-header"></div>
                          <div className="mock-wb-temp-preview-body">
                            <div className="mock-wb-temp-preview-left" style={{ height: '8px' }}></div>
                            <div className="mock-wb-temp-preview-right" style={{ height: '8px' }}></div>
                          </div>
                          <span className="mock-wb-temp-dot" style={{ backgroundColor: '#fbbf24' }}></span>
                        </div>
                        <div className="mock-wb-temp-meta">
                          <span className="mock-wb-temp-title">Solis</span>
                          <span className="mock-wb-temp-badge">Home Decor</span>
                        </div>
                        <span className="mock-wb-temp-desc">Responsive, AI-Optimized</span>
                      </div>

                      {/* Template 6: Apex */}
                      <div className="mock-wb-template-card">
                        <div className="mock-wb-temp-preview apex">
                          <div className="mock-wb-temp-preview-header"></div>
                          <div className="mock-wb-temp-preview-body">
                            <div className="mock-wb-temp-preview-left"></div>
                            <div className="mock-wb-temp-preview-right"></div>
                          </div>
                          <span className="mock-wb-temp-dot" style={{ backgroundColor: '#f87171' }}></span>
                        </div>
                        <div className="mock-wb-temp-meta">
                          <span className="mock-wb-temp-title">Apex</span>
                          <span className="mock-wb-temp-badge">Fitness</span>
                        </div>
                        <span className="mock-wb-temp-desc">Responsive, AI-Optimized</span>
                      </div>

                      {/* Template 7: Nova */}
                      <div className="mock-wb-template-card">
                        <div className="mock-wb-temp-preview nova">
                          <div className="mock-wb-temp-preview-header"></div>
                          <div className="mock-wb-temp-preview-body">
                            <div className="mock-wb-temp-preview-left" style={{ flex: 1.2 }}></div>
                            <div className="mock-wb-temp-preview-right" style={{ flex: 1.2 }}></div>
                          </div>
                          <span className="mock-wb-temp-dot" style={{ backgroundColor: '#94a3b8' }}></span>
                        </div>
                        <div className="mock-wb-temp-meta">
                          <span className="mock-wb-temp-title">Nova</span>
                          <span className="mock-wb-temp-badge">Services</span>
                        </div>
                        <span className="mock-wb-temp-desc">Responsive, AI-Optimized</span>
                      </div>

                      {/* Template 8: Terra */}
                      <div className="mock-wb-template-card">
                        <div className="mock-wb-temp-preview terra">
                          <div className="mock-wb-temp-preview-header"></div>
                          <div className="mock-wb-temp-preview-body">
                            <div className="mock-wb-temp-preview-left"></div>
                            <div className="mock-wb-temp-preview-right"></div>
                          </div>
                          <span className="mock-wb-temp-dot" style={{ backgroundColor: '#eab308' }}></span>
                        </div>
                        <div className="mock-wb-temp-meta">
                          <span className="mock-wb-temp-title">Terra</span>
                          <span className="mock-wb-temp-badge">Food &amp; Drink</span>
                        </div>
                        <span className="mock-wb-temp-desc">Responsive, AI-Optimized</span>
                      </div>
                    </div>

                    {/* Footer Row */}
                    <div className="mock-wb-footer">
                      <div className="mock-wb-footer-btn">&lt; Back</div>
                      <div className="mock-wb-footer-btn primary">
                        <span>Next Step</span>
                        <ArrowRight size={10} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
            SECTION 3: MARKETING & CAMPAIGNS
           ==================================================== */}
        <div id="marketing-campaigns" style={{ textAlign: 'center' }}>
          <div className="section-header">
            <div className="badge showcase-badge-mc">
              <span className="badge-dot"></span>
              <span>Marketing & Campaigns</span>
            </div>
            <h2>Promote Products Smarter</h2>
            <p>
              Create AI-powered marketing content, launch campaigns, manage creatives, and track
              performance without marketing complexity.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '40px' }}>
            {/* Left Column Stat Cards */}
            <div className="marketing-stat-col">
              <div className="stat-card">
                <div className="stat-card-top-row">
                  <div className="stat-card-icon mkt-studio">
                    <Megaphone size={16} />
                  </div>
                  <h4>Marketing Studio</h4>
                </div>
                <p>AI-generated content across email, social, and paid channels.</p>
                <div className="stat-card-metric-row">
                  <span className="stat-card-metric highlight-purple">3.4x</span>
                  <span className="stat-card-metric-label">avg engagement</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-card-top-row">
                  <div className="stat-card-icon mkt-manager">
                    <Target size={16} />
                  </div>
                  <h4>Campaign Manager</h4>
                </div>
                <p>Launch and track campaigns with real-time ROI reporting.</p>
                <div className="stat-card-metric-row">
                  <span className="stat-card-metric highlight-green">68%</span>
                  <span className="stat-card-metric-label">cost reduction</span>
                </div>
              </div>
            </div>

            {/* Center Visual: Marketing Dashboard Mockup */}
            <div className="marketing-center-visual">
              <div className="mock-dash-window">
                <div className="mock-dash-scaler">
                  {/* Sidebar */}
                  <aside className="mock-dash-sidebar">
                    <div>
                      <div className="mock-sidebar-logo">
                        <div className="mock-sidebar-logo-icon">
                          <span className="mock-sidebar-logo-dot"></span>
                          <span className="mock-sidebar-logo-dot"></span>
                          <span className="mock-sidebar-logo-dot"></span>
                          <span className="mock-sidebar-logo-dot"></span>
                        </div>
                        <span>BizOS</span>
                      </div>

                      <div className="mock-sidebar-group">
                        <div className="mock-sidebar-title">Core</div>
                        <div className="mock-sidebar-menu">
                          <div className="mock-sidebar-item">
                            <LayoutDashboard size={11} />
                            <span>Dashboard</span>
                          </div>
                          <div className="mock-sidebar-item">
                            <Package size={11} />
                            <span>Products</span>
                          </div>
                          <div className="mock-sidebar-item">
                            <UserCheck size={11} />
                            <span>Supplier</span>
                          </div>
                          <div className="mock-sidebar-item">
                            <Database size={11} />
                            <span>Inventory</span>
                          </div>
                          <div className="mock-sidebar-item">
                            <ShoppingCart size={11} />
                            <span>Orders</span>
                          </div>
                          <div className="mock-sidebar-item">
                            <Users size={11} />
                            <span>Customers</span>
                          </div>
                        </div>
                      </div>

                      <div className="mock-sidebar-group">
                        <div className="mock-sidebar-title">Commerce</div>
                        <div className="mock-sidebar-menu">
                          <div className="mock-sidebar-item">
                            <Globe size={11} />
                            <span>Website</span>
                          </div>
                          <div className="mock-sidebar-item active">
                            <Megaphone size={11} />
                            <span>Marketing</span>
                          </div>
                          <div className="mock-sidebar-item">
                            <Target size={11} />
                            <span>Campaigns</span>
                          </div>
                        </div>
                      </div>

                      <div className="mock-sidebar-group">
                        <div className="mock-sidebar-title">Operations</div>
                        <div className="mock-sidebar-menu">
                          <div className="mock-sidebar-item">
                            <Calculator size={11} />
                            <span>Accounting</span>
                          </div>
                          <div className="mock-sidebar-item">
                            <Layers size={11} />
                            <span>HRM</span>
                          </div>
                          <div className="mock-sidebar-item">
                            <LineChart size={11} />
                            <span>Analytics</span>
                          </div>
                          <div className="mock-sidebar-item">
                            <FileText size={11} />
                            <span>Reports</span>
                          </div>
                        </div>
                      </div>

                      <div className="mock-sidebar-group">
                        <div className="mock-sidebar-title">System</div>
                        <div className="mock-sidebar-menu">
                          <div className="mock-sidebar-item">
                            <Users size={11} />
                            <span>Team</span>
                          </div>
                          <div className="mock-sidebar-item">
                            <HelpCircle size={11} />
                            <span>Support</span>
                          </div>
                        </div>
                      </div>

                      <div className="mock-sidebar-upgrade">
                        <div className="mock-upgrade-title">Upgrade to Pro</div>
                        <p className="mock-upgrade-desc">Unlock AI analytics, advanced reports, security & support.</p>
                        <button className="mock-upgrade-btn">Upgrade Plan</button>
                      </div>
                    </div>

                    <div className="mock-sidebar-profile">
                      <div className="mock-sidebar-avatar">G</div>
                      <div>
                        <div className="mock-profile-name">Gautam Shah</div>
                        <div className="mock-profile-email">gautam@enterprises.in</div>
                      </div>
                    </div>
                  </aside>

                  {/* Main Area */}
                  <div className="mock-dash-main-area">
                    {/* Header */}
                    <div className="mock-dash-header">
                      <div className="mock-dash-switcher">
                        <span>Shah Enterprises</span>
                        <ChevronDown size={10} />
                      </div>
                      <div className="mock-dash-header-search">
                        <Search size={10} />
                        <span>Search products, orders, customers...</span>
                        <kbd className="mock-dash-search-kbd">⌘K</kbd>
                      </div>
                      <div className="mock-dash-header-actions">
                        <div className="mock-dash-header-icon-btn">
                          <Bell size={11} />
                        </div>
                        <button className="mock-dash-create-btn">
                          <Plus size={10} />
                          <span>Create</span>
                        </button>
                        <div className="mock-dash-header-btn ai">
                          <Sparkles size={10} />
                          <span>AI Assistant</span>
                        </div>
                        <div className="mock-dash-header-avatar-circle">
                          G
                        </div>
                      </div>
                    </div>

                    {/* Scrollable Content */}
                    <div className="mock-dash-content-body" style={{ gap: '8px', padding: '10px 14px' }}>
                      {/* Welcome Row */}
                      <div className="mock-dash-welcome-row">
                        <div className="mock-dash-welcome">
                          <h3>Marketing Studio</h3>
                          <p>Create marketing content, personalized creatives, and product campaigns in minutes.</p>
                        </div>
                        <div className="mock-dash-welcome-buttons">
                          <button className="mock-dash-welcome-btn">
                            <span>Create Content</span>
                          </button>
                          <button className="mock-dash-welcome-btn primary">
                            <Sparkles size={10} />
                            <span>Generate With AI</span>
                          </button>
                        </div>
                      </div>

                      {/* Sparkline Metrics Row (5 widgets) */}
                      <div className="mock-dash-widgets-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
                        <div className="mock-dash-stat-widget">
                          <div className="mock-dash-stat-widget-title">Marketing Assets</div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '2px' }}>
                            <div>
                              <div className="mock-dash-stat-widget-val">84</div>
                              <span className="mock-dash-stat-widget-sub" style={{ color: 'var(--lp-success)' }}>+12</span>
                            </div>
                            <div className="mock-mkt-sparkline">
                              <svg viewBox="0 0 50 15" width="45" height="15">
                                <path d="M0,12 Q10,5 20,8 T40,3 T50,2" fill="none" stroke="#10b981" strokeWidth="1.5" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="mock-dash-stat-widget">
                          <div className="mock-dash-stat-widget-title">Scheduled / Active</div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '2px' }}>
                            <div>
                              <div className="mock-dash-stat-widget-val">6</div>
                              <span className="mock-dash-stat-widget-sub" style={{ color: '#f87171' }}>-2</span>
                            </div>
                            <div className="mock-mkt-sparkline">
                              <svg viewBox="0 0 50 15" width="45" height="15">
                                <path d="M0,3 Q10,12 20,8 T40,11 T50,13" fill="none" stroke="#f87171" strokeWidth="1.5" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="mock-dash-stat-widget">
                          <div className="mock-dash-stat-widget-title">Published Promos</div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '2px' }}>
                            <div>
                              <div className="mock-dash-stat-widget-val">31</div>
                              <span className="mock-dash-stat-widget-sub" style={{ color: 'var(--lp-success)' }}>+5</span>
                            </div>
                            <div className="mock-mkt-sparkline">
                              <svg viewBox="0 0 50 15" width="45" height="15">
                                <path d="M0,13 Q12,12 25,6 T40,3 T50,1" fill="none" stroke="#10b981" strokeWidth="1.5" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="mock-dash-stat-widget">
                          <div className="mock-dash-stat-widget-title">Total Reach</div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '2px' }}>
                            <div>
                              <div className="mock-dash-stat-widget-val">2.4L</div>
                              <span className="mock-dash-stat-widget-sub" style={{ color: 'var(--lp-success)' }}>+18%</span>
                            </div>
                            <div className="mock-mkt-sparkline">
                              <svg viewBox="0 0 50 15" width="45" height="15">
                                <path d="M0,10 Q10,12 20,6 T40,4 T50,2" fill="none" stroke="#10b981" strokeWidth="1.5" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="mock-dash-stat-widget">
                          <div className="mock-dash-stat-widget-title">Campaign Revenue</div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '2px' }}>
                            <div>
                              <div className="mock-dash-stat-widget-val">₹8.2L</div>
                              <span className="mock-dash-stat-widget-sub" style={{ color: 'var(--lp-success)' }}>+9%</span>
                            </div>
                            <div className="mock-mkt-sparkline">
                              <svg viewBox="0 0 50 15" width="45" height="15">
                                <path d="M0,12 Q15,10 25,5 T40,4 T50,2" fill="none" stroke="#10b981" strokeWidth="1.5" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product Selector and AI Panel Row */}
                      <div className="mock-mkt-grid-2col">
                        {/* Choose Product side */}
                        <div className="mock-mkt-panel">
                          <div className="mock-mkt-panel-title">Choose Product To Promote</div>
                          <span className="mock-mkt-panel-subtitle">Select a product and instantly generate marketing content.</span>
                          
                          <div className="mock-mkt-search-wrapper">
                            <Search size={9} />
                            <span>Search products...</span>
                          </div>

                          <div className="mock-mkt-product-list">
                            <div className="mock-mkt-product-item">
                              <div className="mock-mkt-prod-bullet"></div>
                              <div className="mock-mkt-prod-info">
                                <span className="mock-mkt-prod-name">Premium Cotton Kurta</span>
                                <span className="mock-mkt-prod-details">₹1,200 | 45 In Stock</span>
                              </div>
                            </div>

                            <div className="mock-mkt-product-item active">
                              <div className="mock-mkt-prod-bullet active"></div>
                              <div className="mock-mkt-prod-info">
                                <span className="mock-mkt-prod-name">Silk Saree — Banaras</span>
                                <span className="mock-mkt-prod-details">₹20,400 | 142 In Stock</span>
                              </div>
                            </div>

                            <div className="mock-mkt-product-item">
                              <div className="mock-mkt-prod-bullet"></div>
                              <div className="mock-mkt-prod-info">
                                <span className="mock-mkt-prod-name">Embroidered Dupatta</span>
                                <span className="mock-mkt-prod-details">₹680 | 12 Low Stock</span>
                              </div>
                            </div>

                            <div className="mock-mkt-product-item">
                              <div className="mock-mkt-prod-bullet"></div>
                              <div className="mock-mkt-prod-info">
                                <span className="mock-mkt-prod-name">Heritage Bedsheet</span>
                                <span className="mock-mkt-prod-details">₹2,850 | 85 In Stock</span>
                              </div>
                            </div>

                            <div className="mock-mkt-product-item">
                              <div className="mock-mkt-prod-bullet"></div>
                              <div className="mock-mkt-prod-info">
                                <span className="mock-mkt-prod-name">Cotton Short Set</span>
                                <span className="mock-mkt-prod-details">₹1,450 | 95 In Stock</span>
                              </div>
                            </div>
                          </div>

                          <button className="mock-mkt-action-btn">Promote Product</button>
                        </div>

                        {/* AI Content Generator side */}
                        <div className="mock-mkt-panel">
                          <div className="mock-mkt-panel-title">AI Content Generator</div>
                          <span className="mock-mkt-panel-subtitle">Generate creatives, captions, hashtags, and more instantly.</span>

                          <div className="mock-mkt-form">
                            <div className="mock-mkt-form-field">
                              <label>Campaign Goal</label>
                              <div className="mock-mkt-input"></div>
                            </div>
                            <div className="mock-mkt-form-field">
                              <label>Tone</label>
                              <div className="mock-mkt-input"></div>
                            </div>
                            <div className="mock-mkt-form-field">
                              <label>Target Audience</label>
                              <div className="mock-mkt-input"></div>
                            </div>
                          </div>

                          <button className="mock-mkt-action-btn primary">
                            <Sparkles size={9} />
                            <span>Generate Content</span>
                          </button>
                        </div>
                      </div>

                      {/* Content Library & Suggestions Bottom Row */}
                      <div className="mock-mkt-bottom-layout">
                        {/* Content Library Table (wider) */}
                        <div className="mock-mkt-panel" style={{ flex: 2.2 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                            <div className="mock-mkt-panel-title">Content Library</div>
                            <button className="mock-mkt-mini-btn">+ New Asset</button>
                          </div>
                          
                          <div className="mock-dash-table-wrapper">
                            <table className="mock-dash-table">
                              <thead>
                                <tr>
                                  <th>Asset Name</th>
                                  <th>Type</th>
                                  <th>Product</th>
                                  <th>Created By</th>
                                  <th>Date</th>
                                  <th>Status</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="product-cell">Summer Sale Instagram Post</td>
                                  <td>Image</td>
                                  <td>Premium Kurta</td>
                                  <td style={{ color: '#818cf8', fontWeight: '500' }}>AI Generated</td>
                                  <td>2026-06-15</td>
                                  <td><span className="status-badge in-stock">Published</span></td>
                                  <td>
                                    <div style={{ display: 'flex', gap: '6px', color: 'var(--lp-text-muted)' }}>
                                      <Edit2 size={9} />
                                      <Trash2 size={9} />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="product-cell">Festival Campaign Caption</td>
                                  <td>Text</td>
                                  <td>Silk Saree</td>
                                  <td style={{ color: '#818cf8', fontWeight: '500' }}>AI Generated</td>
                                  <td>2026-06-15</td>
                                  <td><span className="status-badge low-stock" style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--lp-text-secondary)' }}>Draft</span></td>
                                  <td>
                                    <div style={{ display: 'flex', gap: '6px', color: 'var(--lp-text-muted)' }}>
                                      <Edit2 size={9} />
                                      <Trash2 size={9} />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="product-cell">Product Launch Banner</td>
                                  <td>Image</td>
                                  <td>Heritage Bedsheet</td>
                                  <td>Manual Upload</td>
                                  <td>2026-06-12</td>
                                  <td><span className="status-badge overstocked" style={{ background: 'rgba(56,189,248,0.1)', color: '#38bdf8' }}>Scheduled</span></td>
                                  <td>
                                    <div style={{ display: 'flex', gap: '6px', color: 'var(--lp-text-muted)' }}>
                                      <Edit2 size={9} />
                                      <Trash2 size={9} />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="product-cell">Clearance Sale Email Copy</td>
                                  <td>Text</td>
                                  <td>Embroidered Dupatta</td>
                                  <td style={{ color: '#818cf8', fontWeight: '500' }}>AI Generated</td>
                                  <td>2026-06-12</td>
                                  <td><span className="status-badge in-stock">Published</span></td>
                                  <td>
                                    <div style={{ display: 'flex', gap: '6px', color: 'var(--lp-text-muted)' }}>
                                      <Edit2 size={9} />
                                      <Trash2 size={9} />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="product-cell">WhatsApp Promo Creative</td>
                                  <td>Image</td>
                                  <td>Cotton Short Set</td>
                                  <td>Template</td>
                                  <td>2026-06-07</td>
                                  <td><span className="status-badge low-stock" style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--lp-text-secondary)' }}>Draft</span></td>
                                  <td>
                                    <div style={{ display: 'flex', gap: '6px', color: 'var(--lp-text-muted)' }}>
                                      <Edit2 size={9} />
                                      <Trash2 size={9} />
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Keyword & Publishing Queue Column (narrower) */}
                        <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {/* Keyword Suggestions */}
                          <div className="mock-mkt-panel" style={{ padding: '8px' }}>
                            <div className="mock-mkt-panel-title" style={{ marginBottom: '4px' }}>Keyword Suggestions</div>
                            <span className="mock-mkt-panel-subtitle" style={{ marginBottom: '6px' }}>AI-recommended marketing keywords for your products.</span>
                            
                            <div className="mock-mkt-keyword-cloud">
                              <span className="mock-mkt-keyword">cotton kurta for men</span>
                              <span className="mock-mkt-keyword">silk saree banarasi</span>
                              <span className="mock-mkt-keyword">handloom bedsheets online</span>
                              <span className="mock-mkt-keyword">festival ethnic wear sale</span>
                            </div>
                          </div>

                          {/* Publishing Queue */}
                          <div className="mock-mkt-panel" style={{ padding: '8px' }}>
                            <div className="mock-mkt-panel-title" style={{ marginBottom: '4px' }}>Publishing Queue</div>
                            
                            <div className="mock-mkt-queue-list">
                              <div className="mock-mkt-queue-item">
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                  <span className="mock-mkt-queue-channel">Instagram</span>
                                  <span className="mock-mkt-queue-time">2 hrs ago</span>
                                </div>
                                <span className="mock-mkt-queue-status published">Published</span>
                              </div>
                              <div className="mock-mkt-queue-item">
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                  <span className="mock-mkt-queue-channel">Facebook</span>
                                  <span className="mock-mkt-queue-time">Tomorrow, 10:00 AM</span>
                                </div>
                                <span className="mock-mkt-queue-status scheduled">Scheduled</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Stat Cards */}
            <div className="marketing-stat-col">
              <div className="stat-card">
                <div className="stat-card-top-row">
                  <div className="stat-card-icon analytics">
                    <BarChart3 size={16} />
                  </div>
                  <h4>Performance Analytics</h4>
                </div>
                <p>Deep funnel analytics from impression to purchase.</p>
                <div className="stat-card-metric-row">
                  <span className="stat-card-metric highlight-gold">2.1x</span>
                  <span className="stat-card-metric-label">conversion lift</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-card-top-row">
                  <div className="stat-card-icon email">
                    <Mail size={16} />
                  </div>
                  <h4>AI Email Draft</h4>
                </div>
                <div className="email-mock-lines" style={{ margin: '8px 0 12px 0' }}>
                  <div className="email-line long"></div>
                  <div className="email-line med"></div>
                  <div className="email-line short"></div>
                </div>
                <div className="stat-card-metric-row">
                  <div className="open-rate-pill">
                    <TrendingUp size={10} />
                    <span>42% open rate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
            SECTION 4: ACCOUNTING & ANALYTICS
           ==================================================== */}
        <div id="accounting-analytics" className="feature-block">
          <div className="feature-text-side">
            <div className="badge showcase-badge-aa">
              <span className="badge-dot" style={{ backgroundColor: '#fbbf24', boxShadow: '0 0 8px #fbbf24' }}></span>
              <span>Accounting & Analytics</span>
            </div>
            <h2>Financial Clarity At Every Stage</h2>
            <p>
              Track revenue, expenses, profit, cash flow, taxes, and business performance with
              real-time reporting and AI-powered insights.
            </p>

            <div className="feature-checklist-col" style={{ marginBottom: '28px' }}>
              <div className="feature-check-item">
                <span className="feature-check-icon gold">
                  <Check size={12} />
                </span>
                <span>Automated invoicing and expense categorization</span>
              </div>
              <div className="feature-check-item">
                <span className="feature-check-icon gold">
                  <Check size={12} />
                </span>
                <span>Real-time P&L, cash flow, and balance sheet</span>
              </div>
              <div className="feature-check-item">
                <span className="feature-check-icon gold">
                  <Check size={12} />
                </span>
                <span>Tax preparation and compliance reporting</span>
              </div>
              <div className="feature-check-item">
                <span className="feature-check-icon gold">
                  <Check size={12} />
                </span>
                <span>AI-powered anomaly detection and insights</span>
              </div>
              <div className="feature-check-item">
                <span className="feature-check-icon gold">
                  <Check size={12} />
                </span>
                <span>Multi-currency and multi-entity support</span>
              </div>
            </div>

            {/* Metrics cards row */}
            <div className="metrics-summary-row">
              <div className="mini-metric-card">
                <div className="mini-metric-title">Net Revenue</div>
                <div className="mini-metric-val">$124,800</div>
                <div className="mini-metric-trend">+18.2%</div>
              </div>
              <div className="mini-metric-card">
                <div className="mini-metric-title">Expenses</div>
                <div className="mini-metric-val">$42,300</div>
                <div className="mini-metric-trend" style={{ color: '#f87171' }}>+3.1%</div>
              </div>
              <div className="mini-metric-card">
                <div className="mini-metric-title">Net Profit</div>
                <div className="mini-metric-val">$82,500</div>
                <div className="mini-metric-trend">+28.4%</div>
              </div>
            </div>

            <Link href="/admin/dashboard" className="btn-outline">
              <span>Explore Accounting</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="feature-visual-side">
            <div className="mock-dash-window">
              <div className="mock-dash-scaler">
                {/* Sidebar */}
                <aside className="mock-dash-sidebar">
                  <div>
                    <div className="mock-sidebar-logo">
                      <div className="mock-sidebar-logo-icon">
                        <span className="mock-sidebar-logo-dot"></span>
                        <span className="mock-sidebar-logo-dot"></span>
                        <span className="mock-sidebar-logo-dot"></span>
                        <span className="mock-sidebar-logo-dot"></span>
                      </div>
                      <span>BizOS</span>
                    </div>

                    <div className="mock-sidebar-group">
                      <div className="mock-sidebar-title">Core</div>
                      <div className="mock-sidebar-menu">
                        <div className="mock-sidebar-item">
                          <LayoutDashboard size={11} />
                          <span>Dashboard</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Package size={11} />
                          <span>Products</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <UserCheck size={11} />
                          <span>Supplier</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Database size={11} />
                          <span>Inventory</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <ShoppingCart size={11} />
                          <span>Orders</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Users size={11} />
                          <span>Customers</span>
                        </div>
                      </div>
                    </div>

                    <div className="mock-sidebar-group">
                      <div className="mock-sidebar-title">Commerce</div>
                      <div className="mock-sidebar-menu">
                        <div className="mock-sidebar-item">
                          <Globe size={11} />
                          <span>Website</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Megaphone size={11} />
                          <span>Marketing</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Target size={11} />
                          <span>Campaigns</span>
                        </div>
                      </div>
                    </div>

                    <div className="mock-sidebar-group">
                      <div className="mock-sidebar-title">Operations</div>
                      <div className="mock-sidebar-menu">
                        <div className="mock-sidebar-item active">
                          <Calculator size={11} />
                          <span>Accounting</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <Layers size={11} />
                          <span>HRM</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <LineChart size={11} />
                          <span>Analytics</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <FileText size={11} />
                          <span>Reports</span>
                        </div>
                      </div>
                    </div>

                    <div className="mock-sidebar-group">
                      <div className="mock-sidebar-title">System</div>
                      <div className="mock-sidebar-menu">
                        <div className="mock-sidebar-item">
                          <Users size={11} />
                          <span>Team</span>
                        </div>
                        <div className="mock-sidebar-item">
                          <HelpCircle size={11} />
                          <span>Support</span>
                        </div>
                      </div>
                    </div>

                    <div className="mock-sidebar-upgrade">
                      <div className="mock-upgrade-title">Upgrade to Pro</div>
                      <p className="mock-upgrade-desc">Unlock AI analytics, advanced reports, security & support.</p>
                      <button className="mock-upgrade-btn">Upgrade Plan</button>
                    </div>
                  </div>

                  <div className="mock-sidebar-profile">
                    <div className="mock-sidebar-avatar">G</div>
                    <div>
                      <div className="mock-profile-name">Gautam Shah</div>
                      <div className="mock-profile-email">gautam@enterprises.in</div>
                    </div>
                  </div>
                </aside>

                {/* Main Area */}
                <div className="mock-dash-main-area">
                  {/* Header */}
                  <div className="mock-dash-header">
                    <div className="mock-dash-switcher">
                      <span>Shah Enterprises</span>
                      <ChevronDown size={10} />
                    </div>
                    <div className="mock-dash-header-search">
                      <Search size={10} />
                      <span>Search invoices, expenses, ledgers...</span>
                      <kbd className="mock-dash-search-kbd">⌘K</kbd>
                    </div>
                    <div className="mock-dash-header-actions">
                      <div className="mock-dash-header-icon-btn">
                        <Bell size={11} />
                      </div>
                      <button className="mock-dash-create-btn">
                        <Plus size={10} />
                        <span>Create</span>
                      </button>
                      <div className="mock-dash-header-btn ai">
                        <Sparkles size={10} />
                        <span>AI Assistant</span>
                      </div>
                      <div className="mock-dash-header-avatar-circle">
                        G
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Content */}
                  <div className="mock-dash-content-body" style={{ gap: '8px', padding: '10px 14px' }}>
                    {/* Welcome Row */}
                    <div className="mock-dash-welcome-row">
                      <div className="mock-dash-welcome">
                        <h3>Accounting & Financials</h3>
                        <p>Track revenue, expenses, P&L, and financial health in real-time.</p>
                      </div>
                      <div className="mock-dash-welcome-buttons">
                        <button className="mock-dash-welcome-btn">
                          <span>Export Reports</span>
                        </button>
                        <button className="mock-dash-welcome-btn">
                          <span>Record Expense</span>
                        </button>
                        <button className="mock-dash-welcome-btn primary">
                          <Plus size={10} />
                          <span>New Invoice</span>
                        </button>
                      </div>
                    </div>

                    {/* Metric widgets */}
                    <div className="mock-dash-widgets-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
                      <div className="mock-dash-stat-widget">
                        <div className="mock-dash-stat-widget-title">Net Revenue</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '2px' }}>
                          <div>
                            <div className="mock-dash-stat-widget-val">₹1,24,800</div>
                            <span className="mock-dash-stat-widget-sub" style={{ color: 'var(--lp-success)' }}>+18.2%</span>
                          </div>
                          <div className="mock-acc-sparkline">
                            <svg viewBox="0 0 50 15" width="45" height="15">
                              <path d="M0,13 Q10,3 20,9 T40,4 T50,2" fill="none" stroke="#10b981" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="mock-dash-stat-widget">
                        <div className="mock-dash-stat-widget-title">Expenses</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '2px' }}>
                          <div>
                            <div className="mock-dash-stat-widget-val">₹42,300</div>
                            <span className="mock-dash-stat-widget-sub" style={{ color: '#f87171' }}>+3.1%</span>
                          </div>
                          <div className="mock-acc-sparkline">
                            <svg viewBox="0 0 50 15" width="45" height="15">
                              <path d="M0,10 Q10,12 20,7 T40,11 T50,9" fill="none" stroke="#f87171" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="mock-dash-stat-widget">
                        <div className="mock-dash-stat-widget-title">Net Profit</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '2px' }}>
                          <div>
                            <div className="mock-dash-stat-widget-val">₹82,500</div>
                            <span className="mock-dash-stat-widget-sub" style={{ color: 'var(--lp-success)' }}>+28.4%</span>
                          </div>
                          <div className="mock-acc-sparkline">
                            <svg viewBox="0 0 50 15" width="45" height="15">
                              <path d="M0,14 Q10,12 20,6 T40,3 T50,1" fill="none" stroke="#10b981" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="mock-dash-stat-widget">
                        <div className="mock-dash-stat-widget-title">Cash Flow</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '2px' }}>
                          <div>
                            <div className="mock-dash-stat-widget-val">₹91,200</div>
                            <span className="mock-dash-stat-widget-sub" style={{ color: 'var(--lp-success)' }}>+15.3%</span>
                          </div>
                          <div className="mock-acc-sparkline">
                            <svg viewBox="0 0 50 15" width="45" height="15">
                              <path d="M0,12 Q10,12 20,8 T40,6 T50,4" fill="none" stroke="#10b981" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="mock-dash-stat-widget">
                        <div className="mock-dash-stat-widget-title">Tax Est. (Q2)</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '2px' }}>
                          <div>
                            <div className="mock-dash-stat-widget-val">₹14,250</div>
                            <span className="mock-dash-stat-widget-sub">Due in 28d</span>
                          </div>
                          <div className="mock-acc-sparkline">
                            <svg viewBox="0 0 50 15" width="45" height="15">
                              <path d="M0,10 H15 L25,12 T45,10 H50" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2-Column Middle Row */}
                    <div className="mock-acc-grid-2col">
                      {/* Left: Revenue vs Expenses SVG Chart */}
                      <div className="mock-acc-panel" style={{ flex: 1.5 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                          <div>
                            <div className="mock-acc-panel-title">Revenue vs Expenses</div>
                            <span className="mock-acc-panel-subtitle">Monthly cash flow statement of Shah Enterprises.</span>
                          </div>
                          <div style={{ display: 'flex', gap: '8px', fontSize: '8px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#fbbf24', fontWeight: '500' }}>
                              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fbbf24', display: 'inline-block' }}></span>
                              Revenue
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#f87171', fontWeight: '500' }}>
                              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f87171', display: 'inline-block' }}></span>
                              Expenses
                            </span>
                          </div>
                        </div>
                        
                        {/* SVG Chart */}
                        <div style={{ height: '70px', width: '100%', position: 'relative', marginTop: '8px' }}>
                          <svg viewBox="0 0 320 70" width="100%" height="100%" style={{ overflow: 'visible' }}>
                            <line x1="0" y1="10" x2="320" y2="10" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                            <line x1="0" y1="35" x2="320" y2="35" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                            <line x1="0" y1="60" x2="320" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                            
                            {/* Revenue Line (Gold) */}
                            <path
                              d="M0,60 L50,52 L100,32 L150,42 L200,25 L250,15 L320,8"
                              fill="none"
                              stroke="#fbbf24"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            {/* Expenses Line (Red) */}
                            <path
                              d="M0,63 L50,58 L100,55 L150,51 L200,48 L250,49 L320,44"
                              fill="none"
                              stroke="#f87171"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeDasharray="3,3"
                            />
                          </svg>
                          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '7px', color: 'var(--lp-text-muted)', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '4px', marginTop: '4px' }}>
                            <span>Jan</span>
                            <span>Feb</span>
                            <span>Mar</span>
                            <span>Apr</span>
                            <span>May</span>
                            <span>Jun</span>
                          </div>
                        </div>
                      </div>

                      {/* Right: AI Financial Insights */}
                      <div className="mock-acc-panel" style={{ flex: 1 }}>
                        <div className="mock-acc-panel-title" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Sparkles size={9} style={{ color: '#fbbf24' }} />
                          <span>AI Financial Insights</span>
                        </div>
                        <span className="mock-acc-panel-subtitle">Real-time alerts generated from account books.</span>
                        
                        <div className="mock-acc-insights-list">
                          <div className="mock-acc-insight-item warning">
                            <span className="mock-acc-insight-dot"></span>
                            <div>
                              <div className="mock-acc-insight-text">Tax Due Alert</div>
                              <div className="mock-acc-insight-desc">GST Filing Q2 is estimated at ₹14,250. File before Jul 10th.</div>
                            </div>
                          </div>
                          <div className="mock-acc-insight-item success">
                            <span className="mock-acc-insight-dot"></span>
                            <div>
                              <div className="mock-acc-insight-text">Healthy Profit Margin</div>
                              <div className="mock-acc-insight-desc">Net profit margin is up to 66.1% due to decreased operation costs.</div>
                            </div>
                          </div>
                          <div className="mock-acc-insight-item info">
                            <span className="mock-acc-insight-dot"></span>
                            <div>
                              <div className="mock-acc-insight-text">Pending Invoices</div>
                              <div className="mock-acc-insight-desc">3 invoices are overdue. Automated reminders were dispatched.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2-Column Bottom Row */}
                    <div className="mock-acc-grid-2col">
                      {/* Left: Recent Invoices Table */}
                      <div className="mock-acc-panel" style={{ flex: 1.5 }}>
                        <div className="mock-acc-panel-title">Recent Invoices</div>
                        <span className="mock-acc-panel-subtitle">Track invoice state and collection status.</span>
                        
                        <div className="mock-dash-table-wrapper" style={{ marginTop: '6px' }}>
                          <table className="mock-dash-table">
                            <thead>
                              <tr>
                                <th>Invoice</th>
                                <th>Customer</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="product-cell">INV-2026-004</td>
                                <td>Matrix Retailers</td>
                                <td>₹42,500</td>
                                <td>2026-06-15</td>
                                <td><span className="status-badge in-stock">Paid</span></td>
                              </tr>
                              <tr>
                                <td className="product-cell">INV-2026-005</td>
                                <td>Singh Agency</td>
                                <td>₹18,300</td>
                                <td>2026-06-14</td>
                                <td><span className="status-badge out-of-stock">Overdue</span></td>
                              </tr>
                              <tr>
                                <td className="product-cell">INV-2026-006</td>
                                <td>Gupta & Sons</td>
                                <td>₹64,000</td>
                                <td>2026-06-12</td>
                                <td><span className="status-badge in-stock">Paid</span></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Right: Expense Categories breakdown */}
                      <div className="mock-acc-panel" style={{ flex: 1 }}>
                        <div className="mock-acc-panel-title">Expense Categories</div>
                        <span className="mock-acc-panel-subtitle">Expense distribution by category.</span>
                        
                        <div className="mock-acc-categories-list">
                          <div className="mock-acc-category-item">
                            <div className="mock-acc-category-header">
                              <span>Cost of Goods (COGS)</span>
                              <span>₹22,000 (52%)</span>
                            </div>
                            <div className="mock-acc-category-bar-wrapper">
                              <div className="mock-acc-category-bar fill-cogs" style={{ width: '52%' }}></div>
                            </div>
                          </div>
                          
                          <div className="mock-acc-category-item">
                            <div className="mock-acc-category-header">
                              <span>Marketing</span>
                              <span>₹10,575 (25%)</span>
                            </div>
                            <div className="mock-acc-category-bar-wrapper">
                              <div className="mock-acc-category-bar fill-mkt" style={{ width: '25%' }}></div>
                            </div>
                          </div>
                          
                          <div className="mock-acc-category-item">
                            <div className="mock-acc-category-header">
                              <span>Operations</span>
                              <span>₹6,345 (15%)</span>
                            </div>
                            <div className="mock-acc-category-bar-wrapper">
                              <div className="mock-acc-category-bar fill-ops" style={{ width: '15%' }}></div>
                            </div>
                          </div>

                          <div className="mock-acc-category-item">
                            <div className="mock-acc-category-header">
                              <span>Software & Tools</span>
                              <span>₹3,380 (8%)</span>
                            </div>
                            <div className="mock-acc-category-bar-wrapper">
                              <div className="mock-acc-category-bar fill-soft" style={{ width: '8%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
