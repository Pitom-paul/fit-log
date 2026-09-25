"use client";

import Image from "next/image";
import { ArrowDownRight, Dumbbell } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#090909]">

      {/* Main Hero Container */}
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">

        {/* ================= LEFT SIDE ================= */}
        <div className="relative z-10">

          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#ccff00]" />

            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ccff00]">
              Workout Library
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[76px]">
            Train With Intent.
            <br />

            <span className="text-[#ccff00]">
              Log Every Set.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap items-center gap-4">

            <a
              href="#library"
              className="group inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-6 py-3.5 text-xs font-black uppercase tracking-wide text-black transition duration-300 hover:bg-[#b8e600]"
            >
              <Dumbbell size={17} />

              Browse Workouts

              <ArrowDownRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-700">
              Train hard. Log honest.
            </span>

          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-8 border-t border-white/10 pt-6">

            {/* Workouts */}
            <div>
              <p className="text-2xl font-black text-white">
                12
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-zinc-600">
                Workouts
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            {/* Daily Cap */}
            <div>
              <p className="text-2xl font-black text-white">
                5
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-zinc-600">
                Daily Cap
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            {/* Intent */}
            <div>
              <p className="text-2xl font-black text-[#ccff00]">
                100%
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-zinc-600">
                Intent
              </p>
            </div>

          </div>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative min-h-[380px] sm:min-h-[480px] lg:min-h-[560px]">

          {/* Glow */}
          <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#ccff00]/10 blur-[100px]" />

          {/* Banner Image */}
          <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/10 bg-[#111]">

            <Image
              src="/assets/banner.png"
              alt="FitLog workout banner"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-black/20" />

            {/* Banner Bottom Content */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#ccff00]">
                  FitLog Training
                </p>

                <p className="mt-1 text-xl font-black uppercase text-white">
                  Train With Intent
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ccff00] text-black">
                <Dumbbell size={21} />
              </div>

            </div>

          </div>

          {/* Floating Logo Card */}
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-[#111]/95 p-4 shadow-2xl backdrop-blur sm:-left-5">

            <div className="flex items-center gap-3">

              {/* Logo */}
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#ccff00]">

                <Image
                  src="/assets/logo.png"
                  alt="FitLog logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />

              </div>

              {/* Text */}
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-zinc-600">
                  Today&apos;s Focus
                </p>

                <p className="mt-1 text-sm font-black uppercase text-white">
                  Get Stronger
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-px w-1/3 bg-[#ccff00]" />

    </section>
  );
}