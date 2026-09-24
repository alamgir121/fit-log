"use client";

import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const PlanContext = createContext(null);

const PLAN_KEY = "fitlog_today_plan";
const SAVED_KEY = "fitlog_saved";
const PLAN_CAP = 5;

function readLS(key) {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setPlan(readLS(PLAN_KEY));
    setSaved(readLS(SAVED_KEY));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
  }, [plan, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
  }, [saved, hydrated]);

  function addToPlan(workout) {
    setPlan((prev) => {
      if (prev.some((w) => w.id === workout.id)) {
        toast("Already in today's plan");
        return prev;
      }
      if (prev.length >= PLAN_CAP) {
        toast.error("Plan is full (5 lifts max)");
        return prev;
      }
      toast.success("Added to today's plan");
      return [...prev, { ...workout, done: false }];
    });
  }

  function saveForLater(workout) {
    setSaved((prev) => {
      if (prev.some((w) => w.id === workout.id)) {
        toast("Already saved");
        return prev;
      }
      toast.success("Saved for later");
      return [...prev, workout];
    });
  }

  function removeFromPlan(id) {
    setPlan((prev) => prev.filter((w) => w.id !== id));
    toast("Removed from plan");
  }

  function removeFromSaved(id) {
    setSaved((prev) => prev.filter((w) => w.id !== id));
    toast("Removed from saved");
  }

  function markAsDone(id) {
    setPlan((prev) =>
      prev.map((w) => (w.id === id ? { ...w, done: !w.done } : w))
    );
    toast.success("Marked as done");
  }

  const value = {
    plan,
    saved,
    planCount: plan.length,
    savedCount: saved.length,
    planCap: PLAN_CAP,
    addToPlan,
    saveForLater,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
    hydrated,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used within PlanProvider");
  return ctx;
}
