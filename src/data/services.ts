export interface Service {
  id: string;
  name: string;
  badge: string;
  shortDescription: string;
  image: string;
  category: 'imaging' | 'consultation' | 'other';
  isPopular?: boolean;
}

export interface QuickFeature {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'heart' | 'stethoscope' | 'activity' | 'emergency';
}

export const quickFeatures: QuickFeature[] = [
  { id: '1', title: 'MD Medicine Specialist', subtitle: 'Expert internal medicine care', iconName: 'heart' },
  { id: '2', title: 'Cardiac & Respiratory Physician', subtitle: 'Heart and lung specialist care', iconName: 'stethoscope' },
  { id: '3', title: 'Physiotherapy & Rehab', subtitle: 'Modern rehabilitation services', iconName: 'activity' },
  { id: '4', title: '24x7 Emergency Services', subtitle: 'Round-the-clock trauma & emergency', iconName: 'emergency' }
];

export const services: Service[] = [
  { 
    id: 'mri', 
    name: '1.5 Tesla MRI & CT', 
    badge: 'Diagnostics',
    shortDescription: 'High-resolution imaging for precise, instant clinical diagnosis.', 
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80',
    category: 'imaging', 
    isPopular: true 
  },
  { 
    id: 'icu', 
    name: 'ICU & Critical Care', 
    badge: 'Critical Care',
    shortDescription: 'Advanced intensive care units with round-the-clock vital monitoring.', 
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    category: 'consultation', 
    isPopular: true 
  },
  { 
    id: 'emergency', 
    name: '24x7 Emergency & Trauma', 
    badge: 'Emergency',
    shortDescription: 'Immediate critical response & rapid triage by trauma specialists.', 
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80',
    category: 'consultation', 
    isPopular: true 
  },
  { 
    id: 'maternity', 
    name: 'Maternity & Child Care', 
    badge: 'Mother & Child',
    shortDescription: 'Comprehensive obstetric care, neonatal ICU and gentle delivery.', 
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
    category: 'consultation', 
    isPopular: true 
  },
  { 
    id: 'surgery', 
    name: 'General & Laparoscopy', 
    badge: 'Surgical Care',
    shortDescription: 'Minimally invasive advanced laparoscopic and general surgeries.', 
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80',
    category: 'consultation', 
    isPopular: true 
  },
  { 
    id: 'orthopedics', 
    name: 'Orthopedics & Joint Care', 
    badge: 'Bone & Joints',
    shortDescription: 'Expert joint replacement, fracture management and arthroscopy.', 
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80',
    category: 'consultation' 
  },
  { 
    id: 'cardiology', 
    name: 'Cardiology Care', 
    badge: 'Cardiac Health',
    shortDescription: 'Heart health evaluations, ECG, ECHO, and preventive cardiology.', 
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=600&q=80',
    category: 'consultation' 
  }
];

export interface HealthPackage {
  id: string;
  name: string;
  description: string;
  targetAudience: string;
  highlightBadge: string;
  theme: string;
  testsIncluded: string[];
}

export const healthPackages: HealthPackage[] = [
  {
    id: 'whole-body-wellness',
    name: 'Whole Body Wellness Package',
    description: 'A comprehensive health checkup to assess your overall well-being and identify potential health risks early.',
    targetAudience: 'Adults above 30 years',
    highlightBadge: 'Age 30+ Years',
    theme: 'theme-royal',
    testsIncluded: ['Complete Blood Count', 'Lipid Profile', 'Liver Function Test', 'Kidney Function Test', 'Fasting Blood Sugar', 'Urine Routine', 'ECG', 'Chest X-Ray']
  },
  {
    id: 'whole-body-master',
    name: 'Whole Body Master Package',
    description: 'An advanced full-body screening package including essential diagnostic imaging and extensive lab profiles.',
    targetAudience: 'Adults above 40 years',
    highlightBadge: 'Age 40+ Years',
    theme: 'theme-navy',
    testsIncluded: ['All tests in Wellness Package', 'Thyroid Profile', 'HbA1c', 'Vitamin D', 'Vitamin B12', 'Ultrasound Whole Abdomen']
  },
  {
    id: 'senior-citizen',
    name: 'Senior Citizen Complete Body Package',
    description: 'Tailored health assessment focusing on age-related conditions, bone health, and cardiac wellness.',
    targetAudience: 'Seniors (60+ years)',
    highlightBadge: 'Seniors 60+ Years',
    theme: 'theme-senior',
    testsIncluded: ['Cardiac Risk Markers', 'Bone Health Profile', 'Complete Hemogram', 'Renal Profile', 'Liver Profile', 'Eye Checkup']
  },
  {
    id: 'diabetic',
    name: 'Diabetic Package',
    description: 'Essential screening for diabetic patients to monitor blood sugar control and related organ health.',
    targetAudience: 'Diabetic patients',
    highlightBadge: 'Diabetic Care',
    theme: 'theme-diabetic',
    testsIncluded: ['Fasting Blood Sugar', 'PP Blood Sugar', 'HbA1c', 'Lipid Profile', 'Serum Creatinine', 'Urine Microalbumin']
  },
  {
    id: 'diabetic-master',
    name: 'Diabetic Master Package',
    description: 'Comprehensive evaluation for diabetes management, including advanced cardiac and renal assessments.',
    targetAudience: 'Long-term diabetic patients',
    highlightBadge: 'Chronic Diabetes',
    theme: 'theme-ocean',
    testsIncluded: ['All tests in Diabetic Package', 'ECG', 'Fundus Examination', 'Liver Function Test', 'Thyroid Profile']
  },
  {
    id: 'arthritis',
    name: 'Arthritis (Joints) Package',
    description: 'Diagnostic profile to detect and monitor joint inflammation, arthritis, and bone health.',
    targetAudience: 'Individuals with joint pain',
    highlightBadge: 'Joint & Bone Care',
    theme: 'theme-arthritis',
    testsIncluded: ['RA Factor', 'CRP', 'Uric Acid', 'Calcium', 'Vitamin D', 'X-Ray Joints (as advised)']
  },
  {
    id: 'cardiac',
    name: 'Cardiac (Heart) Package',
    description: 'Focused evaluation of cardiovascular health, identifying risk factors for heart disease.',
    targetAudience: 'Individuals with cardiac risk factors',
    highlightBadge: 'Heart & Cardiac Risk',
    theme: 'theme-cardiac',
    testsIncluded: ['Lipid Profile', 'ECG', 'Echocardiography', 'TMT (Treadmill Test)', 'Fasting Blood Sugar']
  }
];

export const trustStats = [
  { label: 'Years of Trust', value: 'Verified' },
  { label: 'Advanced Modalities', value: '15+' },
  { label: 'Specialist Doctors', value: 'Multiple' },
  { label: 'Location', value: 'Solan, HP' }
];

export const features = [
  { title: 'Advanced Healthcare Facilities', description: 'State-of-the-art medical equipment and wards.' },
  { title: 'Expert Specialists', description: 'Highly qualified doctors for every department.' },
  { title: '24/7 Emergency Services', description: 'Round-the-clock emergency care and trauma center.' },
  { title: '24/7 Ambulance Service', description: 'Emergency transport services available round the clock.' }
];
