const education = [
  {
    institution: "University of North America",
    location: "Virginia, USA",
    degree: "Master of Science in Information Technology",
    period: "2024 – 2025",
    current: false,
  },
  {
    institution: "Maharaja Sayajirao University of Baroda",
    location: "Gujarat, India",
    degree: "Bachelor of Computer Applications",
    period: "2019 – 2022",
    current: false,
  },
  {
    institution: "Tejas Vidyalaya",
    location: "Vadodara, Gujarat, India",
    degree: "Higher Secondary (12th) – Commerce",
    period: "2018 – 2019",
    current: false,
  },
  {
    institution: "Tejas Vidyalaya",
    location: "Vadodara, Gujarat, India",
    degree: "Secondary (10th)",
    period: "2016 – 2017",
    current: false,
  },
];

const certifications = [
  { name: "Python Essentials 1", issuer: "Cisco / NetAcad", date: "Aug 2023" },
  { name: "Python Essentials 2", issuer: "Cisco / NetAcad", date: "Aug 2023" },
  { name: "Network Support and Security", issuer: "Cisco / NetAcad", date: "Sep 2023" },
  {
    name: "Network Certified Engineer – Programming, Security & IoT 4.0",
    issuer: "NCEP",
    date: "Feb 2022",
  },
  { name: "CompTIA Network+", issuer: "CompTIA", date: "Apr 2021" },
  { name: "CompTIA A+", issuer: "CompTIA", date: "Jan 2021" },
  { name: "NDG Developing IT Professionals", issuer: "NDG / Cisco", date: "Nov 2020" },
  { name: "IoT Using MicroPython", issuer: "NCEP", date: "Sep 2019" },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-white dark:bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        {/* Education */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
            Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Academic background
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <div className="relative border-l-2 border-gray-100 dark:border-white/10 pl-8 space-y-8">
            {education.map((edu, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <span className="absolute -left-[2.35rem] top-1.5 w-4 h-4 rounded-full border-2 border-blue-400 bg-white dark:bg-[#0a0a0f]" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold text-gray-900 dark:text-white">
                        {edu.institution}
                      </h3>
                      {edu.current && (
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-500/20">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-0.5">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                      {edu.location}
                    </p>
                  </div>
                  <span className="text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap shrink-0">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
            Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Credentials &amp; licenses
          </h2>
          <p className="text-gray-400 dark:text-gray-500 mt-4 text-sm max-w-md mx-auto">
            Industry-recognized certifications in networking, security, and programming.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="border border-gray-100 dark:border-white/10 rounded-2xl p-5 hover:border-blue-100 dark:hover:border-blue-400/40 hover:shadow-sm dark:hover:shadow-blue-500/5 transition-all flex flex-col gap-3 bg-white dark:bg-white/[0.03]"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-blue-500 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                  {cert.name}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {cert.issuer}
                </p>
              </div>
              <p className="text-xs font-medium text-blue-500 dark:text-blue-400">
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
