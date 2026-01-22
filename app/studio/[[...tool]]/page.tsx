/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */
import type { Metadata, Viewport } from "next";

import Studio from "./studio";

// 1. Manually set the metadata instead of importing it
export const metadata: Metadata = {
  title: "Sanity Studio",
  description: "Deep Dev Solutions Content Management",
  // Crucial for Sanity auth cookies to work correctly
  referrer: "same-origin",
  // vital: Prevents Google from indexing your admin dashboard
  robots: "noindex",
};

// 2. Manually set the viewport settings
export const viewport: Viewport = {
  // Fixes an issue where the mobile keyboard hides the bottom action bar
  interactiveWidget: "resizes-content",
};

export const dynamic = "force-static";

export default function StudioPage() {
  return <Studio />;
}
