CREATE TABLE vocab_cards (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    word text NOT NULL,
    times_reviewed integer NOT NULL DEFAULT 0 CHECK (times_reviewed >= 0),
    due_date date NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO vocab_cards (word) VALUES ('ゲーム');
INSERT INTO vocab_cards (word, times_reviewed) VALUES ('白い', -1);

SELECT * FROM vocab_cards;