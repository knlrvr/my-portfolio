import React from "react";

interface GridLayoutProps {
  columns?: string[];
  children: React.ReactNode;
  className?: string;
}

interface GridRowProps {
  children: React.ReactNode;
  className?: string;
  noBorder?: boolean;
}

interface GridSpacerProps {
  height?: string;
}

export function GridLayout({
  columns = ["16px", "1fr", "16px"],
  children,
  className = "",
}: GridLayoutProps) {
  const colTemplate = columns.join(" ");
  const colCount = columns.length;

  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div
          className="h-full max-w-sm mx-auto"
          style={{ display: "grid", gridTemplateColumns: colTemplate }}
        >
          {Array.from({ length: colCount }).map((_, i) => (
            <div
              key={i}
              className={[
                i === 0 ? "border-l border-neutral-500/20" : "",
                "border-r border-neutral-500/20",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
      </div>

      {/* ── Content rows ── */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function GridRow({
  children,
  className = "",
  noBorder = false,
}: GridRowProps) {
  return (
    <div className={noBorder ? "" : "border-b border-neutral-500/20"}>
      {/* max-w-md matches the vertical lines; max-w-sm content sits inside */}
      <div
        className={[
          "max-w-sm mx-auto px-4",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {children}
      </div>
    </div>
  );
}

export function GridSpacer({ height = "h-20" }: GridSpacerProps) {
  return <div className={`${height} border-b border-neutral-500/20`} />;
}