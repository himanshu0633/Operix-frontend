"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Plus,
  Search,
  Pencil,
  Copy,
  Send,
  Instagram,
  Facebook,
  Globe2,
  MessageSquare,
  Mail,
  Check,
  Loader2,
  FileEdit,
  Megaphone,
} from "lucide-react";
import { AdminShell } from "../components/AdminShell";
import "./marketing.css";

// Mock Products
const initialProducts = [
  { id: "1", name: "Premium Cotton Kurta", price: "₹1,299", stockStatus: "In Stock", color: "#8D5B4C" },
  { id: "2", name: "Silk Saree — Banarasi", price: "₹4,999", stockStatus: "In Stock", color: "#7A1FA2" },
  { id: "3", name: "Embroidered Dupatta", price: "₹649", stockStatus: "Low Stock", color: "#1565C0" },
  { id: "4", name: "Handloom Bedsheet", price: "₹899", stockStatus: "In Stock", color: "#2E7D32" },
  { id: "5", name: "Cotton Dhoti Set", price: "₹749", stockStatus: "In Stock", color: "#EF6C00" },
];

// Mock Content Library
const initialLibrary = [
  {
    id: "lib-1",
    name: "Summer Sale Instagram Post",
    type: "Image",
    product: "Premium Kurta",
    createdBy: "AI Generated",
    date: "2026-05-28",
    status: "Published",
    text: "Beat the heat in style with our Premium Cotton Kurta! Crafted from ultra-breathable cotton. Shop the Summer Sale now! #KurtaStyle #SummerVibes",
  },
  {
    id: "lib-2",
    name: "Festival Campaign Caption",
    type: "Text",
    product: "Silk Saree",
    createdBy: "AI Generated",
    date: "2026-05-27",
    status: "Draft",
    text: "Elegance that transcends generations. Drape yourself in the timeless beauty of our Banarasi Silk Saree. #BanarasiSilk #FestiveWear",
  },
  {
    id: "lib-3",
    name: "Product Launch Banner",
    type: "Image",
    product: "Handloom Bedsheet",
    createdBy: "Manual Upload",
    date: "2026-05-25",
    status: "Scheduled",
    text: "Experience premium comfort at home. Introducing our new handloom bedsheets range. Pure cotton, hand-woven luxury. #HomeDecor #Bedsheets",
  },
  {
    id: "lib-4",
    name: "Clearance Sale Email Copy",
    type: "Text",
    product: "Dupatta",
    createdBy: "AI Generated",
    date: "2026-05-24",
    status: "Published",
    text: "Complete your ethnic look. Get up to 40% off on our exquisite Embroidered Dupattas. Limited period offer. Shop today!",
  },
  {
    id: "lib-5",
    name: "WhatsApp Promo Creative",
    type: "Image",
    product: "Cotton Dhoti Set",
    createdBy: "Template",
    date: "2026-05-22",
    status: "Draft",
    text: "Celebrate traditions in comfort. Cotton Dhoti sets now available in 5 colors. Order on WhatsApp for special discounts!",
  },
];

// Mock Keyword Suggestions
const initialKeywords = [
  { phrase: "cotton kurta for men", type: "rising", label: "Rising", comp: "Medium competition", action: "Buy" },
  { phrase: "silk saree banarasi", type: "high", label: "High", comp: "High competition", action: "Buy" },
  { phrase: "handloom bedsheet online", type: "stable", label: "Stable", comp: "Low competition", action: "Research" },
  { phrase: "festival ethnic wear sale", type: "rising", label: "Rising", comp: "Medium competition", action: "Buy" },
];

// Mock Publishing Channels
const initialPublishing = [
  { platform: "Instagram", icon: Instagram, meta: "2 hrs ago", status: "3 scheduled", active: true },
  { platform: "Facebook", icon: Facebook, meta: "Yesterday", status: "1 scheduled", active: true },
  { platform: "Website", icon: Globe2, meta: "1 hr ago", status: "Active", active: true },
  { platform: "WhatsApp", icon: MessageSquare, meta: "3 hrs ago", status: "2 scheduled", active: true },
  { platform: "Email", icon: Mail, meta: "Never", status: "Connect", active: false },
];

// Creative Variations based on product selection
const productCreativeData: Record<string, { headline: string; description: string; cta: string }> = {
  "1": {
    headline: "Celebrate Every Moment — Premium Ethnic Wear, Now at Unmissable Prices",
    description: "Crafted with 100% pure cotton and traditional hand-block printing, this kurta brings artisan heritage to modern fashion. Perfect for festive occasions and everyday elegance.",
    cta: "Shop Now — Limited Stock Available",
  },
  "2": {
    headline: "Timeless Drape — Handwoven Banarasi Silk Sarees",
    description: "Drape yourself in pure luxury. Our Banarasi silk sarees feature intricate gold zari work and premium silk fabrics, perfect for making a statement.",
    cta: "Explore Collection — Flat 15% Off",
  },
  "3": {
    headline: "Graceful Details — Hand-Embroidered Chiffon Dupattas",
    description: "Add a touch of sophistication to your ethnic outfit. Rich embroidery, delicate borders, and lightweight fabrics make these dupattas a versatile addition.",
    cta: "Order Now — Selling Out Fast",
  },
  "4": {
    headline: "Artisanal Comfort — Organic Handloom Bedsheets",
    description: "Transform your bedroom into a peaceful sanctuary. Made with 100% premium cotton threads, hand-loomed by traditional weavers to ensure breathable comfort.",
    cta: "View Styles — Free Shipping Today",
  },
  "5": {
    headline: "Tradition Meets Comfort — Classic Cotton Dhoti Sets",
    description: "Celebrate cultural events in complete ease. Soft, premium cotton dhoti sets with subtle borders designed for comfort, style, and effortless elegance.",
    cta: "Shop the Look — Cash on Delivery",
  },
};

export default function MarketingPage() {
  // States
  const [searchProduct, setSearchProduct] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("1");
  const [goal, setGoal] = useState("Launch Summer Sale Promotion");
  const [tone, setTone] = useState("Professional & Energetic");
  const [audience, setAudience] = useState("Young adults and ethnic wear lovers");
  const [isGenerating, setIsGenerating] = useState(false);
  const [library, setLibrary] = useState(initialLibrary);
  const [publishing, setPublishing] = useState(initialPublishing);

  // AI Generated output blocks
  const [generatedContent, setGeneratedContent] = useState<{
    headline: string;
    description: string;
    cta: string;
  } | null>({
    headline: "Celebrate Every Moment — Premium Ethnic Wear, Now at Unmissable Prices",
    description: "Crafted with 100% pure cotton and traditional hand-block printing, this kurta brings artisan heritage to modern fashion. Perfect for festive occasions and everyday elegance.",
    cta: "Shop Now — Limited Stock Available",
  });

  // Edit states for generated content
  const [isEditingHeadline, setIsEditingHeadline] = useState(false);
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [isEditingCta, setIsEditingCta] = useState(false);

  // Rename states for Content Library
  const [renamingLibId, setRenamingLibId] = useState<string | null>(null);

  // Publishing animation states
  const [publishingLibId, setPublishingLibId] = useState<string | null>(null);

  // Feedback states
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [copiedLibId, setCopiedLibId] = useState<string | null>(null);

  // Form selections and helpers
  const filteredProducts = initialProducts.filter((p) =>
    p.name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  const handleProductSelect = (id: string, name: string) => {
    setSelectedProductId(id);
    setGoal(`Promote ${name} Special Offer`);
    const defaultData = productCreativeData[id];
    if (defaultData) {
      setGeneratedContent(defaultData);
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim()) return;

    setIsGenerating(true);

    // Simulate AI Generation delay
    setTimeout(() => {
      const selectedProduct = initialProducts.find((p) => p.id === selectedProductId);
      const productName = selectedProduct ? selectedProduct.name : "Premium Kurta";

      const baseCreative = productCreativeData[selectedProductId] || productCreativeData["1"];

      const generated = {
        headline: `${baseCreative.headline} (${tone.split(" ")[0]})`,
        description: `${baseCreative.description} Highly recommended for ${audience}.`,
        cta: baseCreative.cta,
      };

      setGeneratedContent(generated);

      // Append to content library table
      const newAsset = {
        id: `lib-${Date.now()}`,
        name: `${productName.split(" — ")[0]} Promo Campaign`,
        type: "Text",
        product: productName.split(" — ")[0],
        createdBy: "AI Generated",
        date: new Date().toISOString().split("T")[0],
        status: "Draft",
        text: `Headline: ${generated.headline}\nDescription: ${generated.description}\nCTA: ${generated.cta}`,
      };

      setLibrary([newAsset, ...library]);
      setIsGenerating(false);
    }, 1200);
  };

  const handleDelete = (id: string) => {
    setLibrary(library.filter((item) => item.id !== id));
  };

  const handleRenameLibrary = (id: string, newName: string) => {
    if (!newName.trim()) return;
    setLibrary(library.map((item) => (item.id === id ? { ...item, name: newName } : item)));
    setRenamingLibId(null);
  };

  const handlePublishLibrary = (id: string) => {
    setPublishingLibId(id);
    setTimeout(() => {
      setLibrary(
        library.map((item) => (item.id === id ? { ...item, status: "Published" } : item))
      );
      setPublishingLibId(null);
      alert("Creative successfully published across all social channels!");
    }, 1000);
  };

  const handleCopyText = (section: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedSection(section);
      setTimeout(() => setCopiedSection(null), 2000);
    });
  };

  const handleCopyLibraryText = (id: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedLibId(id);
      setTimeout(() => setCopiedLibId(null), 2000);
    });
  };

  const handleNewAsset = () => {
    const mockAsset = {
      id: `lib-${Date.now()}`,
      name: "Fallback Ad Copy",
      type: "Text",
      product: "General",
      createdBy: "Template",
      date: new Date().toISOString().split("T")[0],
      status: "Draft",
      text: "Grab our special discount across all products! Shop now for handwoven bedsheets, linen dhotis, cotton kurtas and authentic silk sarees.",
    };
    setLibrary([mockAsset, ...library]);
  };

  const toggleChannel = (platform: string) => {
    setPublishing(
      publishing.map((pub) => {
        if (pub.platform === platform) {
          if (!pub.active) {
            return { ...pub, status: "Active", active: true };
          } else {
            return { ...pub, status: "Connect", active: false };
          }
        }
        return pub;
      })
    );
  };

  return (
    <AdminShell activePage="marketing">
      <section className="content marketingContent">
        {/* Header Block */}
        <div className="marketingHero">
          <div>
            <h1>Marketing Studio</h1>
            <p>Create marketing content, promotional creatives, and product campaigns in minutes.</p>
          </div>
          <div className="marketingActions">
            <a className="btnSecondary" href="/admin/marketing/creative-studio" style={{ textDecoration: "none" }}>
              <FileEdit size={16} />
              <span>Create Content</span>
            </a>
            <button className="btnPrimary" type="button" onClick={() => document.getElementById("generateForm")?.scrollIntoView({ behavior: "smooth" })}>
              <Sparkles size={16} />
              <span>Generate With AI</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <section className="marketingStatsGrid" aria-label="Marketing metrics">
          {/* Card 1 */}
          <article className="marketingStatCard blue">
            <div className="statMainRow">
              <strong className="statValue">84</strong>
              <span className="changeBadge positive">+12</span>
            </div>
            <span className="statLabelText">Marketing Assets</span>
            <div className="sparkline">
              <svg viewBox="0 0 100 24" preserveAspectRatio="none">
                <path d="M 0 20 L 25 15 L 50 22 L 75 10 L 100 5" fill="none" stroke="#7c86ff" strokeWidth="2" />
              </svg>
            </div>
          </article>

          {/* Card 2 */}
          <article className="marketingStatCard green">
            <div className="statMainRow">
              <strong className="statValue">6</strong>
              <span className="changeBadge positive">+2</span>
            </div>
            <span className="statLabelText">Scheduled Content</span>
            <div className="sparkline">
              <svg viewBox="0 0 100 24" preserveAspectRatio="none">
                <path d="M 0 20 L 20 10 L 40 22 L 60 12 L 80 20 L 100 5" fill="none" stroke="#4ad1b7" strokeWidth="2" />
              </svg>
            </div>
          </article>

          {/* Card 3 */}
          <article className="marketingStatCard amber">
            <div className="statMainRow">
              <strong className="statValue">31</strong>
              <span className="changeBadge positive">+8</span>
            </div>
            <span className="statLabelText">Published Promos</span>
            <div className="sparkline">
              <svg viewBox="0 0 100 24" preserveAspectRatio="none">
                <path d="M 0 22 L 30 18 L 60 12 L 100 6" fill="none" stroke="#f5bc54" strokeWidth="2" />
              </svg>
            </div>
          </article>

          {/* Card 4 */}
          <article className="marketingStatCard blue">
            <div className="statMainRow">
              <strong className="statValue">2.4L</strong>
              <span className="changeBadge positive">+18%</span>
            </div>
            <span className="statLabelText">Total Reach</span>
            <div className="sparkline">
              <svg viewBox="0 0 100 24" preserveAspectRatio="none">
                <path d="M 0 20 L 30 12 L 60 18 L 100 5" fill="none" stroke="#7c86ff" strokeWidth="2" />
              </svg>
            </div>
          </article>

          {/* Card 5 */}
          <article className="marketingStatCard green">
            <div className="statMainRow">
              <strong className="statValue">₹8.2L</strong>
              <span className="changeBadge positive">+24%</span>
            </div>
            <span className="statLabelText">Campaign Revenue</span>
            <div className="sparkline">
              <svg viewBox="0 0 100 24" preserveAspectRatio="none">
                <path d="M 0 22 L 20 12 L 40 18 L 60 10 L 80 18 L 100 5" fill="none" stroke="#4ad1b7" strokeWidth="2" />
              </svg>
            </div>
          </article>
        </section>

        {/* Middle Grid */}
        <section className="marketingMiddleGrid">
          {/* Card Left: Choose Product */}
          <article className="middleCard selectProductPanel">
            <div className="panelHeader">
              <h2>Choose Product To Promote</h2>
              <p>Select a product and instantly generate marketing content.</p>
            </div>

            <div className="searchWrapper">
              <Search className="searchIcon" size={16} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
              />
            </div>

            <div className="productList">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`productListItem ${selectedProductId === product.id ? "selected" : ""}`}
                    onClick={() => handleProductSelect(product.id, product.name)}
                  >
                    <div className="productColorThumb" style={{ backgroundColor: product.color }} />
                    <div className="productItemMeta">
                      <strong>{product.name}</strong>
                      <span>{product.price} · {product.stockStatus}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="noProductsFound">No products found</div>
              )}
            </div>

            <button
              className="actionBtn promoteBtn"
              type="button"
              onClick={() => {
                const selected = initialProducts.find((p) => p.id === selectedProductId);
                if (selected) {
                  document.getElementById("generateForm")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Megaphone size={15} />
              <span>Promote Product</span>
            </button>
          </article>

          {/* Card Right: AI Generator */}
          <article className="middleCard generatorPanel" id="generateForm">
            <div className="panelHeader">
              <h2>AI Content Generator</h2>
              <p>Generate headlines, captions, hashtags, and more instantly.</p>
            </div>

            <form onSubmit={handleGenerate} className="generatorForm">
              <div className="formGroup">
                <label htmlFor="campaignGoal">Campaign Goal</label>
                <input
                  id="campaignGoal"
                  type="text"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="e.g. Launch Festive Discount"
                  required
                />
              </div>

              <div className="formGroup">
                <label htmlFor="tone">Tone</label>
                <input
                  id="tone"
                  type="text"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  placeholder="e.g. Friendly, Informative"
                />
              </div>

              <div className="formGroup">
                <label htmlFor="targetAudience">Target Audience</label>
                <input
                  id="targetAudience"
                  type="text"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  placeholder="e.g. Online Shoppers"
                />
              </div>

              <button className="actionBtn generateBtn" type="submit" disabled={isGenerating}>
                {isGenerating ? (
                  <>
                    <Loader2 className="spinning" size={16} />
                    <span>Generating Content...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    <span>Generate Content</span>
                  </>
                )}
              </button>
            </form>

            {/* Generated Content Output Section */}
            {generatedContent && !isGenerating && (
              <div className="generatedContentSection">
                <div className="generatedBlock">
                  <div className="generatedBlockHeader">
                    <span>Headline</span>
                    <div className="generatedBlockActions">
                      <button
                        className="btnIconSmall"
                        type="button"
                        onClick={() => handleCopyText("headline", generatedContent.headline)}
                        title="Copy text"
                      >
                        {copiedSection === "headline" ? (
                          <Check size={12} style={{ color: "#4ad1b7" }} />
                        ) : (
                          <Copy size={12} />
                        )}
                      </button>
                      <button
                        className="btnIconSmall"
                        type="button"
                        onClick={() => setIsEditingHeadline(!isEditingHeadline)}
                        title="Edit text"
                      >
                        <Pencil size={12} />
                      </button>
                    </div>
                  </div>
                  {isEditingHeadline ? (
                    <input
                      type="text"
                      className="editInput"
                      value={generatedContent.headline}
                      onChange={(e) =>
                        setGeneratedContent({ ...generatedContent, headline: e.target.value })
                      }
                      onBlur={() => setIsEditingHeadline(false)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") setIsEditingHeadline(false);
                      }}
                      autoFocus
                    />
                  ) : (
                    <p className="generatedText">{generatedContent.headline}</p>
                  )}
                </div>

                <div className="generatedBlock">
                  <div className="generatedBlockHeader">
                    <span>Product Description</span>
                    <div className="generatedBlockActions">
                      <button
                        className="btnIconSmall"
                        type="button"
                        onClick={() => handleCopyText("desc", generatedContent.description)}
                        title="Copy text"
                      >
                        {copiedSection === "desc" ? (
                          <Check size={12} style={{ color: "#4ad1b7" }} />
                        ) : (
                          <Copy size={12} />
                        )}
                      </button>
                      <button
                        className="btnIconSmall"
                        type="button"
                        onClick={() => setIsEditingDesc(!isEditingDesc)}
                        title="Edit text"
                      >
                        <Pencil size={12} />
                      </button>
                    </div>
                  </div>
                  {isEditingDesc ? (
                    <textarea
                      className="editTextarea"
                      value={generatedContent.description}
                      onChange={(e) =>
                        setGeneratedContent({ ...generatedContent, description: e.target.value })
                      }
                      onBlur={() => setIsEditingDesc(false)}
                      rows={3}
                      autoFocus
                    />
                  ) : (
                    <p className="generatedText">{generatedContent.description}</p>
                  )}
                </div>

                <div className="generatedBlock">
                  <div className="generatedBlockHeader">
                    <span>Call To Action</span>
                    <div className="generatedBlockActions">
                      <button
                        className="btnIconSmall"
                        type="button"
                        onClick={() => handleCopyText("cta", generatedContent.cta)}
                        title="Copy text"
                      >
                        {copiedSection === "cta" ? (
                          <Check size={12} style={{ color: "#4ad1b7" }} />
                        ) : (
                          <Copy size={12} />
                        )}
                      </button>
                      <button
                        className="btnIconSmall"
                        type="button"
                        onClick={() => setIsEditingCta(!isEditingCta)}
                        title="Edit text"
                      >
                        <Pencil size={12} />
                      </button>
                    </div>
                  </div>
                  {isEditingCta ? (
                    <input
                      type="text"
                      className="editInput"
                      value={generatedContent.cta}
                      onChange={(e) =>
                        setGeneratedContent({ ...generatedContent, cta: e.target.value })
                      }
                      onBlur={() => setIsEditingCta(false)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") setIsEditingCta(false);
                      }}
                      autoFocus
                    />
                  ) : (
                    <p className="generatedText">{generatedContent.cta}</p>
                  )}
                </div>
              </div>
            )}
          </article>
        </section>

        {/* Bottom Section: Content Library & Side cards */}
        <section className="marketingBottomGrid">
          {/* Content Library (Grid-div Table to prevent squished layouts) */}
          <article className="contentLibraryCard">
            <div className="libraryHeader">
              <div>
                <h2>Content Library</h2>
              </div>
              <button className="btnNewAsset" type="button" onClick={handleNewAsset}>
                <Plus size={16} />
                <span>New Asset</span>
              </button>
            </div>

            <div className="libraryTableWrap">
              <div className="libraryTable">
                {/* Header row */}
                <div className="libraryRow libraryHead">
                  <span>Asset Name</span>
                  <span>Type</span>
                  <span>Product</span>
                  <span>Created By</span>
                  <span>Date</span>
                  <span>Status</span>
                  <span>Actions</span>
                </div>

                {/* Data rows */}
                {library.map((item) => (
                  <div className="libraryRow" key={item.id}>
                    <div className="assetNameCell">
                      {renamingLibId === item.id ? (
                        <input
                          type="text"
                          defaultValue={item.name}
                          className="renameInput"
                          onBlur={(e) => handleRenameLibrary(item.id, e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleRenameLibrary(item.id, e.currentTarget.value);
                            }
                          }}
                          autoFocus
                        />
                      ) : (
                        <strong title={item.name}>{item.name}</strong>
                      )}
                      <span className="assetPreviewText" title={item.text}>{item.text}</span>
                    </div>
                    <span>{item.type}</span>
                    <span title={item.product}>{item.product}</span>
                    <span>{item.createdBy}</span>
                    <span>{item.date}</span>
                    <div>
                      <span className={`statusPill ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="libraryActions">
                      <button
                        className="iconActionBtn"
                        type="button"
                        title="Rename Asset"
                        onClick={() => setRenamingLibId(item.id)}
                      >
                        <Pencil size={14} />
                      </button>
                      <button
                        className="iconActionBtn"
                        type="button"
                        title="Copy text"
                        onClick={() => handleCopyLibraryText(item.id, item.text)}
                      >
                        {copiedLibId === item.id ? <Check size={14} style={{ color: "#4ad1b7" }} /> : <Copy size={14} />}
                      </button>
                      <button
                        className="iconActionBtn"
                        type="button"
                        title="Publish to channels"
                        onClick={() => handlePublishLibrary(item.id)}
                        disabled={publishingLibId === item.id}
                      >
                        {publishingLibId === item.id ? (
                          <Loader2 className="spinning" size={14} />
                        ) : (
                          <Send size={14} />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Right Rail Stack */}
          <div className="rightRailStack">
            {/* Keywords */}
            <article className="railPanel keywordPanel">
              <div className="panelHeader">
                <h2>Keyword Suggestions</h2>
                <p>AI-recommended trending keywords for your products.</p>
              </div>

              <div className="keywordList">
                {initialKeywords.map((kw, index) => (
                  <div key={index} className="keywordItem">
                    <div className="keywordMeta">
                      <strong>{kw.phrase}</strong>
                      <span>
                        <span className={`keywordStatusTag ${kw.type}`}>{kw.label}</span> · {kw.comp}
                      </span>
                    </div>
                    <a href="#" className="keywordActionLink" onClick={(e) => {
                      e.preventDefault();
                      setGoal(`Targeting keyword "${kw.phrase}"`);
                    }}>
                      {kw.action}
                    </a>
                  </div>
                ))}
              </div>
            </article>

            {/* Publishing */}
            <article className="railPanel publishingPanel">
              <div className="panelHeader">
                <h2>Publishing Center</h2>
              </div>

              <div className="channelList">
                {publishing.map((pub) => (
                  <div key={pub.platform} className="channelItem">
                    <div className="channelLabel">
                      <span className="channelIconWrapper">
                        <pub.icon size={16} />
                      </span>
                      <div className="channelText">
                        <strong>{pub.platform}</strong>
                        <span>{pub.meta}</span>
                      </div>
                    </div>

                    {pub.active ? (
                      <span className="activeBadge">{pub.status}</span>
                    ) : (
                      <button
                        className="connectBtn"
                        type="button"
                        onClick={() => toggleChannel(pub.platform)}
                      >
                        Connect
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </section>
    </AdminShell>
  );
}
