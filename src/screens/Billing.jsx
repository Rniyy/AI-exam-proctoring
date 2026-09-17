import { Card, Chip, Field, Stat } from '../components/ui.jsx'
import { CHARGES } from '../data.js'

export function Billing() {
  return (
    <div className="split">
      <Card title="Exam fee" right={<Chip tone="low">Active</Chip>}>
        <div className="pad">
          <Field label="Applies to" value="Professional Certification — Level 2" />
          <div className="cols2" style={{ gap: 12 }}>
            <Field label="Amount" value="45.00" />
            <Field label="Currency" value="USD" />
          </div>
          <Field label="On the student's statement" value="INVIGIL CERT L2" />
          <p className="hint" style={{ margin: '0 0 16px' }}>
            One charge stays open per attempt. Students cannot start until it is paid, and a refund
            reopens the attempt.
          </p>
          <button className="btn pri">Save fee</button>
        </div>
      </Card>

      <div className="stack">
        <div className="stats">
          <Stat value="$18,405" label="Collected this month" />
          <Stat value="409" label="Paid" />
          <Stat value="7" label="Failed" tone="#B9603A" />
          <Stat value="2" label="Chargebacks" />
        </div>

        <Card title="Recent charges">
          <div className="tscroll">
            <table>
              <thead>
                <tr><th>Student</th><th>Exam</th><th>Amount</th><th>Card</th><th>Status</th><th /></tr>
              </thead>
              <tbody>
                {CHARGES.map(([name, exam, amount, card, tone, status, action]) => (
                  <tr key={name}>
                    <td>{name}</td>
                    <td>{exam}</td>
                    <td className="num">{amount}</td>
                    <td className="hint num">{card}</td>
                    <td><Chip tone={tone}>{status}</Chip></td>
                    <td style={{ textAlign: 'right' }}><button className="btn sm ghost">{action}</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
