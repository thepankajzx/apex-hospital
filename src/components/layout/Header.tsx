import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Calendar, ArrowRight, Shield } from 'lucide-react';
import { Button } from '../ui/Button';
import { AppointmentModal } from '../ui/AppointmentModal';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Health Packages', path: '/health-packages' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className={`modern-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo brand */}
          <Link to="/" className="brand-logo">
            <div className="brand-logo-icon">
              <Shield size={20} className="text-white fill-white" />
            </div>
            <div className="brand-logo-text">
              <span className="brand-title">Apex</span>
              <span className="brand-sub">HOSPITAL & DIAGNOSTICS</span>
            </div>
          </Link>

          {/* Clean Pill Desktop Nav */}
          <nav className="desktop-navigation">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions: Direct Emergency Call + Book Appointment Pill */}
          <div className="header-cta-group">
            <a href="tel:+917018168156" className="emergency-quick-pill" title="24/7 Helpline">
              <span className="emergency-icon-circle">
                <Phone size={13} />
              </span>
              <div className="emergency-text-col">
                <span className="emergency-label">24/7 Helpline</span>
                <span className="emergency-num">+91 70181 68156</span>
              </div>
            </a>

            <Button 
              variant="primary" 
              onClick={() => setModalOpen(true)} 
              className="header-pill-appointment-btn"
            >
              <span>Book Appointment</span>
              <ArrowRight size={15} />
            </Button>

            <button 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown-panel animate-fade-in">
            <nav className="mobile-nav-list">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mobile-cta-wrap">
                <Button 
                  variant="primary" 
                  fullWidth 
                  onClick={() => { setModalOpen(true); setMobileMenuOpen(false); }}
                >
                  <Calendar size={16} className="mr-sm" /> Book Appointment
                </Button>
                <a href="tel:+917018168156" className="mobile-emergency-call">
                  <Phone size={14} /> Call Emergency: +91 70181 68156
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Header;
