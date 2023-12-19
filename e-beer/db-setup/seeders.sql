USE grupo_13;

INSERT INTO `brand` 
VALUES (1,'Tres Cordilleras'),(2,'Brahama'),(3,'Grolsch'),(4,'Patagonia'),(5,'Budweiser'),(6,'Heineken'),(7,'Warsteiner'),(8,'Corona'),(9,'Stella Artois'),(10,'Quilmes');

INSERT INTO `category` 
VALUES (1,'Porter'),(2,'Brown Ale'),(3,'Lager'),(4,'IPA'),(5,'Pilsner'),(6,'Stout');

INSERT INTO `size` 
VALUES (1,'350 cc'),(2,'500 cc'),(3,'1000 cc'),(4,'1500 cc');

INSERT INTO `products` VALUES ('48b88c7d-ea18-4655-ba6c-d5346a60707e','Patagonia - Porter',1900,' Cremosa que en aroma y sabor destaca por las notas de chocolate, caramelo y galleta.',4,1,3,'image-1702931879683.jpeg'),('607211d5-244a-46e1-8b5b-86b4a2af38fe','Stella Artois - Lager',1000,'Es de color marrón rojizo o cobre con cuerpo medio y leve dulzura a malta',9,3,1,'image-1702513511539.jpg'),('6c0e09c6-e5bf-4ed7-bacc-b831f4fb5053','Corona - Pilsener',1200,'Tiene notas afrutadas, de cuerpo medio, fresca, balanceada y muy fácil de beber.',8,5,1,'image-1702948931977.jpg'),('6e3f46b3-80e5-416e-8f5c-514b8a2e8f45','Heineken - Lager',1500,'Seca de cuerpo ligero con buen paso de boca, que proporciona un final amargo muy fresco y nada astringente.',6,3,3,'image-1702931742277.jpeg'),('7f3c32c1-1aa3-473c-9d22-5d068d15f86b','Quilmes - IPA',2000,'Cerveza de cuerpo robusto y sabor acaramelado. Su intenso amargor es por su alta cantidad de lúpulo y su color oscuro borravino provienen de las tres variedades de malta con las que se elabora.',10,4,3,'image-1702933728170.jpeg'),('83dd6e11-1cdc-4c98-8ce7-258268b3041e','Quilmes - Stout',900,'Elaborada con maltas tostadas que le otorgan su particular aroma. Destacada por su cuerpo y espuma cremosa, recuerda al sabor del chocolate y al amargor del café',10,6,1,'image-1702933873297.jpg'),('9c53f741-7e05-4760-a335-8919a1243ee1','Patagonia - Pilsener',2000,'Tiene un color dorado brillante, gran cuerpo y un amargor equilibrado.',4,5,3,'image-1702516191158.jpg'),('aa4fdd0b-8c74-4a21-aa7c-a48c1d1fd64f','Quilmes - Stout',1000,'Elaborada con maltas tostadas que le otorgan su particular aroma. Destacada por su cuerpo y espuma cremosa, recuerda al sabor del chocolate y al amargor del café.',10,6,2,'image-1702933167779.jpeg'),('affb8916-68fd-4659-a63b-098cd63a954c','Heineken - Lager',850,'Seca de cuerpo ligero con buen paso de boca, que proporciona un final amargo muy fresco y nada astringente.\r\n',6,3,2,'image-1702931554610.jpg'),('bb046aa5-c400-49b0-b8b3-82fd6c0490d8','Tres cordilleras - Brown Ale',2400,'Toque tostado, con insinuaciones de pan fresco y un sabor malteado que siempre vas a querer repetir.',1,2,3,'image-1702932194374.png'),('e1c37147-c72e-421e-9ac3-748eecf82cf4','Budweiser - Lager',1100,'Además de la malta y el lúpulo, el ingrediente clave es el arroz, que le aporta ese frescor característico y sabor ligero. ',5,3,3,'image-1702517515073.jpg'),('f1d84f82-2184-4326-bb18-53b7790f2543','Patagonia - IPA',2100,'Se percibe la frescura del lúpulo recién cosechado, con un amargo elegante y bien presente.',4,4,3,'image-1702516801090.jpeg');


INSERT INTO `role` VALUES (1,'admin'),(2,'user');

INSERT INTO `users` 
VALUES ('13cb7da7-79cc-4905-8b7d-9afbb7d906c5','asd','asd','asd@ebeer.com','$2a$10$A0IM6CF1yiRYlNg7IJLh2uWFqncbQ94Hzx2.QyzMGWn4ZvmUZGB9e',12345678,'1994-11-19','asd','default-image.png',1);