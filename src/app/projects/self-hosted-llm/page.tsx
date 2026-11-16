
import Link from "next/link";

const technologies = [
  "Python",
  "FastAPI",
  "llama.cpp",
  "NVIDIA H100",
  "Qwen",
  "Docker",
  "JWT",
  "SSE",
];

const architecture = [
  {
    name: "Frontend / AI Client",
    detail: "User requests and conversation interface",
  },
  {
    name: "FastAPI Gateway",
    detail: "Authentication, authorization and SSE streaming",
  },
  {
    name: "llama.cpp Inference Server",
    detail: "Qwen model serving and request processing",
  },
  {
    name: "NVIDIA H100",
    detail: "GPU-accelerated model inference",
  },
];

export default function SelfHostedLLMPage() {
  return (
    <main className="min-h-screen bg-[#0B1018] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <Link
          href="/#work"
          className="text-sm text-blue-400 transition hover:text-blue-300"
        >
          ← Back to Projects
        </Link>

        <div className="mt-20">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
            Project 01 / AI Infrastructure
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            Self-Hosted LLM
            <span className="block text-blue-400">
              Platform.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            A GPU-powered language model inference platform
            integrating llama.cpp, a Python FastAPI gateway,
            authenticated requests, and streaming responses
            for AI applications.
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
        </div>

        <section className="mt-24 border-t border-slate-800 pt-14">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            01 / The Challenge
          </p>

          <h2 className="mt-5 text-3xl font-semibold">
            Moving beyond third-party inference APIs.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-slate-400">
            The goal was to explore a self-hosted alternative
            to external LLM providers, with more direct control
            over model deployment, inference configuration,
            API access, and application integration.
          </p>
        </section>

<section className="mt-20 border-t border-slate-800 pt-14">
  <p className="text-sm uppercase tracking-widest text-blue-400">
    02 / System Architecture
  </p>

  <h2 className="mt-5 text-3xl font-semibold text-white">
    From client request to GPU inference.
  </h2>

  <p className="mt-5 max-w-3xl leading-8 text-slate-400">
    A layered architecture separates the client interface,
    authentication gateway, model inference service,
    and GPU compute infrastructure.
  </p>

  <div className="mt-10 overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#172B48] via-[#111E32] to-[#0B1018] p-5 md:p-10">
    <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
        LLM Platform Architecture
      </p>

      <span className="rounded-full border border-slate-600 px-3 py-1 text-xs text-slate-400">
        Documented Architecture
      </span>
    </div>

    <div className="mx-auto max-w-xl">
      <div className="rounded-xl border border-blue-400/40 bg-blue-500/10 p-6 text-center">
        <p className="text-xs uppercase tracking-widest text-blue-300">
          Client Layer
        </p>
        <h3 className="mt-3 text-lg font-semibold text-white">
          Frontend / AI Client
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          Chat interface and user requests
        </p>
      </div>

      <div className="flex flex-col items-center py-3">
        <span className="text-xs text-blue-300">
          Authenticated requests / SSE responses
        </span>
        <span className="mt-1 text-xl text-blue-400">
          ↕
        </span>
      </div>

      <div className="rounded-xl border border-blue-400/40 bg-blue-500/10 p-6 text-center">
        <p className="text-xs uppercase tracking-widest text-blue-300">
          Application Layer
        </p>
        <h3 className="mt-3 text-lg font-semibold text-white">
          FastAPI Gateway
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          SIWE authentication · JWT · SSE streaming
        </p>
      </div>

      <div className="flex flex-col items-center py-3">
        <span className="text-xs text-blue-300">
          Inference API requests / generated responses
        </span>
        <span className="mt-1 text-xl text-blue-400">
          ↕
        </span>
      </div>

      <div className="rounded-xl border border-blue-400/40 bg-blue-500/10 p-6 text-center">
        <p className="text-xs uppercase tracking-widest text-blue-300">
          Inference Layer
        </p>
        <h3 className="mt-3 text-lg font-semibold text-white">
          llama.cpp Inference Server
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          Quantized Qwen GGUF model
        </p>
        <p className="mt-1 text-xs text-blue-300">
          131,072-token configured context
        </p>
      </div>

      <div className="flex justify-center py-3">
        <span className="text-xl text-blue-400">
          ↕
        </span>
      </div>

      <div className="rounded-xl border border-blue-500/30 bg-[#0B1422] p-6 text-center">
        <p className="text-xs uppercase tracking-widest text-blue-300">
          Compute Infrastructure
        </p>
        <h3 className="mt-3 text-lg font-semibold text-white">
          NVIDIA H100 GPU
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          80 GB GPU memory · GPU-accelerated inference
        </p>
      </div>
    </div>

    <div className="mt-10 grid gap-3 border-t border-slate-700/50 pt-6 sm:grid-cols-3">
      {[
        { label: "Authentication", value: "SIWE + JWT" },
        { label: "Response Delivery", value: "SSE Streaming" },
        { label: "Model Runtime", value: "llama.cpp" },
      ].map((item) => (
        <div
          key={item.label}
          className="rounded-lg border border-slate-700/50 bg-[#0B1422] p-4 text-center"
        >
          <p className="text-xs text-slate-400">
            {item.label}
          </p>
          <p className="mt-2 text-sm font-semibold text-blue-300">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  </div>

  <p className="mt-5 text-sm leading-7 text-slate-500">
    Simplified architecture based on the development deployment.
    The GPU is the compute resource used by the inference
    server, not a separate API service. This diagram does
    not represent live infrastructure status.
  </p>
</section>


        <section className="mt-20 border-t border-slate-800 pt-14">
          <p className="text-sm uppercase tracking-widest text-blue-400">
            03 / Engineering Highlights
          </p>

          <h2 className="mt-5 text-3xl font-semibold">
            What I implemented.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Self-Hosted Inference",
                description:
                  "Configured llama.cpp to serve a quantized Qwen language model on NVIDIA H100 infrastructure.",
              },
              {
                title: "Authenticated API Gateway",
                description:
                  "Integrated FastAPI with wallet-based sign-in and JWT-protected application endpoints.",
              },
              {
                title: "Streaming Responses",
                description:
                  "Connected model inference to an SSE-based chat response workflow.",
              },
              {
                title: "Inference Configuration",
                description:
                  "Worked with GPU offloading, context-window configuration, and inference server monitoring.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-800 bg-[#111A27] p-7"
              >
                <h3 className="text-lg font-semibold text-white">
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
            04 / Validation
          </p>

          <h2 className="mt-5 text-3xl font-semibold">
            Tested beyond a single request.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-slate-400">
            The platform was exercised with multi-user chat
            tests, including two-user and six-user scenarios.
            Inference-server monitoring was also used to
            inspect request processing and configured context
            capacity.
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">
            These are development validation results, not
            production uptime or throughput benchmarks.
          </p>
        </section>
        
<section className="mt-20 border-t border-slate-800 pt-14">
  <p className="text-sm uppercase tracking-widest text-blue-400">
    05 / Technical Snapshot
  </p>

  <h2 className="mt-5 text-3xl font-semibold text-white">
    Inside the inference platform.
  </h2>

  <p className="mt-6 max-w-3xl leading-8 text-slate-400">
    A closer look at the infrastructure, inference configuration,
    and API services used during development and testing.
  </p>

  <div className="mt-10 grid gap-5 sm:grid-cols-2">
    {[
      {
        label: "GPU Infrastructure",
        value: "NVIDIA H100",
        detail: "80 GB GPU memory",
      },
      {
        label: "Inference Engine",
        value: "llama.cpp",
        detail: "Self-hosted GGUF model serving",
      },
      {
        label: "Context Configuration",
        value: "131,072 tokens",
        detail: "Configured context capacity, not benchmarked throughput",
      },
      {
        label: "Backend Gateway",
        value: "FastAPI",
        detail: "JWT authentication and SSE streaming",
      },
      {
        label: "Model",
        value: "Qwen",
        detail: "Quantized GGUF deployment",
      },
      {
        label: "Validation",
        value: "Multi-user testing",
        detail: "Two-user and six-user development scenarios",
      },
    ].map((item) => (
      <article
        key={item.label}
        className="rounded-xl border border-slate-800 bg-[#111A27] p-6 transition hover:border-blue-500/40"
      >
        <p className="text-xs uppercase tracking-widest text-blue-400">
          {item.label}
        </p>

        <h3 className="mt-4 text-2xl font-semibold text-white">
          {item.value}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {item.detail}
        </p>
      </article>
    ))}
  </div>
</section>

<section className="mt-20 border-t border-slate-800 pt-14">
  <p className="text-sm uppercase tracking-widest text-blue-400">
    06 / Engineering Decisions
  </p>

  <h2 className="mt-5 text-3xl font-semibold text-white">
    The decisions behind the architecture.
  </h2>

  <p className="mt-6 max-w-3xl leading-8 text-slate-400">
    Building a self-hosted LLM platform involved decisions
    about infrastructure, inference, API design, and
    operational reliability.
  </p>

  <div className="mt-10 space-y-5">
    {[
      {
        title: "01 / Self-Hosted Inference",
        decision: "Run the model on dedicated GPU infrastructure.",
        reason:
          "Gain direct control over model selection, inference configuration, and API integration rather than depending entirely on external inference providers.",
        tradeoff:
          "Requires managing GPU resources, server availability, and infrastructure costs.",
      },
      {
        title: "02 / llama.cpp",
        decision: "Use llama.cpp for quantized GGUF model serving.",
        reason:
          "Support configurable GPU offloading, context settings, and a local inference API.",
        tradeoff:
          "Model quality, memory usage, and latency must be evaluated against the chosen quantization and runtime settings.",
      },
      {
        title: "03 / FastAPI Gateway",
        decision: "Separate application APIs from the inference server.",
        reason:
          "Keep authentication, JWT validation, conversation endpoints, and streaming response handling in a dedicated application layer.",
        tradeoff:
          "Introduces another service to operate and monitor.",
      },
      {
        title: "04 / Context & Performance",
        decision: "Configure a large context window and monitor inference.",
        reason:
          "Support experimentation with longer conversations while inspecting request processing and GPU utilization.",
        tradeoff:
          "A configured 131,072-token context window does not guarantee efficient long-context performance or concurrent throughput.",
      },
    ].map((item) => (
      <article
        key={item.title}
        className="rounded-xl border border-slate-800 bg-[#111A27] p-7 transition hover:border-blue-500/40"
      >
        <h3 className="text-xl font-semibold text-white">
          {item.title}
        </h3>

        <p className="mt-5 text-sm font-medium text-blue-400">
          Decision
        </p>
        <p className="mt-2 leading-7 text-slate-300">
          {item.decision}
        </p>

        <p className="mt-5 text-sm font-medium text-blue-400">
          Rationale
        </p>
        <p className="mt-2 leading-7 text-slate-400">
          {item.reason}
        </p>

        <p className="mt-5 text-sm font-medium text-blue-400">
          Trade-off
        </p>
        <p className="mt-2 leading-7 text-slate-400">
          {item.tradeoff}
        </p>
      </article>
    ))}
  </div>
</section>

<section className="mt-20 border-t border-slate-800 pt-14">
  <p className="text-sm uppercase tracking-widest text-blue-400">
    07 / Development Validation
  </p>

  <h2 className="mt-5 text-3xl font-semibold text-white">
    Testing the inference platform.
  </h2>

  <p className="mt-6 max-w-3xl leading-8 text-slate-400">
    I tested the platform through authenticated chat
    workflows, multi-user scenarios, and inference-server
    monitoring to validate the integration between the
    application gateway and the model-serving backend.
  </p>

  <div className="mt-10 grid gap-5 sm:grid-cols-2">
    {[
      {
        value: "2 users",
        label: "Initial multi-user scenario",
        detail: "Development chat integration test",
      },
      {
        value: "6 users",
        label: "Expanded multi-user scenario",
        detail: "Development chat integration test",
      },
      {
        value: "131,072",
        label: "Configured context tokens",
        detail: "Inference server configuration",
      },
      {
        value: "SSE",
        label: "Streaming response integration",
        detail: "FastAPI gateway to client",
      },
    ].map((item) => (
      <article
        key={item.label}
        className="rounded-xl border border-slate-800 bg-[#111A27] p-7"
      >
        <h3 className="text-3xl font-bold text-white">
          {item.value}
        </h3>

        <p className="mt-3 font-medium text-blue-400">
          {item.label}
        </p>

        <p className="mt-3 text-sm text-slate-400">
          {item.detail}
        </p>
      </article>
    ))}
  </div>

  <p className="mt-6 text-sm leading-7 text-slate-500">
    These results describe development validation scenarios.
    They do not establish production concurrency limits,
    service uptime, or sustained throughput.
  </p>
</section>


        <div className="mt-24 border-t border-slate-800 pt-10">
          <Link
            href="/#work"
            className="text-sm font-medium text-blue-400 hover:text-blue-300"
          >
            ← Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}
