import React from 'react';
import AppIcon from '../../components/common/AppIcon';
import SiteLayout from '../../layouts/SiteLayout';

const Contact = () => {
  return (
    <SiteLayout>
      <main className="relative min-h-screen overflow-hidden pb-24">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 lg:py-20">
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
                  <textarea className="w-full rounded-xl border border-outline-variant/60 bg-surface-container-low/70 px-5 py-4 text-on-surface transition-all focus:ring-2 focus:ring-primary/20 peer placeholder-transparent resize-none" id="message" placeholder=" " rows="5"></textarea>
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
            <div className="absolute inset-0 bg-surface-container-low">
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
    </SiteLayout>
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
    <input className="w-full rounded-xl border border-outline-variant/60 bg-surface-container-low/70 px-5 py-4 text-on-surface transition-all focus:ring-2 focus:ring-primary/20 peer placeholder-transparent" id={id} placeholder=" " type={type}/>
    <label className="absolute left-5 top-4 text-on-surface-variant font-medium pointer-events-none transition-all duration-200 peer-focus:-translate-y-7 peer-focus:scale-85 peer-focus:text-primary peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:scale-85" htmlFor={id}>{label}</label>
  </div>
);

export default Contact;
