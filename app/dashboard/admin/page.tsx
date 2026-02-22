import type { Metadata } from 'next';
import DashboardShell from '@/app/components/dashboard/DashboardShell';

export const metadata: Metadata = {
  title: 'Admin Dashboard | Apexiums School',
};

const managementCards = [
  { title: 'Students', value: '1,240', helper: 'Manage enrollment, class assignments, and records.' },
  { title: 'Teachers', value: '86', helper: 'Update profiles, subjects, and scheduling.' },
  { title: 'Announcements', value: '14', helper: 'Create and publish school-wide announcements.' },
  { title: 'Banner Slides', value: '4', helper: 'Control homepage slider content and promotions.' },
];

export default function AdminDashboardPage() {
  return (
    <DashboardShell role="admin" title="Admin Control Panel">
      <div className="section-grid md:grid-cols-2 xl:grid-cols-4">
        {managementCards.map((card) => (
          <article key={card.title} className="surface-card p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">{card.title}</p>
            <p className="mt-3 text-3xl font-extrabold text-neutral-900">{card.value}</p>
            <p className="mt-3 text-sm text-neutral-600">{card.helper}</p>
          </article>
        ))}
      </div>

      <div className="section-grid mt-5 lg:grid-cols-2">
        <article className="surface-card p-6">
          <h2 className="text-lg font-bold">Content Management</h2>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li className="surface-soft p-3">Update homepage hero banners</li>
            <li className="surface-soft p-3">Publish event and notice posts</li>
            <li className="surface-soft p-3">Manage mission, vision, and contact page content</li>
          </ul>
        </article>

        <article className="surface-card p-6">
          <h2 className="text-lg font-bold">Access and Roles</h2>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            <li className="surface-soft p-3">Create student and teacher accounts</li>
            <li className="surface-soft p-3">Assign role-based permissions (RBAC)</li>
            <li className="surface-soft p-3">Monitor audit logs and account status</li>
          </ul>
        </article>
      </div>
    </DashboardShell>
  );
}
