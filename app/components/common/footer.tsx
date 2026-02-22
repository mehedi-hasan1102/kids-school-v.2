import Link from 'next/link';

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/academics', label: 'Academics' },
  { href: '/admission', label: 'Admissions' },
  { href: '/faculty', label: 'Faculty' },
  { href: '/events', label: 'Events/News' },
  { href: '/contact', label: 'Contact' },
];

const PORTAL_LINKS = [
  { href: '/login', label: 'Student Login' },
  { href: '/login', label: 'Teacher Login' },
  { href: '/login', label: 'Admin Login' },
];

export default function Footer() {
  return (
    <footer className="mt-10 bg-[#07131f] text-white">
      <div className="page-wrap grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold text-white">Kids School</h3>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/80">
            We deliver structured academics, strong values, and a safe learning environment for students from
            early years through secondary grades.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/75">
            <span className="data-pill">Accredited Curriculum</span>
            <span className="data-pill">Qualified Faculty</span>
            <span className="data-pill">Smart Classrooms</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/90 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Portals</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {PORTAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-white/90 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Contact</h4>
          <p className="mt-3 text-sm text-white/85">123 Learning Avenue, Greenfield, NY 11201</p>
          <p className="mt-1 text-sm text-white/85">+1 (212) 555-0168</p>
          <p className="mt-1 text-sm text-white/85">info@kidsschool.edu</p>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="page-wrap flex flex-wrap items-center justify-between gap-2 py-4 text-xs text-white/70">
          <p>© 2026 Kids School. All rights reserved.</p>
          <p>Admissions Office Hours: Sun-Thu, 8:00 AM-4:00 PM</p>
        </div>
      </div>
    </footer>
  );
}
