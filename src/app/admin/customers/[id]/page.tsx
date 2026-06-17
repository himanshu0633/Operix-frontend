import { ArrowLeft, Calendar, FileText, Mail, MapPin, MessageSquare, NotebookPen, Phone, ReceiptIndianRupee, ShoppingBag, Star } from "lucide-react";
import { AdminShell } from "../../components/AdminShell";
import { customerOrders, customerProfile } from "../customers-data";

export default function CustomerDetailPage() {
  return (
    <AdminShell activePage="customers">
      <section className="content customerDetailContent">
        <a className="customerBack" href="/admin/customers"><ArrowLeft size={16} />Back to Customers</a>

        <section className="customerProfileHero">
          <div className="profileTop">
            <span className="largeCustomerAvatar">{customerProfile.initials}</span>
            <div className="profileIdentity">
              <div><h1>{customerProfile.name}</h1><span className="customerType returning"><i />Returning</span><strong>Gold</strong></div>
              <p><Phone size={14} />{customerProfile.phone}<Mail size={14} />{customerProfile.email}<MapPin size={14} />{customerProfile.city}<Calendar size={14} />Since {customerProfile.since}</p>
              <p>GST: {customerProfile.gst}</p>
            </div>
            <div className="customerActions">
              <a className="primary" href="/admin/orders/create"><ShoppingBag size={16} />Create Order</a>
              <a href="/admin/customers/invoice"><FileText size={16} />Generate Invoice</a>
              <button type="button"><MessageSquare size={16} />Send Message</button>
              <button type="button"><NotebookPen size={16} />Add Note</button>
            </div>
          </div>
          <div className="profileMetricGrid">
            <article><span>Total Orders</span><strong>{customerProfile.totalOrders}</strong></article>
            <article><span>Total Spend</span><strong className="greenText">{customerProfile.totalSpend}</strong></article>
            <article><span>Avg Order Value</span><strong className="blueText">{customerProfile.avgOrder}</strong></article>
            <article><span>Last Order</span><strong>{customerProfile.lastOrder}</strong></article>
          </div>
        </section>

        <div className="customerDetailGrid">
          <main className="customerMainStack">
            <section className="customerCard orderHistoryCard">
              <h2>Order History</h2>
              {customerOrders.map((order) => (
                <a href={`/admin/orders/${order.id}`} key={order.id}>
                  <span><ShoppingBag size={15} /></span>
                  <div><strong>{order.id}</strong><small>{order.product}</small></div>
                  <em className={`customerOrderStatus ${order.status.toLowerCase()}`}>{order.status}</em>
                  <div><b>{order.amount}</b><small>{order.date}</small></div>
                </a>
              ))}
            </section>

            <section className="customerCard purchaseAnalytics">
              <h2>Purchase Analytics</h2>
              <div className="analyticsMiniGrid"><article><span>Repeat Rate</span><strong className="greenText">96%</strong></article><article><span>Avg Frequency</span><strong className="blueText">2x/month</strong></article></div>
              <p>Most Purchased Products</p>
              {["Banarasi Silk Saree|8x ordered", "Kashmiri Pashmina Shawl|6x ordered", "Cotton Kurta|4x ordered"].map((row, index) => { const [name, count] = row.split("|"); return <div className="rankRow" key={name}><span>{index + 1}</span><strong>{name}</strong><em>{count}</em></div>; })}
            </section>

            <section className="customerCard customerTimeline">
              <h2>Activity Timeline</h2>
              {["Order Placed|ORD-4421 • ₹24,000|May 19|blue", "Payment Made|UPI • Instant|May 19|green", "Order Delivered|DHL Express|May 21|green", "Order Placed|ORD-4390 • ₹30,000|Apr 28|blue", "Return Request|ORD-4200 • Approved|Jan 10|amber"].map((row) => { const [title, text, date, tone] = row.split("|"); return <div className={`customerTimelineItem ${tone}`} key={`${title}-${date}`}><i /><div><strong>{title}</strong><span>{text}</span></div><time>{date}</time></div>; })}
            </section>

            <section className="customerCard savedAddresses">
              <h2>Saved Addresses</h2>
              <p><MapPin size={15} />Home • 204, Andheri West, Mumbai 400053</p>
              <p><MapPin size={15} />Office • 12, BKC Complex, Mumbai 400051</p>
            </section>
          </main>

          <aside className="customerSideStack">
            <section className="customerCard customerKeyValues"><h3>Customer Insights</h3><div><span>Repeat Frequency</span><strong>2x/month</strong></div><div><span>Preferred Category</span><strong>Textiles</strong></div><div><span>Preferred Payment</span><strong>UPI</strong></div><div><span>Lifetime Value</span><strong>₹4,42,800</strong></div><div><span>Risk Score</span><strong>Low</strong></div></section>
            <section className="customerCard customerKeyValues"><h3>Payment Summary</h3><div><span>Total Paid</span><strong className="greenText">₹1,84,500</strong></div><div><span>Pending Invoices</span><strong className="greenText">₹0</strong></div><div><span>Refunds Issued</span><strong className="redText">₹6,000</strong></div><div><span>COD Orders</span><strong className="goldText">3</strong></div></section>
            <section className="customerCard customerQuickActions"><h3>Quick Actions</h3><button type="button"><MessageSquare size={15} />Send WhatsApp</button><a href="/admin/customers/invoice"><FileText size={15} />Generate Invoice</a><button type="button"><ReceiptIndianRupee size={15} />Apply Discount</button><button type="button"><NotebookPen size={15} />Create Support Ticket</button></section>
            <section className="customerCard loyaltyCard"><h3>Loyalty Status</h3><strong><Star size={16} />Gold</strong><span><i /></span><p>Gold tier member</p></section>
          </aside>
        </div>
      </section>
    </AdminShell>
  );
}
