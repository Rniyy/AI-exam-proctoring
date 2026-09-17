import { useState } from 'react'
import { Card, Chip, Field } from '../components/ui.jsx'
import { Face } from '../components/Face.jsx'
import { Ribbon } from '../components/Ribbon.jsx'
import { EVENTS } from '../data.js'

const DECISIONS = [
  ['confirm', 'Confirm cheating',          'warn'],
  ['invest',  'Send for investigation',    ''],
  ['false',   'Dismiss as false positive', 'ghost'],
]

const CONSEQUENCE = {
  confirm: 'Confirming holds the result and notifies the teacher. It does not change the mark by itself.',
  invest:  'The session goes to the academic integrity panel with all 41 events attached.',
  false:   'The session is cleared and the detections feed back into threshold tuning.',
  null:    'Pick an outcome. Every decision is logged with your name and the time.',
}

export function Review() {
  const [decision, setDecision] = useState(null)

  return (
    <div className="stack">
      <Ribbon
        name="Rithy Chan"
        exam="Database Systems — Final"
        session="8F2C-11A9"
        span="09:00–10:12 · 72 minutes"
        score={91}
      />

      <div className="split">
        <div className="stack">
          <Card title="Evidence at 09:55:12" sub="Clip 9 of 12">
            <div className="feed warm" style={{ aspectRatio: '16/10', borderRadius: 0 }}>
              <Face two />
              <span className="tl"><Chip tone="crit">Two faces</Chip></span>
              <span className="tr"><i />09:55:12</span>
              <span className="ev">Second face held in frame for 9 seconds · confidence 0.93</span>
            </div>

            <div className="pad" style={{ display: 'flex', gap: 9, flexWrap: 'wrap', borderBottom: '1px solid var(--line)' }}>
              <button className="btn sm">Previous clip</button>
              <button className="btn sm">Next clip</button>
              <button className="btn sm ghost">Screen recording at this moment</button>
              <button className="btn sm ghost">Download</button>
            </div>

            {/* Evidence is hashed and every open is logged. Surfacing that here
                keeps reviewers aware their own access is on the record too. */}
            <div className="pad hint">
              Hash <span className="num">sha256:4b1e…d07c</span> · every time this clip is opened it is
              written to the access log.
            </div>
          </Card>

          <Card title="Your decision">
            <div className="pad">
              <Field
                label="Notes — the student can request these"
                as="textarea"
                rows={3}
                value="Second person clearly visible and speaking at 09:55 and again at 10:04. Not a passer-by."
              />
              <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
                {DECISIONS.map(([key, label, tone]) => (
                  <button
                    key={key}
                    className={'btn ' + (decision === key ? 'pri' : tone)}
                    onClick={() => setDecision(key)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <p className="hint" style={{ margin: '14px 0 0' }}>{CONSEQUENCE[decision]}</p>
            </div>
          </Card>
        </div>

        <Card title="What was detected" sub="41 events">
          <ul className="events">
            {EVENTS.map(([time, title, note, confidence, critical]) => (
              <li key={time + title} className={critical ? 'hot' : ''}>
                <span className="t">{time}</span>
                <div className="b"><b>{title}</b><span>{note}</span></div>
                <span className="c">{confidence}</span>
              </li>
            ))}
          </ul>
          <div className="pad" style={{ borderTop: '1px solid var(--line)' }}>
            <button className="btn sm ghost">Show all 41</button>
          </div>
        </Card>
      </div>
    </div>
  )
}
