import { NavLink, Link } from 'react-router-dom';
import AppIcon from '../../../common/AppIcon';

export default function CoachingStudentSidebar({ badge, title, navItems, studentId, onClose, userRole }) {
  return (
    <aside className="hidden md:block h-screen w-64 glass-sidebar flex flex-col py-6 font-['Inter'] text-sm font-medium">
      <div className="px-6 mb-4 flex items-center gap-3 shrink-0">
        {onClose && (
          <button onClick={onClose} className="md:hidden p-1 -ml-2">
            <AppIcon name="close" size={20} className="text-slate-500" />
          </button>
        )}
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
          <AppIcon name="school" size={20} className="text-white" />
        </div>
        <div>
          <h1 className="font-['Manrope'] font-extrabold text-on-surface text-xl tracking-tight">
            {title}
          </h1>
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
            {userRole || badge}
          </p>
        </div>
      </div>

      <div className="px-4 mb-4">
        <Link 
          to={`/dashboard/coaching`}
          className="flex items-center gap-2 px-3 py-2 text-xs text-slate-500 hover:text-primary transition-colors"
        >
          <AppIcon name="arrow_back" size={14} />
          Back to Coaching Panel
        </Link>
      </div>
      
      <nav className="flex-1 px-4 py-2 space-y-1 overflow-y-auto custom-scrollbar">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={`/dashboard/coaching/student/${studentId}/${item.to}`}
            onClick={onClose}
            className={({ isActive }) =>
              [
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-150 ease-out border',
                isActive
                  ? 'bg-primary/5 text-primary border-primary/20'
                  : 'text-on-surface-variant border-transparent hover:text-primary hover:bg-slate-50 hover:border-primary/10',
              ].join(' ')
            }
          >
            <AppIcon name={item.icon} size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="px-4 pt-2 mt-4 border-t border-slate-200">
        <a 
          className="flex items-center gap-3 px-4 py-2.5 text-slate-500 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all group" 
          href="#"
        >
          <AppIcon name="logout" size={18} className="text-slate-400 group-hover:text-red-500" />
          <span className="text-sm font-medium">Logout</span>
        </a>
      </div>
    </aside>
  );
}