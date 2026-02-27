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
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Campus Life</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Stories from the School Community</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Highlights from our classrooms, activities, and school events that shape student growth.
            </p>
          </div>
          <Link href="/events" className="btn btn-primary hidden px-8 sm:inline-flex">
            View All Stories
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
          {featured && (
            <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.10)] xl:col-span-7">
              <div className="relative h-[320px] overflow-hidden md:h-[420px]">
                <Image src={featured.image} alt={featured.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/20 to-transparent" />
                <span
                  className={`absolute left-5 top-5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white ${featured.dateColor}`}
                >
                  {featured.date}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-2xl font-semibold leading-tight text-slate-900">{featured.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{featured.description}</p>
              </div>
            </article>
          )}

          <div className="grid gap-6 sm:grid-cols-2 xl:col-span-5">
            {rest.map((story) => (
              <article
                key={story.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(15,23,42,0.12)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image src={story.image} alt={story.title} fill className="object-cover" />
                </div>

                <div className="p-5">
                  <p className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    <span className={`h-2.5 w-2.5 rounded-full ${story.dateColor}`} />
                    {story.date}
                  </p>
                  <h4 className="text-base font-semibold leading-snug text-slate-900">{story.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:hidden">
          <Link href="/events" className="btn btn-primary w-full">
            View All Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
