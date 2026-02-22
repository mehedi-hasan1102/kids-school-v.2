import type { Metadata } from 'next';
import PageIntro from '@/app/components/common/page-intro';
import { EVENTS_NEWS } from '@/app/lib/school-data';

export const metadata: Metadata = {
  title: 'Events & News | Kids School',
  description: 'Latest school events, notices, and campus updates from Kids School.',
};

export default function EventsPage() {
  return (
    <div>
      <PageIntro
        eyebrow="Events and News"
        title="School Updates"
        description="Follow upcoming events, administrative notices, and academic highlights from across the campus community."
      />

      <section className="page-wrap pb-20">
        <div className="section-grid">
          {EVENTS_NEWS.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="data-pill">{item.type}</span>
                <span className="text-sm font-semibold text-orange-600">{item.date}</span>
              </div>
              <h2 className="mt-3 text-xl font-bold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
