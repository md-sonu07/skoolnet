import { Outlet, Link } from 'react-router-dom';
import AppIcon from '../components/common/AppIcon';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDUyRkYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iMzAiIHI9IjIiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjMwIiByPSIyIi8+PGNpcmNsZSBjeD0iOTAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iNjAiIHI9IjIiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjEwMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40 pointer-events-none"></div>
      
      {/* Header Logo */}
      <header className="relative z-10 px-4 md:px-8 py-4 md:py-6">
        <Link to="/" className="flex items-center gap-2 w-fit">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <AppIcon name="school" size={22} className="text-white" />
          </div>
          <h1 className="font-['Manrope'] font-extrabold text-2xl text-slate-900 tracking-tight">
            Skoolnet
          </h1>
        </Link>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8 md:py-12">
        <div className="w-full max-w-md">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/60 shadow-xl p-6 md:p-10">
            <Outlet />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-4 text-xs text-slate-400">
        <p>&copy; 2024 Skoolnet. All rights reserved.</p>
      </footer>
    </div>
  );
}