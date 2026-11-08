'use client';

import { motion } from 'framer-motion';
import { brand } from '@/utils/brand';

// ---- Cube geometry (logo space is 400 x 400) ----
const CX = 200; // cube center
const CY = 200;
const L = 150; // edge length of each cube face
const M = 15; // gap between a letter and the edge of its face
const DEPTH = 17; // thickness of each block
const F = L - 2 * M; // area each letter fills on its face
const H = 0.866; // cos(30°)

type Rect = [number, number, number, number]; // x, y, w, h in grid cells

const toPath = (rects: Rect[]) =>
  rects.map(([x, y, w, h]) => `M${x} ${y}h${w}v${h}h${-w}z`).join('');

// S on a 5x7 grid: ends hook inward, corners stepped
//  .XXX.
//  X...X
//  X....
//  XXXXX
//  ....X
//  X...X
//  .XXX.
const S = toPath([
  [1, 0, 3, 1],
  [0, 1, 1, 1],
  [4, 1, 1, 1],
  [0, 2, 1, 1],
  [0, 3, 5, 1],
  [4, 4, 1, 1],
  [0, 5, 1, 1],
  [4, 5, 1, 1],
  [1, 6, 3, 1],
]);

// D on a 5x7 grid (unchanged)
//  XXXX.
//  X...X
//  X...X
//  X...X
//  XXXX.
const D = toPath([
  [0, 1, 5, 1],
  [0, 1, 1, 5],
  [5, 2, 1, 4],
  [0, 6, 5, 1],
]);

// 3 on a 5x7 grid: ends hook inward, short middle bar
//  .XXX.
//  X...X
//  ....X
//  ..XXX
//  ....X
//  X...X
//  .XXX.
const THREE = toPath([
  [1, 0, 3, 1],
  [0, 1, 1, 1],
  [4, 1, 1, 1],
  [4, 2, 1, 1],
  [2, 3, 2, 1],
  [4, 4, 1, 1],
  [0, 5, 1, 1],
  [4, 5, 1, 1],
  [1, 6, 3, 1],
]);

// The three visible faces of a cube corner whose center is (CX, CY).
// origin = the face's top-left corner on screen
// xd / yd = screen direction of the glyph's x axis and y axis
// inward = direction the block is extruded (into the cube)
const FACES = {
  top: {
    origin: [CX, CY - L],
    xd: [H, 0.5],
    yd: [-H, 0.5],
    inward: [0, 1],
  },
  left: {
    origin: [CX - H * L, CY - 0.5 * L],
    xd: [H, 0.5],
    yd: [0, 1],
    inward: [H, -0.5],
  },
  right: {
    origin: [CX, CY],
    xd: [H, -0.5],
    yd: [0, 1],
    inward: [-H, -0.5],
  },
} as const;

// Order here = animation order (S, then D, then 3)
export const glyphs = [
  { key: 'S', d: S, w: 5, h: 7, face: 'top', color: brand.purple },
  { key: 'D', d: D, w: 5, h: 7, face: 'left', color: brand.green },
  { key: '3', d: THREE, w: 5, h: 7, face: 'right', color: brand.pink },
] as const;

export type GlyphKey = (typeof glyphs)[number]['key'];

// Square cells, glyph centered inside its face
function fit(w: number, h: number) {
  const cell = F / Math.max(w, h);
  return { cell, offX: (F - w * cell) / 2, offY: (F - h * cell) / 2 };
}

/** Where grid point (gx, gy) of a glyph lands in the 400x400 logo space (front face). */
export function anchor(
  key: GlyphKey,
  gx: number,
  gy: number,
): [number, number] {
  const g = glyphs.find((x) => x.key === key)!;
  const f = FACES[g.face];
  const { cell, offX, offY } = fit(g.w, g.h);
  const fx = M + offX + gx * cell;
  const fy = M + offY + gy * cell;
  return [
    f.origin[0] + fx * f.xd[0] + fy * f.yd[0],
    f.origin[1] + fx * f.xd[1] + fy * f.yd[1],
  ];
}

export default function IsoLogo({
  start = 0,
  stagger = 0.35,
}: {
  start?: number;
  stagger?: number;
}) {
  return (
    <g>
      {glyphs.map(({ key, d, w, h, face, color }, i) => {
        const f = FACES[face];
        const { cell, offX, offY } = fit(w, h);
        const side = `color-mix(in srgb, ${color} 55%, black)`;

        // k = how far back into the cube this copy sits (0 = front face)
        const place = (k: number) => {
          const ux = M + offX;
          const uy = M + offY;
          const ox =
            f.origin[0] + ux * f.xd[0] + uy * f.yd[0] + f.inward[0] * k;
          const oy =
            f.origin[1] + ux * f.xd[1] + uy * f.yd[1] + f.inward[1] * k;
          return `matrix(${f.xd[0] * cell} ${f.xd[1] * cell} ${f.yd[0] * cell} ${f.yd[1] * cell} ${ox} ${oy})`;
        };

        const delay = start + i * stagger;

        return (
          <motion.g
            key={key}
            initial={{ opacity: 0, y: 120 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay,
              duration: 0.9,
              ease: [0.34, 1.4, 0.64, 1], // slight overshoot, then settles
              opacity: { duration: 0.3, delay },
            }}>
            {/* Extrusion: stacked copies going inward, deepest first */}
            {Array.from({ length: DEPTH }, (_, n) => DEPTH - n).map((k) => (
              <path
                key={k}
                d={d}
                transform={place(k)}
                vectorEffect="non-scaling-stroke"
                strokeWidth={1}
                strokeLinejoin="round"
                style={{ fill: side, stroke: side }}
              />
            ))}
            {/* Front face */}
            <path
              d={d}
              transform={place(0)}
              vectorEffect="non-scaling-stroke"
              strokeWidth={1}
              strokeLinejoin="round"
              style={{ fill: color, stroke: color }}
            />
          </motion.g>
        );
      })}
    </g>
  );
}
