import { useState } from 'react';
import AppIcon from '../../components/common/AppIcon';
import SettingsNavigation from '../../components/common/SettingsNavigation';
import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
} from '../../components/common/DashboardPrimitives';

const systemStats = [
  { icon: 'settings', label: 'Active Settings', value: '42', change: '+3', helper: 'Configured', tone: 'blue' },
  { icon: 'security', label: 'Security Level', value: 'High', change: 'Optimal', helper: 'Protection', tone: 'emerald' },
  { icon: 'users', label: 'User Access', value: '156', change: '+12', helper: 'Active users', tone: 'purple' },
  { icon: 'integration', label: 'Integrations', value: '8', change: '+2', helper: 'Connected', tone: 'amber' },
  { icon: 'backup', label: 'Backups', value: 'Daily', change: 'Auto', helper: 'Last 24h', tone: 'rose' },
  { icon: 'activity', label: 'System Health', value: '98%', change: '+2%', helper: 'Performance', tone: 'green' },
];

const landingSettingsCategories = [
  {
    title: 'Home Page',
    description: 'Configure home page content and layout',
    icon: 'home',
    sections: [
      {
        id: 'hero',
        title: 'Hero Section',
        icon: 'campaign',
        description: 'Main landing area with headline and CTAs',
        settings: [
          { label: 'Hero Title', type: 'text', value: 'Manage Your School Smartly with Skoolnet', description: 'Main hero heading' },
          { label: 'Hero Subtitle', type: 'textarea', value: 'Transform your institution into a high-performance digital ecosystem.', description: 'Hero description text' },
          { label: 'Primary CTA Button', type: 'text', value: 'Get Started Free', description: 'Main call-to-action button text' },
          { label: 'Primary CTA Link', type: 'text', value: '/pricing', description: 'Main call-to-action button URL' },
          { label: 'Secondary CTA Button', type: 'text', value: 'Book a Demo', description: 'Secondary call-to-action button text' },
          { label: 'Secondary CTA Link', type: 'text', value: '/contact', description: 'Secondary call-to-action button URL' },
        ]
      },
      {
        id: 'stats',
        title: 'Statistics',
        icon: 'bar_chart',
        description: 'Statistics displayed below hero',
        settings: [
          { label: 'Stat 1 Value', type: 'text', value: '500+', description: 'First statistic value' },
          { label: 'Stat 1 Label', type: 'text', value: 'Schools onboarded', description: 'First statistic label' },
          { label: 'Stat 2 Value', type: 'text', value: '1.2 M', description: 'Second statistic value' },
          { label: 'Stat 2 Label', type: 'text', value: 'Students managed', description: 'Second statistic label' },
          { label: 'Stat 3 Value', type: 'text', value: '99.9%', description: 'Third statistic value' },
          { label: 'Stat 3 Label', type: 'text', value: 'Uptime SLA', description: 'Third statistic label' },
          { label: 'Stat 4 Value', type: 'text', value: '4.9 ★', description: 'Fourth statistic value' },
          { label: 'Stat 4 Label', type: 'text', value: 'Average rating', description: 'Fourth statistic label' },
        ]
      },
      {
        id: 'features',
        title: 'Features',
        icon: 'grid_view',
        description: 'Feature cards with icons and descriptions',
        settings: [
          { label: 'Feature 1 Title', type: 'text', value: 'Student Dashboard', description: 'First feature title' },
          { label: 'Feature 1 Description', type: 'textarea', value: 'Personalised portal for every learner.', description: 'First feature description' },
          { label: 'Feature 2 Title', type: 'text', value: 'Fee Tracking', description: 'Second feature title' },
          { label: 'Feature 2 Description', type: 'textarea', value: 'Automated billing, smart reminders.', description: 'Second feature description' },
          { label: 'Feature 3 Title', type: 'text', value: 'Attendance', description: 'Third feature title' },
          { label: 'Feature 3 Description', type: 'textarea', value: 'Biometric and QR-based check-ins.', description: 'Third feature description' },
          { label: 'Feature 4 Title', type: 'text', value: 'Performance Analytics', description: 'Fourth feature title' },
          { label: 'Feature 4 Description', type: 'textarea', value: 'Advanced visualisations.', description: 'Fourth feature description' },
        ]
      },
      {
        id: 'cta',
        title: 'CTA Section',
        icon: 'ads_click',
        description: 'Call-to-action section at bottom',
        settings: [
          { label: 'CTA Section Primary Button', type: 'text', value: 'Get Started Free', description: 'CTA section primary button text' },
          { label: 'CTA Section Primary Link', type: 'text', value: '/pricing', description: 'CTA section primary button URL' },
          { label: 'CTA Section Secondary Button', type: 'text', value: 'Talk to Sales', description: 'CTA section secondary button text' },
          { label: 'CTA Section Secondary Link', type: 'text', value: '/contact', description: 'CTA section secondary button URL' },
        ]
      },
    ]
  },
  {
    title: 'Services Page',
    description: 'Manage services and features display',
    icon: 'category',
    settings: [
      { label: 'Page Title', type: 'text', value: 'Educational Intelligence Redefined.', description: 'Services page main title' },
      { label: 'Page Description', type: 'textarea', value: 'Deploy a comprehensive ecosystem built for modern institutions.', description: 'Services page description' },
    ]
  },
  {
    title: 'About Page',
    description: 'Manage about page content and team information',
    icon: 'info',
    settings: [
      { label: 'Page Title', type: 'text', value: 'The Developer Team Behind Skoolnet.', description: 'About page main title' },
      { label: 'Page Description', type: 'textarea', value: "We're a small, focused engineering team.", description: 'About page description' },
    ]
  },
  {
    title: 'Contact Page',
    description: 'Configure contact information and form settings',
    icon: 'contact_mail',
    settings: [
      { label: 'Page Title', type: 'text', value: 'Get in Touch', description: 'Contact page main title' },
      { label: 'Support Email', type: 'text', value: 'support@skoolnet.ai', description: 'Customer support email' },
    ]
  },
];

const settingsCategories = [
  {
    title: 'Landing Website',
    description: 'Manage landing page content and settings',
    icon: 'language',
    settings: []
  },
  {
    title: 'User Management',
    description: 'Control user access, roles, and permissions',
    icon: 'users',
    settings: [
      { label: 'Enable user registration', type: 'toggle', enabled: true, description: 'Allow new users to register' },
      { label: 'Require email verification', type: 'toggle', enabled: true, description: 'Users must verify email before access' },
      { label: 'Default user role', type: 'select', value: 'Student', options: ['Student', 'Teacher', 'Admin'], description: 'Default role for new users' },
    ]
  },
  {
    title: 'Security Settings',
    description: 'Configure security policies and access controls',
    icon: 'security',
    settings: [
      { label: 'Two-factor authentication', type: 'toggle', enabled: true, description: 'Require 2FA for admin users' },
      { label: 'Session timeout', type: 'select', value: '30 minutes', options: ['15 minutes', '30 minutes', '1 hour', '2 hours'], description: 'Auto-logout inactive users' },
    ]
  },
];

export default function ManagerSettings() {
  const [activeCategory, setActiveCategory] = useState(settingsCategories[0]);
  const [activeLandingCategory, setActiveLandingCategory] = useState(landingSettingsCategories[0]);
  const [activeHomeSection, setActiveHomeSection] = useState(landingSettingsCategories[0]?.sections?.[0] || null);
  const [settings, setSettings] = useState(
    settingsCategories.reduce((acc, category) => {
      category.settings?.forEach(setting => {
        acc[setting.label] = setting.type === 'toggle' ? setting.enabled : setting.value;
      });
      return acc;
    }, {})
  );
  const [landingSettings, setLandingSettings] = useState(() => {
    const initial = {};
    landingSettingsCategories.forEach(category => {
      category.sections?.forEach(section => {
        section.settings.forEach(setting => {
          initial[setting.label] = setting.type === 'toggle' ? setting.enabled : setting.value;
        });
      });
      category.settings?.forEach(setting => {
        initial[setting.label] = setting.type === 'toggle' ? setting.enabled : setting.value;
      });
    });
    return initial;
  });

  const handleSettingChange = (label, value) => {
    setSettings(prev => ({ ...prev, [label]: value }));
  };

  const handleLandingSettingChange = (label, value) => {
    setLandingSettings(prev => ({ ...prev, [label]: value }));
  };

  const renderSettingInput = (setting, value, onChange) => {
    switch (setting.type) {
      case 'text':
        return (
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange(setting.label, e.target.value)}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
            placeholder={`Enter ${setting.label.toLowerCase()}`}
          />
        );
      case 'textarea':
        return (
          <textarea
            value={value || ''}
            onChange={(e) => onChange(setting.label, e.target.value)}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none bg-white"
            rows={3}
            placeholder={`Enter ${setting.label.toLowerCase()}`}
          />
        );
      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => onChange(setting.label, e.target.value)}
            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
          >
            {setting.options?.map((option, optIndex) => (
              <option key={optIndex} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'toggle':
        return (
          <button
            onClick={() => onChange(setting.label, !value)}
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${value ? 'bg-primary' : 'bg-slate-200'}`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm ${value ? 'translate-x-6' : 'translate-x-1'}`}
            />
          </button>
        );
      case 'number':
        return (
          <input
            type="number"
            value={value || 0}
            onChange={(e) => onChange(setting.label, parseInt(e.target.value))}
            className="w-28 px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
          />
        );
      default:
        return null;
    }
  };

  const renderPreview = () => {
    if (!activeHomeSection) return null;
    return (
      <div className="mt-6 bg-white rounded-2xl border border-outline-variant/40 shadow-sm overflow-hidden">
        <div className="bg-slate-50 px-6 py-3 border-b border-outline-variant/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <span className="text-xs text-slate-500 font-mono ml-2">skoolnet.ai</span>
          </div>
          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            {activeHomeSection.title} Preview
          </span>
        </div>
        <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-[280px]">
          {activeHomeSection.id === 'hero' && (
            <div className="bg-white rounded-xl shadow-md p-8 border border-slate-200 max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-black text-slate-900 mb-3">
                  {landingSettings['Hero Title'] || 'Hero Title'}
                </h2>
                <p className="text-slate-600 text-base max-w-lg mx-auto leading-relaxed">
                  {landingSettings['Hero Subtitle'] || 'Hero Subtitle'}
                </p>
              </div>
              <div className="flex justify-center gap-4">
                <span className="px-6 py-3 bg-primary text-white font-semibold rounded-xl text-sm">
                  {landingSettings['Primary CTA Button'] || 'Primary CTA'}
                </span>
                <span className="px-6 py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl text-sm">
                  {landingSettings['Secondary CTA Button'] || 'Secondary CTA'}
                </span>
              </div>
            </div>
          )}
          {activeHomeSection.id === 'stats' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { value: landingSettings['Stat 1 Value'] || '500+', label: landingSettings['Stat 1 Label'] || 'Schools' },
                { value: landingSettings['Stat 2 Value'] || '1.2M', label: landingSettings['Stat 2 Label'] || 'Students' },
                { value: landingSettings['Stat 3 Value'] || '99.9%', label: landingSettings['Stat 3 Label'] || 'Uptime' },
                { value: landingSettings['Stat 4 Value'] || '4.9★', label: landingSettings['Stat 4 Label'] || 'Rating' },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 text-center shadow-sm">
                  <div className="text-3xl font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
          {activeHomeSection.id === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: landingSettings['Feature 1 Title'], desc: landingSettings['Feature 1 Description'] },
                { title: landingSettings['Feature 2 Title'], desc: landingSettings['Feature 2 Description'] },
                { title: landingSettings['Feature 3 Title'], desc: landingSettings['Feature 3 Description'] },
                { title: landingSettings['Feature 4 Title'], desc: landingSettings['Feature 4 Description'] },
              ].map((feature, i) => (
                <div key={i} className={`bg-white rounded-xl p-5 border shadow-sm ${i === 1 ? 'bg-primary text-white border-primary' : 'border-slate-200'}`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${i === 1 ? 'bg-white/20' : 'bg-primary/10'}`}>
                    <AppIcon name={['group', 'payments', 'how_to_reg', 'analytics'][i]} size={20} className={i === 1 ? 'text-white' : 'text-primary'} />
                  </div>
                  <h4 className={`font-bold mb-2 ${i === 1 ? 'text-white' : 'text-slate-900'}`}>{feature.title || 'Feature'}</h4>
                  <p className={`text-sm leading-relaxed ${i === 1 ? 'text-white/80' : 'text-slate-500'}`}>
                    {feature.desc?.substring(0, 80) || 'Description'}...
                  </p>
                </div>
              ))}
            </div>
          )}
          {activeHomeSection.id === 'cta' && (
            <div className="bg-primary rounded-2xl p-10 text-center shadow-lg relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h2 className="text-3xl font-black text-white mb-4">Ready to transform your school?</h2>
                <p className="text-white/75 text-base mb-8 max-w-md mx-auto">Join 500+ schools already running on Skoolnet.</p>
                <div className="flex justify-center gap-4">
                  <span className="px-8 py-3 bg-white text-primary font-bold rounded-xl text-sm">
                    {landingSettings['CTA Section Primary Button'] || 'Get Started'}
                  </span>
                  <span className="px-8 py-3 bg-white/10 border border-white/30 text-white font-bold rounded-xl text-sm">
                    {landingSettings['CTA Section Secondary Button'] || 'Talk to Sales'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <DashboardPage
      eyebrow="System configuration"
      title="Manager settings"
      actions={
        <>
          <button type="button" className="btn-primary">
            <AppIcon name="save" size={16} className="mr-2" />
            Save changes
          </button>
          <button type="button" className="btn-secondary">
            <AppIcon name="history" size={16} className="mr-2" />
            View audit log
          </button>
        </>
      }
    >
      <MetricGrid>
        {systemStats.map((stat, index) => (
          <MetricCard
            key={index}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            change={stat.change}
            helper={stat.helper}
            tone={stat.tone}
          />
        ))}
      </MetricGrid>

      <SettingsNavigation
        categories={settingsCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="w-full">
        <div className="w-full">
          {activeCategory.title === 'Landing Website' && (
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2 border-b border-outline-variant/30 pb-4">
                {landingSettingsCategories.map((category) => (
                  <button
                    key={category.title}
                    onClick={() => {
                      setActiveLandingCategory(category);
                      setActiveHomeSection(category.sections?.[0] || null);
                    }}
                    className={`px-4 py-2.5 font-semibold text-sm rounded-lg transition-all ${
                      activeLandingCategory.title === category.title
                        ? 'bg-primary text-white shadow-md'
                        : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <AppIcon name={category.icon} size={16} />
                      {category.title}
                    </div>
                  </button>
                ))}
              </div>

              {activeLandingCategory.title === 'Home Page' && activeLandingCategory.sections && (
                <>
                  <div className="bg-slate-50 rounded-xl p-1 flex flex-wrap gap-1">
                    {activeLandingCategory.sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveHomeSection(section)}
                        className={`flex-1 min-w-[140px] px-4 py-2.5 rounded-lg font-medium text-sm transition-all text-center ${
                          activeHomeSection?.id === section.id
                            ? 'bg-white text-primary shadow-sm'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </div>

                  <div className="bg-white rounded-2xl border border-outline-variant/40 shadow-sm overflow-hidden">
                    <div className="bg-gradient-to-r from-primary/5 to-primary/10 px-6 py-4 border-b border-outline-variant/30">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                          <AppIcon name={activeHomeSection?.icon || 'article'} size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-on-surface">{activeHomeSection?.title}</h3>
                          <p className="text-sm text-on-surface-variant">{activeHomeSection?.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="space-y-5">
                        {activeHomeSection?.settings?.map((setting, index) => (
                          <div key={index}>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl hover:bg-surface-container transition-colors border border-transparent hover:border-outline-variant/30">
                              <div className="flex-1 min-w-0">
                                <label className="font-medium text-slate-900 block mb-1">{setting.label}</label>
                                <p className="text-sm text-slate-500">{setting.description}</p>
                              </div>
                              <div className="shrink-0 w-full sm:w-72">
                                {renderSettingInput(setting, landingSettings[setting.label], handleLandingSettingChange)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {renderPreview()}
                </>
              )}

              {activeLandingCategory.title !== 'Home Page' && (
                <SectionCard 
                  title={activeLandingCategory.title}
                  description={activeLandingCategory.description}
                >
                  <div className="space-y-6">
                    {activeLandingCategory.settings?.map((setting, index) => (
                      <div key={index}>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-slate-900 mb-1">{setting.label}</h4>
                            <p className="text-sm text-slate-500">{setting.description}</p>
                          </div>
                          <div className="shrink-0 w-64">
                            {renderSettingInput(setting, landingSettings[setting.label], handleLandingSettingChange)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SectionCard>
              )}
            </div>
          )}

          {activeCategory.title !== 'Landing Website' && (
            <SectionCard 
              title={activeCategory.title}
              description={activeCategory.description}
            >
              <div className="space-y-6">
                {activeCategory.settings?.map((setting, index) => (
                  <div key={index}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-slate-900 mb-1">{setting.label}</h4>
                        <p className="text-sm text-slate-500">{setting.description}</p>
                      </div>
                      <div className="shrink-0">
                        {renderSettingInput(setting, settings[setting.label], handleSettingChange)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}
        </div>
      </div>
    </DashboardPage>
  );
}