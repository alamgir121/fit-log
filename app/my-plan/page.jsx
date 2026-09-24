"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";
import PlanWorkoutCard from "@/components/PlanWorkoutCard";
import Loader from "@/components/Loader";
import SortDropdown from "@/components/SortDropdown";

export default function MyPlanPage() {
  const { plan, saved, hydrated } = usePlan();
  const [tab, setTab] = useState("plan");

  const [sortBy, setSortBy] = useState("duration");

  const list = tab === "plan" ? plan : saved;

  const sorted = useMemo(() => {
    return [...list].sort((a, b) => b[sortBy] - a[sortBy]);
  }, [list, sortBy]);

  const totals = list.reduce(
    (acc, w) => ({
      minutes: acc.minutes + w.duration,
      calories: acc.calories + w.caloriesBurned,
    }),
    { minutes: 0, calories: 0 }
  );

  return (
    <div className="container mx-auto">
      <section className="container-x py-12 md:py-16">
        <h1 className="section-heading">My Plan</h1>

        <p className="mt-7 max-w-xl text-base font-medium leading-7 text-white md:text-lg">
          Cap of five lifts for today. Finish them, then load more.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="card p-5 text-center">
            <p className="font-display text-3xl font-bold text-accent">
              {list.length}
            </p>

            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
              Exercises
            </p>
          </div>

          <div className="card p-5 text-center">
            <p className="font-display text-3xl font-bold text-accent">
              {totals.minutes}
            </p>

            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
              Minutes
            </p>
          </div>

          <div className="card p-5 text-center">
            <p className="font-display text-3xl font-bold text-accent">
              {totals.calories}
            </p>

            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
              Calories
            </p>
          </div>
        </div>


        <div className="mt-10 flex gap-2 border-b border-line">
          {[
            { key: "plan", label: "Today's Plan" },
            { key: "saved", label: "Saved" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-4 py-3 text-sm font-bold uppercase tracking-wide transition ${tab === t.key
                ? "border-b-2 border-accent text-accent"
                : "text-muted hover:text-white"
                }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <h2 className="section-heading text-2xl">
            {tab === "plan" ? "Today's Workouts" : "Saved Workouts"}
          </h2>

          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {!hydrated &&
            <Loader label="Loading workouts…" />
          }

          {hydrated &&
            sorted.map((workout) => (
              <PlanWorkoutCard
                key={workout.id}
                workout={workout}
                tab={tab}
              />
            ))}
        </div>

        
        {hydrated && list.length === 0 && (
          <div className="card mt-6 flex flex-col items-center gap-3 px-6 py-20 text-center">
            <h2 className="font-display text-xl font-bold uppercase tracking-wide">
              Nothing Here Yet
            </h2>

            <p className="max-w-sm text-sm text-muted">
              Browse the library and add a lift to get today moving.
            </p>

            <Link href="/" className="btn-primary mt-2">
              Go to workouts
            </Link>
          </div>
        )}

        
      </section>
    </div>
  );
}