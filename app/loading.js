export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#090909]">
      <div className="text-center">

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#ccff00]/20 border-t-[#ccff00] animate-spin" />

        <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-zinc-500">
          Loading workouts…
        </p>

      </div>
    </main>
  );
}