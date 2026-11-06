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
          
          <div className="rounded-xl overflow-hidden shadow-md bg-gradient-to-tr from-primary to-primary-light text-white p-2xl flex flex-col justify-between border border-border min-h-[360px] relative">
            <div>
              <span className="inline-block bg-white/20 backdrop-blur-md px-md py-xs rounded-full text-xs font-bold uppercase tracking-wider mb-md">
                Established Center of Excellence
              </span>
              <h3 className="text-2xl font-bold mb-sm text-white">Apex Hospital & Advanced Diagnostics</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-lg">
                Centrally positioned in Solan, equipped with advanced 1.5T MRI, multi-detector CT, 24/7 ICU & trauma units, fully automated pathology, and specialized outpatient consults.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-md pt-md border-t border-white/15">
              <div>
                <span className="block text-2xl font-black text-secondary-light">24/7</span>
                <span className="text-xs text-white/70 font-semibold">Trauma & Diagnostics</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-secondary-light">1.5T / 16-Slice</span>
                <span className="text-xs text-white/70 font-semibold">Gold-Standard Imaging</span>
              </div>
            </div>
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
