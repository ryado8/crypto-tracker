# Tripwire — design

Set coin price targets; a job checks prices every 10 minutes and marks each one hit.

This file is how the app looks. It comes from the clickable prototype designed in Altitude, which stays there as the visual target. Follow it whenever a screen is built or changed: use these colours, fonts and spacing, and give each screen the parts listed for it. The prototype is a picture, not code — build every screen in this project's own code. The app shell comes first: every screen as its own page, the navigation between them and this look, with a clearly labelled placeholder for each part a screen holds. Later tasks replace the placeholders with the real parts, one task at a time.

## Device

A website in a desktop browser window. Design for a 1280px-wide window first; narrower windows may stack the same parts.

## Look

- Name: Aubergine Tripwire — Quiet and exact, with one deep plum panel where the numbers come alive.
- Mode: light
- Direction: A calm, precise price watch: frost page, compact bold grotesk numbers, and one deep aubergine panel where the selected coin's readings live.
- Signature element: The gap rail: every target row carries a slim magenta rail that fills as the last reading closes in on the target, labelled '0.9% to go', turning solid green with 'Crossed by $1.38' once hit; the aubergine panel repeats it as a chart with the target drawn as a dashed magenta line.
- Who and where: A career-changer glances at Tripwire on a laptop at a bright office desk over lunch, wanting a quick, calm read of where prices sit against their lines.

## Colours

Committed: a deep aubergine field carries the whole right-hand detail panel, about a third of the screen, set against a cool frost-lilac page. Signal magenta marks the target line, the gap rails and the one primary action, and a deep green is reserved for hit. Chosen to avoid the category guess of a black terminal with neon green and Bitcoin orange.

| Name | Hex | Used for |
|---|---|---|
| Frost | `#F4F3F8` | Page background, cool lilac-tinted neutral |
| Surface | `#FFFFFF` | Backgrounds, selected states, hover states, the current navigation item and focus rings |
| Ink | `#1C1726` | Primary text and headings |
| Plum muted | `#655D72` | Secondary text and metadata on light surfaces |
| Line | `#E6E2EE` | Borders and backgrounds |
| Chip | `#ECE8F2` | Backgrounds and hover states |
| Aubergine | `#2B1335` | Full colour field behind the selected coin's readings panel |
| Aubergine 2 | `#3A1E47` | Backgrounds (a lighter Aubergine) |
| Aubergine 3 | `#4A2A58` | Backgrounds (a lighter Aubergine) |
| Aubergine text | `#F3EAF5` | Text, icons and backgrounds (a pale tint of Aubergine) |
| Aubergine muted | `#BDA9C7` | Text (a lighter Aubergine) |
| Signal magenta | `#D42A6B` | Target lines, gap rails, primary button, focus ring |
| Signal magenta hover | `#B81F5A` | Text and hover states (a deeper Signal magenta) |
| Signal magenta soft | `#FBE4EE` | Backgrounds (a pale tint of Signal magenta) |
| Signal magenta light | `#FF7AAA` | Text and icons (a lighter Signal magenta) |
| Hit green | `#0E7A52` | Hit status chips, crossed rails and the live job dot |
| Hit green soft | `#DDF2E8` | Backgrounds and borders (a pale tint of Hit green) |
| Hit green light | `#6FDDAB` | Text and icons (a lighter Hit green) |

As CSS custom properties:

```css
:root {
  --frost: #F4F3F8;
  --surface: #FFFFFF;
  --ink: #1C1726;
  --muted: #655D72; /* Plum muted */
  --line: #E6E2EE;
  --chip: #ECE8F2;
  --aub: #2B1335; /* Aubergine */
  --aub-2: #3A1E47; /* Aubergine 2 */
  --aub-3: #4A2A58; /* Aubergine 3 */
  --aub-text: #F3EAF5; /* Aubergine text */
  --aub-muted: #BDA9C7; /* Aubergine muted */
  --mag: #D42A6B; /* Signal magenta */
  --mag-hover: #B81F5A; /* Signal magenta hover */
  --mag-soft: #FBE4EE; /* Signal magenta soft */
  --mag-light: #FF7AAA; /* Signal magenta light */
  --hit: #0E7A52; /* Hit green */
  --hit-soft: #DDF2E8; /* Hit green soft */
  --hit-light: #6FDDAB; /* Hit green light */
}
```

## Fonts

Free Google Fonts families under the SIL Open Font License: use them in the app, self-host them, or load them from Google Fonts.

- **Hanken Grotesk** — All UI, headings and prices, with tabular numerals for every price and time. Weights 400, 600, 800. Get it: https://fonts.google.com/specimen/Hanken+Grotesk
- **JetBrains Mono** — Raw JSON output and job log lines only. Weights 400, 600. Get it: https://fonts.google.com/specimen/JetBrains+Mono

To load them from Google Fonts:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600;800&family=JetBrains+Mono:wght@400;600&display=swap">
```

## Spacing, corners and shadows

- Spacing: 4 / 8 / 12 / 16 / 24 / 32 / 48 px; tight inside rows, 24 to 32 between groups
- Corners: 6px chips and inputs, 10px rows and buttons, 16px panel corner and chart card, pill for nav and filters
- Shadows: `0 1px 2px rgba(43,19,53,.06), 0 6px 18px rgba(43,19,53,.07)` (tinted with Aubergine) on raised rows

## Icons

Simple line icons drawn in the text colour (2px stroke, 1em square), never emoji. The prototype uses: arrow-left, clock, trending-up, check, target, refresh-cw, rotate-ccw, chevron-right, play, copy, chart-line, check-circle. Any open-source line icon set with these icons works.

## Navigation

- The persistent navigation reaches: Targets, Readings, Job runs, JSON. It shows on every screen, those that open from another screen included.
- The item for the screen you are on is marked as current (`aria-current="page"`): a Surface (`#FFFFFF`) background, its text in Ink (`#1C1726`), its `box-shadow: var(--shadow)`. On a screen it doesn't lead to, the item you came from stays marked.
- New target opens from another screen and has a back control; the navigation doesn't lead to it.

## Screens

The value happens in the background (Runs every 10 minutes). Main screen first.

### Targets (main screen)

See every target as waiting or hit and how close the waiting ones are

Holds:
- Top bar with brand, nav and job status
- Page title with waiting and hit summary
- New target button
- All, waiting, hit filter with counts
- Closest to hitting sort note
- Waiting group with count
- Target row with coin, direction and target
- Gap rail with percent to go
- Waiting or hit status chip
- Hit group with count
- Hit time and price with crossed amount
- Job strip with last and next run
- Selected target panel header
- Latest price and gap to target
- Readings chart with dashed target line
- Recent readings list with changes
- All coin readings button
- Target hit toast
- Target saved toast

Opens: New target, Job runs, Readings

Features it shows:
- Target status and recent readings on a page
- Targets marked hit with time and price
- Prices checked every ten minutes

### New target

Add an above or below price target for a coin

Holds:
- Back to Targets button
- Page title and next-check note
- New target form card
- Coin picker with latest 2:50pm reading per coin
- Above or below toggle
- Target price input with current price hint
- Wrong-side price error
- Live gap preview with rail and percent to go (empty prompt when blank)
- Cancel action
- Save target button, disabled until price is valid

Opens: Targets

Features it shows:
- Set above or below price targets

### Readings

Look through one coin's saved readings and where a target was crossed

Holds:
- Page title with last check time
- Coin tabs (Bitcoin, Ethereum, Solana, Dogecoin)
- Coin band with latest price, status chip and targets line
- Readings chart with dashed target lines and crossing dot
- Readings table
- Table header (Time, Price, Change, Note)
- Reading row with time, price and change
- Highlighted crossing row
- Crossed target tag
- Back to targets link

Opens: Targets

Features it shows:
- Target status and recent readings on a page
- Targets marked hit with time and price

### Job runs

Check the scheduled price job is running and watch one run

Holds:
- Page title with last check time
- Schedule strip: every 10 minutes, runs today, next check
- Today label with run count
- Run row: time, result, coins, duration
- Failed run retry note
- Watch it run player panel
- Run log box
- Empty log prompt before playing
- Timed log line, crossing line in green
- Watch it run button, becomes Replay
- Target flipped to hit card with time and price
- See it on Targets link

Opens: Targets

Features it shows:
- Prices checked every ten minutes
- Targets marked hit with time and price
- Failed price checks noted and retried

### JSON

Show the same target status the API returns

Holds:
- Page title and subtitle
- Endpoint row
- GET /api/targets endpoint path
- Copy JSON button with Copied state
- Open Targets link
- Status as of check time note
- Formatted JSON response for all targets, updating on hit and new target

Opens: Targets

Features it shows:
- The same status as JSON
