import type { Metadata } from "next";
import "./globals.css";
import "./admin/components/admin-shell.css";
import "./admin/components/header/header.css";
import "./admin/components/sidebar/sidebar.css";
import "./admin/dashboard/dashboard.css";
import "./admin/products/products.css";
import "./admin/products/add-product/add-product.css";
import "./admin/suppliers/suppliers.css";
import "./admin/inventory/inventory.css";
import "./admin/orders/orders.css";
import "./admin/customers/customers.css";
import "./admin/marketing/marketing.css";
import "./admin/campaigns/campaigns.css";
import "./admin/accounting/accounting.css";
import "./admin/hrm/hrm.css";
import "./admin/analytics/analytics.css";
import "./admin/reports/reports.css";
import "./landing/landing.css";

export const metadata: Metadata = {
  title: "nexinfosoft",
  description: "Super admin dashboard built with Next.js and Node.js",
  icons: {
    icon: "/logo-full.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
