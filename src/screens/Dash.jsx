import { Card, Chip, Meter, Stat } from '../components/ui.jsx'
import { FLAG_SOURCES, LIVE_EXAMS } from '../data.js'

const ACCURACY = [
  ['31%', 'False positives', '#3F8F77'],
  ['57%', 'Confirmed', 'var(--ink)'],
  ['12%', 'Still open', '#9A7526'],
]

/**
 * Admin overview. The false-positive rate sits next to the flag counts on
 * purpose: a proctoring system that nobody audits drifts into punishing noise.
 */
export function Dash({ go }) {
  return (
    <div className="stack">
      <div className="stats">
        <Stat value="47" label="Exams this term" />
        <Stat value="3" label="Running now" />
        <Stat value="2,184" label="Students" />
        <Stat value="19" label="High risk sessions" tone="#B9603A" />
        <Stat value="14" label="Waiting for review" />
      </div>

      <div className="cols2">
        <Card title="Where flags come from" sub="Last 30 days">
          <div className="pad" style={{ display: 'grid', gap: 14 }}>
            {FLAG_SOURCES.map(([label, value, pct, color]) => (
              <Meter key={label} label={label} value={value} pct={pct} color={color} />
            ))}
          </div>
        </Card>

        <Card title="Are the flags right?" sub="Reviewer decisions, last 30 days">
          <div className="pad">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 20 }}>
              {ACCURACY.map(([value, label, color]) => (
                <div key={label}>
                  <div className="num" style={{ fontSize: 25, fontWeight: 500, color }}>{value}</div>
                  <div className="hint">{label}</div>
                </div>
              ))}
            </div>
            <p className="hint" style={{ margin: '0 0 16px' }}>
              Phone detection produces the most false positives — mostly water bottles. Raising its
              confidence threshold to 0.85 would cut them by roughly half.
            </p>
            <button className="btn sm soft" onClick={() => go('models')}>Adjust detection settings</button>
          </div>
        </Card>
      </div>

      <Card title="Running now" sub="Refreshes every 5 seconds">
        <div className="tscroll">
          <table>
            <thead>
              <tr>
                <th>Exam</th><th>Students</th><th>Time left</th>
                <th>Average risk</th><th>Flagged</th><th>Camera issues</th><th />
              </tr>
            </thead>
            <tbody>
              {LIVE_EXAMS.map(([name, students, left, level, risk, flagged, cams]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td className="num">{students}</td>
                  <td className="num">{left}</td>
                  <td><Chip tone={level}>{risk}</Chip></td>
                  <td className="num">{flagged}</td>
                  <td className="num">{cams}</td>
                  <td style={{ textAlign: 'right' }}>
                    <button className="btn sm" onClick={() => go('wall')}>Watch</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
