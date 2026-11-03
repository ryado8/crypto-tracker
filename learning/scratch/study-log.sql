CREATE TABLE study_log (
    word TEXT NOT NULL,
    minutes_studied INT NOT NULL
);

INSERT INTO study_log (word, minutes_studied) VALUES ('見る', 10);
INSERT INTO study_log (word, minutes_studied) VALUES ('走る', 10);

SELECT * FROM study_log;