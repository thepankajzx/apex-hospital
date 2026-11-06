import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Ramesh Sharma',
    city: 'Solan',
    initials: 'RS',
    color: '#0057A8',
    rating: 5,
    text: 'Very professional staff and clean environment. MRI process was explained clearly and reports were delivered on time. Highly recommend Apex Hospital.',
  },
  {
    name: 'Anita Verma',
    city: 'Kandaghat',
    initials: 'AV',
    color: '#10B981',
    rating: 5,
    text: 'Got my whole body master health package done here. The home sample collection team was very punctual and polite. Best diagnostic centre in Himachal.',
  },
  {
    name: 'Suresh Kumar',
    city: 'Parwanoo',
    initials: 'SK',
    color: '#E63946',
    rating: 5,
    text: 'Advanced diagnostic equipment and experienced doctors. The emergency care team was extremely responsive. Truly the best hospital in the region.',
  },
];

const Testimonials = () => {
  return (
    <section className="testi-section">
      <div className="container">
        <div className="testi-header">
          <span className="section-badge">Patient Reviews</span>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Real experiences from people who trusted Apex Hospital with their health.
          </p>
        </div>

        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testi-card">
              <div className="testi-quote-icon">
                <Quote size={22} />
              </div>
              <div className="testi-stars">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author-row">
                <div
                  className="testi-avatar"
                  style={{ background: `${t.color}20`, color: t.color, border: `2px solid ${t.color}40` }}
                >
                  {t.initials}
                </div>
                <div className="testi-author-info">
                  <span className="testi-name">{t.name}</span>
                  <span className="testi-city">📍 {t.city}, HP</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testi-cta">
          <a
            href="https://wa.me/917018168156?text=Hi%20Apex%20Hospital%2C%20I%20want%20to%20share%20a%20review."
            target="_blank"
            rel="noopener noreferrer"
            className="testi-btn"
          >
            ⭐ Share Your Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
