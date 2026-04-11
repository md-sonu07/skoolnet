import { Outlet } from 'react-router-dom';

export default function DashboardShell({ topbar, sidebar }) {
  return (
    <div className="bg-surface custom-scrollbar overflow-x-hidden">
      {sidebar}
      <main className="ml-64 min-h-screen">
        {topbar}
        <div className="pt-24 pb-12 px-8 max-w-[1600px] mx-auto bg-background/30">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
