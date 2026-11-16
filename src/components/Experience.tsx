
const experiences = [
  {
    company: "Perfect Solutions",
    role: "AI DevOps Engineer",
    period: "Dec 2025 — Present",
    description:
      "Working across AI infrastructure, Python backend services, deployment workflows, and infrastructure operations.",
    technologies: [
      "Python",
      "FastAPI",
      "Docker",
      "Linux",
      "AI Infrastructure",
    ],
  },
  {
    company: "Gomi App",
    role: "AI DevOps Engineer",
    period: "Jul 2024 — Dec 2025",
    description:
      "Worked on application engineering, backend integrations, development workflows, and deployment-related engineering tasks.",
    technologies: [
      "Python",
      "Backend APIs",
      "Git",
      "DevOps",
    ],
  },
  {
    company: "HCL Technologies",
    role: "Graduate Trainee Engineer",
    period: "Sep 2022 — Feb 2023",
    description:
      "Gained foundational experience in software engineering, technical problem-solving, and enterprise development practices.",
    technologies: [
      "Software Engineering",
      "Problem Solving",
      "Enterprise IT",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-slate-800 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-sm uppercase tracking-widest text-blue-400">
          03 / Professional Experience
        </p>

        <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Where I've worked.
        </h2>

        <p className="mt-6 max-w-2xl text-slate-400">
          My professional journey across AI engineering,
          backend development, and infrastructure.
        </p>

        <div className="mt-14 space-y-6">
          {experiences.map((experience, index) => (
            <article
              key={experience.company}
              className="rounded-2xl border border-slate-800 bg-[#111A27] p-7 transition hover:border-blue-500/40 md:p-9"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <span className="text-sm font-medium text-blue-400">
                    0{index + 1} / EXPERIENCE
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    {experience.role}
                  </h3>

                  <p className="mt-2 text-lg text-slate-300">
                    {experience.company}
                  </p>
                </div>

                <span className="text-sm text-slate-400">
                  {experience.period}
                </span>
              </div>

              <p className="mt-6 max-w-3xl leading-7 text-slate-400">
                {experience.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
