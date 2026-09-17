import { useState } from 'react'
import { Card, Check } from '../components/ui.jsx'
import { SelfView } from '../components/Face.jsx'
import { CHOICES } from '../data.js'

/** Question palette. done / flagged / current are all distinguishable without colour alone. */
function QuestionNav({ current = 14, answeredBelow = 14, flagged = [6, 11], total = 20 }) {
  return (
    <div className="qnav">
      {Array.from({ length: total }, (_, i) => {
        const n = i + 1
        const cls = [
          n < answeredBelow && 'done',
          flagged.includes(n) && 'flag',
          n === current && 'now',
        ].filter(Boolean).join(' ')
        return <button key={n} className={cls}>{n}</button>
      })}
    </div>
  )
}

export function Session() {
  const [sel, setSel] = useState('C')
  const [flagged, setFlagged] = useState(false)

  return (
    <div className="stack">
      <div className="exambar">
        <div className="hint">
          Database Systems — Final · Section 2 of 3 <b style={{ color: 'var(--ink)' }}>Normalisation</b>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ textAlign: 'right' }}>
            {/* Drive this from server time, not the client clock. */}
            <div className="timer">38:12</div>
            <div className="hint" style={{ marginTop: 2 }}>left in this section</div>
          </div>
          <button className="btn pri">Submit exam</button>
        </div>
      </div>

      <div className="examgrid">
        <div className="stack">
          <Card
            title="Question 14 of 40"
            sub="Multiple choice · 2 marks"
            right={
              <button className={'btn sm' + (flagged ? ' soft' : '')} onClick={() => setFlagged(!flagged)}>
                {flagged ? 'Flagged for review' : 'Flag for review'}
              </button>
            }
          >
            <div className="pad">
              <p style={{ margin: '0 0 18px', fontSize: 16, lineHeight: 1.6, maxWidth: '64ch' }}>
                A relation holds <span className="num">student_id</span>, <span className="num">course_id</span>,{' '}
                <span className="num">instructor</span> and <span className="num">instructor_office</span>, with the
                primary key on the first two columns. Which normal form does it break, and why?
              </p>

              {CHOICES.map(([key, text]) => (
                <button
                  key={key}
                  className={'choice' + (sel === key ? ' sel' : '')}
                  onClick={() => setSel(key)}
                >
                  <span className="k">{key}</span><span>{text}</span>
                </button>
              ))}

              {/* Autosave state belongs next to the answer, not in a corner toast. */}
              <p className="hint" style={{ margin: '14px 0 0' }}>Saved 8 seconds ago</p>
            </div>
          </Card>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button className="btn">Previous</button>
            <button className="btn pri">Next question</button>
          </div>
        </div>

        <aside className="stack">
          <Card title="You">
            <div className="pad">
              <SelfView />
              <div className="notice" style={{ marginTop: 12, fontSize: 12 }}>
                <i /><span>Camera, microphone and screen are being recorded.</span>
              </div>
            </div>
          </Card>

          <Card title="Questions">
            <div className="pad">
              <QuestionNav />
              <div className="hint" style={{ display: 'flex', gap: 14, marginTop: 14, flexWrap: 'wrap' }}>
                <span>
                  <i style={{ display: 'inline-block', width: 9, height: 9, background: 'var(--lilac)', borderRadius: 3, marginRight: 6 }} />
                  Answered
                </span>
                <span>
                  <i style={{ display: 'inline-block', width: 9, height: 9, background: 'var(--butter)', borderRadius: 3, marginRight: 6 }} />
                  Flagged
                </span>
              </div>
            </div>
          </Card>

          <Card title="Connection">
            <ul className="checks">
              <Check state="ok" title="Camera" />
              <Check state="ok" title="Microphone" />
              <Check state="warn" title="Network" note="Slow — your answers are still saving" />
            </ul>
          </Card>
        </aside>
      </div>
    </div>
  )
}
