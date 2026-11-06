import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Activity, Users, Award, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import './Technology.css';

const Technology = () => {
  return (
    <section className="helix-modern-hospital-section">
      <div className="container">
        {/* Main 2-Column Showcase */}
        <div className="helix-hospital-grid">
          {/* Left Column: Glass Architectural Hospital Showcase Card */}
          <div className="helix-building-card">
            <div className="helix-building-inner">
              <div className="building-badge-tag">
                <ShieldCheck size={15} />
                <span>Modern Facilities & Advanced Diagnostics</span>
              </div>
              <div className="building-center-callout">
                <span className="building-hospital-name">Apex Hospital</span>
                <span className="building-hospital-sub">Solan, Himachal Pradesh</span>
              </div>
              <div className="building-bottom-pills">
                <div className="b-pill">1.5T Silent MRI</div>
                <div className="b-pill">16-Slice CT</div>
                <div className="b-pill">24/7 ICU Trauma</div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Mission & Value Copy */}
          <div className="helix-mission-text-side">
            <span className="helix-mini-badge">About Apex Hospital</span>
            <h2 className="helix-mission-heading">
              Modern Hospital for a <span className="text-primary">Healthier Future</span>
            </h2>
            <p className="helix-mission-lead">
              Apex Hospital is a premier multi-speciality healthcare center in Solan, offering world-class medical services with a team of experienced specialists, advanced radiological imaging, and a patient-first approach.
            </p>

            <div className="helix-benefit-checklist">
              <div className="helix-check-item">
                <CheckCircle2 size={18} className="text-secondary" />
                <span>24/7 Emergency & Critical Trauma Intensive Care</span>
              </div>
              <div className="helix-check-item">
                <CheckCircle2 size={18} className="text-secondary" />
                <span>NABH Aligned Clinical Protocols & Diagnostic Precision</span>
              </div>
              <div className="helix-check-item">
                <CheckCircle2 size={18} className="text-secondary" />
                <span>Doorstep Blood Sample Collection Across Solan & Suburbs</span>
              </div>
            </div>

            <div className="helix-mission-cta-row">
              <Link to="/about">
                <Button variant="primary" className="helix-learn-btn">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/services" className="helix-story-link">
                View All Specialities
              </Link>
            </div>
          </div>
        </div>

        {/* 4-Stat Strip (Helix Style: 250+ Beds, 20K+ Patients, 99% Satisfaction, 15+ Specialists) */}
        <div className="helix-key-metrics-strip">
          <div className="helix-metric-col">
            <div className="metric-icon-box">
              <Activity size={22} className="text-primary" />
            </div>
            <div className="metric-text-box">
              <span className="metric-number">50+</span>
              <span className="metric-title">Hospital Beds & Daycare</span>
            </div>
          </div>

          <div className="helix-metric-col">
            <div className="metric-icon-box">
              <Users size={22} className="text-primary" />
            </div>
            <div className="metric-text-box">
              <span className="metric-number">25,000+</span>
              <span className="metric-title">Satisfied Patients</span>
            </div>
          </div>

          <div className="helix-metric-col">
            <div className="metric-icon-box">
              <ShieldCheck size={22} className="text-primary" />
            </div>
            <div className="metric-text-box">
              <span className="metric-number">99.4%</span>
              <span className="metric-title">Diagnostic Accuracy</span>
            </div>
          </div>

          <div className="helix-metric-col">
            <div className="metric-icon-box">
              <Award size={22} className="text-primary" />
            </div>
            <div className="metric-text-box">
              <span className="metric-number">15+</span>
              <span className="metric-title">Senior Consultants</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;