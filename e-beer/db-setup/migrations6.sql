-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for osx10.10 (x86_64)
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

DROP DATABASE IF EXISTS grupo_13;
CREATE DATABASE grupo_13;
USE grupo_13;

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
INSERT INTO `brand` VALUES (1,'Tres Cordilleras'),(2,'Brahama'),(3,'Pilsen'),(4,'Patagonia'),(5,'Budweiser'),(6,'Heineken'),(7,'Pilsen'),(8,'Corona'),(9,'Stella Artois'),(10,'Quilmes');
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
<<<<<<<< HEAD:e-beer/db-setup/migrations7.sql
INSERT INTO `products` VALUES ('6c0e09c6-e5bf-4ed7-bacc-b831f4fb5053','Corona',3999,'Acá va una descripción',7,5,4,'default-image.png'),('9c53f741-7e05-4760-a335-8919a1243ee1','Pilsen',1920,'Acá va una descripción',1,1,1,'default-image.png'),('bb046aa5-c400-49b0-b8b3-82fd6c0490d8','Tres corderos',2400,'Acá va una descripción',1,1,1,'default-image.png'),('e1c37147-c72e-421e-9ac3-748eecf82cf4','Swift',1989,'Acá va una descripción',4,1,3,'default-image.png');
========
INSERT INTO `products` VALUES ('6c0e09c6-e5bf-4ed7-bacc-b831f4fb5053','Prueba Pilsen 3',1989,'asdasd',7,5,4,'default-image.png'),('9c53f741-7e05-4760-a335-8919a1243ee1','1234',1,'prueba',1,1,1,'image-1700526115622.jpg'),('bb046aa5-c400-49b0-b8b3-82fd6c0490d8','123',123,'123',1,1,1,'image-1700528388391.jpg'),('e1c37147-c72e-421e-9ac3-748eecf82cf4','1324',189,'asfasd',4,1,3,'image-1700526488600.png');
>>>>>>>> 4bd85f8c582d4141aaa5ae99c9d4498ef5a1ae8f:e-beer/db-setup/migrations6.sql
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
INSERT INTO `size` VALUES (1,'350 cc'),(2,'500 cc'),(3,'1000 cc'),(4,'1500 cc');
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
<<<<<<<< HEAD:e-beer/db-setup/migrations7.sql
INSERT INTO `users` VALUES ('078f66d1-4973-40f4-b70f-c9325d46b280','Virginia','Ebeer','virgi@ebeer.com','$2a$10$nRKgdGGtdocpE1w42LG/d.e1WanmV8UT1TywBPcJ7DCBMA.8LCZ9O',12345678,'1989-01-01','Caba','default-image.jpg',1),('13cb7da7-79cc-4905-8b7d-9afbb7d906c5','Clemente','Ebeer','clemente@ebeer.com','$2a$10$A0IM6CF1yiRYlNg7IJLh2uWFqncbQ94Hzx2.QyzMGWn4ZvmUZGB9e',12345678,'1994-11-19','Argentina','default-image.jpg',1),('45a4deea-80b2-4dc9-9c50-e75fcbfc4a39','Florencia','Ebeer','flor@ebeer.com','$2a$10$X4hTGbsevLOgBxy.Jf17MOyLfxOzKAfINrYV3VSLUg8hp9FxrsSL6',12345678,'1989-01-01','Mardel','default-image.jpg',1),('5d2e8117-1811-4029-815d-3b96faaa4bfe','Juliana','Ebeer','juli@ebeer.com','$2a$10$DHfbMVMkSy/YebGQ8FVCE.OZr9sKUzNH061.eJGVWvSETTUbxU7ie',12345678,'1989-01-01','Colombia','default-image.jpg',1),('67689dc8-015a-4f2f-93ff-ec8e224526b9','Sofia','Ebeer','sofi@ebeer.com','$2a$10$WI4YfLkNexDNZLwmc8cPcu9qRDgWoMN.UwiqoiOdGnsL1wUH5vzye',1989,'1989-12-13','Taylor\'s Version','default-image.jpg',1),('d4c719e9-aa3e-4fa6-b386-811bd6d9cba3','Usuario','Prueba','usuario@pass12345678.com','$2a$10$w44bIIGHgCwNXimdBK7ipeHHPgUX6DVHhCBOLzoLOvMAwKfosAHxG',12345678,'1989-01-01','Taylor\'s Version','default-image.jpg',2),('d84c245b-ccb6-4258-a22d-156b7b7958e3','Martiniano','Ebeer','marti@ebeer.com','$2a$10$YPdWKGTn1a5i.UJhcBGkn.z1EVTx.j9e4JsOcf4O6WSo0ATgUOcCy',12345678,'1901-05-25','Monumental','default-image.jpg',1);
========
INSERT INTO `users` VALUES ('13cb7da7-79cc-4905-8b7d-9afbb7d906c5','asd','asd','asd@ebeer.com','$2a$10$A0IM6CF1yiRYlNg7IJLh2uWFqncbQ94Hzx2.QyzMGWn4ZvmUZGB9e',1234567,'1994-11-19','asd','default-image.jpg',1),('24e650ef-58ac-4e92-b22f-e5760c6bc382','asd','asd','asdasd@ebeer.com','$2a$10$.ZdS5rHu1Rq7Uoq4BeLtsOWs.9Pm3mkT1KruYvBKGuUpS.NIgIZqa',213412414,'1994-11-19','asd','default-image.jpg',1),('aad2bce0-3b72-460f-895d-5d5bf86f7573','asdasdasd','asdasdasd','asdasdasd@ebeer.com','$2a$10$nbyKOKeoKIHvZDshrfn.2.N.GELB0BLfFW8gSBg.6st0DYB.EVWsS',12345678,'1994-11-19','asd','default-image.jpg',1);
>>>>>>>> 4bd85f8c582d4141aaa5ae99c9d4498ef5a1ae8f:e-beer/db-setup/migrations6.sql
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'grupo_13'
--
