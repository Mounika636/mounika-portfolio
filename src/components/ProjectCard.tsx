import Link from "next/link";
type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  href?: string;
};

export default function ProjectCard({
  number,
  title,
  description,
  technologies,
  category,
  href,
}: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-800 bg-[#111A27] p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 md:p-10">
      <div className="mb-8 flex items-center justify-between">
        <span className="text-sm font-medium text-blue-400">
          {number} / FEATURED PROJECT
        </span>
        <span className="text-xs uppercase tracking-widest text-slate-400">
          {category}
        </span>
      </div>

{/* Project visual panel */}
<div className="relative mb-8 overflow-hidden rounded-xl border border-blue-500/20 bg-gradient-to-br from-[#172B48] via-[#111E32] to-[#0B1018] p-6">
  {number === "01" ? (
    <div className="flex flex-col items-center gap-3 py-4">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
        LLM Inference Architecture
      </span>

      {[
        {
          title: "Frontend / AI Client",
          detail: "User requests",
        },
        {
          title: "FastAPI Gateway",
          detail: "Authentication · JWT · Streaming",
        },
        {
          title: "llama.cpp Inference Server",
          detail: "Qwen · NVIDIA H100",
        },
      ].map((stage, index) => (
        <div key={stage.title} className="flex w-full flex-col items-center gap-3">
          {index > 0 && (
            <span className="text-xl text-blue-400">↓</span>
          )}

          <div className="w-full max-w-sm rounded-lg border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-center">
            <p className="text-sm font-semibold text-white">
              {stage.title}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              {stage.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  
  ) : number === "02" ? (
    <div className="flex flex-col items-center gap-3 py-4">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
        Agentic AI Workflow
      </span>

      {[
        { title: "User Request", detail: "Operational task" },
        { title: "LangGraph Agent", detail: "Workflow orchestration" },
        { title: "MCP Tool Integration", detail: "External tools and APIs" },
        { title: "Agent Response", detail: "Processed result" },
      ].map((stage, index) => (
        <div
          key={stage.title}
          className="flex w-full flex-col items-center gap-3"
        >
          {index > 0 && (
            <span className="text-xl text-blue-400">↓</span>
          )}

          <div className="w-full max-w-sm rounded-lg border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-center">
            <p className="text-sm font-semibold text-white">
              {stage.title}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              {stage.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  
  ) : number === "03" ? (
    <div className="flex flex-col items-center gap-3 py-4">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
        Retrieval-Augmented Generation Pipeline
      </span>

      {[
        {
          title: "Document Processing",
          detail: "Upload · Extract · Chunk",
        },
        {
          title: "Embedding & Indexing",
          detail: "Sentence Transformers · ChromaDB",
        },
        {
          title: "Question & Retrieval",
          detail: "Semantic search · Relevant chunks",
        },
        {
          title: "LLM Answer Generation",
          detail: "Retrieved context · Local LLM",
        },
      ].map((stage, index) => (
        <div
          key={stage.title}
          className="flex w-full flex-col items-center gap-3"
        >
          {index > 0 && (
            <span className="text-xl text-blue-400">↓</span>
          )}

          <div className="w-full max-w-sm rounded-lg border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-center">
            <p className="text-sm font-semibold text-white">
              {stage.title}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              {stage.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  
  ) : number === "04" ? (
    <div className="flex flex-col items-center gap-3 py-4">
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
        Backend Authentication Architecture
      </span>

      {[
        {
          title: "Client Application",
          detail: "Authentication request",
        },
        {
          title: "FastAPI Backend",
          detail: "API routes · Request validation",
        },
        {
          title: "WebAuthn Verification",
          detail: "Challenge · Credential verification",
        },
        {
          title: "Protected API",
          detail: "Authorized application operations",
        },
      ].map((stage, index) => (
        <div
          key={stage.title}
          className="flex w-full flex-col items-center gap-3"
        >
          {index > 0 && (
            <span className="text-xl text-blue-400">↓</span>
          )}

          <div className="w-full max-w-sm rounded-lg border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-center">
            <p className="text-sm font-semibold text-white">
              {stage.title}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              {stage.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  ) : (



    <div className="flex min-h-48 flex-col items-center justify-center gap-5">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {technologies.slice(0, 3).map((technology, index) => (
          <div key={technology} className="flex items-center gap-3">
            {index > 0 && (
              <span className="text-blue-400">→</span>
            )}
            <span className="rounded-lg border border-blue-400/30 bg-blue-500/10 px-4 py-3 text-xs font-medium text-blue-100">
              {technology}
            </span>
          </div>
        ))}
      </div>
      <p className="text-center text-xs uppercase tracking-[0.2em] text-blue-300/70">
        {category}
      </p>
    </div>
  )}
</div>

      {/* Project title */}
      <h3 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h3>

      {/* Project description */}
      <p className="max-w-2xl leading-7 text-slate-400">
        {description}
      </p>

      {/* Technology tags */}
      <div className="mt-8 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-xs text-slate-300"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Project footer */}
      
<div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-800 pt-6">

{number === "01" && (
  <Link
    href="/projects/self-hosted-llm"
    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:gap-3 hover:text-blue-300"
  >
    Explore Case Study <span aria-hidden="true">↗</span>
  </Link>
)}

  {number === "03" && (
    <a
      href="https://github.com/Mounika636/ai-document-assistant"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
    >
      View GitHub Repository ↗
    </a>
  )}

  

{href ? (
  <Link
    href={href}
    className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
  >
    View Case Study ↗
  </Link>
) : number !== "01" ? (
  <span className="text-sm text-slate-500">
    Detailed case study coming soon
  </span>
) : null}


</div>

    </article>
  );
}

