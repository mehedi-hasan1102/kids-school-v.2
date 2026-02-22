'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { clearAuthSession, getRoleDashboard, useAuthUser } from '@/app/lib/auth-client';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/academics', label: 'Academics' },
  { href: '/admission', label: 'Admissions' },
  { href: '/faculty', label: 'Faculty' },
  { href: '/events', label: 'Events/News' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const user = useAuthUser();
  const dashboardPath = user ? getRoleDashboard(user.role) : '/login';

  const closeMenu = () => setOpen(false);

  const handleLogout = () => {
    clearAuthSession();
    closeMenu();
    router.push('/login');
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/90 backdrop-blur-lg">
      <nav className="page-wrap flex items-center justify-between py-4" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image src="/assets/logo.png" alt="Kids School" width={38} height={38} priority />
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700">Kids School</p>
            <p className="text-sm font-semibold text-neutral-800">Official Portal</p>
          </div>
        </Link>

        <ul className="hidden items-center gap-2 lg:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    active
                      ? 'bg-teal-50 text-teal-700'
                      : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <>
              <Link href={dashboardPath} className="btn btn-secondary">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="btn btn-secondary" type="button">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-[var(--btn-radius)] border border-neutral-300 bg-white p-2 text-neutral-700 transition hover:bg-neutral-50 lg:hidden"
          aria-label="Toggle menu"
          type="button"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-neutral-200 bg-white lg:hidden">
          <ul className="page-wrap space-y-2 py-4 text-sm font-semibold">
            {LINKS.map((link) => {
              const active = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={active ? 'page' : undefined}
                    className={`block rounded-lg px-3 py-2 ${
                      active ? 'bg-teal-50 text-teal-700' : 'text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <li className="pt-2">
              {user ? (
                <div className="grid gap-2">
                  <Link href={dashboardPath} onClick={closeMenu} className="btn btn-secondary w-full">
                    Dashboard
                  </Link>
                  <button onClick={handleLogout} className="btn btn-secondary w-full" type="button">
                    Logout
                  </button>
                </div>
              ) : (
                <Link href="/login" onClick={closeMenu} className="btn btn-primary w-full">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
