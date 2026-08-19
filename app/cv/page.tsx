import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV · Shlok Patel",
  description:
    "Full CV for Shlok Patel — IT professional with hands-on experience in systems administration, network infrastructure, and Python-based automation.",
};

const skillGroups: { label: string; items: string }[] = [
  {
    label: "Networking",
    items:
      "TCP/IP, DNS, DHCP, VPN, VLANs, routing and switching, firewall configuration, network troubleshooting",
  },
  {
    label: "Scripting & Development",
    items:
      "Python (automation, scripting), Bash, back-end development, Android development",
  },
  {
    label: "Systems & Infrastructure",
    items:
      "Server administration, deployment automation, system monitoring, backup and recovery, patch management",
  },
  {
    label: "Security",
    items: "Network security fundamentals, access control, security compliance documentation",
  },
  {
    label: "Data",
    items: "Excel (advanced formulas, reporting), data analysis, Google Workspace",
  },
];

const experience = [
  {
    role: "Software Development Engineer & Systems Administrator",
    company: "Sunrise Wholesalers Inc.",
    location: "New Jersey, USA",
    period: "November 2025 – Present",
    bullets: [
      "Administer production servers and supporting network infrastructure, maintaining uptime and security across business-critical systems.",
      "Build Python automation for deployment, monitoring, and routine maintenance to reduce manual intervention.",
      "Design, develop, and maintain internal software systems and applications supporting daily operations.",
      "Diagnose and resolve hardware, software, and networking issues as first-line technical owner.",
      "Maintain system documentation and security compliance records; collaborate cross-functionally on reliability and scalability.",
    ],
  },
  {
    role: "Intern — Digital Media & Technical Support",
    company: "Dev Infotech",
    location: "Vadodara, Gujarat, India",
    period: "June 2019",
    bullets: [
      "Provided technical support to customers, diagnosing and resolving website and hosting issues.",
      "Registered and managed domain names and web hosting accounts; repaired site functionality faults and optimized UI/UX.",
      "Produced monthly Excel reports using advanced formulas to surface data trends for internal stakeholders.",
      "Managed content and market research across social platforms (Pinterest, Facebook, Instagram) to support content strategy.",
    ],
  },
];

const education = [
  {
    school: "University of North America",
    location: "Virginia, USA",
    degree: "M.S. Information Technology",
    period: "2024 – 2025",
  },
  {
    school: "Maharaja Sayajirao University of Baroda",
    location: "Gujarat, India",
    degree: "B.C.A. Computer Applications",
    period: "2019 – 2022",
  },
];

const certifications = [
  { name: "CompTIA Network+", date: "Apr 2021" },
  { name: "CompTIA A+", date: "Jan 2021" },
  { name: "Cisco Network Support and Security", date: "Sep 2023" },
  {
    name: "Network Certified Engineer: Programming, Security, IoT 4.0",
    date: "Feb 2022",
  },
  { name: "Python Essentials 1 & 2", date: "Aug 2023" },
  { name: "NDG Developing IT Professionals", date: "Nov 2020" },
  { name: "IoT Using MicroPython", date: "Sep 2019" },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
        {title}
      </h2>
      <div className="border-t border-gray-200 dark:border-white/10 pt-5">
        {children}
      </div>
    </section>
  );
}

export default function CVPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="relative px-6 pt-12 pb-8 overflow-hidden">
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
              href="/"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 mb-6"
            >
              ← Back to home
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-2">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Shlok Patel
                </h1>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                  IT Professional · Systems Administration · Automation
                </p>
              </div>
              <a
                href="/Shlok-Patel-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 shadow-sm transition-colors whitespace-nowrap"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                Download PDF
              </a>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400 mt-4 border-t border-gray-100 dark:border-white/10 pt-4">
              <span>2015 Oak Tree Rd, Edison, NJ 08820</span>
              <a
                href="tel:+17329831148"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                (732) 983-1148
              </a>
              <a
                href="mailto:shlokpatel1020@gmail.com"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                shlokpatel1020@gmail.com
              </a>
              <a
                href="https://github.com/ShlokPatel551"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                github.com/ShlokPatel551
              </a>
            </div>
          </div>
        </section>

        <article className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <Section title="Summary">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                IT professional with hands-on experience in systems
                administration, network infrastructure, and Python-based
                automation. CompTIA A+ and Network+ certified, holding an M.S.
                in Information Technology. Experienced supporting production
                servers and troubleshooting across hardware, software, and
                networking layers. Seeking a systems administration, IT support
                engineering, or network operations role.
              </p>
            </Section>

            <Section title="Technical Skills">
              <dl className="space-y-3">
                {skillGroups.map((g) => (
                  <div
                    key={g.label}
                    className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-x-4 gap-y-0.5"
                  >
                    <dt className="text-sm font-semibold text-gray-900 dark:text-white">
                      {g.label}
                    </dt>
                    <dd className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {g.items}
                    </dd>
                  </div>
                ))}
              </dl>
            </Section>

            <Section title="Professional Experience">
              <div className="space-y-6">
                {experience.map((job) => (
                  <div key={job.company}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                          {job.role}
                        </h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                          {job.company} · {job.location}
                        </p>
                      </div>
                      <span className="text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap shrink-0">
                        {job.period}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {job.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Education">
              <div className="space-y-3">
                {education.map((e) => (
                  <div
                    key={e.school}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {e.school}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {e.degree} · {e.location}
                      </p>
                    </div>
                    <span className="text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap shrink-0">
                      {e.period}
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Certifications">
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {certifications.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-baseline justify-between gap-3 text-sm"
                  >
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {c.name}
                    </span>
                    <span className="text-gray-400 dark:text-gray-500 whitespace-nowrap shrink-0">
                      {c.date}
                    </span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
