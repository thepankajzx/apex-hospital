import { Button } from '../ui/Button';
import './FinalCTA.css';

const FinalCTA = () => {
  return (
    <section className="final-cta-section py-3xl">
      <div className="container text-center">
        <h2 className="cta-title">Need a Test or Consultation?</h2>
        <p className="cta-subtitle mb-xl">
          Don't delay your health. Get accurate results with our advanced diagnostic facilities.
        </p>
        
        <div className="cta-buttons">
          <Button variant="primary" size="lg">Book / Enquire</Button>
          <Button variant="whatsapp" size="lg">WhatsApp Us</Button>
          <Button variant="outline" size="lg" className="bg-white">Call Now</Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
