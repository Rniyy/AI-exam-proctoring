import { Card, Check } from '../components/ui.jsx'

/**
 * Pre-exam device checks. Blocking failures (`bad`) and warnings (`warn`) look
 * different on purpose — a student should be able to tell in one glance which
 * one stops them starting.
 */
export function SystemCheck() {
  return (
    <div className="stack" style={{ maxWidth: 780 }}>
      <div className="exambar">
        <div className="hint">
          Database Systems — Final · <b style={{ color: 'var(--ink)' }}>starts in 12 minutes</b>
        </div>
        <div className="hint">Sokha Vann</div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 6px', fontSize: 22, letterSpacing: '-.02em' }}>Let's check your setup</h3>
        <p style={{ margin: 0, color: 'var(--muted)', fontSize: 14, maxWidth: '58ch' }}>
          Six of eight checks passed. Fix the two below and you can start on time.
          Nothing is recorded during this step.
        </p>
      </div>

      <Card>
        <ul className="checks">
          <Check state="ok" title="Browser" note="Chrome 141 — supported" />
          <Check state="ok" title="Camera" note="FaceTime HD Camera, 1280×720"
                 right={<button className="btn sm ghost">Change</button>} />
          <Check state="ok" title="Microphone" note="Picked up your voice clearly"
                 right={<span className="hint num">−18 dB</span>} />
          <Check state="ok" title="Speakers" note="You confirmed you heard the test tone" />
          <Check state="warn" title="Network"
                 note="3.1 Mbps up. Video may drop below 5 Mbps — move closer to your router if you can."
                 right={<button className="btn sm">Test again</button>} />
          <Check state="bad" title="Screen sharing"
                 note="Not allowed yet. This exam records your whole screen, not just the browser tab."
                 right={<button className="btn pri sm">Allow</button>} />
          <Check state="wait" title="Fullscreen" note="Checks after screen sharing is allowed" />
          <Check state="ok" title="Room" note="Good lighting, one person in frame" />
        </ul>
      </Card>

      {/* Stated plainly and up front. Students consent to this before it starts,
          not through a checkbox they never read. */}
      <div className="notice">
        <i />
        <span>
          During the exam Invigil records your camera, microphone and screen, and logs when you
          leave fullscreen or switch tabs. Recordings are kept for 90 days and only your reviewer
          can open them.
        </span>
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button className="btn pri" disabled>Continue to identity check</button>
        <button className="btn">Get help</button>
      </div>
    </div>
  )
}
