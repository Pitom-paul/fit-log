"use client";

import Link from "next/link";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { planCount, savedCount } = useFitLog();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2.5"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ccff00] text-black">
            <Dumbbell size={19} strokeWidth={2.5} />
          </span>

          <span className="text-xl font-black uppercase tracking-tight text-white">
            FIT<span className="text-[#ccff00]">LOG</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className="rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#ccff00] transition hover:bg-white/5"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-zinc-400 transition hover:bg-white/5 hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
          >
            Plan <span className="ml-1">{planCount}</span>
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white/30 px-4 py-2 text-xs font-black uppercase tracking-wide text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
          >
            Saved <span className="ml-1">{savedCount}</span>
          </Link>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#ccff00] hover:text-[#ccff00] md:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0d0d0d] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-2">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-bold uppercase text-[#ccff00] hover:bg-white/5"
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-bold uppercase text-zinc-300 hover:bg-white/5"
            >
              My Plan
            </Link>

            <div className="mt-2 flex gap-2 border-t border-white/10 pt-4">

              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-full bg-[#ccff00] px-4 py-2.5 text-center text-xs font-black uppercase text-black"
              >
                Plan {planCount}
              </Link>

              <Link
                href="/my-plan"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-full border border-white/30 px-4 py-2.5 text-center text-xs font-black uppercase text-white"
              >
                Saved {savedCount}
              </Link>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}