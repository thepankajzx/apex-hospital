import { Award, Users, HeartHandshake, Headphones } from 'lucide-react';
import './TrustBar.css';

const TrustBar = () => {
  const pillars = [
    {
      title: 'Expert Doctors',
      desc: 'Skilled specialists across neuro, cardio & orthopedics.',
      icon: <Users size={22} className="text-secondary" />
    },
    {
      title: 'Advanced Technology',
      desc: '1.5T MRI, 16-Slice CT & automated pathology.',
      icon: <Award size={22} className="text-secondary" />
    },
    {
      title: 'Personalized Care',
      desc: 'Accurate diagnoses and patient-first treatment.',
      icon: <HeartHandshake size={22} className="text-secondary" />
    },
    {
      title: '24/7 Support',
      desc: 'Continuous emergency, ICU and trauma desk.',
      icon: <Headphones size={22} className="text-secondary" />
    }
  ];

  return (
    <section className="helix-why-choose-section">
      <div className="container">
        {/* Section Header */}
        <div className="why-choose-header">
          <span className="helix-tag-badge">Why Choose Apex Hospital</span>
          <h2 className="why-choose-title">
            Trusted Care, <span className="text-primary">Lasting Wellness</span>
          </h2>
          <p className="why-choose-desc">
            We focus on what matters most — your health. With compassionate care and advanced diagnostic equipment, we are here for every step of your recovery.
          </p>
        </div>

        {/* 4 Clean Value Cards */}
        <div className="why-choose-grid">
          {pillars.map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-icon-circle">
                {item.icon}
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;