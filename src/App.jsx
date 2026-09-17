import { useState } from 'react'
import { SCREENS, GROUPS } from './screens/index.js'

const DEFAULT_SCREEN = 'wall'

function initialScreen() {
  const fromHash = window.location.hash.slice(1)
  return fromHash in SCREENS ? fromHash : DEFAULT_SCREEN
}

/**
 * Shell: left rail, page heading, active screen.
 *
 * Routing is a hash and a piece of state — enough for a prototype and it keeps
 * links shareable. Swap in react-router when the app gains real URLs; every
 * screen already takes `go`, so only this file changes.
 */
export default function App() {
  const [id, setId] = useState(initialScreen)

  const go = (next) => {
    if (!(next in SCREENS)) return
    setId(next)
    window.history.replaceState(null, '', '#' + next)
    window.scrollTo({ top: 0 })
  }

  const screen = SCREENS[id]
  const Body = screen.C

  return (
    <div className="shell">
      <nav className="rail" aria-label="Screens">
        <div className="brand">
          <div className="mark"><span /></div>
          <h1>Invigil</h1>
          <p>AI exam proctoring — interface prototype</p>
        </div>

        {GROUPS.map(([label, ids]) => (
          <div className="rgroup" key={label}>
            <span>{label}</span>
            {ids.map((key) => (
              <button key={key} aria-current={id === key} onClick={() => go(key)}>
                {SCREENS[key].t}
              </button>
            ))}
          </div>
        ))}
      </nav>

      <main className="stage">
        <div className="top">
          <div>
            <h2>{screen.t}</h2>
            <p>{screen.d}</p>
          </div>
          <span className="role">{screen.r}</span>
        </div>

        <div className="screen"><Body go={go} /></div>

        <div className="notes">
          <h3>Why it looks like this</h3>
          <ul>
            <li>
              Soft, low-contrast surfaces throughout. A proctoring tool watches people all day; a harsh
              alarm-red interface makes reviewers read every session as guilt before they open the evidence.
            </li>
            <li>
              Colour carries meaning only — mint, butter, peach and rose are the four suspicion levels,
              lilac is the single interactive accent and never appears in that ramp.
            </li>
            <li>
              The risk ribbon is the one bold element. Accumulation, decay and detections share a time axis,
              so you can see whether risk built steadily or spiked twice.
            </li>
            <li>
              Every accusation shows its evidence, its confidence and who opened it. The student's result
              screen says what was flagged and what a human concluded.
            </li>
            <li>Monospace numerals for timestamps, scores, durations and cell references so columns align.</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
