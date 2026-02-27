'use client';

import Marquee from 'react-fast-marquee';
import { BellRing } from 'lucide-react';
import { ANNOUNCEMENTS } from '@/app/lib/school-data';

export default function AnnouncementMarquee() {
  return (
    <div className="w-full border-y border-slate-200 bg-slate-50 py-2">
      <div className="page-wrap flex items-center gap-3">
        <span className="hidden items-center gap-1 text-xs font-bold uppercase tracking-[0.2em] text-slate-700 sm:inline-flex">
          <BellRing size={14} /> Alerts
        </span>
        <div className="min-w-0 flex-1">
          <Marquee speed={45} pauseOnHover gradient={false}>
            {ANNOUNCEMENTS.map((item) => (
              <span key={item} className="mx-8 text-sm font-semibold tracking-wide text-slate-700 sm:text-base">
                {item}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
