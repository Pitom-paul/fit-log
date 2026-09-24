import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#090909]">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10">

        <div>
          <p className="mb-6 text-sm font-black uppercase tracking-[0.3em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-5xl font-black uppercase leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl">
            TRAIN WITH
            <br />
            INTENT.
            <br />
            <span className="text-[#ccff00]">
              LOG EVERY SET.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s
            work add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-7 py-4 text-sm font-black uppercase text-black"
          >
            Browse Workouts
            <ArrowDown size={18} />
          </Link>
        </div>

        <div className="relative">
          <div className="flex min-h-[500px] items-end overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-zinc-700 via-zinc-900 to-black">
            <div className="p-8">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ccff00]">
                FITLOG
              </p>

              <h2 className="mt-2 text-4xl font-black uppercase text-white">
                Train Hard.
              </h2>

              <p className="mt-2 text-zinc-400">
                Log Honest.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}