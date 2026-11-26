-- Sites can be other trades than carpet cleaning (plumbing, electrical, hvac,
-- garage-door). Repair trades ask whose property it is and when it was built.
ALTER TABLE sites ADD COLUMN trade TEXT NOT NULL DEFAULT 'carpet';
ALTER TABLE leads ADD COLUMN property TEXT;  -- house | rental | landlord | business
ALTER TABLE leads ADD COLUMN built TEXT;     -- pre1980 | 1980-2000 | post2000
