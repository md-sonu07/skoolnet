import React from 'react';
import AppIcon from '../components/AppIcon';

const About = () => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary/10">
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 h-20 glass-nav glass-panel">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-primary to-blue-400 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <AppIcon className="text-white" name="school" size={22} />
            </div>
            <span className="text-2xl font-extrabold font-headline tracking-tight text-primary">Skoolnet</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-on-surface-variant hover:text-primary transition-colors font-medium text-sm" href="/">Home</a>
            <a className="text-primary font-bold border-b-2 border-primary py-1 text-sm" href="/about">About</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-medium text-sm" href="/services">Services</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-on-surface-variant hover:text-primary transition-all">
            <AppIcon name="notifications" size={20} />
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-all">
            <AppIcon name="settings" size={20} />
          </button>
          <div className="h-10 w-10 rounded-full bg-surface-container-high overflow-hidden ring-2 ring-primary/10">
            <img alt="User profile avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCghv75CobM3uPFOJIIzzvBJ9Iksv7yOofAv4fGfVSErynd27UgeKTxtrgWR-FuP5rvlAh10Mu8_yi8_6_22Pj8wIVorHjbDxHQbCRn5teSpIn17Bn1-XeB-X5PAWsRZLxvOU8lUhDul9evbXsfHg26rRwGbV9XPDsEcEFWzCwO0t4d43IFhJxjM-6yLzGn4uCKYAesEqMvk9F76e_ZUkK7jsgCYqaik9b6MxykzODuEdT89s0f0dqnAGCjzZ7b4P0gsAZy_6moxg"/>
          </div>
        </div>
      </nav>
      <main className="pt-40 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-extrabold font-headline tracking-tight leading-tight mb-8 text-on-surface">
                The <span className="hero-gradient-text">Digital Curator</span> for Education.
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                We don't just manage data; we gallery high-value insights for academic excellence. Skoolnet is the premium environment designed for focus, precision, and administrative clarity.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 btn-primary font-bold rounded-2xl">
                  Get Started
                </button>
                <button className="px-8 py-4 bg-white text-on-surface font-semibold rounded-2xl border border-outline-variant/50 transition-all hover:bg-surface-container-low">
                  Our Method
                </button>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface-container-low shadow-2xl border border-white">
              <img alt="Team collaborating" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDybp3-13T3KhpAxOzTZGBHZxZ3DeL4flf-SnfaVeiGjWnJJDSg0yHEQbmSK_lGK7S2YnI7LVV8DoCqHppt1eJLhRsi-7TBCSiD9_8HwwWYN7Fvo-cSRJyThJL2sXYj-47pLBDWEU34QDTR7Q98lgvW6EW-Ed-LHu8L9YAnEaudiCWn18UexItrYGbM8LlQtN8N1_RAcfbC-aTZ3hkmW7KcEtxi6-E9T3f4yw-8xELZVwsEp9IH1H5lL-AEPF4bh_FUfMWRbT_M0p0"/>
              <div className="absolute inset-0 bg-linear-to-t from-white/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          <div className="p-12 glass-panel rounded-2xl">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
              <AppIcon className="text-primary" name="rocket_launch" size={36} />
            </div>
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-6">Our Mission</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              To empower educational institutions with architectural-grade digital tools that simplify complexity, allowing educators to focus entirely on the growth and success of their students.
            </p>
          </div>
          <div className="p-12 glass-panel rounded-2xl md:translate-y-12">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
              <AppIcon className="text-primary" name="visibility" size={36} />
            </div>
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-6">Our Vision</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              To set the global standard for educational management, where data serves as a bridge to insight, and technology disappears into the background of a seamless learning experience.
            </p>
          </div>
        </section>
        <section className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-headline font-bold mb-4 text-on-surface">The Shift in Management</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-outline-variant/20 glass-panel rounded-2xl overflow-hidden">
            <div className="p-12 lg:p-20 bg-white/50">
              <h3 className="text-error font-headline font-bold text-sm uppercase tracking-widest mb-10">The Legacy Problem</h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <AppIcon className="text-error/60" name="cancel" size={20} />
                  <span className="text-on-surface-variant">Fragmented data across multiple disconnected platforms.</span>
                </li>
                <li className="flex items-start gap-4">
                  <AppIcon className="text-error/60" name="cancel" size={20} />
                  <span className="text-on-surface-variant">Manual, error-prone entry processes that drain resources.</span>
                </li>
                <li className="flex items-start gap-4">
                  <AppIcon className="text-error/60" name="cancel" size={20} />
                  <span className="text-on-surface-variant">Clunky, outdated interfaces that discourage user adoption.</span>
                </li>
              </ul>
            </div>
            <div className="p-12 lg:p-20 bg-primary/5 relative">
              <h3 className="text-primary font-headline font-bold text-sm uppercase tracking-widest mb-10">The Skoolnet Solution</h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <AppIcon className="text-primary" name="check_circle" size={20} />
                  <span className="text-on-surface font-semibold">Unified ecosystem with real-time architectural synchronization.</span>
                </li>
                <li className="flex items-start gap-4">
                  <AppIcon className="text-primary" name="check_circle" size={20} />
                  <span className="text-on-surface font-semibold">Intelligent automation for scheduling, grading, and reporting.</span>
                </li>
                <li className="flex items-start gap-4">
                  <AppIcon className="text-primary" name="check_circle" size={20} />
                  <span className="text-on-surface font-semibold">Editorial-grade UI designed for executive-level clarity.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mb-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-headline font-bold mb-4 text-on-surface">The Curators</h2>
            <p className="text-on-surface-variant">The minds behind the architectural precision of Skoolnet.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { name: "Julian Vance", role: "Founder & CEO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClZedoILGixFpl00mykKz_i1Nfo6-ejT5_nKaswQMZNYmdszP-9f9eNmJd72gFI5RDpFYFmNZwJol4ZFz8LR_9ebUIXRp4LsVz-DvNPKvR157iuqzV3xnp2PeWbd39_Wi06S7s3M-O06Q3Vf70Kdlhnq2tAnvnJfJAQUjD0qyejscYxbcMteh8fHPFPd3rB_sF5br4ahemhVOp6eo7tkQQrF_9wfawCNMB5EThlT5sF1lK0rDJ3EAn2t_6x1E333cxT1vnb9Kdp4A" },
              { name: "Elena Rossi", role: "Head of Design", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWFUWzDqhthVj7jego3lI-jLJHiiXai-qenohWUvl7T9hz_eU8SD5_FQZO1r3s7iwMqrWGH3w1u9r8Ca-q5FQWolEZxMI3txk5AV8xD4eaj-CDrV0TANxxcQNg4HGCiDvDYvuksqXOCTDHmyRnSpEgAf_gjzzpsHkoSYdZ-52RGY_xvOu8t2756uZUwOLNTFlgLwfGykZVxjjR4rN1W_n3SM4qzBR1RRptrydvOsbuLkqaPad2cQmF8OqkLeb99VET3gL721vHZeU" },
              { name: "Marcus Chen", role: "CTO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA78uqlORlFyRymfdkC8nehKVM-W57yf5JhdBAP0XzQhuyASYbkRgIYWDukU1-p3Uly-NKhJA-_RSzhQ6bImsaC9oZfa5_Ll83jvDPChBuHzsESNczf-UOhNr_UhuDe2TDZ2yyz4Ww-p1jUTrcUeNnSEXGg9r_X2E5XhKR9a8ffXj9AcFpue7Oi1py8uKC8qOg-AALHIfE7bR3LdiLdkqxQ6VI_2lAJsN9FHemI06A1oosgxHGgr-GWgCQ11FvOD9Q1jZWiWu4lFhY" },
              { name: "Sarah Jenkins", role: "Operations", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8yUBLlZEcFNN_8gORGRCiFI-lMbOXZ5_uFfIZWGDQy7i0ZJHGh3wKH5WCMrepn6GFr30R3JLHHSuTvK8OP2edBYw3tY5R-Pw6WQZhIFqHFhxhFCnzCd8j4xnsaZyTI2T5hw_KTWIzyrjo8sbWSsSbm11zKVKwUBDXCUA6ZQihyzdrkh8p0OSz5zGtLuPP2GBqYEKc1iEGhC7OcMg-NMcFqbTKJ3e-W7VMcx4W_8fbjTt7Gjb7ENHvpphDpHqSfCahTekVc3tRz48" }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden bg-surface-container-low ring-4 ring-white group-hover:ring-primary/20 transition-all shadow-xl">
                  <img alt={member.name} className="w-full h-full object-cover" src={member.img} />
                </div>
                <h4 className="font-headline font-bold text-on-surface text-lg">{member.name}</h4>
                <p className="text-[11px] text-primary uppercase tracking-[0.2em] font-black mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-surface border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-12 py-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
                <AppIcon className="text-white" name="school" size={14} />
              </div>
              <span className="font-headline text-lg font-black text-on-surface">Skoolnet</span>
            </div>
            <p className="text-on-surface-variant font-label text-[10px] uppercase tracking-[0.2em]">Elevating Education Management</p>
          </div>
          <div className="flex gap-10 mb-8 md:mb-0">
            <a className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors font-bold" href="/about">About</a>
            <a className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors font-bold" href="#">Careers</a>
            <a className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors font-bold" href="#">Privacy</a>
            <a className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors font-bold" href="#">Terms</a>
          </div>
          <div className="text-on-surface-variant font-label text-[11px] uppercase tracking-widest font-medium opacity-60">
            © 2024 Skoolnet Digital Curator Edition
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
