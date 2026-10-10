import type { CSSProperties } from "react";

/**
 * Minimalist space figures drawn in the same line language as the Veridia mark
 * (a circle crossed by a tilted ring, round caps, thin strokes). Decorative only.
 */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

/** The logo geometry: planet r=26.2 and ring rx=39.1 / ry=6.65 tilted -29deg. */
export function RingedPlanet({ className, style, strokeWidth = 1.6 }: { className?: string; style?: CSSProperties; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 102 92" aria-hidden className={className} style={style} {...stroke}>
      <circle cx="51" cy="46" r="26.2" strokeWidth={strokeWidth} vectorEffect="non-scaling-stroke" />
      <g className="ring-wobble">
        <ellipse cx="51" cy="46" rx="39.1" ry="6.65" transform="rotate(-29 51 46)" strokeWidth={strokeWidth} vectorEffect="non-scaling-stroke" />
      </g>
    </svg>
  );
}

const RING_PATH = "M 90.1 46 A 39.1 6.65 0 1 1 11.9 46 A 39.1 6.65 0 1 1 90.1 46 Z";

/** Large, faint watermark of the mark with a single small body travelling its ring (SMIL; hidden for reduced motion). */
export function OrbitMark({ className }: { className?: string }) {
  return (
    <svg viewBox="-6 -2 114 98" aria-hidden className={className} {...stroke}>
      <circle cx="51" cy="46" r="26.2" strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
      <g transform="rotate(-29 51 46)">
        <ellipse cx="51" cy="46" rx="39.1" ry="6.65" strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
        <circle className="smil" r="1.2" fill="currentColor" stroke="none">
          <animateMotion dur="30s" repeatCount="indefinite" path={RING_PATH} />
        </circle>
      </g>
    </svg>
  );
}

export type ShipKind = "shuttle" | "dart";

/** Two small ships, both pointing right (+x). Wrap in `.ship` to colour them and add a trail. */
export function Ship({ kind, className, strokeWidth = 1.5 }: { kind: ShipKind; className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 64 28" aria-hidden className={className} {...stroke} strokeWidth={strokeWidth} style={{ display: "block", width: "100%", height: "auto", overflow: "visible" }}>
      {kind === "shuttle" && (
        <>
          <path d="M5 14 C15 6.5 40 6.5 59 14 C40 21.5 15 21.5 5 14Z" vectorEffect="non-scaling-stroke" />
          <path d="M17 9 L9 2.5 M17 19 L9 25.5" vectorEffect="non-scaling-stroke" />
          <circle cx="39" cy="14" r="2.3" vectorEffect="non-scaling-stroke" />
        </>
      )}
      {kind === "dart" && (
        <>
          <path d="M4 4 L60 14 L4 24 L15 14 Z" vectorEffect="non-scaling-stroke" />
          <path d="M27 14 H41" vectorEffect="non-scaling-stroke" />
        </>
      )}
    </svg>
  );
}
