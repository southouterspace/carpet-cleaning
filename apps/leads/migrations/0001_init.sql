-- One row per city site. renter_* stay null until a renter signs; leads are
-- still logged and copied to the owner.
CREATE TABLE sites (
  id TEXT PRIMARY KEY,
  domain TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  renter_name TEXT,
  renter_email TEXT,
  active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE leads (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL REFERENCES sites(id),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  contact TEXT,          -- text | call | email
  zip TEXT,
  service TEXT,
  rooms TEXT,            -- 1..5 | 6+
  stairs TEXT,           -- none | 1 | 2+
  pets INTEGER NOT NULL DEFAULT 0,
  timing TEXT,           -- asap | week | month | pricing
  message TEXT,
  page TEXT,
  user_agent TEXT,
  country TEXT,
  notified INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX leads_site_created ON leads (site_id, created_at);

INSERT INTO sites (id, domain, name) VALUES
  ('conroe', 'conroetxcarpetcleaners.com', 'Conroe TX Carpet Cleaners');
