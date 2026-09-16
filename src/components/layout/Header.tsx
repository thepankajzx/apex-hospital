import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
import { AppointmentModal } from '../ui/AppointmentModal';
import { ApexLogo } from '../ui/ApexLogo';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Health Packages', path: '/health-packages' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Patient Info', path: '/patient-information' },
  ];

  return (
    <>
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-md font-semibold text-xs text-primary">
            <span className="flex items-center gap-xs">
               <Clock size={12} className="text-accent" /> 24x7 Emergency Services Available
            </span>
          </div>
          <div className="flex items-center gap-md font-bold text-sm">
             <a href="tel:+917018168156" className="flex items-center gap-xs text-primary hover:text-accent transition-colors">
               <Phone size={14} className="text-secondary" /> +91 70181 68156
             </a>
          </div>
        </div>
      </div>
      
      <div className="header-main">
        <div className="container flex justify-between items-center h-full">
          <Link to="/" className="logo flex items-center">
            <ApexLogo size="sm" />
          </Link>

          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <Button variant="primary" onClick={() => setModalOpen(true)} className="book-btn">
              <Calendar size={16} className="mr-sm" /> Book Appointment
            </Button>
            <button 
              className="mobile-menu-btn text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu bg-surface shadow-lg absolute top-full left-0 w-full border-t border-border">
          <nav className="flex flex-col p-md">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="py-sm px-md font-bold text-primary border-b border-border hover:bg-primary-light/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-md p-md">
               <Button variant="primary" fullWidth onClick={() => { setModalOpen(true); setMobileMenuOpen(false); }}>
                 Book Appointment
               </Button>
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
