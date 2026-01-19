import { PortableTextRenderer } from "@/components/portable-text";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { getPost, getPosts } from "@/services/blog.service";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Post Not Found | DevCortex" };
  }

  return {
    title: `${post.title} | DevCortex Blog`,
    description: post.excerpt || `Read ${post.title} on the DevCortex blog`,
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function estimateReadTime(body: unknown[] | null): number {
  // Rough estimate: count text content and assume ~200 words per minute
  if (!body || !Array.isArray(body)) return 5;

  let wordCount = 0;
  for (const block of body) {
    if (block && typeof block === "object" && "children" in block) {
      const children = block.children as { text?: string }[];
      for (const child of children) {
        if (child.text) {
          wordCount += child.text.split(/\s+/).length;
        }
      }
    }
  }
  return Math.max(1, Math.ceil(wordCount / 200));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const readTime = estimateReadTime(post.body);

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-150 h-150 bg-purple-500/10 rounded-full blur-[120px] -translate-y-1/2" />
          <div className="absolute bottom-0 right-1/4 w-150 h-150 bg-orange-500/10 rounded-full blur-[120px] translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Link */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Blog</span>
          </Link>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider border border-purple-500/20">
              Insights
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-3xl">
              {post.excerpt}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 pb-10 border-b border-slate-800">
            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-lg font-bold text-slate-400 ring-2 ring-slate-700">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-white">{post.author}</p>
                <p className="text-sm text-slate-500">Author</p>
              </div>
            </div>

            {/* Separator */}
            <div className="h-10 w-px bg-slate-800 hidden sm:block" />

            {/* Date */}
            <div className="flex items-center gap-2 text-slate-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{formatDate(post.publishedAt)}</span>
            </div>

            {/* Read Time */}
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.mainImage && (
        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800">
              <Image
                src={post.mainImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg prose-invert max-w-none">
            {post.body ? (
              <PortableTextRenderer value={post.body} />
            ) : (
              <div className="text-center py-16">
                <p className="text-slate-500 text-lg">
                  Full article content coming soon.
                </p>
              </div>
            )}
          </article>
        </div>
      </section>

      {/* Author Box */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center text-2xl font-bold text-slate-400 ring-4 ring-slate-700 shrink-0">
              {post.author.charAt(0)}
            </div>
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                Written by
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">
                {post.author}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Expert in enterprise architecture, AI integration, and scalable
                web development. Passionate about building high-performance
                digital products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-slate-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Enjoyed this article?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for more engineering insights and
            updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-colors shadow-lg shadow-orange-500/20">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">View All Posts</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
