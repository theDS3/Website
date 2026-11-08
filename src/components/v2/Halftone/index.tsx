import { brand } from '@/utils/brand';

const W = 1600;
const H = 1000;

// cx, cy, rx, ry, rotation, color, strength (0 to 1)
// Color lives at the edges and corners; the middle is left empty for text.
const shapes: [number, number, number, number, number, string, number][] = [
  [1500, 780, 640, 250, 28, brand.purple, 0.9], // purple band hugging the bottom-right
  [1500, 960, 300, 150, 28, brand.green, 0.6], // green accent in the bottom-right corner
  [200, 120, 520, 340, -10, brand.pink, 0.8], // pink glow, top-left
  [30, 30, 300, 240, -10, '#ff9ad0', 0.75], // bright core, tucked into the corner
];

// How dark the center gets (0 = none, 1 = solid) and how far the dark area reaches
const CENTER_DARK = 0.88;
const CENTER_REACH = '75%';

// The same shapes drawn twice: white on black (decides how big each dot is),
// and in color (decides what color each dot is).
function art(kind: 'lum' | 'color') {
  const body = shapes
    .map(
      ([cx, cy, rx, ry, rot, color, s]) =>
        `<ellipse cx='${cx}' cy='${cy}' rx='${rx}' ry='${ry}' transform='rotate(${rot} ${cx} ${cy})' fill='${
          kind === 'lum' ? '#fff' : color
        }' opacity='${kind === 'lum' ? s : 1}'/>`,
    )
    .join('');
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${W} ${H}' preserveAspectRatio='xMidYMid slice'>` +
    `<defs><filter id='b' x='-30%' y='-30%' width='160%' height='160%'><feGaussianBlur stdDeviation='90'/></filter></defs>` +
    `<rect width='${W}' height='${H}' fill='#000'/><g filter='url(#b)'>${body}</g></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

const TILE = '6px 6px'; // dot spacing: smaller = finer, grainier grid

export default function Halftone() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 isolate opacity-85 mix-blend-screen">
      {/* Colors */}
      <div
        className="absolute inset-0"
        style={{ background: `${art('color')} center / cover no-repeat` }}
      />
      {/* Dot grid: dots grow where the shapes are bright, vanish where they are dark */}
      <div
        className="absolute inset-0 mix-blend-multiply"
        style={{
          filter: 'brightness(4.5) contrast(25)',
          background: `linear-gradient(90deg, #000, #fff 50%, #000) 0 0 / ${TILE}, linear-gradient(0deg, #000, #fff 50%, #000) 0 0 / ${TILE}, ${art('lum')} center / cover no-repeat`,
          backgroundBlendMode: 'multiply, multiply, normal',
        }}
      />
      {/* Vignette: darkens the middle so text always has a calm backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, rgba(16,16,16,${CENTER_DARK}) 0%, rgba(16,16,16,${CENTER_DARK * 0.6}) 40%, transparent ${CENTER_REACH})`,
        }}
      />
    </div>
  );
}
