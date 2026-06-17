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
            <div className="mock-inventory-window">
              <div className="mock-window-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }}></div>
                  <span className="mock-window-title" style={{ marginLeft: '10px' }}>Inventory Management</span>
                </div>
                <div className="mock-window-actions">
                  <span className="mock-win-btn primary">+ Add Stock</span>
                  <span className="mock-win-btn">Transfer Inventory</span>
                  <span className="mock-win-btn">Export</span>
                </div>
              </div>
              
              <div className="mock-inventory-body">
                {/* Stats Widgets */}
                <div className="mock-widgets-row">
                  <div className="mock-widget">
                    <div className="mock-widget-title">Total Products</div>
                    <div className="mock-widget-val">12</div>
                    <div style={{ fontSize: '7px', color: 'var(--lp-success)', marginTop: '2px' }}>+2 this week</div>
                  </div>
                  <div className="mock-widget">
                    <div className="mock-widget-title">Inventory Value</div>
                    <div className="mock-widget-val">₹66.68L</div>
                    <div style={{ fontSize: '7px', color: 'var(--lp-text-muted)', marginTop: '2px' }}>Across warehouses</div>
                  </div>
                  <div className="mock-widget">
                    <div className="mock-widget-title">Low Stock Items</div>
                    <div className="mock-widget-val" style={{ color: '#fbbf24' }}>3</div>
                    <div style={{ fontSize: '7px', color: 'var(--lp-text-muted)', marginTop: '2px' }}>Needs restock</div>
                  </div>
                  <div className="mock-widget">
                    <div className="mock-widget-title">Out of Stock</div>
                    <div className="mock-widget-val" style={{ color: '#f87171' }}>2</div>
                    <div style={{ fontSize: '7px', color: 'var(--lp-text-muted)', marginTop: '2px' }}>Needs attention</div>
                  </div>
                  <div className="mock-widget">
                    <div className="mock-widget-title">Utilization</div>
                    <div className="mock-widget-val">74%</div>
                    <div style={{ fontSize: '7px', color: 'var(--lp-text-muted)', marginTop: '2px' }}>Main + West</div>
                  </div>
                </div>

                {/* Table Mockup */}
                <div className="mock-table-wrapper">
                  <table className="mock-table">
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
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ fontWeight: '600', color: '#fff' }}>Banaras Silk Saree</td>
                        <td>003-9062</td>
                        <td>Textiles</td>
                        <td>Main Warehouse</td>
                        <td>142</td>
                        <td>10</td>
                        <td>Pcs</td>
                        <td>₹20,40,000</td>
                        <td><span className="status-badge in-stock">In Stock</span></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: '600', color: '#fff' }}>Kashmiri Pashmina Shawl</td>
                        <td>KPS-8834</td>
                        <td>Textiles</td>
                        <td>Main Warehouse</td>
                        <td>28</td>
                        <td>5</td>
                        <td>Pcs</td>
                        <td>₹8,40,000</td>
                        <td><span className="status-badge low-stock">Low Stock</span></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: '600', color: '#fff' }}>Organic Turmeric Powder</td>
                        <td>OTP-9050</td>
                        <td>Spices</td>
                        <td>Cold Storage</td>
                        <td>0</td>
                        <td>0</td>
                        <td>Kg</td>
                        <td>₹0</td>
                        <td><span className="status-badge out-of-stock">Out of Stock</span></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: '600', color: '#fff' }}>Premium Basmati Rice</td>
                        <td>PBR-9013</td>
                        <td>Food</td>
                        <td>Main Warehouse</td>
                        <td>520</td>
                        <td>40</td>
                        <td>Kg</td>
                        <td>₹1,80,000</td>
                        <td><span className="status-badge overstocked">Overstocked</span></td>
                      </tr>
                      <tr>
                        <td style={{ fontWeight: '600', color: '#fff' }}>Stainless Steel Kadhai</td>
                        <td>SSK-9005</td>
                        <td>Kitchen</td>
                        <td>West Warehouse</td>
                        <td>94</td>
                        <td>12</td>
                        <td>Pcs</td>
                        <td>₹2,12,000</td>
                        <td><span className="status-badge in-stock">In Stock</span></td>
                      </tr>
                    </tbody>
                  </table>
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
            <div className="mock-website-window">
              {/* Stepper bar */}
              <div className="mock-stepper">
                <div className="mock-stepper-progress"></div>
                <div className="mock-step active">1</div>
                <div className="mock-step active">2</div>
                <div className="mock-step">3</div>
                <div className="mock-step">4</div>
                <div className="mock-step">5</div>
                <div className="mock-step">6</div>
              </div>

              <div className="template-header-area">
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#fff' }}>Choose a Template</div>
                <div className="ai-rec-badge">
                  <Sparkles size={10} />
                  <span>AI Recommended: Lumina</span>
                </div>
              </div>

              {/* Template Cards */}
              <div className="templates-grid">
                <div className="template-card active">
                  <div className="temp-layout-preview">
                    <div className="temp-header-stripe"></div>
                    <div className="temp-body-stripes">
                      <div className="temp-body-stripe-left"></div>
                      <div className="temp-body-stripe-right"></div>
                    </div>
                    <span className="temp-dot-indicator" style={{ backgroundColor: '#6366f1' }}></span>
                  </div>
                  <div className="temp-title">Lumina</div>
                  <div className="temp-desc">Responsive, AI-Optimized</div>
                </div>

                <div className="template-card">
                  <div className="temp-layout-preview">
                    <div className="temp-header-stripe"></div>
                    <div className="temp-body-stripes">
                      <div className="temp-body-stripe-left" style={{ flex: 1 }}></div>
                      <div className="temp-body-stripe-right" style={{ flex: 1.5 }}></div>
                    </div>
                    <span className="temp-dot-indicator" style={{ backgroundColor: '#ef4444' }}></span>
                  </div>
                  <div className="temp-title">Nexus</div>
                  <div className="temp-desc">Minimalist Portfolio</div>
                </div>

                <div className="template-card">
                  <div className="temp-layout-preview">
                    <div className="temp-header-stripe"></div>
                    <div className="temp-body-stripes">
                      <div className="temp-body-stripe-left" style={{ height: '10px' }}></div>
                      <div className="temp-body-stripe-right" style={{ height: '10px' }}></div>
                    </div>
                    <span className="temp-dot-indicator" style={{ backgroundColor: '#10b981' }}></span>
                  </div>
                  <div className="temp-title">Varda</div>
                  <div className="temp-desc">Boutique, Soft Themes</div>
                </div>

                <div className="template-card">
                  <div className="temp-layout-preview">
                    <div className="temp-header-stripe"></div>
                    <div className="temp-body-stripes">
                      <div className="temp-body-stripe-left"></div>
                      <div className="temp-body-stripe-right"></div>
                    </div>
                    <span className="temp-dot-indicator" style={{ backgroundColor: '#a855f7' }}></span>
                  </div>
                  <div className="temp-title">Aria</div>
                  <div className="temp-desc">Bold Typography</div>
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
                <div className="stat-card-header">
                  <div className="stat-card-icon">
                    <Megaphone size={16} />
                  </div>
                  <span className="stat-card-metric highlight-purple">3.4x</span>
                </div>
                <h4>Marketing Studio</h4>
                <p>AI-generated content across email, social, and paid channels.</p>
              </div>

              <div className="stat-card">
                <div className="stat-card-header">
                  <div className="stat-card-icon">
                    <Target size={16} />
                  </div>
                  <span className="stat-card-metric highlight-green">68%</span>
                </div>
                <h4>Campaign Manager</h4>
                <p>Launch and track campaigns with real-time ROI reporting.</p>
              </div>
            </div>

            {/* Center Visual: Marketing Dashboard Mockup */}
            <div className="marketing-center-visual">
              <div className="mock-marketing-window">
                <div className="mock-window-header" style={{ height: '38px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }}></div>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b' }}></div>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}></div>
                    <span className="mock-window-title" style={{ marginLeft: '8px', fontSize: '10px' }}>Marketing Studio</span>
                  </div>
                  <div className="mock-window-actions">
                    <span className="mock-win-btn" style={{ fontSize: '8px', padding: '2px 6px' }}>Generate with AI</span>
                  </div>
                </div>

                <div className="mock-marketing-body">
                  <div className="product-selector-list">
                    <div style={{ fontSize: '8px', fontWeight: '750', color: '#fff', marginBottom: '4px' }}>Choose Product To Promote</div>
                    <div className="product-select-item">
                      <div className="product-select-info">
                        <div className="product-select-img" style={{ backgroundColor: 'rgba(99,102,241,0.2)' }}></div>
                        <div>
                          <div className="product-select-name">Premium Cotton Kurta</div>
                          <div className="product-select-stock">₹1,200 | 45 In Stock</div>
                        </div>
                      </div>
                    </div>
                    <div className="product-select-item">
                      <div className="product-select-info">
                        <div className="product-select-img" style={{ backgroundColor: 'rgba(16,185,129,0.2)' }}></div>
                        <div>
                          <div className="product-select-name">Silk Saree - Banaras</div>
                          <div className="product-select-stock">₹20,400 | 142 In Stock</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="ai-generator-panel">
                    <div className="ai-gen-field">
                      <span className="ai-gen-label">Campaign Goal</span>
                      <div className="ai-gen-input" style={{ display: 'flex', alignItems: 'center', paddingLeft: '6px', fontSize: '7px', color: '#fff' }}>Generate engagement</div>
                    </div>
                    <div className="ai-gen-field">
                      <span className="ai-gen-label">Target Audience</span>
                      <div className="ai-gen-input" style={{ display: 'flex', alignItems: 'center', paddingLeft: '6px', fontSize: '7px', color: '#fff' }}>Festive shoppers</div>
                    </div>
                    <div style={{ background: '#6366f1', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', fontSize: '8px', fontWeight: 'bold', cursor: 'pointer', color: '#fff' }}>
                      Generate Content
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Stat Cards */}
            <div className="marketing-stat-col">
              <div className="stat-card">
                <div className="stat-card-header">
                  <div className="stat-card-icon">
                    <BarChart3 size={16} />
                  </div>
                  <span className="stat-card-metric highlight-gold">2.1x</span>
                </div>
                <h4>Performance Analytics</h4>
                <p>Deep funnel analytics from impression to purchase.</p>
              </div>

              <div className="stat-card">
                <div className="stat-card-header">
                  <div className="stat-card-icon">
                    <Mail size={16} />
                  </div>
                  <span className="open-rate-pill">42% open rate</span>
                </div>
                <h4 style={{ marginTop: '4px' }}>AI Email Draft</h4>
                <div className="email-mock-lines">
                  <div className="email-line long"></div>
                  <div className="email-line med"></div>
                  <div className="email-line short"></div>
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
            <div className="mock-accounting-window">
              <div className="mock-window-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }}></div>
                  <span className="mock-window-title" style={{ marginLeft: '10px' }}>Financial Performance</span>
                </div>
                <div className="mock-window-actions">
                  <span className="mock-win-btn">Last 30 Days</span>
                </div>
              </div>
              
              <div className="mock-accounting-body">
                {/* Visual Chart */}
                <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '8px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#fff' }}>Revenue vs Expenses</span>
                    <span style={{ fontSize: '8px', color: 'var(--lp-text-muted)' }}>Net profit margin: 66.1%</span>
                  </div>
                  
                  {/* SVG Chart */}
                  <div style={{ height: '100px', width: '100%', position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
                    <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
                      {/* Grid Lines */}
                      <line x1="0" y1="20" x2="200" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                      <line x1="0" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                      <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                      
                      {/* Revenue Line (Gold) */}
                      <path
                        d="M0,85 L30,75 L60,50 L90,65 L120,40 L150,25 L200,10"
                        fill="none"
                        stroke="#fbbf24"
                        strokeWidth="2"
                      />
                      {/* Expenses Line (Red) */}
                      <path
                        d="M0,90 L30,85 L60,80 L90,75 L120,70 L150,72 L200,65"
                        fill="none"
                        stroke="#f87171"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '7px', color: 'var(--lp-text-muted)', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '4px', marginTop: 'auto' }}>
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                    </div>
                  </div>
                </div>

                {/* Sidebar summary list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ fontSize: '9px', fontWeight: 'bold', color: '#fff', textAlign: 'left' }}>Invoice Activity</div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', padding: '6px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '4px' }}>
                      <span style={{ color: '#fff', fontWeight: '500' }}>INV-2026-04</span>
                      <span style={{ color: 'var(--lp-success)' }}>Paid</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', padding: '6px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '4px' }}>
                      <span style={{ color: '#fff', fontWeight: '500' }}>INV-2026-05</span>
                      <span style={{ color: '#fbbf24' }}>Pending</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', padding: '6px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', borderRadius: '4px' }}>
                      <span style={{ color: '#fff', fontWeight: '500' }}>INV-2026-06</span>
                      <span style={{ color: 'var(--lp-success)' }}>Paid</span>
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
