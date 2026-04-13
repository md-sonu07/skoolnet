import { NavLink, useLocation } from 'react-router-dom';
import AppIcon from '../../common/AppIcon';

const bottomNavItems = [
  { label: 'Home', icon: 'home', to: 'dashboard' },
  { label: 'Courses', icon: 'school', to: 'courses' },
  { label: 'Assignment', icon: 'folder_open', to: 'assignments' },
  { label: 'Results', icon: 'grade', to: 'results' },
  { label: 'More', icon: 'menu', action: 'openSidebar' },
];

export default function MobileBottomNav({ onOpenSidebar }) {
  const location = useLocation();
  
  const handleClick = (item) => {
    if (item.action === 'openSidebar' && onOpenSidebar) {
      onOpenSidebar();
    }
  };
  
  return (
    <nav className="fixed bottom-4 left-4 right-4 md:hidden z-50">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100/50 px-2 py-2">
        <div className="flex items-center justify-between gap-1">
          {bottomNavItems.map((item) => {
            const isActive = item.to ? location.pathname.includes(item.to) : false;
            
            if (item.to) {
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={`
                    flex flex-col items-center justify-center flex-1 py-2 px-1 rounded-xl transition-all duration-200
                    ${isActive 
                      ? 'text-primary ' 
                      : 'text-slate-400 hover:text-slate-600 '
                    }
                  `}
                >
                  <div className="p-1.5 rounded-lg transition-all">
                    <AppIcon name={item.icon} size={20} />
                  </div>
                  <span className="text-[10px] font-medium mt-0.5">{item.label}</span>
                </NavLink>
              );
            }
            
            return (
              <button
                key={item.label}
                onClick={() => handleClick(item)}
                className="flex flex-col items-center justify-center flex-1 py-2 px-1 rounded-xl transition-all duration-200 text-slate-400 hover:text-slate-600"
              >
                <div className="p-1.5 rounded-lg transition-all">
                  <AppIcon name={item.icon} size={20} />
                </div>
                <span className="text-[10px] font-medium mt-0.5">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}