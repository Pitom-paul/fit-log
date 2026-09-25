"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Clock3,
  Flame,
  Star,
  Trash2,
  Dumbbell,
} from "lucide-react";
import { toast } from "react-toastify";
import { useFitLog } from "@/context/FitLogContext";

export default function MyPlanPage() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useFitLog();

  const [activeTab, setActiveTab] = useState("plan");

  const currentList = activeTab === "plan" ? plan : saved;

  const totalMinutes = plan.reduce(
    (total, workout) => total + Number(workout.duration || 0),
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + Number(workout.calories || 0),
    0
  );

  const handleRemovePlan = (id) => {
    removeFromPlan(id);
    toast.success("Workout removed from today's plan");
  };

  const handleRemoveSaved = (id) => {
    removeFromSaved(id);
    toast.success("Workout removed from saved");
  };

  const handleDone = (id, done) => {
    markAsDone(id);

    if (done) {
      toast.info("Workout marked as not done");
    } else {
      toast.success("Workout marked as done");
    }
  };

  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <section className="px-5 pb-20 pt-10 sm:px-8 lg:px-10 lg:pt-14">
        <div className="mx-auto max-w-7xl">

          {/* Back */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-zinc-500 transition hover:text-[#ccff00]"
          >
            <ArrowLeft size={16} />
            Back to workouts
          </Link>

          {/* Header */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ccff00]">
              Your Log
            </p>

            <h1 className="mt-3 text-5xl font-black uppercase leading-none tracking-tight sm:text-6xl lg:text-7xl">
              My Plan
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
              Cap of five lifts for today. Finish them, then load more.
            </p>
          </div>

          {/* Metrics */}
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">

            <MetricCard
              label="Exercises"
              value={plan.length}
            />

            <MetricCard
              label="Minutes"
              value={totalMinutes}
            />

            <MetricCard
              label="Calories"
              value={totalCalories}
            />

          </div>

          {/* Tabs */}
          <div className="mt-12 flex border-b border-white/10">

            <button
              onClick={() => setActiveTab("plan")}
              className={`relative px-5 py-4 text-xs font-black uppercase tracking-wide transition ${
                activeTab === "plan"
                  ? "text-[#ccff00]"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              Today&apos;s Plan
              <span className="ml-2 opacity-60">
                {plan.length}
              </span>

              {activeTab === "plan" && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-[#ccff00]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`relative px-5 py-4 text-xs font-black uppercase tracking-wide transition ${
                activeTab === "saved"
                  ? "text-[#ccff00]"
                  : "text-zinc-500 hover:text-white"
              }`}
            >
              Saved
              <span className="ml-2 opacity-60">
                {saved.length}
              </span>

              {activeTab === "saved" && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-[#ccff00]" />
              )}
            </button>

          </div>

          {/* Content */}
          <div className="mt-8">

            {currentList.length === 0 ? (
              <EmptyState activeTab={activeTab} />
            ) : (
              <div className="grid gap-4">

                {currentList.map((workout) => (
                  <PlanCard
                    key={workout.id}
                    workout={workout}
                    activeTab={activeTab}
                    onRemove={
                      activeTab === "plan"
                        ? handleRemovePlan
                        : handleRemoveSaved
                    }
                    onDone={handleDone}
                  />
                ))}

              </div>
            )}

          </div>

        </div>
      </section>
    </main>
  );
}

/* ================= METRIC CARD ================= */

function MetricCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111] p-5">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
        {label}
      </p>

      <p className="mt-3 text-4xl font-black">
        {value}
      </p>
    </div>
  );
}

/* ================= PLAN CARD ================= */

function PlanCard({
  workout,
  activeTab,
  onRemove,
  onDone,
}) {
  const isDone = workout.done === true;

  return (
    <article
      className={`group flex flex-col gap-5 rounded-2xl border bg-[#111] p-4 transition sm:flex-row sm:items-center sm:p-5 ${
        isDone
          ? "border-[#ccff00]/40"
          : "border-white/10 hover:border-white/20"
      }`}
    >

      {/* Image */}
      <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-xl bg-[#181818] sm:h-28 sm:w-40">
        {workout.image ? (
          <img
            src={workout.image}
            alt={workout.name}
            className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
              isDone ? "opacity-50" : ""
            }`}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-zinc-700">
            <Dumbbell size={35} />
          </div>
        )}

        {isDone && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ccff00] text-black">
              <Check size={22} strokeWidth={3} />
            </span>
          </div>
        )}
      </div>

      {/* Main Info */}
      <div className="min-w-0 flex-1">

        <div className="flex flex-wrap items-center gap-2">
          {workout.category?.slice(0, 2).map((category) => (
            <span
              key={category}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[8px] font-black uppercase tracking-wider text-zinc-500"
            >
              {category}
            </span>
          ))}

          {isDone && (
            <span className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[8px] font-black uppercase tracking-wider text-black">
              Done
            </span>
          )}
        </div>

        <h2
          className={`mt-3 truncate text-lg font-black uppercase sm:text-xl ${
            isDone ? "text-zinc-500 line-through" : "text-white"
          }`}
        >
          {workout.name}
        </h2>

        <p className="mt-1 text-xs text-zinc-600">
          {workout.equipment || "Equipment not specified"}
        </p>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-wide text-zinc-500">

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

      {/* Actions */}
      <div className="flex flex-col gap-2 sm:w-40">

        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-white/15 px-4 py-2.5 text-center text-[10px] font-black uppercase tracking-wide text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
        >
          View Details
        </Link>

        {activeTab === "plan" && (
          <button
            onClick={() => onDone(workout.id, isDone)}
            className={`rounded-full px-4 py-2.5 text-[10px] font-black uppercase tracking-wide transition ${
              isDone
                ? "border border-white/10 text-zinc-500 hover:text-white"
                : "bg-[#ccff00] text-black hover:bg-[#b8e600]"
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              <Check size={13} />
              {isDone ? "Mark as Undone" : "Mark as Done"}
            </span>
          </button>
        )}

        <button
          onClick={() => onRemove(workout.id)}
          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-red-500/20 px-4 py-2.5 text-[10px] font-black uppercase tracking-wide text-red-400 transition hover:border-red-500 hover:bg-red-500/10"
        >
          <Trash2 size={13} />
          Remove
        </button>

      </div>

    </article>
  );
}

/* ================= EMPTY STATE ================= */

function EmptyState({ activeTab }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111] px-6 py-20 text-center">

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-zinc-600">
        <Dumbbell size={24} />
      </div>

      <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-[#ccff00]">
        Nothing Here Yet
      </p>

      <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-zinc-500">
        {activeTab === "plan"
          ? "Browse the library and add a lift to get today moving."
          : "Save a workout for later and it will appear here."}
      </p>

      <Link
        href="/"
        className="mt-7 inline-flex rounded-full bg-[#ccff00] px-7 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
      >
        Go to workouts
      </Link>

    </div>
  );
}