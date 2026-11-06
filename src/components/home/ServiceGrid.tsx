import { Link } from 'react-router-dom';
import { ArrowUpRight, Activity, Heart, Stethoscope, Sparkles } from 'lucide-react';
import './ServiceGrid.css';

interface SpecialityCard {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  link: string;
  accentBg: string;
}

const specialities: SpecialityCard[] = [
  {
    id: 'neurology',
    title: 'Neurology',
    tagline: 'Expert care for your brain and nervous system.',
    icon: 'brain',
    link: '/services',
    accentBg: '#e6f7f5'
  },
  {
    id: 'cardiology',
    title: 'Cardiology',
    tagline: 'Keep your heart healthy, monitored and strong.',
    icon: 'heart',
    link: '/services',
    accentBg: '#f0f9ff'
  },
  {
    id: 'radiology',
    title: 'Radiology & Imaging',
    tagline: 'Advanced 1.5T MRI, 16-Slice CT, and 4D Sonography.',
    icon: 'lungs',
    link: '/services',
    accentBg: '#fef3c7'
  },
  {
    id: 'general-medicine',
    title: 'General Medicine',
    tagline: 'Complete care for you and your whole family.',
    icon: 'stethoscope',
    link: '/services',
    accentBg: '#f3e8ff'
  }
];

const ServiceGrid = () => {
  const renderIcon = (type: string) => {
    switch (type) {
      case 'brain': return <Activity size={32} className="text-teal-700" />;
      case 'heart': return <Heart size={32} className="text-red-500 fill-red-100" />;
      case 'lungs': return <Sparkles size={32} className="text-amber-600" />;
      default: return <Stethoscope size={32} className="text-primary" />;
    }
  };

  return (
    <section className="helix-specialities-section" id="services">
      <div className="container">
        {/* Section Headline */}
        <div className="helix-section-header">
          <span className="helix-tag-badge">Specialised Clinical Care</span>
          <h2 className="helix-section-title">Key Medical Specialities</h2>
          <p className="helix-section-subtitle">
            Providing evidence-based outpatient consultations and 24/7 advanced radiological diagnostics.
          </p>
        </div>

        {/* 4 Clean Rounded Editorial Cards */}
        <div className="helix-speciality-grid">
          {specialities.map((item) => (
            <Link key={item.id} to={item.link} className="helix-spec-card">
              <div className="helix-spec-top">
                <div className="helix-spec-icon-box" style={{ background: item.accentBg }}>
                  {renderIcon(item.icon)}
                </div>
                <div className="helix-spec-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="helix-spec-bottom">
                <h3 className="helix-spec-title">{item.title}</h3>
                <p className="helix-spec-desc">{item.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;