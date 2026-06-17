import { Star } from "lucide-react";
import "./Testimonials.css";


interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatarText: string;
  avatarClass: string;
}

const testimonials: Testimonial[] = [
  {
    id: "sarah",
    quote: `"Operix replaced 6 separate tools for us. Our team now works from one workspace, inventory syncs with our website automatically, and our accounting is always up to date. It's transformed how we operate."`,
    author: "Sarah Mitchell",
    role: "CEO at NovaTech Solutions",
    avatarText: "SM",
    avatarClass: "purple",
  },
  {
    id: "james",
    quote: `"The inventory and supplier management alone saved us 15 hours per week. Having our purchase orders, stock levels, and supplier communications all in one place is something we didn't know we needed until we had it."`,
    author: "James Okonkwo",
    role: "Operations Director at Meridian Commerce",
    avatarText: "JO",
    avatarClass: "green",
  },
  {
    id: "priya",
    quote: `"We launched our online store in under an hour using the website builder. Within a week, we had our first campaign running and could see exactly which products drove the most revenue. Remarkable platform."`,
    author: "Priya Sharma",
    role: "Founder at BlueHaven Retail",
    avatarText: "PS",
    avatarClass: "gold",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="lp-container">
        <div className="section-header">
          <div className="badge">
            <span className="badge-dot"></span>
            <span>Customer Stories</span>
          </div>
          <h2>Trusted By Growing Businesses</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card glass-panel">
              <div>
                <div className="star-rating">
                  <Star size={14} fill="#fbbf24" stroke="none" />
                  <Star size={14} fill="#fbbf24" stroke="none" />
                  <Star size={14} fill="#fbbf24" stroke="none" />
                  <Star size={14} fill="#fbbf24" stroke="none" />
                  <Star size={14} fill="#fbbf24" stroke="none" />
                </div>
                <blockquote className="testimonial-quote">
                  {t.quote}
                </blockquote>
              </div>

              <div className="testimonial-author">
                <div className={`author-avatar ${t.avatarClass}`}>
                  {t.avatarText}
                </div>
                <div>
                  <div className="author-name">{t.author}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
