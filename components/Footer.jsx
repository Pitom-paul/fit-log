import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707] px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ccff00] text-black">
            <Dumbbell size={16} />
          </span>

          <span className="font-black tracking-tight">
            FIT<span className="text-[#ccff00]">LOG</span>
          </span>
        </div>

        <p className="text-xs text-zinc-600">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}