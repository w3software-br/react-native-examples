create table delivery(
  id int primary key auto_increment,
  user int not null,
  orderId int,
  clientName varchar(100),
  creditCard varchar(100),
  total varchar(100),
  money varchar(100),  
  rest varchar(100),
  publicplace varchar(100),
  _number varchar(20),
  neighborHood varchar(100),
  foreign key(user) references user(id)
);