import React from 'react';
import AppIcon from '../../components/common/AppIcon';
import SiteLayout from '../../layouts/SiteLayout';

const Pricing = () => {
  return (
    <SiteLayout>
      <main className="bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent px-6 pb-32 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-on-surface">
            The Future of Education,<br/>Precisely Scaled.
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Choose the perfect framework for your educational ecosystem. From boutique coaching centers to national institutions.
          </p>
          <div className="flex items-center justify-center gap-5 mb-8">
            <span className="text-sm font-bold text-on-surface">Monthly</span>
            <button className="w-14 h-7 rounded-full bg-slate-100 p-1 relative transition-colors">
              <div className="absolute right-1 top-1 bottom-1 w-5 bg-primary rounded-full shadow-md"></div>
            </button>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-slate-400">Yearly</span>
              <span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Save 20%</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <PricingCard 
            title="Basic" 
            subtitle="Small Coaching" 
            price="49" 
            features={["Up to 50 Students", "Course Management", "Basic Analytics"]}
            disabledFeatures={["Custom Branding"]}
          />
          <PricingCard 
            title="Pro" 
            subtitle="Schools" 
            price="199" 
            primary={true}
            features={["Unlimited Students", "Advanced Multi-Teacher", "White-label Portal", "AI Progress Insights", "Priority Support"]}
          />
          <PricingCard 
            title="Enterprise" 
            subtitle="Large Institutions" 
            price="Custom" 
            buttonText="Contact Sales"
            features={["Global Deployment", "Dedicated Account Manager", "Custom Integration API", "SSO & Security Audit"]}
          />
        </div>
        <section className="mt-48 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <h2 className="font-headline text-4xl font-extrabold mb-8 leading-tight text-on-surface">Why Professionals<br/>Choose Skoolnet</h2>
              <p className="text-slate-500 mb-10 text-lg leading-relaxed">
                Beyond management, we provide the architectural foundation for meaningful learning outcomes at scale.
              </p>
              <div className="p-8 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-base italic text-slate-700 font-medium leading-relaxed">"The administrative automation saved us 40+ hours a month. It's not a tool; it's a team member."</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <AppIcon className="text-primary" name="format_quote" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Sarah Jenkins</p>
                    <p className="text-xs text-slate-500 font-medium">Director, Alpine Global School</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FeatureSmall icon="security" title="Institutional Security" desc="Enterprise-grade encryption and FERPA-compliant data handling for every plan." />
                <FeatureSmall icon="auto_awesome" title="AI-Driven Insights" desc="Predict student churn and learning gaps before they happen with Skoolnet IQ." className="md:translate-y-8" />
                <FeatureSmall icon="hub" title="Unified Ecosystem" desc="Connect your favorite tools directly into our centralized administration hub." />
                <FeatureSmall icon="rocket_launch" title="Rapid Deployment" desc="Import your entire curriculum and student database in under 60 seconds." className="md:translate-y-8" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

const PricingCard = ({ title, subtitle, price, features, disabledFeatures = [], primary = false, buttonText = "Get Started" }) => (
  <div className={`glass-panel rounded-2xl p-10 flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${primary ? 'pro-highlight bg-white/80 -translate-y-2' : ''}`}>
    {primary && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-primary text-white rounded-full text-[11px] font-black uppercase tracking-widest shadow-lg shadow-primary/20">
        Recommended
      </div>
    )}
    <div className="mb-8">
      <h3 className="font-headline text-2xl font-bold mb-1 text-on-surface">{title}</h3>
      <p className="text-slate-400 text-sm mb-6 font-medium">{subtitle}</p>
      <div className="flex items-baseline gap-1">
        <span className={`text-5xl font-extrabold ${primary ? 'text-primary' : 'text-on-surface'}`}>{price === 'Custom' ? price : `$${price}`}</span>
        {price !== 'Custom' && <span className="text-slate-400 font-semibold">/mo</span>}
      </div>
    </div>
    <div className="space-y-4 mb-12 flex-grow">
      {features.map((f, i) => (
        <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600">
          <AppIcon className="text-primary" name="check_circle" size={20} />
          {f}
        </div>
      ))}
      {disabledFeatures.map((f, i) => (
        <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
          <AppIcon name="cancel" size={20} />
          {f}
        </div>
      ))}
    </div>
    <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${primary ? 'text-white bg-primary shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95' : 'text-primary bg-primary/5 hover:bg-primary hover:text-white'}`}>
      {buttonText}
    </button>
  </div>
);

const FeatureSmall = ({ icon, title, desc, className = "" }) => (
  <div className={`p-10 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group ${className}`}>
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
      <AppIcon className="text-primary group-hover:text-white" name={icon} size={20} />
    </div>
    <h4 className="font-headline text-xl font-bold mb-3">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed font-medium">{desc}</p>
  </div>
);

export default Pricing;
