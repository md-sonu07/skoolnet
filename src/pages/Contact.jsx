import React from 'react';
import AppIcon from '../components/AppIcon';

const Contact = () => {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary/20">
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100 flex items-center justify-between px-8 h-16">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-extrabold text-primary font-headline tracking-tight">Skoolnet</span>
          <div className="hidden md:flex items-center gap-6">
            <a className="text-on-surface-variant hover:text-primary transition-colors px-3 py-1 font-medium" href="/">Home</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors px-3 py-1 font-medium" href="/about">About</a>
            <a className="text-primary font-bold border-b-2 border-primary px-3 py-1" href="/contact">Support</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/5 rounded-full">
            <AppIcon name="notifications" size={20} />
          </button>
          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/5 rounded-full">
            <AppIcon name="light_mode" size={20} />
          </button>
          <div className="h-8 w-8 rounded-full overflow-hidden ml-2 ring-2 ring-primary/20">
            <img alt="User profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBH1WrAf8tDVakc5eDyh_aTyUH6i6ar3M5GeE8s5Do_Sp5P-oFc-4AnQAWnuUQZo3zHOEcPblfwIN2FyUuNhpUEb1Ru8dPfMJKJtNLC3dU7_z4jB_Gg0BytrIsx6IpFWtKPwsVk2t8pWS67ajsNakDOXGOt7o2cfg-qBDSJ4ccxErtOoPFxauTIQbEBkXWbFbIDcTV68k8tiBqrfl5Ux9mV_dw1V2eOr3qexuAcJLexFZkINjv0FzU5nyw0ZZRHyMUvYeG0TER9QK0"/>
          </div>
        </div>
      </nav>

      <aside className="hidden lg:flex h-screen w-64 fixed left-0 top-0 bg-white/40 backdrop-blur-md border-r border-gray-100 flex-col py-6 z-40">
        <div className="px-6 mb-8 mt-16">
          <h1 className="font-headline font-extrabold text-on-surface text-xl">Skoolnet</h1>
          <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-wider">Admin Portal</p>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {[
            { name: "Dashboard", icon: "dashboard", href: "/" },
            { name: "Classes", icon: "school", href: "#" },
            { name: "Students", icon: "group", href: "#" },
            { name: "Analytics", icon: "monitoring", href: "#" },
            { name: "Resources", icon: "folder_open", href: "/services" },
            { name: "Support", icon: "help_center", href: "/contact", active: true }
          ].map((item, i) => (
            <a key={i} className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${item.active ? 'bg-primary/10 text-primary border-l-4 border-primary' : 'text-on-surface-variant hover:text-primary hover:bg-primary/5'}`} href={item.href}>
              <AppIcon name={item.icon} size={20} />
              <span className="font-semibold">{item.name}</span>
            </a>
          ))}
        </nav>
        <div className="px-6 mt-auto">
          <button className="w-full py-3 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all">
            Upgrade Plan
          </button>
        </div>
      </aside>

      <main className="lg:pl-64 pt-16 min-h-screen relative overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            <div className="w-full lg:w-1/3 space-y-12">
              <header className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-headline font-extrabold tracking-tight text-on-surface">Get in touch</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed font-medium">
                  Have questions about our enterprise management system? Our team is here to assist you with technical support or account inquiries.
                </p>
              </header>
              <div className="space-y-8">
                <ContactInfo icon="mail" title="Email" lines={["support@skoolnet.ai", "sales@skoolnet.ai"]} />
                <ContactInfo icon="call" title="Phone" lines={["+1 (555) 000-1234", "Mon-Fri: 9am - 6pm EST"]} />
                <ContactInfo icon="location_on" title="Headquarters" lines={["101 Innovation Way", "Silicon Valley, CA 94025"]} />
              </div>
            </div>

            <div className="w-full lg:w-2/3 glass-panel rounded-2xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
              <form action="#" className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FloatingInput label="Full Name" id="name" />
                  <FloatingInput label="Email Address" id="email" type="email" />
                </div>
                <FloatingInput label="Subject" id="subject" />
                <div className="relative">
                  <textarea className="w-full bg-surface-variant/50 border-none rounded-xl py-4 px-5 text-on-surface focus:ring-2 focus:ring-primary/20 transition-all peer placeholder-transparent resize-none" id="message" placeholder=" " rows="5"></textarea>
                  <label className="absolute left-5 top-4 text-on-surface-variant font-medium pointer-events-none transition-all duration-200 peer-focus:-translate-y-10 peer-focus:scale-85 peer-not-placeholder-shown:-translate-y-10 peer-not-placeholder-shown:scale-85" htmlFor="message">How can we help?</label>
                </div>
                <button className="w-full lg:w-max px-12 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-3" type="submit">
                  Send Message
                  <AppIcon name="arrow_forward" size={20} />
                </button>
              </form>
            </div>
          </div>

          <section className="mt-24 rounded-2xl h-96 w-full overflow-hidden relative shadow-lg border border-gray-100">
            <div className="absolute inset-0 bg-surface-variant">
              <img alt="Palo Alto Area Map" className="w-full h-full object-cover grayscale opacity-60 contrast-75" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChyvDLoNXbyi57bIf4qPN2SKIBRwXilzcHh36aL2604tYk9qWQ_noUPe5-724mU8yAcrPKd-5DduWhhz5p_5sAdWR6igYzcY3WUjYE-w6BBEDm8he4OK68g8PzgWULKTfUfXoSdr4hiIfU8EhUEusVg4Hixas4_HcquEXuxgIRqFUY1FDthT8YilJ4EOphBJLfrBGy_CvAbG5G6Z5JSO0gFWg4aqwue9cZpVuIg5bS6jCXdF0smjFY_jHzZV3yENdlTVBgYOW_2dQ"/>
              <div className="absolute inset-0 bg-linear-to-t from-white via-white/10 to-transparent"></div>
            </div>
            <div className="absolute bottom-8 left-8 glass-panel p-8 rounded-2xl max-w-sm shadow-xl">
              <h5 className="text-on-surface font-headline font-extrabold text-xl mb-2">Palo Alto Center</h5>
              <p className="text-on-surface-variant font-medium text-sm leading-relaxed">Join us at our main campus for quarterly workshops and enterprise partnership meetings.</p>
              <div className="mt-4 flex items-center gap-2 text-primary font-bold text-sm">
                <span>View on Google Maps</span>
                <AppIcon name="open_in_new" size={16} />
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="lg:pl-64 bg-white w-full border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <span className="font-headline text-2xl font-extrabold text-primary mb-1 block">Skoolnet</span>
            <p className="font-body text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60">© 2024 Skoolnet Inc. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {["About", "Careers", "Privacy", "Terms", "Status"].map(link => (
              <a key={link} className="font-bold text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors" href="#">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

const ContactInfo = ({ icon, title, lines }) => (
  <div className="flex items-start gap-4">
    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
      <AppIcon name={icon} size={20} />
    </div>
    <div>
      <h4 className="font-headline font-bold text-on-surface">{title}</h4>
      {lines.map((line, i) => <p key={i} className="text-on-surface-variant font-medium">{line}</p>)}
    </div>
  </div>
);

const FloatingInput = ({ label, id, type = "text" }) => (
  <div className="relative">
    <input className="w-full bg-surface-variant/50 border-none rounded-xl py-4 px-5 text-on-surface focus:ring-2 focus:ring-primary/20 transition-all peer placeholder-transparent" id={id} placeholder=" " type={type}/>
    <label className="absolute left-5 top-4 text-on-surface-variant font-medium pointer-events-none transition-all duration-200 peer-focus:-translate-y-7 peer-focus:scale-85 peer-focus:text-primary peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:scale-85" htmlFor={id}>{label}</label>
  </div>
);

export default Contact;
