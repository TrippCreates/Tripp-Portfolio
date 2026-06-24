import { defineConfig } from 'astro/config';

const BASE = '/Tripp-Portfolio';

// Remark plugin: prepends the site's base path to absolute markdown image URLs
// so ![alt](/images/foo.jpg) works when the site is served from a subpath.
function remarkBaseUrlImages() {
  const normalizedBase = BASE.replace(/\/$/, '');

  return function transformer(tree) {
    function walk(node) {
      if (
        node.type === 'image' &&
        node.url &&
        node.url.startsWith('/') &&
        !node.url.startsWith('//') &&
        !node.url.startsWith(normalizedBase + '/')
      ) {
        node.url = normalizedBase + node.url;
      }
      if (node.children) {
        node.children.forEach(walk);
      }
    }
    walk(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://trippcreates.github.io',
  base: BASE,
  trailingSlash: 'ignore',
  markdown: {
    remarkPlugins: [remarkBaseUrlImages],
  },
});
