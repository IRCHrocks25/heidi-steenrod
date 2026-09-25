import React, { useState, useEffect } from "react";
import bgFlower from "figma:asset/f900a351fe8bcde5b66aada289764c7b4022705d.webp";
import bgLeaves from "figma:asset/99eba433384d079aa1ff84ab3ea20f9413d37c96.webp";
import "./styles/serenova.css";
import wanishiLogo from "figma:asset/5250bb740b07aa0be3342613feec9d1105af37af.png";
import { RewireAccordion } from "./components/RewireAccordion";
import heidiImg from "@/imports/ChatGPT_Image_19_Ag_u_2026_18_38_35_2.webp";
import heidiAboutImg from "@/imports/IMG_4607.webp";
import testiPhoto from "figma:asset/98dba751f717623dc7d1e1999dc23286b023cded.webp";
import {
  Award, Activity, Microscope, Gauge, Atom, Sprout,
  Sun, Zap, HeartHandshake, Compass, Leaf, Waves,
} from "lucide-react";

import heroBgImg from "figma:asset/5de5a41352649823b3232605258be6f273b66bfa.webp";
import ctaBgImg from "@/imports/ChatGPT_Image_6_Tem_2026_15_43_00-1.webp";
import ctaRightImg from "@/imports/ChatGPT_Image_6_Tem_2026_15_37_34_1.webp";
import certFnaBadge from "figma:asset/6843721a62a0a872d72dc2fa8833e9220713c91c.png";
import certNeuroBadge from "figma:asset/d5fc2a75897708e2b630330a6e91e3e5fbaeb25f.png";
import costBgImg from "figma:asset/5250878833393f9b50178b6c53a101883ba1e9b3.webp";
import heidiCallingPhoto from "figma:asset/0ee53c4f8b5cb8f8df4802deab4713dac449e247.webp";
import speakingImg from "figma:asset/b073acc77ec46f1f27855c1c28f9d18580a22f34.webp";
import otherSideImg from "@/imports/Looks_LIke_on_the_OTHER_SIDE_LE_upscale_gentle.webp";

const heidiCallingImg = "https://images.unsplash.com/photo-1704775986647-b2fd38120e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBsYWIlMjBjb2F0JTIwc3RldGhvc2NvcGUlMjBvdXRkb29yJTIwaGFuZHMlMjBvbiUyMGhpcHMlMjBjb25maWRlbnR8ZW58MXx8fHwxNzczNjgxODE2fDA&ixlib=rb-4.1.0&q=80&w=1080";

/* ─ Wave Divider ─ */
function Wave({
  fromColor,
  toColor,
  path,
}: {
  fromColor: string;
  toColor: string;
  path: string;
}) {
  return (
    <div className="wave-row" style={{ background: fromColor }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "80px" }}
      >
        <path d={path} fill={toColor} />
      </svg>
    </div>
  );
}

/* ─ Nav ─ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#framework", label: "Framework" },
    { href: "#process", label: "Programs" },
    { href: "#stories", label: "Stories" },
    { href: "#why", label: "Resources" },
  ];

  return (
    <>
      <nav id="mainNav" className={`sn-nav${scrolled ? " scrolled" : ""}`}>
        <ul className="nav-links nav-left">
          {navLinks.slice(0, 3).map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#top" className="nav-logo" aria-label="Wanishi Wellness – Home">
          <img src={wanishiLogo} alt="Wanishi Wellness" className="nav-logo-img" />
        </a>
        <ul className="nav-links nav-right">
          {navLinks.slice(3).map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li><a href="#contact" className="nav-cta">Get Started</a></li>
        </ul>
        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="3" y1="16" x2="21" y2="16" />
              </>
            )}
          </svg>
        </button>
      </nav>
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="nav-cta-mobile"
        >
          Get Started
        </a>
      </div>
    </>
  );
}

/* ─ Hero ─ */
function Hero() {
  return (
    <section className="hero hero-split" id="top">
      {/* Left column — content */}
      <div className="hero-split-left">
        <div className="hero-text">
          <div className="hero-eyebrow">Functional Healing Strategist</div>
          <h1>
            Rewire Your Response.<br />
            <em><span className="ul-word ul-1">Restore Your Health.</span></em><br />
            Reclaim Your Vitality.
          </h1>
          <p className="hero-tagline">
            You've become so good at pushing through that you may not realize your
            body has been surviving for years.
          </p>
          <p className="hero-sub">
            Stress isn't always loud. Sometimes it looks like exhaustion, brain
            fog, poor sleep, gut issues, anxiety, or simply not feeling like
            yourself anymore.
          </p>
          <div className="hero-ctas">
            <a href="#assessment" className="btn-main">
              Take the Stress Code™ Assessment
            </a>
            <a href="#contact" className="btn-ghost-hero">
              Schedule a Private Consultation
            </a>
          </div>
          {/* Certification credibility strip */}
          <div className="hero-certs">
            <span className="hero-certs-label">Certified &amp; Credentialed</span>
            <div className="hero-certs-badges">
              <img
                src={certFnaBadge}
                alt="Functional Nutrition Alliance – Official Certification"
                className="hero-cert-badge"
              />
              <img
                src={certNeuroBadge}
                alt="Neuroencoding Licensed Specialist"
                className="hero-cert-badge"
              />
              <img
                src="https://cdn.katalyst-crm.com/t1/Brain%20Health%20Trainer%20Badge.png"
                alt="Brain Health Trainer Certification"
                className="hero-cert-badge hero-cert-badge--boost"
              />
              <img
                src="https://cdn.katalyst-crm.com/a/038b97e5-7c39-6982-30bf-eae6881cd489"
                alt="Functional Medicine Certified Practitioner"
                className="hero-cert-badge hero-cert-badge--boost"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right column — Heidi's photo */}
      <div className="hero-split-right">
        <img
          src={heidiImg}
          alt="Heidi Steenrod, MSN, RN — Functional Healing Strategist"
          className="hero-heidi-img"
        />
        {/* fade from navy into the photo */}
        <div className="hero-split-fade" />
        {/* credential badge overlay */}
        <div className="hero-heidi-badge">
          <strong>Heidi Steenrod</strong>
          <span>MSN, RN, Functional Healing Strategist</span>
        </div>
      </div>

    </section>
  );
}

/* ─ Marquee ─ */
const MARQUEE_ITEMS = [
  "Stress Is the Signal",
  "Nervous System Regulation",
  "Root Cause Healing",
  "Emotional Resilience",
  "Functional Nutrition",
  "Brain + Body Connection",
  "Regulation Before Optimization",
  "Lasting Behavior Change",
  "Blood Work Analysis",
];

function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <React.Fragment key={i}>
            <span className="m-item">{item}</span>
            <span className="dot" aria-hidden="true">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ─ Alarm Section ─ */
function AlarmSection() {
  return (
    <section className="alarm-sec" id="alarm">
      <div className="alarm-inner">
        <div className="alarm-left">
          <div className="sec-label reveal">Origin Story</div>
          <h2 className="reveal">
            Before the <em><span className="ul-word ul-2">Alarm Bells</span></em>
          </h2>
          <div className="alarm-lead reveal">
            <p>
              Most people think health changes in an instant: a diagnosis, a
              collapse, a moment where everything falls apart.
            </p>
            <p>But that's not how it actually happens.</p>
          </div>
          <div className="alarm-pull reveal">
            Long before the alarm bells go off,<br />the body <em>whispers</em>.
          </div>
          <div className="alarm-body reveal">
            <p>
              It tightens before it breaks. It adapts before it collapses. It
              protects before it fails.
            </p>
            <p>
              Like a home with a small electrical spark behind the wall, the
              danger isn't the fire. It's the unnoticed heat building quietly
              over time.
            </p>
          </div>
        </div>
        <div className="alarm-right">
          <div className="alarm-panel reveal">
            <div className="alarm-panel-num">01</div>
            <p>
              As a nurse, I spent years meeting people{" "}
              <strong>after the fire</strong>. In hospital beds, in ICUs, in
              moments where the question was no longer{" "}
              <em>how do I feel better</em>, but{" "}
              <em>how much damage has already been done</em>.
            </p>
          </div>
          <div className="alarm-panel reveal">
            <div className="alarm-panel-num">02</div>
            <p>
              At the same time, life invited me into my own reckoning. I watched
              people I loved walk two very different health journeys. One ending
              far too soon, another transforming into a picture of vitality
              through whole-person, integrative care.
            </p>
            <p
              style={{
                marginTop: ".85rem",
                fontFamily: "'Belleza',sans-serif",
                fontSize: "1.05rem",
                fontStyle: "italic",
                color: "var(--primary)",
              }}
            >
              That contrast changed everything.
            </p>
          </div>
          <div className="alarm-panel reveal">
            <div className="alarm-panel-num">03</div>
            <p>
              I began to see how many people were silently losing ground — not
              because they were failing, but because{" "}
              <strong>no one had taught them how to listen sooner</strong>.
            </p>
            <p style={{ marginTop: ".85rem" }}>
              Health is not something that disappears overnight. It's something
              we either tend to or override every single day.
            </p>
          </div>
          <div className="alarm-cta-line reveal">
            <span className="alarm-cta-text">
              What I do now is help people{" "}
              <em>listen before the alarm bells.</em> Before stress hardens into
              disease. Before exhaustion becomes identity. Before "if only"
              becomes the loudest voice in the room.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─ Cost Section ─ */
function CostSection() {
  const symptoms = [
    "Sugar cravings you can't shake",
    "Brain fog that clouds your thinking",
    "Gut dysfunction that disrupts your day",
    "Headaches that won't quit",
    "Inflammation quietly building",
    "Shallow, unrestorative sleep",
    "Energy that never fully returns",
  ];
  return (
    <section
      className="cost-sec"
      id="survival"
      style={{
        position: "relative",
        backgroundImage: `linear-gradient(to right, rgba(18,14,36,0.96) 0%, rgba(18,14,36,0.9) 40%, rgba(18,14,36,0.45) 68%, rgba(18,14,36,0.12) 100%), url(${costBgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        paddingTop: "calc(6rem + 72px)",
        paddingBottom: "3rem",
      }}
    >
      {/* Top wave — f7f6f2 (AlarmSection) flowing into the leaf image */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 72, display: "block", pointerEvents: "none" }}
      >
        <path d="M0,25 C350,80 800,0 1150,55 C1320,80 1410,20 1440,40 L1440,0 L0,0 Z" fill="#f7f6f2" />
      </svg>

      <div className="cost-inner">
        <div className="cost-content">
        <div className="cost-declaration reveal">
          <div className="sec-label" style={{ color: "rgba(255,255,255,.5)" }}>
            The Real Cost
          </div>
          <h2>
            The Real Cost of Staying in <em><span className="ul-word ul-6">Survival Mode</span></em>
          </h2>
        </div>
        <div className="cost-grid">
          <div className="cost-narrative reveal">
            <p className="cost-opener">
              You're not lazy. You're not undisciplined. You're not broken.
            </p>
            <p className="cost-bold">
              Your nervous system is stuck in protection mode.
            </p>
            <p>
              And when your body believes it's under constant threat, everything
              changes. Sleep becomes shallow. Energy becomes scarce. Clarity
              becomes elusive. The things that used to work — willpower,
              routines, discipline — stop landing the way they once did.
            </p>
            <p>
              This isn't about needing more motivation. It's about a system
              that's been running on high alert for so long, it no longer knows
              how to rest.
            </p>
            <p>
              The cost isn't just fatigue. It's the quiet erosion of vitality.
              The creeping sense that something is off. The growing gap between
              how you look on paper and how you actually feel.
            </p>
          </div>
          <div className="cost-symptoms reveal">
            <div className="cost-symptoms-label">
              These aren't separate problems —<br />they're all connected:
            </div>
            <ul className="symptom-tags">
              {symptoms.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cost-opportunity reveal">
          <div className="cost-opp-inner">
            <div className="cost-opp-label">The Opportunity</div>
            <h3>
              What if you could interrupt that pattern?<br />
              <em>
                What if your body could remember what safety feels like — and
                build from there?
              </em>
            </h3>
            <p>That's where this work begins.</p>
            <a href="#assessment" className="btn-opp">
              Take the Stress Code™ Assessment →
            </a>
          </div>
        </div>
        </div>
      </div>

    </section>
  );
}

/* ─ About ─ */
function AboutSection() {
  const storyRows = [
    {
      era: "30+ Years of Clinical Practice",
      hasBar: true,
      body: (
        <>
          <p>
            For over 30 years, I worked as a Registered Nurse in some of the
            most intense environments healthcare has to offer. Open-heart ICU.
            Leadership roles. The kind of work where precision, calm, and
            presence aren't optional.
          </p>
          <p>But life has a way of teaching you what textbooks can't.</p>
        </>
      ),
    },
    {
      era: "The Contrast That Changed Everything",
      hasBar: true,
      body: (
        <>
          <p>
            I walked beside my best friend and my husband through parallel
            cancer journeys. One path ended far too soon. The other transformed
            into a story of vitality through integrative, whole-person care.
          </p>
          <p className="story-pull">
            <em>That contrast changed everything.</em>
          </p>
        </>
      ),
    },
    {
      era: "My Own Reckoning",
      hasBar: true,
      body: (
        <>
          <p>
            That realization turned inward. I saw how long I had been ignoring
            my own internal alarm system. The smoldering before the eruption.
            Years of pushing through early adult life.
          </p>
          <div className="story-symptoms">
            {[
              "Rosacea I didn't yet understand",
              "IBS & ongoing GI distress",
              "Unexplained chest pressure",
              "Difficulty taking a full breath",
              "A full cardiac workup — thankfully negative",
            ].map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          <p>
            And still I kept pushing. What didn't show up on the tests was the
            truth I could no longer ignore:{" "}
            <strong>
              my body had been carrying stress long before it had words for it.
            </strong>
          </p>
        </>
      ),
    },
    {
      era: "The Calling",
      hasBar: false,
      body: (
        <>
          <p>
            It turned this work into a calling: to help people stack the deck in
            their favor long before a hospital bed becomes the teacher.
          </p>
          <p>
            That's why I founded Wanishi Wellness, where I bring my clinical foundation together with neuroscience,
            functional medicine, and functional nutrition — combined with a deep
            understanding of how stress rewires the body. Not to diagnose. Not
            to prescribe. But to help high-performing professionals recognize the
            whispers, regulate their nervous systems, and build health that
            lasts.
          </p>
          <div className="story-mission">
            <p>
              <strong>This isn't about perfection.</strong> It's about agency.
              It's about giving your body what it's been asking for all along.
            </p>
            <a
              href="#process"
              className="btn-accent-block"
              style={{ marginTop: "1.25rem", display: "inline-block" }}
            >
              Explore Private Coaching →
            </a>
          </div>
        </>
      ),
    },
  ];

  return (
    <section className="about-sec" id="about">
      <div className="about-ghost">Heidi</div>
      <div className="about-grid">
        <div className="about-img reveal">
          <div className="about-img-frame">
            <img src={heidiAboutImg} alt="Heidi Steenrod" />
            <div className="about-img-frame-overlay" />
          </div>
          <div className="about-badge">
            ✦ MSN, RN<br />Functional Healing Strategist
          </div>
        </div>
        <div className="about-text reveal">
          <span className="sec-label">Who I Am</span>
          <span className="script-tag">
            <span className="ul-word ul-4">Hi, I'm Heidi Steenrod</span>
          </span>
          <h2>
            I didn't leave the hospital because I stopped <em><span className="ul-word ul-2">caring about people.</span></em>
          </h2>
          <blockquote className="about-quote">
            "I left because I wanted to meet them earlier. Before the diagnosis,
            before the crisis, before the body had to shout to be heard."
          </blockquote>
          <div className="pills">
            {[
              "MSN, RN — 30+ Years",
              "Brain Health Trainer",
              "Neuroscience",
              "Functional Medicine",
              "Functional Nutrition",
              "Open-Heart ICU",
              "Certified Neuroencoding Specialist — Joseph McClendon III's Neuroencoding Institute",
            ].map((p) => (
              <span key={p} className="pill">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="about-story">
        {storyRows.map((row, i) => (
          <div key={i} className="about-story-row reveal">
            <div className="story-marker">
              <div className="story-line-dot" />
              {row.hasBar && <div className="story-line-bar" />}
            </div>
            <div className="story-content">
              <div className="story-era">{row.era}</div>
              {row.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─ Testimonials ─ */
function TestimonialsSection() {
  const [active, setActive] = React.useState(0);
  const [animKey, setAnimKey] = React.useState(0);

  const cards = [
    {
      headline: "Mindset Skills That Delivered Real Results",
      text: "The mindset coaching Heidi offers has been indispensable. Her insights helped me understand situations that previously got under my skin. Having these skill sets at my disposal has given me focus, energy, and calm.",
      name: "Tina S.",
      role: "Serial Entrepreneur, CEO\nWomen's Small Business Owners",
    },
    {
      headline: "Out of Fight-or-Flight — Optimal Bloodwork in 12 Weeks",
      text: "Over twelve weeks, I started getting my body out of fight-or-flight mode and achieved optimal improvements in my bloodwork. Heidi helped me understand functional nutrition and rewire my mindset to reach my goals.",
      name: "Kristi",
      role: "Office Manager",
    },
    {
      headline: "New Thought Patterns, Real-Life Tools",
      text: "Heidi provided a safe environment to thrive and heal in. Her knowledge and willingness to help you rewire and create new thought patterns are phenomenal. She gave me accurate tools to help me in my everyday life.",
      name: "Karly F.",
      role: "CEO, Entrepreneur\nSocial Media Consultant",
    },
    {
      headline: "She Gave Us the Tools to Believe Real Change Is Possible",
      text: "I have been the facilitator for Bariatric Support Groups since 1998. Heidi presented 'Why We Do What We Do, Even When We Know Better.' What first comes to mind is 'I'm lacking willpower.' Heidi taught our group how to better understand these situations and concentrate on how far we've come. Her delivery is simple, yet detailed, and I love the huge number of everyday examples. She provided the tools to better understand ourselves and believe real change is possible for each one of us. She was so inspiring that I signed up for her 'Dare To Be Magnificent' class after she presented to our bariatric group. Thank you, Heidi — I'm grateful for your coaching, mentorship, and for giving me the tools to be Magnificent!",
      name: "Cathy Uram, RN, CBN",
      role: "Metabolic & Bariatric Surgery (MBS) Coordinator\nProMedica Weight Loss Surgery",
    },
  ];

  const [paused, setPaused] = React.useState(false);
  const [tick, setTick] = React.useState(0);

  const goTo = (i: number) => {
    setActive(i);
    setAnimKey(k => k + 1);
    setTick(t => t + 1);
  };
  const prev = () => goTo((active - 1 + cards.length) % cards.length);
  const next = () => goTo((active + 1) % cards.length);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setActive(a => (a + 1) % cards.length);
      setAnimKey(k => k + 1);
      setTick(t => t + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [cards.length, paused, tick]);

  const c = cards[active];

  return (
    <section className="testi-sec" id="stories">
      <div className="testi-outer">
        {/* Section header */}
        <div className="testi-header">
          <div className="sec-label reveal" style={{ justifyContent: "center", display: "flex", marginBottom: ".35rem" }}>
            Client Stories
          </div>
          <h2 className="reveal">
            What Clients <em><span className="ul-word ul-7">Experience</span></em>
          </h2>
        </div>

        {/* Carousel card — image left, content right */}
        <div
          className="tcard-carousel"
          key={animKey}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="tcard-img-panel">
            <img src={testiPhoto} alt="Client experience" className="tcard-img" />
          </div>
          <div className="tcard-body">
            <div className="tcard-headline">{c.headline}</div>
            <div className="tcard-stars">★★★★★</div>
            <p className="tcard-text">{c.text}</p>
            <div className="tcard-author">
              <div className="tcard-name">{c.name}</div>
              <div className="tcard-role" style={{ whiteSpace: "pre-line" }}>{c.role}</div>
            </div>
          </div>
        </div>

        {/* Prev / dots / Next */}
        <div className="testi-nav">
          <button className="testi-arrow" onClick={prev} aria-label="Previous testimonial">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 4l-6 6 6 6" />
            </svg>
          </button>
          <div className="testi-dots">
            {cards.map((_, i) => (
              <button
                key={i}
                className={`testi-dot${active === i ? " active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button className="testi-arrow" onClick={next} aria-label="Next testimonial">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 4l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─ Hear Section ─ */
function HearSection() {
  const items = [
    {
      said: "I'm tired all the time, no matter how much I sleep.",
      see: "A nervous system that never fully shuts down. Your body is working overtime to protect you, even when there's no real threat.",
      doText:
        "Regulate first. Before nutrition. Before mindset. We teach your system how to recognize safety again.",
    },
    {
      said: "I know what I should do, but I just can't seem to follow through.",
      see: "A gap between intention and biology. Your body doesn't have the regulatory capacity to support the habits you're trying to build.",
      doText:
        "Stabilize the foundations. Air, water, food, sleep. The inputs that allow everything else to work.",
    },
    {
      said: "I've tried everything, and nothing sticks.",
      see: "A pattern of optimizing before regulating. You're trying to build on unstable ground.",
      doText:
        "Support your biology first. Then integrate sustainable habits that actually fit your life.",
    },
    {
      said: "I'm dealing with an autoimmune condition and nothing seems to help.",
      see: "A body stuck in chronic inflammation because the nervous system never feels safe enough to heal.",
      doText:
        "Address the root (nervous system regulation) before layering in functional medicine and targeted support for your specific condition.",
    },
    {
      said: "I snap at the people I love when I'm stressed, and I hate it.",
      see: "A nervous system that's been in protection mode so long, it defaults to fight-or-flight in everyday moments.",
      doText:
        "Teach you how to program yourself to default to your absolute best, even under pressure. You'll learn to recognize the pattern before it takes over.",
    },
  ];
  return (
    <section className="hear-sec" id="hear">
      <div className="hear-header" style={{ textAlign: "center", padding: "0 2rem 4rem" }}>
        <div
          className="sec-label reveal"
          style={{ justifyContent: "center", display: "flex" }}
        >
          Two Truths
        </div>
        <h2
          className="reveal"
          style={{
            fontFamily: "'Belleza',sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1.4rem,2.8vw,3.5rem)",
            color: "var(--dark)",
            lineHeight: 1.15,
            maxWidth: 900,
            margin: ".5rem auto 0",
          }}
        >
          What I Hear — <em><span className="ul-word ul-1">and What I Know</span></em>
        </h2>
      </div>
      <div className="hear-grid">
        <div className="hear-col reveal">
          <h3>When you say:</h3>
          <ul className="hear-list">
            {items.map((item, i) => (
              <li key={i}>
                <div className="hear-item">
                  <div className="hear-said">"{item.said}"</div>
                  <div className="hear-see">
                    <span className="hear-see-label">I see:</span>
                    {item.see}
                  </div>
                  <div className="hear-do">
                    <span className="hear-do-label">What we do:</span>
                    {item.doText}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="hear-bottom-cta">
            <span>Recognize yourself in these?</span>
            <a href="#assessment" className="btn-main">See How We Start →</a>
          </div>
        </div>
        <div className="hear-col hear-col-right reveal">
          <div className="hear-principle">
            <div className="hear-principle-tag">The Core Principle</div>
            <h3>
              <em>
                Regulation Before<br />Optimization.
              </em>
            </h3>
            <p>
              Most wellness approaches start with nutrition, exercise, or
              mindset work. But if your nervous system is stuck in protection
              mode, none of those strategies will hold.
            </p>
            <p>
              I show people how to program themselves — so that when something
              shows up, they are able to default to their absolute best.
            </p>
            <div className="hear-principle-line">
              Your body must feel safe before it can heal.
            </div>
            <a href="#assessment" className="btn-prog">
              Take the Stress Code™ Assessment →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─ REWIRE Framework ─ */
function RewireSection() {
  return (
    <section className="rewire-sec" id="framework">
      <div className="rewire-inner">
        <div className="rewire-header">
          <h2 className="reveal">
            The REWIRE™ <em>Framework</em>
          </h2>
          <p
            className="reveal"
            style={{
              color: "rgba(255,255,255,.5)",
              margin: ".75rem auto 2.5rem",
              maxWidth: 600,
              fontSize: ".95rem",
              lineHeight: 1.8,
            }}
          >
            This isn't about willpower. It's about working with your nervous
            system, not against it. Explore every dimension of the REWIRE™
            approach below.
          </p>
        </div>
        <div className="reveal">
          <RewireAccordion />
        </div>
      </div>
    </section>
  );
}

/* ─ For Who ─ */
function ForWhoSection() {
  const cards: { icon: React.ReactNode; title: string; desc: string }[] = [
    {
      icon: <Award size={20} strokeWidth={1.25} />,
      title: "Externally Successful, Internally Running on Fumes",
      desc: "You've achieved what you set out to do. But your body is telling a different story. The energy just isn't there anymore.",
    },
    {
      icon: <Activity size={20} strokeWidth={1.25} />,
      title: "Stress Is Affecting Health & Performance",
      desc: "You recognize the connection between what you're carrying and how you're functioning. You're ready to address the root, not just the symptoms.",
    },
    {
      icon: <Microscope size={20} strokeWidth={1.25} />,
      title: "Managing Chronic Health Challenges",
      desc: "Autoimmune conditions, post-cancer recovery, metabolic imbalances. You need an approach that understands how the body actually works.",
    },
    {
      icon: <Gauge size={20} strokeWidth={1.25} />,
      title: "Struggling with Emotional Regulation Under Pressure",
      desc: "You want to find calm before reacting. You're tired of paying the relational cost of a nervous system on high alert.",
    },
    {
      icon: <Atom size={20} strokeWidth={1.25} />,
      title: "Science-Based Approach Required",
      desc: "You're not interested in trends or empty promises. You want neuroscience, functional medicine, and strategies grounded in how the body actually changes.",
    },
    {
      icon: <Sprout size={20} strokeWidth={1.25} />,
      title: "Ready to Invest Before It Becomes a Crisis",
      desc: "The alarm bells haven't gone off yet. But you can hear the whisper. You value expertise, integrity, and a calm, grounded approach.",
    },
  ];
  return (
    <>
      <div
        className="for-statement"
        id="forwho"
        style={{
          position: "relative",
          backgroundImage: `linear-gradient(rgba(22,30,55,0.62), rgba(22,30,55,0.68)), url(${bgFlower})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
          paddingTop: "calc(5.5rem + 72px)",
          paddingBottom: "calc(5.5rem + 72px)",
        }}
      >
        {/* Top wave — bleeds #252a4a from the REWIRE section down into the image */}
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 72, display: "block", pointerEvents: "none" }}
        >
          <path d="M0,45 C300,0 800,80 1440,30 L1440,0 L0,0 Z" fill="#252a4a" />
        </svg>

        <h2>
          You're successful on paper. You've built something. But somewhere
          along the way, <em>the cost became too high.</em>
        </h2>
        <a href="#contact" className="btn-white">
          Schedule a Consultation →
        </a>

        {/* Bottom wave — bleeds #f7f6f2 from the for-cards section up into the image */}
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 72, display: "block", pointerEvents: "none" }}
        >
          <path d="M0,45 C300,0 800,80 1440,30 L1440,80 L0,80 Z" fill="#f7f6f2" />
        </svg>
      </div>
      <section className="for-cards">
        <div className="for-cards-header" style={{ textAlign: "center", padding: "0 2rem 3rem" }}>
          <div
            className="sec-label reveal"
            style={{ justifyContent: "center", display: "flex" }}
          >
            This Work Is For
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: "'Belleza',sans-serif",
              fontWeight: 400,
              fontSize: "clamp(2rem,4vw,3.5rem)",
              color: "var(--dark)",
              lineHeight: 1.15,
              maxWidth: 780,
              margin: ".5rem auto 0",
            }}
          >
            Professionals Who Are{" "}
            <em style={{ color: "var(--primary)" }}>Ready</em>
          </h2>
        </div>
        <div className="for-grid">
          {cards.map((c, i) => (
            <div key={i} className="fcard reveal">
              <div className="fcard-icon">{c.icon}</div>
              <div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="for-cta reveal">
          <p className="for-cta-q">
            See yourself in this list? Let's talk about what's next.
          </p>
          <a href="#contact" className="btn-accent-block">
            Schedule a Consultation →
          </a>
        </div>
      </section>
    </>
  );
}

/* ─ Programs ─ */
function ProgramsSection() {
  return (
    <section className="process-sec" id="process">
      <div className="sec-header">
        <div
          className="sec-label reveal"
          style={{ justifyContent: "center", display: "flex" }}
        >
          The Programs
        </div>
        <h2 className="reveal">
          How We Work <em><span className="ul-word ul-7">Together</span></em>
        </h2>
      </div>
      <div className="programs-grid">
        <div className="prog-card reveal">
          <div className="prog-tag">Group Program</div>
          <h3>Success Over Stress (SOS)™</h3>
          <div className="prog-duration">12 Weeks</div>
          <p>
            A 12-week group coaching program designed for driven professionals
            who want to rewire their stress response and restore sustainable
            energy.
          </p>
          <p>
            Each week, we move through one core area of the REWIRE™ Framework:
            stress patterns, nervous system regulation, foundational inputs,
            biological support, and long-term integration.
          </p>
          <ul className="prog-includes">
            {[
              "Live coaching sessions",
              "Curated resources & tools",
              "Community of high-achieving professionals",
              "Full REWIRE™ Framework",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href="#contact" className="btn-prog">
            Register Now
          </a>
        </div>
        <div className="prog-card reveal">
          <div className="prog-tag">Private Coaching</div>
          <h3 style={{ marginBottom: "1.25rem" }}>Private REWIRE Coaching</h3>
          <p>
            For those who want a deeper, more personalized approach. We'll work
            through the REWIRE™ Framework at your pace, tailored to your
            specific patterns, biology, and goals.
          </p>
          <p>
            For professionals who value privacy, customization, and direct
            access to someone who's spent decades in both clinical and
            functional health settings.
          </p>
          <ul className="prog-includes">
            {[
              "1:1 personalized sessions",
              "Custom protocol for your biology",
              "Direct access & accountability",
              "Privacy & discretion",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href="#contact" className="btn-prog">
            Apply for Private Coaching →
          </a>
        </div>
        <div className="prog-card reveal">
          <div className="prog-tag">Organizations</div>
          <h3>Speaking & Workshops</h3>
          <div className="prog-duration">Custom Format</div>
          <p>
            I work with organizations and professional groups to bring this
            conversation into the workplace — helping teams understand the link
            between nervous system health, performance, and long-term
            sustainability.
          </p>
          <blockquote className="prog-quote">
            "The best-performing teams aren't the ones pushing hardest — they're
            the ones who've learned to regulate under pressure."
          </blockquote>
          <ul className="prog-includes">
            {[
              "Keynote speaking",
              "Team workshops",
              "Leadership development",
              "Customized content",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href="#contact" className="btn-prog">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─ Other Side ─ */
function OtherSideSection() {
  const cards: { icon: React.ReactNode; title: string; desc: string }[] = [
    {
      icon: <Sun size={22} strokeWidth={1.25} />,
      title: "Actually Rested",
      desc: "Imagine making it through your day without relying on caffeine to push you through or wine to help you wind down.",
    },
    {
      icon: <Zap size={22} strokeWidth={1.25} />,
      title: "Energy for What Matters",
      desc: "The energy to show up for your work, your family, and yourself — without feeling like you're choosing one at the expense of the others.",
    },
    {
      icon: <HeartHandshake size={22} strokeWidth={1.25} />,
      title: "Body as Partner",
      desc: "Your body feeling like a partner again, not something you have to manage or fight against every single day.",
    },
    {
      icon: <Compass size={22} strokeWidth={1.25} />,
      title: "Clarity & Capacity",
      desc: "The clarity, capacity, and calm to live the life you've worked so hard to build. Not perfection — agency.",
    },
    {
      icon: <Leaf size={22} strokeWidth={1.25} />,
      title: "Sustainable Health",
      desc: "Health that lasts because it's built on your biology, not willpower. Patterns rewired, not just managed.",
    },
    {
      icon: <Waves size={22} strokeWidth={1.25} />,
      title: "Calm Under Pressure",
      desc: "The ability to default to your best — even when life is hard. Resilience that doesn't cost you everything to maintain.",
    },
  ];
  return (
    <section
      className="other-sec"
      id="otherside"
    >
      <div className="other-sec-inner" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 2rem 4rem" }}>
        <div className="other-header-grid">
          {/* Text side */}
          <div>
            <div
              className="sec-label reveal"
              style={{
                color: "#4ABCB0",
                display: "flex",
                alignItems: "center",
                marginBottom: "1.25rem",
              }}
            >
              The Vision
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: "'Belleza',sans-serif",
                fontWeight: 400,
                fontSize: "clamp(2rem,4vw,4rem)",
                color: "#1a2247",
                lineHeight: 1.1,
              }}
            >
              What It Looks Like <em><span className="ul-word ul-3">on the Other Side</span></em>
            </h2>
            <p
              className="reveal"
              style={{
                color: "rgba(37,42,74,.6)",
                fontSize: "1rem",
                lineHeight: 1.85,
                fontStyle: "italic",
                margin: "1.25rem 0 0",
              }}
            >
              Imagine waking up and actually feeling rested. Not just getting through the day.{" "}
              <em style={{ color: "#4ABCB0" }}>Truly Restored.</em>
            </p>
          </div>
          {/* Image side */}
          <div className="reveal" style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 60px rgba(26,34,71,0.13)", flexShrink: 0 }}>
            <img
              src={otherSideImg}
              alt="Woman breathing peacefully at the side of a lake — what life looks like on the other side"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </div>
      <div className="other-grid">
        {cards.map((c, i) => (
          <div key={i} className="ocard reveal">
            <div className="ocard-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
      <div className="other-cta-wrap" style={{ textAlign: "center", padding: "3rem 2rem 1rem" }}>
        <a href="#assessment" className="btn-accent-block reveal">
          Start with the Decode the Stress Code™ Assessment →
        </a>
      </div>
    </section>
  );
}

/* ─ Why Section ─ */
function WhySection() {
  const pillars = [
    {
      title: "Clinical Foundation Meets Holistic Strategy",
      desc: "30+ years in clinical nursing, including open-heart ICU and healthcare leadership. I understand the body from the inside out — and I understand that true health isn't built in a hospital. It's built in the choices you make every day.",
    },
    {
      title: "Nervous System First, Everything Else Second",
      desc: "Most approaches skip the most important step: teaching your body how to feel safe. Without that, nothing else works. With it, everything becomes possible.",
    },
    {
      title: "Science-Based, Not Trend-Based",
      desc: "Grounded in neuroscience, functional medicine, functional nutrition, and behavioral change. Real results, not temporary relief.",
    },
    {
      title: "Real Results, Not Quick Fixes",
      desc: "The clients I work with don't just feel better for a few weeks. They rewire the patterns that were keeping them stuck. They build health that lasts.",
    },
  ];
  return (
    <section className="why-sec" id="why">
      <div className="why-layout">
        <div className="why-sticky">
          <span className="sec-label reveal">The Foundation</span>
          <h2 className="reveal">
            Why This <em><span className="ul-word ul-2">Approach Works</span></em>
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: ".9rem",
              color: "var(--text-light)",
              lineHeight: 1.9,
              fontWeight: 300,
              marginBottom: "2rem",
            }}
          >
            This work is grounded in neuroscience, functional medicine,
            functional nutrition, and behavioral change. Not the latest fad. Not
            empty promises. Just what actually works.
          </p>
          <a href="#process" className="btn-accent-block">
            Explore the Programs
          </a>
          <div className="why-cred reveal">
            <div className="why-cred-num">30+</div>
            <div className="why-cred-title">Years of Clinical Nursing Experience</div>
            <div className="why-cred-rule" />
            <p className="why-cred-desc">
              Open-heart ICU. Healthcare leadership. A foundation built on
              precision, calm, and understanding the body from the inside out.
            </p>
          </div>
        </div>
        <div className="why-pillars">
          {pillars.map((p, i) => (
            <div key={i} className="wpillar reveal">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─ Two Paths ─ */
function PathsSection() {
  const stayItems = [
    "Continue running on adrenaline and willpower",
    "Keep managing symptoms without addressing roots",
    "Watch another year pass with the same patterns",
    "Wait for the alarm bells to go off before taking action",
    "Feel the quiet erosion of vitality you can't quite name",
  ];
  const goItems = [
    "Begin the deep work before the crisis forces you to",
    "Build health that lasts — not willpower that runs out",
    "Find the calm that doesn't depend on circumstances",
    "Rewire the patterns, not just manage the symptoms",
    "Live from capacity instead of surviving from fear",
  ];
  return (
    <section
      id="choice"
      style={{
        background: "linear-gradient(160deg,#252a4a 0%,#1e2244 100%)",
        padding: "7rem 0",
      }}
    >
      <div
        className="paths-header"
        style={{ textAlign: "center", padding: "0 2rem", marginBottom: "4rem" }}
      >
        <div
          className="sec-label reveal"
          style={{
            justifyContent: "center",
            display: "flex",
            color: "var(--accent)",
          }}
        >
          The Moment of Choice
        </div>
        <h2
          className="reveal"
          style={{
            fontFamily: "'Belleza',sans-serif",
            fontWeight: 400,
            fontSize: "clamp(2rem,4vw,3.5rem)",
            color: "#fff",
            lineHeight: 1.15,
          }}
        >
          One Choice. <em><span className="ul-word ul-6">Two Paths.</span></em>
        </h2>
      </div>
      <div className="paths-grid">
        <div className="path-card path-stay reveal">
          {/* Botanical watermark — bare twig */}
          <svg aria-hidden="true" viewBox="0 0 240 240" fill="none" style={{ position:"absolute", bottom:-24, right:-24, width:230, height:230, opacity:0.13, pointerEvents:"none" }}>
            <path d="M200 240 Q140 158 118 78 Q108 38 76 8" stroke="rgba(200,180,230,1)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M118 78 Q168 62 202 76" stroke="rgba(200,180,230,1)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M132 118 Q88 108 62 76" stroke="rgba(200,180,230,1)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M106 98 Q72 128 38 138" stroke="rgba(200,180,230,1)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M148 158 Q162 120 188 108" stroke="rgba(200,180,230,0.6)" strokeWidth="1" strokeLinecap="round"/>
          </svg>
          <h3>Keep Pushing Through</h3>
          <ul className="path-list">
            {stayItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="path-card path-go reveal">
          {/* Botanical watermark — lush leaf cluster */}
          <svg aria-hidden="true" viewBox="0 0 240 240" fill="none" style={{ position:"absolute", bottom:-24, right:-24, width:235, height:235, opacity:0.18, pointerEvents:"none" }}>
            <path d="M28 222 Q100 148 192 28" stroke="rgba(201,168,76,1)" strokeWidth="1.3" strokeLinecap="round"/>
            <path d="M136 88 Q110 52 78 18 Q120 54 140 92 Z" stroke="rgba(201,168,76,1)" strokeWidth="1.2" fill="rgba(201,168,76,0.12)"/>
            <path d="M136 88 Q170 112 202 148 Q156 122 132 92 Z" stroke="rgba(201,168,76,1)" strokeWidth="1.2" fill="rgba(201,168,76,0.12)"/>
            <path d="M90 150 Q62 118 36 76 Q78 108 94 154 Z" stroke="rgba(201,168,76,0.7)" strokeWidth="1" fill="rgba(201,168,76,0.07)"/>
            <path d="M90 150 Q124 164 160 182 Q114 162 86 154 Z" stroke="rgba(201,168,76,0.7)" strokeWidth="1" fill="rgba(201,168,76,0.07)"/>
          </svg>
          <h3>Give Your Body What It Needs</h3>
          <ul className="path-list">
            {goItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".75rem",
              marginTop: "1.5rem",
            }}
          >
            <a href="#assessment" className="btn-gold-path">
              Take the Stress Code™ Assessment →
            </a>
            <a href="#contact" className="btn-ghost-path">
              Schedule a Private Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─ CTA ─ */
function CTASection() {
  return (
    <section
      className="cta-sec"
      id="contact"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(20,14,42,0.88) 0%, rgba(26,34,71,0.75) 45%, rgba(26,34,71,0.25) 70%, rgba(26,34,71,0.05) 100%), url(${ctaBgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "calc(5.5rem + 80px)",
        paddingBottom: 0,
      }}
    >
      {/* Top wave — PathsSection dark gradient bleeds into the photo */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 80, display: "block", pointerEvents: "none" }}
      >
        <path d="M0,45 C300,0 800,80 1440,30 L1440,0 L0,0 Z" fill="#1e2244" />
      </svg>

      <div className="cta-inner cta-split">
        <div className="cta-tbox">
          <p style={{ color: "var(--accent)", letterSpacing: "0.15em", marginBottom: "0.75rem", fontSize: "0.85rem" }}>
            YOUR NEXT LEVEL STARTS HERE.
          </p>
          <h2>
            Ready to Stop Managing Symptoms <em>and Start Solving Them?</em>
          </h2>
          <p>
            Start with the Decode the Stress Code™ Assessment — or schedule a
            private consultation to talk about what's possible.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              marginTop: "2rem",
            }}
          >
            <a href="#assessment" className="btn-main">
              Take the Stress Code™ Assessment
            </a>
            <a href="#consult" className="btn-ghost-cta">
              Schedule a Consultation
            </a>
          </div>
        </div>
        <div className="cta-img-panel">
          <img
            src={ctaRightImg}
            alt="Woman at peace — ready to start solving, not just managing"
            className="cta-img"
          />
        </div>
      </div>

    </section>
  );
}

/* ─ Footer ─ */
function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="footer-logo" aria-label="Wanishi Wellness – Home">
              <img src={wanishiLogo} alt="Wanishi Wellness" className="footer-logo-img" />
            </a>
            <p>
              Sustainable health begins with listening. Before the alarm bells.
              Before the crisis. Before the cost becomes too high.
            </p>
            <div className="footer-social">
              {["in", "ig", "fb"].map((s) => (
                <a key={s} href="#" className="fsoc">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {[
                ["#top", "Home"],
                ["#about", "About"],
                ["#process", "Services"],
                ["#stories", "Testimonials"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:4193788384">(419) 378-8384</a></li>
              <li><a href="mailto:hello@wanishiwellness.com">hello@wanishiwellness.com</a></li>
              <li><a href="https://www.wanishiwellness.com" target="_blank" rel="noopener noreferrer">WanishiWellness.com</a></li>
              <li>
                <span style={{ color: "rgba(255,255,255,.5)" }}>
                  Temperance, MI
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              {[
                ["#", "LinkedIn"],
                ["#", "Instagram"],
                ["#", "Facebook"],
              ].map(([href, label]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Wanishi Wellness · Heidi Steenrod, MSN, RN</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
      <div className="footer-gradient-bar" aria-hidden="true" />
    </footer>
  );
}

/* ─ Scroll Reveal ─ */
function useScrollReveal(dep?: unknown) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    const staggerParents = [
      ".testi-grid",
      ".for-grid",
      ".rewire-cards",
      ".other-grid",
      ".proof-grid",
      ".paths-grid",
      ".why-pillars",
      ".cred-stats",
    ];

    document.querySelectorAll(".reveal").forEach((el) => {
      const parent = el.closest(staggerParents.join(","));
      if (parent) {
        const siblings = parent.querySelectorAll(".reveal");
        const idx = Array.from(siblings).indexOf(el);
        (el as HTMLElement).style.transitionDelay = idx * 0.08 + "s";
      }
      io.observe(el);
    });

    return () => io.disconnect();
  }, [dep]);
}

/* ─ App ─ */
export default function App() {
  useScrollReveal();

  return (
    <>
      <Nav />

      <Hero />

      <Marquee />

      <AlarmSection />

      <CostSection />

      <AboutSection />

      <Wave
        fromColor="#e8ecf8"
        toColor="#f7f6f2"
        path="M0,30 C450,80 900,0 1440,50 L1440,80 L0,80 Z"
      />

      <TestimonialsSection />

      <Wave
        fromColor="#f7f6f2"
        toColor="#fff"
        path="M0,20 C350,80 800,0 1440,60 L1440,80 L0,80 Z"
      />

      <HearSection />

      <Wave
        fromColor="#fff"
        toColor="#1a1f44"
        path="M0,55 C250,10 750,80 1100,15 C1300,0 1420,60 1440,45 L1440,80 L0,80 Z"
      />

      <RewireSection />

      <ForWhoSection />

      <OtherSideSection />

      <Wave
        fromColor="#FAF8F4"
        toColor="#e8ecf8"
        path="M0,40 C360,0 1080,80 1440,20 L1440,80 L0,80 Z"
      />

      <ProgramsSection />

      <Wave
        fromColor="#e8ecf8"
        toColor="#f7f6f2"
        path="M0,30 C450,80 900,0 1440,50 L1440,80 L0,80 Z"
      />

      <WhySection />

      <Wave
        fromColor="#f7f6f2"
        toColor="#252a4a"
        path="M0,55 C350,0 950,80 1440,20 L1440,80 L0,80 Z"
      />

      <PathsSection />

      <CTASection />

      <Footer />
    </>
  );
}