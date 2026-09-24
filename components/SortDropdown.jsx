"use client";

import { FiChevronDown } from "react-icons/fi";

const OPTIONS = [
  { value: "duration", label: "Duration" },
  { value: "caloriesBurned", label: "Calories" },
  { value: "rating", label: "Rating" },
];

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="relative inline-flex items-center">
      <span className="mr-2 text-xs font-semibold uppercase tracking-wide text-muted">
        Sort By
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="card appearance-none bg-panel px-4 py-2 pr-9 text-sm font-semibold uppercase tracking-wide text-white outline-none"
        >
          {OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-accent" />
      </div>
    </div>
  );
}
