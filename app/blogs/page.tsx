import { getPosts, type BlogPost } from "@/services/blog.service";
import { Search, Mail, TrendingUp } from "lucide-react";
import Link from "next/link";

export default async function BlogsPage() {
  const posts = await getPosts();

  const featured = posts.length > 0 ? posts[0] : null;
  const otherPosts = posts.slice(1);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-linear-to-b from-slate-50 to-white pt-12 pb-16 lg:pt-16 border-b border-slate-100">
        <div className="absolute inset-0 tech-noise opacity-30 pointer-events-none mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-150 h-150 bg-blue-100/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-red-100/60 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Insights & Engineering
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl">
              Deep dives into enterprise architecture, AI integration, and
              scalable web development.
            </p>
          </div>

          {/* Featured Article */}
          {featured && <FeaturedPost post={featured} />}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Blog Grid */}
            <div className="lg:w-2/3">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-orange-500" /> Latest
                  Insights
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {otherPosts.length > 0 ? (
                  otherPosts.map((post) => (
                    <PostCard key={post._id} post={post} />
                  ))
                ) : posts.length <= 1 ? (
                  <div className="col-span-full text-center py-12">
                    <p className="text-slate-500 text-lg">
                      No additional articles found. Add more in the{" "}
                      <Link
                        href="/studio"
                        className="text-red-600 hover:underline"
                      >
                        Sanity Studio
                      </Link>
                      .
                    </p>
                  </div>
                ) : null}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                {/* Newsletter */}
                <div className="bg-slate-900 rounded-2xl p-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
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
                        className="bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 rounded-lg text-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="work@email.com"
                        type="email"
                      />
                      <button className="bg-primary text-white font-bold text-sm py-3 rounded-lg hover:bg-red-600 transition-colors shadow-lg shadow-primary/20">
                        Subscribe Free
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-4">
                      No spam. Unsubscribe anytime.
                    </p>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                    Categories
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <a
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white text-xs font-bold transition-colors border border-slate-200 hover:border-primary"
                      href="#"
                    >
                      AI & Automation
                    </a>
                    <a
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white text-xs font-bold transition-colors border border-slate-200 hover:border-primary"
                      href="#"
                    >
                      Development
                    </a>
                    <a
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white text-xs font-bold transition-colors border border-slate-200 hover:border-primary"
                      href="#"
                    >
                      Business
                    </a>
                    <a
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white text-xs font-bold transition-colors border border-slate-200 hover:border-primary"
                      href="#"
                    >
                      Design Systems
                    </a>
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
    <Link href={`/blogs/${post.slug}`}>
      <article className="group relative bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative h-64 lg:h-auto overflow-hidden">
            {post.mainImage ? (
              <img
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={post.mainImage}
              />
            ) : (
              <div className="w-full h-full bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                <span className="text-6xl font-black text-slate-400">
                  {post.title.charAt(0)}
                </span>
              </div>
            )}
            <div className="absolute top-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm border border-slate-200 flex items-center gap-1">
                <span className="size-2 rounded-full bg-primary animate-pulse"></span>{" "}
                Featured
              </span>
            </div>
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">
                Insights
              </span>
              <span className="text-slate-400 text-xs font-medium flex items-center gap-1">
                {formatDate(post.publishedAt)}
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-slate-500 mb-8 text-lg leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
            <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-6">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-slate-100 object-cover ring-2 ring-white flex items-center justify-center text-xs font-bold text-slate-600">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {post.author}
                  </p>
                  <p className="text-xs text-slate-500">Author</p>
                </div>
              </div>
              <div className="flex items-center justify-center size-10 rounded-full bg-slate-100 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                →
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
    <Link href={`/blogs/${post.slug}`}>
      <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
        <div className="h-48 overflow-hidden relative">
          {post.mainImage ? (
            <img
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={post.mainImage}
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center">
              <span className="text-4xl font-black text-slate-400">
                {post.title.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur text-xs font-bold shadow-sm border text-purple-600 border-purple-100">
              Insights
            </span>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-2 text-slate-400 text-xs mb-3 font-medium">
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-2">
            <div className="size-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
              {post.author.charAt(0)}
            </div>
            <span className="text-xs font-bold text-slate-700">
              {post.author}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
