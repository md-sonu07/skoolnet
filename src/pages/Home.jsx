import React from 'react';
import AppIcon from '../components/AppIcon';

const Home = () => {
  return (
    <div className="overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <header className="fixed top-0 w-full z-50 glass-panel border-b border-outline-variant/30">
        <nav className="flex items-center justify-between px-8 h-20 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <AppIcon className="text-white" name="school" size={18} />
              </div>
              <span className="text-2xl font-extrabold text-primary font-headline tracking-tight">Skoolnet</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a className="text-primary font-bold border-b-2 border-primary font-headline text-sm transition-all" href="/">Dashboard</a>
              <a className="text-on-surface-variant hover:text-primary font-headline text-sm transition-all" href="/services">Features</a>
              <a className="text-on-surface-variant hover:text-primary font-headline text-sm transition-all" href="/pricing">Pricing</a>
              <a className="text-on-surface-variant hover:text-primary font-headline text-sm transition-all" href="/about">About</a>
              <a className="text-on-surface-variant hover:text-primary font-headline text-sm transition-all" href="/contact">Contact</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-low border border-outline-variant/50">
              <AppIcon className="text-on-surface-variant" name="search" size={16} />
              <span className="text-on-surface-variant text-sm">Search records...</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
                <AppIcon name="notifications" size={20} />
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
                <AppIcon name="settings" size={20} />
              </button>
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/10">
                <img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH7qm8wNa2-Z7myiNgM__4BknR0fc0YdjItCx72MraYEdLRNnm1ZIt677xWZIxuhAxedfY4pU5eg8J1BPCsOngSd4qsm2D37eHLHF38fPr-i0SwV-RQ8kVZ8_gFBB0zdMzdEs0-KAr0WkQh73aYTCuz23QzPkc_I6yz4G-QoR_lkMBFz62lFLe6bFsjoH0x5tRnEqGSTe2h7a8rOGQWqoTHYn3-2Af72vFQXpq26i248v14jiLfDzgl6UVUvr1R1mPLjGg2dlx9AU"/>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="pt-40">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 mb-40 relative">
          <div className="absolute -top-60 -left-60 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px]"></div>
          <div className="max-w-4xl relative z-10">
            <h1 className="text-6xl md:text-8xl font-black font-headline tracking-tighter mb-8 leading-[1.05] text-on-surface">
              Manage Your School <br/>
              <span className="hero-gradient-text">Smartly with Skoolnet</span>
            </h1>
            <p className="text-on-surface-variant text-xl max-w-2xl mb-12 font-body leading-relaxed">
              Transform your institution into a high-performance digital ecosystem. Streamline attendance, automate fee collection, and empower students with real-time insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-4 btn-primary font-bold rounded-2xl">
                Get Started
              </button>
              <button className="px-10 py-4 glass-panel border border-outline-variant text-on-surface font-bold rounded-2xl hover:bg-white active:scale-95 transition-all">
                Book Demo
              </button>
            </div>
          </div>
        </section>
        {/* Dashboard Preview */}
        <section className="max-w-7xl mx-auto px-8 mb-48">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-outline-variant/30">
            <img alt="Dashboard preview" className="w-full aspect-[21/9] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg-yCQS5scIYOtw0DzQ_FZgglvcXNBt3OgD2vckthmpgQMnSDbMtqR5TyueL_LrYlf-y0LQRulSgoDlSso_wxgwDZ4cV5Xq6xuaBA9fuRRJUFLJJGcp10Kb9Y8codeqQCNkM5W3oCkcOXH7LuCjlqQ1XgVttiC2oYWfhn6a_qJVXoszsL2QCenLYU_jTQ9VBENOr-L-oM50OFLMNBfrdHJ9rHS4XrEwkSyiRlCazd9xMuccW3OrheHtIpmCwKO-GF52Mvq81foVRRDU"/>
          </div>
        </section>
        {/* Features Bento Grid */}
        <section className="max-w-7xl mx-auto px-8 mb-48">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold font-headline mb-4 text-on-surface">Core Ecosystem</h2>
            <div className="h-1.5 w-16 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 glass-panel p-10 rounded-[2rem] flex flex-col justify-between min-h-[340px] hover:shadow-xl transition-shadow">
              <div>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                  <AppIcon className="text-primary" name="group" size={30} />
                </div>
                <h3 className="text-2xl font-extrabold mb-4 font-headline text-on-surface">Student Dashboard</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed font-body">Personalized portal for every student to track grades, homework, and extracurricular achievements in real-time.</p>
              </div>
            </div>
            <div className="glass-panel p-10 rounded-[2rem] flex flex-col min-h-[340px] hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <AppIcon className="text-primary" name="payments" size={30} />
              </div>
              <h3 className="text-2xl font-extrabold mb-4 font-headline text-on-surface">Fee Tracking</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed font-body">Automated billing, reminders, and online payment integration for seamless operations.</p>
            </div>
            <div className="glass-panel p-10 rounded-[2rem] flex flex-col min-h-[340px] hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <AppIcon className="text-primary" name="how_to_reg" size={30} />
              </div>
              <h3 className="text-2xl font-extrabold mb-4 font-headline text-on-surface">Attendance</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed font-body">Biometric and QR-based tracking with instant SMS notifications to parents.</p>
            </div>
            <div className="md:col-span-2 glass-panel p-10 rounded-[2rem] flex flex-col justify-between min-h-[340px] hover:shadow-xl transition-shadow">
              <div>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                  <AppIcon className="text-primary" name="analytics" size={30} />
                </div>
                <h3 className="text-2xl font-extrabold mb-4 font-headline text-on-surface">Performance Analytics</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed font-body">Advanced data visualization tools to monitor institutional growth and individual student progress across semesters.</p>
              </div>
            </div>
          </div>
        </section>
        {/* How It Works */}
        <section className="bg-surface-container-low/50 py-32 mb-48 border-y border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-24">
              <h2 className="text-5xl font-black font-headline mb-4 text-on-surface">Three Steps to Digital Excellence</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-outline-variant z-0"></div>
              <div className="relative z-10 text-center group">
                <div className="w-24 h-24 bg-white border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl group-hover:bg-primary transition-all duration-300">
                  <span className="text-3xl font-black text-primary group-hover:text-white">01</span>
                </div>
                <h4 className="text-2xl font-extrabold mb-4 font-headline text-on-surface">Onboard Staff</h4>
                <p className="text-on-surface-variant font-body px-4">Bulk import teacher and administrator profiles with custom role permissions.</p>
              </div>
              <div className="relative z-10 text-center group">
                <div className="w-24 h-24 bg-white border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl group-hover:bg-primary transition-all duration-300">
                  <span className="text-3xl font-black text-primary group-hover:text-white">02</span>
                </div>
                <h4 className="text-2xl font-extrabold mb-4 font-headline text-on-surface">Setup Classes</h4>
                <p className="text-on-surface-variant font-body px-4">Define your curriculum, sections, and automated timetables in minutes.</p>
              </div>
              <div className="relative z-10 text-center group">
                <div className="w-24 h-24 bg-white border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl group-hover:bg-primary transition-all duration-300">
                  <span className="text-3xl font-black text-primary group-hover:text-white">03</span>
                </div>
                <h4 className="text-2xl font-extrabold mb-4 font-headline text-on-surface">Go Live</h4>
                <p className="text-on-surface-variant font-body px-4">Launch the student app and start collecting real-time operational data.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-surface-container-low border-t border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <AppIcon className="text-white" name="school" size={18} />
                </div>
                <span className="text-2xl font-black text-primary font-headline tracking-tight">Skoolnet</span>
              </div>
              <p className="text-on-surface-variant max-w-sm font-body leading-relaxed text-lg">The complete operating system for modern educational institutions. Built for speed, clarity, and growth.</p>
            </div>
            <div>
              <h5 className="text-on-surface font-extrabold mb-8 font-headline">Platform</h5>
              <ul className="space-y-4">
                <li><a className="text-on-surface-variant hover:text-primary transition-colors font-medium" href="/">Dashboard</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors font-medium" href="/services">Services</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors font-medium" href="/pricing">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-on-surface font-extrabold mb-8 font-headline">Company</h5>
              <ul className="space-y-4">
                <li><a className="text-on-surface-variant hover:text-primary transition-colors font-medium" href="/about">About</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors font-medium" href="/contact">Contact</a></li>
                <li><a className="text-on-surface-variant hover:text-primary transition-colors font-medium" href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-outline-variant/50">
            <p className="text-on-surface-variant font-label text-xs uppercase tracking-[0.2em]">© 2024 Skoolnet Inc. Digital Curator Edition.</p>
            <div className="flex gap-10 mt-6 md:mt-0">
              <a className="text-on-surface-variant hover:text-primary transition-colors font-label text-xs uppercase tracking-widest" href="#">Terms</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-label text-xs uppercase tracking-widest" href="#">Status</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors font-label text-xs uppercase tracking-widest" href="#">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
