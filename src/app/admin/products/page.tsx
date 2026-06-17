import {
  AlertTriangle,
  ChevronDown,
  Download,
  Globe2,
  Package,
  Plus,
  Search,
  Upload,
  XCircle,
} from "lucide-react";
import { AdminShell } from "../components/AdminShell";

const productStats = [
  { label: "Total Products", value: "10", meta: "Across all categories", icon: Package, tone: "blue" },
  { label: "Published", value: "7", meta: "3 in draft", icon: Globe2, tone: "green" },
  { label: "Low Stock Alerts", value: "2", meta: "Below reorder threshold", icon: AlertTriangle, tone: "amber" },
  { label: "Out of Stock", value: "2", meta: "Needs restocking", icon: XCircle, tone: "red" },
];

const products = [
  { initials: "BS", name: "Banarasi Silk Saree", sku: "SKU-BSS-001", category: "Textiles", price: "₹8,500", cost: "Cost ₹5,200", stock: "48", inventory: "In Stock", website: "Published", sales: 124, updated: "2h ago", tone: "blue", salesWidth: "24%" },
  { initials: "KP", name: "Kashmiri Pashmina Shawl", sku: "SKU-KPS-002", category: "Apparel", price: "₹12,200", cost: "Cost ₹8,400", stock: "7", inventory: "Low Stock", website: "Published", sales: 56, updated: "5h ago", tone: "green", salesWidth: "10%" },
  { initials: "SP", name: "Steel Pressure Cooker 5L", sku: "SKU-SPC-003", category: "Kitchen", price: "₹2,890", cost: "Cost ₹1,650", stock: "0", inventory: "Out of Stock", website: "Draft", sales: 302, updated: "1d ago", tone: "gray", salesWidth: "18%" },
  { initials: "OT", name: "Organic Turmeric Powder", sku: "SKU-OTP-004", category: "Spices & Food", price: "₹450", cost: "Cost ₹180", stock: "320", inventory: "In Stock", website: "Published", sales: 870, updated: "3h ago", tone: "amber", salesWidth: "70%" },
  { initials: "BD", name: "Brass Deity Idol Set", sku: "SKU-BDI-005", category: "Home Decor", price: "₹3,200", cost: "Cost ₹1,800", stock: "67", inventory: "In Stock", website: "Published", sales: 89, updated: "6h ago", tone: "red", salesWidth: "8%" },
  { initials: "KC", name: "Khadi Cotton Kurta", sku: "SKU-KCK-006", category: "Apparel", price: "₹1,800", cost: "Cost ₹900", stock: "8", inventory: "Low Stock", website: "Draft", sales: 143, updated: "12h ago", tone: "cyan", salesWidth: "15%" },
  { initials: "AH", name: "Ayurvedic Hair Oil 200ml", sku: "SKU-AHO-007", category: "Beauty & Care", price: "₹680", cost: "Cost ₹280", stock: "145", inventory: "In Stock", website: "Published", sales: 456, updated: "1h ago", tone: "green", salesWidth: "42%" },
  { initials: "HL", name: "Handmade Leather Wallet", sku: "SKU-HLW-008", category: "Accessories", price: "₹1,400", cost: "Cost ₹650", stock: "28", inventory: "In Stock", website: "Published", sales: 67, updated: "2d ago", tone: "blue", salesWidth: "7%" },
  { initials: "TD", name: "Traditional Dhokra Lamp", sku: "SKU-TDL-009", category: "Home Decor", price: "₹2,100", cost: "Cost ₹1,100", stock: "0", inventory: "Out of Stock", website: "Draft", sales: 34, updated: "3d ago", tone: "amber", salesWidth: "3%" },
  { initials: "CC", name: "Cold Pressed Coconut Oil", sku: "SKU-CCO-010", category: "Spices & Food", price: "₹340", cost: "Cost ₹140", stock: "256", inventory: "In Stock", website: "Published", sales: 1204, updated: "30m ago", tone: "green", salesWidth: "86%" },
];

export default function ProductsPage() {
  return (
    <AdminShell activePage="products">
      <section className="content productsContent">
        <div className="productsHero">
          <div>
            <h1>Products</h1>
            <p>Manage inventory, pricing, and publishing across all channels.</p>
          </div>
          <div className="productActions">
            <button type="button"><Download size={16} />Export</button>
            <button type="button"><Upload size={16} />Import CSV</button>
            <a href="/admin/products/add-product"><Plus size={17} />Add Product</a>
          </div>
        </div>

        <section className="productStatsGrid" aria-label="Product metrics">
          {productStats.map((stat) => (
            <article className={`productStatCard ${stat.tone}`} key={stat.label}>
              <div>
                <stat.icon size={19} />
              </div>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <p>{stat.meta}</p>
            </article>
          ))}
        </section>

        <section className="productFilters">
          <label>
            <Search size={17} />
            <input placeholder="Search products or SKU..." />
          </label>
          <button type="button">Category <ChevronDown size={14} /></button>
          <button type="button">Inventory <ChevronDown size={14} /></button>
          <button type="button">Website <ChevronDown size={14} /></button>
          <span>10 of 10 products</span>
          <button className="sortButton" type="button">↕ Sort</button>
        </section>

        <section className="productsTableWrap">
          <div className="productsTable">
            <div className="productRow productHead">
              <span className="checkBox" />
              <span>PRODUCT</span>
              <span>CATEGORY</span>
              <span>PRICE</span>
              <span>STOCK</span>
              <span>INVENTORY</span>
              <span>WEBSITE</span>
              <span>SALES</span>
              <span>UPDATED</span>
            </div>

            {products.map((product) => (
              <div className="productRow" key={product.sku}>
                <span className="checkBox" />
                <div className="productCell">
                  <span className={`productAvatar ${product.tone}`}>{product.initials}</span>
                  <div>
                    <strong>{product.name}</strong>
                    <small>{product.sku}</small>
                  </div>
                </div>
                <span>{product.category}</span>
                <div className="priceCell">
                  <strong>{product.price}</strong>
                  <small>{product.cost}</small>
                </div>
                <span className={product.stock === "0" ? "stockZero" : Number(product.stock) < 10 ? "stockLow" : ""}>{product.stock}</span>
                <span className={`inventoryPill ${product.inventory.toLowerCase().replaceAll(" ", "-")}`}>
                  <i />{product.inventory}
                </span>
                <span className={`websitePill ${product.website.toLowerCase()}`}>
                  <i />{product.website}
                </span>
                <div className="salesCell">
                  <div><span style={{ width: product.salesWidth }} /></div>
                  <em>{product.sales}</em>
                </div>
                <span>{product.updated}</span>
              </div>
            ))}
          </div>

          <footer className="productsFooter">
            <span>Showing 10 products</span>
            <button type="button">1</button>
          </footer>
        </section>
      </section>
    </AdminShell>
  );
}
