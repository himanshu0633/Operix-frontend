import { BRAND_NAME } from "../../../config/branding";
import {
  ArrowLeft,
  Barcode,
  Bot,
  Box,
  CheckSquare,
  Copy,
  FileText,
  ImagePlus,
  Lightbulb,
  Package,
  Plus,
  QrCode,
  ScanLine,
  Search,
  Sparkles,
  Tag,
  Upload,
  WandSparkles,
} from "lucide-react";
import { AdminShell } from "../../components/AdminShell";

const entryModes = [
  { title: "Manual Entry", text: "Fill in product details", icon: Plus, active: true },
  { title: "Scan Barcode", text: "Use device camera", icon: ScanLine },
  { title: "Import CSV", text: "Bulk upload products", icon: FileText },
  { title: "Duplicate", text: "Copy existing product", icon: Copy },
];

const checklist = ["Product name", "Category selected", "Pricing added", "Inventory set", "Images uploaded", "SEO configured"];

const aiActions = [
  { title: "Generate Description", text: "Write a product description from the name", icon: WandSparkles },
  { title: "Generate SEO", text: "Create optimized title and meta description", icon: Bot },
  { title: "Suggest Tags", text: "Auto-generate relevant product tags", icon: Tag },
  { title: "Suggest Category", text: "Classify based on product name and brand", icon: Sparkles },
];

export default function AddProductPage() {
  return (
    <AdminShell activePage="products">
      <section className="content addProductContent">
        <header className="addProductHeader">
          <div>
            <a className="backButton" href="/admin/products" aria-label="Back to products">
              <ArrowLeft size={16} />
            </a>
            <div>
              <h1>Add Product</h1>
              <p>Create and publish a new product to your inventory and website.</p>
            </div>
          </div>

          <div className="addProductActions">
            <button type="button">Save Draft</button>
            <button type="button">Preview</button>
            <button className="primary" type="button">Publish Product</button>
          </div>
        </header>

        <section className="entryModes">
          {entryModes.map((mode) => (
            <button className={mode.active ? "active" : ""} type="button" key={mode.title}>
              <mode.icon size={17} />
              <span>
                <strong>{mode.title}</strong>
                <small>{mode.text}</small>
              </span>
            </button>
          ))}
        </section>

        <div className="addProductGrid">
          <main className="productFormStack">
            <section className="formCard">
              <div className="formCardHeader">
                <h2>Product Type</h2>
                <p>Choose how this product is classified.</p>
              </div>
              <div className="segmentedButtons">
                <button className="active" type="button">Branded Product</button>
                <button type="button">Local / Unbranded</button>
              </div>
              <p className="helperText">Products from known manufacturers or distributors with an existing barcode.</p>
            </section>

            <section className="formCard">
              <div className="formCardHeader">
                <h2>Supplier</h2>
                <p>Select an existing supplier or add a new one.</p>
              </div>
              <label className="field full">
                <span>SELECT SUPPLIER *</span>
                <select defaultValue="">
                  <option value="" disabled>Select a Supplier</option>
                  <option>Mehta Distributors</option>
                  <option>Singh Suppliers Ltd.</option>
                </select>
              </label>
            </section>

            <section className="formCard">
              <div className="formCardHeader">
                <h2>Basic Information</h2>
                <p>Core details that identify your product.</p>
              </div>

              <div className="formGrid">
                <label className="field full">
                  <span>Product Name *</span>
                  <input placeholder="e.g. Banarasi Silk Saree - Red, Size M" />
                </label>
                <label className="field">
                  <span>Category *</span>
                  <select defaultValue="">
                    <option value="" disabled>Select Category</option>
                    <option>Textiles</option>
                    <option>Apparel</option>
                    <option>Spices & Food</option>
                  </select>
                </label>
                <label className="field">
                  <span>Brand</span>
                  <input placeholder="e.g. Taneira, Fabindia" />
                </label>
                <label className="field full">
                  <span>Short Description</span>
                  <textarea placeholder="Describe the product in 1-2 lines..." />
                </label>
                <label className="field full tagField">
                  <span>Tags</span>
                  <div>
                    <input placeholder="Add a tag..." />
                    <button type="button"><Plus size={14} />Add</button>
                  </div>
                  <small>Press Enter or comma to add a tag.</small>
                </label>
              </div>
            </section>

            <section className="formCard">
              <div className="formCardHeader">
                <h2>Product Media</h2>
                <p>Upload product images for your listing and website.</p>
              </div>
              <div className="uploadBox">
                <ImagePlus size={26} />
                <strong>Drag & drop images here</strong>
                <span>or click to browse - PNG, JPG, WEBP up to 8MB each</span>
              </div>
            </section>

            <section className="formCard">
              <div className="formCardHeader">
                <h2>Pricing</h2>
                <p>Set your cost, selling price, taxes, and discounts.</p>
              </div>
              <div className="formGrid">
                <label className="field moneyField">
                  <span>Cost Price (₹)</span>
                  <div><b>₹</b><input placeholder="0.00" /></div>
                </label>
                <label className="field moneyField">
                  <span>Selling Price (₹) *</span>
                  <div><b>₹</b><input placeholder="0.00" /></div>
                </label>
                <label className="field moneyField">
                  <span>Discount (%)</span>
                  <div><b>%</b><input placeholder="0" /></div>
                </label>
                <label className="field">
                  <span>GST Rate (%)</span>
                  <select defaultValue="18">
                    <option value="18">18</option>
                    <option value="12">12</option>
                    <option value="5">5</option>
                  </select>
                  <small>Standard rates: 5%, 12%, 18%, 28%</small>
                </label>
              </div>
            </section>

            <section className="formCard">
              <div className="formCardHeader">
                <h2>Inventory</h2>
                <p>Set stock levels. SKU and IDs are auto-generated from the product name.</p>
              </div>
              <div className="formGrid">
                <label className="field">
                  <span>Stock Quantity *</span>
                  <input placeholder="0" />
                </label>
                <label className="field">
                  <span>Low Stock Alert</span>
                  <input placeholder="10" />
                  <small>Get notified when stock falls below this.</small>
                </label>
                <label className="field full">
                  <span>Warehouse</span>
                  <select defaultValue="">
                    <option value="" disabled>Select Warehouse</option>
                    <option>Main Warehouse</option>
                  </select>
                </label>
                <div className="readonlyGrid full">
                  <div><span>AUTO SKU</span><strong>Set product name first</strong></div>
                  <div><span>INVENTORY ID</span><strong>INV-319362</strong></div>
                  <div><span>SYSTEM BARCODE</span><strong>6901007613296</strong></div>
                </div>
              </div>
            </section>

            <section className="formCard">
              <div className="formCardHeader">
                <h2>Barcode & QR</h2>
                <p>Scan an existing barcode or use the auto-generated one.</p>
              </div>
              <div className="barcodeGrid">
                <div className="barcodeBox">
                  <span>Barcode (EAN-13)</span>
                  <div className="barcodeLines" />
                  <small>6901007613296</small>
                </div>
                <div className="qrBox">
                  <span>QR Code</span>
                  <QrCode size={56} />
                </div>
                <button type="button"><ScanLine size={16} />Scan Barcode</button>
              </div>
            </section>

            <section className="formCard">
              <div className="formCardHeader">
                <h2>Website & SEO</h2>
                <p>Control how this product appears on your website.</p>
              </div>
              <div className="seoRows">
                <div>
                  <div>
                    <strong>Publish Product</strong>
                    <span>Make this product visible on your website</span>
                  </div>
                  <button className="toggle" type="button" aria-label="Publish product" />
                </div>
                <div>
                  <div>
                    <strong>Featured Product</strong>
                    <span>Show in featured collections and homepage</span>
                  </div>
                  <button className="toggle" type="button" aria-label="Featured product" />
                </div>
              </div>
              <div className="formGrid">
                <label className="field full">
                  <span>SEO Title</span>
                  <input placeholder={`e.g. Handcrafted Banarasi Silk Saree | Red | ${BRAND_NAME} Store`} />
                  <small>0/60 characters recommended</small>
                </label>
                <label className="field full">
                  <span>SEO Description</span>
                  <textarea placeholder="A brief description for search engines. Describe the product clearly in 1-2 sentences." />
                  <small>0/160 characters recommended</small>
                </label>
                <label className="field urlField full">
                  <span>URL Slug</span>
                  <div><b>yourstore.com/</b><input placeholder="product-url-slug" /></div>
                </label>
              </div>
            </section>

            <section className="formCard">
              <div className="aiHeader">
                <div>
                  <h2>AI Assistance</h2>
                  <p>Let AI help you fill in product details faster.</p>
                </div>
                <span>Beta</span>
              </div>
              <div className="aiActionGrid">
                {aiActions.map((action) => (
                  <button type="button" key={action.title}>
                    <action.icon size={17} />
                    <span>
                      <strong>{action.title}</strong>
                      <small>{action.text}</small>
                    </span>
                  </button>
                ))}
              </div>
              <p className="aiNotice"><Lightbulb size={14} /> AI suggestions are based on product name and category. Always review before publishing.</p>
            </section>
          </main>

          <aside className="addProductRail">
            <section className="railPreviewCard">
              <h3>Product Preview</h3>
              <div className="previewProduct">
                <Box size={20} />
                <div>
                  <strong>Untitled Product</strong>
                  <span>No category · No price</span>
                </div>
              </div>
              <div className="readiness">
                <span>Product Readiness</span>
                <b>0%</b>
              </div>
              <div className="readinessBar" />
            </section>

            <section className="railPreviewCard">
              <h3>Status</h3>
              <div className="statusList">
                <span>Inventory <b>Not set</b></span>
                <span>SKU <b>Auto-generated</b></span>
                <span>Barcode <b>Auto-generated</b></span>
                <span>Website <b>Draft</b></span>
              </div>
            </section>

            <section className="railPreviewCard">
              <h3>SEO Score <strong>0/100</strong></h3>
              <div className="readinessBar red" />
              <p>Fill in product name, category, SEO title and description to improve your score.</p>
            </section>

            <section className="railPreviewCard">
              <h3>Publishing Checklist</h3>
              <div className="checklist">
                {checklist.map((item) => (
                  <span key={item}><CheckSquare size={14} />{item}</span>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>
    </AdminShell>
  );
}
