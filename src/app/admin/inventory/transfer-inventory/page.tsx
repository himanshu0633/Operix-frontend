import {
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  FileText,
  Search,
} from "lucide-react";
import { AdminShell } from "../../components/AdminShell";

export default function TransferInventoryPage() {
  return (
    <AdminShell activePage="inventory">
      <section className="content inventoryFormContent">
        <a className="inventoryBackLink" href="/admin/inventory"><ArrowLeft size={14} />Back to Inventory</a>
        <header className="inventoryFormHeader">
          <div>
            <h1>Transfer Inventory</h1>
            <p>Move products between warehouses and locations.</p>
          </div>
          <div className="inventoryFormActions">
            <button type="button">Save Draft</button>
            <button type="button"><FileText size={15} />Generate Transfer Slip</button>
            <button className="primary" type="button">Transfer Stock</button>
          </div>
        </header>

        <div className="inventoryFormGrid transferGrid">
          <main className="inventoryFormStack">
            <section className="inventoryFormCard transferCard">
              <h2>Transfer Details</h2>
              <label className="inventoryField full">
                <span>Select Product</span>
                <div className="searchSelect">
                  <Search size={16} />
                  <select defaultValue="">
                    <option value="" disabled>Search product...</option>
                    <option>Rose Water 500ml</option>
                    <option>Banarasi Silk Saree</option>
                  </select>
                </div>
              </label>

              <div className="inventoryFieldGrid transferFields">
                <label className="inventoryField">
                  <span>Transfer Quantity</span>
                  <input placeholder="0" />
                </label>
                <label className="inventoryField">
                  <span>Unit</span>
                  <input />
                </label>
                <div className="warehouseTransferLine">
                  <label className="inventoryField">
                    <span>Source Warehouse</span>
                    <input />
                  </label>
                  <button type="button" aria-label="Transfer direction"><ArrowRight size={17} /></button>
                  <label className="inventoryField">
                    <span>Destination Warehouse</span>
                    <input />
                  </label>
                </div>
                <label className="inventoryField dateField">
                  <span>Transfer Date</span>
                  <input />
                </label>
                <label className="inventoryField full">
                  <span>Transfer Notes</span>
                  <textarea placeholder="Add notes about this transfer..." />
                </label>
              </div>
            </section>
          </main>

          <aside className="inventoryRail">
            <section className="inventoryRailCard movementCard">
              <h3>Movement Summary</h3>
              <div className="movementBlock">
                <span>SOURCE — Main Warehouse</span>
                <p>Stock Before <b>-</b></p>
                <p>Stock After <b className="stockDanger">-</b></p>
              </div>
              <div className="movementArrow"><ArrowRight size={17} /></div>
              <div className="movementBlock">
                <span>DESTINATION — West Warehouse</span>
                <p>Stock Before <b>-</b></p>
                <p>Stock After <b className="stockGood">-</b></p>
              </div>
            </section>

            <section className="inventoryRailCard">
              <h3>Transfer Info</h3>
              <div className="inventorySummaryList">
                <span>Product <b>-</b></span>
                <span>Quantity <b>-</b></span>
                <span>From <b>Main Warehouse</b></span>
                <span>To <b>West Warehouse</b></span>
                <span>Date <b>Not set</b></span>
              </div>
            </section>

            <div className="inventoryRailActions">
              <button className="primary" type="button">Transfer Stock</button>
              <button type="button"><ClipboardList size={15} />Generate Transfer Slip</button>
              <button type="button">Save Draft</button>
            </div>
          </aside>
        </div>
      </section>
    </AdminShell>
  );
}
