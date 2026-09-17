import { useState } from 'react'

/** A white panel with an optional header. */
export function Card({ title, sub, right, children, style }) {
  return (
    <section className="card" style={style}>
      {(title || right) && (
        <header>
          <div>
            {title && <h3>{title}</h3>}
            {sub && <div className="sub">{sub}</div>}
          </div>
          {right}
        </header>
      )}
      {children}
    </section>
  )
}

/** Pill label. tone: low | med | high | crit | info | idle */
export function Chip({ tone = 'idle', children }) {
  return <span className={'chip ' + tone}><i />{children}</span>
}

export function Stat({ value, label, tone }) {
  return (
    <div className="stat">
      <b style={tone ? { color: tone } : null}>{value}</b>
      <span>{label}</span>
    </div>
  )
}

export function Bar({ pct, color }) {
  return <div className="bar"><i style={{ width: pct + '%', background: color }} /></div>
}

/** Labelled value with a proportional bar underneath. */
export function Meter({ label, value, pct, color }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
        <span>{label}</span>
        <span className="num" style={{ color: 'var(--muted)' }}>{value}</span>
      </div>
      <Bar pct={pct} color={color} />
    </div>
  )
}

/**
 * Self-contained input. Holds its own state so the prototype feels live.
 * When you wire this to a form library, lift value/onChange out.
 */
export function Field({ label, value, as = 'input', rows }) {
  const [v, setV] = useState(value)
  const Tag = as
  return (
    <div className="field">
      <label>{label}</label>
      <Tag rows={rows} value={v} onChange={(e) => setV(e.target.value)} />
    </div>
  )
}

export function Toggle({ title, note, on: initial = false }) {
  const [on, setOn] = useState(initial)
  return (
    <div className="toggle">
      <div><b>{title}</b>{note && <span>{note}</span>}</div>
      <button
        className={'sw' + (on ? ' on' : '')}
        aria-pressed={on}
        aria-label={title}
        onClick={() => setOn(!on)}
      />
    </div>
  )
}

const GLYPH = { ok: '✓', warn: '!', bad: '✕', wait: '○' }

/** One row in a checklist. state: ok | warn | bad | wait */
export function Check({ state, title, note, right }) {
  return (
    <li>
      <span className={'mark ' + state}>{GLYPH[state]}</span>
      <div className="tx"><b>{title}</b>{note && <span>{note}</span>}</div>
      {right}
    </li>
  )
}
