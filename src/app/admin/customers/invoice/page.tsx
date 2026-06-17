import { ArrowLeft, Download, Mail, MessageSquare, Printer, Share2 } from "lucide-react";
import { AdminShell } from "../../components/AdminShell";

const products = [
  { product: "Banarasi Silk Saree", sku: "BSS-0012", qty: "2", unit: "Piece", price: "₹20,000", gst: "12%", total: "₹44,800" },
  { product: "Kashmiri Pashmina Shawl", sku: "KPS-0034", qty: "1", unit: "Piece", price: "₹30,000", gst: "12%", total: "₹33,600" },
  { product: "Cotton Kurta Assorted", sku: "CKA-0154", qty: "3", unit: "Piece", price: "₹4,000", gst: "12%", total: "₹13,440" },
];

export default function CustomerInvoicePage() {
  return (
    <AdminShell activePage="customers">
      <section className="content invoiceContent customerInvoiceContent">
        <header className="orderPageHeader">
          <div>
            <a className="plainBack" href="/admin/customers"><ArrowLeft size={16} />Back</a>
            <h1>Generate Invoice</h1>
            <p>Create printable invoices using existing order and product data.</p>
          </div>
          <div className="orderActions">
            <button className="primary" type="button"><Download size={16} />Generate PDF</button>
            <button type="button"><Printer size={16} />Print Invoice</button>
            <button type="button"><Download size={16} />GST Invoice</button>
            <button type="button"><Share2 size={16} />Share</button>
            <button type="button"><MessageSquare size={16} />WhatsApp</button>
            <button type="button"><Mail size={16} />Email</button>
          </div>
        </header>

        <div className="invoiceGrid">
          <aside className="invoiceControls">
            <section className="orderCard"><h2>Invoice Details</h2><div className="twoCols"><label className="orderField"><span>Invoice Number</span><input defaultValue="INV-2026-0142" /></label><label className="orderField"><span>Invoice Date</span><input /></label><label className="orderField"><span>Due Date</span><input /></label><label className="orderField"><span>Order Reference</span><input defaultValue="ORD-4421" /></label></div></section>
            <section className="orderCard"><h2>Company Information</h2><label className="orderField full"><span>Company Name</span><input defaultValue="Shah Enterprises" /></label><label className="orderField full"><span>GST Number</span><input defaultValue="27AABCS1234M1ZK" /></label><label className="orderField full"><span>Address</span><textarea /></label></section>
            <section className="orderCard"><h2>Customer Information</h2><label className="orderField full"><span>Customer Name</span><input defaultValue="Priya Sharma" /></label><label className="orderField full"><span>Phone</span><input defaultValue="+91 98201 45678" /></label><label className="orderField full"><span>Billing / Shipping Address</span><textarea /></label></section>
            <section className="orderCard"><h2>Charges</h2><div className="twoCols"><label className="orderField"><span>Discount (%)</span><input defaultValue="5" /></label><label className="orderField"><span>Shipping (₹)</span><input defaultValue="150" /></label></div></section>
            <section className="orderCard"><h2>Invoice Template</h2><div className="templateTabs"><button className="active" type="button">Professional</button><button type="button">Clean</button><button type="button">Minimal</button></div></section>
          </aside>

          <main>
            <section className="invoicePaper customerInvoicePaper">
              <header className="paperHeader"><div><span className="paperIcon">▣</span><strong>Shah Enterprises</strong><p>27AABCS1234M1ZK</p><p>12, Commercial Complex, Mumbai 400001</p></div><div><h2>INVOICE</h2><strong># INV-2026-0142</strong><p>Date: 22 May 2026</p><p>Due: 22 Jun 2026</p></div></header>
              <div className="billGrid"><div><b>BILL TO</b><strong>Priya Sharma</strong><p>204, Andheri West, Mumbai 400053</p><p>+91 98201 45678</p></div><div><b>SHIP TO</b><strong>Priya Sharma</strong><p>204, Andheri West, Mumbai 400053</p><p>+91 98201 45678</p></div></div>
              <div className="invoiceItems"><div className="invoiceItem head"><span>PRODUCT</span><span>SKU</span><span>QTY</span><span>UNIT</span><span>PRICE</span><span>GST</span><span>TOTAL</span></div>{products.map((item) => <div className="invoiceItem" key={item.sku}><span>{item.product}</span><span>{item.sku}</span><span>{item.qty}</span><span>{item.unit}</span><span>{item.price}</span><span>{item.gst}</span><strong>{item.total}</strong></div>)}</div>
              <div className="invoiceTotals"><div><span>Subtotal</span><strong>₹82,000</strong></div><div><span>GST</span><strong>₹9,840</strong></div><div><span>Discount (5%)</span><strong>-₹4,100</strong></div><div><span>Shipping</span><strong>₹150</strong></div><div className="grand"><span>Grand Total</span><strong>₹87,890</strong></div></div>
              <footer className="paperFooter"><div><b>PAYMENT DETAILS</b><p>Bank: HDFC Bank - A/C: 5012XXXXX89</p><p>UPI: shahenterprises@upi</p></div><div><b>AUTHORISED SIGNATURE</b><span />Shah Enterprises</div></footer>
            </section>
            <div className="invoiceBottomActions"><button className="primary" type="button"><Download size={16} />Generate PDF</button><button type="button"><Printer size={16} />Print</button><button type="button"><Mail size={16} />Email</button></div>
          </main>
        </div>
      </section>
    </AdminShell>
  );
}
