import { ArrowLeft, FileText, MapPin, Mail, Phone, Plus, ReceiptIndianRupee } from "lucide-react";
import { AdminShell } from "../../components/AdminShell";

const customerTypes = ["Retail", "Wholesale", "Returning", "VIP", "Distributor"];
const paymentMethods = ["UPI", "Cash", "Card", "Bank Transfer", "COD", "Credit"];
const checklist = ["Full Name", "Phone Number", "Email Address", "Delivery Address", "City & Pincode", "Customer Type", "Payment Method"];

export default function AddCustomerPage() {
  return (
    <AdminShell activePage="customers">
      <section className="content customerFormContent">
        <header className="customerPageHeader">
          <div>
            <a className="customerBack" href="/admin/customers"><ArrowLeft size={16} />Back to Customers</a>
            <h1>Add Customer</h1>
            <p>Create customer profiles and manage customer information.</p>
          </div>
          <div className="customerActions">
            <button type="button">Save Draft</button>
            <a href="/admin/orders/create"><ReceiptIndianRupee size={16} />Create Order</a>
            <a href="/admin/customers/invoice"><FileText size={16} />Generate Invoice</a>
            <button className="primary" type="button">Add Customer</button>
          </div>
        </header>

        <div className="customerFormGrid">
          <main className="customerFormStack">
            <section className="customerCard">
              <h2>Basic Information</h2>
              <div className="customerTwoCols">
                <label className="customerField"><span>Full Name</span><input placeholder="Customer full name" /></label>
                <label className="customerField"><span>Phone Number</span><input placeholder="+91 00000 00000" /></label>
                <label className="customerField"><span>Email Address</span><input placeholder="customer@email.com" /></label>
                <label className="customerField"><span>GST Number</span><input placeholder="GST number (if applicable)" /></label>
              </div>
            </section>

            <section className="customerCard">
              <h2>Address</h2>
              <label className="customerField full"><span>Street Address</span><textarea placeholder="Full address..." /></label>
              <div className="customerTwoCols">
                <label className="customerField"><span>City</span><input placeholder="City" /></label>
                <label className="customerField"><span>State</span><input /></label>
                <label className="customerField"><span>Pincode</span><input placeholder="400001" /></label>
                <label className="customerField"><span>Country</span><input placeholder="India" /></label>
              </div>
            </section>

            <section className="customerCard">
              <h2>Customer Type</h2>
              <div className="customerPills">{customerTypes.map((type, index) => <button className={index === 0 ? "active" : ""} type="button" key={type}>{type === "VIP" ? "☆ " : ""}{type}</button>)}</div>
              <p>Standard retail customer with regular pricing.</p>
            </section>

            <section className="customerCard">
              <h2>Payment Details</h2>
              <span className="sectionLabel">Preferred Payment Method</span>
              <div className="customerPills">{paymentMethods.map((method, index) => <button className={index === 0 ? "active" : ""} type="button" key={method}>{method}</button>)}</div>
              <div className="customerTwoCols">
                <label className="customerField"><span>Credit Limit (₹)</span><input placeholder="0" /></label>
                <label className="customerField"><span>Outstanding Balance (₹)</span><input placeholder="0" /></label>
              </div>
            </section>

            <section className="customerCard">
              <h2>Notes</h2>
              <label className="customerField full"><span>Internal Notes</span><textarea placeholder="Internal notes about this customer..." /></label>
              <label className="customerField full"><span>Preferences</span><textarea placeholder="Customer preferences, product interests..." /></label>
              <label className="customerField full"><span>Remarks</span><input placeholder="Any special remarks..." /></label>
            </section>
          </main>

          <aside className="customerSideStack">
            <section className="customerCard profilePreview">
              <h3>Profile Preview</h3>
              <div className="previewAvatar">NA</div>
              <strong>Customer Name</strong>
              <span className="customerType returning"><i />Retail</span>
              <ul>
                <li><Phone size={15} />Not provided</li>
                <li><Mail size={15} />Not provided</li>
                <li><MapPin size={15} />Location not set</li>
                <li><ReceiptIndianRupee size={15} />UPI</li>
              </ul>
            </section>

            <section className="customerCard completenessCard">
              <div><h3>Profile Completeness</h3><strong>0%</strong></div>
              <span className="completeBar"><i /></span>
              {checklist.map((item, index) => <p key={item}><i className={index > 4 ? "done" : ""} />{item}</p>)}
            </section>

            <div className="customerSideButtons">
              <button className="primary" type="button">Add Customer</button>
              <a href="/admin/orders/create"><ReceiptIndianRupee size={16} />Create Order</a>
              <a href="/admin/customers/invoice"><FileText size={16} />Generate Invoice</a>
              <button type="button">Save Draft</button>
            </div>
          </aside>
        </div>
      </section>
    </AdminShell>
  );
}
