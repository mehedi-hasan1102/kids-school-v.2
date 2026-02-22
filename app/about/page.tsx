import type { Metadata } from 'next';
import Link from 'next/link';
import PageIntro from '@/app/components/common/page-intro';
import { FACULTY_MEMBERS } from '@/app/lib/school-data';

export const metadata: Metadata = {
  title: 'About Us | Apexiums School',
  description: 'Learn about Apexiums School mission, vision, leadership, and principal message.',
};

export default function AboutPage() {
  return (
    <div>
      <PageIntro
        eyebrow="About Us"
        title="A school focused on academic excellence and character"
        description="Apexiums School combines modern teaching methods, disciplined learning habits, and student wellbeing support to help each child grow with confidence."
      />

      <section className="page-wrap section-grid pb-14 lg:grid-cols-2">
        <article className="surface-soft p-8">
          <h2 className="text-2xl font-bold">Mission</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            To nurture curious, responsible, and compassionate learners through engaging instruction, ethical guidance,
            and a strong partnership with families.
          </p>
        </article>

        <article className="surface-soft p-8">
          <h2 className="text-2xl font-bold">Vision</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            To become a leading institution where students build knowledge, values, and leadership qualities for higher
            education and meaningful citizenship.
          </p>
        </article>
      </section>

      <section className="page-wrap pb-14">
        <article className="rounded-2xl bg-[#0c2237] p-8 text-white shadow-lg">
          <h2 className="text-2xl font-bold text-white">Principal&apos;s Message</h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-white/90">
            Every child has unique potential. At Apexiums School, we create a learning environment where students feel safe,
            respected, and motivated to do their best. We continuously invest in teacher development, technology-enabled
            classrooms, and student support programs to ensure meaningful outcomes.
          </p>
          <p className="mt-5 text-sm font-semibold text-white">- Dr. Nusrat Ahmed, Principal</p>
        </article>
      </section>

      <section className="page-wrap pb-20">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-bold">Leadership Team</h2>
          <Link href="/faculty" className="btn btn-secondary">
            View Full Faculty
          </Link>
        </div>

        <div className="section-grid sm:grid-cols-2 lg:grid-cols-3">
          {FACULTY_MEMBERS.slice(0, 3).map((member) => (
            <article key={member.name} className="surface-card p-5">
              <h3 className="font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold text-teal-700">{member.role}</p>
              <p className="mt-1 text-sm text-neutral-600">{member.subject}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
