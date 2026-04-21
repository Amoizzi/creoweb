import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPostBySlug } from "@/lib/posts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GridBackground from "@/components/ui/GridBackground";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — CreoWeb Blog`,
    description: post.description,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n").filter(Boolean);

  return (
    <main className="relative">
      <GridBackground />
      <div className="relative z-10">
        <Navbar />
        <article className="pt-32 pb-20 max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm mb-8 transition-colors"
          >
            ← Всі статті
          </Link>

          <span className="inline-flex items-center border border-purple-500/30 text-purple-400 text-xs px-3 py-1 rounded-full mb-4 bg-purple-500/5">
            {post.category}
          </span>
          <h1
            className="font-display font-bold text-white mb-4 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-12 pb-8 border-b border-white/10">
            <span>{post.date}</span>
            <span>{post.readTime} читання</span>
          </div>

          <div className="prose prose-invert max-w-none">
            {paragraphs.map((p, i) => {
              if (p.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-display font-bold text-white text-2xl mt-10 mb-4">
                    {p.replace("## ", "")}
                  </h2>
                );
              }
              if (p.startsWith("### ")) {
                return (
                  <h3 key={i} className="font-display font-bold text-white text-xl mt-8 mb-3">
                    {p.replace("### ", "")}
                  </h3>
                );
              }
              if (p.startsWith("- ")) {
                return (
                  <li key={i} className="text-gray-300 ml-4 mb-2">
                    {p.replace("- ", "")}
                  </li>
                );
              }
              if (p.startsWith("**") && p.endsWith("**")) {
                return (
                  <p key={i} className="text-white font-medium mt-4">
                    {p.replace(/\*\*/g, "")}
                  </p>
                );
              }
              return (
                <p key={i} className="text-gray-400 leading-relaxed mb-4">
                  {p}
                </p>
              );
            })}
          </div>

          <div className="mt-16 p-8 rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-center">
            <h3 className="font-display font-bold text-white text-2xl mb-2">
              Потрібна допомога з контентом?
            </h3>
            <p className="text-gray-400 mb-6">
              Залиште заявку — зробимо безкоштовний розбір вашого бізнесу
            </p>
            <a
              href="https://t.me/WhiteRabbit_m"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all duration-300"
            >
              Написати в Telegram
            </a>
          </div>
        </article>
        <Footer />
      </div>
    </main>
  );
}
