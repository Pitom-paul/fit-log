"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkoutGrid from "@/components/WorkoutGrid";
import Loading from "@/components/Loading";

export default function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://api.abcz.workers.dev/api/fitlog"
        );

        if (!response.ok) {
          throw new Error("Failed to load workouts");
        }

        const data = await response.json();

        console.log("API DATA:", data);

        setWorkouts(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load workouts.");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <Navbar />

      <Hero />

      {/* Library */}
      <section
        id="library"
        className="border-t border-white/10 px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ccff00]">
                Explore
              </p>

              <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
                The Library
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:text-base">
                Twelve lifts covering every major muscle group.
              </p>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-600">
              {workouts.length} Workouts
            </p>
          </div>

          {/* Loading */}
          {loading && <Loading />}

          {/* Error */}
          {!loading && error && (
            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center">
              <p className="text-sm font-bold uppercase text-red-400">
                {error}
              </p>
            </div>
          )}

          {/* Workouts */}
          {!loading && !error && (
            <WorkoutGrid workouts={workouts} />
          )}
        </div>
      </section>
    </main>
  );
}