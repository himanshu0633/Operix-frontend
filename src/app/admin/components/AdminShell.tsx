import type { ReactNode } from "react";
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";

type AdminShellProps = {
  activePage: "dashboard" | "products" | "suppliers" | "inventory" | "orders" | "customers" | "website" | "marketing" | "campaigns" | "accounting" | "hrm" | "analytics";
  children: ReactNode;
};

export function AdminShell({ activePage, children }: AdminShellProps) {
  return (
    <main className="shell">
      <Sidebar activePage={activePage} />

      <section className="mainArea">
        <Header />
        {children}
      </section>
    </main>
  );
}
