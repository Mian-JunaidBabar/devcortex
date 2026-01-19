"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Mail, TrendingUp } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  readTime: number;
  author: string;
  featured?: boolean;
}

const blogs: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Generative AI in Enterprise Workflows",
    description:
      "Moving beyond simple chatbots: How we're implementing RAG systems and autonomous agents to revolutionize internal knowledge management for Fortune 500 companies.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBW43_7tKZQm9gZr3unsfUbhM8BcKvQCUlNeIEBuGq329sRF6O7It6vhy6uV9VsRz7LtS4LwZ537yIqzu3MZMrbBqgu_bWpEqTU7SDjOcHTxHhTWrV4WSreS1ZQ1HreSuNJXX3lZHj4mmqOmdDmjgzu2qfjFQAbNCI0lqm9m6g9-luMQRCGXh-RcZ4dzsO74HNYEacHMmoUHpS465Tb6QkJKOFEbXfHgcFh2iQhYTrsYitW4nkF0frWJh9k5xOrlkJ7QO1Md0xVs64",
    category: "AI & Automation",
    date: "Nov 05, 2024",
    readTime: 8,
    author: "Alex Chen",
    featured: true,
  },
  {
    id: 2,
    title: "Optimizing Next.js 14 for High-Traffic E-commerce",
    description:
      "Techniques for server-side rendering, image optimization, and caching strategies that reduced load times by 40%.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRMSJa_WoNfQgai8oPJxUzKXIG-EPhBD4opDUcxhO3z0Rs751NPMkk5wD4KiXIl2KC3SFnt8nzRtMmzGuhdqpqhQgjLu3tLDDFlfetf9E_N_PmgnmTGX-lm8H_hCha_qKL2KEVUjqZiNFgxOBz7eJ3J29LR85G3ErNmrCsFV2Nm4Yfz933g7rVW-Ent2jelNpVy1Tm7nyNN8Wsa74YgNOeKcpHm6eMDHTrJ61Wh70n3bxrJASgkMRI1bvCEw19AezYhOncbNGoi94",
    category: "Development",
    date: "Oct 20, 2024",
    readTime: 6,
    author: "Sarah Jenkins",
  },
  {
    id: 3,
    title: "ROI of Custom Software vs. Off-the-shelf Solutions",
    description:
      "A detailed breakdown of long-term costs, scalability limits, and when you should actually build instead of buy.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALZDedFFcTwGO_Y_hY4z__lWekw7a4bkBH-on4NQfl0NLBGJcAqki0oFcMeMRkiLqDlO1RDw6UfRL-3VDn_BfbB6ywNR9MkKoRIKj3NpAfRO_Qhnjj4cAqOJPJLa5p6SImipxySNbBCfbovwmeLHMougT12Mj_f550hjWgsNfDKpCf8FmQgI3watPrkMC4ud3lPafspzHRwkfmvV7J13mNOud_GHQdbjmMlz5h7_n5-meO4zjf6SlSpqgSrzyRyUIXDiYKJpPWw3s",
    category: "Business",
    date: "Oct 18, 2024",
    readTime: 5,
    author: "David Miller",
  },
  {
    id: 4,
    title: "Understanding Vector Embeddings for Semantic Search",
    description:
      "How we utilized Pinecone and OpenAI embeddings to build a context-aware search engine for a legal tech client.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4Qps7LlbvzkoszKD4_SxBt8UgpJWrf8nTwxuK5uKdosJjsPeK8GDbXCbxEd3p8i-uMyYfVHJ2K_tUU8M1PdyH6Q_q1HA81mdyBTeRi4_d3R6vPcIIwSIYoeKSQYt9r41uL1pacyuj3oDzrd_5jqvYqhFneYunyqVuEHyBDNsHJ0-quBk-xCl3pse4kcGXTmvsWl-p3p4sKShRWG4KZgiYkvEs3_KS4ChfxFaknBOAh0cT_AYexYUD_VIORsAO8cpbQgxuc7bb_p4",
    category: "AI Research",
    date: "Oct 15, 2024",
    readTime: 10,
    author: "Alex Chen",
  },
  {
    id: 5,
    title: "Migrating Legacy Monoliths to Microservices",
    description:
      "A case study on strangling the monolith pattern using AWS Lambda and API Gateway without downtime.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBe3dUF_HAYNOLclSQfpoRCdtBF6g3VB9ZOzi5jELH4cd9X83FkBejsh-dbaeiM18Te87crPtKcrxPPYq_LrsmHfwS9fWHqTXj5m1-Tjpp2RzvRwGiQ7I6VLyZFf3pC9RhHg_BSSi7XOnBx8mGDDfx2NwCbqouTeSGGRoBab0fHSaEgIrkKZlGzf7OuxKZR-owpBQXBT5IJ9SKn6L89Vt7NcEuHBhNtAvv_yTY_GdxvA4FTVkMct7KC5ZfCAZ1TCrN8HPG-aJxB_d4",
    category: "Development",
    date: "Oct 12, 2024",
    readTime: 7,
    author: "James Wilson",
  },
  {
    id: 6,
    title: "Agile Methodologies in Hybrid Agency Models",
    description:
      "Adapting Scrum and Kanban for teams that manage both rapid marketing launches and long-term product builds.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8jQWd_mR1j73d7vac3nSNY2dDjzfsi4uvvBEFi-FsMelMmfAtmZo8Reju2l4VUTNdCj5bYnerIUJmlWmM5Gc5VETW7g9uF6_5P-VqL7COOVDwZA7CzNvJzDg5rkCQrZmhVfQJ-1hmpeTjeEuGPo4SuJlWpreMczvFqimk9g2_9mxKxGOYp50UeI9lL3aDb-2Jr63DCNZyZGCh1Oz8uBiVSMSsQlof_M0RT68uGFd0aiHDRZE4DQazUKGr5GXKfY2X74MPw-VyZoU",
    category: "Business",
    date: "Oct 10, 2024",
    readTime: 4,
    author: "Elena Rodriguez",
  },
  {
    id: 7,
    title: "State Management in 2024: Redux, Zustand or Context?",
    description:
      "A comparative analysis of modern React state management libraries based on performance and developer experience.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQI_b0aQkZxUcGdhiMeyIparEeUkK_aJVxg9Inv84Am-TwBpx3u9-D5PUOJCvv2WD4hblDQXGJPEGkTmELzu1409v-WEu_QSoWka0w-CIt8sm7koJ3vHYTkq4nedsdO2t-cAmOsuiW_l8EnEvVu401CYQwF3yJb3zoTSFGN9XDzbOh2zBMw3N1e2lQU7SX0emgnOpi6l5g7z2gk5_i0YjkIM-P1mcSXZF9Zx16l2PNX9JzqCkP312CGX2Z5HBoQaAQVyKtvj68DWg",
    category: "Development",
    date: "Oct 05, 2024",
    readTime: 9,
    author: "Marcus Johnson",
  },
];

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const featured = blogs.find((blog) => blog.featured);
  const otherBlogs = blogs.filter((blog) => !blog.featured);

  const filteredBlogs = otherBlogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-12 pb-16 lg:pt-16 border-b border-slate-100">
        <div className="absolute inset-0 tech-noise opacity-30 pointer-events-none mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-100/60 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
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
          {featured && (
            <article className="group relative bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={featured.image}
                  />
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
                      {featured.category}
                    </span>
                    <span className="text-slate-400 text-xs font-medium flex items-center gap-1">
                      {featured.readTime} min read
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-slate-500 mb-8 text-lg leading-relaxed line-clamp-3">
                    {featured.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-slate-100 object-cover ring-2 ring-white flex items-center justify-center text-xs font-bold text-slate-600">
                        AC
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">
                          {featured.author}
                        </p>
                        <p className="text-xs text-slate-500">
                          Chief Technology Officer
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center size-10 rounded-full bg-slate-100 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                      →
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )}
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
                {filteredBlogs.map((blog) => (
                  <article
                    key={blog.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={blog.image}
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-2.5 py-1 rounded-md bg-white/90 backdrop-blur text-xs font-bold shadow-sm border ${
                            blog.category === "Development"
                              ? "text-primary border-orange-100"
                              : blog.category === "Business"
                                ? "text-blue-600 border-blue-100"
                                : "text-purple-600 border-purple-100"
                          }`}
                        >
                          {blog.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-slate-400 text-xs mb-3 font-medium">
                        <span>{blog.date}</span>
                        <span className="size-1 bg-slate-300 rounded-full"></span>
                        <span>{blog.readTime} min read</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                        {blog.description}
                      </p>
                      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-2">
                        <div className="size-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                          {blog.author.split(" ")[0].charAt(0)}
                        </div>
                        <span className="text-xs font-bold text-slate-700">
                          {blog.author}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {filteredBlogs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-slate-500 text-lg">
                    No articles found. Try a different search.
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                {/* Search */}
                <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                  <Search className="w-5 h-5 text-slate-400 ml-2" />
                  <input
                    className="w-full border-none focus:ring-0 text-sm text-slate-700 placeholder:text-slate-400 bg-transparent"
                    placeholder="Search articles..."
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

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
                      AI & Automation (12)
                    </a>
                    <a
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white text-xs font-bold transition-colors border border-slate-200 hover:border-primary"
                      href="#"
                    >
                      Development (24)
                    </a>
                    <a
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white text-xs font-bold transition-colors border border-slate-200 hover:border-primary"
                      href="#"
                    >
                      Business (8)
                    </a>
                    <a
                      className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white text-xs font-bold transition-colors border border-slate-200 hover:border-primary"
                      href="#"
                    >
                      Design Systems (5)
                    </a>
                  </div>
                </div>

                {/* Trending */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                    Trending Now
                  </h4>
                  <div className="space-y-4">
                    <a
                      className="group flex gap-3 items-start hover:opacity-70 transition-opacity"
                      href="#"
                    >
                      <span className="text-2xl font-black text-slate-200 group-hover:text-primary transition-colors">
                        01
                      </span>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                          Implementing Semantic Search with OpenAI
                        </h5>
                        <span className="text-xs text-slate-400 mt-1 block">
                          12.5k views
                        </span>
                      </div>
                    </a>
                    <a
                      className="group flex gap-3 items-start hover:opacity-70 transition-opacity"
                      href="#"
                    >
                      <span className="text-2xl font-black text-slate-200 group-hover:text-primary transition-colors">
                        02
                      </span>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                          The Complete Guide to Next.js App Router
                        </h5>
                        <span className="text-xs text-slate-400 mt-1 block">
                          8.2k views
                        </span>
                      </div>
                    </a>
                    <a
                      className="group flex gap-3 items-start hover:opacity-70 transition-opacity"
                      href="#"
                    >
                      <span className="text-2xl font-black text-slate-200 group-hover:text-primary transition-colors">
                        03
                      </span>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                          Why We Moved From Redux to Zustand
                        </h5>
                        <span className="text-xs text-slate-400 mt-1 block">
                          6.1k views
                        </span>
                      </div>
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
