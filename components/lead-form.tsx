"use client";

import { FormEvent, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  company: "",
  teamSize: "",
  goals: "",
};

export function LeadForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "Something went wrong.");
      }

      setStatus("success");
      setMessage(data.message ?? "Thanks, we will be in touch soon.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Unable to submit the form.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[var(--line)] bg-white p-6 shadow-[0_20px_55px_rgba(15,23,42,0.08)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Full name
          <input
            required
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            className="rounded-2xl border border-[var(--line-strong)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-blue)]"
            placeholder="Aarav Sharma"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Work email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
            className="rounded-2xl border border-[var(--line-strong)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-blue)]"
            placeholder="team@company.com"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Company
          <input
            required
            value={form.company}
            onChange={(event) =>
              setForm((current) => ({ ...current, company: event.target.value }))
            }
            className="rounded-2xl border border-[var(--line-strong)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-blue)]"
            placeholder="Northstar Systems"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
          Team size
          <select
            required
            value={form.teamSize}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                teamSize: event.target.value,
              }))
            }
            className="rounded-2xl border border-[var(--line-strong)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-blue)]"
          >
            <option value="">Select team size</option>
            <option value="25-100">25-100</option>
            <option value="100-500">100-500</option>
            <option value="500-2000">500-2000</option>
            <option value="2000+">2000+</option>
          </select>
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-2 text-sm font-medium text-slate-700">
        Learning goals
        <textarea
          required
          rows={5}
          value={form.goals}
          onChange={(event) =>
            setForm((current) => ({ ...current, goals: event.target.value }))
          }
          className="rounded-[1.5rem] border border-[var(--line-strong)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-blue)]"
          placeholder="Tell us about the audience, business goals, and timelines."
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-full bg-[var(--brand-blue)] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--brand-blue-deep)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Submitting..." : "Request a proposal"}
        </button>

        <p
          className={`text-sm ${
            status === "error" ? "text-rose-600" : "text-slate-600"
          }`}
        >
          {message || "Average response time: within 1 business day."}
        </p>
      </div>
    </form>
  );
}
