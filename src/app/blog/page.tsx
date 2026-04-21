import Link from "next/link";
import { posts } from "@/lib/posts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GridBackground from "@/components/ui/GridBackground";

export const metadata = {
  title: "Блог — CreoWeb | SMM, відео та контент для бізнесу",
  description: "Корисні статті про SMM, відео маркетинг, створення сайтів та контент для бізнесу в Україні.",
};

export default function BlogPage() {
  return (
    <main className="relative">
      <GridBackground />
      <div className="relative z-10">
        <Navbar />
        <section className="pt-32 pb-20 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center border border-purple-500/50 text-purple-400 text-xs px-4 py-1.5 rounded-full mb-4 bg-purple-500/5">
              Блог
            </span>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Корисні статті
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              SMM, відео, сайти та контент — ділимось знаннями безкоштовно
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/40 hover:bg-white/5 transition-all duration-300 group"
              >
                <span className="inline-flex items-center border border-purple-500/30 text-purple-400 text-xs px-3 py-1 rounded-full mb-4 bg-purple-500/5">
                  {post.category}
                </span>
                <h2 className="font-display font-bold text-white text-xl mb-3 group-hover:text-purple-300 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {post.description}
                </p>
                <div className="flex items-center gap-4 text-gray-600 text-xs">
                  <span>{post.date}</span>
                  <span>{post.readTime} читання</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
}
