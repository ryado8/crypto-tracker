CREATE TABLE tutor_lessons (
    topic text NOT NULL,
    held_date date NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO tutor_lessons (topic, held_date) VALUES ('math', '2026-10-10');
INSERT INTO tutor_lessons (topic, held_date) VALUES ('math', '2022-02-08');
INSERT INTO tutor_lessons (topic, held_date) VALUES ('japanese', '2024-10-05');
INSERT INTO tutor_lessons (topic, held_date) VALUES ('english', '2025-08-08');

SELECT * FROM tutor_lessons WHERE topic = 'math';
SELECT * FROM tutor_lessons ORDER BY held_date DESC LIMIT 1;