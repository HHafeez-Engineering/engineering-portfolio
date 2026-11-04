import Link from "next/link";

export default function ElectricalProjects() {
  return (
    <main className="min-h-screen px-10 py-16">

      <h1 className="text-5xl font-bold text-purple-400">
        Electrical Engineering Projects
      </h1>

      <p className="mt-6 text-lg">
        Explore my electrical engineering and embedded systems projects.
      </p>

      <Link href="/projects" className="mt-10 inline-block text-purple-400">
        ← Back to Projects
      </Link>

    </main>
  );
}