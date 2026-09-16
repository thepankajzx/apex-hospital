import { UserRound, Calendar } from 'lucide-react';
import { Button } from '../components/ui/Button';

const Doctors = () => {
  const specialists = [
    { name: 'Specialist Visiting', specialty: 'Neurosurgery', available: 'Schedules Vary' },
    { name: 'Specialist Visiting', specialty: 'Cardiology', available: 'Schedules Vary' },
    { name: 'In-house Expert', specialty: 'Radiology', available: 'Daily' },
    { name: 'In-house Expert', specialty: 'Pathology', available: 'Daily' }
  ];

  return (
    <div className="page-container py-2xl">
      <div className="container">
        <div className="text-center mb-2xl">
          <h1 className="section-title">Our Specialists & Doctors</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Apex Hospital partners with leading specialists to bring expert consultations to Solan.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-xl">
          {specialists.map((doc, index) => (
            <div key={index} className="bg-surface border border-border rounded-lg p-lg flex gap-lg items-center shadow-sm">
              <div className="bg-background rounded-full w-24 h-24 flex items-center justify-center flex-shrink-0 border border-border">
                <UserRound size={40} className="text-primary-light opacity-50" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl text-primary font-semibold mb-xs">{doc.specialty}</h3>
                <p className="text-light mb-sm">{doc.name}</p>
                <div className="flex items-center gap-xs text-sm text-secondary font-medium mb-md">
                  <Calendar size={14} /> Available: {doc.available}
                </div>
                <Button variant="outline" size="sm">Check Schedule</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary-light text-surface rounded-lg p-xl mt-2xl text-center">
          <h2 className="text-2xl mb-sm text-surface">Are you looking for a specific specialist?</h2>
          <p className="mb-lg opacity-90 max-w-2xl mx-auto">
            Visiting specialist schedules change frequently. Please contact our reception desk to get the most up-to-date visiting hours for neurosurgery, cardiology, and other specialities.
          </p>
          <div className="flex justify-center gap-md">
            <Button variant="primary">Call Reception</Button>
            <Button variant="whatsapp">WhatsApp Enquiry</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
