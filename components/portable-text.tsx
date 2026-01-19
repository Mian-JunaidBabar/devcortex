"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import { PortableTextBlock } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface PortableTextRendererProps {
  value: PortableTextBlock[] | null;
  className?: string;
}

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-black text-white mb-6 mt-12 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-10 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 mt-8 first:mt-0">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold text-white mb-3 mt-6 first:mt-0">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-slate-300 text-lg leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange-500 pl-6 my-8 italic text-slate-400 text-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-slate-300">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-slate-300">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-lg leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-lg leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-slate-800 text-orange-400 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-orange-500 hover:text-orange-400 underline underline-offset-4 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const imageUrl = urlFor(value).width(1200).url();
      return (
        <figure className="my-10">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={value.alt || "Content image"}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-slate-500 text-sm mt-3">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export function PortableTextRenderer({
  value,
  className = "",
}: PortableTextRendererProps) {
  if (!value) return null;

  return (
    <div className={`prose-custom ${className}`}>
      <PortableText value={value} components={components} />
    </div>
  );
}

// Light theme variant for blog posts
const lightComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 mt-12 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 mt-10 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 mt-8 first:mt-0">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold text-slate-900 mb-3 mt-6 first:mt-0">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-slate-600 text-lg leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-red-500 pl-6 my-8 italic text-slate-500 text-xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-slate-600">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-slate-600">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-lg leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-lg leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-slate-100 text-red-600 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-red-600 hover:text-red-500 underline underline-offset-4 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const imageUrl = urlFor(value).width(1200).url();
      return (
        <figure className="my-10">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={value.alt || "Content image"}
              fill
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-slate-500 text-sm mt-3">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export function PortableTextLight({
  value,
  className = "",
}: PortableTextRendererProps) {
  if (!value) return null;

  return (
    <div className={`prose-custom ${className}`}>
      <PortableText value={value} components={lightComponents} />
    </div>
  );
}
