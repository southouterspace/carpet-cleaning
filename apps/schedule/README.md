# Scheduling app

A phone-first schedule for the cleaners who rent our sites: a Today screen with
drive times, quick add, move with Undo, and confirm for requests. It's a
Cloudflare Worker (`src/index.ts`) with a D1 database and static files in
`public/`. No framework and no build step.

It isn't deployed. See "Turning it on" below.

## What's in it

- `src/engine.ts`: job length from rooms, stairs and pets; drive time between
  ZIPs (a straight-line estimate from ZIP centers, no maps API); conflict
  checks for hours, lunch, overlaps, drive time and max jobs a day; open
  arrival windows with minimum notice and a booking horizon. Pure functions.
- `src/quickadd.ts`: reads a line like `Lee 4 rooms pets Thu 1pm 77304,
  gate code 4411` into a job.
- `src/index.ts`: the API, all scoped to the signed-in cleaner.
- `src/auth.ts`: sign-in with email and a code we hand out; the session is
  an HMAC-signed cookie, so there's no session table.
- `public/`: the Today screen (`app.js`), and a service worker that keeps the
  app on the phone so it opens with no signal and shows the last saved day.

| Route | What it does |
| --- | --- |
| `POST /api/login` | `{ email, code }` signs in. |
| `GET /api/me` | The cleaner's name and settings. |
| `PUT /api/settings` | `{ settings, homeZip }`, merged over the defaults. |
| `GET /api/day?date=` | Jobs, the drive before each one, and totals. |
| `GET /api/windows?date=&rooms=&stairs=&pets=&zip=` | Open arrival windows for a job that size. |
| `POST /api/jobs` | `{ quick }` or fields. A conflict is a 409 with the reason; send `force: true` to book anyway. |
| `PATCH /api/jobs/:id` | Move, resize, edit or change status. Moves are checked like adds. Undo is a PATCH back. |
| `POST /api/jobs/:id/confirm` | Confirm a request. |

Times are minutes after midnight in `TIME_ZONE` (Central). Jobs the cleaner
adds are confirmed. Jobs from a city site will come in as `requested`.

## Run it locally

```sh
cd apps/schedule
echo 'SESSION_SECRET=dev-only' > .dev.vars
bunx wrangler d1 migrations apply carpet-cleaning-schedule --local
# A cleaner who signs in with code 123456:
bunx wrangler d1 execute carpet-cleaning-schedule --local --command \
  "INSERT INTO cleaners (id, name, email, code_hash, home_zip) VALUES ('c1', 'Test', 'test@example.com', '$(printf 123456 | sha256sum | cut -d' ' -f1)', '77301')"
bunx wrangler dev
```

`bun test` runs the engine, parser and API tests (the API tests use an
in-memory SQLite stand-in for D1).

## Turning it on

1. `bunx wrangler d1 create carpet-cleaning-schedule` and put the id in `wrangler.jsonc`.
2. `bun run db:migrate`.
3. `bunx wrangler secret put SESSION_SECRET` (a long random string).
4. Give it a hostname (a route on a domain we own) and add a `deploy` script.
5. Add each cleaner with a code we send them, as in the local example.

## Not in this slice

Customer "Pick a time" on the city sites, turning site leads into requested
jobs, email reminders, Google Calendar sync, a map, and the on-my-way link.
Text messages need Twilio and payments need Stripe, so both wait for an OK.
