import {
  ChevronDown,
  Download,
  Package,
  Plus,
  RefreshCw,
  Search,
  Shuffle,
} from "lucide-react";
import { AdminShell } from "../components/AdminShell";

const inventoryStats = [
  { label: "Total Products", value: "12", meta: "+2 this week", tone: "blue", spark: "M2 30 L18 25 L34 17 L50 17 L66 9" },
  { label: "Inventory Value", value: "₹66,68,000", meta: "Across warehouses", tone: "green", spark: "M2 25 L15 18 L28 21 L42 13 L55 8 L66 5" },
  { label: "Low Stock Items", value: "3", meta: "Need restock", tone: "amber", spark: "M2 27 L20 14 L34 4 L48 18 L60 7 L70 16" },
  { label: "Out of Stock", value: "2", meta: "Needs attention", tone: "red", spark: "M2 24 L16 12 L30 23 L48 9 L66 20" },
  { label: "Warehouse Utilization", value: "74%", meta: "Main + West", tone: "cyan", spark: "M2 27 L16 25 L30 19 L45 16 L58 10 L70 7" },
];

const inventoryRows = [
  { product: "Banarasi Silk Saree", supplier: "Rajesh Textiles", sku: "BSS-0012", category: "Textiles", warehouse: "Main Warehouse", available: "142", reserved: "18", unit: "Piece", value: "₹28,40,000", restock: "2d ago", status: "In Stock" },
  { product: "Kashmiri Pashmina Shawl", supplier: "Kashmiri Craft House", sku: "KPS-0034", category: "Textiles", warehouse: "Main Warehouse", available: "28", reserved: "5", unit: "Piece", value: "₹8,40,000", restock: "8d ago", status: "Low Stock" },
  { product: "Organic Turmeric Powder", supplier: "Bharat Spices", sku: "OTP-0056", category: "Spices", warehouse: "Cold Storage", available: "0", reserved: "0", unit: "Kg", value: "-", restock: "14d ago", status: "Out of Stock" },
  { product: "Premium Basmati Rice", supplier: "Organic India Farms", sku: "PBR-0078", category: "Food", warehouse: "Main Warehouse", available: "520", reserved: "40", unit: "Kg", value: "₹7,80,000", restock: "1d ago", status: "Overstocked" },
  { product: "Stainless Steel Kadai", supplier: "Mumbai Kitchenware", sku: "SSK-0091", category: "Kitchen", warehouse: "West Warehouse", available: "84", reserved: "12", unit: "Piece", value: "₹2,52,000", restock: "5d ago", status: "In Stock" },
  { product: "Handmade Pottery Set", supplier: "Kashmiri Craft House", sku: "HPS-0102", category: "Handicrafts", warehouse: "Main Warehouse", available: "12", reserved: "3", unit: "Set", value: "₹72,000", restock: "21d ago", status: "Low Stock" },
  { product: "Leather Wallet Set", supplier: "Premium Leather Co.", sku: "LWS-0115", category: "Accessories", warehouse: "Main Warehouse", available: "68", reserved: "8", unit: "Piece", value: "₹3,40,000", restock: "3d ago", status: "In Stock" },
  { product: "Coconut Oil Premium 500ml", supplier: "Organic India Farms", sku: "COP-0128", category: "Health", warehouse: "Cold Storage", available: "240", reserved: "20", unit: "Bottle", value: "₹3,84,000", restock: "4d ago", status: "In Stock" },
  { product: "Wooden Carved Frame", supplier: "Rajesh Textiles", sku: "WCF-0141", category: "Decor", warehouse: "West Warehouse", available: "0", reserved: "0", unit: "Piece", value: "-", restock: "30d ago", status: "Out of Stock" },
  { product: "Cotton Kurta Assorted", supplier: "Rajesh Textiles", sku: "CKA-0154", category: "Apparel", warehouse: "Main Warehouse", available: "186", reserved: "24", unit: "Piece", value: "₹7,44,000", restock: "2d ago", status: "In Stock" },
  { product: "Brass Diya Set", supplier: "Mumbai Kitchenware", sku: "BDS-0167", category: "Religious", warehouse: "Main Warehouse", available: "8", reserved: "2", unit: "Set", value: "₹32,000", restock: "18d ago", status: "Low Stock" },
  { product: "Rose Water 500ml", supplier: "Bharat Spices", sku: "RW-0180", category: "Beauty", warehouse: "Cold Storage", available: "320", reserved: "15", unit: "Bottle", value: "₹3,84,000", restock: "1d ago", status: "In Stock" },
];

export default function InventoryPage() {
  return (
    <AdminShell activePage="inventory">
      <section className="content inventoryContent">
        <header className="inventoryHero">
          <div>
            <h1>Inventory</h1>
            <p>Manage stock levels, product movement, and inventory health.</p>
          </div>
          <div className="inventoryActions">
            <a className="primary" href="/admin/inventory/add-stock"><Plus size={16} />Add Stock</a>
            <a href="/admin/inventory/transfer-inventory"><Shuffle size={16} />Transfer Inventory</a>
            <button type="button"><Download size={16} />Export Report</button>
            <button type="button"><RefreshCw size={16} />Stock Adjustment</button>
          </div>
        </header>

        <section className="inventoryStatsGrid" aria-label="Inventory metrics">
          {inventoryStats.map((stat) => (
            <article className={`inventoryStatCard ${stat.tone}`} key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <svg viewBox="0 0 72 38" aria-hidden="true"><path d={stat.spark} /></svg>
              <p>{stat.meta}</p>
            </article>
          ))}
        </section>

        <section className="inventoryFilters">
          <label>
            <Search size={17} />
            <input placeholder="Search inventory..." />
          </label>
          <button type="button">All <ChevronDown size={14} /></button>
          <button type="button">All <ChevronDown size={14} /></button>
          <button type="button">All <ChevronDown size={14} /></button>
          <span>12 items</span>
        </section>

        <section className="inventoryTableWrap">
          <div className="inventoryTable">
            <div className="inventoryRow inventoryHead">
              <span>Product</span>
              <span>SKU</span>
              <span>Category</span>
              <span>Warehouse</span>
              <span>Available</span>
              <span>Reserved</span>
              <span>Unit</span>
              <span>Value</span>
              <span>Last Restock</span>
              <span>Status</span>
            </div>
            {inventoryRows.map((item) => (
              <div className="inventoryRow" key={item.sku}>
                <div className="inventoryProductCell">
                  <span><Package size={14} /></span>
                  <div>
                    <strong>{item.product}</strong>
                    <small>{item.supplier}</small>
                  </div>
                </div>
                <span className="monoText">{item.sku}</span>
                <span>{item.category}</span>
                <span>{item.warehouse}</span>
                <strong className={item.available === "0" ? "stockDanger" : Number(item.available) < 30 ? "stockWarn" : ""}>{item.available}</strong>
                <span>{item.reserved}</span>
                <span>{item.unit}</span>
                <strong>{item.value}</strong>
                <span>{item.restock}</span>
                <span className={`inventoryStatus ${item.status.toLowerCase().replaceAll(" ", "-")}`}><i />{item.status}</span>
              </div>
            ))}
          </div>
        </section>
      </section>
    </AdminShell>
  );
}
