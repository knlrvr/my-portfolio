import getPostMetadata from './utils/PostMetadata'

export const baseUrl = 'https://knlrvr.dev'

export default async function sitemap() {
  const blogs = getPostMetadata().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
  }))

  const routes = ['', '/writing', '/uses', '/work'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}