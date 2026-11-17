
export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-5 text-sm uppercase tracking-widest text-blue-400">
          04 / GET IN TOUCH
        </p>

        <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Have a challenging problem?
          <span className="block text-blue-400">
            Let's build something meaningful.
          </span>
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
          I'm interested in opportunities across AI engineering,
          Python backend development, and cloud infrastructure.
          Let's connect and discuss how I can contribute.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:mounikacherukuru@gmail.com"
            className="rounded-lg bg-blue-600 px-7 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Get in Touch ↗
          </a>

          <a
            href="https://github.com/Mounika636"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-700 px-7 py-4 text-sm font-semibold text-white transition hover:border-blue-400"
          >
            GitHub ↗
          </a>


<a
  href="https://www.linkedin.com/in/chmounikacherukuru/"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg border border-slate-700 px-7 py-4 text-sm font-semibold text-white transition hover:border-blue-400"
>
  LinkedIn ↗
</a>


        </div>

        <div className="mt-16 border-t border-slate-800 pt-8">
          <p className="text-sm text-slate-500">
            Open to discussing AI, backend, and cloud engineering opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
