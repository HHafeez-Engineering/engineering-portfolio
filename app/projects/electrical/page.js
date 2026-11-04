import Link from "next/link";

export default function ElectricalProjects() {
  return (
    <main className="min-h-screen px-10 py-16">

      <h1 className="text-5xl font-bold text-purple-400">
        Electrical Engineering Projects
      </h1>

      <p className="mt-6 text-lg">
        Explore my electrical engineering projects with embedded systems, hardware, and firmware.
      </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">

        {/* RC Car Project Card */}
        <Link
          href="/projects/electrical/rc-car"
          className="group overflow-hidden rounded-xl border border-purple-500/40 bg-purple-950/20 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20"
        >
          <img
            src="/projects/rc-car/rc-car-1.jpg"
            alt="My ESP32 remote control car"
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="p-5">
            <h2 className="text-2xl font-bold">
              RC Car
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              ESP32 • ESP-NOW • Firmware • Motor Control
            </p>
            <p className="mt-3 text-purple-400">
              View Project →
            </p>
          </div>
        </Link>

      </div>

      <Link href="/projects" className="mt-10 inline-block text-purple-400">
        ← Back to Projects
      </Link>

    </main>
  );
}