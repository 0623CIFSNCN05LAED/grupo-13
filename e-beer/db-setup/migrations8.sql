-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: grupo_13
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'Tres Cordilleras'),(2,'Brahama'),(3,'Grolsch'),(4,'Patagonia'),(5,'Budweiser'),(6,'Heineken'),(7,'Warsteiner'),(8,'Corona'),(9,'Stella Artois'),(10,'Quilmes');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Porter'),(2,'Brown Ale'),(3,'Lager'),(4,'IPA'),(5,'Pilsner'),(6,'Stout');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` varchar(200) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(200) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_brand_fk` (`brand_id`),
  KEY `products_category_fk` (`category_id`),
  KEY `products_size_fk` (`size_id`),
  CONSTRAINT `products_brand_fk` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  CONSTRAINT `products_category_fk` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `products_size_fk` FOREIGN KEY (`size_id`) REFERENCES `size` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('48b88c7d-ea18-4655-ba6c-d5346a60707e','Patagonia - Porter',1900,' Cremosa que en aroma y sabor destaca por las notas de chocolate, caramelo y galleta.',4,1,3,'image-1702931879683.jpeg'),('607211d5-244a-46e1-8b5b-86b4a2af38fe','Stella Artois - Lager',1000,'Es de color marrón rojizo o cobre con cuerpo medio y leve dulzura a malta',9,3,1,'image-1702513511539.jpg'),('6c0e09c6-e5bf-4ed7-bacc-b831f4fb5053','Corona - Pilsener',1200,'Tiene notas afrutadas, de cuerpo medio, fresca, balanceada y muy fácil de beber.',8,5,1,'image-1702948931977.jpg'),('6e3f46b3-80e5-416e-8f5c-514b8a2e8f45','Heineken - Lager',1500,'Seca de cuerpo ligero con buen paso de boca, que proporciona un final amargo muy fresco y nada astringente.',6,3,3,'image-1702931742277.jpeg'),('7f3c32c1-1aa3-473c-9d22-5d068d15f86b','Quilmes - IPA',2000,'Cerveza de cuerpo robusto y sabor acaramelado. Su intenso amargor es por su alta cantidad de lúpulo y su color oscuro borravino provienen de las tres variedades de malta con las que se elabora.',10,4,3,'image-1702933728170.jpeg'),('83dd6e11-1cdc-4c98-8ce7-258268b3041e','Quilmes - Stout',900,'Elaborada con maltas tostadas que le otorgan su particular aroma. Destacada por su cuerpo y espuma cremosa, recuerda al sabor del chocolate y al amargor del café',10,6,1,'image-1702933873297.jpg'),('9c53f741-7e05-4760-a335-8919a1243ee1','Patagonia - Pilsener',2000,'Tiene un color dorado brillante, gran cuerpo y un amargor equilibrado.',4,5,3,'image-1702516191158.jpg'),('aa4fdd0b-8c74-4a21-aa7c-a48c1d1fd64f','Quilmes - Stout',1000,'Elaborada con maltas tostadas que le otorgan su particular aroma. Destacada por su cuerpo y espuma cremosa, recuerda al sabor del chocolate y al amargor del café.',10,6,2,'image-1702933167779.jpeg'),('affb8916-68fd-4659-a63b-098cd63a954c','Heineken - Lager',850,'Seca de cuerpo ligero con buen paso de boca, que proporciona un final amargo muy fresco y nada astringente.\r\n',6,3,2,'image-1702931554610.jpg'),('bb046aa5-c400-49b0-b8b3-82fd6c0490d8','Tres cordilleras - Brown Ale',2400,'Toque tostado, con insinuaciones de pan fresco y un sabor malteado que siempre vas a querer repetir.',1,2,3,'image-1702932194374.png'),('e1c37147-c72e-421e-9ac3-748eecf82cf4','Budweiser - Lager',1100,'Además de la malta y el lúpulo, el ingrediente clave es el arroz, que le aporta ese frescor característico y sabor ligero. ',5,3,3,'image-1702517515073.jpg'),('f1d84f82-2184-4326-bb18-53b7790f2543','Patagonia - IPA',2100,'Se percibe la frescura del lúpulo recién cosechado, con un amargo elegante y bien presente.',4,4,3,'image-1702516801090.jpeg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size`
--

DROP TABLE IF EXISTS `size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `size` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size`
--

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;
INSERT INTO `size` VALUES (1,'350 cc'),(2,'500 cc'),(3,'1000 cc');
/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` varchar(200) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `contact_number` int(11) NOT NULL,
  `birth_date` date NOT NULL COMMENT 'Debe ser mayor de edad',
  `address` varchar(200) NOT NULL,
  `profile_picture` varchar(100) DEFAULT NULL COMMENT 'En default recordar poner la ruta de la imagen por defecto',
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Users_UN` (`email`),
  KEY `users_role_fk` (`role_id`),
  CONSTRAINT `users_role_fk` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('078f66d1-4973-40f4-b70f-c9325d46b280','Virginia','Ebeer','virgi@ebeer.com','$2a$10$nRKgdGGtdocpE1w42LG/d.e1WanmV8UT1TywBPcJ7DCBMA.8LCZ9O',12345678,'1989-01-01','Caba','default-image.jpg',1),('13cb7da7-79cc-4905-8b7d-9afbb7d906c5','Clemente','Ebeer','clemente@ebeer.com','$2a$10$A0IM6CF1yiRYlNg7IJLh2uWFqncbQ94Hzx2.QyzMGWn4ZvmUZGB9e',12345678,'1994-11-19','Argentina','default-image.jpg',1),('45a4deea-80b2-4dc9-9c50-e75fcbfc4a39','Florencia','Ebeer','flor@ebeer.com','$2a$10$X4hTGbsevLOgBxy.Jf17MOyLfxOzKAfINrYV3VSLUg8hp9FxrsSL6',12345678,'1989-01-01','Mardel','default-image.jpg',1),('5d2e8117-1811-4029-815d-3b96faaa4bfe','Juliana','Ebeer','juli@ebeer.com','$2a$10$DHfbMVMkSy/YebGQ8FVCE.OZr9sKUzNH061.eJGVWvSETTUbxU7ie',12345678,'1989-01-01','Colombia','default-image.jpg',1),('67689dc8-015a-4f2f-93ff-ec8e224526b9','Sofia','Ebeer','sofi@ebeer.com','$2a$10$WI4YfLkNexDNZLwmc8cPcu9qRDgWoMN.UwiqoiOdGnsL1wUH5vzye',1989,'1989-12-13','Taylor\'s Version','default-image.jpg',1),('d4c719e9-aa3e-4fa6-b386-811bd6d9cba3','Usuario','Prueba','usuario@pass12345678.com','$2a$10$w44bIIGHgCwNXimdBK7ipeHHPgUX6DVHhCBOLzoLOvMAwKfosAHxG',12345678,'1989-01-01','Taylor\'s Version','default-image.jpg',2),('d84c245b-ccb6-4258-a22d-156b7b7958e3','Martiniano','Ebeer','marti@ebeer.com','$2a$10$YPdWKGTn1a5i.UJhcBGkn.z1EVTx.j9e4JsOcf4O6WSo0ATgUOcCy',12345678,'1901-05-25','Monumental','default-image.jpg',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'grupo_13'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-18 23:08:46
