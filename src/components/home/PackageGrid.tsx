import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Activity, Heart, Shield, Stethoscope } from 'lucide-react';
import { healthPackages } from '../../data/services';
import { Button } from '../ui/Button';
import './PackageGrid.css';

const PackageGrid = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getWatermarkIcon = (index: number) => {
    switch (index % 4) {
      case 0: return <Activity size={84} className="pkg-watermark-icon" />;
      case 1: return <Heart size={84} className="pkg-watermark-icon" />;
      case 2: return <Stethoscope size={84} className="pkg-watermark-icon" />;
      default: return <Shield size={84} className="pkg-watermark-icon" />;
    }
  };

  return (
    <section className="package-section py-2xl">
      <div className="container">
        {/* Section Header */}
        <div className="package-header-row mb-xl">
          <div>
            <h2 className="section-title text-3xl md:text-4xl">Comprehensive Health Packages</h2>
            <p className="section-subtitle">Preventive full-body screening and specialized profiles for you and your family.</p>
          </div>
        </div>
      </div>

      {/* Full-width row: [Arrow] [Carousel] [Arrow] */}
      <div className="package-carousel-outer">
        {/* LEFT ARROW — flex sibling, always has its own space */}
        <button
          onClick={() => scroll('left')}
          className="carousel-side-btn"
          aria-label="Previous packages"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Scrollable carousel — takes remaining space */}
        <div className="package-carousel" ref={carouselRef}>
          {healthPackages.map((pkg, idx) => (
            <div key={pkg.id} className="package-carousel-card">
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

        {/* RIGHT ARROW — flex sibling, always has its own space */}
        <button
          onClick={() => scroll('right')}
          className="carousel-side-btn"
          aria-label="Next packages"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="container">
        <div className="text-center mt-xl">
          <Link to="/health-packages" className="view-all-link text-lg">
            View All Health Packages <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackageGrid;
