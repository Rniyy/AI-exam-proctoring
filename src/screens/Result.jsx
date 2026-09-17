import { Card, Chip } from '../components/ui.jsx'

const BREAKDOWN = [
  ['33', 'Correct'],
  ['6', 'Wrong'],
  ['1', 'Unanswered'],
  ['1:12:04', 'Time used'],
]

/**
 * Score and proctoring outcome on one screen. A student who was flagged should
 * learn what was flagged and what a human concluded — not just see a status word.
 */
export function Result() {
  return (
    <div className="stack" style={{ maxWidth: 800 }}>
      <div className="exambar">
        <div className="hint">
          Database Systems — Final · <b style={{ color: 'var(--ink)' }}>result published 14 March</b>
        </div>
        <div className="hint">Sokha Vann</div>
      </div>

      <Card>
        <div className="pad" style={{ display: 'flex', gap: 30, flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <div className="num" style={{ fontSize: 46, fontWeight: 500, letterSpacing: '-.04em', lineHeight: 1 }}>
              82<span style={{ fontSize: 22, color: 'var(--faint)' }}>/100</span>
            </div>
            <Chip tone="low">Passed</Chip>
          </div>
          <div style={{ flex: 1, minWidth: 230, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(96px,1fr))', gap: 16 }}>
            {BREAKDOWN.map(([value, label]) => (
              <div key={label}>
                <div className="num" style={{ fontSize: 19, fontWeight: 500 }}>{value}</div>
                <div className="hint">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card title="Proctoring outcome">
        <div className="pad" style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <span className="mark ok" style={{ width: 28, height: 28 }}>✓</span>
          <div>
            <b style={{ display: 'block', fontSize: 15 }}>Cleared</b>
            <p style={{ margin: '5px 0 0', color: 'var(--muted)', fontSize: 13.5, maxWidth: '58ch' }}>
              Two moments were flagged automatically and a reviewer looked at both. One was you reading
              the question aloud, one was a delivery at your door. Neither affects your mark.
            </p>
          </div>
        </div>
      </Card>

      <p className="hint">Something look wrong? You have 14 days to raise it with your teacher.</p>
    </div>
  )
}
