import Logo from "../../imports/Logo";

/**
 * The Figma logo canvas is exactly 3558.5 × 527 px.
 *  - Symbol (Varlik):  x = 0 … 1027 px
 *  - Text block:       x = 1116 … 3558 px
 * We scale the whole canvas via CSS transform so the logo
 * renders crisply at any target width.
 */
const CANVAS_W = 3558.5;
const CANVAS_H = 527;

interface SerenovaLogoProps {
  /** Rendered width in px (height is calculated automatically). */
  width?: number;
  /** Pass true when placing on a dark background — renders a white version. */
  light?: boolean;
  className?: string;
}

export function SerenovaLogo({ width = 240, light = false, className = "" }: SerenovaLogoProps) {
  const scale = width / CANVAS_W;
  const height = Math.round(CANVAS_H * scale);

  return (
    <div
      className={className}
      style={{
        width,
        height,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        display: "inline-block",
        filter: light ? "brightness(0) invert(1) opacity(0.9)" : undefined,
      }}
    >
      {/* Full-size canvas, scaled to target width via transform */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: CANVAS_W,
          height: CANVAS_H,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        <Logo />
      </div>
    </div>
  );
}
