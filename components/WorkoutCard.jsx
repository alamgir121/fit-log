"use client";

import Image from "next/image";
import Link from "next/link";
import { FiClock } from "react-icons/fi";
import { GiFireBowl } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="card group flex flex-col overflow-hidden transition hover:border-accent/60"
    >
      <div className="relative h-44 w-full overflow-hidden bg-panel2">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((tag) => (
            <span key={tag} className="pill border border-line text-[10px] text-muted">
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-wide">
          {workout.name}
        </h3>
        <p className="text-xs text-muted">{workout.equipment}</p>

        <div className="mt-auto flex items-center gap-4 pt-2 text-xs font-semibold text-muted">
          <span className="flex items-center gap-1">
            <FiClock className="text-accent" /> {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <GiFireBowl className="text-accent" /> {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <FaStar className="text-accent" /> {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
