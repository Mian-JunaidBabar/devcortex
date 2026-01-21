import { getPosts, type BlogPost } from "@/services/blog.service";
import { Mail, TrendingUp, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Insights | DevCortex",
  description:
    "Deep dives into enterprise architecture, AI integration, and scalable growth strategies.",
};

export default async function BlogsPage() {
  const posts = await getPosts();

  const featured = posts.length > 0 ? posts[0] : null;
  const otherPosts = posts.slice(1);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20 bg-white border-b border-slate-100">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-100/60 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Engineering & Growth
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Knowledge for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-red-600">
              Digital Leaders
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
            Technical deep dives and marketing strategies from the team scaling
            the next generation of digital products.
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
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Blog Grid - 3 columns on large screens */}
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-10">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-slate-900">
                  Latest Articles
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
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
                <div className="bg-white rounded-[2rem] p-8 border border-slate-200 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                    <Mail className="w-24 h-24 text-blue-600" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Weekly Intel
                    </h4>
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                      Get our best engineering tactics and growth hacks delivered
                      every Tuesday.
                    </p>
                    <div className="flex flex-col gap-3">
                      <input
                        className="bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl text-sm px-4 py-3 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all outline-none"
                        placeholder="ceo@company.com"
                        type="email"
                      />
                      <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                        Subscribe Free
                      </button>
                    </div>
                    <p className="text-xs text-slate-400 mt-4 text-center">
                      Join 2,000+ founders. Unsubscribe anytime.
                    </p>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-red-600" />
                    Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Technical SEO",
                      "Next.js Architecture",
                      "SaaS Growth",
                      "AI Agents",
                      "Paid Acquisition",
                    ].map((category) => (
                      <span
                        key={category}
                        className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-600 text-xs font-bold transition-colors border border-slate-200 hover:border-blue-200 cursor-pointer"
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
      <article className="relative bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-xl transition-all duration-300">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-64 lg:h-[28rem] overflow-hidden">
            {post.mainImage ? (
              <Image
                alt={post.title}
                src={post.mainImage}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                <span className="text-6xl font-black text-slate-300">
                  {post.title.charAt(0)}
                </span>
              </div>
            )}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/10" />
            
            {/* Featured Badge */}
            <div className="absolute top-6 left-6">
              <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Must Read
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center bg-white relative">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-red-600 lg:hidden"></div>
             <div className="hidden lg:block absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-red-600"></div>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-100">
                Case Study
              </span>
              <span className="text-slate-400 text-xs font-medium border-l border-slate-200 pl-3">
                {formatDate(post.publishedAt)}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
              {post.title}
            </h2>

            <p className="text-slate-500 mb-8 text-lg leading-relaxed line-clamp-3 font-medium">
              {post.excerpt}
            </p>

            <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-sm font-bold text-white ring-2 ring-white shadow-md">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    {post.author}
                  </p>
                  <p className="text-xs text-slate-500">Editor in Chief</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                Read Article <ArrowRight className="w-4 h-4" />
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
      <article className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-sm">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          {post.mainImage ? (
            <Image
              alt={post.title}
              src={post.mainImage}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-slate-100 flex items-center justify-center">
              <span className="text-3xl font-black text-slate-300">
                {post.title.charAt(0)}
              </span>
            </div>
          )}
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur text-xs font-bold text-slate-700 shadow-sm border border-slate-200">
              Insight
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <span className="text-xs text-slate-400 mb-3 font-medium">
            {formatDate(post.publishedAt)}
          </span>

          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>

          <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 flex-1">
            {post.excerpt}
          </p>

          <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-700">
                {post.author.charAt(0)}
              </div>
              <span className="text-xs font-bold text-slate-600">
                {post.author}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-colors" />
          </div>
        </div>
      </article>
    </Link>
  );
}