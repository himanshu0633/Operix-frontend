import { ChevronDown, Download, FileText, Plus, Search } from "lucide-react";
import { AdminShell } from "../components/AdminShell";
import { customers, customerStats } from "./customers-data";

export default function CustomersPage() {
  return (
    <AdminShell activePage="customers">
      <section className="content customersContent">
        <header className="customersHero">
          <div>
            <h1>Customers</h1>
            <p>Manage customer relationships, orders, and purchase behavior.</p>
          </div>
          <div className="customerActions">
            <a className="primary" href="/admin/customers/add-customer"><Plus size={16} />Add Customer</a>
            <button type="button"><Download size={16} />Export Customers</button>
            <a href="/admin/customers/invoice"><FileText size={16} />Create Invoice</a>
          </div>
        </header>

        <section className="customerStatsGrid" aria-label="Customer metrics">
          {customerStats.map((stat) => (
            <article className={`customerStatCard ${stat.tone}`} key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <svg viewBox="0 0 72 38" aria-hidden="true"><path d={stat.spark} /></svg>
              <p>{stat.meta}</p>
            </article>
          ))}
        </section>

        <section className="customerFilters">
          <label>
            <Search size={17} />
            <input placeholder="Search customers..." />
          </label>
          <button type="button">Type <ChevronDown size={14} /></button>
          <button type="button">Loyalty <ChevronDown size={14} /></button>
          <span>12 customers</span>
        </section>

        <section className="customersTableWrap">
          <div className="customersTable">
            <div className="customerRow customerHead">
              <span>Customer</span>
              <span>Contact</span>
              <span>Orders</span>
              <span>Total Spend</span>
              <span>Last Order</span>
              <span>Type</span>
              <span>Payment Pref</span>
              <span>Loyalty</span>
            </div>
            {customers.map((customer) => (
              <a className="customerRow" href={`/admin/customers/${customer.id}`} key={customer.id}>
                <div className="customerNameCell">
                  <span className={`customerAvatar ${customer.tone}`}>{customer.initials}</span>
                  <div><strong>{customer.name}</strong><small>{customer.city}</small></div>
                </div>
                <div className="customerContact"><span>{customer.phone}</span><small>{customer.email.replace("@example.com", "@...").replace("@gmail.com", "@...")}</small></div>
                <strong>{customer.orders}</strong>
                <strong className="spendText">{customer.spend}</strong>
                <span>{customer.last}</span>
                <span className={`customerType ${customer.type.toLowerCase()}`}><i />{customer.type}</span>
                <span>{customer.payment}</span>
                <strong className={`loyaltyText ${customer.loyalty.toLowerCase()}`}>{customer.loyalty}</strong>
              </a>
            ))}
          </div>
        </section>
      </section>
    </AdminShell>
  );
}
