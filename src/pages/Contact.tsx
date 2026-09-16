import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';

const Contact = () => {
  return (
    <div className="page-container py-2xl">
      <div className="container">
        <div className="text-center mb-2xl">
          <h1 className="section-title">Contact Us</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            We're here to help. Reach out to us for appointments, report queries, or home sample collection.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3xl">
          {/* Contact Form */}
          <div className="bg-surface p-xl rounded-lg border border-border shadow-sm">
            <h2 className="text-2xl text-primary mb-md">Send us a message</h2>
            <form className="space-y-4">
              <div className="flex flex-col gap-xs mb-md">
                <label className="text-sm font-medium text-primary">Full Name</label>
                <input type="text" className="p-sm border border-border rounded-md focus:border-secondary outline-none" placeholder="Your Name" />
              </div>
              
              <div className="flex flex-col gap-xs mb-md">
                <label className="text-sm font-medium text-primary">Phone Number</label>
                <input type="tel" className="p-sm border border-border rounded-md focus:border-secondary outline-none" placeholder="+91" />
              </div>
              
              <div className="flex flex-col gap-xs mb-md">
                <label className="text-sm font-medium text-primary">Query Type</label>
                <select className="p-sm border border-border rounded-md focus:border-secondary outline-none">
                  <option>General Enquiry</option>
                  <option>Appointment Booking</option>
                  <option>Report Status</option>
                  <option>Home Collection</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div className="flex flex-col gap-xs mb-lg">
                <label className="text-sm font-medium text-primary">Message</label>
                <textarea rows={4} className="p-sm border border-border rounded-md focus:border-secondary outline-none" placeholder="How can we help you?"></textarea>
              </div>

              <Button variant="primary" fullWidth>Send Message</Button>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <div className="bg-primary-light text-surface p-xl rounded-lg mb-lg">
              <h3 className="text-xl font-semibold mb-lg">Contact Information</h3>
              <ul className="space-y-4" style={{ listStyle: 'none', padding: 0 }}>
                <li className="flex gap-md items-start">
                  <MapPin size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-xs text-lg">Address</strong>
                    <p className="opacity-90 leading-relaxed">Apex Hospital<br/>Solan, Himachal Pradesh, India</p>
                  </div>
                </li>
                <li className="flex gap-md items-start mt-md">
                  <Phone size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-xs text-lg">Phone & WhatsApp</strong>
                    <p className="opacity-90">+91 70181 68156</p>
                  </div>
                </li>
                <li className="flex gap-md items-start mt-md">
                  <Mail size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-xs">Email Us</h4>
                    <p className="opacity-90">info@apexhospital.demo</p>
                  </div>
                </li>
                <li className="flex gap-md items-start mt-md">
                  <Clock size={24} className="text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="block mb-xs text-lg">Emergency Hours</strong>
                    <p className="opacity-90">24/7 Available</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg overflow-hidden h-64 bg-background flex items-center justify-center">
               <span className="text-light">[Google Map Embed]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
