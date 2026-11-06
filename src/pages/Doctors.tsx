import { useState, useMemo } from 'react';
import { Search, Calendar, Star, MapPin, Video, UserCheck, Stethoscope } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { AppointmentModal } from '../components/ui/AppointmentModal';
import './Doctors.css';

interface ModernDoctor {
  id: string;
  name: string;
  specialty: string;
  department: string;
  rating: number;
  experienceYears: number;
  distance: string;
  nextAvailable: string;
  consultMode: string[];
  startingFee: string;
  avatarBg: string;
  initials: string;
}

const modernDoctorsList: ModernDoctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Arman Rahman',
    specialty: 'Cardiologist',
    department: 'Cardiology',
    rating: 4.9,
    experienceYears: 15,
    distance: '2.1 km',
    nextAvailable: 'Today',
    consultMode: ['Online', 'In-Person'],
    startingFee: '₹500',
    avatarBg: '#044e54',
    initials: 'AR'
  },
  {
    id: 'doc-2',
    name: 'Dr. Imtiaz Karim',
    specialty: 'General Physician',
    department: 'General Medicine',
    rating: 4.9,
    experienceYears: 15,
    distance: '3.2 km',
    nextAvailable: 'Today',
    consultMode: ['Online', 'In-Person'],
    startingFee: '₹350',
    avatarBg: '#087e8b',
    initials: 'IK'
  },
  {
    id: 'doc-3',
    name: 'Dr. Farhan Siddique',
    specialty: 'Radiologist & Imaging',
    department: 'Radiology',
    rating: 4.9,
    experienceYears: 14,
    distance: '1.8 km',
    nextAvailable: 'Today',
    consultMode: ['In-Person'],
    startingFee: '₹600',
    avatarBg: '#0d6e75',
    initials: 'FS'
  },
  {
    id: 'doc-4',
    name: 'Dr. Rehan Mahmud',
    specialty: 'Orthopedic Specialist',
    department: 'Orthopedics',
    rating: 4.9,
    experienceYears: 12,
    distance: '1.5 km',
    nextAvailable: 'Tomorrow',
    consultMode: ['In-Person'],
    startingFee: '₹500',
    avatarBg: '#02363a',
    initials: 'RM'
  },
  {
    id: 'doc-5',
    name: 'Dr. Zayaan AKM',
    specialty: 'Consultant Neurosurgeon',
    department: 'Neurosurgery',
    rating: 4.8,
    experienceYears: 16,
    distance: '1.9 km',
    nextAvailable: 'Visiting Roster',
    consultMode: ['In-Person'],
    startingFee: '₹800',
    avatarBg: '#0f2d2e',
    initials: 'ZA'
  },
  {
    id: 'doc-6',
    name: 'Dr. Tahmid Noor',
    specialty: 'Pathologist & Lab Head',
    department: 'Pathology',
    rating: 4.9,
    experienceYears: 13,
    distance: '2.4 km',
    nextAvailable: 'Daily',
    consultMode: ['In-Person'],
    startingFee: '₹300',
    avatarBg: '#044e54',
    initials: 'TN'
  },
  {
    id: 'doc-7',
    name: 'Dr. Afnan Hossain',
    specialty: 'Cardiothoracic Consultant',
    department: 'Cardiology',
    rating: 4.9,
    experienceYears: 18,
    distance: '3.5 km',
    nextAvailable: 'Prior Booking',
    consultMode: ['In-Person'],
    startingFee: '₹900',
    avatarBg: '#087e8b',
    initials: 'AH'
  },
  {
    id: 'doc-8',
    name: 'Dr. Rafiul Islam',
    specialty: 'Pediatric Consultant',
    department: 'Pediatrics',
    rating: 4.9,
    experienceYears: 11,
    distance: '2.2 km',
    nextAvailable: 'Today',
    consultMode: ['Online', 'In-Person'],
    startingFee: '₹400',
    avatarBg: '#0d6e75',
    initials: 'RI'
  }
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoctorName, setSelectedDoctorName] = useState('');

  const filterTabs = ['All', 'Available Today', 'Cardiology', 'Radiology', 'Neurosurgery', 'Orthopedics', 'General Medicine'];

  const filteredDoctors = useMemo(() => {
    return modernDoctorsList.filter((doc) => {
      const matchesSearch = 
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());

      if (selectedFilter === 'All') return matchesSearch;
      if (selectedFilter === 'Available Today') return matchesSearch && doc.nextAvailable === 'Today';
      return matchesSearch && doc.department.toLowerCase() === selectedFilter.toLowerCase();
    });
  }, [searchTerm, selectedFilter]);

  const handleBookNow = (docName: string) => {
    setSelectedDoctorName(docName);
    setModalOpen(true);
  };

  return (
    <div className="dribbble-doctors-page">
      <div className="container">
        {/* Main Heading & Intro */}
        <div className="dribbble-header-wrap">
          <div className="dribbble-title-area">
            <h1 className="dribbble-main-title">Find Your Doctor</h1>
            <p className="dribbble-sub-title">
              Search by name, specialty, or department — we'll help you find the right medical care in Solan.
            </p>
          </div>

          {/* Search Bar matching screenshot */}
          <div className="dribbble-search-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Try 'cardiologist' or 'Dr. Arman'..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Pills Row */}
        <div className="dribbble-pills-row">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`dribbble-filter-pill ${selectedFilter === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 4-Column Card Grid (matching screenshot 1) */}
        <div className="dribbble-cards-grid">
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="dribbble-doc-card">
              {/* Doctor Avatar Card Top */}
              <div className="doc-avatar-container" style={{ background: doc.avatarBg }}>
                <div className="doc-avatar-silhouette">
                  <span className="doc-initials-text">{doc.initials}</span>
                </div>
                <div className="doc-dist-chip">
                  <MapPin size={11} /> {doc.distance}
                </div>
              </div>

              {/* Doctor Card Content */}
              <div className="doc-card-body">
                <div className="doc-name-avail-row">
                  <h3 className="doc-card-name">{doc.name}</h3>
                  <span className={`doc-avail-dot-tag ${doc.nextAvailable === 'Today' ? 'today' : 'other'}`}>
                    <span className="dot"></span> {doc.nextAvailable}
                  </span>
                </div>

                <p className="doc-card-spec">{doc.specialty}</p>

                {/* Experience & Rating */}
                <div className="doc-metrics-row">
                  <span className="doc-exp-label">
                    <UserCheck size={13} className="inline mr-1 text-slate-400" />
                    {doc.experienceYears} years experience
                  </span>
                  <span className="doc-rating-badge">
                    <Star size={12} className="fill-amber-400 text-amber-400 inline mr-0.5" />
                    {doc.rating}
                  </span>
                </div>

                {/* Consultation Modes */}
                <div className="doc-consult-modes">
                  {doc.consultMode.map((mode, i) => (
                    <span key={i} className="mode-chip">
                      {mode === 'Online' ? <Video size={11} className="mr-1" /> : <Stethoscope size={11} className="mr-1" />}
                      {mode}
                    </span>
                  ))}
                </div>

                {/* Price & Book Now CTA */}
                <div className="doc-card-footer-strip">
                  <div className="doc-fee-box">
                    <span className="fee-label">Consultation</span>
                    <span className="fee-amount">{doc.startingFee}</span>
                  </div>

                  <Button 
                    variant="primary" 
                    className="doc-book-btn"
                    onClick={() => handleBookNow(`${doc.name} (${doc.specialty})`)}
                  >
                    <Calendar size={13} className="mr-1" /> Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-3xl bg-white rounded-2xl border border-border">
            <p className="text-light mb-sm">No doctors found matching your criteria.</p>
            <Button variant="outline" size="sm" onClick={() => { setSearchTerm(''); setSelectedFilter('All'); }}>
              Reset Search
            </Button>
          </div>
        )}
      </div>

      <AppointmentModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        defaultService={selectedDoctorName}
      />
    </div>
  );
};

export default Doctors;