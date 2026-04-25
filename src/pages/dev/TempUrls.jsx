import React, { useState, useEffect } from 'react';

const URL_GROUPS = [
  {
    title: 'Authentication - Manager',
    links: [
      { id: 'auth-manager-login', name: 'Login', path: '/auth/manager/login' },
      { id: 'auth-manager-signup', name: 'Signup', path: '/auth/manager/signup' },
    ],
  },
  {
    title: 'Authentication - Partner',
    links: [
      { id: 'auth-partner-login', name: 'Login', path: '/auth/partner/login' },
      { id: 'auth-partner-register', name: 'Register', path: '/auth/partner/register' },
    ],
  },
  {
    title: 'Authentication - Institution (School)',
    links: [
      { id: 'auth-inst-login', name: 'Login', path: '/auth/institution/login' },
      { id: 'auth-inst-reg', name: 'Register', path: '/auth/institution/register' },
    ],
  },
  {
    title: 'Authentication - Teacher',
    links: [
      { id: 'auth-teacher-login', name: 'Login', path: '/auth/teacher/login' },
      { id: 'auth-teacher-signup', name: 'Signup', path: '/auth/teacher/signup' },
    ],
  },
  {
    title: 'Authentication - Student',
    links: [
      { id: 'auth-student-login', name: 'Login', path: '/auth/student/login' },
      { id: 'auth-student-signup', name: 'Signup', path: '/auth/student/signup' },
    ],
  },
  {
    title: 'Platform Manage Dashboards',
    links: [
      { id: 'dash-manager', name: 'Platform Manager Dashboard', path: '/dashboard/manager/overview' },
      { id: 'dash-partner', name: 'Partner Dashboard', path: '/dashboard/partner/overview' },
    ],
  },
  {
    title: 'School Dashboard Panels',
    links: [
      { id: 'school-admin', name: 'School Admin Dashboard', path: '/dashboard/school/overview' },
      { id: 'school-teacher', name: 'School Teacher Dashboard', path: '/dashboard/school-teacher/dashboard' },
      { id: 'school-student', name: 'School Student Dashboard', path: '/dashboard/school-student/dashboard' },
    ],
  },
  {
    title: 'Coaching Dashboard Panels',
    links: [
      { id: 'coaching-admin', name: 'Coaching Admin Dashboard', path: '/dashboard/coaching/overview' },
      { id: 'coaching-teacher', name: 'Coaching Teacher Dashboard', path: '/dashboard/coaching-teacher/dashboard' },
      { id: 'coaching-student', name: 'Coaching Student Dashboard', path: '/dashboard/coaching-student/dashboard' },
    ],
  },
  {
    title: 'Profile Pages',
    links: [
      { id: 'prof-manager', name: 'Manager Profile', path: '/dashboard/manager/profile' },
      { id: 'prof-school', name: 'School Profile', path: '/dashboard/school/profile' },
      { id: 'prof-coaching', name: 'Coaching Profile', path: '/dashboard/coaching/profile' },
      { id: 'prof-teacher', name: 'Teacher Profile', path: '/dashboard/school-teacher/profile' },
      { id: 'prof-student', name: 'Student Profile', path: '/dashboard/school-student/profile' },
    ],
  },
];

export default function TempUrls() {
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem('skoolnet_dev_tasks');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('skoolnet_dev_tasks', JSON.stringify(completed));
  }, [completed]);

  const toggleTask = (id) => {
    setCompleted(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const progress = Math.round(
    (Object.values(completed).filter(Boolean).length / 
    URL_GROUPS.reduce((acc, g) => acc + g.links.length, 0)) * 100
  );

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <div className="inline-block p-2 px-4 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Development Environment</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Internal URL Directory</h1>
          <p className="text-slate-600">Track your progress and access application modules.</p>
          
          <div className="mt-6 max-w-xs mx-auto">
            <div className="flex justify-between items-center mb-1 text-xs font-bold text-slate-500 uppercase">
              <span>Overall Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {URL_GROUPS.map((group, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <h2 className="font-bold text-slate-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  {group.title}
                </h2>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {group.links.filter(l => completed[l.id]).length} / {group.links.length} Masked
                </span>
              </div>
              <div className="p-4 space-y-2">
                {group.links.map((link) => (
                  <div 
                    key={link.id}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all border ${
                      completed[link.id] 
                        ? 'bg-emerald-50/50 border-emerald-100 opacity-75' 
                        : 'hover:bg-primary/5 border-transparent hover:border-primary/10'
                    }`}
                  >
                    <button
                      onClick={() => toggleTask(link.id)}
                      className={`w-6 h-6 rounded-md border flex items-center justify-center shrink-0 transition-all ${
                        completed[link.id]
                          ? 'bg-emerald-500 border-emerald-500 text-white'
                          : 'border-slate-300 bg-white hover:border-primary text-transparent'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm font-bold">🗸</span>
                    </button>

                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex justify-between items-center group"
                    >
                      <span className={`text-sm font-medium transition-colors ${
                        completed[link.id] ? 'text-slate-500 line-through' : 'text-slate-700 group-hover:text-primary'
                      }`}>
                        {link.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <code className={`text-[10px] px-2 py-1 rounded-md transition-colors ${
                          completed[link.id] ? 'bg-slate-100 text-slate-400' : 'bg-slate-100 text-slate-500 group-hover:bg-primary/10 group-hover:text-primary'
                        }`}>
                          {link.path}
                        </code>
                        <span className={`material-symbols-outlined text-sm transition-colors ${
                          completed[link.id] ? 'text-slate-300' : 'text-slate-300 group-hover:text-primary'
                        }`}>
                          open_in_new_tab
                        </span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-12 text-center text-slate-400 text-xs py-10 border-t border-slate-100">
          <p>Skoolnet Web Application Platform &bull; Dev Mode v1.1 &bull; Built for danske farhan</p>
        </footer>
      </div>
    </div>
  );
}
