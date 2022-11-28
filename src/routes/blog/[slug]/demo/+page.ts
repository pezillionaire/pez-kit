import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  if (params.slug === 'demo') {
    return {
      title: 'Demo post!',
      content: 'this is a test post.'
    };
  }

  throw error(404, 'Not found');
}
