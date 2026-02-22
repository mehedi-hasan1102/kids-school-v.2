import type { Metadata } from 'next';
import PageIntro from '@/app/components/common/page-intro';
import { FACULTY_MEMBERS } from '@/app/lib/school-data';

export const metadata: Metadata = {
  title: 'Faculty | Kids School',
  description: 'Meet the experienced faculty team guiding students at Kids School.',
};

export default function FacultyPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Faculty"
        title="Teacher Profiles"
        description="Our educators bring strong subject expertise, mentoring skills, and student-centered instruction to every classroom."
      />

      <section className="page-wrap section-grid pb-20 md:grid-cols-2 lg:grid-cols-3">
        {FACULTY_MEMBERS.map((member) => (
          <article key={member.name} className="surface-card p-6">
            <div className="data-pill">{member.experience}</div>
            <h2 className="mt-4 text-xl font-bold">{member.name}</h2>
            <p className="mt-1 text-sm font-semibold text-teal-700">{member.role}</p>
            <p className="mt-2 text-sm text-neutral-600">Specialization: {member.subject}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
