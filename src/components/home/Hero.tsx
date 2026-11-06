import { PhoneCall, Calendar, ShieldCheck, Activity, FlaskConical, Clock, HeartHandshake } from 'lucide-react';
import { Button } from '../ui/Button';
import './Hero.css';

interface HeroProps {
  onOpenAppointment?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section className="hero">
      <div className="container relative z-10">
        <div className="hero-grid">
          {/* Left Column: Hero Main Content */}
          <div className="hero-content">
            <div className="hero-badge animate-fade-in">
              <span className="badge-dot"></span>
              Multi-Speciality Care & Advanced Diagnostics • Solan
            </div>
            
            <h1 className="hero-title animate-fade-in">
              Advanced Healthcare.<br />
              <span className="hero-highlight">Compassionate Care.</span>
            </h1>
            
            <p className="hero-subtitle animate-fade-in">
              Delivering accurate diagnostic imaging and specialized patient care with 1.5T MRI, 16-Slice CT, 24/7 ICU support, and dedicated emergency doctors right here in Solan.
            </p>
            
            <div className="hero-cta animate-fade-in">
              <Button 
                variant="primary" 
                size="md"
                onClick={onOpenAppointment}
              >
                Book Appointment <Calendar size={16} style={{ marginLeft: '6px' }} />
              </Button>
              <a href="tel:+917018168156" className="hero-emergency-call">
                <PhoneCall size={16} /> 
                <span>
                  <strong>24/7 Emergency:</strong> +91 70181 68156
                </span>
              </a>
            </div>

            {/* Factual Highlights */}
            <div className="hero-factual-strip">
              <div className="hero-factual-item">
                <Clock size={16} className="text-secondary" />
                <span>24/7 Emergency & ICU</span>
              </div>
              <div className="hero-factual-item">
                <ShieldCheck size={16} className="text-secondary" />
                <span>State-of-the-Art Radiology</span>
              </div>
              <div className="hero-factual-item">
                <HeartHandshake size={16} className="text-secondary" />
                <span>Patient-First Consultation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Clinical Care Hub Card */}
          <div className="hero-card-widget animate-fade-in">
            <div className="hero-premium-card">
              {/* Card Header */}
              <div className="prem-card-header">
                <div className="prem-care-tag">
                  <ShieldCheck size={14} className="text-secondary" />
                  <span>APEX HOSPITAL • SOLAN</span>
                </div>
                <span className="prem-status-badge">
                  <Clock size={12} /> Round-The-Clock
                </span>
              </div>

              <h3 className="prem-card-title">Key Medical Departments</h3>
              <p className="prem-card-desc">
                High-precision diagnostic imaging and scheduled specialist doctor consultations.
              </p>
              
              {/* Clinical Departments List */}
              <div className="prem-features-list">
                <a href="#services" className="prem-feature-row">
                  <div className="prem-icon-box icon-blue">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="prem-feature-text">
                    <div className="prem-feature-name">1.5T MRI & 16-Slice CT</div>
                    <div className="prem-feature-sub">High-resolution neurological & body scans</div>
                  </div>
                  <span className="prem-row-badge badge-blue">Imaging</span>
                </a>

                <a href="#services" className="prem-feature-row">
                  <div className="prem-icon-box icon-emerald">
                    <Activity size={20} />
                  </div>
                  <div className="prem-feature-text">
                    <div className="prem-feature-name">24/7 ICU & Emergency Unit</div>
                    <div className="prem-feature-sub">Round-the-clock emergency medical response</div>
                  </div>
                  <span className="prem-row-badge badge-emerald">24/7 Care</span>
                </a>

                <a href="#services" className="prem-feature-row">
                  <div className="prem-icon-box icon-purple">
                    <FlaskConical size={20} />
                  </div>
                  <div className="prem-feature-text">
                    <div className="prem-feature-name">Pathology & Home Collection</div>
                    <div className="prem-feature-sub">Automated laboratory reports delivered safely</div>
                  </div>
                  <span className="prem-row-badge badge-purple">Diagnostics</span>
                </a>
              </div>

              {/* Bottom Direct Contact Strip */}
              <div className="prem-card-footer">
                <div className="prem-doc-presence">
                  <span className="text-xs font-semibold text-slate-700">Need immediate help?</span>
                </div>
                <a href="tel:+917018168156" className="prem-direct-call">
                  <PhoneCall size={13} /> Call Reception
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
