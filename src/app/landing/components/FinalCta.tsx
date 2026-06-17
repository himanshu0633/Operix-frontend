import Link from "next/link";
import "./FinalCta.css";

import { ArrowRight, Calendar } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="final-cta-section">
      <div className="lp-container">
        <h2>Start Running Your Business Smarter</h2>
        <p>One platform for operations, commerce, marketing, and growth.</p>
        
        <div className="final-cta-ctas">
          <Link href="/admin/dashboard" className="btn-primary btn-large">
            <span>Start Free Trial</span>
            <ArrowRight size={16} />
          </Link>
          <Link href="#book-demo" className="btn-secondary btn-large">
            <Calendar size={16} style={{ color: 'var(--lp-text-secondary)' }} />
            <span>Book Demo</span>
          </Link>
        </div>

        <div className="final-cta-subtext">
          No credit card required. 14-day free trial. Cancel anytime.
        </div>
      </div>
    </section>
  );
}
