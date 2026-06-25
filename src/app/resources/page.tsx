import { Metadata } from "next";
import Header from "../landing/components/Header";
import Resources from "../landing/components/Resources";
import Footer from "../landing/components/Footer";

export const metadata: Metadata = {
  title: "Resources - Operix",
  description: "Guides, tutorials, documentation, and business insights — everything you need to operate and grow your business.",
};

export default function ResourcesPage() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <Resources />
      </main>
      <Footer />
    </div>
  );
}
