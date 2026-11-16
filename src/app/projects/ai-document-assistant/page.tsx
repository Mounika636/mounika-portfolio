
import Link from "next/link";

export default function AIDocumentAssistantPage() {
  const technologies = [
    "Python",
    "FastAPI",
    "RAG",
    "ChromaDB",
    "Sentence Transformers",
    "Streamlit",
    "Ollama",
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
            Project 03 / Retrieval-Augmented Generation
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            AI Document
            <span className="block text-blue-400">
              Assistant.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            A document intelligence application that combines
            semantic search with local language models to answer
            questions using uploaded documents. Built with a
            Python FastAPI backend, ChromaDB vector storage,
            Sentence Transformers embeddings, and a Streamlit
            user interface.
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

          <div className="mt-12">
            <a
              href="https://github.com/Mounika636/ai-document-assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg border border-blue-500/40 px-5 py-3 text-sm font-medium text-blue-300 transition hover:bg-blue-500/10"
            >
              View GitHub Repository ↗
            </a>
          </div>
        </section>

<section className="mt-24 border-t border-slate-800 pt-14">
  <p className="text-sm uppercase tracking-widest text-blue-400">
    01 / RAG System Architecture
  </p>

  <h2 className="mt-5 text-3xl font-semibold text-white">
    From document upload to grounded answers.
  </h2>

  <p className="mt-6 max-w-3xl leading-8 text-slate-400">
    The application processes uploaded documents, converts
    extracted text into embeddings, and stores them in
    ChromaDB. When a user asks a question, relevant content
    is retrieved and provided to a local language model
    to generate a context-aware answer.
  </p>

  <div className="mt-10 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#172B48] to-[#0B1018] p-6 md:p-10">
    <div className="mx-auto max-w-lg space-y-3">
      {[
        {
          title: "Document Upload",
          detail: "PDF and supported document files",
        },
        {
          title: "Document Processing",
          detail: "Text extraction and chunking",
        },
        {
          title: "Embedding Generation",
          detail: "Sentence Transformers",
        },
        {
          title: "Vector Storage",
          detail: "ChromaDB",
        },
        {
          title: "Question & Retrieval",
          detail: "Semantic similarity search",
        },
        {
          title: "Local LLM",
          detail: "Ollama / Qwen",
        },
        {
          title: "Generated Answer",
          detail: "Response using retrieved document context",
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
    Simplified RAG architecture. Document indexing and
    question answering are separate workflows that share
    the vector database.
  </p>
</section>

<section className="mt-20 border-t border-slate-800 pt-14">
  <p className="text-sm uppercase tracking-widest text-blue-400">
    02 / Engineering Decisions
  </p>

  <h2 className="mt-5 text-3xl font-semibold text-white">
    The engineering behind document intelligence.
  </h2>

  <p className="mt-6 max-w-3xl leading-8 text-slate-400">
    Building a retrieval-augmented generation system
    involves decisions about document processing,
    embedding models, retrieval infrastructure,
    and language model integration.
  </p>

  <div className="mt-10 grid gap-5 md:grid-cols-2">
    {[
      {
        number: "01",
        title: "Document Processing",
        decision: "Extract and chunk document content.",
        detail:
          "Used PyMuPDF and Python-based chunking to prepare document text for semantic indexing.",
      },
      {
        number: "02",
        title: "Semantic Embeddings",
        decision: "Use Sentence Transformers.",
        detail:
          "Generated vector representations of document chunks to support semantic similarity search.",
      },
      {
        number: "03",
        title: "Vector Database",
        decision: "Use ChromaDB.",
        detail:
          "Stored document embeddings in a vector database for retrieval of relevant content during question answering.",
      },
      {
        number: "04",
        title: "Local LLM Integration",
        decision: "Use Ollama for local inference.",
        detail:
          "Integrated a local language model workflow to generate answers using retrieved document context.",
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

<section className="mt-20 border-t border-slate-800 pt-14">
  <p className="text-sm uppercase tracking-widest text-blue-400">
    03 / Testing & Validation
  </p>

  <h2 className="mt-5 text-3xl font-semibold text-white">
    Testing the RAG pipeline.
  </h2>

  <p className="mt-6 max-w-3xl leading-8 text-slate-400">
    Automated tests were used during development to check
    document chunking, embeddings, vector storage, LLM
    integration, and API behavior.
  </p>

  <div className="mt-10 grid gap-5 sm:grid-cols-2">
    {[
      {
        value: "6/6",
        label: "Document Chunking",
        detail: "Recorded test results",
      },
      {
        value: "3/3",
        label: "Embedding Generation",
        detail: "Recorded test results",
      },
      {
        value: "3/3",
        label: "Vector Store",
        detail: "Recorded test results",
      },
      {
        value: "7/8",
        label: "API Endpoint Tests",
        detail: "One test required further investigation",
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

  <div className="mt-8 rounded-xl border border-blue-500/20 bg-blue-500/5 p-6">
    <p className="text-sm font-semibold text-blue-300">
      Historical Full Test Run
    </p>

    <p className="mt-3 text-2xl font-semibold text-white">
      23 tests passed
    </p>

    <p className="mt-3 text-sm leading-7 text-slate-400">
      A previous full test run reported 23 passing tests
      and one warning. These figures are historical
      development results and should be refreshed against
      the latest repository before publication.
    </p>
  </div>
</section>

      </div>
    </main>
  );
}
