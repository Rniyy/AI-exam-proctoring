/**
 * Placeholder for a camera feed. `two` draws a second person — the shape the
 * multiple-face detector fires on. Replace with a <video> element when you
 * connect real streams; the wrapper classes stay the same.
 */
export function Face({ two }) {
  if (two) {
    return (
      <svg viewBox="0 0 140 100" aria-hidden="true">
        <circle cx="52" cy="34" r="17" fill="#B9CDE8" />
        <path d="M18 94c0-19 15-31 34-31s34 12 34 31z" fill="#B9CDE8" />
        <circle cx="104" cy="40" r="13" fill="#EEB79E" />
        <path d="M80 94c0-15 11-24 24-24s24 9 24 24z" fill="#EEB79E" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="36" r="18" fill="#B9CDE8" />
      <path d="M15 96c0-20 16-33 35-33s35 13 35 33z" fill="#B9CDE8" />
    </svg>
  )
}

export function SelfView({ label = 'recording' }) {
  return <div className="selfview"><Face /><span>{label}</span></div>
}
