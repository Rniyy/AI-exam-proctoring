import { Card, Chip, Stat } from '../components/ui.jsx'
import { QUEUE, LEVEL } from '../data.js'

/**
 * Triage list. The signals that pushed each session over the threshold are shown
 * in the row, so a reviewer can skip the obvious false positives without opening
 * anyone's recording.
 */
export function Queue({ go }) {
  return (
    <div className="stack">
      <div className="stats">
        <Stat value="14" label="Waiting" />
        <Stat value="3" label="Critical" tone="#B14D67" />
        <Stat value="6" label="Assigned to you" />
        <Stat value="11m" label="Median time to decide" />
        <Stat value="31%" label="Turn out to be nothing" />
      </div>

      <Card title="Sessions needing a decision" sub="Highest risk first">
        <div className="tscroll">
          <table>
            <thead>
              <tr>
                <th>Student</th><th>Exam</th><th>Risk</th>
                <th>Top signals</th><th>Evidence</th><th>Reviewer</th><th />
              </tr>
            </thead>
            <tbody>
              {QUEUE.map((q) => (
                <tr key={q.id}>
                  <td><b>{q.n}</b><br /><span className="hint num">{q.id}</span></td>
                  <td>{q.ex}<br /><span className="hint num">{q.at}</span></td>
                  <td><Chip tone={q.l}>{LEVEL[q.l]} {q.r}</Chip></td>
                  <td className="hint">{q.sig}</td>
                  <td className="hint num">{q.ev}</td>
                  <td className="hint">{q.rev}</td>
                  <td style={{ textAlign: 'right' }}>
                    <button className={'btn sm' + (q.r >= 80 ? ' pri' : '')} onClick={() => go('review')}>
                      Open
                    </button>
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
