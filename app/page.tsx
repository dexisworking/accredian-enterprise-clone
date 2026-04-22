import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { LeadForm } from "@/components/lead-form";
import { SiteHeader } from "@/components/site-header";
import {
  accredianEdge,
  audienceGroups,
  capabilityGroups,
  clientLogos,
  faqGroups,
  stats,
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
                Custom corporate training for evolving enterprise teams
              </div>

              <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
                Strategic skill enhancement for high-performing teams.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                A tighter partial clone of Accredian Enterprise, now aligned
                more closely to the original section order, content categories,
                testimonials, FAQs, and delivery language surfaced from the
                scraped reference data and bundle.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--brand-ink)] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-950"
                >
                  Enquire Now
                </a>
                <a
                  href="#cat"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
                >
                  Explore Training Paths
                </a>
              </div>
            </div>

            <div className="relative flex min-h-[28rem] items-center justify-center lg:min-h-full">
              <div className="hero-orbit absolute h-[34rem] w-[34rem] rounded-full border border-[rgba(30,41,59,0.08)]" />
              <div className="absolute h-[26rem] w-[26rem] rounded-full border border-[rgba(59,130,246,0.18)]" />
              <div className="absolute h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,_rgba(59,130,246,0.18),_rgba(255,255,255,0.95)_70%)] blur-[2px]" />

              <div className="relative h-[30rem] w-full max-w-xl">
                <div className="hero-node absolute left-[8%] top-[18%] rounded-3xl bg-white/88 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.1)] backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-blue)]">
                    Program Specific
                  </p>
                  <p className="mt-2 max-w-[12rem] text-sm leading-6 text-slate-700">
                    Certificate, Executive, and Post Graduate Certificate
                    pathways.
                  </p>
                </div>

                <div className="hero-node hero-node-delay absolute right-[4%] top-[28%] rounded-[2rem] bg-[var(--brand-ink)] p-5 text-white shadow-[0_24px_60px_rgba(15,23,42,0.24)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                    Topic Specific
                  </p>
                  <p className="mt-2 max-w-[13rem] text-sm leading-6 text-slate-200">
                    Machine Learning, Design, Analytics, Cybersecurity, and
                    Cloud.
                  </p>
                </div>

                <div className="hero-node hero-node-delay-2 absolute bottom-[18%] left-[12%] rounded-[2rem] border border-[rgba(15,23,42,0.08)] bg-white/92 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-blue)]">
                    Level Specific
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700">
                    <span className="rounded-full bg-slate-100 px-3 py-2">
                      Senior Leadership
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-2">
                      Mid-Career
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-2">
                      Freshers
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-2">
                      Industry Specific
                    </span>
                  </div>
                </div>

                <div className="hero-node hero-node-delay-3 absolute bottom-[10%] right-[8%] rounded-full border border-[rgba(59,130,246,0.2)] bg-white/90 px-5 py-4 text-sm font-medium text-slate-700 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                  Flexible program delivery
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stats" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="text-center">
            <SectionHeading
              eyebrow="Stats"
              title="Our Track Record"
              description="The Numbers Behind Our Success"
            />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {stats.map((metric) => (
              <article
                key={metric.label}
                className="rounded-[2rem] border border-[var(--line)] bg-white p-6 text-center shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
              >
                <p className="text-4xl font-semibold tracking-tight text-[var(--brand-blue)]">
                  {metric.value}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="clients" className="border-y border-black/5 bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center">
              <SectionHeading
                eyebrow="Clients"
                title="Trusted by enterprise teams across industries."
                description="The original site features a compact client proof band. This version uses the same visible brands surfaced from the bundle."
              />
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 rounded-[2rem] border border-[var(--line)] bg-[#fbfdff] p-6 sm:grid-cols-3 lg:grid-cols-6">
              {clientLogos.map((client) => (
                <div
                  key={client.name}
                  className="relative flex h-20 items-center justify-center rounded-2xl bg-white p-4"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain p-4"
                    sizes="160px"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="accredian-edge"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-10"
        >
          <SectionHeading
            eyebrow="Accredian Edge"
            title="Domain-focused training architecture close to the original bundle."
            description="These specialization tiles are taken directly from the source bundle patterns and replace the earlier generic program placeholders."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {accredianEdge.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-[var(--line)] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="cat" className="bg-[#f7f9fc] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="CAT"
              title="Programs categorized by the same four dimensions shown on the source site."
              description="The CSV scrape and original bundle align on these four cards, so this section now follows that reference structure directly."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {capabilityGroups.map((group) => (
                <article
                  key={group.title}
                  className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={group.image}
                      alt={group.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
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
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="overflow-hidden rounded-[2rem] bg-[var(--brand-blue)] text-white shadow-[0_24px_70px_rgba(37,99,235,0.18)]">
            <div className="grid gap-10 px-8 py-10 md:grid-cols-[0.9fr_1.1fr] md:px-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-100">
                  Who Should Join?
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Strategic Skill Enhancement
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {audienceGroups.map((group) => (
                  <article key={group.title} className="rounded-[1.75rem] bg-white/8 p-5">
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-100">
                      {group.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeading
              eyebrow="How It Works"
              title="Delivery steps aligned with the original bundle content."
              description="The source site frames the process around diagnosis, customization, and flexible delivery. This pass now mirrors those step labels and descriptions directly."
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

        <section id="faqs" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="FAQs"
              title="Frequently Asked Questions"
              description="The FAQ now follows the source-site grouping model with tabs for course, delivery, and miscellaneous questions."
            />

            <FaqAccordion groups={faqGroups} />
          </div>
        </section>

        <section
          id="testimonials"
          className="bg-[var(--brand-ink)] py-20 text-white"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <SectionHeading
              eyebrow="Testimonials"
              title="Testimonials from Our Partners"
              description="What Our Clients Are Saying"
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
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="border-y border-black/5 bg-[linear-gradient(180deg,_#f9fbff,_#eef4ff)] py-20"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-blue)]">
                Get the Quote
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Start with a team-level conversation.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                This lead form remains API-backed, but the surrounding section
                copy now better matches the original site’s enquiry intent and
                tone.
              </p>
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
              Partial clone refined with section order, FAQs, testimonials,
              stats, and category patterns extracted from the original site’s
              bundle and scrape output.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm">
            <a href="#stats" className="transition hover:text-white">
              Stats
            </a>
            <a href="#clients" className="transition hover:text-white">
              Clients
            </a>
            <a href="#accredian-edge" className="transition hover:text-white">
              Edge
            </a>
            <a href="#cat" className="transition hover:text-white">
              CAT
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              How It Works
            </a>
            <a href="#faqs" className="transition hover:text-white">
              FAQs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
