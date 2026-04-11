import React from 'react';
import AppIcon from '../../components/common/AppIcon';
import SiteLayout from '../../layouts/SiteLayout';

const Services = () => {
  return (
    <SiteLayout>
      <main className="mx-auto max-w-7xl px-8 pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold font-headline tracking-tighter text-on-surface mb-6 leading-[1.1]">
              Educational <span className="text-primary">Intelligence</span> Redefined.
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed font-body">
              Deploy a comprehensive ecosystem designed for modern institutions. From streamlined attendance tracking to high-fidelity analytics, we provide the architectural foundation for academic excellence.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="School Management" 
            desc="Centralize operations with an integrated suite for administrative oversight, schedule optimization, and facility coordination." 
            icon="school"
          />
          <ServiceCard 
            title="Coaching Management" 
            desc="Tailored workflows for specialized training centers, focusing on batch management and performance tracking." 
            icon="sports_kabaddi"
          />
          <ServiceCard 
            title="Attendance" 
            desc="Real-time presence monitoring via biometric integration and automated reporting for parents and faculty." 
            icon="how_to_reg"
          />
          <div className="glass-panel rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-500 flex flex-col h-full lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-grow">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-primary/20">
                  <AppIcon className="text-white" name="payments" size={30} />
                </div>
                <h3 className="text-2xl font-bold font-headline text-on-surface mb-4">Fee Management</h3>
                <p className="text-slate-500 mb-8 font-body leading-relaxed max-w-md">
                  A secure financial gateway handling automated invoicing, digital receipts, and comprehensive reconciliation dashboards.
                </p>
              </div>
              <div className="w-full md:w-80 h-56 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
                <img alt="Fee Management Preview" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0eZFYGnLJrQIsQDxAskyOnW-ao8KqRlsHHutKl49zhfB3uekre4mumPTrcU-mZZFqzGQk4DT8C67sS4FqE0119GX3iE4UjLIGq-lZpz1FWWFo-Dlw6T2lntIzru57vy1P4VIBz1oTiOQXBhU5K9zqRYDV4vp-DTJixZDf0SZlbFHdjawShmVBNl2kZFOrUs2426ogyCwse7u3o0v5lfCUIRPVV-Abn322DDR8ETRQcnvzz6gxdpOPQ60bDTyj4-mJNolRKjLzBeM"/>
              </div>
            </div>
          </div>
          <ServiceCard 
            title="Student Dashboard" 
            desc="Personalized portals for students to access grades, resources, and communication channels in one unified interface." 
            icon="dashboard_customize"
          />
        </div>
      </main>
    </SiteLayout>
  );
};

const ServiceCard = ({ title, desc, icon }) => (
  <div className="glass-panel rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-500 flex flex-col h-full">
    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
      <AppIcon className="text-primary" name={icon} size={30} />
    </div>
    <h3 className="text-2xl font-bold font-headline text-on-surface mb-4">{title}</h3>
    <p className="text-slate-500 mb-8 font-body leading-relaxed flex-grow">{desc}</p>
    <button className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide group/btn">
      Expand to Learn More
      <AppIcon className="transition-transform group-hover/btn:translate-x-1" name="arrow_forward" size={16} />
    </button>
  </div>
);

export default Services;
