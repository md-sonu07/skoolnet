import { useState } from 'react';
import AppIcon from '../../components/common/AppIcon';
import SettingsNavigation from '../../components/common/SettingsNavigation';
import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
  StatusBadge,
} from '../../components/common/DashboardPrimitives';

const systemStats = [
  { icon: 'settings', label: 'Active Settings', value: '42', change: '+3', helper: 'Configured', tone: 'blue' },
  { icon: 'security', label: 'Security Level', value: 'High', change: 'Optimal', helper: 'Protection', tone: 'emerald' },
  { icon: 'users', label: 'User Access', value: '156', change: '+12', helper: 'Active users', tone: 'purple' },
  { icon: 'integration', label: 'Integrations', value: '8', change: '+2', helper: 'Connected', tone: 'amber' },
  { icon: 'backup', label: 'Backups', value: 'Daily', change: 'Auto', helper: 'Last 24h', tone: 'rose' },
  { icon: 'activity', label: 'System Health', value: '98%', change: '+2%', helper: 'Performance', tone: 'green' },
];

const settingsCategories = [
  {
    title: 'User Management',
    description: 'Control user access, roles, and permissions',
    icon: 'users',
    settings: [
      { label: 'Enable user registration', type: 'toggle', enabled: true, description: 'Allow new users to register' },
      { label: 'Require email verification', type: 'toggle', enabled: true, description: 'Users must verify email before access' },
      { label: 'Default user role', type: 'select', value: 'Student', options: ['Student', 'Teacher', 'Admin'], description: 'Default role for new users' },
      { label: 'Password complexity', type: 'select', value: 'Medium', options: ['Low', 'Medium', 'High'], description: 'Password strength requirements' },
    ]
  },
  {
    title: 'Security Settings',
    description: 'Configure security policies and access controls',
    icon: 'security',
    settings: [
      { label: 'Two-factor authentication', type: 'toggle', enabled: true, description: 'Require 2FA for admin users' },
      { label: 'Session timeout', type: 'select', value: '30 minutes', options: ['15 minutes', '30 minutes', '1 hour', '2 hours'], description: 'Auto-logout inactive users' },
      { label: 'Failed login attempts', type: 'number', value: 5, description: 'Lock account after failed attempts' },
      { label: 'IP whitelist', type: 'toggle', enabled: false, description: 'Restrict access to specific IP addresses' },
    ]
  },
  {
    title: 'Communication',
    description: 'Manage notifications, emails, and messaging',
    icon: 'mail',
    settings: [
      { label: 'Email notifications', type: 'toggle', enabled: true, description: 'Send email notifications to users' },
      { label: 'SMS notifications', type: 'toggle', enabled: false, description: 'Send SMS notifications' },
      { label: 'Push notifications', type: 'toggle', enabled: true, description: 'Enable push notifications' },
      { label: 'Email provider', type: 'select', value: 'SendGrid', options: ['SendGrid', 'AWS SES', 'Mailgun'], description: 'Email service provider' },
    ]
  },
  {
    title: 'System Configuration',
    description: 'Configure system-wide settings and preferences',
    icon: 'settings',
    settings: [
      { label: 'Maintenance mode', type: 'toggle', enabled: false, description: 'Put site in maintenance mode' },
      { label: 'Debug mode', type: 'toggle', enabled: false, description: 'Enable debug logging' },
      { label: 'Cache duration', type: 'select', value: '1 hour', options: ['30 minutes', '1 hour', '6 hours', '24 hours'], description: 'System cache duration' },
      { label: 'Backup frequency', type: 'select', value: 'Daily', options: ['Hourly', 'Daily', 'Weekly'], description: 'Automatic backup schedule' },
    ]
  },
  {
    title: 'Features & Integrations',
    description: 'Enable/disable features and manage third-party integrations',
    icon: 'integration',
    settings: [
      { label: 'Google Analytics', type: 'toggle', enabled: true, description: 'Track website analytics' },
      { label: 'Payment gateway', type: 'select', value: 'Stripe', options: ['Stripe', 'PayPal', 'Razorpay'], description: 'Payment processing service' },
      { label: 'Cloud storage', type: 'select', value: 'AWS S3', options: ['AWS S3', 'Google Cloud', 'Azure'], description: 'File storage provider' },
      { label: 'API access', type: 'toggle', enabled: true, description: 'Enable API endpoints' },
    ]
  },
  {
    title: 'Content & Display',
    description: 'Manage content settings and display preferences',
    icon: 'layout',
    settings: [
      { label: 'Dark mode', type: 'toggle', enabled: false, description: 'Enable dark mode theme' },
      { label: 'Language', type: 'select', value: 'English', options: ['English', 'Spanish', 'French', 'German'], description: 'Default site language' },
      { label: 'Timezone', type: 'select', value: 'UTC', options: ['UTC', 'EST', 'PST', 'GMT'], description: 'Default timezone' },
      { label: 'Date format', type: 'select', value: 'MM/DD/YYYY', options: ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'], description: 'Date display format' },
    ]
  },
];

export default function ManagerSettings() {
  const [activeCategory, setActiveCategory] = useState(settingsCategories[0]);
  const [settings, setSettings] = useState(
    settingsCategories.reduce((acc, category) => {
      category.settings.forEach(setting => {
        acc[setting.label] = setting.type === 'toggle' ? setting.enabled : setting.value;
      });
      return acc;
    }, {})
  );

  const handleSettingChange = (label, value) => {
    setSettings(prev => ({ ...prev, [label]: value }));
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

      {/* Navigation */}
      <SettingsNavigation
        categories={settingsCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      {/* <SettingsNavigation
        categories={settingsCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        buttonText={"WebSite Settings"}
      /> */}

      <div className="w-full">
        {/* Settings Content */}
        <div className="w-full">
          <SectionCard 
            title={activeCategory.title}
            description={activeCategory.description}
          >
            <div className="space-y-6">
              {activeCategory.settings.map((setting, index) => (
                <div key={index} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-slate-900 mb-1">{setting.label}</h4>
                      <p className="text-sm text-slate-500">{setting.description}</p>
                    </div>
                    <div className="shrink-0">
                      {setting.type === 'toggle' && (
                        <button
                          onClick={() => handleSettingChange(setting.label, !settings[setting.label])}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            settings[setting.label] ? 'bg-primary' : 'bg-slate-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              settings[setting.label] ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      )}
                      
                      {setting.type === 'select' && (
                        <select
                          value={settings[setting.label]}
                          onChange={(e) => handleSettingChange(setting.label, e.target.value)}
                          className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                          {setting.options.map((option, optIndex) => (
                            <option key={optIndex} value={option}>{option}</option>
                          ))}
                        </select>
                      )}
                      
                      {setting.type === 'number' && (
                        <input
                          type="number"
                          value={settings[setting.label]}
                          onChange={(e) => handleSettingChange(setting.label, parseInt(e.target.value))}
                          className="w-20 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </DashboardPage>
  );
}
