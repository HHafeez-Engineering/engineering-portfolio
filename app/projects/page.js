import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen px-10 py-16">

      <h1 className="text-5xl font-bold text-purple-400">
        My Projects
      </h1>

      <p className="mt-4 text-lg">
        Explore my engineering, software, and design projects.
      </p>

      {/* Under Development Notice */}
      <div className="mt-6 rounded-xl border-2 border-yellow-400 bg-yellow-500/10 px-6 py-4 text-center shadow-lg shadow-yellow-500/10">
        <p className="text-xl font-bold text-yellow-300 md:text-2xl">
          🚧 Multiple Pages Are Still Under Development! 🚧
        </p>

        <p>
          Try the Electrical Engineering Project
        </p>

        <p className="mt-2 text-sm text-gray-300">
          More project details, photos, and demonstrations are coming soon.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">

        <Link href="/projects/electrical"
          className="rounded-xl border border-purple-500 p-6 hover:bg-purple-950/40">
          <h2 className="text-2xl font-bold">
            Electrical Engineering Projects
          </h2>
        </Link>

        <Link href="/projects/cad"
          className="rounded-xl border border-purple-500 p-6 hover:bg-purple-950/40">
          <h2 className="text-2xl font-bold">
            CAD Projects
          </h2>
        </Link>

        <Link href="/projects/games"
          className="rounded-xl border border-purple-500 p-6 hover:bg-purple-950/40">
          <h2 className="text-2xl font-bold">
            Game Development
          </h2>
        </Link>

        <Link href="/projects/revit"
          className="rounded-xl border border-purple-500 p-6 hover:bg-purple-950/40">
          <h2 className="text-2xl font-bold">
            Revit Projects
          </h2>
        </Link>

        <Link href="/projects/software"
          className="rounded-xl border border-purple-500 p-6 hover:bg-purple-950/40">
          <h2 className="text-2xl font-bold">
            Software Development
          </h2>
        </Link>

      </div>

      <Link href="/" className="mt-10 inline-block text-purple-400">
        ← Back to Home
      </Link>

    </main>
  );
}