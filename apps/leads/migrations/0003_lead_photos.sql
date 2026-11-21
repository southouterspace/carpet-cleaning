-- Number of photos stored in R2 under <lead id>/<n> for each lead.
ALTER TABLE leads ADD COLUMN photos INTEGER NOT NULL DEFAULT 0;
