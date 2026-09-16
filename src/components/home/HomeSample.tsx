import { Button } from '../ui/Button';
import { Home as HomeIcon, CheckCircle2 } from 'lucide-react';
import './HomeSample.css';

const HomeSample = () => {
  const steps = [
    "Book an appointment online or via WhatsApp",
    "Our trained phlebotomist visits your home",
    "Hygienic and safe sample collection",
    "Reports delivered online the same day"
  ];

  return (
    <section className="home-sample-section">
      <div className="container">
        <div className="home-sample-card">
          <div className="home-sample-content">
            <div className="flex items-center gap-sm mb-sm text-secondary">
              <HomeIcon size={24} />
              <span className="font-semibold tracking-wide uppercase text-sm">Convenience</span>
            </div>
            <h2 className="home-sample-title">Healthcare That Comes Home</h2>
            <p className="home-sample-desc mb-lg">
              Can't visit the centre? Apex Hospital offers safe and hygienic home sample collection services across Solan. Get tested from the comfort of your home.
            </p>
            
            <ul className="home-sample-steps mb-xl">
              {steps.map((step, index) => (
                <li key={index}>
                  <CheckCircle2 size={20} className="text-secondary" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-md flex-wrap">
              <Button variant="primary">Book Home Collection</Button>
              <Button variant="whatsapp">WhatsApp Us</Button>
            </div>
          </div>
          <div className="home-sample-visual">
            <div className="visual-placeholder">
              <span>[Home Collection Illustration/Image]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSample;
