"use client";

import WorkoutCard from "./WorkoutCard";

export default function WorkoutGrid({ workouts }) {
  if (!workouts || workouts.length === 0) {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#111] py-20 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
          No workouts found
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}