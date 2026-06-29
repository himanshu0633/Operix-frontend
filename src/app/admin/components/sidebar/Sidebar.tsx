import { BRAND_NAME, BRAND_DOMAIN } from "../../../config/branding";
import {
  BarChart3,
  BookOpen,
  ChevronDown,
  CircleHelp,
  FileText,
  Globe2,
  LayoutDashboard,
  Package,
  Radio,
  Send,
  Settings,
  ShoppingBag,
  Truck,
  Users,
  UserRoundCheck,
  WalletCards,
  Warehouse,
  Zap,
} from "lucide-react";

const sidebarSections = [
  {
    title: "CORE",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
      { label: "Products", icon: Package, href: "/admin/products" },
      { label: "Supplier", icon: Truck, href: "/admin/suppliers" },
      { label: "Inventory", icon: WalletCards, href: "/admin/inventory" },
      { label: "Orders", icon: ShoppingBag, href: "/admin/orders" },
      { label: "Customers", icon: Users, href: "/admin/customers" },
    ],
  },
  {
    title: "COMMERCE",
    items: [
      { label: "Website", icon: Globe2, href: "/admin/dashboard#website" },
      { label: "Marketing", icon: Send, href: "/admin/marketing" },
      { label: "Campaigns", icon: Radio, href: "/admin/campaigns" },
    ],
  },
  {
    title: "OPERATIONS",
    items: [
      { label: "Accounting", icon: BookOpen, href: "/admin/accounting" },
      { label: "HRM", icon: UserRoundCheck, href: "/admin/hrm" },
      { label: "Analytics", icon: BarChart3, href: "/admin/analytics" },
      { label: "Reports", icon: FileText, href: "#" },
    ],
  },
  {
    title: "SYSTEM",
    items: [
      { label: "Team", icon: Users, href: "#" },
      { label: "Settings", icon: Settings, href: "#" },
    ],
  },
];

type SidebarProps = {
  activePage: "dashboard" | "products" | "suppliers" | "inventory" | "orders" | "customers" | "website" | "marketing" | "campaigns" | "accounting" | "hrm" | "analytics";
};

export function Sidebar({ activePage }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="brandBlock">
        <div className="brandMark">
          <Warehouse size={22} />
        </div>
        <div>
          <strong>{BRAND_NAME}</strong>
          <span>Business Suite</span>
        </div>
      </div>

      <nav className="sideNav" aria-label="Super admin navigation">
        {sidebarSections.map((section) => (
          <div className="navGroup" key={section.title}>
            <p>{section.title}</p>
            {section.items.map((item) => {
              const isActive =
                (activePage === "dashboard" && item.label === "Dashboard") ||
                (activePage === "products" && item.label === "Products") ||
                (activePage === "suppliers" && item.label === "Supplier") ||
                (activePage === "inventory" && item.label === "Inventory") ||
                (activePage === "orders" && item.label === "Orders") ||
                (activePage === "customers" && item.label === "Customers") ||
                (activePage === "website" && item.label === "Website") ||
                (activePage === "marketing" && item.label === "Marketing") ||
                (activePage === "campaigns" && item.label === "Campaigns") ||
                (activePage === "accounting" && item.label === "Accounting") ||
                (activePage === "hrm" && item.label === "HRM") ||
                (activePage === "analytics" && item.label === "Analytics");

              return (
                <a className={isActive ? "active" : ""} href={item.href} key={item.label}>
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="sidebarFooter">
        <a className="supportLink" href="#">
          <CircleHelp size={16} />
          <span>Support</span>
        </a>

        <div className="upgradeBox">
          <div>
            <Zap size={14} />
            <strong>Upgrade to Pro</strong>
          </div>
          <p>Unlock AI analytics, advanced reports, and priority support.</p>
          <button>View Plans</button>
        </div>

        <div className="userBlock">
          <div className="avatar">G</div>
          <div>
            <strong>Himanshu </strong>
            <span>Himanshu@{BRAND_DOMAIN.toLowerCase()}</span>
          </div>
          <ChevronDown size={15} />
        </div>
      </div>
    </aside>
  );
}
