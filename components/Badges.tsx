import Image from "next/image";

const courses = [
  {
    name: "Introduction to Packet Tracer",
    type: "Certificate",
    date: "Jan 2024",
    category: "Networking",
    img: "https://images.credly.com/images/09b6d58c-763a-4b40-aea1-787d8f46bbcd/Intro2PT.png",
    credly: "https://www.credly.com/org/cisco/badge/introduction-to-packet-tracer",
  },
  {
    name: "Cyber Threat Management",
    type: "Badge",
    date: "Sep 2023",
    category: "Cybersecurity",
    img: "https://images.credly.com/images/5d5ac32b-d239-42b8-9665-8a921dc3ab47/image.png",
    credly: "https://www.credly.com/org/cisco/badge/cyber-threat-management",
  },
  {
    name: "Network Support and Security",
    type: "Badge",
    date: "Sep 2023",
    category: "Networking",
    img: "https://images.credly.com/images/a4dd891f-7bf5-4938-8241-50dc81e8cc00/image.png",
    credly: "https://www.credly.com/org/cisco/badge/network-support-and-security",
  },
  {
    name: "Introduction to Cybersecurity",
    type: "Badge",
    date: "Sep 2023",
    category: "Cybersecurity",
    img: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
    credly: "https://www.credly.com/org/cisco/badge/introduction-to-cybersecurity",
  },
  {
    name: "JavaScript Essentials 1",
    type: "Badge",
    date: "Sep 2023",
    category: "Programming",
    img: "https://images.credly.com/images/b93bf373-3da6-4ada-9879-a0c39d6a11f8/image.png",
    credly: "https://www.credly.com/org/cisco/badge/javascript-essentials-1",
  },
  {
    name: "Python Essentials 2",
    type: "Badge",
    date: "Aug 2023",
    category: "Programming",
    img: "https://images.credly.com/images/3f802526-7274-4230-91ab-f6d1a35340e6/image.png",
    credly: "https://www.credly.com/org/cisco/badge/python-essentials-2",
  },
  {
    name: "Python Essentials 1",
    type: "Badge",
    date: "Aug 2023",
    category: "Programming",
    img: "https://images.credly.com/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png",
    credly: "https://www.credly.com/org/cisco/badge/python-essentials-1.1",
  },
  {
    name: "Linux Unhatched",
    type: "Certificate",
    date: "Nov 2020",
    category: "Linux",
    img: "https://images.credly.com/images/f25ec9d4-c59d-49b9-944a-f160012e81cd/image.png",
    credly: "https://www.credly.com/org/cisco/badge/linux-unhatched",
  },
];

const moduleGroups = [
  {
    topic: "Cybersecurity",
    color: "bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-100 dark:border-red-500/20",
    dot: "bg-red-400",
    modules: [
      { name: "Network Security", date: "Sep 17, 2023" },
      { name: "Cybersecurity Threats, Vulnerabilities, and Attacks", date: "Sep 16, 2023" },
      { name: "Network Support", date: "Sep 16, 2023" },
      { name: "System Safeguards", date: "Sep 14, 2023" },
      { name: "Network Defense", date: "Sep 14, 2023" },
      { name: "Resource Specialist", date: "Sep 14, 2023" },
      { name: "Threat Analysis", date: "Sep 12, 2023" },
      { name: "Cybersecurity Administration", date: "Sep 11, 2023" },
    ],
  },
  {
    topic: "JavaScript",
    color: "bg-yellow-50 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border-yellow-100 dark:border-yellow-500/20",
    dot: "bg-yellow-400",
    modules: [
      { name: "Functions", date: "Sep 8, 2023" },
      { name: "Conditional Execution and Loops", date: "Sep 7, 2023" },
      { name: "Operators and User Interaction", date: "Sep 4, 2023" },
      { name: "Basics of JavaScript", date: "Aug 31, 2023" },
      { name: "Variables, Data Types, Typing, and Comments", date: "Aug 27, 2023" },
    ],
  },
  {
    topic: "Python",
    color: "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-500/20",
    dot: "bg-blue-400",
    modules: [
      { name: "Generators, Files, and the Python Standard Library", date: "Aug 30, 2023" },
      { name: "Object-Oriented Programming", date: "Aug 30, 2023" },
      { name: "Characters, Strings, and Advanced Exceptions", date: "Aug 30, 2023" },
      { name: "Modules, Packages, and PIP", date: "Aug 30, 2023" },
      { name: "Collections, Functions, and Exceptions", date: "Aug 30, 2023" },
      { name: "Control Flow and Lists", date: "Aug 30, 2023" },
      { name: "Data Types, Variables, and Basic I/O", date: "Aug 18, 2023" },
      { name: "Introduction to Python and Programming", date: "Aug 13, 2023" },
    ],
  },
];

const typeStyles: Record<string, string> = {
  Badge: "bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-500/20",
  Certificate: "bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-500/20",
};

export default function Badges() {
  return (
    <section id="badges" className="py-24 px-6 bg-white dark:bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
            Cisco NetAcad
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Badges &amp; achievements
          </h2>
          <p className="text-gray-400 dark:text-gray-500 mt-4 text-sm max-w-md mx-auto">
            30+ verified badges, certificates, and module completions across
            networking, cybersecurity, and programming — issued via Credly.
          </p>
        </div>

        {/* Course badge cards */}
        <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-5">
          Course completions
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {courses.map((course) => (
            <a
              key={course.name}
              href={course.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-gray-100 dark:border-white/10 rounded-2xl p-5 flex flex-col items-center text-center hover:border-blue-200 dark:hover:border-blue-400/40 hover:shadow-md dark:hover:shadow-blue-500/5 transition-all bg-white dark:bg-white/[0.03]"
            >
              {/* Badge image */}
              <div className="relative w-20 h-20 mb-4 group-hover:scale-105 transition-transform">
                <Image
                  src={course.img}
                  alt={course.name}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>

              {/* Type tag */}
              <span
                className={`text-xs font-medium px-2 py-0.5 rounded-full mb-2 ${typeStyles[course.type]}`}
              >
                {course.type}
              </span>

              <p className="text-xs font-semibold text-gray-800 dark:text-gray-200 leading-snug mb-1">
                {course.name}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                {course.date}
              </p>

              {/* Hover cue */}
              <span className="mt-2 text-xs text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                View on Credly ↗
              </span>
            </a>
          ))}
        </div>

        {/* Module achievements */}
        <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-5">
          Module achievements
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {moduleGroups.map((group) => (
            <div
              key={group.topic}
              className="border border-gray-100 dark:border-white/10 rounded-2xl p-6 hover:shadow-sm transition-all bg-white dark:bg-white/[0.03]"
            >
              <div className="flex items-center gap-2 mb-5">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${group.color}`}
                >
                  {group.topic}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {group.modules.length} modules
                </span>
              </div>
              <ul className="space-y-3">
                {group.modules.map((mod) => (
                  <li key={mod.name} className="flex items-start gap-2.5">
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${group.dot}`}
                    />
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug">
                        {mod.name}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                        {mod.date}
                      </p>
                    </div>
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
