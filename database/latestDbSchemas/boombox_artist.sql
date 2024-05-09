-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: boombox
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `artist`
--

DROP TABLE IF EXISTS `artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artist` (
  `artist_id` int unsigned NOT NULL AUTO_INCREMENT,
  `artist_name` varchar(255) NOT NULL,
  `artist_picture` varchar(255) DEFAULT NULL,
  `artist_boomscore` int NOT NULL,
  `spotify_uid` varchar(22) DEFAULT NULL,
  PRIMARY KEY (`artist_id`,`artist_name`),
  UNIQUE KEY `spotify_uid` (`spotify_uid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artist`
--

LOCK TABLES `artist` WRITE;
/*!40000 ALTER TABLE `artist` DISABLE KEYS */;
INSERT INTO `artist` VALUES (4,'¥$','https://i.scdn.co/image/ab6761610000e5ebf4e11052613eb67c380adaf8',0,'4xPQFgDA5M2xa0ZGo5iIsv'),(5,'Various Artists','https://i.scdn.co/image/ab6761610000e5eb6b134287e3095d2c84b7932a',0,'0LyfQWJT6nXafLPZqxe9Of'),(6,'The Remix Station','https://i.scdn.co/image/ab6761610000e5eb3725df23ba2a1784e43df36f',0,'4JAIvx8vd1sMssmNTcwnPX'),(7,'Bob Dylan','https://i.scdn.co/image/ab6772690000c46cd7064356b04a156664a37c4f',0,'74ASZWbe4lXaubB36ztrGX'),(8,'Five Finger Death Punch','https://i.scdn.co/image/ab6761610000e5eb1e7f796a17c2dc3c28bdeeb9',0,'5t28BP42x2axFnqOOMg3CM'),(9,'Maisie Peters','https://i.scdn.co/image/ab6761610000e5eb8b521134ae0ba3f60aab6811',0,'2RVvqRBon9NgaGXKfywDSs'),(10,'Blonde Maze','https://i.scdn.co/image/ab6761610000e5eb76f8df697e3f7b58a34eba99',0,'7jKdwKEJDwdloy2X6fyk9Y'),(11,'Emma Swift','https://i.scdn.co/image/ab6761610000e5ebb8d61cabd8c259267852c91b',0,'3H6AuhYMI6U7kxuC7pfG3R'),(12,'Tigirlily Gold','https://i.scdn.co/image/ab6761610000e5ebafd505c8084a6610a13f1a3d',0,'0z4vOhwPxS2J5ULMg8edzb'),(13,'Old Crow Medicine Show','https://i.scdn.co/image/ab6761610000e5eb6b81cdf4c7c60551f584f740',0,'4DBi4EYXgiqbkxvWUXUzMi'),(14,'Blond in Car','https://i.scdn.co/image/ab6761610000e5ebf559235a17c959f0ae928ad1',0,'2MpTGEyRxAUkD16X9XpLyl'),(15,'Blonde','https://i.scdn.co/image/ab6761610000e5ebd1887bd2fc7c38512bf70d3b',0,'2nuKjZLgc7II6FO4Rxjt5e'),(16,'Trixie Mattel','https://i.scdn.co/image/ab6761610000e5eb555f68ddea459146e29f2728',0,'33hAj1SghVYxDAxZxNDcyc'),(17,'Blonde Redhead','https://i.scdn.co/image/ab6761610000e5eb6f63ec3b0dd0c229ed8459a9',0,'5isqImG0rLfAgBJSPMEVXF'),(18,'Blu DeTiger','https://i.scdn.co/image/ab6761610000e5eb26a413ad8a8e002e134596bf',0,'5NyCIBCeU080ynEj33S4hC'),(19,'Blondie','https://i.scdn.co/image/ab6761610000e5eb67dc4da82c968767d994f3c3',0,'4tpUmLEVLCGFr93o8hFFIB'),(20,'Willow White','https://i.scdn.co/image/ab67616d0000b27320656d9131f24b7fceb80767',0,'5daburDQscbXfPGG3O0ki9'),(21,'Travis Scott','https://i.scdn.co/image/ab6761610000e5eb19c2790744c792d05570bb71',0,'0Y5tJX1MQlPlqiwlOH1tJY'),(22,'Riley Green','https://i.scdn.co/image/ab6761610000e5eb9046715ec7bc517a30b02d56',0,'2QMsj4XJ7ne2hojxt6v5eb'),(23,'Lah Pat','https://i.scdn.co/image/ab6761610000e5eb382812d1cb1819f3528e0a85',0,'6dhd3wcal02KeLBk5wScfd');
/*!40000 ALTER TABLE `artist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-25 15:22:48
