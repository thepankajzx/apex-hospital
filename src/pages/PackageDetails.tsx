import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ShieldAlert, Clock, Phone, Home, Sparkles, Check } from 'lucide-react';
import { healthPackages } from '../data/services';
import { Button } from '../components/ui/Button';
import { AppointmentModal } from '../components/ui/AppointmentModal';
import './PackageDetails.css';

const PackageDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pkg = healthPackages.find(p => p.id === id);

  if (!pkg) {
    return (
      <div className="container py-3xl text-center">
        <h2 className="text-2xl font-bold text-primary mb-md">Package Not Found</h2>
        <Link to="/health-packages" className="btn btn-primary">Browse All Health Packages</Link>
      </div>
    );
  }

  return (
    <div className="package-details-page">
      {/* Hero Header */}
      <div className="pkg-hero">
        <div className="container">
          <Link to="/health-packages" className="pkg-breadcrumb">
            <ChevronLeft size={16} /> Back to all Health Packages
          </Link>
          
          <div className="pkg-header-grid">
            <div className="pkg-header-left">
              <h1 className="pkg-hero-title">{pkg.name}</h1>
              <p className="pkg-hero-desc">{pkg.description}</p>
              
              <div className="pkg-badges-row">
                <span className="pkg-badge">
                  🎯 Recommended For: {pkg.targetAudience}
                </span>
                <span className="pkg-badge">
                  <Clock size={14} /> 10-12 Hrs Fasting
                </span>
                <span className="pkg-badge accent">
                  <Sparkles size={14} /> Same-Day Digital Reports
                </span>
              </div>
            </div>
            
            <div className="pkg-hero-stat-box">
              <span className="pkg-stat-num">{pkg.testsIncluded.length}</span>
              <span className="pkg-stat-label">Tests Included</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Details Body */}
      <div className="container py-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2xl">
          
          {/* Left 2 Columns: Test Details & Process */}
          <div className="lg:col-span-2">
            
            {/* Tests Included Box */}
            <div className="mb-2xl">
              <div className="flex items-center justify-between mb-lg flex-wrap gap-sm">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-xs">What's Included in This Package</h2>
                  <p className="text-sm text-text-light">
                    {pkg.testsIncluded.length} essential clinical and diagnostic parameters tested with automated analyzers.
                  </p>
                </div>
              </div>

              <div className="pkg-tests-container">
                <ul className="pkg-tests-grid">
                  {pkg.testsIncluded.map((test, index) => (
                    <li key={index} className="pkg-test-card">
                      <div className="pkg-test-icon">
                        <Check size={16} />
                      </div>
                      <div>
                        <span className="pkg-test-name">{test}</span>
                        <span className="pkg-test-tag">Verified Parameter</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How It Works Section */}
            <div className="mb-2xl">
              <h3 className="text-xl font-bold text-primary mb-md">How It Works (3 Easy Steps)</h3>
              <div className="pkg-steps-grid">
                <div className="pkg-step-card">
                  <div className="pkg-step-num">1</div>
                  <h4 className="pkg-step-title">Book Slot / Home Visit</h4>
                  <p className="pkg-step-desc">Choose your convenient date & time online or via WhatsApp.</p>
                </div>
                <div className="pkg-step-card">
                  <div className="pkg-step-num">2</div>
                  <h4 className="pkg-step-title">Sample Collection</h4>
                  <p className="pkg-step-desc">Trained technician visits your home or visit Apex Hospital Solan.</p>
                </div>
                <div className="pkg-step-card">
                  <div className="pkg-step-num">3</div>
                  <h4 className="pkg-step-title">Verified Digital Reports</h4>
                  <p className="pkg-step-desc">Get your complete digital report on WhatsApp/SMS within 24 hours.</p>
                </div>
              </div>
            </div>

            {/* Preparation & Fasting Guidelines */}
            <div className="pkg-prep-box">
              <div className="pkg-prep-icon-box">
                <ShieldAlert size={24} />
              </div>
              <div>
                <h4 className="font-bold text-primary text-lg mb-xs">Test Preparation & Guidelines</h4>
                <ul className="text-sm text-text-light leading-relaxed space-y-xs list-disc ml-md">
                  <li><strong>Overnight Fasting:</strong> 10-12 hours of fasting is required for accurate blood sugar and lipid profiles.</li>
                  <li><strong>Hydration:</strong> You may drink plain water normally before the test.</li>
                  <li><strong>Medications:</strong> Continue regular morning blood pressure medicines unless advised otherwise by your doctor.</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Right 1 Column: High-Converting Sticky Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="pkg-booking-card">
              <h3 className="pkg-book-title">Book {pkg.name}</h3>
              <p className="pkg-book-subtitle">Take charge of your health today with priority scheduling.</p>
              
              <div className="flex flex-col gap-md">
                <Button variant="primary" size="lg" fullWidth onClick={() => setIsModalOpen(true)}>
                  Book Appointment Now
                </Button>
                
                {/* Compact inline pills row */}
                <div className="pkg-contact-pills">
                  <a 
                    href="https://wa.me/917018168156?text=Hello%20Apex%20Hospital,%20I%20want%20to%20inquire%20about%20the%20Health%20Package" 
                    target="_blank" 
                    rel="noreferrer"
                    className="pkg-pill-wa"
                  >
                    <span>💬</span> WhatsApp
                  </a>
                  <a 
                    href="tel:+917018168156" 
                    className="pkg-pill-call"
                  >
                    <Phone size={13} /> Call Us
                  </a>
                </div>
              </div>
              
              <div className="pkg-trust-reassurance">
                <div className="flex items-center justify-center gap-xs font-bold text-sm text-primary mb-xs">
                  <Home size={16} className="text-secondary" /> Home Sample Collection Available
                </div>
                <p className="text-xs text-text-light leading-relaxed">
                  Our certified phlebotomists provide safe, hygienic home pickup across Solan & surrounding locations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultService="health-package" 
      />
    </div>
  );
};

export default PackageDetails;
