create table collage(
	idCollage binary(16) not null primary key default(uuid_to_bin(uuid())),
    collageName varchar(400),
    shortName varchar(10)
);
create table question(
	idQuestion binary(16) not null primary key default(uuid_to_bin(uuid())),
    questionType int,
    questionAnswer varchar(8)
);
create table exam(
	idExam binary(16) not null primary key default(uuid_to_bin(uuid())),
    idCollage binary(16) references collage(idCollage),
    yearExam int,
    dayExam int,
    lenguage varchar(30),
    color int,
    colorCode varchar(6),
    dataExam date
);
create table question_exam(
	id binary(16) not null primary key default(uuid_to_bin(uuid())),
    idQuestion binary(16) references question(idQuestion),
    idExam binary(16) references exam(idExam)
);
create table try(
	idTry binary(16) not null primary key default(uuid_to_bin(uuid())),
    idQuestionExam binary(16) references question_exam(id),
    answer varchar(8),
    isRight int
);
