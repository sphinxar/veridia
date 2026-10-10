"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import { RingedPlanet, Ship } from "./space";

type Vars = React.CSSProperties & Record<`--${string}`, string | number>;
const vars = (v: Record<`--${string}`, string | number>) => v as Vars;

/**
 * Home-only ambient sky, kept to the bare minimum: one ringed planet and one small ship crossing slowly.
 * It fades out as you scroll past the hero.
 */
export function HomeSky() {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  return (
    <div className="sky" aria-hidden>
      <div className="layer" style={vars({ "--depth": 70, "--sdepth": 0.05 })}>
        <div className="planet" style={vars({ "--x": "6vw", "--y": "30vh", "--w": "84px", "--o": 0.42, "--f": "11s", "--fd": "0s" })}>
          <RingedPlanet strokeWidth={1.4} />
        </div>
      </div>
      <div className="layer" style={vars({ "--depth": 36, "--sdepth": 0.03 })}>
        <div className="fly" style={vars({ "--y": "13vh", "--t": "80s", "--dl": "-22s" })}>
          <div className="bob" style={vars({ "--b": "8s", "--bd": "-4s" })}>
            <div className="ship" style={vars({ "--w": "70px", "--o": 0.5 })}>
              <Ship kind="shuttle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
