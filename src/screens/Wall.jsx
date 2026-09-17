import { useState } from 'react'
import { Card, Chip, Stat } from '../components/ui.jsx'
import { Face } from '../components/Face.jsx'
import { TILES, LEVEL } from '../data.js'

const FILTERS = [
  ['all',  'All students'],
  ['risk', 'Risk above medium'],
  ['cam',  'Camera problems'],
  ['off',  'Disconnected'],
]

export function Wall({ go }) {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'risk' ? TILES.filter((t) => t.r >= 40) : TILES

  return (
    <div className="stack">
      <div className="stats">
        <Stat value="128" label="Students in session" />
        <Stat value="121" label="Cameras healthy" />
        <Stat value="6" label="Above risk threshold" tone="#B9603A" />
        <Stat value="14" label="Waiting for review" />
        <Stat value="38:12" label="Time left" />
      </div>

      <Card
        title="Database Systems — Final, Section B"
        sub="Started 09:00 · ends 10:30 · 4 proctors on duty"
        right={<button className="btn sm">Message everyone</button>}
      >
        <div className="pad" style={{ display: 'flex', gap: 9, flexWrap: 'wrap' }}>
          {FILTERS.map(([key, label]) => (
            <button
              key={key}
              className={'btn sm' + (filter === key ? ' soft' : '')}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </Card>

      {/* Tiles are sorted by risk. With a live feed, re-sort on each push so the
          student who needs attention is always in the top row. */}
      <div className="wall">
        {shown.map((t) => (
          <article key={t.id} className={'tile ' + t.l}>
            <div className={'feed ' + (t.r >= 40 ? 'warm' : 'calm')}>
              <Face two={t.l === 'crit'} />
              <span className="tl"><Chip tone={t.l}>{LEVEL[t.l]} {t.r}</Chip></span>
              <span className="tr"><i />live</span>
              {t.ev && <span className="ev">{t.ev}</span>}
            </div>
            <div className="meta">
              <div><b>{t.n}</b><small>{t.id} · {t.s}</small></div>
              <button className="btn sm ghost" onClick={() => go('review')}>Open</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
