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
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white border-b border-gray-200">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-150 h-150 bg-purple-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-150 h-150 bg-orange-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-orange-50 border border-orange-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Our Blog
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Insights &{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-orange-500 to-purple-600">
              Engineering
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            Deep dives into enterprise architecture, AI integration, and
            scalable web development.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="pt-12 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeaturedPost post={featured} />
          </div>
        </section>
      )}

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Blog Grid - 3 columns on large screens */}
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-10">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-slate-900">
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
                <div className="bg-linear-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Mail className="w-20 h-20 text-slate-900" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Weekly Tech Brief
                    </h4>
                    <p className="text-slate-600 text-sm mb-6">
                      Get our best engineering and growth insights delivered
                      every Tuesday.
                    </p>
                    <div className="flex flex-col gap-3">
                      <input
                        className="bg-white border border-gray-300 text-slate-900 placeholder:text-slate-500 rounded-lg text-sm px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="work@email.com"
                        type="email"
                      />
                      <button className="bg-primary hover:bg-red-700 text-white font-bold text-sm py-3 rounded-lg transition-colors shadow-lg">
                        Subscribe Free
                      </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-4">
                      No spam. Unsubscribe anytime.
                    </p>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
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
                        className="px-3 py-1.5 rounded-lg bg-gray-100 text-slate-600 hover:bg-primary hover:text-white text-xs font-bold transition-colors border border-gray-200 hover:border-primary cursor-pointer"
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
      <article className="relative bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300">
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
              <div className="w-full h-full bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-6xl font-black text-gray-300">
                  {post.title.charAt(0)}
                </span>
              </div>
            )}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent" />
            {/* Featured Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Featured
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-sm bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider border border-purple-200">
                Insights
              </span>
              <span className="text-slate-500 text-xs font-medium">
                {formatDate(post.publishedAt)}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors">
              {post.title}
            </h2>

            <p className="text-slate-600 mb-8 text-lg leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            <div className="mt-auto flex items-center justify-between border-t border-gray-200 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-orange-600 flex items-center justify-center text-sm font-bold text-white ring-2 ring-gray-200">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {post.author}
                  </p>
                  <p className="text-xs text-slate-500">Author</p>
                </div>
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-slate-600 group-hover:bg-primary group-hover:text-white transition-all">
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
      <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col h-full shadow-sm">
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
            <div className="w-full h-full bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <span className="text-3xl font-black text-gray-300">
                {post.title.charAt(0)}
              </span>
            </div>
          )}
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 rounded-md bg-white/90 backdrop-blur text-xs font-bold text-purple-700 border border-purple-200">
              Insights
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <span className="text-xs text-slate-500 mb-2">
            {formatDate(post.publishedAt)}
          </span>

          <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {post.excerpt}
          </p>

          <div className="pt-4 border-t border-gray-200 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-linear-to-br from-primary to-orange-600 flex items-center justify-center text-xs font-bold text-white">
              {post.author.charAt(0)}
            </div>
            <span className="text-xs font-medium text-slate-600">
              {post.author}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
