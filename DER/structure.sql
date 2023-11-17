-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for osx10.10 (x86_64)
--
-- Host: localhost    Database: grupo13
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
DROP DATABASE IF EXISTS grupo13;
CREATE DATABASE grupo13;
USE grupo13;
--

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brand` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES ('1','Tres Cordilleras'),('10','Brahama'),('11','Tres Cordilleras'),('12','Pilsen'),('13','Patagonia'),('2','Budweiser'),('3','Heineken'),('4','Pilsen'),('5','Patagonia'),('6','Corona'),('7','Stella Artois'),('8','Quilmes'),('9','Miller');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES ('1','Porter'),('2','Brown Ale'),('3','Lager'),('4','IPA'),('5','Pilsner'),('6','Stout');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `brand_id` varchar(100) NOT NULL,
  `description` varchar(200) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `category_id` varchar(100) NOT NULL,
  `size_id` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`size_id`),
  KEY `products_FK_1` (`brand_id`),
  KEY `products_FK_2` (`category_id`),
  CONSTRAINT `products_FK` FOREIGN KEY (`size_id`) REFERENCES `size` (`id`),
  CONSTRAINT `products_FK_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`),
  CONSTRAINT `products_FK_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'1','Crisp and refreshing with hints of citrus','default-image.png','3','1',2237),(2,'2','Rich and malty with a smooth finish','default-image.png','2','2',1489),(3,'3','Hoppy and aromatic with a piney undertone','default-image.png','3','2',1446),(4,'4','Light-bodied with a subtle sweetness','default-image.png','3','1',2573),(5,'5','Bold and robust with notes of coffee and chocolate','default-image.png','6','1',2267),(6,'6','Crisp and refreshing with hints of citrus','default-image.png','4','3',631),(7,'7','Rich and malty with a smooth finish','default-image.png','5','3',2151),(8,'8','Hoppy and aromatic with a piney undertone','default-image.png','5','2',603),(9,'9','Light-bodied with a subtle sweetness','default-image.png','2','3',598),(10,'10','Bold and robust with notes of coffee and chocolate','default-image.png','3','4',1775),(11,'1','Crisp and refreshing with hints of citrus','default-image.png','5','4',1854),(12,'4','Light-bodied with a subtle sweetness','default-image.png','4','4',2081),(13,'5','Bold and robust with notes of coffee and chocolate','default-image.png','3','1',1207);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES ('1','admin'),('2','user');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size`
--

DROP TABLE IF EXISTS `size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `size` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size`
--

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;
INSERT INTO `size` VALUES ('1','350 cc'),('2','1500 cc'),('3','1000 cc'),('4','500 cc');
/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` varchar(80) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `contact_number` int(11) NOT NULL,
  `birth_date` date NOT NULL COMMENT 'Debe ser mayor de edad',
  `address` varchar(100) NOT NULL,
  `profile_picture` varchar(100) DEFAULT NULL COMMENT 'En default recordar poner la ruta de la imagen por defecto',
  `role_id` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Users_UN` (`email`),
  KEY `users_FK` (`role_id`),
  CONSTRAINT `users_FK` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla de usuarios';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('007b0a40-d8c8-4263-b8ab-9e7dfc13fee3','Aylen','Martinez','aylen@ebeer.com','$2a$10$CjBHNNM3kIg32MdPinazue0mnEMu7lhYbOr0f6l9dbnAWv97N4Ouq',123,'1994-11-19','Austral','profile_picture-1698190762702.jpg','1');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'grupo13'
--
