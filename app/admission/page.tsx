import type { Metadata } from 'next';
import Link from 'next/link';
import PageIntro from '@/app/components/common/page-intro';
import { FEE_STRUCTURE } from '@/app/lib/school-data';

export const metadata: Metadata = {
  title: 'Admissions | Kids School',
  description: 'Admission process, requirements, and fee structure for Kids School session 2026.',
};

const ADMISSION_STEPS = [
  'Complete the online admission form and upload required documents.',
  'Attend student assessment and guardian interview at campus.',
  'Receive confirmation email and submit admission fee to secure seat.',
  'Collect orientation schedule and student handbook from admin desk.',
];

const REQUIREMENTS = [
  'Birth certificate or passport copy',
  'Two recent passport-size photos',
  'Previous school transcript/report card',
  'Guardian national ID copy',
  'Medical information form',
];

export default function AdmissionPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Admissions"
        title="Admission Process for Session 2026"
        description="Our admission procedure is transparent, student-focused, and designed to place each learner in the right class level."
      />

      <section className="page-wrap section-grid pb-14 lg:grid-cols-2">
        <article className="surface-card p-6">
          <h2 className="text-2xl font-bold">Step-by-step Process</h2>
          <ol className="mt-4 space-y-3 text-sm text-neutral-700">
            {ADMISSION_STEPS.map((step) => (
              <li key={step} className="surface-soft p-3">
                {step}
              </li>
            ))}
          </ol>
        </article>

        <article className="surface-card p-6">
          <h2 className="text-2xl font-bold">Required Documents</h2>
          <ul className="mt-4 space-y-3 text-sm text-neutral-700">
            {REQUIREMENTS.map((item) => (
              <li key={item} className="surface-soft p-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="page-wrap pb-20">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-bold">Fee Structure</h2>
          <Link href="/contact" className="btn btn-primary">
            Request Counseling
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-neutral-700">Category</th>
                <th className="px-4 py-3 text-right font-semibold text-neutral-700">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 bg-white">
              {FEE_STRUCTURE.map((fee) => (
                <tr key={fee.category}>
                  <td className="px-4 py-4 text-neutral-700">{fee.category}</td>
                  <td className="px-4 py-4 text-right font-semibold text-neutral-900">{fee.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
