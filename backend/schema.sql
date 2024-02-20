DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

INSERT INTO profile (name) VALUES ('Alice');