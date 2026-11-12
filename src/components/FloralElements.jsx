// Floral SVG decorative components

export const FlowerSVG = ({ size = 60, color = "#E8C4C4", opacity = 0.6, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity }}
  >
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <ellipse
        key={i}
        cx="50"
        cy="30"
        rx="8"
        ry="18"
        fill={color}
        transform={`rotate(${angle} 50 50)`}
      />
    ))}
    <circle cx="50" cy="50" r="12" fill={i => i === 0 ? "#F5EFE6" : "#FAF7F2"} />
    <circle cx="50" cy="50" r="12" fill="#FAF7F2" />
    <circle cx="50" cy="50" r="7" fill={color} />
  </svg>
);

export const LeafSVG = ({ size = 50, color = "#9CAF88", opacity = 0.5, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity }}
  >
    <path
      d="M50 10 C70 20, 90 40, 80 70 C70 90, 30 90, 20 70 C10 40, 30 20, 50 10Z"
      fill={color}
    />
    <path
      d="M50 10 L50 85"
      stroke="#FAF7F2"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M50 30 C40 35, 35 42, 35 50" stroke="#FAF7F2" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M50 45 C60 50, 65 57, 65 65" stroke="#FAF7F2" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

export const PetalSVG = ({ size = 30, color = "#E8C4C4", opacity = 0.7, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity }}
  >
    <ellipse cx="30" cy="30" rx="12" ry="25" fill={color} />
  </svg>
);

export const BranchSVG = ({ width = 200, height = 120, className = "" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 200 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity: 0.4 }}
  >
    <path d="M10 110 Q60 60, 100 40 Q140 20, 190 10" stroke="#9CAF88" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M60 75 Q75 55, 90 45" stroke="#9CAF88" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M100 55 Q115 40, 130 35" stroke="#9CAF88" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <ellipse cx="92" cy="43" rx="8" ry="12" fill="#C8D5BC" transform="rotate(-30 92 43)"/>
    <ellipse cx="133" cy="33" rx="7" ry="11" fill="#C8D5BC" transform="rotate(-45 133 33)"/>
    <ellipse cx="80" cy="68" rx="6" ry="10" fill="#9CAF88" transform="rotate(-20 80 68)"/>
    <circle cx="190" cy="10" r="5" fill="#E8C4C4"/>
    <circle cx="185" cy="8" r="3.5" fill="#D4A5A5"/>
    <circle cx="192" cy="14" r="4" fill="#E8C4C4"/>
  </svg>
);

export const FloralCornerSVG = ({ size = 150, className = "", flip = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ opacity: 0.35, transform: flip ? 'scaleX(-1)' : 'none' }}
  >
    <path d="M10 140 Q50 100, 80 60 Q110 20, 140 10" stroke="#9CAF88" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M10 140 Q30 110, 50 90" stroke="#C8D5BC" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <ellipse cx="55" cy="88" rx="10" ry="16" fill="#C8D5BC" transform="rotate(-45 55 88)"/>
    <ellipse cx="80" cy="62" rx="9" ry="14" fill="#9CAF88" transform="rotate(-60 80 62)"/>
    <ellipse cx="110" cy="38" rx="8" ry="13" fill="#C8D5BC" transform="rotate(-70 110 38)"/>
    <circle cx="140" cy="12" r="8" fill="#E8C4C4"/>
    <circle cx="135" cy="10" r="5" fill="#D4A5A5"/>
    <circle cx="143" cy="17" r="6" fill="#E8C4C4"/>
    <circle cx="30" cy="128" r="6" fill="#E8C4C4"/>
    <circle cx="27" cy="123" r="4" fill="#D4A5A5"/>
  </svg>
);
