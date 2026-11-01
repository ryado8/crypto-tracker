<!-- altitude:generated from your journey — local edits don't sync; park ideas in a lesson or edit on the web -->

# Crypto Price Target Tracker

You add price targets for coins, such as Bitcoin above $120,000 or Ethereum below $2,500. A scheduled job fetches current prices from a public market data source every ten minutes and saves each reading. When a price crosses a target, the job marks it as hit with the time and price. A React page shows every target as waiting or hit along with each coin's recent readings, and your FastAPI service returns the same status as JSON.

## Locked decisions

## Build brief
### Stack
- Python
- FastAPI
- React
- SQLModel
- PostgreSQL
- Public crypto price API
### Features
- Target status and recent readings on a page
- Targets marked hit with time and price
- Prices checked every ten minutes
### Design
- Build every screen to `DESIGN.md` at the project root: the colours, fonts, spacing and screens of your Altitude prototype, the visual target. The app shell section sets up every screen as its own page, with the navigation, the look and a clearly labelled placeholder for each part; later tasks fill the placeholders. Each task that builds or changes a screen brings the file and writes it if it is missing or out of date.

## 00 · Real prices in your terminal
A Python script you wrote fetches live Bitcoin, Ethereum, Solana and Dogecoin prices from the public price source and says whether each is above or below a target you typed in.

- [x] Set up the price checker project
  A project folder with its own Python environment, the HTTP library installed, and a REPL session where you try a line or two.
- [x] Inspect the price source's answer
  You call the price source for Bitcoin, note the status code it returns, and write down which field in the answer holds the current price.
- [x] Pull a price out of the JSON
  In the REPL you turn the raw answer into a Python dict and print just the four coins' USD prices.
- [x] Fetch prices from a script
  Running the script prints the current price of all four coins, and a broken URL prints a clear message instead of crashing.
- [x] Check a price against a target
  Given 'Bitcoin above 120000', the script prints whether the live price has crossed it, including the case where the price sits exactly on the target.

## 01 · Click through every screen
A React app where Targets, New target, Readings, Job runs and JSON are real pages in the prototype's colours and fonts, joined by the shared navigation, each holding labelled placeholders.

- [x] Create the React app
  A new React project runs on the dev server and opens in your browser.
- [x] Lay out the Targets page with design tokens
  The Targets page shows its placeholder blocks in the prototype's colours, fonts and spacing, defined once as shared tokens.
- [x] Turn each screen into a component
  All five screens exist as their own components with a labelled placeholder for every part they will hold.
- [ ] Give each screen its own address ← you are here
  Typing each page's address opens it, and New target opens from Targets with a working back control.
- [ ] Build the shared navigation
  The navigation to Targets, Readings, Job runs and JSON shows on every screen and marks the current page with aria-current, keeping Targets marked on New target.

## 02 · Every reading saved in PostgreSQL
Your work is safely in Git, and each run of the price checker stores one timestamped reading per coin in PostgreSQL through SQLModel.

- [ ] Commit the working project
  The price checker and app shell are committed, and you read the diff of a small change you asked Claude Code to make before accepting it.
- [ ] Design the readings table
  A local PostgreSQL database has a readings table with coin, price and time, and you query a hand-inserted row.
- [ ] Connect from Python with SQLModel
  A SQLModel reading class maps to the table, the connection string comes from an environment variable, and the script inserts a reading.
- [ ] Save each fetched price with its time
  Running the script adds four rows stamped in UTC, and a query shows them in your local time correctly.

## 03 · A FastAPI service that knows your targets
A FastAPI service reads targets from PostgreSQL, returns them as JSON, and accepts new above or below targets while rejecting ones that make no sense.

- [ ] Start the FastAPI service
  The service starts from the terminal and answers a request in the browser, and you can describe what happens from request to response.
- [ ] Return the target list as JSON
  GET /api/targets returns every saved target with its coin, direction, price and status straight from PostgreSQL.
- [ ] Describe targets with request and response models
  POST /api/targets accepts coin, direction and price, and the service's docs page shows the exact shapes in and out.
- [ ] Reject targets that make no sense
  An unknown coin, a negative price, or a 'below' target already above the latest price gets a clear error and status code instead of being saved.

## 04 · Checked every ten minutes, even when the source fails
The service runs the price check on its own every ten minutes, records each run, logs what happened, and retries when the price source does not answer.

- [ ] Find the failure in a broken fetch
  You break the price source address on purpose, read the traceback, and point to the exact line and reason it failed.
- [ ] Log what each check does
  Every check logs the coins fetched and any error, and rerunning the same check never saves duplicate readings.
- [ ] Schedule the check every ten minutes
  With the service running, a new job run row with its four linked readings appears every ten minutes, using an interval from configuration you specified to Claude Code.
- [ ] Wrap the price source in its own client
  One client module owns the price source's address, key and headers, and you can see the rate-limit information it sends back.
- [ ] Retry failed checks and note them
  During a simulated outage the run is marked failed with a retry note, the next attempt waits and succeeds, and you checked Claude Code's retry logic line by line.

## 05 · Targets flip to hit on the page
A reading that crosses a target marks it hit with the exact time and price, tests prove the rule, and the Targets page shows real waiting and hit targets from the API.

- [ ] Mark targets hit when a reading crosses
  A target set just past the current price flips to hit with the time and price of the crossing reading, and a hit target never flips back.
- [ ] Test the crossing rule
  pytest checks a price landing exactly on the target, a jump straight past it, and a price that stays on the waiting side.
- [ ] Call the API from the browser
  A fetch to /api/targets from the React app is first blocked, then allowed once the service permits the app's address.
- [ ] Load targets into the Targets page
  The Targets page loads real targets into the Waiting group with count and the Hit group with count, with a loading message and an error message when the service is down.
- [ ] Show each target's row, chip and hit details
  Each Target row with coin, direction and target shows its Waiting or hit status chip, Gap rail with percent to go, and Hit time and price with crossed amount, under a Page title with waiting and hit summary and the Closest to hitting sort note.

## 06 · Add targets and see the history
You add targets from the New target page, browse each coin's readings with the crossing highlighted, and watch the scheduled job's runs.

- [ ] Add a target from the New target page
  The New target button opens the New target form card with the Coin picker, Above or below toggle and Target price input, the Back to Targets button and Cancel action work, and a submitted target appears on Targets.
- [ ] Guide the price before saving
  The Page title and next-check note, Wrong-side price error, Live gap preview, and a Save target button disabled until the price is valid all work, and saving shows the Target saved toast.
- [ ] Browse one coin's readings
  The Readings page shows its Page title with last check time, Coin band, and Readings table with Table header, each Reading row with time, price and change, the Highlighted crossing row with its Crossed target tag, and the Back to targets link; Targets shows the Recent readings list with changes.
- [ ] Chart readings and remember filters
  Coin tabs and the All, waiting, hit filter with counts live in the address, both readings charts draw dashed target lines and the crossing dot, and the Selected target panel header, Latest price and gap to target, and All coin readings button work.
- [ ] Watch the job on the Job runs page
  Job runs shows its Page title, Schedule strip, Today label with run count, each Run row with duration, the Failed run retry note, and the Watch it run player with Run log box, Empty log prompt, Timed log lines, Watch it run button, Target flipped to hit card and See it on Targets link; Targets gets its Top bar with job status, Job strip and Target hit toast.

## 07 · Live, tested, and ready to demo
The JSON page shows the raw status, the service, job and React page run at a live URL, the critical path is tested, and you can explain every important decision.

- [ ] Show the raw JSON page
  The JSON page shows its Page title and subtitle, Endpoint row with the GET /api/targets endpoint path, Copy JSON button with Copied state, Open Targets link, Status as of check time note, and the Formatted JSON response that updates on hit and new target.
- [ ] Push the project to GitHub
  The project lives on GitHub, and a deploy-prep change goes in through a branch and a pull request you reviewed.
- [ ] Deploy the service, job and page
  The FastAPI service with its scheduled job and the React page run at public URLs, configured by environment variables and talking to a hosted PostgreSQL.
- [ ] Test the critical path live
  A health endpoint reports the database and last run, and a test adds a target just past the price, runs the job, and confirms it flips to hit on the page and in the JSON.
- [ ] Record the decisions you can defend
  Short decision records explain the in-process scheduler, how a price jumping past a target is handled, and what happens when the source fails, plus a regression test for a bug you fixed.
