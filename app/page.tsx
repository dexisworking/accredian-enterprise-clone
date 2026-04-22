import { FaqAccordion } from "@/components/faq-accordion";
import { LeadForm } from "@/components/lead-form";
import { SiteHeader } from "@/components/site-header";
import {
  capabilityGroups,
  faqs,
  metrics,
  partnerLogos,
  programTracks,
  proofPoints,
  testimonials,
  workflowSteps,
} from "@/lib/site-data";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-blue)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[var(--surface)] text-slate-950">
      <SiteHeader />

      <main>
        <section
          id="top"
          className="relative overflow-hidden border-b border-black/5 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_32%),linear-gradient(135deg,_#f6fbff_0%,_#ffffff_45%,_#eef4ff_100%)]"
        >
          <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(15,23,42,0.06),transparent)]" />
          <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl gap-14 px-6 pb-16 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-20 lg:pt-32">
            <div className="relative z-10 flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-[var(--line)] bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Enterprise learning partnerships for fast-moving teams
              </div>

              <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
                Workforce upskilling that feels strategic, not transactional.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Recreated as a modern Next.js experience inspired by Accredian
                Enterprise. The page focuses on leadership-ready programs,
                measurable outcomes, and smoother discovery for enterprise
                buyers.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--brand-ink)] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-950"
                >
                  Book a consultation
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
                >
                  Explore programs
                </a>
              </div>

              <dl className="mt-12 grid gap-6 border-t border-black/10 pt-8 sm:grid-cols-3">
                {metrics.slice(0, 3).map((metric) => (
                  <div key={metric.label}>
                    <dt className="text-sm text-slate-500">{metric.label}</dt>
                    <dd className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative flex min-h-[28rem] items-center justify-center lg:min-h-full">
              <div className="hero-orbit absolute h-[34rem] w-[34rem] rounded-full border border-[rgba(30,41,59,0.08)]" />
              <div className="absolute h-[26rem] w-[26rem] rounded-full border border-[rgba(59,130,246,0.18)]" />
              <div className="absolute h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.18),_rgba(255,255,255,0.95)_70%)] blur-[2px]" />

              <div className="relative h-[30rem] w-full max-w-xl">
                <div className="hero-node absolute left-[8%] top-[18%] rounded-3xl bg-white/88 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.1)] backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-blue)]">
                    Leadership
                  </p>
                  <p className="mt-2 max-w-[12rem] text-sm leading-6 text-slate-700">
                    Executive cohorts designed around business priorities.
                  </p>
                </div>

                <div className="hero-node hero-node-delay absolute right-[4%] top-[28%] rounded-[2rem] bg-[var(--brand-ink)] p-5 text-white shadow-[0_24px_60px_rgba(15,23,42,0.24)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                    Learning Ops
                  </p>
                  <p className="mt-2 max-w-[13rem] text-sm leading-6 text-slate-200">
                    Diagnostics, curation, facilitation, and post-program
                    reporting in one flow.
                  </p>
                </div>

                <div className="hero-node hero-node-delay-2 absolute bottom-[18%] left-[12%] rounded-[2rem] border border-[rgba(15,23,42,0.08)] bg-white/92 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-blue)]">
                    Capability map
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700">
                    <span className="rounded-full bg-slate-100 px-3 py-2">
                      AI fluency
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-2">
                      Strategy
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-2">
                      Data
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-2">
                      Leadership
                    </span>
                  </div>
                </div>

                <div className="hero-node hero-node-delay-3 absolute bottom-[10%] right-[8%] rounded-full border border-[rgba(59,130,246,0.2)] bg-white/90 px-5 py-4 text-sm font-medium text-slate-700 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                  Outcome-driven delivery
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label="Partner brands"
          className="border-b border-black/5 bg-white py-6"
        >
          <div className="mx-auto max-w-7xl overflow-hidden px-6 lg:px-10">
            <div className="marquee-track flex min-w-max items-center gap-14 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
              {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                <span key={`${partner}-${index}`}>{partner}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeading
              eyebrow="Why enterprises choose us"
              title="A learning partner built for business context, not off-the-shelf catalogs."
              description="The experience blends discovery, tailored curriculum design, and delivery support so leadership teams can move from capability gaps to measurable execution faster."
            />

            <div className="grid gap-6 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <article
                  key={point.title}
                  className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,_#ffffff,_#f8fbff)] p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
                    {point.kicker}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {point.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="programs" className="bg-[var(--brand-ink)] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Programs"
              title="Built for different moments in the enterprise learning cycle."
              description="From strategic capability design to role-specific cohorts, each track keeps the same premium delivery posture while adapting depth, format, and evaluation."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {programTracks.map((track) => (
                <article
                  key={track.title}
                  className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_18px_45px_rgba(2,6,23,0.2)] backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200">
                    {track.kicker}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    {track.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                    {track.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-200">
                    {track.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeading
              eyebrow="Delivery engine"
              title="A smooth path from problem framing to measurable outcomes."
              description="The layout mirrors enterprise buying behavior: align on outcomes, diagnose the audience, deliver with strong facilitation, then close the loop with reporting and next actions."
            />

            <div className="relative space-y-6">
              <div className="absolute left-5 top-2 hidden h-[calc(100%-1rem)] w-px bg-[linear-gradient(180deg,_rgba(59,130,246,0.45),_rgba(148,163,184,0.15))] sm:block" />
              {workflowSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="group relative rounded-[2rem] border border-[var(--line)] bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex gap-5">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-blue)] text-sm font-semibold text-white">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="bg-[#f7f9fc] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Capability map"
              title="Reusable program architecture across high-priority business themes."
              description="The page is structured to help enterprise visitors scan by capability area instead of reading long generic paragraphs."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {capabilityGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-[2rem] border border-[var(--line)] bg-white p-6"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {group.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Track record"
              title="Signal-rich metrics positioned as trust builders, not filler."
              description="These numbers are mocked for the assignment, but the pattern is ready for real API-backed analytics or CMS-driven proof points."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-[2rem] border border-[var(--line)] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
                >
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                    {metric.label}
                  </p>
                  <p className="mt-4 text-4xl font-semibold tracking-tight text-[var(--brand-blue)]">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {metric.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-[var(--brand-ink)] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Testimonials"
              title="Social proof in a cleaner, more editorial format."
              description="Instead of leaning on busy carousels, this version uses stable blocks that scan quickly on mobile and desktop."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.name}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
                >
                  <p className="text-base leading-8 text-slate-200">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-8 border-t border-white/10 pt-5">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-300">
                      {testimonial.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="FAQ"
              title="Concise answers for common enterprise buying questions."
              description="The accordion is a client component so interactions stay lightweight without turning the whole page into a client-rendered route."
            />

            <FaqAccordion items={faqs} />
          </div>
        </section>

        <section
          id="contact"
          className="border-y border-black/5 bg-[linear-gradient(180deg,_#f9fbff,_#eef4ff)] py-20"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-blue)]">
                Let&apos;s build the program
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Add a lead capture flow without leaving the page.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                This form posts to a mock Next.js API route and returns a success
                state. It is ready to be swapped with CRM, email, or database
                integrations later.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-5">
                  <p className="text-sm font-semibold text-slate-950">
                    API-backed submission
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Client-side fetch to `app/api/leads/route.ts`.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-5">
                  <p className="text-sm font-semibold text-slate-950">
                    Designed for expansion
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Easy to replace with Supabase, HubSpot, Sheets, or internal
                    services.
                  </p>
                </div>
              </div>
            </div>

            <LeadForm />
          </div>
        </section>
      </main>

      <footer
        id="footer"
        className="bg-[var(--brand-ink)] px-6 py-10 text-slate-300 lg:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xl font-semibold text-white">Accredian Enterprise</p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              Partial clone assignment built with Next.js App Router, reusable
              components, Tailwind CSS, and a mock API route for lead capture.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm">
            <a href="#why" className="transition hover:text-white">
              Why us
            </a>
            <a href="#programs" className="transition hover:text-white">
              Programs
            </a>
            <a href="#results" className="transition hover:text-white">
              Results
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
