import Link from "next/link";
import "./Pricing.css";

import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="lp-container">
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot"></span>
            <span>Pricing</span>
          </div>
          <h2>Simple Pricing</h2>
          <p>No hidden fees. No per-user traps. Cancel anytime.</p>
        </div>

        <div className="pricing-grid">
          {/* Starter Plan */}
          <div className="pricing-card glass-panel">
            <h3 className="pricing-title">Starter</h3>
            <p className="pricing-sub">Perfect for new businesses</p>
            <div className="pricing-price">
              $49<span>/month</span>
            </div>
            
            <ul className="pricing-checklist">
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Up to 500 products</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Basic inventory management</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Website builder (1 site)</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Order management</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Email support</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>2 team members</span>
              </li>
            </ul>

            <Link href="/admin/dashboard" className="btn-pricing">
              <span>Start for Free &rarr;</span>
            </Link>
          </div>

          {/* Growth Plan (Featured) */}
          <div className="pricing-card featured glass-panel">
            <span className="pricing-card-badge">Most Popular</span>
            <h3 className="pricing-title">Growth</h3>
            <p className="pricing-sub">For scaling operations</p>
            <div className="pricing-price">
              $149<span>/month</span>
            </div>
            
            <ul className="pricing-checklist">
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Unlimited products</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Advanced inventory & suppliers</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Website builder (3 sites)</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Marketing Studio & Campaigns</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Accounting & reporting</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>10 team members</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Priority support</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Custom domain</span>
              </li>
            </ul>

            <Link href="/admin/dashboard" className="btn-pricing featured-btn">
              <span>Start Free Trial &rarr;</span>
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="pricing-card glass-panel">
            <h3 className="pricing-title">Enterprise</h3>
            <p className="pricing-sub">For complex organizations</p>
            <div className="pricing-price">
              Custom
            </div>
            
            <ul className="pricing-checklist">
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Everything in Growth</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Unlimited team members</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Custom integrations & API</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Dedicated account manager</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>SLA & uptime guarantee</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Multi-entity & multi-currency</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>Advanced analytics & BI</span>
              </li>
              <li className="pricing-check-item">
                <span className="pricing-check-icon"><Check size={14} /></span>
                <span>White-label options</span>
              </li>
            </ul>

            <Link href="/admin/dashboard" className="btn-pricing">
              <span>Contact Sales &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
