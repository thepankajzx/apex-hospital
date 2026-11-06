export interface DoctorProfile {
  id: string;
  name: string;
  qualifications: string;
  specialty: string;
  department: string;
  experience?: string;
  type: 'In-House' | 'Visiting Consultant';
  opdSchedule: string;
  focusAreas: string[];
  bio: string;
}

export const hospitalDoctors: DoctorProfile[] = [
  {
    id: 'dr-radiology-lead',
    name: 'Dr. S. Sharma',
    qualifications: 'MBBS, MD (Radiodiagnosis)',
    specialty: 'Senior Radiologist & Imaging Specialist',
    department: 'Radiology',
    experience: '14+ Years Experience',
    type: 'In-House',
    opdSchedule: 'Monday – Saturday: 9:00 AM – 6:00 PM',
    focusAreas: ['1.5T Neuro & Spine MRI', 'Body CT Angiography', 'Color Doppler Ultrasound'],
    bio: 'Extensive experience in high-resolution cross-sectional imaging and musculoskeletal radiology.'
  },
  {
    id: 'dr-pathology-lead',
    name: 'Dr. A. Verma',
    qualifications: 'MBBS, MD (Pathology)',
    specialty: 'Consultant Pathologist & Lab Director',
    department: 'Pathology',
    experience: '12+ Years Experience',
    type: 'In-House',
    opdSchedule: 'Daily: 8:00 AM – 5:00 PM',
    focusAreas: ['Clinical Biochemistry', 'Hematology & Coagulation', 'Histopathology Quality'],
    bio: 'Oversees automated laboratory quality protocols, critical panic values, and expedited test turnaround.'
  },
  {
    id: 'dr-cardio-visitor',
    name: 'Dr. R. K. Chauhan',
    qualifications: 'MBBS, MD (Medicine), DM (Cardiology)',
    specialty: 'Senior Interventional Cardiologist',
    department: 'Cardiology',
    experience: '16+ Years Experience',
    type: 'Visiting Consultant',
    opdSchedule: 'Visiting Schedule: Prior Appointment Required',
    focusAreas: ['Coronary Artery Disease', 'Heart Failure Management', 'Echocardiography & TMT'],
    bio: 'Provides specialized cardiovascular evaluations and guidance on interventional cardiac procedures.'
  },
  {
    id: 'dr-neuro-visitor',
    name: 'Dr. V. Thakur',
    qualifications: 'MBBS, MS (Surgery), MCh (Neurosurgery)',
    specialty: 'Consultant Neurosurgeon',
    department: 'Neurosurgery',
    experience: '15+ Years Experience',
    type: 'Visiting Consultant',
    opdSchedule: 'Weekly Specialized OPD • Advance Booking Only',
    focusAreas: ['Spine Disorders & Sciatica', 'Head Injury / Trauma Care', 'Cerebrovascular Conditions'],
    bio: 'Expert in cranial trauma, minimally invasive spinal consultations, and neurological diagnostics.'
  },
  {
    id: 'dr-ortho-specialist',
    name: 'Dr. M. K. Gupta',
    qualifications: 'MBBS, MS (Orthopedics)',
    specialty: 'Consultant Orthopedic Surgeon',
    department: 'Orthopedics',
    experience: '11+ Years Experience',
    type: 'In-House',
    opdSchedule: 'Monday – Saturday: 10:00 AM – 4:00 PM',
    focusAreas: ['Joint Pain & Arthritis Management', 'Trauma & Fracture Reduction', 'Sports Injury Rehabilitation'],
    bio: 'Dedicated to bone health restoration, joint preservation, and acute emergency trauma care.'
  },
  {
    id: 'dr-gen-physician',
    name: 'Dr. P. Sood',
    qualifications: 'MBBS, MD (General Medicine)',
    specialty: 'Senior Consultant Physician',
    department: 'General Medicine',
    experience: '18+ Years Experience',
    type: 'In-House',
    opdSchedule: 'Monday – Saturday: 9:00 AM – 2:00 PM & 5:00 PM – 7:30 PM',
    focusAreas: ['Hypertension & Diabetes Management', 'Infectious Diseases', 'Geriatric & Preventive Medicine'],
    bio: 'Holistic clinical management of chronic lifestyle diseases and acute medical illnesses.'
  }
];
