import { features } from '../../data/services';
import { Button } from '../ui/Button';
import './Technology.css';

const Technology = () => {
  return (
    <section className="technology-section py-2xl">
      <div className="container">
        <div className="technology-grid">
          <div className="technology-content">
            <h2 className="section-title">Advanced Technology Under One Roof</h2>
            <p className="section-subtitle mb-lg">
              We invest in the latest medical imaging and diagnostic technology to ensure precise, rapid, and comfortable experiences for our patients.
            </p>
            
            <div className="technology-features">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="tech-feature-item">
                  <h4 className="tech-feature-title">{feature.title}</h4>
                  <p className="tech-feature-desc">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="tech-cta mt-xl">
              <Button variant="outline">View All Facilities</Button>
            </div>
          </div>
          
          <div className="technology-visuals">
            <div className="tech-image-main">
              <div className="tech-glow"></div>
              <span>[1.5 Tesla MRI Image]</span>
            </div>
            <div className="tech-image-secondary">
              <span>[16 Slice CT Image]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
