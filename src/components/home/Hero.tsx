import { PhoneCall, Calendar, ShieldCheck, Activity, FlaskConical, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container relative z-10">
        <div className="hero-grid">
          {/* Left Column: Hero Main Content */}
          <div className="hero-content">
            <div className="hero-badge animate-fade-in">
              <span className="badge-dot"></span>
              #1 Hospital & Diagnostics in Solan
            </div>
            
            <h1 className="hero-title animate-fade-in">
              Advanced Healthcare.<br />
              <span className="hero-highlight">Compassionate Care.</span>
            </h1>
            
            <p className="hero-subtitle animate-fade-in">
              World-class medical diagnostics with state-of-the-art 1.5T MRI, 16 Slice CT, 24/7 Emergency & ICU care right here in Solan.
            </p>
            
            <div className="hero-cta animate-fade-in">
              <Button variant="primary" size="md">
                Book Appointment <Calendar size={16} style={{ marginLeft: '6px' }} />
              </Button>
              <Button variant="outline" size="md" className="hero-btn-outline">
                <PhoneCall size={16} style={{ marginRight: '6px' }} /> 24/7 Helpline
              </Button>
            </div>
          </div>

          {/* Right Column: Ultra-Premium Live Hub Widget */}
          <div className="hero-card-widget animate-fade-in">
            <div className="hero-premium-card">
              {/* Card Header */}
              <div className="prem-card-header">
                <div className="prem-live-tag">
                  <span className="live-pulse-dot"></span>
                  <span>LIVE IN SOLAN</span>
                </div>
                <span className="prem-status-badge">
                  <Zap size={12} className="text-amber-500" /> Fast-Track OPD
                </span>
              </div>

              <h3 className="prem-card-title">Priority Care & Diagnostics</h3>
              <p className="prem-card-desc">
                Instant appointments with on-duty senior specialists and digital scan reports.
              </p>
              
              {/* Interactive Features List */}
              <div className="prem-features-list">
                <a href="#services" className="prem-feature-row">
                  <div className="prem-icon-box icon-blue">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="prem-feature-text">
                    <div className="prem-feature-name">1.5T MRI & 16 Slice CT</div>
                    <div className="prem-feature-sub">Precision scans with same-day reports</div>
                  </div>
                  <span className="prem-row-badge badge-blue">Ready</span>
                </a>

                <a href="#services" className="prem-feature-row">
                  <div className="prem-icon-box icon-emerald">
                    <Activity size={20} />
                  </div>
                  <div className="prem-feature-text">
                    <div className="prem-feature-name">24/7 ICU & Trauma Care</div>
                    <div className="prem-feature-sub">Round-the-clock emergency doctors</div>
                  </div>
                  <span className="prem-row-badge badge-emerald">Active</span>
                </a>

                <a href="#services" className="prem-feature-row">
                  <div className="prem-icon-box icon-purple">
                    <FlaskConical size={20} />
                  </div>
                  <div className="prem-feature-text">
                    <div className="prem-feature-name">Home Sample Collection</div>
                    <div className="prem-feature-sub">Doorstep blood test across Solan</div>
                  </div>
                  <span className="prem-row-badge badge-purple">Available</span>
                </a>
              </div>

              {/* Bottom Quick Contact Strip */}
              <div className="prem-card-footer">
                <div className="prem-doc-presence">
                  <div className="doc-avatar-stack">
                    <span className="doc-avatar bg-blue-600">DR</span>
                    <span className="doc-avatar bg-teal-600">MD</span>
                    <span className="doc-avatar bg-indigo-600">+15</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-700">Specialists On Duty</span>
                </div>
                <a href="tel:+917018168156" className="prem-direct-call">
                  <PhoneCall size={13} /> +91 70181 68156
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
