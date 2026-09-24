import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#090909]">
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">

        {/* Left Content */}
        <div className="relative z-10 max-w-2xl">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            TRAIN WITH
            <br />
            INTENT.
            <br />
            <span className="text-[#ccff00]">LOG EVERY SET.</span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-6 py-3.5 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#b8e600] hover:scale-[1.02]"
          >
            Browse Workouts
            <ArrowDownRight size={18} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div className="absolute -inset-10 rounded-full bg-[#ccff00]/10 blur-3xl" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]">
            {/* Temporary visual — later we'll replace this with the Figma asset */}
            <div className="absolute inset-0 flex items-end bg-gradient-to-br from-zinc-800 via-zinc-950 to-black">
              <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-[#ccff00]/30" />

              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="relative z-10 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
                  TRAIN HARD
                </p>

                <p className="mt-2 text-3xl font-black uppercase text-white">
                  Stay Consistent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 w-full bg-[#ccff00]" />
    </section>
  );
}