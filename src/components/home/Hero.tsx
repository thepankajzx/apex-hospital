import { ArrowRight, PhoneCall, CheckCircle, Star, Clock, Stethoscope } from 'lucide-react';
import { Button } from '../ui/Button';
import './Hero.css';

interface HeroProps {
  onOpenAppointment?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section className="apex-hero">
      <div className="container apex-hero-container">

        {/* ───── LEFT: Headline + CTAs ───── */}
        <div className="apex-hero-left">

          {/* Top pill badge */}
          <div className="apex-hero-badge">
            <span className="apex-badge-dot"></span>
            <span>Solan's Trusted Multi-Speciality Hospital</span>
          </div>

          {/* Big headline */}
          <h1 className="apex-hero-h1">
            Advanced Care<br />
            for a <span className="apex-hero-highlight">Healthier You</span>
          </h1>

          <p className="apex-hero-subtext">
            Combining modern diagnostic technology with compassionate specialist care — 
            right here in Solan, Himachal Pradesh.
          </p>

          {/* CTA Buttons */}
          <div className="apex-cta-row">
            <Button
              variant="primary"
              className="apex-btn-primary"
              onClick={onOpenAppointment}
            >
              <span>Book Appointment</span>
              <ArrowRight size={17} />
            </Button>

            <a href="tel:+917018168156" className="apex-btn-call">
              <span className="apex-call-icon-wrap">
                <PhoneCall size={15} />
              </span>
              <div className="apex-call-text">
                <span className="apex-call-label">Emergency 24/7</span>
                <span className="apex-call-num">+91 70181 68156</span>
              </div>
            </a>
          </div>

          {/* Quick trust points */}
          <div className="apex-trust-checks">
            <div className="apex-check-item">
              <CheckCircle size={16} className="text-green" />
              <span>Free First Consultation</span>
            </div>
            <div className="apex-check-item">
              <CheckCircle size={16} className="text-green" />
              <span>Home Sample Collection</span>
            </div>
            <div className="apex-check-item">
              <CheckCircle size={16} className="text-green" />
              <span>Reports in 24 Hours</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="apex-hero-stats">
            <div className="apex-stat">
              <span className="apex-stat-num">25,000+</span>
              <span className="apex-stat-label">Patients Served</span>
            </div>
            <div className="apex-stat-divider"></div>
            <div className="apex-stat">
              <span className="apex-stat-num">15+</span>
              <span className="apex-stat-label">Specialists</span>
            </div>
            <div className="apex-stat-divider"></div>
            <div className="apex-stat">
              <span className="apex-stat-num">4.9</span>
              <span className="apex-stat-label">Patient Rating</span>
            </div>
          </div>
        </div>

        {/* ───── RIGHT: Visual Card Composition ───── */}
        <div className="apex-hero-right">

          {/* Blue gradient blob bg */}
          <div className="apex-hero-blob"></div>

          {/* Main card */}
          <div className="apex-main-card">

            {/* Top section: doctor profile */}
            <div className="apex-doctor-panel">
              <div className="apex-doctor-avatar">
                <Stethoscope size={36} color="#ffffff" />
              </div>
              <div className="apex-doctor-info">
                <span className="apex-doctor-name">Senior Medical Faculty</span>
                <span className="apex-doctor-spec">Multi-Speciality OPD & Diagnostics</span>
              </div>
              <div className="apex-available-pill">
                <span className="apex-avail-dot"></span>
                Available
              </div>
            </div>

            {/* Center visual: big feature highlight */}
            <div className="apex-card-center">
              <div className="apex-center-icon-ring">
                <div className="apex-center-pulse"></div>
                <Stethoscope size={42} color="#0057A8" />
              </div>
              <h3 className="apex-card-tagline">Your Health.<br />Our Priority.</h3>
              <p className="apex-card-desc">Expert care, advanced diagnostics, and compassionate treatment — all under one roof.</p>
            </div>

            {/* Equipment chips */}
            <div className="apex-equipment-row">
              <div className="apex-eq-chip">🧲 1.5T MRI</div>
              <div className="apex-eq-chip">🔬 16-Slice CT</div>
              <div className="apex-eq-chip">🏥 24/7 ICU</div>
            </div>
          </div>

          {/* Floating badge: Rating */}
          <div className="apex-float-card apex-float-top-right">
            <div className="apex-float-stars">
              {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />)}
            </div>
            <span className="apex-float-title">4.9 / 5.0</span>
            <span className="apex-float-sub">Patient Satisfaction</span>
          </div>

          {/* Floating badge: OPD Hours */}
          <div className="apex-float-card apex-float-bottom-left">
            <div className="apex-float-icon">
              <Clock size={18} color="#0057A8" />
            </div>
            <div>
              <span className="apex-float-title">OPD Hours</span>
              <span className="apex-float-sub">9 AM – 7 PM Daily</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom wave divider */}
      <div className="apex-hero-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F0F7FF" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
