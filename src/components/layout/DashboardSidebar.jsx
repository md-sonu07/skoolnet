import { NavLink } from 'react-router-dom';
import AppIcon from '../common/AppIcon';

export default function DashboardSidebar({ badge, title, navItems }) {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 glass-sidebar flex flex-col py-6 z-[60] font-['Inter'] text-sm font-medium">
      <div className="px-6 mb-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
          <AppIcon name="school" size={20} className="text-white" />
        </div>
        <div>
          <h1 className="font-['Manrope'] font-extrabold text-on-surface text-xl tracking-tight">
            {title}
          </h1>
          <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">
            {badge}
          </p>
        </div>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={`/dashboard/manager/${item.to}`}
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
            <span className={item.label === 'Dashboard' ? 'font-semibold' : ''}>
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>
      
      <div className="px-6 mt-auto">
        <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-red-500 transition-colors" href="#">
          <AppIcon name="logout" size={20} />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
}
