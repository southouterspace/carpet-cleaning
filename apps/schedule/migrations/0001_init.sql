-- One row per cleaner (a renter) who uses the scheduling app.
-- settings is JSON (see src/engine.ts, Settings); missing keys use defaults.
CREATE TABLE cleaners (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  -- SHA-256 of the sign-in code, hex. Codes are set by us at onboarding.
  code_hash TEXT NOT NULL,
  home_zip TEXT,
  settings TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- A job on a cleaner's schedule. Times are local to TIME_ZONE:
-- day is YYYY-MM-DD and start_min is minutes after midnight.
CREATE TABLE jobs (
  id TEXT PRIMARY KEY,
  cleaner_id TEXT NOT NULL REFERENCES cleaners(id),
  status TEXT NOT NULL DEFAULT 'requested', -- requested | confirmed | done | canceled
  day TEXT NOT NULL,
  start_min INTEGER NOT NULL,
  minutes INTEGER NOT NULL,
  -- The arrival window shown to the customer, in minutes after midnight.
  window_start INTEGER,
  window_end INTEGER,
  name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  address TEXT,
  zip TEXT,
  rooms INTEGER NOT NULL DEFAULT 0,
  stairs INTEGER NOT NULL DEFAULT 0,
  pets INTEGER NOT NULL DEFAULT 0,
  notes TEXT,
  source TEXT NOT NULL DEFAULT 'app', -- app | quick-add | site:<site id>
  lead_id TEXT, -- leads.id in carpet-cleaning-leads, when it came from a city site
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX jobs_cleaner_day ON jobs (cleaner_id, day, start_min);
