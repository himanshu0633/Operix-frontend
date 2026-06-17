import {
  ChevronDown,
  ClipboardList,
  Download,
  Plus,
  Search,
  SlidersHorizontal,
  Truck,
} from "lucide-react";
import { AdminShell } from "../components/AdminShell";

const supplierStats = [
  { label: "Total Suppliers", value: "8", meta: "+2 this month", sub: "across all categories", tone: "teal", spark: "M2 30 L18 22 L34 22 L50 14 L66 12" },
  { label: "Outstanding Payables", value: "₹9.3L", meta: "3 overdue", sub: "requires attention", tone: "red", spark: "M2 31 C20 26 28 18 43 14 C52 12 58 15 66 13" },
  { label: "Monthly Purchases", value: "₹8.2L", meta: "+18% vs last month", sub: "vs ₹6.9L prior", tone: "green", spark: "M2 28 C15 24 20 15 32 10 C40 15 50 10 66 7" },
  { label: "Active Suppliers", value: "6", meta: "2 with issues", sub: "", tone: "blue", spark: "M2 24 L16 24 L28 15 L42 15 L52 6 L66 6" },
];

const suppliers = [
  { initials: "RT", name: "Rajesh Textiles", gst: "27AABCR1234M1Z5", contact: "Rajesh Kumar", phone: "+91 98201 45678", category: "Textiles", products: 12, outstanding: "₹2.85L", last: "2d ago", monthly: "₹8.4L", payment: "Pending", tone: "blue" },
  { initials: "BS", name: "Bharat Spices", gst: "29AADCB5678K1ZQ", contact: "Mohan Das", phone: "+91 94830 22145", category: "Food", products: 8, outstanding: "-", last: "5d ago", monthly: "₹3.2L", payment: "Paid", tone: "green" },
  { initials: "MK", name: "Mumbai Kitchenware", gst: "27AACCM9012H1ZR", contact: "Priya Sharma", phone: "+91 99204 78901", category: "Kitchen", products: 22, outstanding: "₹1.12L", last: "1d ago", monthly: "₹5.6L", payment: "Overdue", tone: "red" },
  { initials: "KC", name: "Kashmiri Craft House", gst: "01AABCK3456P1ZH", contact: "Arjun Bhat", phone: "+91 97801 34567", category: "Handicrafts", products: 6, outstanding: "₹0.67L", last: "8d ago", monthly: "₹1.9L", payment: "Pending", tone: "amber" },
  { initials: "OI", name: "Organic India Farms", gst: "24AAACO2345T1ZM", contact: "Sunita Patel", phone: "+91 98760 11234", category: "Organic", products: 14, outstanding: "-", last: "3d ago", monthly: "₹4.1L", payment: "Paid", tone: "green" },
  { initials: "PL", name: "Pune Leather Works", gst: "27AACCP4567Q1ZK", contact: "Rahul Patil", phone: "+91 91234 56789", category: "Leather", products: 9, outstanding: "₹3.45L", last: "12d ago", monthly: "₹6.9L", payment: "Overdue", tone: "red" },
  { initials: "DA", name: "Delhi Apparel Hub", gst: "07AABCD6789R1ZF", contact: "Vikram Arora", phone: "+91 98991 23456", category: "Apparel", products: 18, outstanding: "₹1.20L", last: "4d ago", monthly: "₹5.2L", payment: "Pending", tone: "blue" },
  { initials: "KA", name: "Kerala Ayurveda Ltd.", gst: "32AACCK7890S1ZC", contact: "Anita Nair", phone: "+91 94470 87654", category: "Ayurveda", products: 11, outstanding: "-", last: "6d ago", monthly: "₹2.8L", payment: "Paid", tone: "green" },
];

export default function SuppliersPage() {
  return (
    <AdminShell activePage="suppliers">
      <section className="content suppliersContent">
        <header className="suppliersHero">
          <div>
            <h1>Suppliers</h1>
            <p>Manage suppliers, purchases, and procurement history.</p>
          </div>
          <div className="supplierActions">
            <button type="button"><Download size={16} />Import</button>
            <a href="/admin/suppliers/new-purchase-entry"><ClipboardList size={16} />New Purchase Entry</a>
            <a className="primary" href="/admin/suppliers/add-supplier"><Plus size={17} />Add Supplier</a>
          </div>
        </header>

        <section className="supplierStatsGrid" aria-label="Supplier metrics">
          {supplierStats.map((stat) => (
            <article className={`supplierStatCard ${stat.tone}`} key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <svg viewBox="0 0 68 38" aria-hidden="true">
                <path d={stat.spark} />
              </svg>
              <div>
                <b>{stat.meta}</b>
                {stat.sub ? <em>{stat.sub}</em> : null}
              </div>
            </article>
          ))}
        </section>

        <section className="supplierFilters">
          <label>
            <Search size={17} />
            <input placeholder="Search suppliers, GST, contact..." />
          </label>
          <button type="button">Category <ChevronDown size={14} /></button>
          <button type="button">Payment Status <ChevronDown size={14} /></button>
          <span>8 of 8 suppliers</span>
          <button className="sortButton" type="button"><SlidersHorizontal size={15} />Sort</button>
        </section>

        <section className="suppliersTableWrap">
          <div className="suppliersTable">
            <div className="supplierRow supplierHead">
              <span>SUPPLIER</span>
              <span>CONTACT</span>
              <span>CATEGORY</span>
              <span>PRODUCTS</span>
              <span>OUTSTANDING</span>
              <span>LAST PURCHASE</span>
              <span>MONTHLY</span>
              <span>PAYMENT</span>
            </div>

            {suppliers.map((supplier) => (
              <div className="supplierRow" key={supplier.gst}>
                <div className="supplierNameCell">
                  <span className={`supplierAvatar ${supplier.tone}`}>{supplier.initials}</span>
                  <div>
                    <strong>{supplier.name}</strong>
                    <small>{supplier.gst}</small>
                  </div>
                </div>
                <div className="supplierContact">
                  <span>{supplier.contact}</span>
                  <small>{supplier.phone}</small>
                </div>
                <span className="categoryPill">{supplier.category}</span>
                <span className="productCount"><ClipboardList size={13} />{supplier.products}</span>
                <strong className={supplier.outstanding === "-" ? "clearAmount" : supplier.payment === "Overdue" ? "dangerAmount" : "dueAmount"}>
                  {supplier.outstanding}
                </strong>
                <span>{supplier.last}</span>
                <strong>{supplier.monthly}</strong>
                <span className={`paymentPill ${supplier.payment.toLowerCase()}`}><i />{supplier.payment}</span>
              </div>
            ))}
          </div>

          <footer className="suppliersFooter">
            <span>Showing 8 suppliers</span>
            <button type="button">1</button>
          </footer>
        </section>
      </section>
    </AdminShell>
  );
}
