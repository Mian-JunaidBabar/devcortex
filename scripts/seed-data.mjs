import dotenv from "dotenv";

/**
 * Seed Script for DevCortex
 *
 * Usage:
 * 1. Add SANITY_API_WRITE_TOKEN to your .env.local
 * 2. Run: node scripts/seed-data.mjs
 */
import { createClient } from "@sanity/client";

// Load environment variables from .env.local
dotenv.config({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  console.error("❌ Missing environment variables:");
  console.error("   - NEXT_PUBLIC_SANITY_PROJECT_ID");
  console.error("   - NEXT_PUBLIC_SANITY_DATASET");
  console.error("   - SANITY_API_WRITE_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-01-19",
  token,
  useCdn: false,
});

// ============================================================
// SEED DATA
// ============================================================

const projects = [
  {
    _type: "project",
    title: "OmniBlox",
    slug: { _type: "slug", current: "omniblox" },
    tagline:
      "Enterprise-grade SaaS platform leveraging neural networks for predictive analytics in manufacturing supply chains.",
    category: "SaaS",
    status: "In Progress",
    tech: ["Next.js", "Nest.js", "PostgreSQL", "Redis"],
    resultMetric: "40% Churn Reduction",
    repoUrl: "https://github.com/devcortex/omniblox",
    liveUrl: "https://omniblox.io",
  },
  {
    _type: "project",
    title: "Harmoni AI",
    slug: { _type: "slug", current: "harmoni-ai" },
    tagline:
      "Music generation tool using generative adversarial networks to create royalty-free background tracks.",
    category: "AI",
    status: "In Progress",
    tech: ["Python", "TensorFlow", "WebSockets", "FastAPI"],
    resultMetric: "Automated Workflows",
    repoUrl: "https://github.com/devcortex/harmoni-ai",
    liveUrl: "https://harmoni.ai",
  },
  {
    _type: "project",
    title: "Lahore Logistics",
    slug: { _type: "slug", current: "lahore-logistics" },
    tagline:
      "A complete digital overhaul for a logistics giant, focusing on lead generation pipelines and technical SEO optimization.",
    category: "Marketing",
    status: "Completed",
    tech: ["WordPress", "WooCommerce", "SEO Strategy"],
    resultMetric: "2 Week Launch",
    liveUrl: "https://lahorelogistics.pk",
  },
  {
    _type: "project",
    title: "FinTech Pak",
    slug: { _type: "slug", current: "fintech-pak" },
    tagline:
      "Comprehensive financial dashboard for a Southeast Asian banking startup, featuring real-time crypto tracking.",
    category: "SaaS",
    status: "Completed",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    resultMetric: "50K+ Active Users",
    liveUrl: "https://fintechpak.com",
  },
];

const posts = [
  {
    _type: "post",
    title: "Why Custom Code Beats WordPress for SaaS",
    slug: { _type: "slug", current: "custom-code-vs-wordpress-saas" },
    publishedAt: new Date("2024-11-05").toISOString(),
    author: "Alex Chen",
    excerpt:
      "A detailed breakdown of long-term costs, scalability limits, and when you should actually build instead of buy. We explore the ROI of custom software vs. off-the-shelf solutions.",
    body: [
      {
        _type: "block",
        _key: "intro",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "When building a SaaS product, the choice between custom development and platforms like WordPress can make or break your venture. Let's dive deep into why custom code often wins for serious SaaS applications.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "heading1",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "span2",
            text: "The Hidden Costs of WordPress",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "para1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span3",
            text: "While WordPress appears cheaper upfront, the total cost of ownership often exceeds custom development within 2-3 years. Plugin conflicts, security patches, and performance optimization add up quickly.",
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _type: "post",
    title: "The Future of AI Agents in Pakistan",
    slug: { _type: "slug", current: "future-ai-agents-pakistan" },
    publishedAt: new Date("2024-10-20").toISOString(),
    author: "Sarah Jenkins",
    excerpt:
      "Moving beyond simple chatbots: How we're implementing RAG systems and autonomous agents to revolutionize internal knowledge management for Fortune 500 companies.",
    body: [
      {
        _type: "block",
        _key: "intro",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Pakistan's tech ecosystem is rapidly evolving, and AI agents are at the forefront of this transformation. From customer service automation to complex decision-making systems, the possibilities are endless.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "heading1",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "span2",
            text: "RAG Systems: The Next Frontier",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "para1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span3",
            text: "Retrieval-Augmented Generation (RAG) combines the power of large language models with domain-specific knowledge bases, enabling AI agents that truly understand your business context.",
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _type: "post",
    title: "Optimizing Next.js 14 for High-Traffic E-commerce",
    slug: { _type: "slug", current: "nextjs-14-ecommerce-optimization" },
    publishedAt: new Date("2024-10-15").toISOString(),
    author: "David Miller",
    excerpt:
      "Techniques for server-side rendering, image optimization, and caching strategies that reduced load times by 40%.",
    body: [
      {
        _type: "block",
        _key: "intro",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "span1",
            text: "Next.js 14 brings powerful new features for e-commerce applications. In this post, we'll explore how to leverage these features for maximum performance.",
          },
        ],
        markDefs: [],
      },
    ],
  },
];

// ============================================================
// SEED FUNCTIONS
// ============================================================

async function clearExistingData() {
  console.log("🗑️  Clearing existing data...");

  const existingProjects = await client.fetch('*[_type == "project"]._id');
  const existingPosts = await client.fetch('*[_type == "post"]._id');

  if (existingProjects.length > 0) {
    const projectTransaction = client.transaction();
    existingProjects.forEach((id) => projectTransaction.delete(id));
    await projectTransaction.commit();
    console.log(`   Deleted ${existingProjects.length} projects`);
  }

  if (existingPosts.length > 0) {
    const postTransaction = client.transaction();
    existingPosts.forEach((id) => postTransaction.delete(id));
    await postTransaction.commit();
    console.log(`   Deleted ${existingPosts.length} posts`);
  }
}

async function seedProjects() {
  console.log("📦 Seeding projects...");

  const transaction = client.transaction();

  for (const project of projects) {
    transaction.create(project);
    console.log(`   + ${project.title}`);
  }

  await transaction.commit();
  console.log(`   ✅ Created ${projects.length} projects`);
}

async function seedPosts() {
  console.log("📝 Seeding blog posts...");

  const transaction = client.transaction();

  for (const post of posts) {
    transaction.create(post);
    console.log(`   + ${post.title}`);
  }

  await transaction.commit();
  console.log(`   ✅ Created ${posts.length} posts`);
}

// ============================================================
// MAIN
// ============================================================

async function main() {
  console.log("\n🚀 DevCortex Seed Script\n");
  console.log(`   Project: ${projectId}`);
  console.log(`   Dataset: ${dataset}\n`);

  try {
    await clearExistingData();
    await seedProjects();
    await seedPosts();

    console.log("\n✨ Seeding complete!\n");
    console.log("Next steps:");
    console.log("1. Visit your Sanity Studio at /studio to add images");
    console.log("2. Run your Next.js app to see the data\n");
  } catch (error) {
    console.error("\n❌ Seeding failed:", error.message);
    process.exit(1);
  }
}

main();
