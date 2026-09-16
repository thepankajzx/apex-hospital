import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './LocationSection.css';

const LocationSection = () => {
  return (
    <section className="location-section py-2xl">
      <div className="container">
        <div className="location-grid">
          <div className="location-info">
            <h2 className="section-title">Visit Apex Hospital</h2>
            <p className="section-subtitle mb-lg">Conveniently located in Solan for easy access from Shimla and surrounding areas.</p>
            
            <ul className="location-details">
              <li>
                <div className="loc-icon"><MapPin size={20} /></div>
                <div>
                  <strong>Address</strong>
                  <p>Apex Hospital<br/>Solan, Himachal Pradesh, India</p>
                </div>
              </li>
              <li>
                <div className="loc-icon"><Phone size={20} /></div>
                <div>
                  <strong>Contact</strong>
                  <p>+91 70181 68156</p>
                </div>
              </li>
              <li>
                <div className="loc-icon"><Mail size={20} /></div>
                <div>
                  <h4 className="font-bold text-lg mb-xs">Email Us</h4>
                  <p>info@apexhospital.demo</p>
                </div>
              </li>
              <li>
                <div className="loc-icon"><Clock size={20} /></div>
                <div>
                  <strong>Hours</strong>
                  <p>Open 24/7 for Emergencies</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="location-map">
            <div className="map-placeholder">
              <span>[Interactive Google Map Embed]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
