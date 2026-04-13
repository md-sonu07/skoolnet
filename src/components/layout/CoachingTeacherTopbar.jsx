import AppIcon from '../common/AppIcon';

export default function CoachingTeacherTopbar({ 
  userName = 'Teacher', 
  userRole = 'Teacher', 
  userAvatar = '', 
  searchPlaceholder = 'Search...', 
  quickActions = [] 
}) {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 z-50 bg-white/70 backdrop-blur-xl flex items-center justify-between px-8 border-b border-slate-100 font-['Manrope'] tracking-tight">
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative w-full">
          <AppIcon name="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
          <input
            className="w-full bg-slate-100 border-none rounded-md outline-none font-medium py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 text-slate-900 placeholder:text-slate-500"
            placeholder={searchPlaceholder}
            type="text"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-on-surface-variant">
          {quickActions.map((action, index) => (
            <button key={index} className="p-2 rounded-full transition-all hover:bg-slate-100">
              <AppIcon name={action.icon} size={20} />
            </button>
          ))}
        </div>
        
        <div className="h-8 w-px bg-slate-200"></div>
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-on-surface">{userName}</p>
            <p className="text-[10px] text-on-surface-variant font-medium">{userRole}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
            <AppIcon name="person" size={20} className="text-slate-500" />
          </div>
        </div>
      </div>
    </header>
  );
}