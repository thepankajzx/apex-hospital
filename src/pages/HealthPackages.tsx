import { Link } from 'react-router-dom';
import { CheckCircle2, Activity, Heart, Shield, Stethoscope, ArrowLeft } from 'lucide-react';
import { healthPackages } from '../data/services';
import { Button } from '../components/ui/Button';
import '../components/home/PackageGrid.css';

const getWatermarkIcon = (index: number) => {
  switch (index % 4) {
    case 0: return <Activity size={84} className="pkg-watermark-icon" />;
    case 1: return <Heart size={84} className="pkg-watermark-icon" />;
    case 2: return <Stethoscope size={84} className="pkg-watermark-icon" />;
    default: return <Shield size={84} className="pkg-watermark-icon" />;
  }
};

const HealthPackages = () => {
  return (
    <div className="page-container py-2xl">
      <div className="container">
        {/* Breadcrumb */}
        <Link to="/" className="pkg-breadcrumb" style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-2xl">
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900 }}>All Health Packages</h1>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive preventive checkups designed for every stage of life.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="hp-grid">
          {healthPackages.map((pkg, idx) => (
            <div key={pkg.id} className="package-carousel-card">
              {/* Themed Header */}
              <div className={`package-header ${pkg.theme || 'theme-royal'}`}>
                {getWatermarkIcon(idx)}
                <h3 className="package-title">{pkg.name}</h3>
                <div className="package-audience-wrapper">
                  <span className="package-audience-highlight">
                    🎯 {pkg.highlightBadge || pkg.targetAudience}
                  </span>
                </div>
              </div>

              <div className="package-body">
                <p className="package-desc">{pkg.description}</p>
                <div className="package-tests-preview">
                  <strong>Includes {pkg.testsIncluded.length} key tests:</strong>
                  <ul>
                    {pkg.testsIncluded.slice(0, 4).map((test, i) => (
                      <li key={i}><CheckCircle2 size={14} className="text-secondary flex-shrink-0" /> <span>{test}</span></li>
                    ))}
                    {pkg.testsIncluded.length > 4 && (
                      <div className="package-more-tests">+ {pkg.testsIncluded.length - 4} more tests</div>
                    )}
                  </ul>
                </div>
              </div>
              <div className="package-footer">
                <Link to={`/health-packages/${pkg.id}`} className="btn btn-outline btn-full text-center">
                  View Details
                </Link>
                <Button variant="primary" fullWidth>Enquire Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthPackages;
