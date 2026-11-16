import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import About from "@/components/About";
import ProjectCard from "@/components/ProjectCard";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1018] text-white">
      {/* Navigation */}
      
{/* Navigation */}
<nav className="sticky top-0 z-50 mx-auto flex max-w-6xl items-center justify-between border-b border-slate-800/60 bg-[#0B1018]/95 px-6 py-5 backdrop-blur-xl">
  <a href="#" className="text-xl font-bold tracking-tight">
    MOUNIKA<span className="text-blue-500">.</span>
  </a>

  {/* Desktop Navigation */}
  <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
    <a href="#work" className="transition-colors hover:text-blue-400">
      Projects
    </a>

    <a href="#about" className="transition-colors hover:text-blue-400">
      About
    </a>

    <a href="#experience" className="transition-colors hover:text-blue-400">
      Experience
    </a>

    <a href="#contact" className="transition-colors hover:text-blue-400">
      Contact
    </a>
  </div>

  {/* Mobile Navigation */}
  <details className="group relative md:hidden">
    <summary
      className="flex cursor-pointer list-none items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 [&::-webkit-details-marker]:hidden"
      aria-label="Toggle navigation menu"
    >
      Menu
      <span className="text-blue-400 transition-transform group-open:rotate-180">
        ▾
      </span>
    </summary>

    <div className="absolute right-0 top-full mt-3 flex w-44 flex-col gap-1 rounded-xl border border-slate-700 bg-[#111A27] p-2 shadow-xl">
      <a href="#work" className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800">
        Projects
      </a>

      <a href="#about" className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800">
        About
      </a>

      <a href="#experience" className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800">
        Experience
      </a>

      <a href="#contact" className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800">
        Contact
      </a>
    </div>
  </details>
</nav>


      {/* Hero */}
      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-20">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400">
            AI / Backend / Cloud Engineering
          </p>
        </div>

        
<h1 className="max-w-5xl text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl md:text-7xl">

          Engineering AI systems.
          <br />
          <span className="text-blue-400">
            From prototype to production.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-400">
          I'm Mounika Cherukuru. I build intelligent applications,
          reliable Python backend services, and cloud-native
          infrastructure for real-world AI systems.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-lg bg-blue-600 px-7 py-3 font-medium transition hover:bg-blue-500"
          >
            Explore My Work ↗
          </a>

          <a
            href="https://github.com/Mounika636"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-7 py-3 font-medium transition hover:border-gray-400"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      {/* Temporary project destination */}
      
<section
  id="work"
  className="border-t border-gray-800 py-24"
>
  <div className="mx-auto max-w-6xl px-6">
    <p className="mb-4 text-sm uppercase tracking-widest text-blue-400">
      01 / Selected Work
    </p>

    <h2 className="text-4xl font-semibold text-white">
      Projects that solve real problems.
    </h2>

    <p className="mt-4 max-w-2xl text-gray-400">
      Self-hosted LLMs, AI agents, RAG systems,
      and backend engineering.
    </p>

    <div className="mt-12 flex flex-col gap-8">
      <ProjectCard
        number="01"
        title="Self-Hosted LLM Platform"
        category="AI Infrastructure"
        description="Built a self-hosted large language model inference platform using NVIDIA H100 GPU infrastructure, llama.cpp, and Python FastAPI. Integrated streaming responses, authentication, and an API gateway to support AI-powered applications."
        technologies={[
          "Python",
          "FastAPI",
          "NVIDIA H100",
          "llama.cpp",
          "Docker",
          "LLM Inference",
        ]}
        
      />
    </div>



<ProjectCard
  number="02"
  title="Ops Assistant Agent"
  
  category="Agentic AI"
  description="Developed an AI-powered operations assistant using LangGraph, MCP, and FastAPI. Designed agent workflows that integrate external tools, process operational requests, and support automated decision-making."
  technologies={[
    "Python",
    "LangGraph",
    "MCP",
    "FastAPI",
    "AI Agents",
    "Docker",
  ]}
  href="/projects/ops-assistant"
/>

<ProjectCard
  number="03"

href="/projects/ai-document-assistant"

  title="AI Document Assistant"
  category="Retrieval-Augmented Generation"
  description="Built a document intelligence application that processes uploaded files, generates vector embeddings, retrieves relevant content using ChromaDB, and answers questions through a local LLM."
  technologies={[
    "Python",
    "FastAPI",
    "RAG",
    "ChromaDB",
    "Sentence Transformers",
    "Streamlit",
  ]}
/>

<ProjectCard
  number="04"
  title="Tapfolio"

href="/projects/tapfolio"

  category="Backend Engineering"
  description="Developing a backend-focused application with API workflows, authentication, and WebAuthn-related security features."
  technologies={[
    "Python",
    "FastAPI",
    "Authentication",
    "WebAuthn",
    "Backend APIs",
  ]}
/>

  </div>
</section>


<About />
<Experience />
<Contact />


      <footer
        
        className="border-t border-gray-800 px-6 py-8 text-center text-sm text-gray-500"
      >
        © 2026 Mounika Cherukuru. Built with Next.js.
      </footer>
    </main>
  );
}
