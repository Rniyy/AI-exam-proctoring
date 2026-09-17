import { Card, Chip, Field, Toggle } from '../components/ui.jsx'
import { SECTIONS } from '../data.js'

/**
 * Exam setup. The proctoring rules are written as what the student will
 * experience, because that same wording is shown to them before they start.
 */
export function Builder() {
  return (
    <div className="split">
      <div className="stack">
        <Card title="Exam details" right={<Chip tone="info">Draft</Chip>}>
          <div className="pad">
            <Field label="Title" value="Database Systems — Final" />
            <Field label="Description shown to students" as="textarea" rows={2}
                   value="Closed book. Three sections, 40 questions." />
            <div className="cols2" style={{ gap: 12 }}>
              <Field label="Duration" value="90 minutes" />
              <Field label="Attempts allowed" value="1" />
              <Field label="Opens" value="17 Mar, 09:00" />
              <Field label="Closes" value="17 Mar, 10:30" />
            </div>
          </div>
        </Card>

        <Card title="Who sits it">
          <div className="pad hint">
            <p style={{ margin: '0 0 10px' }}>
              Year 3 Computer Science, Section B —{' '}
              <span className="num" style={{ color: 'var(--ink)' }}>128</span> students
            </p>
            <p style={{ margin: '0 0 14px' }}>
              Invitations go out 24 hours before. Students also need the access code{' '}
              <span className="num" style={{ color: '#5B4FA8', fontWeight: 500 }}>7QD-4AR</span>.
            </p>
            <button className="btn sm">Add a class or group</button>
          </div>
        </Card>
      </div>

      <div className="stack">
        <Card title="Sections and questions" sub="40 questions · 100 marks">
          <div className="tscroll">
            <table>
              <thead>
                <tr><th /><th>Section</th><th>Questions</th><th>Marks</th><th>Time</th><th /></tr>
              </thead>
              <tbody>
                {SECTIONS.map(([n, name, count, marks, time]) => (
                  <tr key={n}>
                    <td className="num" style={{ color: 'var(--faint)' }}>{n}</td>
                    <td>{name}</td>
                    <td>{count}</td>
                    <td className="num">{marks}</td>
                    <td className="num">{time}</td>
                    <td style={{ textAlign: 'right' }}><button className="btn sm ghost">Edit</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pad" style={{ display: 'flex', gap: 9, flexWrap: 'wrap', borderTop: '1px solid var(--line)' }}>
            <button className="btn sm">Add section</button>
            <button className="btn sm">Pull from question bank</button>
            <span className="hint" style={{ marginLeft: 'auto', alignSelf: 'center' }}>
              Questions and answer order are shuffled per student
            </span>
          </div>
        </Card>

        <Card title="Proctoring rules" sub="Students see these before they start">
          <Toggle title="Camera" note="Required for the whole exam" on />
          <Toggle title="Microphone" note="Listens for other voices" on />
          <Toggle title="Whole screen" note="Records every window, not just this tab" on />
          <Toggle title="Fullscreen" note="Leaving fullscreen is flagged" on />
          <Toggle title="Tab switching" note="Flag after 2 switches" on />
          <Toggle title="More than one face" note="Flag when a second person appears for over 3 seconds" on />
          <Toggle title="Phones and books" note="Object detection on the camera feed" on />
          <Toggle title="Copy and paste" note="Off — students paste SQL between questions" />
          <div className="pad" style={{ display: 'flex', gap: 9, flexWrap: 'wrap', borderTop: '1px solid var(--line)' }}>
            <button className="btn pri">Publish exam</button>
            <button className="btn">Save draft</button>
            <button className="btn ghost">Preview as a student</button>
          </div>
        </Card>
      </div>
    </div>
  )
}
