import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Info, CheckCircle } from 'lucide-react';
import { services } from '../data/services';
import { Button } from '../components/ui/Button';

const ServiceDetails = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="container py-3xl text-center">
        <h2>Service not found</h2>
        <Link to="/services" className="btn btn-primary mt-md">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-details-page">
      {/* Service Hero */}
      <div className="bg-primary-light text-surface py-2xl">
        <div className="container">
          <Link to="/services" className="text-secondary flex items-center gap-xs mb-md hover:text-white">
            <ChevronLeft size={16} /> Back to all services
          </Link>
          <h1 className="text-3xl font-bold mb-sm">{service.name}</h1>
          <p className="text-lg opacity-90 max-w-3xl">{service.shortDescription}</p>
        </div>
      </div>

      <div className="container py-2xl">
        <div className="grid grid-cols-3 gap-2xl">
          
          <div className="col-span-2" style={{ gridColumn: 'span 2' }}>
            <h2 className="text-2xl text-primary mb-md">About this Service</h2>
            <p className="mb-lg text-light leading-relaxed">
              [Detailed medical description placeholder. Real content will explain what {service.name} is, 
              why it is performed, and what conditions it helps diagnose. This information will be directly 
              sourced from Apex Hospital verified literature.]
            </p>

            <h3 className="text-xl text-primary mb-sm">Why it is performed</h3>
            <ul className="mb-lg space-y-2">
              <li className="flex gap-sm items-start"><CheckCircle size={18} className="text-secondary mt-1" /> To diagnose specific conditions.</li>
              <li className="flex gap-sm items-start"><CheckCircle size={18} className="text-secondary mt-1" /> To monitor ongoing treatments.</li>
              <li className="flex gap-sm items-start"><CheckCircle size={18} className="text-secondary mt-1" /> To guide medical procedures.</li>
            </ul>

            <h3 className="text-xl text-primary mb-sm">Preparation</h3>
            <div className="bg-background p-md rounded-md border border-border mb-lg">
              <div className="flex gap-sm items-start mb-sm">
                <Info size={20} className="text-primary flex-shrink-0" />
                <p className="text-sm">
                  Preparation guidelines vary based on the specific type of {service.name}. 
                  Please consult our staff when booking for exact instructions regarding fasting, 
                  medications, or clothing requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="bg-surface p-xl rounded-lg shadow-md border border-border sticky" style={{ top: '100px' }}>
              <h3 className="text-xl text-primary mb-md">Book {service.name}</h3>
              <p className="text-sm text-light mb-lg">Need this test? Contact us now to schedule an appointment or ask questions.</p>
              
              <div className="flex flex-col gap-sm">
                <Button variant="primary" fullWidth>Request Appointment</Button>
                <Button variant="whatsapp" fullWidth>Enquire on WhatsApp</Button>
                <Button variant="outline" fullWidth>Call Us</Button>
              </div>
              
              <hr className="my-md border-border" style={{ margin: '1.5rem 0' }} />
              
              <p className="text-xs text-center text-light">
                Results available online. <br/>Same day reporting for most tests.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
