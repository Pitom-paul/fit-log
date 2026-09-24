"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import WorkoutDetails from "@/components/WorkoutDetails";
import Loading from "@/components/Loading";

export default function WorkoutPage() {
  const params = useParams();

  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.abcz.workers.dev/api/fitlog/${params.id}`
        );

        if (!response.ok) {
          throw new Error("Workout not found");
        }

        const data = await response.json();

        console.log("SINGLE WORKOUT:", data);

        setWorkout(data);
      } catch (err) {
        console.error(err);
        setError("Workout not found.");
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchWorkout();
    }
  }, [params.id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#090909]">
        <Loading />
      </main>
    );
  }

  if (error || !workout) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#090909] px-5 text-center text-white">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ccff00]">
            FitLog
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase">
            Workout Not Found
          </h1>

          <a
            href="/"
            className="mt-7 inline-block rounded-full bg-[#ccff00] px-6 py-3 text-xs font-black uppercase text-black"
          >
            Back to Library
          </a>
        </div>
      </main>
    );
  }

  const handleAddToPlan = () => {
    console.log("Add to plan:", workout);
  };

  const handleSave = () => {
    console.log("Save workout:", workout);
  };

  return (
    <WorkoutDetails
      workout={workout}
      onAddToPlan={handleAddToPlan}
      onSave={handleSave}
    />
  );
}