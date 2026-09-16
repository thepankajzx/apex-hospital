import { ShieldCheck, Activity, Users, Clock } from 'lucide-react';
import { trustStats } from '../../data/services';
import './TrustBar.css';

const TrustBar = () => {
  return (
    <section className="trust-bar">
      <div className="container">
        <div className="trust-grid">
          {trustStats.map((stat, index) => (
            <div key={index} className="trust-item">
              <div className="trust-icon">
                {index === 0 ? <ShieldCheck size={24} /> : 
                 index === 1 ? <Activity size={24} /> : 
                 index === 2 ? <Users size={24} /> : <Clock size={24} />}
              </div>
              <div className="trust-text">
                <span className="trust-value">{stat.value}</span>
                <span className="trust-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
