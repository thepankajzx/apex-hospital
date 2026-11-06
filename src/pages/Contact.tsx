import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [queryType, setQueryType] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const waText = encodeURIComponent(
      `Hello Apex Hospital Solan,\n\nI have an enquiry:\n• Name: ${name}\n• Phone: ${phone}\n• Query Type: ${queryType}\n${message ? `• Details: ${message}\n` : ''}\nPlease connect with me.`
    );

    window.open(`https://wa.me/917018168156?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="page-container py-2xl">
      <div className="container">
        <div className="text-center mb-2xl">
          <h1 className="section-title">Contact & Location</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            We are here to assist you 24/7. Reach out for appointments, diagnostic imaging, report status, or emergency care in Solan.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3xl">
          {/* Contact Form */}
          <div className="bg-surface p-xl rounded-lg border border-border shadow-sm">
            <h2 className="text-2xl text-primary mb-xs">Send an Enquiry</h2>
            <p className="text-sm text-text-light mb-md">
              Fill details below to send a verified message directly to our reception desk on WhatsApp.
            </p>

            {submitted ? (
              <div className="text-center py-xl">
                <CheckCircle2 size={44} className="text-secondary mx-auto mb-sm" />
                <h3 className="text-xl font-bold text-primary mb-xs">Enquiry Opened in WhatsApp!</h3>
                <p className="text-sm text-light mb-md">
                  Thank you, {name}. Please send the pre-filled message on WhatsApp so our staff can answer immediately.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-xs mb-md">
                  <label className="text-sm font-medium text-primary">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-sm border border-border rounded-md focus:border-secondary outline-none" 
                    placeholder="Your Full Name" 
                  />
                </div>
                
                <div className="flex flex-col gap-xs mb-md">
                  <label className="text-sm font-medium text-primary">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="p-sm border border-border rounded-md focus:border-secondary outline-none" 
                    placeholder="+91 70181 68156" 
                  />
                </div>
                
                <div className="flex flex-col gap-xs mb-md">
                  <label className="text-sm font-medium text-primary">Department / Query Type</label>
                  <select 
                    value={queryType}
                    onChange={(e) => setQueryType(e.target.value)}
                    className="p-sm border border-border rounded-md focus:border-secondary outline-none"
                  >
                    <option value="General Enquiry">General Hospital Enquiry</option>
                    <option value="Doctor Appointment">Specialist Doctor Appointment</option>
                    <option value="MRI & CT Scans">MRI & CT Diagnostic Scans</option>
                    <option value="Pathology Lab & Home Sample">Pathology Lab & Home Sample</option>
                    <option value="Report Status Check">Report Status / Collection</option>
                    <option value="Emergency & ICU Support">24/7 Emergency & ICU Support</option>
                  </select>
                </div>

                <div className="flex flex-col gap-xs mb-lg">
                  <label className="text-sm font-medium text-primary">Message (Optional)</label>
                  <textarea 
                    rows={3} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="p-sm border border-border rounded-md focus:border-secondary outline-none" 
                    placeholder="How can our clinical team help you today?"
                  ></textarea>
                </div>

                <Button variant="primary" type="submit" fullWidth>
                  <MessageSquare size={16} style={{ marginRight: '6px' }} />
                  Submit via Clinic WhatsApp
                </Button>
              </form>
            )}
          </div>

          {/* Contact Details & Verified Map */}
          <div>
            <div className="bg-primary-light text-surface p-xl rounded-lg mb-lg">
              <h3 className="text-xl font-semibold mb-lg">Hospital Reception & Emergency</h3>
              <ul className="space-y-4" style={{ listStyle: 'none', padding: 0 }}>
                <li className="flex gap-md items-start">
                  <MapPin size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-xs text-lg">Hospital Address</strong>
                    <p className="opacity-90 leading-relaxed">
                      Apex Hospital & Diagnostics<br/>
                      Near Mall Road / Bypass, Solan, Himachal Pradesh 173212
                    </p>
                  </div>
                </li>
                <li className="flex gap-md items-start mt-md">
                  <Phone size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-xs text-lg">24/7 Helpline & WhatsApp</strong>
                    <a href="tel:+917018168156" className="opacity-90 hover:underline block text-base font-semibold">
                      +91 70181 68156
                    </a>
                  </div>
                </li>
                <li className="flex gap-md items-start mt-md">
                  <Mail size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-xs">Reception Desk</h4>
                    <p className="opacity-90">contact@apexhospitalsolan.in</p>
                  </div>
                </li>
                <li className="flex gap-md items-start mt-md">
                  <Clock size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-xs text-lg">Operating Hours</strong>
                    <p className="opacity-90">Emergency & Trauma: <strong>24 Hours / 7 Days</strong></p>
                    <p className="opacity-80 text-sm">OPD Consultations: 9:00 AM – 7:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Verified Google Maps Embed for Solan, HP */}
            <div className="border border-border rounded-lg overflow-hidden h-64 bg-background shadow-sm">
              <iframe
                title="Apex Hospital Solan Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54839.84279768222!2d77.06716035118742!3d30.908331165438883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f84090b8f36c5%3A0xbcf0bfcb27ff5469!2sSolan%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
