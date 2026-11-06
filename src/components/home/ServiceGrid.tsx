import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './ServiceGrid.css';

interface Speciality {
  id: string;
  title: string;
  desc: string;
  emoji: string;
  iconBg: string;
  iconColor: string;
  borderColor: string;
}

const specialities: Speciality[] = [
  {
    id: 'neurology',
    title: 'Neurology',
    desc: 'Expert care for brain, spine and nervous system disorders.',
    emoji: '🧠',
    iconBg: '#EDE9FE',
    iconColor: '#7C3AED',
    borderColor: '#DDD6FE',
  },
  {
    id: 'cardiology',
    title: 'Cardiology',
    desc: 'Complete heart care — ECG, echo, 2D & specialist consultation.',
    emoji: '❤️',
    iconBg: '#FEE2E4',
    iconColor: '#E63946',
    borderColor: '#FCA5A5',
  },
  {
    id: 'radiology',
    title: 'Radiology & MRI',
    desc: '1.5T Silent MRI, 16-Slice CT, 4D Ultrasound & X-Ray.',
    emoji: '🔬',
    iconBg: '#DBEAFE',
    iconColor: '#1D4ED8',
    borderColor: '#93C5FD',
  },
  {
    id: 'orthopedics',
    title: 'Orthopedics',
    desc: 'Bone, joint, spine & sports injury treatment by expert surgeons.',
    emoji: '🦴',
    iconBg: '#FEF3C7',
    iconColor: '#D97706',
    borderColor: '#FDE68A',
  },
  {
    id: 'general-medicine',
    title: 'General Medicine',
    desc: 'Comprehensive OPD consultation for all ages & conditions.',
    emoji: '🩺',
    iconBg: '#D1FAE5',
    iconColor: '#059669',
    borderColor: '#6EE7B7',
  },
  {
    id: 'gynecology',
    title: 'Gynecology',
    desc: "Women's health, prenatal care, maternity and gynae OPD.",
    emoji: '🌸',
    iconBg: '#FCE7F3',
    iconColor: '#DB2777',
    borderColor: '#F9A8D4',
  },
  {
    id: 'pediatrics',
    title: 'Pediatrics',
    desc: 'Dedicated child health care — newborn to teen specialists.',
    emoji: '👶',
    iconBg: '#E0F9FF',
    iconColor: '#0891B2',
    borderColor: '#67E8F9',
  },
  {
    id: 'pathology',
    title: 'Pathology & Lab',
    desc: 'Full blood panel, biopsy, home sample collection available.',
    emoji: '🧪',
    iconBg: '#F3E8FF',
    iconColor: '#9333EA',
    borderColor: '#D8B4FE',
  },
];

const ServiceGrid = () => {
  return (
    <section className="sg-section" id="services">
      <div className="container">
        <div className="sg-header">
          <span className="section-badge">Our Specialities</span>
          <h2 className="section-title">Expert Medical Specialities</h2>
          <p className="section-subtitle">
            From advanced diagnostics to specialist consultations — comprehensive healthcare under one roof in Solan.
          </p>
        </div>

        <div className="sg-grid">
          {specialities.map((item) => (
            <Link
              key={item.id}
              to="/services"
              className="sg-card"
              style={{ '--border-hover': item.iconColor } as React.CSSProperties}
            >
              <div className="sg-card-top">
                <div
                  className="sg-icon-box"
                  style={{ background: item.iconBg, border: `1.5px solid ${item.borderColor}` }}
                >
                  <span className="sg-emoji">{item.emoji}</span>
                </div>
                <div className="sg-arrow">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="sg-card-bottom">
                <h3 className="sg-title">{item.title}</h3>
                <p className="sg-desc">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="sg-footer-link">
          <Link to="/services" className="sg-view-all">
            View All Services <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
