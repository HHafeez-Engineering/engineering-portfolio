
export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Naviagation Bar */}
      <nav className="flex items-center justify-between px-10 py-6">

        {/* Left Side */}
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-purple-400">
            HH
          </h2>

          <span className="text-xl">
            Huzz Portfolio
          </span>
        </div>

        {/* Right side */}
        <div className="flex gap-8">
          <a href="#home">Home</a>
          <a href="#projects>">Projects</a>
          <a href="#about">About Us</a>
          <a href="#work">Work</a>
          <a href="#Hobbies">Hobbies</a>
          <a href="#Blog">Blog</a>
        </div>
      </nav>


    {/* Main Homepage */}
    <section
      id="home"
      className="grid min-h-[65vh] grid-cols-1 items-center gap-12 px-10 py-16 md:grid-cols-2"
    >

      {/* Left: Introduction */}
      <div>
        <h1 className="text-6xl font-bold">
          Huzaifa
        </h1>

        <h1 className="mt-3 text-6xl font-bold text-purple-400">
          Hafeez
        </h1>

        <div className="mt-8 max-w-md rounded-xl border border-purple-500/40 bg-purple-950/20 p-6">
          <p className="text-lg leading-relaxed">
          I am a third-year Electrical Engineering student at the University of Calgary with a background in Software Development from SAIT. With a strong interest in embedded systems, firmware development, hardware design, and programming, I am moving forward by through building hands-on projects that combine hardware, software and other creative and innovative solutions to real world problems.
          </p>
        </div>
      </div>

      {/* Right: Image */}
      <div className="flex justify-center">
        <div className="flex h-80 w-full max-w-md items-center justify-center rounded-2xl border border-purple-500/40 bg-purple-950/30">
          <p className="text-xl">Your Image Here</p>
        </div>
      </div>

    </section>

    
    {/* Contact Section */}
    <footer
      id="contact"
      className="flex flex-wrap items-center justify-between gap-6 px-10 py-10"
    >
      <h2 className="text-3xl font-bold">
        Contact Me
      </h2>

      <div className="flex flex-wrap gap-6">
        <a href="https://www.facebook.com/huzaifa.hafeez.878943/reels/">Facebook</a>
        <a href="https://www.instagram.com/hafeezhuzaifa20/">Instagram</a>
        <a href="https://www.linkedin.com/in/huzaifahafeez/">LinkedIn</a>
        <a href="https://github.com/">GitHub</a>
      </div>
    </footer>



    </main>
  );
}
