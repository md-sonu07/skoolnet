import React from 'react';
import AppIcon from '../../components/common/AppIcon';
import SiteLayout from '../../layouts/SiteLayout';

const Home = () => {
  return (
    <SiteLayout>
      <div className="pb-20">
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
              <button className="px-10 py-4 btn-primary font-bold rounded-xl">
                Get Started
              </button>
              <button className="px-10 py-4 glass-panel border border-outline-variant text-on-surface font-bold rounded-xl hover:bg-white active:scale-95 transition-all">
                Book Demo
              </button>
            </div>
          </div>
        </section>
        {/* Dashboard Preview */}
        <section className="max-w-7xl mx-auto px-8 mb-48">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-outline-variant/30">
            <img alt="Dashboard preview" className="w-full aspect-21/9 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg-yCQS5scIYOtw0DzQ_FZgglvcXNBt3OgD2vckthmpgQMnSDbMtqR5TyueL_LrYlf-y0LQRulSgoDlSso_wxgwDZ4cV5Xq6xuaBA9fuRRJUFLJJGcp10Kb9Y8codeqQCNkM5W3oCkcOXH7LuCjlqQ1XgVttiC2oYWfhn6a_qJVXoszsL2QCenLYU_jTQ9VBENOr-L-oM50OFLMNBfrdHJ9rHS4XrEwkSyiRlCazd9xMuccW3OrheHtIpmCwKO-GF52Mvq81foVRRDU"/>
          </div>
        </section>
        {/* Features Bento Grid */}
        <section className="max-w-7xl mx-auto px-8 mb-48">
          <div className="mb-16">
            <h2 className="text-4xl font-extrabold font-headline mb-4 text-on-surface">Core Ecosystem</h2>
            <div className="h-1.5 w-16 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 glass-panel p-10 rounded-2xl flex flex-col justify-between min-h-[340px] hover:shadow-xl transition-shadow">
              <div>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                  <AppIcon className="text-primary" name="group" size={30} />
                </div>
                <h3 className="text-2xl font-extrabold mb-4 font-headline text-on-surface">Student Dashboard</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed font-body">Personalized portal for every student to track grades, homework, and extracurricular achievements in real-time.</p>
              </div>
            </div>
            <div className="glass-panel p-10 rounded-2xl flex flex-col min-h-[340px] hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <AppIcon className="text-primary" name="payments" size={30} />
              </div>
              <h3 className="text-2xl font-extrabold mb-4 font-headline text-on-surface">Fee Tracking</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed font-body">Automated billing, reminders, and online payment integration for seamless operations.</p>
            </div>
            <div className="glass-panel p-10 rounded-2xl flex flex-col min-h-[340px] hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <AppIcon className="text-primary" name="how_to_reg" size={30} />
              </div>
              <h3 className="text-2xl font-extrabold mb-4 font-headline text-on-surface">Attendance</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed font-body">Biometric and QR-based tracking with instant SMS notifications to parents.</p>
            </div>
            <div className="md:col-span-2 glass-panel p-10 rounded-2xl flex flex-col justify-between min-h-[340px] hover:shadow-xl transition-shadow">
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
      </div>
    </SiteLayout>
  );
};

export default Home;
