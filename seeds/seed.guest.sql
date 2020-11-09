begin;

insert into guests
(firstname, lastname, response, plus_one, family, note)
values
('Ien', 'Lu', null, null, null, null),
('Dixie', 'Lee', TRUE, TRUE, null, 'hates peanuts.'),
('Charlie', 'Prum', null, null, 1,null),
('Diem', 'Dang', null, null, 1, null),
('Jung', 'Lee', null, null, 2, null),
('Chettra', 'Lee', null, null, 2, null),
('Victor', 'Gomez', null, null, 3, null),
('Gaby', 'Sanchez', null, null, 3, null);

commit;