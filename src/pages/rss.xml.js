import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '#config.mts';
import { getCollection } from 'astro:content';

export async function get() {
  const blog = await getCollection('blog');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
  });
}
