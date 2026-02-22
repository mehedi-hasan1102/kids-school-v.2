'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

type Story = {
  id: number;
  title: string;
  description?: string;
  date: string;
  dateColor: string;
  image: string;
  featured?: boolean;
};

const stories: Story[] = [
  {
    id: 1,
    title: 'Grade 4 students host a creativity and reading exhibition',
    description:
      'Families and teachers joined a student-led showcase featuring storytelling, visual art, and guided reading corners.',
    date: 'February 2, 2026',
    dateColor: 'bg-rose-500',
    image: '/assets/story-1.png',
    featured: true,
  },
  {
    id: 2,
    title: 'Parents discover classroom routines during open house week',
    date: 'January 24, 2026',
    dateColor: 'bg-orange-500',
    image: '/assets/story-2.png',
  },
  {
    id: 3,
    title: 'Math lab sessions improve practical problem-solving skills',
    date: 'January 18, 2026',
    dateColor: 'bg-sky-500',
    image: '/assets/story-3.png',
  },
  {
    id: 4,
    title: 'New mentoring circle launched for Grades 8 to 10 students',
    date: 'January 10, 2026',
    dateColor: 'bg-emerald-500',
    image: '/assets/story-4.png',
  },
  {
    id: 5,
    title: 'Music and speech club performances close winter term',
    date: 'January 6, 2026',
    dateColor: 'bg-violet-500',
    image: '/assets/story-5.png',
  },
];

export default function OurStories() {
  const featured = stories.find((s) => s.featured);
  const rest = stories.filter((s) => !s.featured);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        y: 28,
        duration: 6,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden py-20">
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-50 via-white to-emerald-50 opacity-90"
      />

      <div className="page-wrap relative z-10">
        <div className="mb-10 text-center">
          <p className="eyebrow">Campus Life</p>
          <h2 className="mt-2 text-3xl font-bold">Stories from the School Community</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featured && (
            <article className="surface-card overflow-hidden lg:col-span-2">
              <div className="relative h-[320px]">
                <Image src={featured.image} alt={featured.title} fill className="object-cover" />
                <span className={`absolute bottom-4 left-4 rounded-full px-4 py-1.5 text-sm font-semibold text-white ${featured.dateColor}`}>
                  {featured.date}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold">{featured.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{featured.description}</p>
              </div>
            </article>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((story) => (
              <article key={story.id} className="surface-card overflow-hidden transition hover:shadow-md">
                <div className="relative h-40">
                  <Image src={story.image} alt={story.title} fill className="object-cover" />
                  <span className={`absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${story.dateColor}`}>
                    {story.date}
                  </span>
                </div>

                <div className="p-4">
                  <h4 className="text-sm font-semibold leading-snug">{story.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/events" className="btn btn-primary px-8">
            View All Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
