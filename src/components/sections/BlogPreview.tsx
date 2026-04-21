import Link from "next/link";
import { posts } from "@/lib/posts";

export default function BlogPreview() {
  const latest = posts.slice(0, 3);
  return (
    <section id="blog" className="relative py-32">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center border border-purple-500/50 text-purple-400 text-xs px-4 py-1.5 rounded-full mb-4 bg-purple-500/5">
              Блог
            </span>
            <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Корисні статті
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex text-purple-400 hover:text-white text-sm transition-colors"
          >
            Всі статті →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/40 hover:bg-white/5 transition-all duration-300 group"
            >
              <span className="inline-flex items-center border border-purple-500/30 text-purple-400 text-xs px-3 py-1 rounded-full mb-4 bg-purple-500/5">
                {post.category}
              </span>
              <h3 className="font-display font-bold text-white text-lg mb-3 group-hover:text-purple-300 transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                {post.description}
              </p>
              <div className="flex items-center gap-4 text-gray-600 text-xs">
                <span>{post.date}</span>
                <span>{post.readTime} читання</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/blog" className="text-purple-400 hover:text-white text-sm transition-colors">
            Всі статті →
          </Link>
        </div>
      </div>
    </section>
  );
}
