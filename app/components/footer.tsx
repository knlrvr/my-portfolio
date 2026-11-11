import Link from "next/link";
import { Reveal } from "./effects/reveal";

const columns = [
  {
    title: "Site",
    links: [
      { label: "home", href: "/" },
      { label: "writing", href: "/writing" },
      { label: "projects", href: "/projects" },
      { label: "photos", href: "/photos" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "uses", href: "/uses" },
      { label: "colophon", href: "/colophon" },
      { label: "rss", href: "/rss" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "github", href: "https://github.com/knlrvr" },
      { label: "linkedin", href: "https://www.linkedin.com/in/kane-lariviere" },
    ],
  },
];

export default function Footer() {

  const sha = process.env.COMMIT_SHA;
  const shortSha = sha?.slice(0, 7);
  const commitUrl =
    sha && sha !== 'dev'
      ? `${process.env.REPO_URL}/commit/${sha}`
      : null;

  return (
    <footer className="border-t border-(--rule)">
      <div className="grid gap-10 px-6 py-12 sm:grid-cols-[10rem_1fr] sm:gap-0 sm:px-10">
        <Reveal delay={0.08}>
          <div className="flex sm:flex-col gap-1.5">
            <span className="font-mono text-[11px] tracking-tighter text-neutral-400 dark:text-neutral-600">[&nbsp;∞&nbsp;]</span>
            <span className="text-xs font-medium tracking-tight">links.</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-3 gap-6">
          {columns.map((col, i) => (
            <Reveal key={col.title} delay={0.08 * (i + 1)}>
              <div className="flex flex-col gap-2.5">
                <span className="mb-1 font-mono text-[11px] tracking-tighter text-neutral-400 dark:text-neutral-600">
                  {col.title}
                </span>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit text-xs tracking-wide transition-colors duration-150 hover:text-neutral-400 dark:hover:text-neutral-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-(--rule) px-6 py-4 font-mono text-[0.625rem] tracking-wider text-neutral-500 sm:px-10">
        <p>© 2026 Kane Lariviere</p>

        {sha && (
          commitUrl ? (
            <Link
              href={commitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-150 hover:text-neutral-400 dark:hover:text-neutral-600"
            >
              {shortSha}
            </Link>
          ) : (
            <span>f00f00</span>
          )
        )}
      </div>
    </footer>
  );
}
