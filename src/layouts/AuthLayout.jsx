import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(0,82,255,0.12),_transparent_28%),linear-gradient(180deg,#f8fbff_0%,#eff5ff_100%)] px-4 py-12">
      <div className="mx-auto max-w-md rounded-[32px] border border-white/70 bg-white/90 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur">
        <Outlet />
      </div>
    </div>
  );
}
