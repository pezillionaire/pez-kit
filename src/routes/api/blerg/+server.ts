import { json } from '@sveltejs/kit';
import { now } from 'svelte/internal';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
  const postDate = new Date().toISOString()
  const post = {
    url: url,
    title: 'my post',
    date: postDate,
    content: '<p>this is my blog post there are many like it but this one is mine.</p>'
  }
  return json(post);
};
