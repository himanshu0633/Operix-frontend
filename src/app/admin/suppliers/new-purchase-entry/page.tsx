import {
  ArrowLeft,
  Bot,
  Box,
  ChevronDown,
  ClipboardList,
  CopyCheck,
  ImagePlus,
  PackagePlus,
  Plus,
  TrendingUp,
  Upload,
  Zap,
} from "lucide-react";
import { AdminShell } from "../../components/AdminShell";

const paymentMethods = ["Select method", "Bank Transfer", "UPI", "Cash", "Cheque", "Credit"];
const purchaseStatuses = ["Pending", "Received", "Partial", "Cancelled"];
const warehouses = ["All", "Main Warehouse", "Mumbai Store", "Delhi Hub", "Bengaluru Hub"];
const aiActions = [
  { title: "Suggest Pricing", text: "Based on last purchase", icon: TrendingUp },
  { title: "Detect Duplicates", text: "Check existing entries", icon: CopyCheck },
  { title: "Recommend Reorder Levels", text: "Predict stock needs", icon: Box },
  { title: "Predict Stock Usage", text: "AI demand forecast", icon: Zap },
];

export default function NewPurchaseEntryPage() {
  return (
    <AdminShell activePage="suppliers">
      <section className="content purchaseEntryContent">
        <header className="supplierFormHeader">
          <div>
            <a className="backButton" href="/admin/suppliers" aria-label="Back to suppliers">
              <ArrowLeft size={16} />
            </a>
            <div>
              <h1>New Purchase Entry</h1>
              <p>Create a supplier purchase transaction and update inventory.</p>
            </div>
          </div>
          <div className="supplierFormActions">
            <button type="button">Save Draft</button>
            <button type="button">Preview Entry</button>
            <button className="primary" type="button">Create Entry</button>
          </div>
        </header>

        <section className="purchaseSummaryCards" aria-label="Purchase summary">
          <article><span>Supplier</span><strong>Not selected</strong></article>
          <article><span>Products</span><strong>1 items</strong></article>
          <article><span>Total Quantity</span><strong>2 units</strong></article>
          <article><span>Purchase Amount</span><strong className="accentAmount">₹1,680</strong></article>
        </section>

        <div className="purchaseEntryGrid">
          <main className="supplierFormStack">
            <section className="supplierFormCard">
              <div className="supplierSectionTitle plain">
                <div>
                  <h2>Supplier</h2>
                  <p>Select an existing supplier or add a new one.</p>
                </div>
              </div>
              <label className="supplierField full">
                <span>SELECT SUPPLIER *</span>
                <select defaultValue="">
                  <option value="" disabled>Search and select supplier...</option>
                  <option>Rajesh Textiles</option>
                  <option>Bharat Spices</option>
                  <option>Mumbai Kitchenware</option>
                  <option>Kerala Ayurveda Ltd.</option>
                </select>
              </label>
            </section>

            <section className="supplierFormCard">
              <div className="supplierSectionTitle plain">
                <div>
                  <h2>Purchase Information</h2>
                  <p>Invoice details, dates, and logistics.</p>
                </div>
              </div>
              <div className="supplierFieldGrid">
                <label className="supplierField">
                  <span>INVOICE NUMBER</span>
                  <input placeholder="PE-2026-1858" />
                </label>
                <label className="supplierField">
                  <span>PURCHASE DATE</span>
                  <input placeholder="DD/MM/YYYY" />
                </label>
                <label className="supplierField">
                  <span>EXPECTED DELIVERY</span>
                  <input placeholder="DD/MM/YYYY" />
                </label>
                <label className="supplierField">
                  <span>WAREHOUSE</span>
                  <select defaultValue="All">
                    {warehouses.map((warehouse) => <option key={warehouse}>{warehouse}</option>)}
                  </select>
                </label>
                <label className="supplierField">
                  <span>PAYMENT METHOD</span>
                  <select defaultValue="Select method">
                    {paymentMethods.map((method) => <option key={method}>{method}</option>)}
                  </select>
                </label>
                <label className="supplierField">
                  <span>PURCHASE STATUS</span>
                  <select defaultValue="Pending">
                    {purchaseStatuses.map((status) => <option key={status}>{status}</option>)}
                  </select>
                </label>
              </div>
            </section>

            <section className="supplierFormCard">
              <div className="supplierSectionTitle plain">
                <div>
                  <h2>Product Media</h2>
                  <p>Upload product images for your listing and website.</p>
                </div>
              </div>
              <div className="purchaseUploadBox">
                <ImagePlus size={22} />
                <strong>Drag & drop images here</strong>
                <span>or click to browse - PNG, JPG, WEBP up to 8MB each</span>
              </div>
            </section>

            <section className="supplierFormCard productLineCard">
              <div className="purchaseProductsHead">
                <div>
                  <h2>Products</h2>
                  <p>Add the purchased items. Auto-calculates totals including GST.</p>
                </div>
                <button type="button"><Plus size={15} />Add Row</button>
              </div>

              <div className="purchaseProductTable">
                <div className="purchaseProductRow purchaseProductHead">
                  <span>#</span>
                  <span>PRODUCT / DESCRIPTION</span>
                  <span>QTY</span>
                  <span>UNIT</span>
                  <span>PRICE (₹)</span>
                  <span>GST %</span>
                  <span>DISC %</span>
                  <span>TOTAL</span>
                </div>
                <div className="purchaseProductRow">
                  <span>1</span>
                  <div className="productDescriptionCell">
                    <input defaultValue="whatever" aria-label="Product name" />
                    <small>just for you info</small>
                  </div>
                  <input className="tinyInput" defaultValue="1" aria-label="Quantity" />
                  <select className="tinySelect" defaultValue=""><option value="" /></select>
                  <div className="moneyMini"><b>₹</b><input defaultValue="2000" aria-label="Price" /></div>
                  <select className="tinySelect" defaultValue=""><option value="" /></select>
                  <div className="percentMini"><input defaultValue="25" aria-label="Discount" /><b>%</b></div>
                  <strong>₹1,680</strong>
                </div>
              </div>
              <button className="addAnotherProduct" type="button"><Plus size={16} />Add Another Product</button>
            </section>

            <section className="supplierFormCard">
              <div className="supplierSectionTitle plain">
                <div>
                  <h2>Notes & Attachments</h2>
                  <p>Internal notes and supporting documents.</p>
                </div>
              </div>
              <label className="supplierField full notesOnly">
                <span>PURCHASE NOTES</span>
                <textarea placeholder="Any notes about this purchase batch, quality checks, or special terms..." />
              </label>
              <div className="attachmentDrop">
                <Upload size={16} />
                <strong>Drop invoice, GST bill, or receipt here</strong>
                <span>PDF, PNG, JPG up to 10MB</span>
              </div>
            </section>
          </main>

          <aside className="purchaseRail">
            <section className="supplierRailCard">
              <h3>TRANSACTION SUMMARY</h3>
              <div className="summaryList">
                <span>Products <b>1</b></span>
                <span>Total Quantity <b>2 units</b></span>
                <span>Subtotal <b>₹2,000</b></span>
                <span>GST Total <b className="dueAmount">₹240</b></span>
                <span>Discounts <b className="clearAmount">-₹500</b></span>
              </div>
              <div className="summaryTotal"><strong>Total Payable</strong><b>₹1,740</b></div>
            </section>

            <section className="supplierRailCard">
              <h3>INVENTORY IMPACT</h3>
              <div className="summaryList">
                <span>Items to add <b>1 SKUs</b></span>
                <span>Total units <b className="clearAmount">+2</b></span>
                <span>Warehouse <b>Not selected</b></span>
                <span>Inventory value <b>₹2,000</b></span>
              </div>
            </section>

            <section className="supplierRailCard">
              <h3>ACCOUNTING IMPACT</h3>
              <div className="summaryList">
                <span>Supplier Payable <b className="dueAmount">₹1,740</b></span>
                <span>Purchase Expense <b>₹2,000</b></span>
                <span>GST Input Credit <b className="clearAmount">₹240</b></span>
              </div>
              <p className="ledgerNote">Ledger will be updated automatically after saving.</p>
            </section>

            <section className="supplierRailCard">
              <h3>AI ASSISTANCE</h3>
              <div className="purchaseAiList">
                {aiActions.map((action) => (
                  <button type="button" key={action.title}>
                    <action.icon size={16} />
                    <span>
                      <strong>{action.title}</strong>
                      <small>{action.text}</small>
                    </span>
                  </button>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>
    </AdminShell>
  );
}
