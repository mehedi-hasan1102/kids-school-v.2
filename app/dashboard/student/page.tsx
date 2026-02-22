import type { Metadata } from 'next';
import DashboardShell from '@/app/components/dashboard/DashboardShell';

export const metadata: Metadata = {
  title: 'Student Dashboard | Apexiums School',
};

const attendance = [
  { subject: 'English', present: '18/20' },
  { subject: 'Mathematics', present: '19/20' },
  { subject: 'Science', present: '17/20' },
  { subject: 'ICT', present: '20/20' },
];

const results = [
  { subject: 'English', grade: 'A' },
  { subject: 'Mathematics', grade: 'A+' },
  { subject: 'Science', grade: 'A' },
  { subject: 'ICT', grade: 'A+' },
];

const announcements = [
  'Mid-term exam begins on April 7, 2026.',
  'Science fair registration closes on March 10, 2026.',
  'Library week starts Monday with daily reading challenges.',
];

export default function StudentDashboardPage() {
  return (
    <DashboardShell role="student" title="Student Overview">
      <div className="section-grid lg:grid-cols-3">
        <article className="surface-card p-6 lg:col-span-1">
          <h2 className="text-lg font-bold">Profile</h2>
          <div className="mt-3 space-y-1 text-sm text-neutral-700">
            <p>Name: Ayesha Rahman</p>
            <p>Class: Grade 8</p>
            <p>Section: B</p>
            <p>Roll: 23</p>
          </div>
        </article>

        <article className="surface-card p-6 lg:col-span-2">
          <h2 className="text-lg font-bold">Attendance</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {attendance.map((item) => (
              <div key={item.subject} className="surface-soft p-3 text-sm">
                <p className="font-semibold">{item.subject}</p>
                <p className="text-neutral-600">Present: {item.present}</p>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="section-grid mt-5 lg:grid-cols-2">
        <article className="surface-card p-6">
          <h2 className="text-lg font-bold">Results</h2>
          <ul className="mt-4 space-y-2">
            {results.map((item) => (
              <li key={item.subject} className="surface-soft flex items-center justify-between px-3 py-2 text-sm">
                <span className="text-neutral-700">{item.subject}</span>
                <span className="font-semibold text-emerald-700">{item.grade}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="surface-card p-6">
          <h2 className="text-lg font-bold">Announcements</h2>
          <ul className="mt-4 space-y-2">
            {announcements.map((notice) => (
              <li key={notice} className="surface-soft p-3 text-sm text-neutral-700">
                {notice}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </DashboardShell>
  );
}
