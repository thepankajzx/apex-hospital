import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Activity, Users, ShieldCheck, Award } from 'lucide-react';
import { Button } from '../ui/Button';
import './Technology.css';

const Technology = () => {
  return (
    <section className="tech-section">
      <div className="container">

        {/* ── 2 Column Main Grid ── */}
        <div className="tech-grid">

          {/* Left: Hospital visual card */}
          <div className="tech-visual-card">
            {/* Gradient hospital image placeholder */}
            <div className="tech-hospital-image">
              <div className="tech-img-overlay">
                <div className="tech-img-badge">
                  <ShieldCheck size={16} />
                  <span>Advanced Medical Facilities</span>
                </div>
                <div className="tech-img-name">
                  <h3>Apex Hospital</h3>
                  <p>Solan, Himachal Pradesh</p>
                </div>
              </div>
            </div>

            {/* Stats row below image */}
            <div className="tech-stats-row">
              <div className="tech-stat-item">
                <Activity size={18} className="text-primary" />
                <div>
                  <span className="tech-snum">1.5T</span>
                  <span className="tech-slbl">MRI</span>
                </div>
              </div>
              <div className="tech-stat-sep"></div>
              <div className="tech-stat-item">
                <ShieldCheck size={18} className="text-secondary" />
                <div>
                  <span className="tech-snum">16-Slice</span>
                  <span className="tech-slbl">CT Scan</span>
                </div>
              </div>
              <div className="tech-stat-sep"></div>
              <div className="tech-stat-item">
                <Award size={18} style={{ color: '#E63946' }} />
                <div>
                  <span className="tech-snum">24/7</span>
                  <span className="tech-slbl">ICU Trauma</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text copy */}
          <div className="tech-text-side">
            <span className="section-badge">About Apex Hospital</span>
            <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 1rem' }}>
              Modern Hospital for a <span className="text-primary">Healthier Future</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 1.75rem', maxWidth: '100%' }}>
              Apex Hospital is Solan's premier multi-speciality healthcare centre — combining world-class diagnostic technology with experienced specialist doctors and a patient-first philosophy.
            </p>

            <div className="tech-checklist">
              <div className="tech-check-row">
                <CheckCircle2 size={18} style={{ color: '#10B981', flexShrink: 0 }} />
                <span>24/7 Emergency, ICU & Trauma Intensive Care</span>
              </div>
              <div className="tech-check-row">
                <CheckCircle2 size={18} style={{ color: '#10B981', flexShrink: 0 }} />
                <span>Advanced 1.5T MRI, 16-Slice CT & Digital X-Ray</span>
              </div>
              <div className="tech-check-row">
                <CheckCircle2 size={18} style={{ color: '#10B981', flexShrink: 0 }} />
                <span>Doorstep Blood Sample Collection — Solan & Suburbs</span>
              </div>
              <div className="tech-check-row">
                <CheckCircle2 size={18} style={{ color: '#10B981', flexShrink: 0 }} />
                <span>15+ Senior Specialist Consultants On-Call</span>
              </div>
            </div>

            <div className="tech-cta-row">
              <Link to="/about">
                <Button variant="primary" className="tech-btn-primary">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/services" className="tech-link-secondary">
                All Specialities →
              </Link>
            </div>
          </div>
        </div>

        {/* ── 4 Metric Strip ── */}
        <div className="tech-metrics-strip">
          <div className="tech-metric">
            <div className="tech-metric-icon" style={{ background: '#EEF6FF', color: '#0057A8' }}>
              <Activity size={22} />
            </div>
            <span className="tech-metric-num">50+</span>
            <span className="tech-metric-lbl">Hospital Beds</span>
          </div>
          <div className="tech-metric-divider"></div>
          <div className="tech-metric">
            <div className="tech-metric-icon" style={{ background: '#D1FAE5', color: '#10B981' }}>
              <Users size={22} />
            </div>
            <span className="tech-metric-num">25,000+</span>
            <span className="tech-metric-lbl">Patients Treated</span>
          </div>
          <div className="tech-metric-divider"></div>
          <div className="tech-metric">
            <div className="tech-metric-icon" style={{ background: '#E0F9FF', color: '#00B4D8' }}>
              <ShieldCheck size={22} />
            </div>
            <span className="tech-metric-num">99.4%</span>
            <span className="tech-metric-lbl">Diagnostic Accuracy</span>
          </div>
          <div className="tech-metric-divider"></div>
          <div className="tech-metric">
            <div className="tech-metric-icon" style={{ background: '#FEE2E4', color: '#E63946' }}>
              <Award size={22} />
            </div>
            <span className="tech-metric-num">15+</span>
            <span className="tech-metric-lbl">Senior Consultants</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Technology;
