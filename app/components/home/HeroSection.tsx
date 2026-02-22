'use client';

import Image from 'next/image';
import Link from 'next/link';
import Slider, { Settings } from 'react-slick';
import { HERO_SLIDES } from '@/app/lib/school-data';

export default function HeroSection() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className="page-wrap py-8">
      <Slider {...settings} className="hero-slider">
        {HERO_SLIDES.map((slide) => (
          <article key={slide.id} className="px-1">
            <div className="grid min-h-[460px] overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
              <div
                className={`relative flex flex-col justify-center gap-6 bg-gradient-to-br ${slide.theme} p-8 text-white sm:p-10`}
              >
                <span className="inline-flex w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                  {slide.subtitle}
                </span>

                <h1 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  {slide.title}
                </h1>

                <p className="max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link href={slide.ctaHref} className="btn btn-secondary">
                    {slide.ctaLabel}
                  </Link>
                  <Link href="/contact" className="btn btn-secondary">
                    Talk to Office
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[280px] bg-neutral-100">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={slide.id === 1}
                />
              </div>
            </div>
          </article>
        ))}
      </Slider>
    </section>
  );
}
