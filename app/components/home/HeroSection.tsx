'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* IMAGE — mobile এ উপরে */}
          <div className="relative flex justify-center order-1 md:order-2">
            {/* Decorative shapes */}
            <div className="absolute -z-10 flex gap-6">
              <div className="h-[380px] w-[210px] rounded-[70px] bg-sky-500/90" />
              <div className="h-[380px] w-[210px] rounded-[70px] bg-orange-400/90" />
            </div>

            <Image
              src="/assets/hero-kids.png"
              alt="Happy student"
              width={340}
              height={460}
              priority
              className="rounded-xl object-contain"
            />
          </div>

          {/* TEXT — mobile এ নিচে */}
          <div className="order-2 md:order-1">
            <span className="inline-block rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-600">
              Kids Education
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Empowering{' '}
              <span className="text-orange-500">students</span> from early age
              <br />
              towards{' '}
              <span className="text-sky-500">bright vision</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600">
              We nurture curiosity, confidence, creativity, and compassion to help
              children grow into responsible, innovative, and happy learners in a
              diverse world.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/admission">
                <button className="rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg">
                  Enroll Now
                </button>
              </Link>

              <Link
                href="/about"
                className="
                  rounded-full border border-orange-500
                  px-6 py-2
                  text-sm font-semibold text-orange-500
                  transition-colors duration-200
                  hover:bg-orange-500 hover:text-white
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
                "
              >
                Learn More
              </Link>
            </div>
          </div>

        </div>
      </div>


    </section>
  );
}
