import createImageUrlBuilder, {
  type SanityImageSource,
} from "@sanity/image-url";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

/**
 * Convert a Sanity image object to a URL string
 * Returns a placeholder if no image is provided
 */
export const urlForImage = (
  source: SanityImageSource | null | undefined,
): string => {
  if (!source) {
    return "/placeholder-project.jpg";
  }
  return builder.image(source).auto("format").fit("max").url();
};
