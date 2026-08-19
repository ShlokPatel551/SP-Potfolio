const interests = [
  "Cybersecurity",
  "IoT Innovations",
  "AI Development",
  "Open-Source Projects",
  "Cloud Computing",
  "Hiking",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
              About me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-snug">
              Engineering student. Builder. Problem solver.
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              <p>
                I&apos;m an IT professional holding a Master of Science in
                Information Technology from the University of North America,
                Virginia. CompTIA A+ and Network+ certified, I bring hands-on
                experience in systems administration, network infrastructure,
                and Python-based automation.
              </p>
              <p>
                At Sunrise Wholesalers Inc., I design and maintain software
                systems, manage servers and network infrastructure, and
                implement automation tools that keep critical operations running
                smoothly. I care deeply about security, reliability, and
                scalable architecture.
              </p>
              <p>
                I&apos;m a strong team player who thrives in dynamic environments —
                adept at multitasking, solving complex problems, and
                communicating clearly across teams.
              </p>
            </div>

            {/* Interests */}
            <div className="mt-8">
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-xs px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="mailto:shlokpatel1020@gmail.com"
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Email me →
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-blue-100 dark:border-blue-400/20">
                <img
                  src="/Sap.png"
                  alt="Shlok Patel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 w-40 h-40 -z-10 opacity-100 dark:opacity-30"
                style={{
                  backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-gray-200 dark:border-white/10 pt-16">
          {[
            { value: "12+", label: "Certifications & badges" },
            { value: "15+", label: "Projects shipped" },
            { value: "MS IT", label: "Recently completed" },
            { value: "NJ, USA", label: "Based in" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
