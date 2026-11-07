export function ProjectRibbonPattern() {
  return (
    <svg
      className="w-full h-full object-cover select-none pointer-events-none"
      viewBox="0 0 360 220"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Soft atmospheric gradient wash */}
        <radialGradient id="ribbonAmbientGlow" cx="55%" cy="45%" r="65%">
          <stop offset="0%" stopColor="var(--ribbon-glow-color, #7e9dbf)" stopOpacity="var(--ribbon-glow-op1, 0.16)" />
          <stop offset="60%" stopColor="var(--ribbon-glow-color, #5a7d9a)" stopOpacity="var(--ribbon-glow-op2, 0.05)" />
          <stop offset="100%" stopColor="var(--ribbon-glow-color, #7e9dbf)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Atmospheric background tint */}
      <rect width="360" height="220" fill="url(#ribbonAmbientGlow)" />

      {/* Ribbon 3 - Supporting accent counter-loop */}
      <path
        d="M -20 70 C 40 40, 90 120, 140 140 C 190 160, 255 125, 295 160 C 325 185, 345 170, 380 190"
        stroke="var(--ribbon-accent, #8daec7)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="var(--ribbon-accent-op, 0.30)"
      />

      {/* Ribbon 2 - Intertwining secondary loop */}
      <path
        d="M 30 -20 C 60 55, 110 85, 165 75 C 220 65, 275 25, 315 70 C 355 115, 305 170, 245 180 C 185 190, 165 130, 205 100 C 245 70, 300 120, 375 155"
        stroke="var(--ribbon-secondary, #5a7d9a)"
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="var(--ribbon-secondary-op, 0.42)"
      />

      {/* Ribbon 1 - Primary flowing loop (thick, smooth, irregular asymmetrical flow) */}
      <path
        d="M -25 150 C 35 180, 65 75, 125 45 C 185 15, 235 105, 185 165 C 145 205, 95 155, 115 105 C 135 55, 215 35, 275 75 C 325 105, 345 65, 385 35"
        stroke="var(--ribbon-primary, #7e9dbf)"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="var(--ribbon-primary-op, 0.55)"
      />
    </svg>
  )
}
