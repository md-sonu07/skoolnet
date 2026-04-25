import React, { useState, useEffect } from 'react';

const URL_GROUPS = [
  {
    title: 'Platform Management (Manager)',
    links: [
      { id: 'dash-manager', name: 'Manager Dashboard', path: '/dashboard/manager/overview' },
      { id: 'prof-manager', name: 'Manager Profile', path: '/dashboard/manager/profile' },
      {
        name: 'Manager Auth',
        subLinks: [
          { id: 'auth-manager-login', name: 'Login', path: '/auth/manager/login' },
          { id: 'auth-manager-signup', name: 'Signup', path: '/auth/manager/signup' },
        ]
      }
    ],
  },
  {
    title: 'Partner Network',
    links: [
      { id: 'dash-partner', name: 'Partner Dashboard', path: '/dashboard/partner/overview' },
      {
        name: 'Partner Auth',
        subLinks: [
          { id: 'auth-partner-login', name: 'Login', path: '/auth/partner/login' },
          { id: 'auth-partner-register', name: 'Register', path: '/auth/partner/register' },
        ]
      }
    ],
  },
  {
    title: 'School Panel',
    links: [
      { id: 'school-admin', name: 'School Admin Dashboard', path: '/dashboard/school/overview' },
      { id: 'prof-school', name: 'School Profile', path: '/dashboard/school/profile' },
      { 
        name: 'School Auth', 
        subLinks: [
          { id: 'auth-inst-login', name: 'Login', path: '/auth/institution/login' },
          { id: 'auth-inst-reg', name: 'Register', path: '/auth/institution/register' },
        ]
      },
      {
        name: 'Teacher Module',
        subLinks: [
          { id: 'school-teacher-dash', name: 'Dashboard', path: '/dashboard/school-teacher/dashboard' },
          { id: 'prof-teacher', name: 'Profile', path: '/dashboard/school-teacher/profile' },
          { id: 'auth-teacher-login', name: 'Auth Login', path: '/auth/teacher/login' },
          { id: 'auth-teacher-signup', name: 'Auth Signup', path: '/auth/teacher/signup' },
        ]
      },
      {
        name: 'Student Module',
        subLinks: [
          { id: 'school-student-dash', name: 'Dashboard', path: '/dashboard/school-student/dashboard' },
          { id: 'prof-student', name: 'Profile', path: '/dashboard/school-student/profile' },
          { id: 'auth-student-login', name: 'Auth Login', path: '/auth/student/login' },
          { id: 'auth-student-signup', name: 'Auth Signup', path: '/auth/student/signup' },
        ]
      }
    ],
  },
  {
    title: 'Coaching Panel',
    links: [
      { id: 'coaching-admin', name: 'Coaching Admin Dashboard', path: '/dashboard/coaching/overview' },
      { id: 'prof-coaching', name: 'Coaching Profile', path: '/dashboard/coaching/profile' },
      {
        name: 'Coaching Auth',
        subLinks: [
          { id: 'auth-coach-login', name: 'Login', path: '/auth/institution/login' },
          { id: 'auth-coach-reg', name: 'Register', path: '/auth/institution/register' },
        ]
      },
      {
        name: 'Teacher Module',
        subLinks: [
          { id: 'coach-teacher-dash', name: 'Dashboard', path: '/dashboard/coaching/teacher/dev-teacher/dashboard' },
          { id: 'coach-teacher-prof', name: 'Profile', path: '/dashboard/coaching/teacher/dev-teacher/profile' },
        ]
      },
      {
        name: 'Student Module',
        subLinks: [
          { id: 'coach-student-dash', name: 'Dashboard', path: '/dashboard/coaching/student/dev-student/dashboard' },
          { id: 'coach-student-prof', name: 'Profile', path: '/dashboard/coaching/student/dev-student/profile' },
        ]
      }
    ],
  },
];

const getAllLinks = (groups) => {
  let all = [];
  groups.forEach(g => {
    g.links.forEach(l => {
      if (l.id) all.push(l);
      if (l.subLinks) {
        l.subLinks.forEach(sl => {
          if (sl.id) all.push(sl);
        });
      }
    });
  });
  return all;
};

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

  const allLinks = getAllLinks(URL_GROUPS);
  const progress = Math.round(
    (Object.values(completed).filter(Boolean).length / allLinks.length) * 100
  );

  const LinkRow = ({ link, isSub = false }) => {
    if (!link.id && link.subLinks) {
      return (
        <div className={`mt-4 mb-2 first:mt-0 ${isSub ? 'ml-6' : ''}`}>
          <div className="flex items-center gap-2 mb-2 px-2">
            <span className="material-symbols-outlined text-xs text-slate-400">folder_open</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{link.name}</span>
          </div>
          <div className="space-y-1 ml-4 border-l-2 border-slate-100 pl-4">
            {link.subLinks.map((sl, idx) => (
              <LinkRow key={sl.id || idx} link={sl} isSub={true} />
            ))}
          </div>
        </div>
      );
    }

    return (
      <div 
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
    );
  };

  const getGroupStats = (group) => {
    const groupLinks = [];
    group.links.forEach(l => {
      if (l.id) groupLinks.push(l);
      if (l.subLinks) l.subLinks.forEach(sl => { if (sl.id) groupLinks.push(sl); });
    });
    const done = groupLinks.filter(l => completed[l.id]).length;
    return { done, total: groupLinks.length };
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <div className="inline-block p-2 px-4 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Development Environment</span>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Internal URL Directory</h1>
          <p className="text-slate-600 font-medium">Panel-wise module tracking and navigation.</p>
          
          <div className="mt-6 max-w-xs mx-auto">
            <div className="flex justify-between items-center mb-1 text-xs font-bold text-slate-500 uppercase tracking-tighter">
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

        <div className="grid grid-cols-1 gap-8">
          {URL_GROUPS.map((group, idx) => {
            const { done, total } = getGroupStats(group);
            return (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all">
                <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                  <h2 className="font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]"></span>
                    {group.title}
                  </h2>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {done} / {total} Completed
                  </span>
                </div>
                <div className="p-6 space-y-2">
                  {group.links.map((link, lIdx) => (
                    <LinkRow key={link.id || lIdx} link={link} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>


        <footer className="mt-12 text-center text-slate-400 text-xs py-10 border-t border-slate-100">
          <p>Skoolnet Web Application Platform &bull; Dev Mode v1.1 &bull; Built for danske farhan</p>
        </footer>
      </div>
    </div>
  );
}
