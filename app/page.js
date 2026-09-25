import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkoutGrid from "@/components/WorkoutGrid";

async function getWorkouts() {
  try {
    const response = await fetch(
      "https://api.abcz.workers.dev/api/fitlog",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch workouts");
    }

    const data = await response.json();

    if (Array.isArray(data)) {
      return data;
    }

    if (Array.isArray(data.data)) {
      return data.data;
    }

    return [];
  } catch (error) {
    console.error("Workout API Error:", error);
    return [];
  }
}

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-[#090909] text-white">

      <Navbar />

      <Hero />

      <section
        id="library"
        className="border-t border-white/10 px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#ccff00]">
              Explore
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-5xl lg:text-6xl">
              The Library
            </h2>

            <p className="mt-4 text-sm text-zinc-500 sm:text-base">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          {workouts.length > 0 ? (
            <WorkoutGrid workouts={workouts} />
          ) : (
            <div className="rounded-2xl border border-white/10 bg-[#111] py-20 text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                Unable to load workouts
              </p>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}