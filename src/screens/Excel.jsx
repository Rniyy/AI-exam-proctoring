import { Card, Check } from '../components/ui.jsx'
import { SHEET_ROWS } from '../data.js'

/**
 * Spreadsheet question. Graded cells are outlined so nobody loses marks for
 * putting the right answer in the wrong place, and the rules that will be
 * enforced are listed before the student starts rather than after they trip one.
 */
export function Excel() {
  return (
    <div className="stack">
      <div className="exambar">
        <div className="hint">
          Business Analytics — Practical · <b style={{ color: 'var(--ink)' }}>Question 3 of 6</b>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ textAlign: 'right' }}>
            <div className="timer low">07:41</div>
            <div className="hint">left</div>
          </div>
          <button className="btn pri">Submit workbook</button>
        </div>
      </div>

      <div className="examgrid">
        <Card title="Build the quarterly margin table">
          <div className="pad">
            <p style={{ margin: '0 0 16px', maxWidth: '64ch', fontSize: 15 }}>
              In <span className="num">Summary</span>, put gross margin percentage in{' '}
              <span className="num">D4:D7</span> and the weighted average in <span className="num">D9</span>.
              Use formulas — typed-in numbers score zero.
            </p>

            <div className="sheet">
              <table>
                <thead>
                  <tr><th /><th>A</th><th>B</th><th>C</th><th>D</th></tr>
                </thead>
                <tbody>
                  {SHEET_ROWS.map(([row, a, b, c, d, graded]) => (
                    <tr key={row}>
                      <th>{row}</th>
                      <td>{a}</td><td>{b}</td><td>{c}</td>
                      <td className={graded ? 'bound' : ''}>{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="tabs">
              <span className="on">Summary</span><span>Sales</span><span>Costs</span>
            </div>

            <p className="hint" style={{ margin: '14px 0 0' }}>
              Graded cells are outlined. Snapshot taken 40 seconds ago · autosave every 15 seconds.
            </p>
          </div>
        </Card>

        <aside className="stack">
          <Card title="Rules for this question">
            <ul className="checks">
              <Check state="ok" title="Formulas recalculate live" />
              <Check state="bad" title="Macros are off" />
              <Check state="bad" title="No desktop Excel" note="Only the built-in editor counts" />
              <Check state="warn" title="Pasting is logged" note="Pasting more than one cell at a time is flagged" />
            </ul>
          </Card>

          <Card title="Your workbook">
            <div className="pad hint">
              <p style={{ margin: '0 0 10px' }}>
                Saved and intact. If the editor crashes, reopen this page and you'll be back at the
                last snapshot.
              </p>
              <p className="num" style={{ margin: 0, color: 'var(--ink)' }}>142 edits · 3 snapshots</p>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  )
}
