// Mock data for the prototype. Swap these exports for API calls —
// the screens read them by shape, not by source.

export const LEVEL = { crit: 'Critical', high: 'High', med: 'Medium', low: 'Low' }

export const TILES = [
  { n: 'Rithy Chan',  id: '0177', r: 91, l: 'crit', ev: 'Two faces · 9s',      s: 'Q22 of 40' },
  { n: 'Dara Pen',    id: '0233', r: 74, l: 'high', ev: 'Looked away 22×',     s: 'Q19 of 40' },
  { n: 'Vuthy Long',  id: '0402', r: 47, l: 'med',  ev: 'Camera dropped',      s: 'Q27 of 40' },
  { n: 'Nary Chhem',  id: '0088', r: 41, l: 'med',  ev: 'Voices in the room',  s: 'Q24 of 40' },
  { n: 'Sokha Vann',  id: '0418', r: 12, l: 'low',                             s: 'Q31 of 40' },
  { n: 'Kanha Ith',   id: '0512', r: 9,  l: 'low',                             s: 'Q28 of 40' },
  { n: 'Piseth Nou',  id: '0345', r: 6,  l: 'low',                             s: 'Q33 of 40' },
  { n: 'Srey Mao',    id: '0129', r: 4,  l: 'low',                             s: 'Q35 of 40' },
]

export const CHOICES = [
  ['A', 'First — the table has a repeating group.'],
  ['B', 'Second — instructor depends on course_id alone, not the whole key.'],
  ['C', 'Third — instructor_office depends on instructor, which is not a key.'],
  ['D', 'Boyce–Codd — every determinant here is already a candidate key.'],
]

// [row, A, B, C, D, isGradedCell]
export const SHEET_ROWS = [
  ['3', 'Quarter', 'Revenue', 'Cost', 'Margin %', false],
  ['4', 'Q1', '412,000', '288,400', '=(B4-C4)/B4', true],
  ['5', 'Q2', '455,200', '301,900', '', true],
  ['6', 'Q3', '503,800', '352,700', '', true],
  ['7', 'Q4', '561,100', '378,000', '', true],
  ['8', '', '', '', '', false],
  ['9', 'Weighted average', '', '', '', true],
]

export const SECTIONS = [
  [1, 'Relational model', '15 multiple choice', 30, '25 min'],
  [2, 'Normalisation',    '15 mixed',           35, '40 min'],
  [3, 'SQL writing',      '10 coding',          35, '25 min'],
]

export const QUEUE = [
  { n: 'Rithy Chan',  id: '2022-CS-0177', ex: 'Database Systems',  at: '17 Mar 09:00', r: 91, l: 'crit',
    sig: 'Second face 4× · phone 2× · left fullscreen 6×', ev: '12 clips · 34 stills', rev: 'You' },
  { n: 'Dara Pen',    id: '2022-CS-0233', ex: 'Database Systems',  at: '17 Mar 09:00', r: 74, l: 'high',
    sig: 'Looked away 22× · voices detected',              ev: '7 clips · 19 stills',  rev: 'You' },
  { n: 'Malis Sok',   id: '2022-CS-0311', ex: 'Business Analytics', at: '16 Mar 13:30', r: 68, l: 'high',
    sig: 'Pasted 240 cells at once · macro blocked',       ev: '4 clips · 22 stills',  rev: 'Unassigned' },
  { n: 'Vuthy Long',  id: '2022-CS-0402', ex: 'Database Systems',  at: '17 Mar 09:00', r: 47, l: 'med',
    sig: 'No face 3× · camera dropped twice',              ev: '3 clips · 9 stills',   rev: 'Sophea K.' },
  { n: 'Nary Chhem',  id: '2022-CS-0088', ex: 'Business Analytics', at: '16 Mar 13:30', r: 41, l: 'med',
    sig: 'Background voices · looked down 14×',            ev: '5 clips · 12 stills',  rev: 'Unassigned' },
]

// [time, title, note, confidence, isCritical]
export const EVENTS = [
  ['09:07', 'Looked away, repeatedly',        'Head turned right, 6 times in 2 minutes', '0.81', false],
  ['09:18', 'Left fullscreen',                'Back after 11 seconds',                   '—',    false],
  ['09:31', 'Voices in the room',             'Two speakers, 14 seconds',                '0.76', false],
  ['09:38', 'Phone in frame',                 'Held below the desk edge',                '0.88', false],
  ['09:55', 'Two faces',                      'Second person for 9 seconds',             '0.93', true],
  ['10:04', 'Two faces and voices together',  'Combined behaviour, weighted up',         '0.95', true],
  ['10:09', 'Switched tab',                   'Sixth time this session',                 '—',    false],
]

// Risk curve for the ribbon, in the SVG's 900×190 viewBox.
export const CURVE =
  'M0,136 L70,134 L110,112 L150,120 L200,126 L240,96 L280,104 L320,110 L360,86 ' +
  'L400,92 L440,74 L470,80 L520,84 L560,52 L600,58 L640,62 L680,40 L720,46 ' +
  'L760,30 L820,26 L900,24'

// [x, y, colour, radius]
export const PINS = [
  [110, 112, '#E6BE73', 4.5], [240, 96, '#EE9E7D', 4.5], [360, 86, '#E6BE73', 4.5],
  [440, 74, '#EE9E7D', 4.5], [560, 52, '#E2879D', 5.5], [680, 40, '#E2879D', 5.5],
  [760, 30, '#EE9E7D', 4.5],
]

export const FLAG_SOURCES = [
  ['Looked away repeatedly', 312, 88, 'var(--butter)'],
  ['Left fullscreen',        241, 68, 'var(--butter)'],
  ['No face in frame',       188, 53, 'var(--peach)'],
  ['Voices in the room',      97, 27, 'var(--peach)'],
  ['More than one face',      54, 15, 'var(--rose)'],
  ['Phone detected',          38, 11, 'var(--rose)'],
]

export const LIVE_EXAMS = [
  ['Database Systems — Final',        128, '38:12',   'low', 22, 6, 7],
  ['Business Analytics — Practical',   64, '12:40',   'med', 44, 9, 2],
  ['Software Engineering — Midterm',   91, '1:04:55', 'low', 17, 2, 4],
]

export const MODELS = [
  ['Face presence',      '2.4.1', '0.70', '97.8%', '#3F8F77'],
  ['Face matching',      '3.0.0', '0.85', '96.1%', '#3F8F77'],
  ['Head pose and gaze', '1.9.2', '0.65', '89.4%', '#9A7526'],
  ['Object detection',   '2.1.0', '0.75', '81.2%', '#B9603A'],
  ['Voice separation',   '1.4.0', '0.72', '88.0%', '#9A7526'],
]

export const RISK_WEIGHTS = [
  ['More than one face', 30, 100, 'var(--rose)'],
  ['Phone detected',     25,  83, 'var(--rose)'],
  ['No face in frame',   15,  50, 'var(--peach)'],
  ['Left fullscreen',    10,  33, 'var(--butter)'],
  ['Looked away',         6,  20, 'var(--butter)'],
]

export const CHARGES = [
  ['Sokha Vann', 'Certification L2', '$45.00', 'Visa ·4417',       'low',  'Paid',              'Refund'],
  ['Rithy Chan', 'Certification L2', '$45.00', 'Mastercard ·8802', 'high', 'Card declined',     'Retry'],
  ['Dara Pen',   'Certification L1', '$30.00', 'Visa ·1190',       'idle', 'Refunded',          'View'],
  ['Malis Sok',  'Certification L2', '$45.00', 'Visa ·6631',       'crit', 'Chargeback',        'View'],
  ['Nary Chhem', 'Certification L2', '$45.00', 'JCB ·2045',        'med',  'Awaiting payment',  'Remind'],
]
