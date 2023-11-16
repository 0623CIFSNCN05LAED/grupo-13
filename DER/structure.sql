-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for Win64 (AMD64)
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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` varchar(80) NOT NULL,
  `brand_id` varchar(80) NOT NULL,
  `description` varchar(200) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `category_id` varchar(80) NOT NULL,
  `size_id` varchar(80) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('1','Tres Cordilleras','Crisp and refreshing with hints of citrus','default-image.png','Porter','350 cc',2237),('10','Brahama','Bold and robust with notes of coffee and chocolate','default-image.png','Porter','500 cc',1775),('11','Tres Cordilleras','Crisp and refreshing with hints of citrus','default-image.png','Pilsner','500 cc',1854),('12','Pilsen','Light-bodied with a subtle sweetness','default-image.png','IPA','500 cc',2081),('13','Patagonia','Bold and robust with notes of coffee and chocolate','default-image.png','Porter','350 cc',1207),('2','Budweiser','Rich and malty with a smooth finish','default-image.png','Brown Ale','1500 cc',1489),('3','Heineken','Hoppy and aromatic with a piney undertone','default-image.png','Porter','1500 cc',1446),('4','Pilsen','Light-bodied with a subtle sweetness','default-image.png','Porter','350 cc',2573),('5','Patagonia','Bold and robust with notes of coffee and chocolate','default-image.png','Stout','350 cc',2267),('6','Corona','Crisp and refreshing with hints of citrus','default-image.png','IPA','1000 cc',631),('7','Stella Artois','Rich and malty with a smooth finish','default-image.png','Lager','1000 cc',2151),('8','Quilmes','Hoppy and aromatic with a piney undertone','default-image.png','Lager','1500 cc',603),('9','Miller','Light-bodied with a subtle sweetness','default-image.png','Brown Ale','1000 cc',598);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_product`
--

DROP TABLE IF EXISTS `user_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_product` (
  `id` varchar(80) NOT NULL,
  `products_id` varchar(80) NOT NULL,
  `users_id` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `User_product_FK` FOREIGN KEY (`id`) REFERENCES `users` (`id`),
  CONSTRAINT `User_product_FK_1` FOREIGN KEY (`id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_product`
--

LOCK TABLES `user_product` WRITE;
/*!40000 ALTER TABLE `user_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` varchar(80) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `contactNumber` int(11) NOT NULL,
  `birthDate` date NOT NULL COMMENT 'Debe ser mayor de edad',
  `address` varchar(100) NOT NULL,
  `profilePicture` varchar(100) DEFAULT NULL COMMENT 'En default recordar poner la ruta de la imagen por defecto',
  `accessType` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Users_UN` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Tabla de usuarios';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'grupo13'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-14 23:03:39