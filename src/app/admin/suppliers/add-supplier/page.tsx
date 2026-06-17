import {
  ArrowLeft,
  BadgeIndianRupee,
  Building2,
  CheckSquare,
  CreditCard,
  FileText,
  Mail,
  MapPin,
  Phone,
  Tag,
  User,
} from "lucide-react";
import { AdminShell } from "../../components/AdminShell";

const states = ["All", "Maharashtra", "Delhi", "Karnataka", "Gujarat", "Kerala", "Rajasthan", "Tamil Nadu"];
const paymentTerms = ["Select terms", "Net 30", "Net 15", "Immediate / COD", "Net 60", "Net 90", "Advance Payment"];
const categories = ["Select category", "Textiles", "Food & Spices", "Kitchen", "Handicrafts", "Organic", "Leather", "Apparel", "Ayurveda", "Electronics", "Stationery", "Raw Materials", "Other"];
const checklist = ["Supplier name", "Contact person", "Phone number", "GST number", "Payment terms", "Banking details"];

export default function AddSupplierPage() {
  return (
    <AdminShell activePage="suppliers">
      <section className="content supplierFormContent">
        <header className="supplierFormHeader">
          <div>
            <a className="backButton" href="/admin/suppliers" aria-label="Back to suppliers">
              <ArrowLeft size={16} />
            </a>
            <div>
              <h1>Add Supplier</h1>
              <p>Create a new supplier profile and set up procurement details.</p>
            </div>
          </div>
          <div className="supplierFormActions">
            <button type="button">Save Draft</button>
            <button className="primary" type="button">Save Supplier</button>
          </div>
        </header>

        <div className="supplierFormGrid">
          <main className="supplierFormStack">
            <section className="supplierFormCard">
              <div className="supplierSectionTitle">
                <span><Building2 size={17} /></span>
                <div>
                  <h2>Basic Information</h2>
                  <p>Core supplier identity and legal details.</p>
                </div>
              </div>
              <div className="supplierFieldGrid">
                <label className="supplierField">
                  <span>SUPPLIER / BUSINESS NAME *</span>
                  <input placeholder="e.g. Rajesh Textiles Pvt. Ltd." />
                </label>
                <label className="supplierField">
                  <span>COMPANY NAME</span>
                  <input placeholder="Legal entity name" />
                </label>
                <label className="supplierField">
                  <span>CONTACT PERSON *</span>
                  <input placeholder="Primary contact name" />
                </label>
                <label className="supplierField">
                  <span>GST NUMBER</span>
                  <input placeholder="27AABCR1234M1Z5" />
                </label>
                <label className="supplierField full">
                  <span>SUPPLIER DESCRIPTION</span>
                  <textarea placeholder="What does this supplier provide? Any special notes..." />
                </label>
              </div>
            </section>

            <section className="supplierFormCard">
              <div className="supplierSectionTitle">
                <span><Phone size={17} /></span>
                <div>
                  <h2>Contact Details</h2>
                  <p>Reach out and location information.</p>
                </div>
              </div>
              <div className="supplierFieldGrid">
                <label className="supplierField phoneField">
                  <span>PHONE NUMBER *</span>
                  <div><b>+91</b><input placeholder="+91 98201 45678" /></div>
                </label>
                <label className="supplierField">
                  <span>EMAIL ADDRESS</span>
                  <input placeholder="supplier@company.in" />
                </label>
                <label className="supplierField full">
                  <span>STREET ADDRESS</span>
                  <input placeholder="Shop / office address" />
                </label>
                <label className="supplierField">
                  <span>CITY</span>
                  <input placeholder="Mumbai" />
                </label>
                <label className="supplierField">
                  <span>STATE</span>
                  <select defaultValue="All">
                    {states.map((state) => <option key={state}>{state}</option>)}
                  </select>
                </label>
                <label className="supplierField full">
                  <span>PIN CODE</span>
                  <input placeholder="400001" />
                </label>
              </div>
            </section>

            <section className="supplierFormCard">
              <div className="supplierSectionTitle">
                <span><Tag size={17} /></span>
                <div>
                  <h2>Business & Pricing Details</h2>
                  <p>Payment terms, credit limit, and default pricing.</p>
                </div>
              </div>
              <div className="supplierFieldGrid">
                <label className="supplierField">
                  <span>PAYMENT TERMS</span>
                  <select defaultValue="Select terms">
                    {paymentTerms.map((term) => <option key={term}>{term}</option>)}
                  </select>
                </label>
                <label className="supplierField moneyInput">
                  <span>CREDIT LIMIT (₹)</span>
                  <div><b>₹</b><input placeholder="500000" /></div>
                </label>
                <label className="supplierField">
                  <span>SUPPLIER CATEGORY</span>
                  <select defaultValue="Select category">
                    {categories.map((category) => <option key={category}>{category}</option>)}
                  </select>
                </label>
                <label className="supplierField moneyInput">
                  <span>DEFAULT BUY PRICE (₹)</span>
                  <div><b>₹</b><input placeholder="0.00" /></div>
                  <small>Used as default price in purchase entries.</small>
                </label>
              </div>
            </section>

            <section className="supplierFormCard">
              <div className="supplierSectionTitle">
                <span><CreditCard size={17} /></span>
                <div>
                  <h2>Banking Details</h2>
                  <p>For payment processing and reconciliation.</p>
                </div>
              </div>
              <div className="supplierFieldGrid">
                <label className="supplierField">
                  <span>BANK ACCOUNT NUMBER</span>
                  <input placeholder="00000012345678" />
                </label>
                <label className="supplierField">
                  <span>IFSC CODE</span>
                  <input placeholder="SBIN0001234" />
                </label>
                <label className="supplierField full">
                  <span>UPI ID</span>
                  <input placeholder="supplier@upi" />
                  <small>For instant payment via BHIM, GPay, PhonePe.</small>
                </label>
              </div>
            </section>

            <section className="supplierFormCard">
              <div className="supplierSectionTitle">
                <span><FileText size={17} /></span>
                <div>
                  <h2>Notes & Reminders</h2>
                  <p>Internal notes visible only to your team.</p>
                </div>
              </div>
              <label className="supplierField full notesOnly">
                <textarea placeholder="Special pricing agreements, delivery preferences, quality notes..." />
              </label>
            </section>
          </main>

          <aside className="supplierRail">
            <section className="supplierRailCard">
              <h3>SUPPLIER PREVIEW</h3>
              <div className="supplierPreview">
                <span>S</span>
                <div>
                  <strong>Supplier Name</strong>
                  <small>Company not set</small>
                </div>
              </div>
              <div className="previewLines">
                <span><User size={13} />Contact person</span>
                <span><Phone size={13} />Phone number</span>
                <span><Mail size={13} />Email address</span>
                <span><MapPin size={13} />GST number</span>
              </div>
            </section>

            <section className="supplierRailCard">
              <div className="completionHead">
                <h3>PROFILE COMPLETENESS</h3>
                <b>0%</b>
              </div>
              <div className="completionBar" />
              <div className="supplierChecklist">
                {checklist.map((item) => (
                  <span key={item}><CheckSquare size={14} />{item}</span>
                ))}
              </div>
            </section>

            <section className="supplierRailCard impactCard">
              <h3>PAYMENT SETUP</h3>
              <p>Credit terms and banking details will appear in purchase entries once saved.</p>
              <div>
                <BadgeIndianRupee size={15} />
                <span>Default payable account</span>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </AdminShell>
  );
}
