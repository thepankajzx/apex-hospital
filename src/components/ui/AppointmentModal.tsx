import React, { useState } from 'react';
import { X, MessageSquare, PhoneCall, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from './Button';
import './AppointmentModal.css';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose, defaultService = '' }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState('');
  const [submittedDirectly, setSubmittedDirectly] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    // Construct professional clinic WhatsApp message
    const waText = encodeURIComponent(
      `Hello Apex Hospital Solan,\n\nI would like to request an appointment:\n• Name: ${fullName}\n• Phone: ${phone}\n• Preferred Date: ${preferredDate || 'Earliest available'}\n• Service/Speciality: ${service || 'General Consultation'}\n${message ? `• Notes: ${message}\n` : ''}\nPlease confirm my appointment slot.`
    );

    window.open(`https://wa.me/917018168156?text=${waText}`, '_blank');
    setSubmittedDirectly(true);
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content animate-fade-in">
        <button className="modal-close" onClick={onClose} aria-label="Close dialog">
          <X size={24} />
        </button>
        
        {submittedDirectly ? (
          <div className="modal-success text-center py-2xl">
            <CheckCircle2 size={48} className="text-secondary mx-auto mb-md" />
            <h2 className="text-2xl text-primary mb-sm">WhatsApp Window Opened!</h2>
            <p className="text-light mb-md text-sm leading-relaxed">
              Your appointment request details were forwarded directly to Apex Hospital’s reception desk on WhatsApp.
            </p>
            <div className="p-md bg-surface rounded-md border border-border text-left mb-lg text-xs text-text-light">
              <p className="font-semibold text-heading mb-xs">Next Steps:</p>
              <p>1. Send the pre-filled message in WhatsApp.</p>
              <p>2. Our reception will review and confirm your exact OPD/scan time slot.</p>
            </div>
            <div className="flex gap-sm justify-center">
              <Button variant="primary" onClick={onClose}>Done</Button>
              <a href="tel:+917018168156" className="inline-flex items-center gap-xs text-xs font-bold text-primary hover:underline px-md py-sm">
                <PhoneCall size={14} /> Call Reception Directly
              </a>
            </div>
          </div>
        ) : (
          <div className="modal-form-container">
            <h2 className="text-2xl text-primary mb-xs">Request an Appointment</h2>
            <p className="text-light mb-md text-sm">
              Connect directly with Apex Hospital Solan reception via verified WhatsApp or phone.
            </p>
            
            <form onSubmit={handleWhatsAppBooking} className="appointment-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input 
                  type="text" 
                  required 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-md">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 00000" 
                  />
                </div>
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input 
                    type="date" 
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Service / Diagnostic Test</label>
                <select 
                  value={service} 
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Select a department or service...</option>
                  <option value="1.5T MRI Scan">1.5T MRI Scan</option>
                  <option value="16-Slice CT Scan">16-Slice CT Scan</option>
                  <option value="Ultrasound & Doppler">Ultrasound & Doppler</option>
                  <option value="Digital X-Ray">Digital X-Ray</option>
                  <option value="Pathology Laboratory">Pathology & Blood Tests</option>
                  <option value="Cardiology Consultation">Cardiology (Heart)</option>
                  <option value="Neurology Consultation">Neurology (Brain & Spine)</option>
                  <option value="Orthopedic Consultation">Orthopedics (Joint & Bone)</option>
                  <option value="Preventive Health Package">Preventive Health Package</option>
                  <option value="General OPD Consultation">General OPD Consultation</option>
                </select>
              </div>
              
              <div className="form-group mb-md">
                <label>Message / Symptoms (Optional)</label>
                <textarea 
                  rows={2} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Doctor's prescription details or specific health concern..."
                ></textarea>
              </div>

              <div className="flex items-center gap-xs text-xs text-text-light mb-md bg-surface p-xs rounded border border-border">
                <AlertCircle size={14} className="text-secondary flex-shrink-0" />
                <span>Sends details to our verified desk: +91 70181 68156</span>
              </div>
              
              <Button variant="primary" type="submit" fullWidth size="md">
                <MessageSquare size={16} style={{ marginRight: '6px' }} />
                Proceed to Book via WhatsApp
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
