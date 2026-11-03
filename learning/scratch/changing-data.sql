CREATE TABLE study_minutes (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    day text NOT NULL,
    minutes int NOT NULL
);

INSERT INTO study_minutes (day, minutes) VALUES ('Monday', 30);
INSERT INTO study_minutes (day, minutes) VALUES ('Tuesday', 45);
INSERT INTO study_minutes (day, minutes) VALUES ('Wednesday', 20);

UPDATE study_minutes
SET minutes = 60
WHERE day = 'Tuesday';

DELETE FROM study_minutes WHERE day = 'Wednesday';

SELECT * FROM study_minutes;