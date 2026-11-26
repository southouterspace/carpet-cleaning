-- The first 11 trade sites (plumbing, electrical, AC and garage door). The
-- lead Worker only accepts posts whose Host matches sites.domain, so each row
-- names the site's own domain.
INSERT INTO sites (id, domain, name, trade) VALUES
  ('plumbing-conroe', 'conroetxplumber.com', 'Conroe TX Plumber', 'plumbing'),
  ('electric-conroe', 'conroetxelectric.com', 'Conroe TX Electric', 'electrical'),
  ('plumbing-woodlands', 'woodlandstxplumber.com', 'Woodlands TX Plumber', 'plumbing'),
  ('plumbing-spring', 'springtexasplumber.com', 'Spring Texas Plumber', 'plumbing'),
  ('hvac-conroe', 'conroetxac.com', 'Conroe TX AC', 'hvac'),
  ('electric-woodlands', 'woodlandstxelectrician.com', 'Woodlands TX Electrician', 'electrical'),
  ('electric-spring', 'springtxelectric.com', 'Spring TX Electric', 'electrical'),
  ('plumbing-magnolia', 'magnoliatxplumbing.com', 'Magnolia TX Plumbing', 'plumbing'),
  ('plumbing-montgomery', 'montgomerytxplumber.com', 'Montgomery TX Plumber', 'plumbing'),
  ('plumbing-willis', 'willisplumber.com', 'Willis Plumber', 'plumbing'),
  ('garage-conroe', 'conroetxgaragedoor.com', 'Conroe TX Garage Door', 'garage-door');
