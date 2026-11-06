import { useState } from 'react';
import { 
  Activity, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  AlertCircle, 
  Shield, 
  TrendingUp, 
  Bone, 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  PhoneCall, 
  Info,
  BookOpen
} from 'lucide-react';
import { healthGuidelines, type HealthGuideline } from '../../data/healthGuide';
import { Button } from '../ui/Button';
import './HealthGuide.css';

interface HealthGuideProps {
  onOpenAppointment?: (serviceName?: string) => void;
}

export const HealthGuide: React.FC<HealthGuideProps> = ({ onOpenAppointment }) => {
  const [selectedId, setSelectedId] = useState<string>('diabetes-management');

  const selectedGuide = healthGuidelines.find(g => g.id === selectedId) || healthGuidelines[0];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity size={18} />;
      case 'Heart': return <Heart size={18} />;
      case 'ShieldCheck': return <ShieldCheck size={18} />;
      case 'Sparkles': return <Sparkles size={18} />;
      case 'AlertCircle': return <AlertCircle size={18} />;
      case 'Shield': return <Shield size={18} />;
      case 'TrendingUp': return <TrendingUp size={18} />;
      case 'Bone': return <Bone size={18} />;
      default: return <BookOpen size={18} />;
    }
  };

  return (
    <section className="health-guide-section" id="health-guide">
      <div className="container">
        {/* Section Header */}
        <div className="health-guide-header">
          <div className="guide-pill-badge">
            <BookOpen size={14} /> Apex Health Guide
          </div>
          <h2 className="health-guide-title">
            Looking for better everyday health habits?
          </h2>
          <p className="health-guide-subtitle">
            Explore doctor-reviewed food choices, practical lifestyle guidance, and clinical warning signs based on your health concerns.
          </p>
        </div>

        {/* 8 Selectable Category Cards Grid */}
        <div className="guide-category-grid" role="tablist" aria-label="Health concern categories">
          {healthGuidelines.map((item: HealthGuideline) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedId(item.id)}
                className={`guide-cat-card ${isSelected ? 'active' : ''}`}
              >
                <div className="guide-cat-top">
                  <div className="guide-cat-icon">
                    {getCategoryIcon(item.iconName)}
                  </div>
                  <span className="guide-cat-badge">{item.badge}</span>
                </div>
                <div className="guide-cat-name">{item.category}</div>
              </button>
            );
          })}
        </div>

        {/* Detailed Result Panel */}
        <div className="guide-result-panel" role="tabpanel">
          {/* Panel Header */}
          <div className="guide-panel-header">
            <div className="guide-panel-title-area">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary block mb-xs">
                {selectedGuide.badge} • Clinical Nutrition Overview
              </span>
              <h3>{selectedGuide.category}</h3>
              <p className="guide-panel-desc">{selectedGuide.shortDesc}</p>
            </div>
            <div className="guide-verified-badge">
              <ShieldCheck size={14} /> Medically Structured Guidelines
            </div>
          </div>

          {/* 2-Column Content Grid: Foods vs Lifestyle & Escalation */}
          <div className="guide-content-grid">
            {/* Left Column: Foods to Include & Foods to Limit */}
            <div>
              {/* Foods to Include */}
              <div className="mb-xl">
                <h4 className="guide-block-title include">
                  <CheckCircle2 size={18} /> Foods to Include
                </h4>
                {selectedGuide.foodsToInclude.map((food, idx) => (
                  <div key={idx} className="guide-food-card">
                    <div className="guide-food-name">{food.name}</div>
                    <div className="guide-food-desc">{food.detail}</div>
                    <span className="guide-food-serving">Recommended: {food.serving}</span>
                  </div>
                ))}
              </div>

              {/* Foods to Limit */}
              <div>
                <h4 className="guide-block-title limit">
                  <XCircle size={18} /> Foods & Habits to Limit
                </h4>
                {selectedGuide.foodsToLimit.map((food, idx) => (
                  <div key={idx} className="guide-food-limit-card">
                    <div className="guide-food-name">{food.name}</div>
                    <div className="guide-food-desc">{food.reason}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Daily Wellness Habits & Warning Signs */}
            <div>
              {/* Everyday Wellness Tips */}
              <div className="guide-wellness-box">
                <h4 className="guide-block-title wellness">
                  <Sparkles size={18} /> Everyday Wellness Routine
                </h4>
                {selectedGuide.wellnessTips.map((tip, idx) => (
                  <div key={idx} className="guide-wellness-item">
                    <span className="text-secondary font-bold">•</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>

              {/* When to Consult a Doctor */}
              <div className="guide-warning-box">
                <h4 className="guide-block-title warning">
                  <AlertCircle size={18} /> When to Consult a Doctor Immediately
                </h4>
                {selectedGuide.warningSigns.map((sign, idx) => (
                  <div key={idx} className="guide-warning-item">
                    <span className="text-accent font-bold">⚠</span>
                    <span>{sign}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Medical Safety Disclaimer */}
          <div className="guide-disclaimer-banner">
            <Info size={18} className="flex-shrink-0 mt-0.5" />
            <div>
              <strong>Medical Safety Notice: </strong>
              {selectedGuide.medicalDisclaimer}
            </div>
          </div>

          {/* Action & Conversion Strip */}
          <div className="guide-action-strip">
            <div className="guide-cta-text">
              <h4>Need personalized medical advice or specialist consultation?</h4>
              <p>Discuss your clinical reports and lifestyle plan with our senior consultants in Solan.</p>
            </div>
            <div className="guide-cta-buttons">
              <Button 
                variant="secondary" 
                size="md"
                onClick={() => onOpenAppointment && onOpenAppointment(`${selectedGuide.category} Consultation`)}
              >
                <Calendar size={15} style={{ marginRight: '6px' }} />
                Book Consultation
              </Button>
              <a href="tel:+917018168156">
                <Button variant="outline" size="md" style={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)' }}>
                  <PhoneCall size={15} style={{ marginRight: '6px' }} />
                  Call Hospital
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HealthGuide;