import type { Metadata } from 'next';
import PageIntro from '@/app/components/common/page-intro';

export const metadata: Metadata = {
  title: 'Facilities | Apexiums School',
  description: 'Explore classroom, lab, library, sports, and safety facilities at Apexiums School.',
};

const FACILITIES = [
  {
    title: 'Smart Classrooms',
    description: 'Digital boards, projector-enabled lessons, and blended learning support.',
  },
  {
    title: 'STEM and Science Labs',
    description: 'Hands-on practical sessions in physics, chemistry, biology, and robotics.',
  },
  {
    title: 'Library and Reading Corner',
    description: 'Age-based reading collections with guided literacy sessions.',
  },
  {
    title: 'Sports Grounds',
    description: 'Indoor and outdoor facilities for athletics, football, and team games.',
  },
  {
    title: 'Medical and Counseling Unit',
    description: 'On-campus first-aid support and student wellness counseling.',
  },
  {
    title: 'Secure Transport System',
    description: 'GPS-supported school transport with designated pick-up points.',
  },
];

export default function FacilitiesPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Facilities"
        title="Campus Facilities"
        description="Our campus infrastructure supports safety, modern learning, student wellness, and extracurricular development."
      />

      <section className="page-wrap section-grid pb-20 md:grid-cols-2 lg:grid-cols-3">
        {FACILITIES.map((facility) => (
          <article key={facility.title} className="surface-card p-6">
            <h2 className="text-xl font-bold">{facility.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{facility.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
