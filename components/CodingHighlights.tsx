const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Assembly: "#6E4C13",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

const languageBreakdown = [
  { name: "Python", pct: 42, note: "Backend, automation, data" },
  { name: "TypeScript", pct: 18, note: "Web apps, APIs" },
  { name: "JavaScript", pct: 14, note: "Frontends, scripting" },
  { name: "Assembly", pct: 10, note: "Bootloader, low-level" },
  { name: "HTML", pct: 8, note: "Markup, prototypes" },
  { name: "CSS", pct: 8, note: "Styling systems" },
];

const stats = [
  { value: "16", label: "Public repos" },
  { value: "6+", label: "Languages shipped" },
  { value: "4 yrs", label: "Building on GitHub" },
  { value: "5", label: "Technical domains" },
];

const milestones = [
  {
    title: "Wrote a bootloader in 512 bytes",
    detail:
      "Hand-written x86 boot sector in Assembly that loads a kernel from disk — a from-scratch OS-dev deep dive.",
    tag: "Systems",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    title: "Shipped multi-source lead engine",
    detail:
      "MailSender scrapes leads across Instagram, LinkedIn, Reddit and Gmail, syncs to Google Sheets, and pings Telegram daily. Runs in production for Liffio.",
    tag: "Automation",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Built a real-time packet analyzer",
    detail:
      "Scapy-based sniffer that captures live traffic, decodes protocol headers, and surfaces suspicious patterns.",
    tag: "Security",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2s10 4.477 10 10z"
        />
      </svg>
    ),
  },
  {
    title: "Full-stack across the stack",
    detail:
      "From an Assembly bootloader to a React storefront to a Python API — comfortable moving up and down the stack as the problem demands.",
    tag: "Breadth",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
        />
      </svg>
    ),
  },
];

export default function CodingHighlights() {
  return (
    <section id="coding" className="py-24 px-6 bg-white dark:bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
            GitHub
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Coding highlights
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto text-sm">
            What four years of building on GitHub actually looks like —
            languages, breadth, and the technical wins I&apos;m proud of.
          </p>
        </div>

        {/* Stat row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-gray-100 dark:border-white/10 bg-gradient-to-br from-white to-blue-50/40 dark:from-white/[0.03] dark:to-blue-500/5 p-6 text-center hover:border-blue-200 dark:hover:border-blue-400/40 transition-colors"
            >
              <p className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                {s.value}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5 uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Language breakdown */}
          <div className="lg:col-span-2 rounded-2xl border border-gray-100 dark:border-white/10 p-8 bg-white dark:bg-white/[0.03]">
            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
              Language breakdown
            </p>
            <div className="space-y-4">
              {languageBreakdown.map((lang) => (
                <div key={lang.name}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="flex items-center gap-2 text-gray-800 dark:text-gray-200 font-medium">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            LANGUAGE_COLORS[lang.name] ?? "#8b949e",
                        }}
                      />
                      {lang.name}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 tabular-nums">
                      {lang.pct}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${lang.pct}%`,
                        backgroundColor:
                          LANGUAGE_COLORS[lang.name] ?? "#8b949e",
                      }}
                    />
                  </div>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">
                    {lang.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {milestones.map((m) => (
              <div
                key={m.title}
                className="group rounded-2xl border border-gray-100 dark:border-white/10 p-6 bg-white dark:bg-white/[0.03] hover:border-blue-200 dark:hover:border-blue-400/40 hover:shadow-md dark:hover:shadow-blue-500/5 hover:-translate-y-0.5 transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
                    {m.icon}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-white/10">
                    {m.tag}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 leading-snug">
                  {m.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
