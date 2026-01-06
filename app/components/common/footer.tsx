'use client';

import { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Dribbble, Twitter, Plus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // Fade-in the entire footer
      gsap.from('.footer-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current!,
          start: 'top 90%',
        },
      });

      // Stagger menu links
      gsap.from('.footer-link', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current!,
          start: 'top 90%',
        },
      });

      // Social icons hover animation
      const socials = gsap.utils.toArray<HTMLElement>('.social-icon');
      socials.forEach((icon) => {
        gsap.set(icon, { scale: 1 });
        const handleMouseEnter = () =>
          gsap.to(icon, { scale: 1.2, duration: 0.3, ease: 'power3.out' });
        const handleMouseLeave = () =>
          gsap.to(icon, { scale: 1, duration: 0.3, ease: 'power3.out' });

        icon.addEventListener('mouseenter', handleMouseEnter);
        icon.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup on unmount
        return () => {
          icon.removeEventListener('mouseenter', handleMouseEnter);
          icon.removeEventListener('mouseleave', handleMouseLeave);
        };
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-sky-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 footer-content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left: Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/assets/logo.png"
                alt="Kids Education"
                width={44}
                height={44}
              />
              <h3 className="text-xl font-semibold">
                Kids <br /> Education
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-white/90 max-w-sm">
              Our school is dedicated to providing a nurturing and stimulating
              environment for young minds. We focus on holistic development,
              ensuring each child grows academically, socially, and emotionally.
            </p>
          </div>

          {/* Middle: About School */}
          <div>
            <h4 className="text-lg font-semibold mb-5">About School</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:underline footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:underline footer-link">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/admission" className="hover:underline footer-link">
                  Admission
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Social */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Keep In Touch</h4>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-blue-700 hover:opacity-90 transition social-icon"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-pink-500 hover:opacity-90 transition social-icon"
              >
                <Dribbble size={18} />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-sky-400 hover:opacity-90 transition social-icon"
              >
                <Twitter size={18} />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-red-500 hover:opacity-90 transition social-icon"
              >
                <Plus size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
