export function SiteBackdrop() {
  return (
    <div className="site-backdrop" aria-hidden="true">
      <svg
        className="backdrop-continuity"
        viewBox="0 0 1440 6000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wave-light" x2="0.3" y2="1">
            <stop stopColor="#ffffff" stopOpacity=".48" />
            <stop offset="1" stopColor="#d5e0ef" stopOpacity=".12" />
          </linearGradient>
        </defs>
        <g fill="url(#wave-light)" stroke="#fff" strokeOpacity=".55">
          <path d="M-200 350 C300 650 900 -100 1640 230 L1640 1100 C850 750 400 1400 -200 850 Z" />
          <path d="M-200 1900 C450 1150 850 2050 1640 1550 L1640 2300 C850 2900 250 1950 -200 2600 Z" />
          <path d="M-200 3450 C500 4050 800 2850 1640 3150 L1640 3950 C900 3550 400 4850 -200 4200 Z" />
          <path d="M-200 5400 C300 4350 950 5800 1640 4900 L1640 5650 C850 6350 200 5150 -200 6000 Z" />
        </g>
      </svg>
    </div>
  );
}
