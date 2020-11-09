BEGIN;

CREATE TABLE if NOT EXISTS guests (
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    response BOOLEAN,
    plus_one BOOLEAN,
    family INTEGER,
    note TEXT 
);

COMMIT;