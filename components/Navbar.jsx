"use client";

import Link from "next/link";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ccff00] text-black">
            <Dumbbell size={19} />
          </span>

          <span className="text-xl font-black uppercase text-white">
            FIT<span className="text-[#ccff00]">LOG</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className="rounded-full px-5 py-2 text-sm font-bold uppercase text-[#ccff00]"
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-5 py-2 text-sm font-bold uppercase text-zinc-400 hover:text-white"
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black uppercase text-black"
          >
            Plan 0
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white/30 px-4 py-2 text-xs font-black uppercase text-white"
          >
            Saved 0
          </Link>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0d0d0d] p-5 md:hidden">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-bold uppercase text-[#ccff00]"
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-bold uppercase text-white"
            >
              My Plan
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}