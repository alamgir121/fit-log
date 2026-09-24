"use client";

import Image from "next/image";
import Link from "next/link";
import { FiClock, FiCheck, FiX } from "react-icons/fi";
import { GiFireBowl } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { usePlan } from "@/context/PlanContext";

export default function PlanWorkoutCard({ workout, tab }) {
  const { removeFromPlan, removeFromSaved, markAsDone } = usePlan();

  return (
    <div className="card flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-panel2">
        <Image src={workout.image} alt={workout.name} fill className="object-cover" />
      </div>

      <div className="flex-1">
        <h3
          className={`font-display text-base font-bold uppercase tracking-wide ${
            workout.done ? "text-muted line-through" : "text-white"
          }`}
        >
          {workout.name}
        </h3>
        <p className="text-xs text-muted">{workout.equipment}</p>
        <div className="mt-2 flex items-center gap-4 text-xs font-semibold text-muted">
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

      <div className="flex items-center gap-2">
        <Link href={`/workout/${workout.id}`} className="btn-secondary !px-4 !py-2 text-xs">
          View Details
        </Link>
        {tab === "plan" && (
          <button
            onClick={() => markAsDone(workout.id)}
            title="Mark as Done"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-accent transition hover:border-accent"
          >
            <FiCheck />
          </button>
        )}
        <button
          onClick={() =>
            tab === "plan" ? removeFromPlan(workout.id) : removeFromSaved(workout.id)
          }
          title="Remove"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-red-400 transition hover:border-red-400"
        >
          <FiX />
        </button>
      </div>
    </div>
  );
}
