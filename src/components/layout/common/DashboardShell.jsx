import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MobileBottomNav from './MobileBottomNav';

export default function DashboardShell({ topbar: Topbar, sidebar: Sidebar, showBottomNav = false }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openSidebar = () => setMobileMenuOpen(true);
  const closeSidebar = () => setMobileMenuOpen(false);

  return (
    <div className="bg-surface custom-scrollbar overflow-x-hidden">
      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar - hidden on mobile by default */}
      <div className={`
        fixed md:relative md:block
        left-0 top-0 z-50 md:z-auto
        transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {Sidebar}
      </div>
      
      <main className="md:ml-64 min-h-screen">
        {/* Topbar with hamburger */}
        <div className="fixed top-0 right-0 left-0 md:left-64 z-40">
          <div className="md:hidden p-2">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <div className={mobileMenuOpen ? 'hidden md:block' : 'block'}>
            {Topbar}
          </div>
        </div>
        
        <div className="pt-16 md:pt-24 pb-20 md:pb-12 px-4 md:px-8 max-w-[1600px] mx-auto bg-background/30">
          <Outlet />
        </div>
        {showBottomNav && <MobileBottomNav onOpenSidebar={openSidebar} />}
      </main>
    </div>
  );
}
