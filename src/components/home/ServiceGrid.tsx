import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Heart, Stethoscope, Activity, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services, quickFeatures } from '../../data/services';
import './ServiceGrid.css';

const ServiceGrid = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getQuickIcon = (name: string) => {
    switch (name) {
      case 'heart': return <Heart size={20} className="text-secondary" />;
      case 'stethoscope': return <Stethoscope size={20} className="text-secondary" />;
      case 'activity': return <Activity size={20} className="text-secondary" />;
      case 'emergency': return <PhoneCall size={20} className="text-secondary" />;
      default: return <Activity size={20} className="text-secondary" />;
    }
  };

  return (
    <section className="service-section py-3xl bg-background">
      <div className="container">
        {/* Section Header with Carousel Navigation */}
        <div className="service-header-row mb-xl">
          <div>
            <h2 className="text-3xl md:text-4xl text-primary font-bold mb-xs">Departments & Treatments</h2>
            <p className="text-md text-text-light max-w-xl">
              Comprehensive clinical departments & modern medical care under expert guidance.
            </p>
          </div>
          <div className="carousel-nav-buttons">
            <button onClick={() => scroll('left')} className="carousel-btn" aria-label="Previous services">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => scroll('right')} className="carousel-btn" aria-label="Next services">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel (Swipeable on Mobile, Scrollable on Desktop) */}
        <div className="service-carousel" ref={carouselRef}>
          {services.map((service) => (
            <Link to={`/services/${service.id}`} key={service.id} className="service-carousel-card">
              <div className="service-img-wrapper">
                <img src={service.image} alt={service.name} className="service-card-img" loading="lazy" />
              </div>
              <div className="service-card-content">
                <span className="service-badge-pill">{service.badge}</span>
                <h3 className="service-card-title">{service.name}</h3>
                <p className="service-card-desc">{service.shortDescription}</p>
                
                <div className="service-card-action">
                  <span className="service-view-text">View Service</span>
                  <span className="service-circle-arrow">
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Highlights Bar (Compact 2-Column Cards) */}
        <div className="quick-specialist-grid mt-2xl">
          {quickFeatures.map((item) => (
            <Link to="/services" key={item.id} className="quick-spec-card">
              <div className="quick-spec-icon-box">
                {getQuickIcon(item.iconName)}
              </div>
              <div className="quick-spec-info">
                <h4 className="quick-spec-title">{item.title}</h4>
                <p className="quick-spec-subtitle">{item.subtitle}</p>
              </div>
              <div className="quick-spec-arrow">
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-2xl">
          <Link to="/services" className="inline-flex items-center gap-xs font-bold text-accent hover:text-primary transition-colors text-md">
            View All Specialized Facilities & Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
