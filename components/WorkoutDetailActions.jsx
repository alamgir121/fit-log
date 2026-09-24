"use client";

import { FaPlus, FaRegBookmark } from "react-icons/fa";
import { usePlan } from "@/context/PlanContext";

export default function WorkoutDetailActions({ workout }) {
  const { addToPlan, saveForLater, plan, planCap } = usePlan();
  const isFull = plan.length >= planCap && !plan.some((w) => w.id === workout.id);

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        onClick={() => addToPlan(workout)}
        disabled={isFull}
        className="btn-primary"
      >
        <FaPlus /> Add to today&apos;s plan
      </button>
      <button onClick={() => saveForLater(workout)} className="btn-secondary">
        <FaRegBookmark /> Save for later
      </button>
    </div>
  );
}
