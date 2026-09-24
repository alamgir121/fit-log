"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  function scrollToLibrary() {
    document.getElementById("library")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="border-b border-line bg-base px-4 py-6 sm:px-6 lg:px-8 container mx-auto">


      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-xl2 border border-line bg-base">


        <div className="relative z-10 grid min-h-[600px] grid-cols-1 items-center md:grid-cols-2">


          <div className="px-8 py-16 sm:px-12 md:px-14 lg:px-16">


            <p className="mb-6 text-sm font-bold tracking-[0.12em] text-accent">
              WORKOUT LIBRARY
            </p>


            <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-wide md:text-6xl whitespace-nowrap">
              Train With Intent.Log
              <br />
              Every Set.
            </h1>

            <p className="mt-7 max-w-xl text-base font-medium leading-7 text-white md:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <button
              onClick={scrollToLibrary}
              className="btn-primary mt-8 inline-flex items-center gap-3"
            >
              Browse Workouts
              <FaArrowRight className="text-sm" />
            </button>
          </div>


          <div className="relative h-[420px] w-full md:h-[600px]">
            <Image
              src="/fitlog-hero.png"
              alt="FitLog hero"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-bottom"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;