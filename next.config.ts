import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    '/': ['.git', '.next/cache'],
    '/blog/archive/[year]/[month].js': ['.next/cache'],
    '/blog/archive/[year].js': ['.next/cache'],
    '/blog/categories/[slug].js': ['.next/cache'],
    '/blog/search.js': ['.next/cache'],
    '/familly/archive/[year]/[month].js': ['.next/cache'],
    '/familly/archive/[year].js': ['.next/cache'],
    '/familly/categories/[slug].js': ['.next/cache'],
    '/familly/search.js': ['.next/cache'],
    '/blog.js': ['.next/cache'],
    '/familly/[slug].js': ['.next/cache'],
    '/familly.js': ['.next/cache'],
  }
};

export default nextConfig;
