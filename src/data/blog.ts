import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

// Published posts, newest first; drafts show only in `npm run dev`.
export async function posts(side?: 'law' | 'games'): Promise<Post[]> {
  const all = await getCollection('blog', (p) => (import.meta.env.DEV || !p.data.draft) && (!side || p.data.side === side));
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const fmtDate = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
