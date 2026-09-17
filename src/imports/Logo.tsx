import svgPaths from "./svg-1p2tnkqk9r";

function Vector() {
  return (
    <div className="absolute contents inset-0" data-name="Vector">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1027.23 527.377">
        <g id="Group">
          <path d={svgPaths.p1a3af600} fill="url(#paint0_linear_23_223)" id="Vector" />
          <path d={svgPaths.p1ad90500} fill="url(#paint1_linear_23_223)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_23_223" x1="693.778" x2="419.397" y1="-83.0855" y2="622.452">
            <stop stopColor="#9EA4C9" />
            <stop offset="1" stopColor="#4B558D" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_23_223" x1="590.407" x2="316.034" y1="-123.28" y2="582.257">
            <stop stopColor="#9EA4C9" />
            <stop offset="1" stopColor="#4B558D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Varlik() {
  return (
    <div className="-translate-x-1/2 absolute h-[527.396px] left-[calc(50%-1265.65px)] overflow-clip top-0 w-[1027.227px]" data-name="Varlık 1 1">
      <Vector />
    </div>
  );
}

export default function Logo() {
  return (
    <div className="relative size-full" data-name="logo">
      <Varlik />
      <div className="absolute h-[273.675px] left-[1116.07px] top-[126.86px] w-[2442.457px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2442.46 273.675">
          <g id="Vector">
            <path d={svgPaths.p2c34af00} fill="#4B558D" />
            <path d={svgPaths.pcf3fd00} fill="#4B558D" />
            <path d={svgPaths.peb8d80} fill="#4B558D" />
            <path d={svgPaths.p11b59400} fill="#4B558D" />
            <path d={svgPaths.p3b671780} fill="#4B558D" />
            <path d={svgPaths.p75e7680} fill="var(--fill-0, #9EA4C9)" />
            <path d={svgPaths.pf35d200} fill="var(--fill-0, #9EA4C9)" />
            <path d={svgPaths.p26705270} fill="var(--fill-0, #9EA4C9)" />
            <path d={svgPaths.p3bd36480} fill="var(--fill-0, #9EA4C9)" />
            <path d={svgPaths.p353a12f0} fill="var(--fill-0, #9EA4C9)" />
            <path d={svgPaths.p19605e80} fill="var(--fill-0, #9EA4C9)" />
            <path d={svgPaths.p3db1f700} fill="var(--fill-0, #9EA4C9)" />
            <path d={svgPaths.p483e700} fill="var(--fill-0, #9EA4C9)" />
          </g>
        </svg>
      </div>
    </div>
  );
}