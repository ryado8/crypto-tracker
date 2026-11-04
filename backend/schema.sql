-- Tripwire's database design. Rebuild the tables with:
--   psql -d crypto_tracker -f backend/schema.sql
CREATE TABLE readings (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    coin_id text NOT NULL,
    price numeric NOT NULL CHECK (price > 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);


-- One row per price target, e.g. "bitcoin above 120000".
-- The hit time and hit price come later, in the task that marks targets hit.
CREATE TABLE targets (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    coin_id text NOT NULL,
    direction text NOT NULL CHECK (direction IN ('above', 'below')),
    price numeric NOT NULL CHECK (price > 0),
    status text NOT NULL DEFAULT 'waiting' CHECK (status IN ('waiting', 'hit')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
