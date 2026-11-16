
export default function About() {
  const expertise = [
    {
      number: "01",
      title: "AI & LLM Engineering",
      description:
        "Building retrieval-augmented generation systems, AI agents, and self-hosted LLM applications.",
      skills: ["RAG", "LangGraph", "MCP", "LLMs"],
    },
    {
      number: "02",
      title: "Python Backend Engineering",
      description:
        "Developing reliable backend services, REST APIs, authentication workflows, and application integrations.",
      skills: ["Python", "FastAPI", "REST APIs", "PostgreSQL"],
    },
    {
      number: "03",
      title: "Cloud & DevOps",
      description:
        "Working with containerized applications, cloud infrastructure, CI/CD pipelines, and deployment automation.",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
  ];

  return (
    <section id="about" className="border-t border-slate-800 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-sm uppercase tracking-widest text-blue-400">
          02 / About Me
        </p>

        <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
          I build the intelligence,
          <span className="text-blue-400"> and the infrastructure behind it.</span>
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          I'm Mounika Cherukuru, a software engineer focused on
          applied AI, Python backend development, and cloud-native
          infrastructure. I enjoy transforming complex engineering
          challenges into practical applications, from intelligent
          document assistants and autonomous agents to GPU-powered
          language model platforms.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {expertise.map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-slate-800 bg-[#111A27] p-7 transition hover:border-blue-500/40"
            >
              <span className="text-sm font-medium text-blue-400">
                {item.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                  >
                    {skill}
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
