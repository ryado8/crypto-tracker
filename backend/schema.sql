-- Tripwire's database design. Rebuild the tables with:
--   psql -d crypto_tracker -f backend/schema.sql
CREATE TABLE readings (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    coin_id text NOT NULL,
    price numeric NOT NULL CHECK (price > 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

