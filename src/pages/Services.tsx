import { Link } from 'react-router-dom';
import { ArrowRight, ActivitySquare } from 'lucide-react';
import { services } from '../data/services';
import '../components/home/ServiceGrid.css'; // Reusing some CSS

const Services = () => {
  const imagingServices = services.filter(s => s.category === 'imaging');
  const consultationServices = services.filter(s => s.category === 'consultation');
  const otherServices = services.filter(s => s.category === 'other');

  return (
    <div className="page-container py-2xl">
      <div className="container">
        <div className="text-center mb-2xl">
          <h1 className="section-title">Hospital Services</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Comprehensive, accurate, and rapid medical services using the latest technology.
          </p>
        </div>

        <div className="mb-2xl">
          <h2 className="mb-lg text-primary text-2xl">Imaging & Radiology</h2>
          <div className="service-grid">
            {imagingServices.map(service => (
              <Link to={`/services/${service.id}`} key={service.id} className="service-card">
                <div className="service-icon-wrapper">
                  <ActivitySquare size={32} />
                </div>
                <h3 className="service-card-title">{service.name}</h3>
                <p className="service-card-desc">{service.shortDescription}</p>
                <div className="service-card-action">
                  Learn more <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-2xl">
          <h2 className="mb-lg text-primary text-2xl">Laboratory & Pathology</h2>
          <div className="service-grid">
            {otherServices.map(service => (
              <Link to={`/services/${service.id}`} key={service.id} className="service-card">
                <div className="service-icon-wrapper">
                  <ActivitySquare size={32} />
                </div>
                <h3 className="service-card-title">{service.name}</h3>
                <p className="service-card-desc">{service.shortDescription}</p>
                <div className="service-card-action">
                  Learn more <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-lg text-primary text-2xl">Consultations & OPD</h2>
          <div className="service-grid">
            {consultationServices.map(service => (
              <Link to={`/services/${service.id}`} key={service.id} className="service-card">
                <div className="service-icon-wrapper">
                  <ActivitySquare size={32} />
                </div>
                <h3 className="service-card-title">{service.name}</h3>
                <p className="service-card-desc">{service.shortDescription}</p>
                <div className="service-card-action">
                  Learn more <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
