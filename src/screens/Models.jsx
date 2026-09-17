import { Card, Field, Meter } from '../components/ui.jsx'
import { MODELS, RISK_WEIGHTS } from '../data.js'

/**
 * Detection thresholds and the weights behind the risk score.
 *
 * Making the formula visible is deliberate. If a student can be held back by a
 * number, the people setting that number should be able to see how it is built.
 */
export function Models() {
  return (
    <div className="cols2">
      <Card title="Detection models" sub="Changes apply to exams that have not started">
        <div className="tscroll">
          <table>
            <thead>
              <tr><th>Model</th><th>Version</th><th>Confidence</th><th>Accuracy</th><th /></tr>
            </thead>
            <tbody>
              {MODELS.map(([name, version, confidence, accuracy, color]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td className="hint num">{version}</td>
                  <td className="num">{confidence}</td>
                  <td className="num" style={{ color }}>{accuracy}</td>
                  <td style={{ textAlign: 'right' }}><button className="btn sm ghost">Tune</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pad hint" style={{ borderTop: '1px solid var(--line)' }}>
          Object detection is the weakest model. Every change is written to the audit log with your name.
        </div>
      </Card>

      <Card title="How risk is scored">
        <div className="pad">
          <p className="hint" style={{ margin: '0 0 18px' }}>
            Each detection adds weight × confidence. Score fades while nothing is detected, so one
            nervous moment early on does not follow a student to the end.
          </p>

          <div style={{ display: 'grid', gap: 14 }}>
            {RISK_WEIGHTS.map(([label, weight, pct, color]) => (
              <Meter key={label} label={label} value={'weight ' + weight} pct={pct} color={color} />
            ))}
          </div>

          <div className="cols2" style={{ marginTop: 20, gap: 12 }}>
            <Field label="Send for review above" value="60" />
            <Field label="Fades by" value="8 points every 5 minutes" />
          </div>

          <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
            <button className="btn pri">Save changes</button>
            <button className="btn">Test against past sessions</button>
          </div>
        </div>
      </Card>
    </div>
  )
}
