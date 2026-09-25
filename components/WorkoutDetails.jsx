"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Bookmark,
  Check,
  Clock3,
  Flame,
  Gauge,
  Layers3,
  Star,
} from "lucide-react";
import { toast } from "react-toastify";
import { useFitLog } from "@/context/FitLogContext";

export default function WorkoutDetails({ workout }) {
  const { addToPlan, saveWorkout } = useFitLog();

  const handleAddToPlan = () => {
    const result = addToPlan(workout);

    if (result.success) {
      toast.success("Added to today's plan");
    } else {
      toast.info(result.message);
    }
  };

  const handleSave = () => {
    const result = saveWorkout(workout);

    if (result.success) {
      toast.success("Saved for later");
    } else {
      toast.info(result.message);
    }
  };

  return (
    <main className="min-h-screen bg-[#090909] px-5 py-10 text-white sm:px-8 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-7xl">

        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 transition hover:text-[#ccff00]"
        >
          <ArrowLeft size={16} />
          Back to library
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Image */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
            <div className="aspect-[4/5] lg:aspect-auto lg:h-full lg:min-h-[680px]">
              <img
                src={workout.image}
                alt={workout.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">

            <div className="mb-5 flex flex-wrap gap-2">
              {workout.category?.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-black uppercase text-black"
                >
                  {category}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              {workout.name}
            </h1>

            <p className="mt-6 text-sm leading-7 text-zinc-400 sm:text-base">
              {workout.description}
            </p>

            {/* Specs */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
              <div className="grid grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-3">

                <Spec
                  icon={<Layers3 size={16} />}
                  label="Equipment"
                  value={workout.equipment}
                />

                <Spec
                  icon={<Gauge size={16} />}
                  label="Difficulty"
                  value={workout.difficulty}
                />

                <Spec
                  icon={<Layers3 size={16} />}
                  label="Sets"
                  value={workout.sets}
                />

                <Spec
                  icon={<Check size={16} />}
                  label="Reps"
                  value={workout.reps}
                />

                <Spec
                  icon={<Clock3 size={16} />}
                  label="Duration"
                  value={workout.duration ? `${workout.duration} min` : "—"}
                />

                <Spec
                  icon={<Flame size={16} />}
                  label="Calories"
                  value={workout.calories ? `${workout.calories} kcal` : "—"}
                />

                <Spec
                  icon={<Star size={16} />}
                  label="Rating"
                  value={workout.rating || "—"}
                />

              </div>
            </div>

            {/* Instructions */}
            <div className="mt-9">

              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-[#ccff00]">
                Instructions
              </h2>

              <ol className="mt-5 space-y-4">

                {workout.instructions?.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-4 border-b border-white/10 pb-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-xs font-black text-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="pt-1 text-sm leading-6 text-zinc-400">
                      {instruction}
                    </p>
                  </li>
                ))}

              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <button
                onClick={handleAddToPlan}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#ccff00] px-6 py-4 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
              >
                <Check size={17} />
                Add to today&apos;s plan
              </button>

              <button
                onClick={handleSave}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-xs font-black uppercase tracking-wide text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
              >
                <Bookmark size={17} />
                Save for later
              </button>

            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

function Spec({ icon, label, value }) {
  return (
    <div className="p-4">

      <div className="flex items-center gap-2 text-zinc-600">
        {icon}

        <span className="text-[9px] font-black uppercase tracking-widest">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm font-bold text-white">
        {value || "—"}
      </p>

    </div>
  );
}