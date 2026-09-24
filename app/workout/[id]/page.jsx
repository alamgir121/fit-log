import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api";
import WorkoutDetailActions from "@/components/WorkoutDetailActions";

const SPECS = [
  { label: "Equipment", key: "equipment" },
  { label: "Difficulty", key: "difficulty" },
  { label: "Sets", key: "sets" },
  { label: "Reps", key: "reps" },
  { label: "Duration", key: "duration", suffix: " min" },
  { label: "Calories", key: "caloriesBurned", suffix: " kcal" },
  { label: "Rating", key: "rating" },
];

export default async function WorkoutDetailPage({ params }) {
  let workout;
  try {
    workout = await getWorkoutById(params.id);
    if (!workout || workout.error) return notFound();
  } catch {
    return notFound();
  }

  return (
    <section className="container-x py-12 md:py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl2 border border-line">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="section-heading">{workout.name}</h1>
          <p className="mt-7 max-w-xl text-base font-medium leading-7 text-white md:text-lg">
            {workout.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((tag) => (
              <span key={tag} className="pill border border-accent/40 text-accent">
                {tag}
              </span>
            ))}
          </div>

          <div className="card mt-6 divide-y divide-line">
            {SPECS.map((spec) => (
              <div key={spec.label} className="flex items-center justify-between px-5 py-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {spec.label}
                </span>
                <span className="text-sm font-semibold text-white">
                  {workout[spec.key]}
                  {spec.suffix || ""}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl font-bold uppercase tracking-wide">
              Instructions
            </h2>
            <ol className="mt-4 space-y-3">
              {workout.instructions.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-black">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8">
            <WorkoutDetailActions workout={workout} />
          </div>
        </div>
      </div>
    </section>
  );
}
