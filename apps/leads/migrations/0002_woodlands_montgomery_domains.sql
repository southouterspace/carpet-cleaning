-- Sites move to their own domains, and The Woodlands and Montgomery join.
-- The lead Worker only accepts posts whose Host matches sites.domain.
UPDATE sites SET domain = 'conroetxcarpetcleaners.com' WHERE id = 'conroe';

INSERT INTO sites (id, domain, name) VALUES
  ('woodlands', 'woodlandscarpetcleaning.com', 'Woodlands Carpet Cleaning'),
  ('montgomery', 'montgomerycarpetcleaning.com', 'Montgomery Carpet Cleaning');
