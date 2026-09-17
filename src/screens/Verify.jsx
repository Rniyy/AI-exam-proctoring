import { Card, Meter } from '../components/ui.jsx'
import { SelfView } from '../components/Face.jsx'

export function Verify({ go }) {
  return (
    <div className="stack" style={{ maxWidth: 840 }}>
      <div className="exambar">
        <div className="hint">
          Database Systems — Final · <b style={{ color: 'var(--ink)' }}>starts in 9 minutes</b>
        </div>
        <div className="hint">Sokha Vann</div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 6px', fontSize: 22, letterSpacing: '-.02em' }}>Show us it's you</h3>
        <p style={{ margin: 0, color: 'var(--muted)', fontSize: 14, maxWidth: '58ch' }}>
          Look straight at the camera and hold still. We compare this to the photo on your student record.
        </p>
      </div>

      <div className="cols2">
        <Card title="Live camera">
          <div className="pad">
            <SelfView label="live" />
            <p className="hint" style={{ margin: '12px 0 0' }}>
              Face centred · one person detected · lighting good
            </p>
          </div>
        </Card>
        <Card title="On file">
          <div className="pad">
            <SelfView label="student record · 2024" />
            <p className="hint" style={{ margin: '12px 0 0' }}>
              Sokha Vann · <span className="num">2022-CS-0418</span>
            </p>
          </div>
        </Card>
      </div>

      {/* The confidence number is shown, not hidden. If a student is refused
          entry they should be able to see how close the match was. */}
      <Card>
        <div className="pad" style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 230 }}>
            <Meter label="Match confidence" value="0.94" pct={94} color="var(--mint)" />
            <p className="hint" style={{ margin: '10px 0 0' }}>
              Above the 0.85 needed to start. A teacher checks any result below that by hand.
            </p>
          </div>
          <button className="btn pri" onClick={() => go('session')}>Start exam</button>
        </div>
      </Card>

      <details className="hint">
        <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--ink)' }}>
          What happens to this photo
        </summary>
        <p style={{ maxWidth: '62ch' }}>
          The capture is stored with your session, hashed, and attached to the proctoring report.
          It is deleted with the rest of the session after 90 days. You can ask your teacher for a
          copy of anything held about you.
        </p>
      </details>
    </div>
  )
}
