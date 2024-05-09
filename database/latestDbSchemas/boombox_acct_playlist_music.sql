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
-- Table structure for table `acct_playlist_music`
--

DROP TABLE IF EXISTS `acct_playlist_music`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `acct_playlist_music` (
  `acct_id` int NOT NULL,
  `playlist_id` int NOT NULL,
  `spotify_uid` varchar(22) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acct_playlist_music`
--

LOCK TABLES `acct_playlist_music` WRITE;
/*!40000 ALTER TABLE `acct_playlist_music` DISABLE KEYS */;
INSERT INTO `acct_playlist_music` VALUES (1,3,'6d5fHqbMbjczDAMf4I5O2g'),(1,3,'1aI9lv1cCosxWoIQgD4Ogd'),(1,3,'4OVWK80dmsTvhsrtMuSXOa'),(1,3,'4NP1rhnsPdYpnyJP0p0k0L'),(1,3,'2w9YOf843DuZKDSxukUuPJ'),(1,3,'4U9tk0sbiMp8PuHY7rsfCI'),(1,3,'3054btJWaN0I8lNK0EupTI'),(1,3,'7ybHj4IkUqoN3NOCsFBO4i'),(1,3,'7zfg4CNG4L3rvEf3WzrK2p'),(1,3,'30zwjSQEodaUXCn11nmiVF');
/*!40000 ALTER TABLE `acct_playlist_music` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-25 15:22:47
