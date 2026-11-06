import { Link } from 'react-router-dom';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { ApexLogo } from '../ui/ApexLogo';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-modern bg-surface">
      <div className="container">
        <div className="footer-modern-grid">
          {/* Brand Column */}
          <div className="footer-modern-brand">
            <div className="mb-md">
              <Link to="/" className="inline-block">
                <ApexLogo showTagline={true} />
              </Link>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-md font-medium text-text mt-sm">
              Apex Hospital & Diagnostics is Solan’s trusted healthcare center, providing multi-speciality consultations and advanced diagnostic facilities including 1.5T MRI, 16-Slice CT, 24/7 ICU, and automated pathology.
            </p>
            <div className="flex items-center gap-sm text-xs font-semibold text-text opacity-80 flex-wrap">
              <span className="inline-flex items-center gap-xs">
                <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span> 24/7 Emergency & Diagnostics
              </span>
              <span>•</span>
              <span>Advanced Imaging Center</span>
              <span>•</span>
              <span>Solan, HP</span>
            </div>
          </div>

          {/* Links Column */}
          <div className="footer-modern-links">
            <h4 className="text-sm font-bold mb-md uppercase tracking-wide text-primary">QUICK LINKS</h4>
            <ul className="space-y-sm text-sm font-medium">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/health-packages">Health Packages</Link></li>
              <li><Link to="/doctors">Our Doctors</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-modern-contact">
            <h4 className="text-sm font-bold mb-md uppercase tracking-wide text-primary">CONTACT & INFO</h4>
            <ul className="space-y-sm text-sm font-medium">
              <li>Apex Hospital, Mall Road, Solan</li>
              <li>Emergency Services: 24/7</li>
              <li>Email: info@apexhospital.demo</li>
              <li><span className="text-secondary font-bold">WhatsApp: +91 70181 68156</span></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-modern-bottom">
          <div className="footer-bottom-left">
            &copy; {new Date().getFullYear()} Apex Hospital. All rights reserved.
          </div>
          <div className="footer-bottom-right">
            <span className="footer-badge-certified">
              <ShieldCheck size={16} className="text-secondary" /> Certified Healthcare & Diagnostics
            </span>
            <button onClick={scrollToTop} className="footer-back-to-top" aria-label="Back to top">
              Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
