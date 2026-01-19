import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { urlForImage } from "@/sanity/lib/image";
import { PortableTextBlock } from "next-sanity";
import { client } from "@/sanity/lib/client";

// ============================================================
// TYPES
// ============================================================

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  author: string;
  mainImage: string;
  excerpt: string | null;
  body: PortableTextBlock[] | null;
}

// Raw Sanity response type
interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  author: string;
  mainImage: SanityImageSource | null;
  excerpt: string | null;
  body: PortableTextBlock[] | null;
}

// ============================================================
// QUERIES
// ============================================================

const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  author,
  mainImage,
  excerpt
}`;

const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  author,
  mainImage,
  excerpt,
  body
}`;

// ============================================================
// MAPPERS
// ============================================================

function mapSanityPost(doc: SanityPost): BlogPost {
  return {
    _id: doc._id,
    title: doc.title,
    slug: doc.slug?.current ?? "",
    publishedAt: doc.publishedAt,
    author: doc.author,
    mainImage: urlForImage(doc.mainImage),
    excerpt: doc.excerpt,
    body: doc.body,
  };
}

// ============================================================
// SERVICE FUNCTIONS
// ============================================================

/**
 * Fetch all blog posts, sorted by published date (newest first)
 */
export async function getPosts(): Promise<BlogPost[]> {
  const docs = await client.fetch<SanityPost[]>(postsQuery);
  return docs.map(mapSanityPost);
}

/**
 * Fetch a single blog post by slug
 */
export async function getPost(slug: string): Promise<BlogPost | null> {
  const doc = await client.fetch<SanityPost | null>(postBySlugQuery, { slug });
  if (!doc) return null;
  return mapSanityPost(doc);
}

/**
 * Get the count of all posts
 */
export async function getPostsCount(): Promise<number> {
  const count = await client.fetch<number>(`count(*[_type == "post"])`);
  return count;
}
