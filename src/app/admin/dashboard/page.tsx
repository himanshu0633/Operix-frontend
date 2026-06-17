import { BarChart3, Bell, Globe2, Package, Plus, ReceiptIndianRupee, Send, ShoppingBag, Sparkles, Wallet } from "lucide-react";
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

export default function Home() {
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
                <svg viewBox="0 0 680 260" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 190 C45 155 75 155 120 175 C160 195 168 130 220 142 C275 157 285 102 350 96 C394 92 405 145 455 134 C520 122 548 90 592 116 C630 138 644 108 680 66 L680 260 L0 260 Z" />
                  <path d="M0 190 C45 155 75 155 120 175 C160 195 168 130 220 142 C275 157 285 102 350 96 C394 92 405 145 455 134 C520 122 548 90 592 116 C630 138 644 108 680 66" />
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
                  <div className={`insightCard ${card.tone}`} key={card.title}>
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
