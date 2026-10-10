"use client";
import * as React from "react";
import { usePathname } from "next/navigation";

type Vars = React.CSSProperties & Record<`--${string}`, string | number>;
const vars = (v: Record<`--${string}`, string | number>) => v as Vars;

/** parallax depth (px at full pointer travel) and scroll depth (px per px scrolled) per cloud */
const CLOUDS: [depth: number, scroll: number][] = [
  [60, 0.03],
  [90, 0.05],
  [80, 0.04],
  [110, 0.06],
  [140, 0.08],
  [120, 0.07],
  [170, 0.1],
  [100, 0.05],
];

const TWINKLES: [x: string, y: string, size: number, period: number, delay: number][] = [
  ["9vw", "13vh", 3, 4.2, 0], ["27vw", "27vh", 2, 5.6, -2], ["47vw", "9vh", 3, 4.8, -1.5], ["71vw", "30vh", 2, 6.2, -3.5],
  ["88vw", "12vh", 3, 3.8, -1], ["93vw", "58vh", 2, 5, -2], ["15vw", "74vh", 2, 5.8, -2.2],
];

/**
 * Animated background. Layers, back to front: violet/indigo/magenta clouds, light shafts, three
 * starfields, film grain. Each layer sits in a parallax wrapper driven by CSS variables that this
 * component sets on <html> (pointer position and scroll), so the sky follows you.
 * Calmer on inner pages so forms stay easy to read.
 */
export function Aurora() {
  const pathname = usePathname();

  React.useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let sy = 0;
    let raf = 0;
    const loop = () => {
      raf = 0;
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      root.style.setProperty("--mx", cx.toFixed(4));
      root.style.setProperty("--my", cy.toFixed(4));
      root.style.setProperty("--sy", sy.toFixed(1));
      if (Math.abs(tx - cx) > 0.0005 || Math.abs(ty - cy) > 0.0005) raf = requestAnimationFrame(loop);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      tx = e.clientX / window.innerWidth - 0.5;
      ty = e.clientY / window.innerHeight - 0.5;
      kick();
    };
    const onScroll = () => {
      sy = window.scrollY;
      kick();
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      kick();
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    onScroll();

    // Adaptive quality: if the first seconds run below ~26 fps, switch to the lite background.
    let sampler = 0;
    const startSampling = () => {
      const frames: number[] = [];
      let last = performance.now();
      const sample = (now: number) => {
        frames.push(now - last);
        last = now;
        if (frames.length < 50) {
          sampler = requestAnimationFrame(sample);
          return;
        }
        frames.sort((a, b) => a - b);
        if ((frames[Math.floor(frames.length / 2)] ?? 0) > 38) root.dataset.perf = "lite";
      };
      sampler = requestAnimationFrame(sample);
    };
    const warmup = window.setTimeout(() => {
      if (document.visibilityState === "visible") startSampling();
    }, 3200);

    return () => {
      window.clearTimeout(warmup);
      if (sampler) cancelAnimationFrame(sampler);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="aurora" aria-hidden data-calm={pathname === "/" ? "false" : "true"}>
      {CLOUDS.map(([depth, scroll], i) => (
        <div key={i} className="layer" style={vars({ "--depth": depth, "--sdepth": scroll })}>
          <span className={`cloud cloud-${i + 1}`} />
        </div>
      ))}
      <div className="layer" style={vars({ "--depth": 50, "--sdepth": 0.04 })}>
        <span className="ray ray-1" />
      </div>
      <div className="layer" style={vars({ "--depth": 40, "--sdepth": 0.03 })}>
        <div className="stars">
          <i />
        </div>
      </div>
      <div className="layer" style={vars({ "--depth": 110, "--sdepth": 0.07 })}>
        {TWINKLES.map(([x, y, s, p, d], i) => (
          <span key={i} className="tw" style={vars({ "--x": x, "--y": y, "--s": `${s}px`, "--p": `${p}s`, "--pd": `${d}s` })} />
        ))}
      </div>
      <div className="grain" />
    </div>
  );
}
