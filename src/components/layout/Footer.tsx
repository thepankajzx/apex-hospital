import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MapPin, Clock, Shield } from 'lucide-react';
import './Footer.css';

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/917018168156?text=Hi%20Apex%20Hospital%2C%20I%20want%20to%20book%20an%20appointment."
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    title="Chat on WhatsApp"
  >
    <span className="whatsapp-float-icon">💬</span>
    <span>Chat with Us</span>
  </a>
);

const Footer = () => {
  return (
    <footer className="helix-footer">
      <WhatsAppFloat />
      <div className="container">
        {/* Top Floating Banner: 'Your Health, Our Mission' (from Helix screenshot) */}
        <div className="helix-footer-banner">
          <div className="helix-footer-banner-left">
            <div className="banner-logo-leaf">
              <Shield size={24} className="text-secondary" />
            </div>
            <div>
              <h3 className="banner-title">Your Health, Our Mission</h3>
              <p className="banner-sub">Take the first step towards a healthier you. Book your appointment today.</p>
            </div>
          </div>
          <Link to="/contact" className="banner-btn-pill">
            <span>Book Appointment</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Main Footer Links & Info Grid */}
        <div className="helix-footer-links-grid">
          {/* Brand Info */}
          <div className="footer-col-brand">
            <div className="footer-brand-title-wrap">
              <span className="brand-dot-accent"></span>
              <span className="footer-brand-name">Apex Hospital</span>
            </div>
            <p className="footer-brand-summary">
              Solan’s trusted multi-speciality medical center. Providing world-class 1.5T MRI, 16-Slice CT, 24/7 ICU trauma care, and dedicated specialist consultations.
            </p>
            <div className="footer-badge-clean">
              24/7 Emergency & Critical Care Available
            </div>
          </div>

          {/* Quick Nav */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Clinical Services</Link></li>
              <li><Link to="/doctors">Find Doctors</Link></li>
              <li><Link to="/health-packages">Health Packages</Link></li>
              <li><Link to="/contact">Contact & Location</Link></li>
            </ul>
          </div>

          {/* Key Specialities */}
          <div className="footer-col">
            <h4 className="footer-heading">Specialities</h4>
            <ul className="footer-links-list">
              <li><Link to="/services">1.5T MRI & 16-Slice CT</Link></li>
              <li><Link to="/services">24/7 Emergency & ICU</Link></li>
              <li><Link to="/services">Cardiology Consultations</Link></li>
              <li><Link to="/services">Neurosurgery & Spine</Link></li>
              <li><Link to="/services">Orthopedics & Joint Care</Link></li>
              <li><Link to="/services">Pathology & Home Collection</Link></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="footer-col">
            <h4 className="footer-heading">Hospital Desk</h4>
            <div className="footer-contact-items">
              <div className="f-contact-row">
                <MapPin size={18} className="text-secondary flex-shrink-0" />
                <span>Apex Hospital & Diagnostics, Near Bypass, Solan, HP 173212</span>
              </div>
              <div className="f-contact-row">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <a href="tel:+917018168156" className="font-bold text-white hover:text-secondary">
                  +91 70181 68156
                </a>
              </div>
              <div className="f-contact-row">
                <Clock size={18} className="text-secondary flex-shrink-0" />
                <span>Emergency: 24/7 • OPD: 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="helix-footer-bottom">
          <p>© {new Date().getFullYear()} Apex Hospital & Diagnostics. All rights reserved.</p>
          <div className="helix-footer-sub-links">
            <Link to="/about">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about">Terms & Conditions</Link>
            <span>•</span>
            <Link to="/contact">Emergency Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;