import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x flex flex-col items-center justify-center gap-4 py-32 text-center">
      <p className="font-display text-7xl font-bold text-accent">404</p>
      <h1 className="font-display text-2xl font-bold uppercase tracking-wide">
        Page Not Found
      </h1>
      <p className="max-w-sm text-sm text-muted">
        The lift you&apos;re looking for doesn&apos;t exist in this library.
      </p>
      <Link href="/" className="btn-primary mt-2">
        Back to Home
      </Link>
    </section>
  );
}
