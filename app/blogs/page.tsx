import { getPosts, type BlogPost } from "@/services/blog.service";
import { Mail, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog | DevCortex",
  description:
    "Deep dives into enterprise architecture, AI integration, and scalable web development.",
};

export default async function BlogsPage() {
  const posts = await getPosts();

  const featured = posts.length > 0 ? posts[0] : null;
  const otherPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-150 h-150 bg-purple-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-150 h-150 bg-orange-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Our Blog
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Insights &{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-purple-500">
              Engineering
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Deep dives into enterprise architecture, AI integration, and
            scalable web development.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedPost post={featured} />
          </div>
        </section>
      )}

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Blog Grid - 3 columns on large screens */}
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-10">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                <h2 className="text-xl font-bold text-white">
                  Latest Insights
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {otherPosts.length > 0 ? (
                  otherPosts.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))
                ) : posts.length <= 1 ? (
                  <div className="col-span-full text-center py-16">
                    <p className="text-slate-500 text-lg">
                      📝 Fresh insights coming soon!
                    </p>
                  </div>
                ) : null}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <div className="lg:sticky lg:top-24 space-y-8">
                {/* Newsletter */}
                <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-800 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Mail className="w-20 h-20 text-white" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-white mb-2">
                      Weekly Tech Brief
                    </h4>
                    <p className="text-slate-400 text-sm mb-6">
                      Get our best engineering and growth insights delivered
                      every Tuesday.
                    </p>
                    <div className="flex flex-col gap-3">
                      <input
                        className="bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 rounded-lg text-sm px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="work@email.com"
                        type="email"
                      />
                      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-3 rounded-lg transition-colors shadow-lg shadow-orange-500/20">
                        Subscribe Free
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-4">
                      No spam. Unsubscribe anytime.
                    </p>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-3 border-b border-slate-800">
                    Categories
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AI & Automation",
                      "Development",
                      "Business",
                      "Design Systems",
                    ].map((category) => (
                      <span
                        key={category}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 hover:bg-orange-500/10 hover:text-orange-400 text-xs font-bold transition-colors border border-slate-700 hover:border-orange-500/30 cursor-pointer"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="group block">
      <article className="relative bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-64 lg:h-100 overflow-hidden">
            {post.mainImage ? (
              <Image
                alt={post.title}
                src={post.mainImage}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <span className="text-6xl font-black text-slate-700">
                  {post.title.charAt(0)}
                </span>
              </div>
            )}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 to-transparent" />
            {/* Featured Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider border border-purple-500/20">
                Insights
              </span>
              <span className="text-slate-500 text-xs font-medium">
                {formatDate(post.publishedAt)}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-orange-400 transition-colors">
              {post.title}
            </h2>

            <p className="text-slate-400 mb-8 text-lg leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            <div className="mt-auto flex items-center justify-between border-t border-slate-800 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-400 ring-2 ring-slate-700">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{post.author}</p>
                  <p className="text-xs text-slate-500">Author</p>
                </div>
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="group block h-full">
      <article className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
        {/* Image */}
        <div className="relative h-40 overflow-hidden">
          {post.mainImage ? (
            <Image
              alt={post.title}
              src={post.mainImage}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <span className="text-3xl font-black text-slate-700">
                {post.title.charAt(0)}
              </span>
            </div>
          )}
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 rounded-md bg-slate-900/80 backdrop-blur text-xs font-bold text-purple-400 border border-purple-500/20">
              Insights
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <span className="text-xs text-slate-500 mb-2">
            {formatDate(post.publishedAt)}
          </span>

          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {post.excerpt}
          </p>

          <div className="pt-4 border-t border-slate-800 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400">
              {post.author.charAt(0)}
            </div>
            <span className="text-xs font-medium text-slate-400">
              {post.author}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
