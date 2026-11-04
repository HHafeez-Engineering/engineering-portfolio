import Link from "next/link";

export default function RCCarProject() {
  return (
    <main className="min-h-screen px-10 py-16">

      {/* Back Button */}
      <Link
        href="/projects/electrical"
        className="text-purple-400 hover:underline"
      >
        ← Back to Electrical Projects
      </Link>

      {/* Title */}
      <h1 className="mt-10 text-5xl font-bold text-purple-400">
        RC CAR 2026
      </h1>

      <p className="mt-4 text-lg text-gray-400">
        ESP32 | Embedded Systems | Firmware | Hardware Design
      </p>

      {/* Description */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold">
          Project Overview
        </h2>

        <p className="mt-5 max-w-4xl text-lg leading-relaxed">
          This project involved designing and building a
          remote-controlled car using two ESP32 microcontrollers.

          The car uses ESP-NOW wireless communication
          between a handheld controller and the vehicle.

          The project combines embedded programming,
          motor control, servo steering, and electronic
          hardware integration.
        </p>
      </section>

      {/* Images */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Project Gallery
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

          <img
            src="/projects/rc-car/rc-car-1.jpg"
            alt="RC Car project"
            className="w-full rounded-xl"
          />

          <img
            src="/projects/rc-car/rc-car-2.jpg"
            alt="RC Car electronic components"
            className="w-full rounded-xl"
          />

        </div>
      </section>

      {/* Video */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Project Demonstration
        </h2>

        <p className="mt-4">
          Watch the RC Car in action.
        </p>

        <video
          controls
          preload="metadata"
          className="mt-6 w-full max-w-3xl rounded-xl"
        >
          <source
            src="/projects/rc-car/rc-car-demo.mp4"
            type="video/mp4"
          />
          Your browser does not support video playback.
        </video>
      </section>

      {/* Technologies */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Technologies Used
        </h2>

        <ul className="mt-5 list-disc space-y-2 pl-6 text-lg">
          <li>ESP32 Microcontrollers</li>
          <li>ESP-NOW Wireless Communication</li>
          <li>C++ / Arduino IDE</li>
          <li>Motor Driver and DC Motor</li>
          <li>Servo Motor Steering</li>
          <li>Electronic Circuit Design</li>
        </ul>
      </section>

    </main>
  );
}