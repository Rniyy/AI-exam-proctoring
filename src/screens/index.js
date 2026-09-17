import { Wall } from './Wall.jsx'
import { SystemCheck } from './SystemCheck.jsx'
import { Verify } from './Verify.jsx'
import { Session } from './Session.jsx'
import { Excel } from './Excel.jsx'
import { Result } from './Result.jsx'
import { Builder } from './Builder.jsx'
import { Queue } from './Queue.jsx'
import { Review } from './Review.jsx'
import { Dash } from './Dash.jsx'
import { Models } from './Models.jsx'
import { Billing } from './Billing.jsx'

/**
 * Screen registry.
 *   t = title, shown in the rail and as the page heading
 *   d = one-line description under the heading
 *   r = role badge
 *   C = component, receives { go } for navigation
 */
export const SCREENS = {
  wall: {
    t: 'Live monitoring', r: 'Proctor', C: Wall,
    d: 'Everyone currently sitting the exam, ordered by risk. Tiles reorder themselves as the risk engine updates.',
  },
  check: {
    t: 'System check', r: 'Student', C: SystemCheck,
    d: 'Eight hardware and permission checks before the exam opens. Blocking failures are separated from warnings.',
  },
  verify: {
    t: 'Identity check', r: 'Student', C: Verify,
    d: 'Face capture compared against the student record, with the confidence shown rather than hidden.',
  },
  session: {
    t: 'Taking an exam', r: 'Student', C: Session,
    d: 'Question, timer, navigation and a permanent recording notice. Nothing in the layout is designed to startle.',
  },
  excel: {
    t: 'Spreadsheet question', r: 'Student', C: Excel,
    d: 'The built-in workbook editor. Graded cells are outlined, and the rules for this question are stated up front.',
  },
  result: {
    t: 'My result', r: 'Student', C: Result,
    d: 'Score and proctoring outcome together, written so a student can tell what was flagged and what came of it.',
  },
  builder: {
    t: 'Exam setup', r: 'Teacher', C: Builder,
    d: 'Details, sections and proctoring rules in one place, with a preview of what students will be told.',
  },
  queue: {
    t: 'Review queue', r: 'Reviewer', C: Queue,
    d: 'Sessions past the risk threshold, highest first, with the signals that pushed them there.',
  },
  review: {
    t: 'Session review', r: 'Reviewer', C: Review,
    d: 'The full picture for one session: risk over time, the evidence behind each event, and the decision.',
  },
  dash: {
    t: 'Dashboard', r: 'Admin', C: Dash,
    d: 'Live exams, where flags come from, and how often the models turn out to be wrong.',
  },
  models: {
    t: 'Detection settings', r: 'Admin', C: Models,
    d: 'Model versions, confidence thresholds and the weights behind the risk score.',
  },
  billing: {
    t: 'Exam fees', r: 'Admin', C: Billing,
    d: 'Fee setup and the charges behind each attempt.',
  },
}

/** Rail grouping — order here is the order in the sidebar. */
export const GROUPS = [
  ['Student',  ['check', 'verify', 'session', 'excel', 'result']],
  ['Teacher',  ['builder']],
  ['Proctor',  ['wall']],
  ['Reviewer', ['queue', 'review']],
  ['Admin',    ['dash', 'models', 'billing']],
]
