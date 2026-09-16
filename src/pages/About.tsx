import { ShieldCheck, ActivitySquare, MapPin } from 'lucide-react';
import { trustStats } from '../data/services';

const About = () => {
  return (
    <div className="page-container">
      {/* About Hero */}
      <div className="bg-primary-light text-surface py-3xl">
        <div className="container text-center">
          <h1 className="text-4xl font-bold mb-md">About Apex Hospital</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Solan's premier destination for comprehensive healthcare, advanced medical procedures, and expert specialist consultations.
          </p>
        </div>
      </div>

      <div className="container py-2xl">
        <div className="grid grid-cols-2 gap-3xl items-center">
          <div>
            <h2 className="text-3xl text-primary font-bold mb-lg">Our Mission</h2>
            <p className="text-lg text-light mb-md leading-relaxed">
              At Apex Hospital, our mission is to provide the people of Himachal Pradesh with access to world-class healthcare, advanced medical technology, and expert care, right here in Solan. 
            </p>
            <p className="text-lg text-light mb-xl leading-relaxed">
              We believe that accurate diagnosis and comprehensive care are the foundation of effective medical treatment. By investing in state-of-the-art facilities and a team of dedicated specialists, we ensure that our patients receive the best possible treatment.
            </p>
            
            <div className="flex gap-lg">
              <div className="flex flex-col gap-xs">
                <ShieldCheck size={32} className="text-secondary" />
                <span className="font-semibold text-primary mt-sm">Verified Accuracy</span>
              </div>
              <div className="flex flex-col gap-xs">
                <ActivitySquare size={32} className="text-secondary" />
                <span className="font-semibold text-primary mt-sm">Latest Technology</span>
              </div>
              <div className="flex flex-col gap-xs">
                <MapPin size={32} className="text-secondary" />
                <span className="font-semibold text-primary mt-sm">Central Location</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg aspect-square bg-primary-light flex items-center justify-center relative border border-border">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-50"></div>
            <span className="relative z-10 text-white font-medium">[Hospital Exterior/Interior Image]</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-background py-2xl border-y border-border">
        <div className="container">
          <div className="grid grid-cols-4 gap-lg text-center">
            {trustStats.map((stat, idx) => (
              <div key={idx} className="bg-surface p-xl rounded-lg shadow-sm border border-border">
                <div className="text-3xl font-bold text-primary mb-xs">{stat.value}</div>
                <div className="text-sm text-text-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
