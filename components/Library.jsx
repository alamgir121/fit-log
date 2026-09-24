"use client";

import { useMemo, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import SortDropdown from "./SortDropdown";

export default function Library({ workouts }) {
  const [sortBy, setSortBy] = useState("duration");

  const sorted = useMemo(() => {
    return [...workouts].sort((a, b) => b[sortBy] - a[sortBy]);
  }, [workouts, sortBy]);

  return (
    <section id="library" className="border-b border-line bg-base py-16 md:py-24 container mx-auto">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="section-heading">The Library</h2>
            <p className="mt-7 max-w-xl text-base font-medium leading-7 text-white md:text-lg">
              Twelve lifts covering every major muscle group.
            </p>
          </div>
          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sorted.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </section>
  );
}
