import { CURVE, PINS } from '../data.js'

const BANDS = [
  ['critical', 14, '#C9788D', 0,   '#E2879D'],
  ['high',     48, '#CE8060', 34,  '#EE9E7D'],
  ['medium',   82, '#B9954B', 68,  '#E6BE73'],
  ['low',     116, '#57A28B', 102, '#7DC8AF'],
]

/**
 * Risk over the length of one session.
 *
 * The point of this chart: risk accumulates on detections and decays while
 * nothing fires, so a reviewer can tell a steady climb from two isolated
 * spikes. Event pins sit on the same time axis as the curve.
 */
export function Ribbon({ name, exam, session, span, score, threshold = 60 }) {
  return (
    <div className="ribbon">
      <div className="rh">
        <div>
          <h3>{name} · {exam}</h3>
          <span className="hint num">Session {session} · {span}</span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="score">{score}</div>
          <span className="hint">Risk at submit · threshold {threshold}</span>
        </div>
      </div>

      <svg
        viewBox="0 0 900 190"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        role="img"
        aria-label="Risk over the session with detection events marked"
      >
        <defs>
          <linearGradient id="riskFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EE9E7D" stopOpacity=".45" />
            <stop offset="100%" stopColor="#EE9E7D" stopOpacity="0" />
          </linearGradient>
        </defs>

        {BANDS.map(([label, ty, tc, by, bc]) => (
          <g key={label}>
            <rect x="0" y={by} width="900" height="34" fill={bc} opacity=".09" />
            <text x="8" y={ty} fill={tc} fontFamily="DM Mono" fontSize="10">{label}</text>
          </g>
        ))}

        <path d={CURVE + ' L900,190 L0,190 Z'} fill="url(#riskFill)" />
        <path d={CURVE} fill="none" stroke="#E08D68" strokeWidth="2.5"
              strokeLinejoin="round" strokeLinecap="round" />

        {PINS.map(([x, y, colour, r]) => (
          <g key={x}>
            <line x1={x} y1={y} x2={x} y2="170" stroke={colour} strokeWidth="1.5" strokeOpacity=".7" />
            <circle cx={x} cy={y} r={r + 2.5} fill="#fff" />
            <circle cx={x} cy={y} r={r} fill={colour} />
          </g>
        ))}

        <line x1="0" y1="170" x2="900" y2="170" stroke="#E7EAF3" strokeWidth="1.5" />
      </svg>

      <div className="axis">
        {['09:00', '09:15', '09:30', '09:45', '10:00', '10:12'].map((t) => <span key={t}>{t}</span>)}
      </div>

      <div className="legend">
        <span><i style={{ background: '#E08D68' }} />Accumulated risk</span>
        <span><i style={{ background: '#E2879D' }} />Critical event</span>
        <span><i style={{ background: '#EE9E7D' }} />High</span>
        <span><i style={{ background: '#E6BE73' }} />Medium</span>
        <span>Risk decays while nothing is detected</span>
      </div>
    </div>
  )
}
