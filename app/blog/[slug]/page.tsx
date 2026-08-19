import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { POSTS, getPost } from "../posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} · Shlok Patel`,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="relative px-6 pt-16 pb-12 overflow-hidden">
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
              href="/#blog"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1 mb-6"
            >
              ← All posts
            </Link>

            <div className="flex items-center gap-3 mb-4 text-xs text-gray-400 dark:text-gray-500">
              <span>{formatDate(post.date)}</span>
              <span aria-hidden>•</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-1.5 border-t border-gray-100 dark:border-white/10 pt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <article className="px-6 pb-24">
          <div className="max-w-3xl mx-auto space-y-10">
            {post.body.map((block, i) => (
              <div key={i} className="space-y-4">
                {block.heading && (
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
                    {block.heading}
                  </h2>
                )}
                {block.paragraphs?.map((p, j) => (
                  <p
                    key={j}
                    className="text-base text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
                {block.bullets && (
                  <ul className="space-y-3">
                    {block.bullets.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-blue-400 dark:bg-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {block.code && (
                  <pre className="rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-950 dark:bg-black/60 text-gray-100 text-[13px] leading-relaxed overflow-x-auto p-5">
                    <code>{block.code.snippet}</code>
                  </pre>
                )}
                {block.callout && (
                  <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-500/10 px-5 py-4 text-base text-gray-800 dark:text-gray-100 leading-relaxed">
                    {block.callout}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-8 border-t border-gray-100 dark:border-white/10">
              <Link
                href="/#blog"
                className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                ← Back to all posts
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
