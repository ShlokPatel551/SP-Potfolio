import Socials from "./Socials";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gray-50 dark:bg-white/[0.02] overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(37, 99, 235, 0.08), transparent 70%)",
        }}
      />
      <div className="relative max-w-2xl mx-auto text-center">
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
          Contact
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          Let&apos;s build something
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg mb-10 leading-relaxed max-w-lg mx-auto">
          Open to full-time roles, freelance work, or a good conversation about
          systems, security, and shipping software. My inbox stays open.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:shlokpatel1020@gmail.com"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
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
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Send an email
          </a>
          <a
            href="/Shlok-Patel-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-200 text-sm font-medium hover:border-gray-300 dark:hover:border-white/20 hover:shadow-sm transition-all inline-flex items-center justify-center gap-2"
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
        </div>

        <div className="mt-12 pt-10 border-t border-gray-200 dark:border-white/10">
          <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-5">
            Find me at
          </p>
          <div className="flex flex-col items-center gap-5">
            <Socials size="md" />
            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 flex-wrap justify-center">
              <a
                href="mailto:shlokpatel1020@gmail.com"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                shlokpatel1020@gmail.com
              </a>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <span>Edison, NJ 08820</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
