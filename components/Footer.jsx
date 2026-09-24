import { GiWeightLiftingUp } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <div className="flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wide">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-black">
            <GiWeightLiftingUp size={16} />
          </span>
          FitLog
        </div>
        <p className="text-sm text-muted">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
