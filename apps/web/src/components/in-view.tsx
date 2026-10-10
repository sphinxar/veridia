"use client";
import * as React from "react";

/**
 * Wraps content and sets `data-inview="true"` the first time it scrolls into view, so CSS can run
 * a one-shot sequence (see `.steps` / `.checks` in the UI styles). Renders the same markup on the
 * server, so nothing shifts on hydration; without JS the content is simply visible.
 */
export function InView({
  as: Tag = "div",
  className,
  threshold = 0.3,
  children,
}: {
  as?: "div" | "ol" | "ul";
  className?: string;
  threshold?: number;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLElement>(null);
  const [seen, setSeen] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen, threshold]);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className} data-inview={seen ? "true" : "false"}>
      {children}
    </Tag>
  );
}
