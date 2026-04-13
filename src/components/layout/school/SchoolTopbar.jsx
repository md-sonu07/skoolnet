import AppIcon from '../../common/AppIcon';

export default function SchoolTopbar({ 
  userName = 'User', 
  userRole = 'Admin',
  title = 'Skoolnet',
  userAvatar = 'https://ui-avatars.com/api/?name=User&background=6366f1&color=fff&size=128', 
  searchPlaceholder = 'Search...', 
  quickActions = [] 
}) {
  return (
    <header className="h-12 md:h-16 bg-white/70 backdrop-blur-xl flex items-center justify-between px-2 md:px-8 border-b border-slate-100 font-['Manrope'] tracking-tight">
      <div className="flex items-center flex-1 max-w-xl">
        <div className="md:hidden flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <AppIcon name="school" size={16} className="text-white" />
          </div>
          <div>
            <h1 className="font-['Manrope'] font-extrabold text-on-surface text-sm tracking-tight">
              {title}
            </h1>
            <p className="text-[8px] text-on-surface-variant uppercase tracking-widest font-bold">
              {userRole}
            </p>
          </div>
        </div>
        <div className="hidden md:block relative w-full">
          <AppIcon name="search" size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant" />
          <input
            className="w-full bg-slate-100 border-none rounded-md outline-none font-medium py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 text-slate-900 placeholder:text-slate-500"
            placeholder={searchPlaceholder}
            type="text"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-1 md:gap-6">
        <div className="hidden md:flex items-center gap-1 md:gap-4 text-on-surface-variant">
          {quickActions.map((action, index) => (
            <button key={index} className="p-1.5 md:p-2 rounded-full transition-all hover:bg-slate-100">
              <AppIcon name={action.icon} size={18} />
            </button>
          ))}
        </div>
        
        <div className="h-6 md:h-8 w-px bg-slate-200 hidden md:block"></div>
        
        <div className="flex items-center gap-2 md:gap-3">
          <div className="text-right hidden md:block">
            <p className="text-xs font-bold text-on-surface">{userName}</p>
            <p className="text-[10px] text-on-surface-variant font-medium">{userRole}</p>
          </div>
          <img
            alt="User profile avatar"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-sm object-cover"
            src={userAvatar}
          />
        </div>
      </div>
    </header>
  );
}