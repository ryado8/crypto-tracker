-- The latest fetch's readings, with their times shown in UTC and in New York time.
-- Run with:  psql -d crypto_tracker -f backend/latest-readings.sql
SELECT coin_id, price, created_at, created_at AT TIME ZONE 'UTC' AS utc_time, created_at AT TIME ZONE 'America/New_York' AS ny_time
FROM readings
ORDER BY created_at DESC
LIMIT 4;