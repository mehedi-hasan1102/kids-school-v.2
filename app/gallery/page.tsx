import type { Metadata } from 'next';
import Image from 'next/image';
import PageIntro from '@/app/components/common/page-intro';

export const metadata: Metadata = {
  title: 'Gallery | Apexiums School',
  description: 'Explore campus moments, classroom highlights, and student activities at Apexiums School.',
};

const HIGHLIGHTS = [
  { label: 'Campus Photos', value: '120+' },
  { label: 'Annual Events', value: '18' },
  { label: 'Student Clubs', value: '22' },
  { label: 'Learning Spaces', value: '9' },
];

const COLLECTIONS = [
  {
    title: 'Smart Classroom Sessions',
    summary: 'Daily lessons with interactive boards, digital resources, and collaborative activities.',
    count: '28 Photos',
    image: '/assets/smart-classroom-2000x1125.webp',
  },
  {
    title: 'STEM and Science Discovery',
    summary: 'Hands-on practice, project showcases, and team-based experiments in science labs.',
    count: '24 Photos',
    image: '/assets/middle.png',
  },
  {
    title: 'Sports and Fitness Program',
    summary: 'Outdoor games, annual sports events, and physical development sessions across grades.',
    count: '20 Photos',
    image: '/assets/high-school.png',
  },
];

const PHOTO_STREAM = [
  {
    title: 'Morning Assembly',
    tag: 'Campus Life',
    image: '/assets/panchkula-1.webp',
    height: 'h-56',
  },
  {
    title: 'Creative Story Hour',
    tag: 'Primary',
    image: '/assets/story-1.png',
    height: 'h-72',
  },
  {
    title: 'Robotics Workshop',
    tag: 'STEM',
    image: '/assets/hero-kids.png',
    height: 'h-64',
  },
  {
    title: 'Language Circle',
    tag: 'Classroom',
    image: '/assets/story-2.png',
    height: 'h-64',
  },
  {
    title: 'Art and Craft Studio',
    tag: 'Co-Curricular',
    image: '/assets/story-3.png',
    height: 'h-72',
  },
  {
    title: 'Library Reading Time',
    tag: 'Literacy',
    image: '/assets/story-4.png',
    height: 'h-56',
  },
  {
    title: 'Team Presentation',
    tag: 'Middle School',
    image: '/assets/elementary.png',
    height: 'h-64',
  },
  {
    title: 'Mentoring Session',
    tag: 'Faculty',
    image: '/assets/GraduateSchoolAdmissionsServicesShemmassian.jpg',
    height: 'h-72',
  },
  {
    title: 'Kindergarten Activity',
    tag: 'Early Years',
    image: '/assets/kinder.png',
    height: 'h-56',
  },
];

export default function GalleryPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Gallery"
        title="Campus Moments and Student Life"
        description="A visual look at classroom learning, school events, co-curricular activities, and day-to-day life at Apexiums School."
      />

      <section className="page-wrap pb-10">
        <div className="surface-card grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <article key={item.label} className="rounded-xl bg-slate-50 p-4 text-center">
              <p className="text-2xl font-extrabold text-neutral-900">{item.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap section-grid pb-12 lg:grid-cols-3">
        {COLLECTIONS.map((collection) => (
          <article key={collection.title} className="surface-card overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={collection.image}
                alt={collection.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <span className="data-pill">{collection.count}</span>
              <h2 className="mt-3 text-xl font-bold">{collection.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{collection.summary}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="page-wrap pb-20">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="eyebrow">Photo Stream</p>
            <h2 className="text-3xl font-bold">Latest Campus Gallery</h2>
          </div>
          <p className="text-sm font-semibold text-neutral-500">Updated weekly by the school media team</p>
        </div>

        <div className="section-grid md:grid-cols-2 lg:grid-cols-3">
          {PHOTO_STREAM.map((photo) => (
            <article key={photo.title} className="surface-card overflow-hidden">
              <div className={`relative w-full ${photo.height}`}>
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-3 p-4">
                <div>
                  <h3 className="text-base font-bold text-neutral-900">{photo.title}</h3>
                  <p className="text-sm text-neutral-600">{photo.tag}</p>
                </div>
                <span className="data-pill">{photo.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
