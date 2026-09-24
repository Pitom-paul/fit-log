export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#ccff00]">
            Workout Library
          </p>

          <h1 className="text-5xl font-black uppercase tracking-tight md:text-7xl">
            Fit<span className="text-[#ccff00]">Log</span>
          </h1>

          <p className="mt-5 text-zinc-400">
            Train with intent. Log every set.
          </p>
        </div>
      </section>
    </main>
  );
}