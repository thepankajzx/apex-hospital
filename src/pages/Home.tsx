import { useState } from 'react';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import ServiceGrid from '../components/home/ServiceGrid';
import DoctorPreview from '../components/home/DoctorPreview';
import Technology from '../components/home/Technology';
import PackageGrid from '../components/home/PackageGrid';
import HealthGuide from '../components/home/HealthGuide';
import Testimonials from '../components/home/Testimonials';
import LocationSection from '../components/home/LocationSection';
import FinalCTA from '../components/home/FinalCTA';
import { AppointmentModal } from '../components/ui/AppointmentModal';

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenAppointment = (serviceName?: string) => {
    setSelectedService(serviceName || '');
    setModalOpen(true);
  };

  return (
    <>
      <Hero onOpenAppointment={() => handleOpenAppointment('General OPD / Emergency Consultation')} />
      <TrustBar />
      <ServiceGrid />
      <DoctorPreview />
      <Technology />
      <PackageGrid />
      <HealthGuide onOpenAppointment={handleOpenAppointment} />
      <Testimonials />
      <LocationSection />
      <FinalCTA />

      <AppointmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </>
  );
};

export default Home;
