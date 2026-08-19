import Socials from "./Socials";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-100 dark:border-white/5 py-8 px-6 bg-white dark:bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400 dark:text-gray-500">
        <p>© {year} Shlok Patel. Built with Next.js.</p>
        <div className="flex items-center gap-6">
          <a
            href="/Shlok-Patel-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            Resume
          </a>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
