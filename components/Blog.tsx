import Link from "next/link";
import { POSTS } from "@/app/blog/posts";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
            Writing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            From the blog
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto text-sm">
            Notes from what I build. Systems, security, and the lessons that
            only show up when you write the tool yourself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white dark:bg-white/[0.03] rounded-2xl border border-gray-100 dark:border-white/10 p-6 flex flex-col hover:shadow-lg dark:hover:shadow-blue-500/5 hover:border-blue-200 dark:hover:border-blue-400/40 hover:-translate-y-0.5 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4 text-xs text-gray-400 dark:text-gray-500">
                <span>{formatDate(post.date)}</span>
                <span aria-hidden>•</span>
                <span>{post.readingTime}</span>
              </div>

              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-1">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-50 dark:border-white/5">
                <span className="text-xs text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Read post →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
