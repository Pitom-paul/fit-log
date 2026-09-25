import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-[#090909] px-5 text-center text-white">
      <div>

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ccff00] text-black">
          <Dumbbell size={28} />
        </div>

        <p className="mt-7 text-xs font-black uppercase tracking-[0.3em] text-[#ccff00]">
          Error 404
        </p>

        <h1 className="mt-3 text-5xl font-black uppercase sm:text-7xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-zinc-500">
          The workout or page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-7 py-3 text-xs font-black uppercase text-black"
        >
          <ArrowLeft size={15} />
          Back to workouts
        </Link>

      </div>
    </main>
  );
}