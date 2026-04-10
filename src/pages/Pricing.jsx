import React from 'react';
import AppIcon from '../components/AppIcon';

const Pricing = () => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/10">
      <nav className="fixed top-0 w-full z-50 nav-glass glass-panel border-b border-slate-100">
        <div className="flex items-center justify-between px-8 h-20 w-full max-w-[1440px] mx-auto">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                <AppIcon className="text-white" name="school" size={18} />
              </div>
              <span className="text-xl font-black text-blue-700 font-headline tracking-tight">Skoolnet</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a className="text-slate-500 hover:text-primary transition-all duration-300 text-sm font-semibold font-headline" href="/">Home</a>
              <a className="text-slate-500 hover:text-primary transition-all duration-300 text-sm font-semibold font-headline" href="/services">Services</a>
              <a className="text-primary font-bold text-sm font-headline border-b-2 border-primary pb-1" href="/pricing">Pricing</a>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-full transition-all">
              <AppIcon name="notifications" size={20} />
            </button>
            <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-full transition-all">
              <AppIcon name="help" size={20} />
            </button>
            <div className="h-10 w-10 rounded-full border-2 border-primary/10 overflow-hidden">
              <img alt="User profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwLo0lJVlMEvVqg8WgMrRYfvk8pKKzNKMSxOoFezzoJ1B2l1RTs2Uec33aFP_FTF2iWeVsW9iWbvR6Y1g-Ss7kQY1JYyhNc9nXtgLfZ0VlTrfaU_FcCk5e3t0hZD7Lt0_u5D9_dO0gzPVsw27p9N2UTUl0ZngDGBoCC0hUJPwWSu7DJSJivHgYVEPA2CpuAU1jKzEgiZqGL7_YoVp2uISNM_-mx1CuyS3twO--2K_froldEb2EeNtx96C5p8ZcEInsldCQEB7arVM"/>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-40 pb-32 px-6 md:px-12 lg:px-24 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent">
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
      <footer className="bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                <AppIcon className="text-primary" name="school" size={14} />
              </div>
              <span className="font-headline text-lg font-black text-blue-700">Skoolnet</span>
            </div>
            <p className="font-inter text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">© 2024 Skoolnet Digital Curator Edition</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {["About", "Careers", "Privacy", "Terms", "Status"].map(link => (
              <a key={link} className="font-inter text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-all" href="#">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
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
