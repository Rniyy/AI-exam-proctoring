# Invigil — AI exam proctoring UI

React prototype of the interface for an AI online exam proctoring system.
Twelve screens across five roles: student, teacher, proctor, reviewer, admin.

## Run it

```bash
npm install
npm run dev
```

## Structure

```
src/
  main.jsx            mount
  App.jsx             shell, left rail, screen routing (hash based)
  styles.css          design tokens + all component styles
  data.js             mock data for every screen
  components/
    ui.jsx            Card, Chip, Stat, Meter, Bar, Field, Toggle, Check
    Face.jsx          placeholder camera silhouettes
    Ribbon.jsx        the risk-over-time chart
  screens/
    index.js          screen registry — title, description, role, component
    Wall.jsx          proctor: live monitoring
    SystemCheck.jsx   student: pre-exam device checks
    Verify.jsx        student: identity verification
    Session.jsx       student: taking the exam
    Excel.jsx         student: spreadsheet question
    Result.jsx        student: score + proctoring outcome
    Builder.jsx       teacher: exam setup and proctoring rules
    Queue.jsx         reviewer: sessions needing a decision
    Review.jsx        reviewer: evidence, events, decision
    Dash.jsx          admin: dashboard
    Models.jsx        admin: detection models and risk weights
    Billing.jsx       admin: exam fees and charges
```

## Adding a screen

Add the component, then one entry in `src/screens/index.js`:

```js
newScreen: {
  t: 'Title in the rail',
  d: 'One line under the heading',
  r: 'Admin',
  C: NewScreen,
}
```

…and its key to the right group in `GROUPS`. The rail and routing pick it up.

## Design tokens

All colour, radius and shadow values live in `:root` at the top of `styles.css`.

- Suspicion levels: `--mint` low, `--butter` medium, `--peach` high, `--rose` critical
- `--lilac` is the only interactive accent and is deliberately kept out of that ramp
- `--sky` is informational

If you move to Tailwind, port that `:root` block into `theme.extend.colors` first —
everything else follows from it.

## Wiring it to a backend

Every screen takes its data from `src/data.js`. Replace those exports with fetches
and the components need no changes. The places that will need real state:

- `Wall` — WebSocket pushing risk scores and events; tiles should re-sort on update
- `Session` — autosave on answer change, timer from server time not client clock
- `Review` — evidence URLs are signed and short-lived; log every open
- `Models` — threshold changes are audited
