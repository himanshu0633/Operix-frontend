import { ChevronDown, Download, FileText, Plus, Search } from "lucide-react";
import { AdminShell } from "../components/AdminShell";
import { orders, orderStats } from "./orders-data";

export default function OrdersPage() {
  return (
    <AdminShell activePage="orders">
      <section className="content ordersContent">
        <header className="ordersHero">
          <div>
            <h1>Orders</h1>
            <p>Manage and track all customer orders across platforms.</p>
          </div>
          <div className="orderActions">
            <a className="primary" href="/admin/orders/create"><Plus size={16} />Create Order</a>
            <a href="/admin/orders/invoice"><FileText size={16} />Generate Invoice</a>
            <button type="button"><Download size={16} />Export Orders</button>
          </div>
        </header>

        <section className="orderStatsGrid" aria-label="Order metrics">
          {orderStats.map((stat) => (
            <article className={`orderStatCard ${stat.tone}`} key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <svg viewBox="0 0 72 38" aria-hidden="true"><path d={stat.spark} /></svg>
              <p>{stat.meta}</p>
            </article>
          ))}
        </section>

        <section className="orderFilters">
          <label>
            <Search size={17} />
            <input placeholder="Search orders..." />
          </label>
          <button type="button">All <ChevronDown size={14} /></button>
          <button type="button">All <ChevronDown size={14} /></button>
          <button type="button">All <ChevronDown size={14} /></button>
          <span>12 orders</span>
        </section>

        <section className="ordersTableWrap">
          <div className="ordersTable">
            <div className="orderRow orderHead">
              <span>Order ID</span>
              <span>Customer</span>
              <span>Products</span>
              <span>Platform</span>
              <span>Payment</span>
              <span>Pay Status</span>
              <span>Order Status</span>
              <span>Amount</span>
              <span>Date</span>
              <span>Actions</span>
            </div>
            {orders.map((order) => (
              <a className="orderRow" href={`/admin/orders/${order.id}`} key={order.id}>
                <strong className="orderId">{order.id}</strong>
                <div className="orderCustomer"><span>{order.customer}</span><small>{order.city}</small></div>
                <span>{order.products}</span>
                <span className={`platformText ${order.platform.toLowerCase()}`}>{order.platform}</span>
                <span>{order.payment}</span>
                <span className={`payPill ${order.payStatus.toLowerCase()}`}><i />{order.payStatus}</span>
                <span className={`orderStatus ${order.status.toLowerCase().replaceAll(" ", "-")}`}><i />{order.status}</span>
                <strong>{order.amount}</strong>
                <span>{order.date}</span>
                <span className="rowAction">View</span>
              </a>
            ))}
          </div>
        </section>
      </section>
    </AdminShell>
  );
}
