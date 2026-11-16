
import Link from "next/link";

export default function OpsAssistantPage() {
  return (
    <main className="min-h-screen bg-[#0B1018] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <Link
          href="/#work"
          className="text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to Projects
        </Link>

        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
            Project 02 / Agentic AI
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            Ops Assistant
            <span className="block text-blue-400">
              Agent.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            An AI-powered operations assistant built with
            LangGraph, Model Context Protocol (MCP), and FastAPI.
            Designed to orchestrate agent workflows and
            integrate external tools for operational tasks.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Python", "LangGraph", "MCP", "FastAPI", "Docker"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-300"
                >
                  {technology}
                </span>
              )
            )}
          </div>
        </section>


<section className="mt-24 border-t border-slate-800 pt-14">
  <p className="text-sm uppercase tracking-widest text-blue-400">
    01 / Agent Workflow
  </p>

  <h2 className="mt-5 text-3xl font-semibold text-white">
    From operational request to tool-assisted response.
  </h2>

  <p className="mt-6 max-w-3xl leading-8 text-slate-400">
    The Ops Assistant uses LangGraph to coordinate agent
    workflows and MCP to integrate external tools.
    FastAPI provides the application interface.
  </p>

  <div className="mt-10 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#172B48] to-[#0B1018] p-6 md:p-10">
    <div className="mx-auto max-w-lg space-y-3">
      {[
        {
          title: "User Request",
          detail: "Operational question or task",
        },
        {
          title: "LangGraph Agent",
          detail: "Reasoning and workflow orchestration",
        },
        {
          title: "MCP Tool Integration",
          detail: "Access to connected tools and APIs",
        },
        {
          title: "Agent Response",
          detail: "Processed result returned to the user",
        },
      ].map((stage, index) => (
        <div
          key={stage.title}
          className="flex flex-col items-center gap-3"
        >
          {index > 0 && (
            <span className="text-xl text-blue-400">
              ↓
            </span>
          )}

          <div className="w-full rounded-xl border border-blue-400/30 bg-blue-500/10 p-5 text-center">
            <h3 className="font-semibold text-white">
              {stage.title}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {stage.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

  <p className="mt-5 text-sm leading-7 text-slate-500">
    Simplified workflow illustrating the agent architecture.
    Tool execution depends on the requested task and
    available integrations.
  </p>
</section>

<section className="mt-20 border-t border-slate-800 pt-14">
  <p className="text-sm uppercase tracking-widest text-blue-400">
    02 / Engineering Highlights
  </p>

  <h2 className="mt-5 text-3xl font-semibold text-white">
    Building an agent that can work with tools.
  </h2>

  <p className="mt-6 max-w-3xl leading-8 text-slate-400">
    The system combines workflow orchestration, external tool
    integration, and backend services to support operational
    requests through an AI-powered assistant.
  </p>

  <div className="mt-10 grid gap-5 md:grid-cols-2">
    {[
      {
        number: "01",
        title: "LangGraph Orchestration",
        description:
          "Structured the agent workflow using LangGraph to coordinate reasoning steps and tool-assisted execution.",
      },
      {
        number: "02",
        title: "MCP Tool Integration",
        description:
          "Integrated the Model Context Protocol to connect the agent with external tools and services.",
      },
      {
        number: "03",
        title: "FastAPI Backend",
        description:
          "Used Python and FastAPI to expose application endpoints and connect client requests to agent workflows.",
      },
      {
        number: "04",
        title: "Containerized Development",
        description:
          "Packaged the agent application with Docker to support reproducible development and deployment workflows.",
      },
    ].map((item) => (
      <article
        key={item.number}
        className="rounded-xl border border-slate-800 bg-[#111A27] p-7 transition hover:border-blue-500/40"
      >
        <span className="text-sm font-medium text-blue-400">
          {item.number}
        </span>

        <h3 className="mt-4 text-xl font-semibold text-white">
          {item.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {item.description}
        </p>
      </article>
    ))}
  </div>
</section>

<section className="mt-20 border-t border-slate-800 pt-14">
  <p className="text-sm uppercase tracking-widest text-blue-400">
    03 / Agent Evaluation
  </p>

  <h2 className="mt-5 text-3xl font-semibold text-white">
    Evaluating agent behavior.
  </h2>

  <p className="mt-6 max-w-3xl leading-8 text-slate-400">
    The agent was evaluated during development using
    a small set of test scenarios to assess its behavior
    and workflow execution.
  </p>

  <div className="mt-10 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-[#172B48] to-[#111A27] p-8 md:p-10">
    <p className="text-xs uppercase tracking-widest text-blue-300">
      Recorded Development Evaluation
    </p>

    <div className="mt-6 flex flex-wrap items-end gap-3">
      <span className="text-6xl font-bold tracking-tight text-white">
        9/10
      </span>
      <span className="pb-2 text-sm text-slate-400">
        Recorded evaluation outcome
      </span>
    </div>

    <div className="mt-8 grid grid-cols-10 gap-2">
      {Array.from({ length: 10 }, (_, index) => (
        <div
          key={index}
          className={`h-3 rounded-full ${
            index < 9 ? "bg-blue-500" : "bg-slate-700"
          }`}
        />
      ))}
    </div>

    <p className="mt-7 text-sm leading-7 text-slate-400">
      This result reflects a limited development evaluation.
      It should not be interpreted as production accuracy,
      reliability, or performance across unseen tasks.
    </p>
  </div>
</section>

      </div>
    </main>
  );
}
