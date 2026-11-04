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
            This project was completed as part of ENEL 300 -
            Electrical and Computer Engineering Professional Skills
            at the University of Calgary.

            Our team was tasked with designing, building, and testing
            a fully functional remote-controlled car.

            The project involved embedded programming, wireless
            communication, motor control, servo steering, and
            electronic hardware integration.
        </p>

        {/* Components Used */}
        <h2 className="mt-10 text-3xl font-bold text-purple-400">
        Components Used
        </h2>

        <ul className="mt-5 list-disc space-y-2 pl-6 text-lg">
        <li>2x ESP32 Microcontrollers (Transmitter & Receiver)</li>
        <li>ESP-NOW Wireless Communication</li>
        <li>540 Brushed DC Motor</li>
        <li>30A Dual Channel H-Bridge Motor Driver</li>
        <li>Servo Motor for Steering</li>
        <li>Joystick Modules for Controller Input</li>
        <li>16x2 LCD Display</li>
        <li>LiPo Battery and Voltage Regulator</li>
        <li>Ultrasonic Sensor</li>
        <li>LEDs, Buzzer, and Electronic Components</li>
        <li>Custom 3D-Printed Parts and RC Car Chassis</li>
        </ul>

        {/* Design and Development */}
        <h2 className="mt-10 text-3xl font-bold text-purple-400">
        Design & Development
        </h2>

        <p className="mt-5 max-w-4xl text-lg leading-relaxed">
        The car uses two ESP32 microcontrollers communicating
        wirelessly through ESP-NOW.

        One ESP32 acts as the handheld controller, reading
        joystick inputs and transmitting commands.

        The second ESP32 receives these commands and controls
        the DC motor speed, driving direction, and servo steering.

        We also integrated additional electronic components
        and developed the firmware to coordinate the system.
        </p>

        {/* Testing */}
        <h2 className="mt-10 text-3xl font-bold text-purple-400">
        Testing & Challenges
        </h2>

        <p className="mt-5 max-w-4xl text-lg leading-relaxed">
        Throughout development, we tested wireless communication,
        motor speed and direction, steering response, and
        power delivery.

        We also worked on improving system reliability by
        troubleshooting motor driver overheating, servo jitter,
        and power-related issues.

        Multiple design improvements were made to ensure
        reliable operation during the final competition.
        </p>

        {/* Results */}
        <h2 className="mt-10 text-3xl font-bold text-purple-400">
        Project Results
        </h2>

        <p className="mt-5 max-w-4xl text-lg leading-relaxed">
        Our team successfully developed a working
        remote-controlled car and achieved 3rd place
        in the ENEL 300 final competition.

        This project strengthened my experience in embedded
        systems, firmware development, circuit integration,
        troubleshooting, and engineering teamwork.
        </p>
      </section>

      {/* Images */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Project Gallery
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

          <img
            src="/projects/rc-car/RC_Car_My_3rd_Place_pic.jpeg"
            alt="My RC Car project - Third Place"
            className="w-full max-w-xs h-auto rounded-xl"
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
          className="mt-6 w-full max-w-md h-auto rounded-xl"
        >
          <source
            src="/projects/rc-car/RC_Car_vid1.mp4"
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