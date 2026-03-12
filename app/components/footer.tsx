import Link from "next/link";

const columns = [
  [
    { label: "work", href: "/work" },
    { label: "writing", href: "/writing" },
    { label: "uses", href: "/uses" },
  ],
  [
    { label: "photos", href: "/photos" },
    { label: "contact", href: "/contact" },
    { label: "colophon", href: "/colophon" },
  ],
  [
    { label: "github", href: "https://github.com/knlrvr" },
    { label: "linkedin", href: "https://www.linkedin.com/in/kane-lariviere" },
  ],
];

export default function Footer() {
  return (
    <footer className="pt-16 pb-12 max-w-2xl mx-auto">
      <div className="relative h-px mb-12">
        <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800" />
        <div className="absolute top-0 right-0 w-12 h-px bg-[#FF2D20]" />
      </div>

      <div className="grid grid-cols-3 gap-8 mb-12">
        {columns.map((col, i) => (
          <div key={i} className="flex flex-col gap-2.5">
            {col.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-neutral-600 dark:text-neutral-400 hover:text-[#FF2D20] font-base no-underline tracking-wide transition-colors duration-150 w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <p className="font-mono text-[0.625rem] text-neutral-500 tracking-wider">
        © 2026 Kane Lariviere
      </p>
    </footer>
  );
}