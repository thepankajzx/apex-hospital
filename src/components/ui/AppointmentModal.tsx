import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';
import './AppointmentModal.css';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose, defaultService = '' }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content animate-fade-in">
        <button className="modal-close" onClick={onClose}><X size={24} /></button>
        
        {submitted ? (
          <div className="modal-success text-center py-2xl">
            <div className="success-icon mx-auto mb-md">✓</div>
            <h2 className="text-2xl text-primary mb-sm">Request Received!</h2>
            <p className="text-light mb-lg">Thank you. Our team will contact you shortly to confirm your appointment time.</p>
            <Button variant="primary" onClick={onClose}>Close Window</Button>
          </div>
        ) : (
          <div className="modal-form-container">
            <h2 className="text-2xl text-primary mb-sm">Request an Appointment</h2>
            <p className="text-light mb-lg text-sm">Fill out the form below or contact us via WhatsApp for immediate assistance.</p>
            
            <form onSubmit={handleSubmit} className="appointment-form">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" required placeholder="John Doe" />
              </div>
              
              <div className="grid grid-cols-2 gap-md">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" required placeholder="+91" />
                </div>
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input type="date" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Service / Test</label>
                <select defaultValue={defaultService}>
                  <option value="">Select a service...</option>
                  <option value="mri">MRI</option>
                  <option value="ct-scan">CT Scan</option>
                  <option value="ultrasound">Ultrasound</option>
                  <option value="lab">Laboratory Test</option>
                  <option value="health-package">Health Package</option>
                  <option value="other">Other / Not sure</option>
                </select>
              </div>
              
              <div className="form-group mb-lg">
                <label>Message (Optional)</label>
                <textarea rows={3} placeholder="Any specific requirements or doctor's prescription details..."></textarea>
              </div>
              
              <Button variant="primary" type="submit" fullWidth size="lg">Submit Request</Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
