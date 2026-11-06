import { Users, Award, HeartHandshake, Headphones } from 'lucide-react';
import './TrustBar.css';

const TrustBar = () => {
  const stats = [
    { number: '25,000+', label: 'Happy Patients', icon: <Users size={26} />, color: '#0057A8' },
    { number: '15+',     label: 'Senior Specialists', icon: <Award size={26} />, color: '#00B4D8' },
    { number: '10+',     label: 'Departments', icon: <HeartHandshake size={26} />, color: '#10B981' },
    { number: '24/7',    label: 'Emergency Care', icon: <Headphones size={26} />, color: '#E63946' },
  ];

  return (
    <section className="trustbar-section">
      <div className="container">
        <div className="trustbar-grid">
          {stats.map((stat, i) => (
            <div key={i} className="trustbar-card">
              <div className="trustbar-icon-wrap" style={{ color: stat.color, background: `${stat.color}15` }}>
                {stat.icon}
              </div>
              <div className="trustbar-text">
                <span className="trustbar-number" style={{ color: stat.color }}>{stat.number}</span>
                <span className="trustbar-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
