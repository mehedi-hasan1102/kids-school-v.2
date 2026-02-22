'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ROLE_LABEL, type UserRole } from '@/app/lib/auth';
import {
  clearAuthSession,
  getRoleDashboard,
  useAuthUser,
} from '@/app/lib/auth-client';

type DashboardShellProps = {
  role: UserRole;
  title: string;
  children: ReactNode;
};

export default function DashboardShell({ role, title, children }: DashboardShellProps) {
  const router = useRouter();
  const user = useAuthUser();

  useEffect(() => {
    if (!user) {
      router.replace('/login');
      return;
    }

    if (user.role !== role) {
      router.replace(getRoleDashboard(user.role));
    }
  }, [role, router, user]);

  const handleLogout = () => {
    clearAuthSession();
    router.push('/login');
    router.refresh();
  };

  if (!user || user.role !== role) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-sm text-neutral-600 sm:px-6 lg:px-8">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="bg-slate-50">
      <section className="page-wrap py-8">
        <div className="overflow-hidden rounded-2xl border border-teal-100 bg-gradient-to-r from-teal-50 via-white to-cyan-50 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                {ROLE_LABEL[role]} Dashboard
              </p>
              <h1 className="mt-2 text-2xl font-bold text-neutral-900">{title}</h1>
              <p className="mt-1 text-sm text-neutral-600">Signed in as {user.name}</p>
            </div>

            <button
              onClick={handleLogout}
              className="btn btn-secondary"
              type="button"
            >
              Logout
            </button>
          </div>
        </div>
      </section>

      <section className="page-wrap pb-12">{children}</section>
    </div>
  );
}
