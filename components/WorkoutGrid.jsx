"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Clock3,
  Flame,
  Star,
  ArrowUpRight,
} from "lucide-react";

export default function WorkoutGrid({ workouts = [] }) {
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = useMemo(() => {
    const list = [...workouts];

    return list.sort((a, b) => {
      const first = Number(a[sortBy] || 0);
      const second = Number(b[sortBy] || 0);

      return first - second;
    });
  }, [workouts, sortBy]);

  return (
    <div>
      {/* Sort */}
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-600">
          {sortedWorkouts.length} Workouts Available
        </p>

        <label className="flex items-center gap-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
            Sort By
          </span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="cursor-pointer rounded-full border border-white/15 bg-[#111] px-4 py-2.5 text-xs font-bold text-white outline-none focus:border-[#ccff00]"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <Link
            href={`/workout/${workout.id}`}
            key={workout.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/40"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#181818]">
              <img
                src={workout.image}
                alt={workout.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#ccff00] text-black opacity-0 transition group-hover:opacity-100">
                <ArrowUpRight size={17} />
              </span>
            </div>

            {/* Content */}
            <div className="p-5">

              <div className="flex flex-wrap gap-2">
                {workout.category?.slice(0, 2).map((category) => (
                  <span
                    key={category}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-[8px] font-black uppercase tracking-wider text-zinc-500"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <h3 className="mt-4 text-xl font-black uppercase leading-tight">
                {workout.name}
              </h3>

              <p className="mt-2 truncate text-xs text-zinc-600">
                {workout.equipment || "Equipment not specified"}
              </p>

              {/* Stats */}
              <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-4 text-[10px] font-bold uppercase tracking-wide text-zinc-500">

                <span className="flex items-center gap-1.5">
                  <Clock3 size={13} />
                  {workout.duration || 0} min
                </span>

                <span className="flex items-center gap-1.5">
                  <Flame size={13} />
                  {workout.calories || 0} kcal
                </span>

                <span className="flex items-center gap-1.5">
                  <Star size={13} />
                  {workout.rating || "—"}
                </span>

              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}