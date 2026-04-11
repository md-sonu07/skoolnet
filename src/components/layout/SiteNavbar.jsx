import { Link, NavLink } from 'react-router-dom';
import AppIcon from '../common/AppIcon';

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const profileImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCH7qm8wNa2-Z7myiNgM__4BknR0fc0YdjItCx72MraYEdLRNnm1ZIt677xWZIxuhAxedfY4pU5eg8J1BPCsOngSd4qsm2D37eHLHF38fPr-i0SwV-RQ8kVZ8_gFBB0zdMzdEs0-KAr0WkQh73aYTCuz23QzPkc_I6yz4G-QoR_lkMBFz62lFLe6bFsjoH0x5tRnEqGSTe2h7a8rOGQWqoTHYn3-2Af72vFQXpq26i248v14jiLfDzgl6UVUvr1R1mPLjGg2dlx9AU';

export default function SiteNavbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/60 glass-panel">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8 lg:gap-12">
          <Link className="flex items-center gap-2" to="/">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <AppIcon className="text-white" name="school" size={18} />
            </div>
            <span className="font-headline text-2xl font-extrabold tracking-tight text-primary">
              Skoolnet
            </span>
          </Link>
        </div>

          <div className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                className={({ isActive }) =>
                  isActive
                    ? 'border-b-2 border-primary font-headline text-sm font-bold text-primary transition-all'
                    : 'font-headline text-sm text-on-surface-variant transition-all hover:text-primary'
                }
                end={item.href === '/'}
                to={item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className="rounded-xl p-2 text-on-surface-variant transition-all hover:bg-surface-container"
              type="button"
            >
              <AppIcon name="notifications" size={20} />
            </button>
            <Link to="/dashboard/manager/overview" className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary/10">
              <img
                alt="User profile"
                className="h-full w-full object-cover"
                src={profileImage}
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
