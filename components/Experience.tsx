const experiences = [
  {
    company: "Liffio Pvt. Ltd.",
    location: "Remote",
    role: "Chief Financial Officer (CFO)",
    period: "2025 – Present",
    current: true,
    bullets: [
      "Oversee all financial operations, budgeting, and forecasting for a growing Instagram DM automation SaaS platform.",
      "Drive financial strategy and resource allocation to support product growth, affiliate programs, and agency expansion.",
      "Manage revenue reporting, subscription billing reconciliation, and investor-ready financial statements.",
      "Establish financial controls, cost optimization frameworks, and pricing models across subscription tiers.",
      "Collaborate with founding team on go-to-market financial planning and partnership deal structuring.",
    ],
  },
  {
    company: "Sunrise Wholesalers Inc.",
    location: "New Jersey, USA",
    role: "Software Development Engineer (SDE) & Systems Administrator",
    period: "November 2025 – Present",
    current: true,
    bullets: [
      "Design, develop, and maintain software systems and applications powering business operations.",
      "Manage servers, networks, and system infrastructure to ensure uptime, performance, and security.",
      "Implement automation tools for deployment, monitoring, and maintenance workflows.",
      "Collaborate with cross-functional teams to ensure system reliability and scalability.",
      "Troubleshoot hardware, software, and networking issues under time-sensitive conditions.",
      "Maintain system documentation and enforce security compliance standards.",
    ],
  },
  {
    company: "Dev Infotech",
    location: "Vadodara, Gujarat, India",
    role: "Intern – Digital Media & Technical Support",
    period: "June 2019",
    current: false,
    bullets: [
      "Responded professionally to customer inquiries and provided tailored technical solutions.",
      "Managed and created content across social media platforms including Pinterest, Facebook, and Instagram.",
      "Conducted market research and trend analysis to support content strategy and business decisions.",
      "Generated monthly Excel reports with advanced formulas and data trend analysis.",
      "Registered domain names, maintained web hosting accounts, and repaired website functionality issues.",
      "Optimized UI/UX and supported recruitment processes through cross-team collaboration.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Professional work history
          </h2>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-100 dark:border-white/10 p-8 hover:shadow-sm dark:hover:border-white/20 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {exp.company}
                    </h3>
                    {exp.current && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-500/20">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-base font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                    {exp.role}
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-0.5">
                    {exp.location}
                  </p>
                </div>
                <span className="text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap shrink-0 font-medium">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2.5">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
