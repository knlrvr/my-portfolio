export interface Project {
  slug: string
  title: string
  description: string
  images?: string[]
  href?: string
  repo?: string
  content: string[]
}

export const projects: Project[] = [
  {
    slug: 'matte',
    title: 'Matte',
    description: 'A (free) screenshot & image beautifier',
    images: ['/matte-matte.png', '/matte-from-matte.png'],
    href: 'https://matte-five.vercel.app/',
    repo: 'https://github.com/knlrvr/matte',
    content: [
      'Matte is a free screenshot & image beautifier: drop in an image, put it on a backdrop, wrap it in a window or browser frame, and export something ready to share. I built it because tools in this space tend to put the useful controls behind a subscription, and I wanted one where everything is simply available. Images never leave the browser; there’s no upload, no account, and no server doing the work.',
      'It’s built with Next.js, TypeScript, and Tailwind, with Zustand holding editor state. Styling is proportional to the image, so the same padding, rounded corners, and window frame look right on a small crop or a 5K screenshot, and exports keep the image’s full resolution, with 2× and 3× options for sharper output.',
      'Matte was also used for the images you see here. Neat!'
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
