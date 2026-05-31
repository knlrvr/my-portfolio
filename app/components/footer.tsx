import Link from "next/link";
import { Reveal } from "./effects/reveal";
import SectionStrip from "./section-strip";

const columns = [
  [
    { label: "writing", href: "/writing" },
    { label: "uses", href: "/uses" },
  ],
  [
    { label: "colophon", href: "/colophon" },
    { label: "github", href: "https://github.com/knlrvr"},
  ],
  [
    { label: "linkedin", href: "https://www.linkedin.com/in/kane-lariviere"},
    { label: "twitch", href: "https://twitch.tv/knlrvr"}
  ],
];

export default function Footer() {

  const sha = process.env.COMMIT_SHA;
  const shortSha = sha?.slice(0, 7);
  const commitUrl =
    sha && sha !== 'dev'
      ? `${process.env.REPO_URL}/commit/${sha}`
      : null;

  return (
    <footer className="pt-16 pb-12 max-w-sm mx-auto">
      <SectionStrip label="links" number="∞" />

      <div className="grid grid-cols-3 gap-8 mb-12 pt-8">
        {columns.map((col, i) => (
          <div key={i} className="flex flex-col gap-2.5">
            {col.map((link, index) => (
              <Reveal
                key={link.label}
                delay={0.08 * (index)}
              >
                <Link
                  href={link.href}
                  className="text-xs text-neutral-600 dark:text-neutral-400 hover:text-orange font-base no-underline tracking-wide transition-colors duration-150 w-fit"
                >
                  {link.label}
                </Link>
              </Reveal>
            ))}
          </div>
        ))}
      </div>

      <Reveal delay={0.16}>
        <div className="flex items-center gap-2">
          <p className="font-mono text-[0.625rem] text-neutral-500 tracking-wider">
            © 2026 Kane Lariviere
          </p>
          <p className="text-neutral-500 mb-0.5">&bull;</p>

          {sha && (
            commitUrl ? (
              <Link
                href={commitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.625rem] text-neutral-500 hover:text-orange tracking-wider transition-colors duration-150"
              >
                {shortSha}
              </Link>
            ) : (
              <span className="font-mono text-[0.625rem] text-neutral-500 tracking-wider">
                f00f00
              </span>
            )
          )}
        </div>
      </Reveal>
    </footer>
  );
}