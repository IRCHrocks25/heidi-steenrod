import React, { useState, useRef, useEffect } from "react";

const ITEMS = [
  {
    letter: "R",
    number: "01",
    title: "Root Cause",
    desc: "The fatigue, gut issues, inflammation, mood changes, and sleep disruption are connected. REWIRE™ looks beneath the surface to understand what's been driving your system into constant protection mode.",
  },
  {
    letter: "E",
    number: "02",
    title: "Energy Systems",
    desc: "You're tired in a way rest doesn't fix. Chronic stress drains the systems responsible for stamina, motivation, and recovery. REWIRE™ restores energy at the biological level.",
  },
  {
    letter: "W",
    number: "03",
    title: "Wiring",
    desc: "Stress becomes wired into your nervous system and hormones. You may overreact to small things, feel constantly on edge, or stay in fight-or-flight even when life looks fine. REWIRE™ helps your system relearn safety.",
  },
  {
    letter: "I",
    number: "04",
    title: "Inflammation & Immune",
    desc: "When stress stays high, inflammation becomes the body's default language: gut dysfunction, pain, autoimmune flares, headaches, brain fog. REWIRE™ supports immune balance so the body can stand down.",
  },
  {
    letter: "R",
    number: "05",
    title: "Resilience",
    desc: "Resilience isn't toughness. It's your body's ability to adapt without breaking. REWIRE™ rebuilds capacity so you can handle life without constantly paying for it afterward.",
  },
  {
    letter: "E",
    number: "06",
    title: "Expression",
    desc: "This is where stress shows up in daily life: sleep, eating, movement, relationships. REWIRE™ helps internal regulation translate into sustainable choices that feel natural, not forced — so you can show up fully in the life you've worked so hard to build.",
  },
];

function AccordionRow({
  item,
  isOpen,
  onToggle,
  isLast,
}: {
  item: typeof ITEMS[0];
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      style={{
        borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "2.25rem 0",
          display: "flex",
          alignItems: "flex-start",
          gap: "0",
          textAlign: "left",
          outline: "none",
        }}
      >
        {/* Large decorative letter */}
        <div
          style={{
            fontFamily: "'Belleza', sans-serif",
            fontSize: "clamp(3rem, 5vw, 4.5rem)",
            color: isOpen ? "#C9A84C" : "rgba(201,168,76,0.55)",
            lineHeight: 1,
            width: "clamp(60px, 8vw, 90px)",
            flexShrink: 0,
            transition: "color 0.35s ease",
            paddingTop: "0.1rem",
          }}
        >
          {item.letter}
        </div>

        {/* Vertical gold rule */}
        <div
          style={{
            width: 1,
            alignSelf: "stretch",
            background: isOpen
              ? "linear-gradient(to bottom, #C9A84C, rgba(201,168,76,0.2))"
              : "rgba(255,255,255,0.1)",
            marginRight: "clamp(1.25rem, 3vw, 2.5rem)",
            flexShrink: 0,
            transition: "background 0.35s ease",
          }}
        />

        {/* Content column */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Number + title row */}
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.9rem", marginBottom: "0" }}>
            <span
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.7rem",
                color: "#4ABCB0",
                letterSpacing: "0.12em",
                fontWeight: 500,
                flexShrink: 0,
              }}
            >
              {item.number}
            </span>
            <h3
              style={{
                fontFamily: "'Belleza', sans-serif",
                fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                color: isOpen ? "#ffffff" : "rgba(255,255,255,0.7)",
                fontWeight: 400,
                margin: 0,
                lineHeight: 1.2,
                transition: "color 0.35s ease",
              }}
            >
              {item.title}
            </h3>
          </div>

          {/* Expandable description */}
          <div
            style={{
              overflow: "hidden",
              height,
              transition: "height 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            <div ref={bodyRef} style={{ paddingTop: "0.85rem", paddingBottom: "0.25rem" }}>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(0.82rem, 1.4vw, 0.95rem)",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.85,
                  margin: 0,
                  maxWidth: 640,
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Chevron */}
        <div
          style={{
            flexShrink: 0,
            marginLeft: "1.5rem",
            paddingTop: "0.35rem",
            transition: "transform 0.35s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke={isOpen ? "#C9A84C" : "rgba(255,255,255,0.3)"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "stroke 0.35s ease" }}
          >
            <path d="M4 7l5 5 5-5" />
          </svg>
        </div>
      </button>
    </div>
  );
}

export function RewireAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <div
      style={{
        maxWidth: 860,
        margin: "0 auto",
        width: "100%",
      }}
    >
      {ITEMS.map((item, i) => (
        <AccordionRow
          key={i}
          item={item}
          isOpen={openIndex === i}
          onToggle={() => handleToggle(i)}
          isLast={i === ITEMS.length - 1}
        />
      ))}
    </div>
  );
}