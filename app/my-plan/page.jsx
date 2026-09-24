"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useFitLog } from "@/context/FitLogContext";

export default function MyPlanPage() {
  const { plan, saved, planCount, savedCount } = useFitLog();

  return (
    <main className="min-h-screen bg-[#090909] px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Back */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 transition hover:text-[#ccff00]"
        >
          <ArrowLeft size={16} />
          Back to workouts
        </Link>

        {/* Heading */}
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ccff00]">
            Your Log
          </p>

          <h1 className="mt-3 text-5xl font-black uppercase tracking-tight sm:text-6xl">
            My Plan
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-[#111] p-5">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
              Exercises
            </p>

            <p className="mt-3 text-3xl font-black">
              {planCount}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111] p-5">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
              Minutes
            </p>

            <p className="mt-3 text-3xl font-black">
              {plan.reduce(
                (total, item) => total + Number(item.duration || 0),
                0
              )}
            </p>
          </div>

          <div className="col-span-2 rounded-2xl border border-white/10 bg-[#111] p-5 sm:col-span-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">
              Calories
            </p>

            <p className="mt-3 text-3xl font-black">
              {plan.reduce(
                (total, item) => total + Number(item.calories || 0),
                0
              )}
            </p>
          </div>

        </div>

        {/* Tabs */}
        <div className="mt-12 flex gap-2 border-b border-white/10">
          <button className="border-b-2 border-[#ccff00] px-5 py-4 text-xs font-black uppercase tracking-wide text-[#ccff00]">
            Today&apos;s Plan
            <span className="ml-2">{planCount}</span>
          </button>

          <button className="px-5 py-4 text-xs font-black uppercase tracking-wide text-zinc-500">
            Saved
            <span className="ml-2">{savedCount}</span>
          </button>
        </div>

        {/* Empty state */}
        {plan.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-white/10 bg-[#111] px-6 py-20 text-center">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ccff00]">
              Nothing Here Yet
            </p>

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-zinc-500">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-7 inline-flex rounded-full bg-[#ccff00] px-7 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-4">
            {plan.map((workout) => (
              <div
                key={workout.id}
                className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#111] p-5 sm:flex-row sm:items-center"
              >
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="h-28 w-full rounded-xl object-cover sm:h-24 sm:w-36"
                />

                <div className="flex-1">
                  <h2 className="font-black uppercase">
                    {workout.name}
                  </h2>

                  <p className="mt-2 text-sm text-zinc-500">
                    {workout.equipment}
                  </p>

                  <p className="mt-3 text-xs text-zinc-400">
                    {workout.duration} min &nbsp;•&nbsp;
                    {workout.calories} kcal &nbsp;•&nbsp;
                    ★ {workout.rating}
                  </p>
                </div>

                <Link
                  href={`/workout/${workout.id}`}
                  className="rounded-full border border-white/20 px-5 py-3 text-center text-xs font-black uppercase hover:border-[#ccff00] hover:text-[#ccff00]"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}