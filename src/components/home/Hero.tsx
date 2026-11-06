import { ArrowRight, PhoneCall, ShieldCheck, Activity, Users, Star, Award, HeartHandshake } from 'lucide-react';
import { Button } from '../ui/Button';
import './Hero.css';

interface HeroProps {
  onOpenAppointment?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section className="helix-hero">
      <div className="container helix-hero-container">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="helix-hero-left">
          {/* Top Health Mission Tag */}
          <div className="helix-mission-pill">
            <span className="helix-pulse-indicator">
              <span className="pulse-circle"></span>
            </span>
            <span className="helix-pill-text">Better Health, Brighter Tomorrow • Solan</span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="helix-hero-title">
            Advanced Care <br />
            for a <span className="highlight-text">Healthier You</span>
          </h1>

          {/* Subtitle */}
          <p className="helix-hero-description">
            At Apex Hospital, we combine modern technology with expert care to give you the best treatment, personalized for your healthcare needs.
          </p>

          {/* Primary Action Buttons */}
          <div className="helix-cta-cluster">
            <Button 
              variant="primary" 
              className="helix-explore-btn"
              onClick={onOpenAppointment}
            >
              <span>Explore Our Services</span>
              <ArrowRight size={16} />
            </Button>

            <a href="tel:+917018168156" className="helix-call-btn">
              <span className="helix-call-icon">
                <PhoneCall size={15} />
              </span>
              <div className="helix-call-copy">
                <span className="helix-call-label">24/7 Emergency</span>
                <span className="helix-call-val">+91 70181 68156</span>
              </div>
            </a>
          </div>

          {/* Social Proof Trust Stack */}
          <div className="helix-hero-stats-row">
            <div className="helix-stat-badge">
              <div className="helix-stat-icon-wrap">
                <Users size={16} className="text-secondary" />
              </div>
              <div className="helix-stat-info">
                <span className="helix-stat-number">25,000+</span>
                <span className="helix-stat-sub">Patients Treated in HP</span>
              </div>
            </div>

            <div className="helix-stat-badge">
              <div className="helix-stat-icon-wrap">
                <Star size={16} className="text-amber-500 fill-amber-500" />
              </div>
              <div className="helix-stat-info">
                <span className="helix-stat-number">4.9 / 5.0</span>
                <span className="helix-stat-sub">Verified Patient Satisfaction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Helix-Style Doctor Visual Composition with Overlapping Pills */}
        <div className="helix-hero-right">
          <div className="helix-visual-stage">
            {/* Soft Organic Background Shape */}
            <div className="helix-organic-bg"></div>

            {/* Central Realistic Medical Showcase Card */}
            <div className="helix-main-showcase-card">
              {/* Modern Clinical Imagery Card */}
              <div className="helix-photo-frame">
                <div className="helix-photo-inner">
                  {/* High Quality Styled Medical Composition */}
                  <div className="doctor-badge-overlay">
                    <span className="doc-avatar-symbol">👨‍⚕️</span>
                    <div>
                      <h4 className="doc-name">Senior Medical Faculty</h4>
                      <p className="doc-spec">Multi-Speciality OPD & Diagnostics</p>
                    </div>
                  </div>
                  <div className="helix-equipment-visual">
                    <div className="eq-chip">
                      <Activity size={14} className="text-secondary" /> 1.5 Tesla MRI
                    </div>
                    <div className="eq-chip">
                      <ShieldCheck size={14} className="text-secondary" /> 16-Slice CT
                    </div>
                    <div className="eq-chip">
                      <HeartHandshake size={14} className="text-secondary" /> 24/7 ICU Trauma
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Verified Experience Badge (Bottom Left) */}
              <div className="helix-floating-badge badge-left">
                <div className="badge-shield-icon">
                  <Award size={18} />
                </div>
                <div>
                  <span className="badge-bold">25+ Years</span>
                  <span className="badge-sub">Trusted Healthcare</span>
                </div>
              </div>

              {/* Floating Top Expert Count Badge (Top Right) */}
              <div className="helix-floating-badge badge-top-right">
                <div className="badge-users-icon">
                  <Users size={16} />
                </div>
                <div>
                  <span className="badge-bold">15+ Specialists</span>
                  <span className="badge-sub">In-House & Visiting</span>
                </div>
              </div>

              {/* Hand-written style Accent Tag */}
              <div className="helix-signature-tag">
                Your Health, Our Priority
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;