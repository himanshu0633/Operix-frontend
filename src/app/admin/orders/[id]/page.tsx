import { ArrowLeft, Download, FileText, Mail, MessageSquare, Package, Printer, RefreshCw, RotateCcw, Truck, UserRound } from "lucide-react";
import { AdminShell } from "../../components/AdminShell";
import { detailOrder, orderedProducts, statusSteps } from "../orders-data";

export default function OrderDetailPage() {
  return (
    <AdminShell activePage="orders">
      <section className="content orderDetailContent">
        <header className="orderPageHeader detailHeader">
          <div>
            <a className="plainBack" href="/admin/orders"><ArrowLeft size={16} />Back to Orders</a>
            <div className="detailTitleLine"><h1>{detailOrder.id}</h1><span className="orderStatus delivered"><i />Delivered</span><span className="payPill paid"><i />Paid</span></div>
            <p>{detailOrder.date} • {detailOrder.platform} • {detailOrder.customer}</p>
          </div>
          <div className="orderActions">
            <a className="primary" href="/admin/orders/invoice">Generate Invoice</a>
            <button type="button"><RefreshCw size={16} />Update Status</button>
            <button type="button"><Truck size={16} />Shipping Label</button>
            <button type="button"><Mail size={16} />Contact</button>
            <button className="danger" type="button"><RotateCcw size={16} />Refund</button>
          </div>
        </header>

        <section className="progressCard">
          <span>ORDER PROGRESS</span>
          <div>{statusSteps.map((step) => <div className="progressStep done" key={step}><i />{step}</div>)}</div>
        </section>

        <div className="orderDetailGrid">
          <main className="orderFormStack">
            <section className="orderCard">
              <h2>Ordered Products</h2>
              <div className="orderedProducts">{orderedProducts.map((item) => <div key={item.sku}><span><Package size={14} /></span><div><strong>{item.name}</strong><small>Qty: {item.qty} • GST: 12%</small></div><b>{item.amount}</b><small>incl. GST</small></div>)}</div>
              <dl className="detailTotals"><div><dt>Subtotal</dt><dd>{detailOrder.subtotal}</dd></div><div><dt>GST (12%)</dt><dd>{detailOrder.gst}</dd></div><div className="total"><dt>Total</dt><dd>{detailOrder.amount}</dd></div></dl>
            </section>

            <section className="orderCard infoList"><h2>Shipping Information</h2><div><UserRound size={16} /><span>Customer</span><strong>{detailOrder.customer}</strong></div><div><Truck size={16} /><span>Address</span><strong>{detailOrder.address}</strong></div><div><Mail size={16} /><span>Email</span><strong>{detailOrder.email}</strong></div><div><Package size={16} /><span>Tracking ID</span><strong>{detailOrder.tracking}</strong></div></section>
            <section className="orderCard detailKeyValues"><h2>Payment Information</h2><div><span>Method</span><strong>UPI</strong></div><div><span>Status</span><strong className="greenText">Paid</strong></div><div><span>Transaction ID</span><strong>UPI-PAY-88421</strong></div><div><span>Amount</span><strong>{detailOrder.amount}</strong></div></section>
            <section className="orderCard timelineCard"><h2>Activity Timeline</h2>{["Order Created|Customer placed order online|2:14 PM", "Payment Received|UPI payment confirmed|2:16 PM", "Processing Started|Warehouse notified|3:00 PM", "Packed|Order packed and labeled|5:30 PM", "Shipped|Picked up by DHL Express|Next day", "Delivered|Delivered to customer address|4:20 PM"].map((row) => { const [title, text, time] = row.split("|"); return <div className="timelineItem" key={title}><i /><div><strong>{title}</strong><span>{text}</span></div><time>{time}</time></div>; })}</section>
          </main>

          <aside className="orderSideStack">
            <section className="orderCard statusPanel"><h3>Order Status</h3><div><span>Current</span><b className="orderStatus delivered"><i />Delivered</b></div><div><span>Platform</span><strong>Website</strong></div><div><span>Delivery</span><strong>Delivered</strong></div><div><span>Est. Delivery</span><strong>{detailOrder.estDelivery}</strong></div><select defaultValue=""><option value="">Update Status</option>{statusSteps.map((step) => <option key={step}>{step}</option>)}<option>Cancelled</option><option>Returned</option></select></section>
            <section className="orderCard customerInsights"><h3>Customer Insights</h3><div className="customerLine"><span>P</span><div><strong>{detailOrder.customer}</strong><small>{detailOrder.city}</small></div></div><div><span>Total Orders</span><strong>24</strong></div><div><span>Total Spend</span><strong>₹1,84,500</strong></div><div><span>Customer Type</span><strong>Returning</strong></div><div><span>Avg Order</span><strong>₹7,680</strong></div></section>
            <section className="orderCard quickPanel"><h3>Quick Actions</h3><button type="button"><MessageSquare size={15} />Resend Invoice</button><button type="button"><Mail size={15} />Contact Customer</button><button type="button"><Package size={15} />Create Replacement</button><button className="danger" type="button"><RotateCcw size={15} />Issue Refund</button></section>
            <section className="orderCard quickPanel"><h3>Invoice</h3><a className="primary" href="/admin/orders/invoice"><FileText size={15} />Generate PDF</a><button type="button"><Download size={15} />Download GST Invoice</button><button type="button"><Printer size={15} />Print Invoice</button></section>
          </aside>
        </div>
      </section>
    </AdminShell>
  );
}
