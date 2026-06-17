import {
  ArrowLeft,
  Box,
  Globe2,
  Search,
  Store,
  ToggleRight,
  Upload,
  Warehouse,
} from "lucide-react";
import { AdminShell } from "../../components/AdminShell";

export default function AddStockPage() {
  return (
    <AdminShell activePage="inventory">
      <section className="content inventoryFormContent">
        <a className="inventoryBackLink" href="/admin/inventory"><ArrowLeft size={14} />Back to Inventory</a>
        <header className="inventoryFormHeader">
          <div>
            <h1>Add Stock</h1>
            <p>Restock existing products and update inventory availability.</p>
          </div>
          <div className="inventoryFormActions">
            <button type="button">Save Draft</button>
            <button className="primary" type="button">Add Stock</button>
          </div>
        </header>

        <div className="inventoryFormGrid">
          <main className="inventoryFormStack">
            <section className="inventoryFormCard">
              <h2>Product Selection</h2>
              <label className="inventoryField full">
                <span>Search Existing Product</span>
                <div className="searchSelect">
                  <Search size={16} />
                  <select defaultValue="">
                    <option value="" disabled>Search product by name or SKU...</option>
                    <option>Banarasi Silk Saree</option>
                    <option>Rose Water 500ml</option>
                  </select>
                </div>
              </label>
            </section>

            <section className="inventoryFormCard">
              <h2>Stock Information</h2>
              <div className="inventoryFieldGrid">
                <label className="inventoryField">
                  <span>Quantity Added</span>
                  <input placeholder="0" />
                </label>
                <label className="inventoryField">
                  <span>Unit Type</span>
                  <input />
                </label>
                <label className="inventoryField">
                  <span>Warehouse</span>
                  <input />
                </label>
                <label className="inventoryField">
                  <span>Batch Number</span>
                  <input placeholder="e.g. BT-2026-01" />
                </label>
                <label className="inventoryField">
                  <span>Expiry Date</span>
                  <input />
                </label>
                <label className="inventoryField">
                  <span>Supplier</span>
                  <input placeholder="Supplier name" />
                </label>
                <label className="inventoryField">
                  <span>Purchase Price (₹)</span>
                  <input placeholder="0" />
                </label>
              </div>
            </section>

            <section className="inventoryFormCard">
              <h2>Inventory Settings</h2>
              <div className="inventoryFieldGrid single">
                <label className="inventoryField thresholdField">
                  <span>Low Stock Threshold</span>
                  <input placeholder="20" />
                </label>
                <label className="inventoryField full">
                  <span>Restock Notes</span>
                  <textarea placeholder="Add notes about this restock..." />
                </label>
              </div>
              <div className="inventoryToggleRows">
                <div>
                  <span><strong>Publish to Website</strong><small>Make this stock available on your online store</small></span>
                  <button className="toggleOn" type="button" aria-label="Publish to website"><ToggleRight size={24} /></button>
                </div>
                <div>
                  <span><strong>Available for Sale</strong><small>Allow customers to purchase this item</small></span>
                  <button className="toggleOn" type="button" aria-label="Available for sale"><ToggleRight size={24} /></button>
                </div>
              </div>
            </section>

            <section className="inventoryFormCard">
              <h2>Attachments</h2>
              <div className="inventoryUploadBox">
                <Upload size={22} />
                <strong>Upload Documents</strong>
                <span>Purchase invoice, receipt, or product images</span>
                <button type="button">Browse Files</button>
              </div>
            </section>
          </main>

          <aside className="inventoryRail">
            <section className="inventoryRailCard">
              <h3>Inventory Summary</h3>
              <div className="inventorySummaryList">
                <span>Current Stock <b>-</b></span>
                <span>Quantity Adding <b className="stockGood">-</b></span>
                <span>New Total Stock <b className="stockInfo">-</b></span>
                <span>Inventory Value Added <b>-</b></span>
              </div>
            </section>
            <section className="inventoryRailCard">
              <h3>Warehouse Impact</h3>
              <div className="warehouseMini"><Warehouse size={15} />Main Warehouse</div>
              <p>Stock update after adding</p>
              <div className="tinyProgress"><span /></div>
            </section>
            <section className="inventoryRailCard">
              <h3>Website Availability</h3>
              <div className="inventorySummaryList compact">
                <span><em><Globe2 size={14} />Published to store</em><b className="stockGood">Yes</b></span>
                <span><em><Store size={14} />Available for sale</em><b className="stockGood">Yes</b></span>
              </div>
            </section>
            <div className="inventoryRailActions">
              <button className="primary" type="button">Add Stock</button>
              <button type="button">Publish to Website</button>
              <a href="/admin/inventory">View Inventory</a>
            </div>
          </aside>
        </div>
      </section>
    </AdminShell>
  );
}
