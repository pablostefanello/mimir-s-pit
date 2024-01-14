
create table college(
	idCollage binary(16) not null primary key default(uuid_to_bin(uuid())),
    collageName varchar(400),
    shortName varchar(10)
);
create table question(
	idQuestion binary(16) not null primary key default(uuid_to_bin(uuid())),
    questionType int,
    questionAnswer varchar(8)
);

