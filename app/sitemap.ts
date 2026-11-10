import getPostMetadata from './utils/PostMetadata'
import { projects } from './lib/projects'

export const baseUrl = 'https://knlrvr.dev'

export default async function sitemap() {
  const blogs = getPostMetadata().map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
  }))

  const routes = ['', '/writing', '/projects', '/uses', '/work'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
  }))

  return [...routes, ...blogs, ...projectRoutes]
}