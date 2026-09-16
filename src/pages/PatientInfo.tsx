import { FileText, Clock, FlaskConical, Map, AlertCircle, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

const PatientInfo = () => {
  return (
    <div className="page-container bg-background">
      {/* Premium Header */}
      <div className="bg-primary text-surface py-3xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-md">Patient Information</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90 font-light">
            Everything you need to know to make your visit to Apex Hospital smooth and comfortable.
          </p>
        </div>
      </div>

      <div className="container py-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
          
          {/* Test Preparation Card */}
          <div className="bg-surface rounded-xl shadow-md border border-border p-xl hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
            <div className="flex items-start gap-lg mb-lg border-b border-border pb-md">
              <div className="bg-primary-light/10 text-primary p-md rounded-full">
                <FlaskConical size={32} />
              </div>
              <div>
                <h2 className="text-2xl text-primary font-bold mb-xs">Test Preparation</h2>
                <p className="text-light">Guidelines before your tests and procedures</p>
              </div>
            </div>
            
            <div className="space-y-md">
              <div className="bg-background rounded-lg p-md border border-border">
                <h4 className="font-semibold text-primary flex items-center gap-sm mb-sm">
                  <ChevronRight size={18} className="text-secondary" /> Blood Tests
                </h4>
                <p className="text-sm text-light ml-lg">Fasting Blood Sugar or Lipid Profiles usually require 10-12 hours of fasting. Drink only water.</p>
              </div>
              <div className="bg-background rounded-lg p-md border border-border">
                <h4 className="font-semibold text-primary flex items-center gap-sm mb-sm">
                  <ChevronRight size={18} className="text-secondary" /> Ultrasound
                </h4>
                <p className="text-sm text-light ml-lg">For lower abdomen scans, fast for 6-8 hours and drink plenty of water to ensure a full bladder.</p>
              </div>
              <div className="bg-background rounded-lg p-md border border-border">
                <h4 className="font-semibold text-primary flex items-center gap-sm mb-sm">
                  <ChevronRight size={18} className="text-secondary" /> MRI & CT Scans
                </h4>
                <p className="text-sm text-light ml-lg">Inform staff about metal implants or pacemakers. Wear loose, comfortable clothing without metal.</p>
              </div>
            </div>
          </div>

          {/* Reports Card */}
          <div className="bg-surface rounded-xl shadow-md border border-border p-xl hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
            <div className="flex items-start gap-lg mb-lg border-b border-border pb-md">
              <div className="bg-primary-light/10 text-primary p-md rounded-full">
                <FileText size={32} />
              </div>
              <div>
                <h2 className="text-2xl text-primary font-bold mb-xs">Getting Reports</h2>
                <p className="text-light">Fast, accurate, and accessible</p>
              </div>
            </div>
            
            <p className="text-light mb-lg leading-relaxed">
              We utilize advanced automated systems to ensure accurate and fast reporting, reducing your wait time.
            </p>
            
            <ul className="space-y-sm text-md text-text font-medium mb-xl">
              <li className="flex items-center gap-md p-sm rounded-md hover:bg-background transition-colors">
                <span className="w-2 h-2 bg-secondary rounded-full"></span> 
                Routine blood tests: Same day
              </li>
              <li className="flex items-center gap-md p-sm rounded-md hover:bg-background transition-colors">
                <span className="w-2 h-2 bg-secondary rounded-full"></span> 
                Imaging (X-Ray, USG): Shortly after procedure
              </li>
              <li className="flex items-center gap-md p-sm rounded-md hover:bg-background transition-colors">
                <span className="w-2 h-2 bg-secondary rounded-full"></span> 
                Specialized (MRI, CT, Pathology): 24-48 hours
              </li>
            </ul>
            
            <div className="bg-blue-50 border border-blue-100 p-md rounded-lg flex items-start gap-md">
              <AlertCircle size={24} className="text-primary flex-shrink-0" />
              <div>
                <strong className="text-primary block mb-xs">Digital Access</strong>
                <p className="text-sm text-light">You will receive an SMS with a secure link to download your digital reports instantly.</p>
              </div>
            </div>
          </div>

          {/* What to Bring Card */}
          <div className="bg-surface rounded-xl shadow-md border border-border p-xl hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary-light"></div>
            <div className="flex items-start gap-lg mb-lg border-b border-border pb-md">
              <div className="bg-primary-light/10 text-primary p-md rounded-full">
                <Map size={32} />
              </div>
              <div>
                <h2 className="text-2xl text-primary font-bold mb-xs">What to Bring</h2>
                <p className="text-light">Checklist for your appointment</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
              <div className="p-md bg-background rounded-lg border border-border flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-surface rounded-full shadow-sm flex items-center justify-center font-bold text-primary mb-sm border border-border">1</div>
                <span className="font-medium text-text">Doctor's Prescription</span>
              </div>
              <div className="p-md bg-background rounded-lg border border-border flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-surface rounded-full shadow-sm flex items-center justify-center font-bold text-primary mb-sm border border-border">2</div>
                <span className="font-medium text-text">Valid Photo ID</span>
              </div>
              <div className="p-md bg-background rounded-lg border border-border flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-surface rounded-full shadow-sm flex items-center justify-center font-bold text-primary mb-sm border border-border">3</div>
                <span className="font-medium text-text">Previous Reports/Scans</span>
              </div>
              <div className="p-md bg-background rounded-lg border border-border flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-surface rounded-full shadow-sm flex items-center justify-center font-bold text-primary mb-sm border border-border">4</div>
                <span className="font-medium text-text">Current Medications List</span>
              </div>
            </div>
          </div>

          {/* Timings Card */}
          <div className="bg-primary text-surface rounded-xl shadow-lg p-xl relative overflow-hidden">
             <div className="absolute -bottom-10 -right-10 opacity-10">
               <Clock size={200} />
             </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-xl">Operating Hours</h2>
              
              <div className="space-y-lg">
                <div className="flex justify-between items-center border-b border-primary-light/30 pb-sm">
                  <span className="text-lg font-medium opacity-90">Emergency Services</span>
                  <span className="text-xl font-bold text-secondary">24 / 7</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary-light/30 pb-sm">
                  <span className="text-lg font-medium opacity-90">Routine Services</span>
                  <span className="text-lg font-medium">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary-light/30 pb-sm">
                  <span className="text-lg font-medium opacity-90">Specialist OPD</span>
                  <span className="text-lg font-medium">By Appointment</span>
                </div>
              </div>
              
              <div className="mt-xl pt-md">
                <p className="text-sm opacity-80 mb-lg">* We highly recommend booking an appointment to minimize your waiting time.</p>
                <Button variant="secondary" size="lg" fullWidth>Book an Appointment</Button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
