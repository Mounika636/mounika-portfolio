
import Link from "next/link";

export default function TapfolioPage() {
  const technologies = [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "WebAuthn",
    "REST APIs",
    "Backend Engineering",
  ];

  return (
    <main className="min-h-screen bg-[#0B1018] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <Link
          href="/#work"
          className="text-sm text-blue-400 transition hover:text-blue-300"
        >
          ← Back to Projects
        </Link>

        <section className="mt-20">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
            Project 04 / Backend Engineering
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            Tapfolio.
            <span className="mt-2 block text-blue-400">
              Secure Backend Workflows.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            A backend engineering project focused on API
            development, authentication workflows, and
            secure approval processes. The system uses
            Python and FastAPI to organize application
            endpoints and incorporates WebAuthn-related
            credential verification workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-700 px-3 py-1.5 text-xs text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-blue-500/20 bg-[#111A27] p-6">
            <p className="text-sm font-medium text-blue-400">
              Engineering Focus
            </p>

            <p className="mt-3 leading-7 text-slate-300">
              API design, authentication and credential
              handling, request validation, and backend
              workflow reliability.
            </p>
          </div>
        </section>

<section className="mt-24 border-t border-slate-800 pt-14">
  <p className="text-sm uppercase tracking-widest text-blue-400">
    01 / Backend Architecture
  </p>

  <h2 className="mt-5 text-3xl font-semibold text-white">
    Designing secure backend workflows.
  </h2>

  <p className="mt-6 max-w-3xl leading-8 text-slate-400">
    Tapfolio uses a FastAPI-based backend with API routing,
    authentication-related components, approval workflow
    logic, and PostgreSQL-backed application data.
    The diagram below presents a simplified conceptual
    view of these components.
  </p>

  <div className="mt-10 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#172B48] to-[#0B1018] p-6 md:p-10">
    <div className="mx-auto max-w-lg space-y-3">
      {[
        {
          title: "Client Application",
          detail: "Requests to backend API endpoints",
        },
        {
          title: "FastAPI Backend",
          detail: "API routing and request validation",
        },
        {
          title: "Authentication & Approval",
          detail: "WebAuthn-related verification and workflow logic",
        },
        {
          title: "PostgreSQL",
          detail: "Application data persistence",
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
    Simplified component overview, not an exhaustive
    representation of authentication or database
    transaction flows.
  </p>
</section>

<section className="mt-20 border-t border-slate-800 pt-14">
  <p className="text-sm uppercase tracking-widest text-blue-400">
    02 / Engineering Decisions
  </p>

  <h2 className="mt-5 text-3xl font-semibold text-white">
    Building reliable backend workflows.
  </h2>

  <p className="mt-6 max-w-3xl leading-8 text-slate-400">
    Tapfolio brings together API routing, credential
    verification, approval workflows, and data persistence.
    These components require clear responsibilities and
    careful handling of application state.
  </p>

  <div className="mt-10 grid gap-5 md:grid-cols-2">
    {[
      {
        number: "01",
        title: "FastAPI Architecture",
        decision: "Organize backend functionality using API routers.",
        detail:
          "Separate route handlers and related application logic to make backend endpoints easier to understand, maintain, and test.",
      },
      {
        number: "02",
        title: "WebAuthn Integration",
        decision: "Handle credential-based authentication workflows.",
        detail:
          "Work with authentication challenges, credential models, and verification responses as part of the backend authentication flow.",
      },
      {
        number: "03",
        title: "Approval Workflows",
        decision: "Keep approval operations and validation explicit.",
        detail:
          "Structure approval endpoints around request validation, authorization checks, and controlled changes to application state.",
      },
      {
        number: "04",
        title: "Database Operations",
        decision: "Consider transaction boundaries and data consistency.",
        detail:
          "Review how PostgreSQL-backed operations interact with approval workflows, particularly when multiple related changes must be coordinated.",
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

        <p className="mt-4 text-sm font-medium text-blue-300">
          {item.decision}
        </p>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          {item.detail}
        </p>
      </article>
    ))}
  </div>
</section>

      </div>
    </main>
  );
}
