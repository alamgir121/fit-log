import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel container mx-auto">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        
        <div className="flex items-center gap-2 font-display text-lg font-bold uppercase tracking-wide">
          
          <span className="flex h-8 w-8 items-center justify-center">
            <Image
              src="/fitlog-logo.png"
              alt="FitLog Logo"
              width={28}
              height={28}
            />
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