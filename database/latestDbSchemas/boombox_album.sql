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
-- Table structure for table `album`
--

DROP TABLE IF EXISTS `album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `album` (
  `album_id` int unsigned NOT NULL AUTO_INCREMENT,
  `album_length` varchar(8) DEFAULT NULL,
  `album_cover` varchar(255) DEFAULT NULL,
  `artist_id` int unsigned DEFAULT NULL,
  `album_name` varchar(255) NOT NULL,
  `album_boomscore` int NOT NULL,
  `spotify_uid` varchar(22) DEFAULT NULL,
  PRIMARY KEY (`album_id`),
  UNIQUE KEY `album_cover` (`album_cover`),
  UNIQUE KEY `spotify_uid` (`spotify_uid`),
  KEY `artist_it` (`artist_id`),
  FULLTEXT KEY `album_name_index` (`album_name`),
  CONSTRAINT `artist_it` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album`
--

LOCK TABLES `album` WRITE;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
INSERT INTO `album` VALUES (24,'16','https://i.scdn.co/image/ab67616d0000b2730a31b4026a452ae8c3f97a76',4,'VULTURES 1',0,'30zwjSQEodaUXCn11nmiVF'),(25,'17','https://i.scdn.co/image/ab67616d0000b2736c226671da6d8086b9b2dab2',5,'Abbey Road Reimagined - A Tribute To The Beatles',0,'6d5fHqbMbjczDAMf4I5O2g'),(26,'20','https://i.scdn.co/image/ab67616d0000b2739730f99d71fd6ce6665ce26c',5,'Abbey Road - A Tribute To The Beatles',0,'1aI9lv1cCosxWoIQgD4Ogd'),(27,'9','https://i.scdn.co/image/ab67616d0000b273bca533d953bd5830ddb858b6',6,'Abbey Road (LoFi Edition)',0,'4OVWK80dmsTvhsrtMuSXOa'),(28,'14','https://i.scdn.co/image/ab67616d0000b273c51563a479fa5a4917311197',7,'Blonde On Blonde',0,'4NP1rhnsPdYpnyJP0p0k0L'),(29,'1','https://i.scdn.co/image/ab67616d0000b2736534fd682505bd2fe2706677',8,'Blue on Black',0,'2w9YOf843DuZKDSxukUuPJ'),(30,'1','https://i.scdn.co/image/ab67616d0000b27335e4f2c2842331612be46e19',9,'Blonde',0,'4U9tk0sbiMp8PuHY7rsfCI'),(31,'5','https://i.scdn.co/image/ab67616d0000b273f8103e11492d89299551c52d',10,'Hold On',0,'3054btJWaN0I8lNK0EupTI'),(32,'11','https://i.scdn.co/image/ab67616d0000b2738b15a40e836234693deac28b',11,'Blonde On The Tracks (Deluxe Edition)',0,'7ybHj4IkUqoN3NOCsFBO4i'),(33,'7','https://i.scdn.co/image/ab67616d0000b2732c764a8fe4e6ce58ea20704c',10,'Another Color',0,'7zfg4CNG4L3rvEf3WzrK2p'),(34,'4','https://i.scdn.co/image/ab67616d0000b2732fbcd7064e58b5978888c0d8',12,'Blonde',0,'3JjjWW8R0m1Ykkh72yBf8h'),(35,'5','https://i.scdn.co/image/ab67616d0000b27370fca6c5c20e35a573bf952b',10,'Leaving Home',0,'21DWcuLymAQtwsMcMAWmga'),(36,'14','https://i.scdn.co/image/ab67616d0000b2736dec56cc0ca89c2479a5ec4a',13,'50 Years of Blonde on Blonde (Live)',0,'0uyUriz7zOAn1G9sB8zH8e'),(37,'10','https://i.scdn.co/image/ab67616d0000b27306e2b465f727ea6ac8738fbf',14,'ALTAVAN',0,'2ufGQBENqeiHJrNUzdYyKH'),(38,'1','https://i.scdn.co/image/ab67616d0000b2735cc5cc01a45b50801f2aa522',8,'Blue on Black (Outlaws Remix)',0,'46h38TEoc1vlPULIrm1TeG'),(39,'1','https://i.scdn.co/image/ab67616d0000b273cbecdea0b1885de7a8ce3072',10,'Beside You',0,'4zSv365VBnELylDuni0eTa'),(40,'1','https://i.scdn.co/image/ab67616d0000b27309b763aa15610007540dbf98',15,'I Loved You (feat. Melissa Steel)',0,'7onuwN1E6MPBFMbG4WAOoS'),(41,'14','https://i.scdn.co/image/ab67616d0000b27345cddbbad50c0b97396a5bc9',16,'The Blonde & Pink Albums',0,'2Ggu5GAKTDpd3PcekYnZWe'),(42,'37','https://i.scdn.co/image/ab67616d0000b273c29b8ea79b512565d1550476',17,'Masculin Féminin',0,'34qCLRcuA7kLTdNdrpVDRa'),(43,'1','https://i.scdn.co/image/ab67616d0000b2738af6278f590fa805b91caf03',18,'Blondes',0,'4EvsXD4pmepFBKYHoORrP1'),(44,'19','https://i.scdn.co/image/ab67616d0000b273abeddae84c2d6be8876ff5b2',19,'Blonde And Beyond',0,'6Aq637xzMyEEJGGHLQpRIl'),(45,'8','https://i.scdn.co/image/ab67616d0000b27316ad1c823b08122acd3bbe13',17,'Blonde Redhead',0,'4oQTioeIg4j1jMyhUvX6tp'),(46,'1','https://i.scdn.co/image/ab67616d0000b27320656d9131f24b7fceb80767',20,'Blue On Blue',0,'5tIK0TmHhFYm3DWwxAGtco'),(47,'11','https://i.scdn.co/image/ab67616d0000b2735d03db2dbc21ba11e3e00330',17,'Melody of Certain Damaged Lemons',0,'6wRDKCpKw3ap6dhkpdXNIN'),(53,'16','https://i.scdn.co/image/ab67616d0000b273715973050587fe3c93033aad',21,'Rodeo',0,'4PWBTB6NYSKQwfo79I3prg'),(54,'1','https://i.scdn.co/image/ab67616d0000b27338f05c37e1cc8163594a0687',23,'Rodeo (Remix)',0,'2grKiiEtU4ij4yPgvlBGTq'),(55,'12','https://i.scdn.co/image/ab67616d0000b2730cdc8581ee1479ae9204a082',22,'Ain\'t My Last Rodeo',0,'0s8C6oQDtxObNVDfFKD5MR');
/*!40000 ALTER TABLE `album` ENABLE KEYS */;
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
