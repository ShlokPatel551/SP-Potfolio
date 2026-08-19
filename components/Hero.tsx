import Socials from "./Socials";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 text-center pt-24 pb-16 overflow-hidden">
      {/* Ambient background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0f]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37, 99, 235, 0.08), transparent 60%), radial-gradient(circle at 20% 100%, rgba(59, 130, 246, 0.06), transparent 45%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "rgb(148 163 184)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 40%, black 30%, transparent 75%)",
        }}
      />

      <div className="max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-400/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          Open to opportunities · Edison, NJ
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.05] mb-6">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
            Shlok
          </span>
          <span className="block text-gray-900 dark:text-white">Patel.</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-4">
          Software Engineer &amp; Systems Administrator
        </p>

        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          I build reliable back-end systems, automate the infrastructure that
          runs them, and keep it all secure. Currently at Sunrise Wholesalers
          and Liffio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 shadow-sm hover:shadow-md transition-all"
          >
            View my work
          </a>
          <a
            href="/Shlok-Patel-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3 rounded-full border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-gray-700 dark:text-gray-200 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-colors inline-flex items-center justify-center gap-2"
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
            Download CV
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Get in touch →
          </a>
        </div>

        <div className="mt-10 flex justify-center">
          <Socials />
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            className="w-4 h-4 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
