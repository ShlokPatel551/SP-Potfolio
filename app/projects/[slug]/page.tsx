import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CASE_STUDIES, getCaseStudy } from "../case-studies";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return { title: "Case study not found" };
  return {
    title: `${cs.name} — Case study · Shlok Patel`,
    description: cs.tagline,
  };
}

const STATUS_STYLES: Record<string, string> = {
  Production:
    "bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border-green-100 dark:border-green-500/20",
  Prototype:
    "bg-yellow-50 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-100 dark:border-yellow-500/20",
  Personal:
    "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-500/20",
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative px-6 pt-16 pb-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37, 99, 235, 0.08), transparent 70%)",
            }}
          />
          <div className="max-w-3xl mx-auto">
            <Link
              href="/#projects"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 mb-6"
            >
              ← All projects
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <span
                className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${STATUS_STYLES[cs.status]}`}
              >
                {cs.status}
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {cs.timeframe}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
              {cs.name}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {cs.tagline}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={cs.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                View source
              </a>
              {cs.live && (
                <a
                  href={cs.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200 hover:border-gray-300 dark:hover:border-white/20 transition-colors"
                >
                  Live site ↗
                </a>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-6 border-t border-gray-100 dark:border-white/10 pt-8">
              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                  Role
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {cs.role}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                  Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cs.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <article className="px-6 pb-24">
          <div className="max-w-3xl mx-auto space-y-16">
            <Section title="Overview">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {cs.overview}
              </p>
            </Section>

            <Section title="The problem">
              <BulletList items={cs.problem} />
            </Section>

            <Section title="Approach">
              <BulletList items={cs.approach} />
            </Section>

            <Section title="What I built">
              <div className="space-y-4">
                {cs.build.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6"
                  >
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Outcomes">
              <BulletList items={cs.outcomes} tone="success" />
            </Section>

            <Section title="What I learned">
              <BulletList items={cs.learnings} />
            </Section>

            <div className="pt-8 border-t border-gray-100 dark:border-white/10">
              <Link
                href="/#projects"
                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                ← Back to all projects
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}

function BulletList({
  items,
  tone,
}: {
  items: string[];
  tone?: "success";
}) {
  const dotColor =
    tone === "success"
      ? "bg-green-500 dark:bg-green-400"
      : "bg-blue-400 dark:bg-blue-500";
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${dotColor}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
