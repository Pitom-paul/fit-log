import Link from "next/link";
import { Clock3, Flame, Star, ArrowUpRight } from "lucide-react";

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/50"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Arrow */}
        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-sm transition group-hover:bg-[#ccff00] group-hover:text-black">
          <ArrowUpRight size={18} />
        </div>

        {/* Categories */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {workout.category?.map((category) => (
            <span
              key={category}
              className="rounded-full bg-[#ccff00] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-black"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-black uppercase leading-tight text-white transition group-hover:text-[#ccff00]">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-zinc-500">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-4 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5">
            <Clock3 size={14} className="text-[#ccff00]" />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <Flame size={14} className="text-[#ccff00]" />
            {workout.calories} kcal
          </span>

          <span className="flex items-center gap-1.5">
            <Star size={14} className="fill-[#ccff00] text-[#ccff00]" />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}