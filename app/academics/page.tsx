import type { Metadata } from 'next';
import PageIntro from '@/app/components/common/page-intro';
import { ACADEMIC_PROGRAMS } from '@/app/lib/school-data';

export const metadata: Metadata = {
  title: 'Academics | Kids School',
  description: 'Explore classes offered, curriculum design, and academic support at Kids School.',
};

export default function AcademicsPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Academics"
        title="Classes Offered and Curriculum Framework"
        description="Our academic model supports students from foundational years to board preparation through structured instruction, practical learning, and continuous assessment."
      />

      <section className="page-wrap pb-16">
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-neutral-200 text-sm">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-neutral-700">Class Range</th>
                <th className="px-4 py-3 text-left font-semibold text-neutral-700">Focus Area</th>
                <th className="px-4 py-3 text-left font-semibold text-neutral-700">Curriculum Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 bg-white">
              {ACADEMIC_PROGRAMS.map((program) => (
                <tr key={program.classRange}>
                  <td className="px-4 py-4 font-semibold text-neutral-900">{program.classRange}</td>
                  <td className="px-4 py-4 text-neutral-700">{program.focus}</td>
                  <td className="px-4 py-4 text-neutral-600">{program.curriculum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="page-wrap section-grid pb-20 lg:grid-cols-3">
        <article className="surface-soft p-6">
          <h2 className="text-xl font-bold">Assessment Model</h2>
          <p className="mt-3 text-sm text-neutral-700">
            Weekly checks, practical evaluations, project rubrics, and term exams build balanced learning outcomes.
          </p>
        </article>
        <article className="surface-soft p-6">
          <h2 className="text-xl font-bold">Co-Curricular Tracks</h2>
          <p className="mt-3 text-sm text-neutral-700">
            Robotics, coding, debate, arts, and sports programs help students develop confidence and teamwork.
          </p>
        </article>
        <article className="surface-soft p-6">
          <h2 className="text-xl font-bold">Academic Support</h2>
          <p className="mt-3 text-sm text-neutral-700">
            Remedial sessions, counseling, and parent-teacher coordination support every learner consistently.
          </p>
        </article>
      </section>
    </div>
  );
}
