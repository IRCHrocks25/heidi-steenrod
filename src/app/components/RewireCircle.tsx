import React, { useState, useEffect, useRef } from "react";

const CARDS = [
  {
    letter: "R",
    number: "01",
    word: "Root Cause",
    lines: ["Root Cause"],
    desc: "The fatigue, gut issues, inflammation, mood changes, and sleep disruption are connected. REWIRE™ looks beneath the surface to understand what's been driving your system into constant protection mode.",
  },
  {
    letter: "E",
    number: "02",
    word: "Energy Systems",
    lines: ["Energy Systems"],
    desc: "You're tired in a way rest doesn't fix. Chronic stress drains the systems responsible for stamina, motivation, and recovery. REWIRE™ restores energy at the biological level.",
  },
  {
    letter: "W",
    number: "03",
    word: "Wiring",
    lines: ["Wiring"],
    desc: "Stress becomes wired into your nervous system and hormones. You may overreact to small things, feel constantly on edge, or stay in fight-or-flight even when life looks fine. REWIRE™ helps your system relearn safety.",
  },
  {
    letter: "I",
    number: "04",
    word: "Inflammation & Immune",
    lines: ["Inflammation &", "Immune"],
    desc: "When stress stays high, inflammation becomes the body's default language: gut dysfunction, pain, autoimmune flares, headaches, brain fog. REWIRE™ supports immune balance so the body can stand down.",
  },
  {
    letter: "R",
    number: "05",
    word: "Resilience",
    lines: ["Resilience"],
    desc: "Resilience isn't toughness. It's your body's ability to adapt without breaking. REWIRE™ rebuilds capacity so you can handle life without constantly paying for it afterward.",
  },
  {
    letter: "E",
    number: "06",
    word: "Expression",
    lines: ["Expression"],
    desc: "This is where stress shows up in daily life: sleep, eating, movement, relationships. REWIRE™ helps internal regulation translate into sustainable choices that feel natural, not forced.",
  },
];

/* ── geometry ────────────────────────────────── */
const VB = 920;
const CX = VB / 2;   // 460
const CY = VB / 2;   // 460
const RING_R = 200;
const LABEL_R = 295;
const DOT_R = 10;
const LINE_H = 24;

function polar(angleDeg: number, r: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

function textAnchorFor(i: number): "start" | "middle" | "end" {
  const a = i * 60;
  if (a > 30 && a < 150) return "start";
  if (a > 210 && a < 330) return "end";
  return "middle";
}

/* ── component ──────────────────────────────── */
export function RewireCircle() {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const pauseRef = useRef(false);

  const pick = (i: number) => {
    setActive(i);
    pauseRef.current = true;
    setTimeout(() => {
      pauseRef.current = false;
    }, 9000);
  };

  /* auto-rotate */
  useEffect(() => {
    const t = setInterval(() => {
      if (!pauseRef.current) setActive((a) => (a + 1) % 6);
    }, 3800);
    return () => clearInterval(t);
  }, []);

  const card = CARDS[active];

  /* spoke endpoint */
  const spoke = polar(active * 60, RING_R);

  return (
    <div className="rewire-circle-wrap">
      {/* ── SVG diagram ── */}
      <svg
        viewBox={`0 0 ${VB} ${VB}`}
        width="100%"
        style={{ display: "block", overflow: "visible" }}
        aria-label="REWIRE™ Framework interactive diagram"
      >
        {/* outer decorative thin rings */}
        <circle
          cx={CX} cy={CY} r={RING_R + 28}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
        />
        <circle
          cx={CX} cy={CY} r={RING_R}
          fill="none"
          stroke="rgba(255,255,255,0.13)"
          strokeWidth="1.5"
        />
        {/* inner glow fill */}
        <circle
          cx={CX} cy={CY} r={RING_R - 1}
          fill="rgba(90,99,163,0.08)"
        />

        {/* dashed spoke to active node */}
        <line
          x1={CX} y1={CY}
          x2={spoke.x} y2={spoke.y}
          stroke="#52c9a0"
          strokeWidth="1"
          strokeOpacity="0.22"
          strokeDasharray="4 5"
        />

        {/* ── nodes ── */}
        {CARDS.map((c, i) => {
          const dot   = polar(i * 60, RING_R);
          const label = polar(i * 60, LABEL_R);
          const ta    = textAnchorFor(i);
          const isActive  = active === i;
          const isHovered = hovered === i;

          return (
            <g
              key={i}
              onClick={() => pick(i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              {/* active outer ring */}
              {isActive && (
                <circle
                  cx={dot.x} cy={dot.y} r={DOT_R + 9}
                  fill="none"
                  stroke="#52c9a0"
                  strokeWidth="1.5"
                  opacity="0.35"
                />
              )}
              {/* hover ring */}
              {isHovered && !isActive && (
                <circle
                  cx={dot.x} cy={dot.y} r={DOT_R + 6}
                  fill="none"
                  stroke="rgba(82,201,160,0.3)"
                  strokeWidth="1"
                />
              )}
              {/* dot */}
              <circle
                cx={dot.x} cy={dot.y} r={DOT_R}
                fill={
                  isActive  ? "#52c9a0"
                  : isHovered ? "rgba(82,201,160,0.45)"
                  : "rgba(255,255,255,0.18)"
                }
                stroke={isActive ? "#52c9a0" : "rgba(255,255,255,0.38)"}
                strokeWidth="1.5"
              />

              {/* number */}
              <text
                x={label.x}
                y={label.y - LINE_H}
                textAnchor={ta}
                fill="rgba(255,255,255,0.25)"
                fontSize="15"
                fontFamily="'Montserrat', sans-serif"
                letterSpacing="0.08em"
              >
                {c.number}
              </text>

              {/* word label */}
              <text
                x={label.x}
                y={label.y}
                textAnchor={ta}
                fill={
                  isActive  ? "#52c9a0"
                  : isHovered ? "rgba(255,255,255,0.92)"
                  : "rgba(255,255,255,0.58)"
                }
                fontSize="20"
                fontFamily="'Montserrat', sans-serif"
                fontWeight={isActive ? "600" : "400"}
              >
                {c.lines.map((ln, li) => (
                  <tspan key={li} x={label.x} dy={li === 0 ? 0 : LINE_H + 2}>
                    {ln}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}

        {/* ── center content via foreignObject ── */}
        <foreignObject x={CX - 155} y={CY - 165} width="310" height="330">
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "1.25rem",
              boxSizing: "border-box",
            }}
          >
            <div key={active} className="rewire-center-fade">
              {/* large letter */}
              <div
                style={{
                  fontFamily: "'Belleza', sans-serif",
                  fontSize: "5.5rem",
                  color: "#52c9a0",
                  lineHeight: 1,
                  marginBottom: "0.15rem",
                }}
              >
                {card.letter}
              </div>
              {/* number */}
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.28)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "0.3rem",
                }}
              >
                {card.number}
              </div>
              {/* word */}
              <div
                style={{
                  fontFamily: "'Belleza', sans-serif",
                  fontSize: "1.35rem",
                  color: "rgba(255,255,255,0.88)",
                  fontStyle: "italic",
                  marginBottom: "0.6rem",
                  lineHeight: 1.25,
                }}
              >
                {card.word}
              </div>
              {/* description */}
              <div
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.48)",
                  lineHeight: 1.65,
                }}
              >
                {card.desc}
              </div>
            </div>
          </div>
        </foreignObject>
      </svg>

      {/* ── dot-navigation (visible on all screens) ── */}
      <div className="rewire-dots">
        {CARDS.map((c, i) => (
          <button
            key={i}
            onClick={() => pick(i)}
            className={`rewire-dot-btn${active === i ? " active" : ""}`}
            aria-label={c.word}
            title={c.word}
          />
        ))}
      </div>

      {/* ── mobile description panel (below circle on small screens) ── */}
      <div className="rewire-mobile-panel">
        <div key={active} className="rewire-center-fade">
          <div className="rewire-mobile-meta">
            <span className="rewire-mobile-letter">{card.letter}</span>
            <span className="rewire-mobile-num">{card.number}</span>
          </div>
          <h4 className="rewire-mobile-word">{card.word}</h4>
          <p className="rewire-mobile-desc">{card.desc}</p>
        </div>
      </div>
    </div>
  );
}