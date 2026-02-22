import type { Metadata } from 'next';
import DashboardShell from '@/app/components/dashboard/DashboardShell';

export const metadata: Metadata = {
  title: 'Teacher Dashboard | Kids School',
};

const classes = ['Grade 7 - Section A', 'Grade 8 - Section B', 'Grade 9 - Section C'];

const quickActions = [
  'Mark daily attendance',
  'Upload class test results',
  'Post assignment instructions',
  'Publish class announcements',
];

export default function TeacherDashboardPage() {
  return (
    <DashboardShell role="teacher" title="Teacher Workspace">
      <div className="section-grid lg:grid-cols-3">
        <article className="surface-card p-6 lg:col-span-2">
          <h2 className="text-lg font-bold">Assigned Classes</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {classes.map((item) => (
              <div key={item} className="surface-soft p-3 text-sm font-medium text-neutral-700">
                {item}
              </div>
            ))}
          </div>
        </article>

        <article className="surface-card p-6">
          <h2 className="text-lg font-bold">Today</h2>
          <div className="mt-3 space-y-1 text-sm text-neutral-700">
            <p>Classes: 5</p>
            <p>Pending attendance: 2</p>
            <p>Pending results upload: 1</p>
          </div>
        </article>
      </div>

      <div className="section-grid mt-5 lg:grid-cols-2">
        <article className="surface-card p-6">
          <h2 className="text-lg font-bold">Manage Attendance</h2>
          <p className="mt-3 text-sm text-neutral-600">
            Select class and date to mark attendance. Submit once all student records are complete.
          </p>
          <button className="btn btn-primary mt-4" type="button">
            Open Attendance Panel
          </button>
        </article>

        <article className="surface-card p-6">
          <h2 className="text-lg font-bold">Upload Results</h2>
          <p className="mt-3 text-sm text-neutral-600">
            Add marks by subject and publish final grades to student dashboards.
          </p>
          <button className="btn btn-secondary mt-4" type="button">
            Open Results Panel
          </button>
        </article>
      </div>

      <article className="surface-card mt-5 p-6">
        <h2 className="text-lg font-bold">Announcements</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {quickActions.map((action) => (
            <li key={action} className="surface-soft p-3 text-sm text-neutral-700">
              {action}
            </li>
          ))}
        </ul>
      </article>
    </DashboardShell>
  );
}
