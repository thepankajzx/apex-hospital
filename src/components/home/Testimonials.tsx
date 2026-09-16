import { Star } from 'lucide-react';
import { Button } from '../ui/Button';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ramesh Sharma',
      text: 'Very professional staff and clean environment. The MRI process was explained clearly and reports were delivered on time as promised.',
      rating: 5
    },
    {
      name: 'Anita Verma',
      text: 'Got my whole body master package done here. The home sample collection team was very punctual and polite. Highly recommended in Solan.',
      rating: 5
    },
    {
      name: 'Suresh Kumar',
      text: 'Advanced diagnostic equipment and experienced doctors. Best Hospital in Himachal.',
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section py-2xl">
      <div className="container">
        <div className="text-center mb-xl">
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">Real experiences from people who trusted us with their health.</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="stars mb-sm">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h4 className="testimonial-author">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-xl">
          <Button variant="outline" size="md" className="mx-auto flex items-center justify-center">
            Review us on Google
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
