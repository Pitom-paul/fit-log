export default function Loading() {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-[#ccff00]" />

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
          Loading workouts...
        </p>
      </div>
    </div>
  );
}