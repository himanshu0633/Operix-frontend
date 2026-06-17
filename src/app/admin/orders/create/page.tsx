import { ArrowLeft, Copy, FileText, MessageSquare, Plus, Trash2, UserRound } from "lucide-react";
import { AdminShell } from "../../components/AdminShell";

const channels = ["Online", "Offline", "Instagram", "WhatsApp", "Direct Sale"];
const payments = ["Cash", "UPI", "Card", "Bank Transfer", "COD"];

export default function CreateOrderPage() {
  return (
    <AdminShell activePage="orders">
      <section className="content orderFormContent">
        <header className="orderPageHeader">
          <div>
            <a className="plainBack" href="/admin/orders"><ArrowLeft size={16} />Back to Orders</a>
            <h1>Create Order</h1>
            <p>Create manual customer orders and process sales transactions.</p>
          </div>
          <div className="orderActions">
            <button type="button">Save Draft</button>
            <a href="/admin/orders/invoice"><FileText size={16} />Generate Invoice</a>
            <button type="button"><MessageSquare size={16} />WhatsApp Confirmation</button>
            <button className="primary" type="button">Create Order</button>
          </div>
        </header>

        <div className="orderFormGrid">
          <main className="orderFormStack">
            <section className="orderCard">
              <h2>Customer Information</h2>
              <div className="pillTabs">{channels.map((item, index) => <button className={index === 0 ? "active" : ""} type="button" key={item}>{item}</button>)}</div>
              <label className="orderField full"><span>Select Existing Customer</span><div className="inputWithIcon"><UserRound size={16} /><input placeholder="Search customer..." /></div></label>
              <div className="twoCols">
                <label className="orderField"><span>Phone Number</span><input placeholder="+91 00000 00000" /></label>
                <label className="orderField"><span>Email</span><input placeholder="customer@email.com" /></label>
              </div>
              <label className="orderField full"><span>Delivery Address</span><textarea placeholder="Full delivery address..." /></label>
            </section>

            <section className="orderCard">
              <h2>Products</h2>
              <div className="productLineHead"><span>Product</span><span>Qty</span><span>Unit</span><span>Price</span><span>Disc %</span><span>GST %</span><span>Total</span><span /></div>
              <div className="productLine">
                <input placeholder="Search product..." /><input defaultValue="1" /><input defaultValue="Piece" /><input defaultValue="0" /><input defaultValue="0" /><input defaultValue="12" />
                <strong>₹0</strong>
                <div><button type="button" aria-label="Duplicate"><Copy size={15} /></button><button type="button" aria-label="Delete"><Trash2 size={15} /></button></div>
              </div>
              <button className="addLineButton" type="button"><Plus size={16} />Add Product</button>
            </section>

            <section className="orderCard">
              <h2>Payment Information</h2>
              <div className="pillTabs">{payments.map((item, index) => <button className={index === 1 ? "active" : ""} type="button" key={item}>{item}</button>)}</div>
              <div className="twoCols">
                <label className="orderField"><span>Payment Status</span><input /></label>
                <label className="orderField"><span>Transaction ID</span><input placeholder="UPI / Reference ID" /></label>
              </div>
              <div className="toggleRow"><div><strong>Cash on Delivery</strong><span>Customer pays at delivery</span></div><button type="button" aria-label="Cash on delivery" /></div>
            </section>

            <section className="orderCard">
              <h2>Shipping Information</h2>
              <div className="twoCols">
                <label className="orderField"><span>Courier Partner</span><input placeholder="e.g. DHL, BlueDart..." /></label>
                <label className="orderField"><span>Delivery Charges (₹)</span><input placeholder="0" /></label>
              </div>
              <label className="orderField full"><span>Delivery Notes</span><textarea placeholder="Special delivery instructions..." /></label>
            </section>

            <section className="orderCard">
              <h2>Order Notes</h2>
              <label className="orderField full"><span>Customer Notes</span><textarea placeholder="Visible to customer..." /></label>
              <label className="orderField full"><span>Internal Remarks</span><textarea placeholder="Internal team notes..." /></label>
            </section>
          </main>

          <aside className="orderSideStack">
            <section className="orderCard summaryCard"><h3>Order Summary</h3><dl><div><dt>Items</dt><dd>1 product</dd></div><div><dt>Subtotal</dt><dd>₹0</dd></div><div><dt>Discount</dt><dd>-₹0</dd></div><div><dt>GST</dt><dd>+₹0</dd></div><div><dt>Delivery</dt><dd>₹0</dd></div><div className="total"><dt>Total</dt><dd>₹0</dd></div></dl></section>
            <section className="orderCard compactCard"><h3>Payment Status</h3><div><span>Method</span><strong>UPI</strong></div><div><span>Status</span><strong className="greenText">Paid</strong></div></section>
            <section className="orderCard compactCard"><h3>Customer</h3><p>No customer selected</p></section>
            <div className="sideButtons"><button className="primary" type="button">Create Order</button><a href="/admin/orders/invoice"><FileText size={16} />Generate Invoice</a><button type="button"><MessageSquare size={16} />WhatsApp Confirmation</button><button type="button">Save Draft</button></div>
          </aside>
        </div>
      </section>
    </AdminShell>
  );
}
