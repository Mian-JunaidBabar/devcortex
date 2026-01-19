import { type SanityImageSource } from "@sanity/image-url";
import { urlForImage } from "@/sanity/lib/image";
import { PortableTextBlock } from "next-sanity";
import { client } from "@/sanity/lib/client";

// ============================================================
// TYPES
// ============================================================

export interface Project {
  _id: string;
  title: string;
  slug: string;
  tagline: string | null;
  category: "SaaS" | "Marketing" | "AI";
  status: "Completed" | "In Progress";
  mainImage: string;
  tech: string[];
  resultMetric: string | null;
  content: PortableTextBlock[] | null;
  repoUrl: string | null;
  liveUrl: string | null;
  createdAt: string;
}

// Raw Sanity response type
interface SanityProject {
  _id: string;
  _createdAt: string;
  title: string;
  slug: { current: string };
  tagline: string | null;
  category: "SaaS" | "Marketing" | "AI";
  status: "Completed" | "In Progress";
  mainImage: SanityImageSource | null;
  tech: string[] | null;
  resultMetric: string | null;
  content: PortableTextBlock[] | null;
  repoUrl: string | null;
  liveUrl: string | null;
}

// ============================================================
// QUERIES
// ============================================================

const projectsQuery = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  _createdAt,
  title,
  slug,
  tagline,
  category,
  status,
  mainImage,
  tech,
  resultMetric,
  repoUrl,
  liveUrl
}`;

const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  _createdAt,
  title,
  slug,
  tagline,
  category,
  status,
  mainImage,
  tech,
  resultMetric,
  content,
  repoUrl,
  liveUrl
}`;

// ============================================================
// MAPPERS
// ============================================================

function mapSanityProject(doc: SanityProject): Project {
  return {
    _id: doc._id,
    title: doc.title,
    slug: doc.slug?.current ?? "",
    tagline: doc.tagline,
    category: doc.category,
    status: doc.status,
    mainImage: urlForImage(doc.mainImage),
    tech: doc.tech ?? [],
    resultMetric: doc.resultMetric,
    content: doc.content,
    repoUrl: doc.repoUrl,
    liveUrl: doc.liveUrl,
    createdAt: doc._createdAt,
  };
}

// ============================================================
// SERVICE FUNCTIONS
// ============================================================

/**
 * Fetch all projects, sorted by creation date (newest first)
 */
export async function getProjects(): Promise<Project[]> {
  const docs = await client.fetch<SanityProject[]>(projectsQuery);
  return docs.map(mapSanityProject);
}

/**
 * Fetch a single project by slug
 */
export async function getProject(slug: string): Promise<Project | null> {
  const doc = await client.fetch<SanityProject | null>(projectBySlugQuery, {
    slug,
  });
  if (!doc) return null;
  return mapSanityProject(doc);
}

/**
 * Fetch projects by category
 */
export async function getProjectsByCategory(
  category: string,
): Promise<Project[]> {
  const query = `*[_type == "project" && category == $category] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    tagline,
    category,
    status,
    mainImage,
    tech,
    resultMetric,
    repoUrl,
    liveUrl
  }`;
  const docs = await client.fetch<SanityProject[]>(query, { category });
  return docs.map(mapSanityProject);
}
