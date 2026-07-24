export type PostSection = {
  h2?: string;
  paragraphs: string[];
  list?: string[];
};

export type Post = {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  date: string; // ISO
  readMinutes: number;
  tags: string[];
  pillar?: boolean;
  sections: PostSection[];
};

import { postsA } from "./blog-posts-a";
import { postsB } from "./blog-posts-b";

export const posts: Post[] = [...postsA, ...postsB];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
export const sortedPosts = () => [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

