import profilePic from "../assets/headshot.png";

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-[280px_1fr]">
        <div className="flex justify-center md:justify-start">
          <div className="rounded-full bg-[#CFB991] p-2 shadow-lg">
            <img
              src={profilePic}
              alt="Iram Azam"
              className="h-56 w-56 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>

        <div className="max-w-4xl">
          <p className="mb-4 font-semibold text-[#8E6F3E]">
            Software Engineer • AI Researcher
          </p>

          <h1 className="mb-6 text-6xl font-extrabold">Iram Azam</h1>

          <p className="mb-6 max-w-3xl text-xl leading-relaxed text-[#555960]">
            Building AI-powered healthcare, data, and software solutions through
            LLMs, NLP, machine learning, full-stack engineering, and
            user-centered design.
          </p>

          <p className="mb-8 text-lg text-[#555960]">
            2+ years industry experience • 3 peer-reviewed publications •
            Master's 4.0 GPA
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-black px-6 py-3 text-white transition hover:bg-[#8E6F3E]"
            >
              Resume
            </a>

            <a
              href="https://github.com/iramazam3"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#CFB991] bg-white px-6 py-3 transition hover:bg-[#EBD99F]/40"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/iramazam/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#CFB991] bg-white px-6 py-3 transition hover:bg-[#EBD99F]/40"
            >
              LinkedIn
            </a>

            <a
              href="mailto:iramazam35@gmail.com"
              className="rounded-lg border border-[#CFB991] bg-white px-6 py-3 transition hover:bg-[#EBD99F]/40"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
