"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { usePlan } from "@/context/PlanContext";

const links = [
  { href: "/", label: "Workout" },
  { href: "/my-plan", label: "My Plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { planCount, savedCount } = usePlan();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-base/90 backdrop-blur container mx-auto">
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold uppercase tracking-wide">
          <Image
            src="/fitlog-logo.png"
            alt="FitLog logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          FitLog
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wide transition ${
                  active ? "text-accent" : "text-muted hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/my-plan" className="pill bg-accent text-black">
            Plan {planCount}
          </Link>
          <Link href="/my-plan" className="pill border border-line text-white">
            Saved {savedCount}
          </Link>
        </div>
      </div>
    </header>
  );
}
