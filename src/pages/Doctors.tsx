import { useState, useMemo } from 'react';
import { Search, Calendar, Phone, Award, Clock, Stethoscope } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { hospitalDoctors, type DoctorProfile } from '../data/doctors';
import { AppointmentModal } from '../components/ui/AppointmentModal';
import './Doctors.css';

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState('');

  const departments = ['All', 'Radiology', 'Pathology', 'Cardiology', 'Neurosurgery', 'Orthopedics', 'General Medicine'];

  const filteredDoctors = useMemo(() => {
    return hospitalDoctors.filter((doc) => {
      const matchDept = selectedDept === 'All' || doc.department.toLowerCase() === selectedDept.toLowerCase();
      const matchSearch =
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.focusAreas.some(area => area.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchDept && matchSearch;
    });
  }, [selectedDept, searchTerm]);

  const handleOpenBooking = (docName: string) => {
    setBookingDoctor(docName);
    setModalOpen(true);
  };

  return (
    <div className="page-container py-2xl">
      <div className="container">
        {/* Header Banner */}
        <div className="text-center mb-xl">
          <span className="inline-flex items-center gap-xs text-xs font-bold uppercase tracking-wider text-secondary bg-secondary-light px-md py-xs rounded-full mb-xs">
            <Stethoscope size={14} /> Medical Team & Visiting Faculty
          </span>
          <h1 className="section-title">Specialist Doctors & Faculty</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Apex Hospital connects residents of Solan and Himachal Pradesh with qualified in-house diagnostic heads and senior visiting consultants.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="max-w-xl mx-auto mb-lg">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by doctor name, symptom or clinical specialty..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-border rounded-full text-sm outline-none focus:border-secondary shadow-sm"
            />
          </div>
        </div>

        {/* Department Pills */}
        <div className="doctor-filter-bar">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`doc-filter-pill ${selectedDept === dept ? 'active' : ''}`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-2 gap-lg mb-2xl">
          {filteredDoctors.map((doc: DoctorProfile) => (
            <div key={doc.id} className="doctor-card">
              <div>
                <div className="flex items-start justify-between gap-sm mb-sm">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{doc.name}</h3>
                    <p className="text-xs font-semibold text-secondary">{doc.qualifications}</p>
                  </div>
                  <span className={doc.type === 'In-House' ? 'doc-card-badge-inhouse' : 'doc-card-badge-visiting'}>
                    {doc.type}
                  </span>
                </div>

                <p className="text-sm font-semibold text-heading mb-xs">{doc.specialty}</p>
                <p className="text-xs text-text-light mb-md leading-relaxed">{doc.bio}</p>

                {/* Key clinical focus pills */}
                <div className="flex flex-wrap gap-xs mb-md">
                  {doc.focusAreas.map((area, idx) => (
                    <span key={idx} className="doc-focus-tag">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Schedule & Actions */}
              <div className="pt-md border-t border-border">
                <div className="flex items-center gap-xs text-xs font-medium text-slate-600 mb-sm">
                  <Clock size={14} className="text-secondary flex-shrink-0" />
                  <span>{doc.opdSchedule}</span>
                </div>

                <div className="flex items-center gap-sm">
                  <Button 
                    variant="primary" 
                    size="sm"
                    fullWidth
                    onClick={() => handleOpenBooking(`${doc.name} (${doc.specialty})`)}
                  >
                    <Calendar size={14} style={{ marginRight: '4px' }} />
                    Book OPD Slot
                  </Button>
                  <a
                    href="tel:+917018168156"
                    className="p-sm border border-border rounded-md text-primary hover:bg-surface transition-colors flex items-center justify-center flex-shrink-0"
                    title="Call Reception"
                  >
                    <Phone size={15} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-2xl bg-surface rounded-lg border border-border">
            <p className="text-light mb-sm">No specialists found matching your search.</p>
            <Button variant="outline" size="sm" onClick={() => { setSearchTerm(''); setSelectedDept('All'); }}>
              Reset Filters
            </Button>
          </div>
        )}

        {/* Schedule Verification Callout */}
        <div className="bg-primary text-white rounded-xl p-xl text-center shadow-md">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-sm">
            <Award size={24} className="text-secondary-light" />
          </div>
          <h2 className="text-2xl font-bold mb-xs text-white">Visiting Specialist OPD Inquiries</h2>
          <p className="text-sm text-white/80 max-w-2xl mx-auto mb-lg leading-relaxed">
            Visiting specialist rosters are updated weekly. Contact our hospital helpdesk to confirm exact consultant token timings or to register for emergency trauma reviews.
          </p>
          <div className="flex justify-center gap-md flex-wrap">
            <a href="tel:+917018168156">
              <Button variant="secondary" size="md">
                <Phone size={16} style={{ marginRight: '6px' }} />
                Call Reception (+91 70181 68156)
              </Button>
            </a>
            <Button variant="whatsapp" size="md" onClick={() => handleOpenBooking('Visiting Specialist Schedule Enquiry')}>
              Inquire via WhatsApp
            </Button>
          </div>
        </div>
      </div>

      <AppointmentModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        defaultService={bookingDoctor}
      />
    </div>
  );
};

export default Doctors;