export interface ProjectImage {
  src: string
  /** Intrinsic size; only the ratio is used for layout. */
  width: number
  height: number
  alt: string
}

export interface Project {
  slug: string
  title: string
  description: string
  /** First image is the cover. */
  images?: ProjectImage[]
  href?: string
  repo?: string
  content: string[]
}

export const projects: Project[] = [
  {
    slug: 'matte',
    title: 'Matte',
    description: 'A (free) screenshot & image beautifier',
    images: [
      { src: '/matte-matte.png', width: 8192, height: 4607, alt: 'The Matte wordmark on a gradient backdrop' },
      { src: '/matte-from-matte.png', width: 7104, height: 4962, alt: 'The Matte editor, framed with Matte' },
    ],
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
