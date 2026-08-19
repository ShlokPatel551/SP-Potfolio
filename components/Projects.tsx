const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  CSS: "#563d7c",
  HTML: "#e34c26",
  C: "#555555",
  "C++": "#f34b7d",
  Assembly: "#6E4C13",
  Shell: "#89e051",
};

type FeaturedProject = {
  name: string;
  repo: string;
  description: string;
  tags: string[];
  language: string;
  highlight?: string;
  caseStudy?: string;
};

const FEATURED: FeaturedProject[] = [
  {
    name: "MailSender",
    repo: "-MailSender",
    description:
      "Multi-source lead scraper for Instagram, LinkedIn, Reddit and Gmail with Google Sheets sync, Telegram daily digests, and a React dashboard. Powers Liffio's outbound engine.",
    tags: ["Python", "Automation", "OAuth", "Playwright"],
    language: "Python",
    highlight: "Production",
    caseStudy: "mailsender",
  },
  {
    name: "Network Packet Sniffer",
    repo: "Network-Packet-Sniffer-and-Analyzer",
    description:
      "Real-time packet capture and analysis tool built with Scapy. Filters by protocol, decodes headers, and surfaces suspicious patterns — a working cybersecurity portfolio piece.",
    tags: ["Python", "Scapy", "Networking", "Security"],
    language: "Python",
    caseStudy: "packet-sniffer",
  },
  {
    name: "Mini OS",
    repo: "Mini-OS-project",
    description:
      "A hand-written x86 bootloader in 512 bytes of Assembly. Loads a kernel from disk and hands off control — a from-scratch dive into low-level systems.",
    tags: ["Assembly", "x86", "OS Dev", "Bootloader"],
    language: "Assembly",
  },
  {
    name: "GIR Rituals",
    repo: "gir-rituals",
    description:
      "Premium dairy-subscription storefront prototype. React + Vite + TypeScript with a clean product catalog, cart, and subscription flow.",
    tags: ["React", "Vite", "TypeScript"],
    language: "TypeScript",
  },
  {
    name: "Instagram Clone",
    repo: "Insta-Clone",
    description:
      "Instagram front-end clone with feed, profile, and stories UI. A practice project exploring modern component architecture and responsive layouts.",
    tags: ["TypeScript", "React", "UI"],
    language: "TypeScript",
  },
  {
    name: "cyber-ai",
    repo: "cyber-ai",
    description:
      "Experimental AI agent tooling for security workflows — automation, prompt scaffolding, and Python glue for cybersecurity tasks.",
    tags: ["Python", "AI", "Security", "Agents"],
    language: "Python",
  },
];

const GITHUB_USER = "ShlokPatel551";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Featured projects
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto text-sm">
            A curated selection across backend, systems, and security. Tap the
            case study icon for a deep dive; otherwise, the whole card opens
            source on GitHub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED.map((project) => (
            <a
              key={project.repo}
              href={
                project.caseStudy
                  ? `/projects/${project.caseStudy}`
                  : `https://github.com/${GITHUB_USER}/${project.repo}`
              }
              {...(!project.caseStudy && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-100 dark:border-white/10 p-6 flex flex-col hover:shadow-lg dark:hover:shadow-blue-500/5 hover:border-blue-200 dark:hover:border-blue-400/40 hover:-translate-y-0.5 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-colors">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  {project.caseStudy && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-500/20">
                      Case study
                    </span>
                  )}
                  {project.highlight && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-500/20">
                      {project.highlight}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-white/5">
                <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor:
                        LANGUAGE_COLORS[project.language] ?? "#8b949e",
                    }}
                  />
                  {project.language}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.caseStudy ? "Read case study →" : "View source ↗"}
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors border border-gray-200 dark:border-white/10 px-5 py-2.5 rounded-full hover:border-gray-300 dark:hover:border-white/20 bg-white dark:bg-white/5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            See everything on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
