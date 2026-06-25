"use client";

import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  Sparkles,
  Pencil,
  Copy,
  Download,
  Image as ImageIcon,
  Check,
  Loader2,
  Upload,
  Eye,
  Trash2,
  Layout,
} from "lucide-react";
import { AdminShell } from "../../components/AdminShell";
import "../marketing.css";

// Dropdown Options
const formatOptions = [
  "Instagram Post",
  "Instagram Story",
  "Facebook Ad",
  "Website Banner",
  "WhatsApp Creative",
  "Product Poster",
];

const productOptions = [
  "Premium Cotton Kurta",
  "Silk Saree — Banarasi",
  "Embroidered Dupatta",
  "Handloom Bedsheet",
  "Cotton Dhoti Set",
];

const offerOptions = [
  "10% Off",
  "Free Shipping",
  "Buy 2 Get 1",
  "Flash Sale",
  "New Arrival",
];

const styleOptions = [
  "Minimal",
  "Bold",
  "Elegant",
  "Vibrant",
  "Dark Premium",
];

// Creative Grid Items
const initialCreatives = [
  { id: "c-1", type: "Instagram Post", dimensions: "1080×1080", gradient: "linear-gradient(135deg, #2e1f3c, #1a1a2e)" },
  { id: "c-2", type: "Instagram Story", dimensions: "1080×1920", gradient: "linear-gradient(135deg, #1f2d3d, #111e29)" },
  { id: "c-3", type: "Facebook Ad", dimensions: "1200×628", gradient: "linear-gradient(135deg, #102a3a, #0b151e)" },
  { id: "c-4", type: "Website Banner", dimensions: "1080×1080", gradient: "linear-gradient(135deg, #173327, #0c1c13)" },
  { id: "c-5", type: "WhatsApp Creative", dimensions: "1080×1920", gradient: "linear-gradient(135deg, #3a1c3d, #1c0e1e)" },
  { id: "c-6", type: "Product Poster", dimensions: "800×800", gradient: "linear-gradient(135deg, #2a3439, #171f22)" },
];

// Template Categories & items
const categories = [
  "Product Launch",
  "Discount Sale",
  "Festival Offer",
  "Fashion",
  "Electronics",
  "Beauty",
  "Grocery",
  "Luxury",
];

const initialTemplates = [
  { id: "t-1", name: "Product Launch", gradient: "linear-gradient(135deg, #444554, #17181c)" },
  { id: "t-2", name: "Discount Sale", gradient: "linear-gradient(135deg, #2f3d52, #18202b)" },
  { id: "t-3", name: "Festival Offer", gradient: "linear-gradient(135deg, #102a3a, #0b151e)" },
  { id: "t-4", name: "Fashion", gradient: "linear-gradient(135deg, #2b303a, #161a22)" },
  { id: "t-5", name: "Electronics", gradient: "linear-gradient(135deg, #3a2b4c, #1e162b)" },
  { id: "t-6", name: "Beauty", gradient: "linear-gradient(135deg, #3a4750, #222831)" },
  { id: "t-7", name: "Grocery", gradient: "linear-gradient(135deg, #1e352f, #0f1c18)" },
  { id: "t-8", name: "Luxury", gradient: "linear-gradient(135deg, #302b27, #1c1815)" },
];

// Uploads Tab Items matching Screenshot 4
const initialUploads = [
  { id: "u-1", name: "asset_1.png" },
  { id: "u-2", name: "asset_2.png" },
  { id: "u-3", name: "asset_3.png" },
];

export default function CreativeStudio() {
  // Tabs state
  const [activeTab, setActiveTab] = useState<"ai-generated" | "templates" | "uploads">("ai-generated");
  const [activeCategory, setActiveCategory] = useState("Product Launch");

  // Form states
  const [format, setFormat] = useState("Instagram Post");
  const [product, setProduct] = useState("Premium Cotton Kurta");
  const [offer, setOffer] = useState("10% Off");
  const [style, setStyle] = useState("Minimal");

  // Grid / generation states
  const [isGenerating, setIsGenerating] = useState(false);
  const [creatives, setCreatives] = useState(initialCreatives);
  const [currentProductOverlay, setCurrentProductOverlay] = useState("Premium Cotton Kurta");
  const [currentOfferOverlay, setCurrentOfferOverlay] = useState("10% Off");
  const [currentStyleOverlay, setCurrentStyleOverlay] = useState("Minimal");

  // Interactive UI actions
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Upload states
  const [uploads, setUploads] = useState(initialUploads);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Modal Preview states
  const [previewingAsset, setPreviewingAsset] = useState<string | null>(null);

  // Rename uploads states
  const [renamingUploadId, setRenamingUploadId] = useState<string | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    setTimeout(() => {
      // Update visual overlay state on the cards
      setCurrentProductOverlay(product);
      setCurrentOfferOverlay(offer);
      setCurrentStyleOverlay(style);
      
      // Shuffle gradients slightly to simulate visual generation
      const shuffled = creatives.map((c) => {
        if (c.type === format) {
          return {
            ...c,
            gradient: "linear-gradient(135deg, #1e1b4b, #312e81)",
          };
        }
        return c;
      });
      setCreatives(shuffled);
      setIsGenerating(false);
    }, 1500);
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const handleDownload = (id: string, name: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      alert(`Successfully downloaded creative asset: "${name}"`);
    }, 1200);
  };

  const handleRename = (id: string, newType: string) => {
    setCreatives(creatives.map((c) => (c.id === id ? { ...c, type: newType } : c)));
    setEditingId(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsUploading(true);
      const file = e.target.files[0];
      setTimeout(() => {
        const newUpload = {
          id: `u-${Date.now()}`,
          name: file.name,
        };
        setUploads([...uploads, newUpload]);
        setIsUploading(false);
      }, 1200);
    }
  };

  const handleTriggerBrowse = () => {
    fileInputRef.current?.click();
  };

  const handleUseTemplate = (tempName: string) => {
    setActiveTab("ai-generated");
    // Auto populate based on template selection
    if (tempName === "Discount Sale") {
      setOffer("10% Off");
      setGoalOverlayAndProduct("Premium Cotton Kurta", "10% Off");
    } else if (tempName === "Festival Offer") {
      setOffer("Flash Sale");
      setStyle("Vibrant");
      setGoalOverlayAndProduct("Silk Saree — Banarasi", "Flash Sale");
    } else if (tempName === "Luxury") {
      setStyle("Dark Premium");
      setGoalOverlayAndProduct("Silk Saree — Banarasi", "Buy 2 Get 1");
    } else {
      setGoalOverlayAndProduct("Premium Cotton Kurta", "10% Off");
    }
  };

  const setGoalOverlayAndProduct = (prod: string, off: string) => {
    setProduct(prod);
    setCurrentProductOverlay(prod);
    setCurrentOfferOverlay(off);
  };

  const handleDeleteUpload = (id: string) => {
    setUploads(uploads.filter((u) => u.id !== id));
  };

  const handleRenameUpload = (id: string, newName: string) => {
    if (!newName.trim()) return;
    setUploads(uploads.map((u) => (u.id === id ? { ...u, name: newName } : u)));
    setRenamingUploadId(null);
  };

  return (
    <AdminShell activePage="marketing">
      <section className="content creativeContent">
        {/* Header Block */}
        <div className="creativeHero">
          <div className="creativeHeroLeft">
            <a href="/admin/marketing" className="btnBack">
              <ChevronLeft size={20} />
            </a>
            <div>
              <h1>Creative Studio</h1>
              <p>Design, generate, and manage marketing creatives.</p>
            </div>
          </div>
        </div>

        {/* Custom Tab Bar */}
        <div className="tabBarContainer">
          <div className="tabBar">
            <button
              className={`tabItem ${activeTab === "ai-generated" ? "active" : ""}`}
              onClick={() => setActiveTab("ai-generated")}
              type="button"
            >
              AI Generated
            </button>
            <button
              className={`tabItem ${activeTab === "templates" ? "active" : ""}`}
              onClick={() => setActiveTab("templates")}
              type="button"
            >
              Templates
            </button>
            <button
              className={`tabItem ${activeTab === "uploads" ? "active" : ""}`}
              onClick={() => setActiveTab("uploads")}
              type="button"
            >
              Uploads
            </button>
          </div>
        </div>

        {/* Tab 1: AI Generated */}
        {activeTab === "ai-generated" && (
          <section className="creativeMiddleGrid">
            {/* Form Left: Generate Creative */}
            <article className="middleCard generateCreativePanel">
              <div className="panelHeader">
                <h2>Generate Creative</h2>
              </div>

              <form onSubmit={handleGenerate} className="creativeForm">
                {/* Format Dropdown */}
                <div className="formGroup">
                  <label htmlFor="formatSelect">Format</label>
                  <select
                    id="formatSelect"
                    className="customSelect"
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                  >
                    {formatOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Product Dropdown */}
                <div className="formGroup">
                  <label htmlFor="productSelect">Product</label>
                  <select
                    id="productSelect"
                    className="customSelect"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                  >
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Offer / Message Dropdown */}
                <div className="formGroup">
                  <label htmlFor="offerSelect">Offer / Message</label>
                  <select
                    id="offerSelect"
                    className="customSelect"
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                  >
                    {offerOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Style Dropdown */}
                <div className="formGroup">
                  <label htmlFor="styleSelect">Style</label>
                  <select
                    id="styleSelect"
                    className="customSelect"
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                  >
                    {styleOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <button className="actionBtn generateBtn" type="submit" disabled={isGenerating}>
                  {isGenerating ? (
                    <>
                      <Loader2 className="spinning" size={16} />
                      <span>Generating Creative...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={16} />
                      <span>Generate Creative</span>
                    </>
                  )}
                </button>
              </form>
            </article>

            {/* Grid Right: Generated Creatives */}
            <article className="creativesGridPanel">
              <div className="panelHeader">
                <h2>Generated Creatives</h2>
              </div>

              {isGenerating ? (
                <div className="generationLoadingState">
                  <Loader2 className="spinning loadingBig" size={48} />
                  <p>AI Engine is composing graphic layouts...</p>
                  <span>Synthesizing product details, banners and alignments</span>
                </div>
              ) : (
                <div className="creativesGrid">
                  {creatives.map((c) => (
                    <div key={c.id} className="creativeCard">
                      {/* Gradient canvas preview of the creative */}
                      <div className="creativeCanvas" style={{ background: c.gradient }}>
                        <span className="dimensionBadge">{c.dimensions}</span>
                        
                        {/* Interactive overlay based on current state parameters */}
                        <div className={`creativeBannerOverlay ${currentStyleOverlay.toLowerCase().replaceAll(" ", "-")}`}>
                          <span className="styleTag">{currentStyleOverlay}</span>
                          <h3 className="bannerProductTitle">{currentProductOverlay}</h3>
                          <p className="bannerOfferText">{currentOfferOverlay}</p>
                        </div>

                        <div className="creativeCanvasCenter">
                          <ImageIcon size={40} className="canvasIcon" />
                        </div>
                      </div>

                      {/* Card Footer actions */}
                      <div className="creativeCardFooter">
                        {editingId === c.id ? (
                          <input
                            type="text"
                            defaultValue={c.type}
                            className="renameInput"
                            onBlur={(e) => handleRename(c.id, e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                handleRename(c.id, e.currentTarget.value);
                              }
                            }}
                            autoFocus
                          />
                        ) : (
                          <span className="creativeName">{c.type}</span>
                        )}

                        <div className="creativeActions">
                          <button
                            className="btnIconSmall"
                            type="button"
                            title="Rename"
                            onClick={() => setEditingId(c.id)}
                          >
                            <Pencil size={12} />
                          </button>
                          <button
                            className="btnIconSmall"
                            type="button"
                            title="Copy details"
                            onClick={() => handleCopyText(c.id, `${c.type} | Product: ${currentProductOverlay} | Offer: ${currentOfferOverlay} | Style: ${currentStyleOverlay}`)}
                          >
                            {copiedId === c.id ? (
                              <Check size={12} style={{ color: "#4ad1b7" }} />
                            ) : (
                              <Copy size={12} />
                            )}
                          </button>
                          <button
                            className="btnIconSmall"
                            type="button"
                            title="Download Creative"
                            onClick={() => handleDownload(c.id, `${c.type} - ${currentProductOverlay}`)}
                          >
                            {downloadingId === c.id ? (
                              <Loader2 className="spinning" size={12} />
                            ) : (
                              <Download size={12} />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </article>
          </section>
        )}

        {/* Tab 2: Templates */}
        {activeTab === "templates" && (
          <section className="templatesTabSection">
            {/* Category Filter pills */}
            <div className="categoryPills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`categoryPill ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                  type="button"
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Template Grid (8 cards) */}
            <div className="templatesStudioGrid">
              {initialTemplates.map((temp) => (
                <div key={temp.id} className="templateStudioCard">
                  <div className="templateStudioCanvas" style={{ background: temp.gradient }}>
                    <Layout size={36} className="templateLayoutIcon" />
                  </div>
                  <div className="templateStudioFooter">
                    <span className="templateStudioName">{temp.name}</span>
                    <button
                      className="btnStudioUse"
                      type="button"
                      onClick={() => handleUseTemplate(temp.name)}
                    >
                      Use Template
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tab 3: Uploads (Styled matching Screenshot 4) */}
        {activeTab === "uploads" && (
          <section className="uploadsTabSection">
            {/* Large Drag & Drop Box */}
            <div className="dropzoneBox">
              <Upload size={48} className="dropzoneIcon" />
              <div className="dropzoneCenter">
                <span className="dropzoneTitle">Drag & Drop Files Here</span>
                <span className="dropzoneSubtitle">Supports JPG, PNG, PDF, PSD up to 50MB</span>
                
                <input
                  type="file"
                  accept="image/*,.pdf,.psd"
                  className="hiddenInput"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                />
                
                <button
                  className="btnBrowse"
                  type="button"
                  onClick={handleTriggerBrowse}
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="spinning" size={14} />
                      <span>Uploading Asset...</span>
                    </>
                  ) : (
                    <>
                      <Upload size={14} />
                      <span>Browse Files</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Grid of uploaded items */}
            <div className="uploadsGrid">
              {uploads.map((up) => (
                <div key={up.id} className="uploadCard">
                  <div className="uploadCanvas">
                    <ImageIcon size={32} className="uploadCanvasIcon" />
                  </div>
                  <div className="uploadMeta">
                    {renamingUploadId === up.id ? (
                      <input
                        type="text"
                        defaultValue={up.name}
                        className="renameInput"
                        onBlur={(e) => handleRenameUpload(up.id, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleRenameUpload(up.id, e.currentTarget.value);
                          }
                        }}
                        autoFocus
                      />
                    ) : (
                      <span className="uploadFilename" title={up.name}>{up.name}</span>
                    )}

                    <div className="uploadCardActions">
                      <button
                        className="btnIconSmall"
                        type="button"
                        title="View Asset"
                        onClick={() => setPreviewingAsset(up.name)}
                      >
                        <Eye size={12} />
                      </button>
                      <button
                        className="btnIconSmall"
                        type="button"
                        title="Rename"
                        onClick={() => setRenamingUploadId(up.id)}
                      >
                        <Pencil size={12} />
                      </button>
                      <button
                        className="btnIconSmall"
                        type="button"
                        title="Delete"
                        onClick={() => handleDeleteUpload(up.id)}
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Simple Overlay Modal for previewing asset */}
            {previewingAsset && (
              <div className="modalOverlay" onClick={() => setPreviewingAsset(null)}>
                <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                  <div className="modalHeader">
                    <h3>Asset Preview: {previewingAsset}</h3>
                    <button className="btnCloseModal" onClick={() => setPreviewingAsset(null)}>×</button>
                  </div>
                  <div className="modalBody">
                    <div className="modalImagePlaceholder">
                      <ImageIcon size={64} className="loadingBig" />
                      <p>Rendering file payload: {previewingAsset}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}
      </section>
    </AdminShell>
  );
}
