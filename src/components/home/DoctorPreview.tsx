import { Link } from 'react-router-dom';
import { ArrowRight, Star, Calendar } from 'lucide-react';
import './DoctorPreview.css';

const featured = [
  {
    name: 'Dr. Rajiv Sharma',
    spec: 'Neurosurgeon & Spine Specialist',
    exp: '20+ yrs',
    emoji: '🧠',
    color: '#7C3AED',
    bg: '#EDE9FE',
    days: 'Mon, Wed, Fri',
  },
  {
    name: 'Dr. Priya Thakur',
    spec: 'Cardiologist & Echocardiography',
    exp: '15+ yrs',
    emoji: '❤️',
    color: '#E63946',
    bg: '#FEE2E4',
    days: 'Tue, Thu, Sat',
  },
  {
    name: 'Dr. Anil Mehta',
    spec: 'Orthopedic & Joint Replacement',
    exp: '18+ yrs',
    emoji: '🦴',
    color: '#D97706',
    bg: '#FEF3C7',
    days: 'Mon–Sat',
  },
];

const DoctorPreview = () => {
  return (
    <section className="dp-section">
      <div className="container">
        <div className="dp-header">
          <div>
            <span className="section-badge">Our Specialists</span>
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0.5rem 0 0.5rem' }}>
              Meet Our <span className="text-primary">Expert Doctors</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', maxWidth: '500px', margin: 0 }}>
              Experienced specialists committed to your complete recovery and wellbeing.
            </p>
          </div>
          <Link to="/doctors" className="dp-view-all">
            View All Doctors <ArrowRight size={16} />
          </Link>
        </div>

        <div className="dp-grid">
          {featured.map((doc, i) => (
            <div key={i} className="dp-card">
              {/* Avatar */}
              <div className="dp-avatar-wrap" style={{ background: doc.bg }}>
                <span className="dp-emoji">{doc.emoji}</span>
              </div>

              {/* Info */}
              <div className="dp-info">
                <h3 className="dp-name">{doc.name}</h3>
                <p className="dp-spec">{doc.spec}</p>

                <div className="dp-meta">
                  <div className="dp-meta-item">
                    <Star size={13} fill="#F59E0B" color="#F59E0B" />
                    <span>4.9</span>
                  </div>
                  <div className="dp-meta-sep">•</div>
                  <span>{doc.exp} Experience</span>
                </div>

                <div className="dp-schedule">
                  <Calendar size={13} style={{ color: doc.color }} />
                  <span>OPD: {doc.days}</span>
                </div>
              </div>

              {/* Book button */}
              <Link to="/doctors" className="dp-book-btn" style={{ background: doc.bg, color: doc.color, border: `1.5px solid ${doc.color}30` }}>
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorPreview;
