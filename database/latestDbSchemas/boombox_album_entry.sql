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
-- Table structure for table `album_entry`
--

DROP TABLE IF EXISTS `album_entry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `album_entry` (
  `entry_id` int unsigned NOT NULL AUTO_INCREMENT,
  `entry_length` varchar(8) DEFAULT NULL,
  `album_id` int unsigned NOT NULL,
  `entry_name` varchar(255) NOT NULL,
  `spotify_uid` varchar(22) DEFAULT NULL,
  PRIMARY KEY (`entry_id`),
  UNIQUE KEY `spotify_uid` (`spotify_uid`),
  KEY `album_id` (`album_id`),
  CONSTRAINT `album_entry_ibfk_1` FOREIGN KEY (`album_id`) REFERENCES `album` (`album_id`)
) ENGINE=InnoDB AUTO_INCREMENT=376 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album_entry`
--

LOCK TABLES `album_entry` WRITE;
/*!40000 ALTER TABLE `album_entry` DISABLE KEYS */;
INSERT INTO `album_entry` VALUES (91,'None',24,'STARS','347AQK5Lyhn6RvB8tBGYxt'),(92,'None',24,'KEYS TO MY LIFE','7hVb3OyFkgxDgpTdrOX6dT'),(93,'None',24,'PAID','2y4ZR0BUAVePljHSsZyIgj'),(94,'None',24,'TALKING','1eaqMiiUn2P7MnqJK4XeK0'),(95,'None',24,'BACK TO ME','1icgLGTpX2fQXKRe4D7w2b'),(96,'None',24,'HOODRAT','1eThXFmkENeSkdeLO8S86F'),(97,'None',24,'DO IT','2iGvsJuc2mC4mDVOVMNAP6'),(98,'None',24,'PAPERWORK','2yyO7EKRr7c3txi4xCXUFk'),(99,'None',24,'BURN','04CyMEHliadfQWMUJb1w99'),(100,'None',24,'FUK SUMN','5tEaVciE2GnR28aN6W9cLS'),(101,'None',24,'VULTURES','3SIRBp4RRQ2AO5H4NO7xfq'),(102,'None',24,'CARNIVAL','3w0w2T288dec0mgeZZqoNN'),(103,'None',24,'BEG FORGIVENESS','4ihV1wv7QmjbkLHaT9lA4s'),(104,'None',24,'PROBLEMATIC','5GtUTcvOx52F5648wXQfc7'),(105,'None',24,'KING','01Ho3efkRrIbYnWxISj05V'),(106,'None',25,'Come Together','5OkArIDfgHMPqTNZ8gTLjZ'),(107,'None',25,'Something','2MusdHupmqsuIZzQiSQi0B'),(108,'None',25,'Oh! Darling','1f4SY848GoWGuDgx0pVM11'),(109,'None',25,'Here Comes The Sun','4ZlQBpJkqrQB6XT9lL76Fa'),(110,'None',25,'Because','33eb8yp7mHPzmFWeNRERbK'),(111,'None',25,'You Never Give Me Your Money','1n86LV9TlntIZxtOhcSS7X'),(112,'None',25,'Sun King','3p57GrFXbyIjCX4sRKT50g'),(113,'None',25,'Mean Mr. Mustard','53DE9qzKqm2K9nNt1yIzzs'),(114,'None',25,'Polythene Pam','2PNqn4IuuYiTVfwtMxZoN6'),(115,'None',25,'She Came In Through The Bathroom Window','6nrUqWsgmx4mr2XmILpFhE'),(116,'None',25,'Golden Slumbers','2bfwr3NbzL9aa0EwrelzeO'),(117,'None',25,'Carry That Weight','4Ox82Kgxpg2sNNWfiL0yXQ'),(118,'None',25,'The End','0hye0A7AbBMrHPRKZtgL6Y'),(119,'None',25,'Her Majesty','5gnBFDYL4YVpbiNjqv6VqW'),(120,'None',26,'Get Back','7C4qvQ7eoOXbjPStAlDYN6'),(121,'None',26,'Let It Be','4uq2o9KhEWjKYfNGrxUz7r'),(122,'None',26,'Ticket To Ride','2IdusrK8DFNTK8FIEmpgpX'),(123,'None',26,'Yesterday','1o7vqybpzJuMler6PZEOXB'),(124,'None',26,'All You Need Is Love','1EE5XgURAhsM0Z8GrupNV0'),(125,'None',26,'The Long And Winding Road','10vOMRq8y1x3F5KFJnioGD'),(126,'None',26,'Here Comes The Sun','6Gsfb2A86AlJMZ1EBFF6X5'),(127,'None',26,'Day Tripper','1JFlofL4kGlxkgsYVUcJgb'),(128,'None',26,'Lucy In The Sky With Diamonds','7hRkE0nPekEtS8qibfFQhQ'),(129,'None',26,'We Can Work It Out','7lQzAqfzHBsbJjDfMNKM7Z'),(130,'None',26,'Something','3p6I1CqJdIWSXFZPdcK8N2'),(131,'None',26,'Tomorrow Never Knows','3Q3bHEcbNPIXKVIKdKMoFy'),(132,'None',26,'Strawberry Fields Forever','75dRuosTaXHLiBjrMmEP5l'),(133,'None',26,'Hey Jude','6QqUHuuanbD1OiMiLMcaxe'),(134,'None',26,'Back In The USSR','2wW2Kpj3L6S5PPxUnfcFWq'),(135,'None',26,'In My Life','59bfbkKBCRtzYgiS7iZ0GQ'),(136,'None',26,'Birthday','4qPlHtPT607AkPkm8m9cMT'),(137,'None',26,'Across The Universe','4h5q1B3IlpqbDT7v9SKnPG'),(138,'None',26,'Helter Skelter','4nsHrgE82n7h3t0ZCFweai'),(139,'None',26,'Tomorrow Never Knows','4arHPDdOu58xMjq3XzbKfy'),(140,'None',27,'Here Comes the Sun - chilled lofi remix','3XiUPCdsAOVJUDAahWq4Rd'),(141,'None',27,'Something - chilled lofi remix','1tqwutRIPBDAya6AlXir1t'),(142,'None',27,'Come Together - chill lofi remix','1wcWyEaQSCpWbAEic7JCGd'),(143,'None',27,'Oh! Darling - chilled lofi remix','40RNW7BsOYGqH2BHnGyCT1'),(144,'None',27,'Because - chilled lofi remix','6YNn3O2e8QxZjlU199zMnP'),(145,'None',27,'The End - chilled lofi remix','40qDd8Tfj0LIHfHDZoTAcr'),(146,'None',28,'Rainy Day Women #12 & 35','7BkAlVpGwXXl3sYNn5OoJ7'),(147,'None',28,'Pledging My Time','2qTvEdNY21mL9whUJot9Oc'),(148,'None',28,'Visions of Johanna','2rslQV48gNv3r9pPrQFPW1'),(149,'None',28,'One of Us Must Know (Sooner or Later)','40GFPBolcy0yucApV9uxq2'),(150,'None',28,'I Want You','7tJQ4Ekp2vN3NlI3vJJW3v'),(151,'None',28,'Stuck Inside of Mobile with the Memphis Blues Again','1NYTj6JEw3IOh4ggiBh82h'),(152,'None',28,'Leopard-Skin Pill-Box Hat','6aeOSY6fPsvGTzyXi65pNY'),(153,'None',28,'Just Like a Woman','37Dl7jQMmt0gUnzTKqnjkN'),(154,'None',28,'Temporary Like Achilles','1HgFg4pCJO1tX1uh5NMALx'),(155,'None',28,'Absolutely Sweet Marie','08TyPDbQ14NOoOWh13WJ2Z'),(156,'None',28,'Fourth Time Around','4i4oDSWluhViEzuYIZYtmJ'),(157,'None',28,'Obviously Five Believers','74z9AsqO74WCnX3BlvbGAL'),(158,'None',28,'Sad-Eyed Lady of the Lowlands','4jdtLLyEL7wY0TlCdMKhxq'),(159,'None',29,'Blue on Black','74EaFfaGbNBwoDTUtbLL49'),(160,'None',30,'Blonde','6Tmj9k9HeZhP5CdLHcj81h'),(161,'None',31,'All the While','4pXblu9S4tRCbZS6CPrydf'),(162,'None',31,'Hold on to Me','42U7zO9R7Z2cjKHmjQbhlq'),(163,'None',31,'Cloudsitting','66JFtk6XHq68VruCJe0PZr'),(164,'None',31,'The Kite (Outro)','3j0vOkLmcC6opROouGpKmV'),(165,'None',32,'Queen Jane Approximately','6x8GZhkP0rOLQJSkhWR27Y'),(166,'None',32,'I Contain Multitudes','7ImNQnIz9hDTNmobk3ntqG'),(167,'None',32,'One of Us Must Know (Sooner or Later)','10e1nqKCMNXAoVhES3DCaw'),(168,'None',32,'Simple Twist of Fate','1yLjo2nJgzGQnnsHu1lx6o'),(169,'None',32,'Sad Eyed Lady of the Lowlands','1kQocfALCjx4BVTBtqUvwD'),(170,'None',32,'The Man In Me','5aQj28VDmCkioSW3wy0VYA'),(171,'None',32,'Going Going Gone','5A7dlBVjbfmvnTaolvXL82'),(172,'None',32,'I Contain Multitudes (Live)','0LkcjkxNFsYagamlI6ERFa'),(173,'None',32,'Simple Twist of Fate (Live)','2hCU9AGQaucUiYXne44CwG'),(174,'None',32,'Going Going Gone (Live)','71OayLaVy4ZQISoKXlFpBQ'),(175,'None',33,'A Retrospective','6e8pDekYyl49Kkl0pdkRvW'),(176,'None',33,'When You Move','4ljhsGiy34yn0QWJwF7utD'),(177,'None',33,'Another Color','24hoAXNYxALU8S1q4nzpUC'),(178,'None',33,'Daydream','7MGsdoRWaejAhBmJE53gQe'),(179,'None',33,'I Remember','35YpZ95jKNPHfT0BJ5pIy1'),(180,'None',33,'Forever Sun','6eaBCZmYig9X6YQGv5VITv'),(181,'None',33,'Leaving Home','2XwHJSRK5u8HBKO3uAc2Ha'),(182,'None',34,'Blonde','2AA2sTcapd1pzdexpnPY1X'),(183,'None',34,'Hometown Song','4BfwJ8wPCd4rLGNlyfrMrk'),(184,'None',34,'Move On','7pOiYB57kzVQK9uxJ5xX1i'),(185,'None',34,'Shoot Tequila','2ubqNCuBR6wezgKxiSlIBh'),(186,'None',35,'Leaving Home','7KbFfLHxT7tGAXLdGsiN0R'),(187,'None',35,'When You Move','417jY2ptG7iWIoJdFLMEnH'),(188,'None',35,'I Remember','50ePrZ37f9imjYU2E83Ok8'),(189,'None',35,'Forever Sun','0rzdc9g1jZoF34njYrumSH'),(190,'None',35,'Daydream','4GEWM3pKvwbWOs5Ru8zRWM'),(191,'None',36,'Rainy Day Women #12 & 35 (Live)','1V64DUCRrEFgZwEwANKTw9'),(192,'None',36,'Pledging My Time (Live)','0y7s4aAkcQTLu6sViCYaP5'),(193,'None',36,'Visions of Johanna (Live)','3cyFCQWlqRhrWkR3qJnguN'),(194,'None',36,'One of Us Must Know (Sooner or Later) (Live)','6wuk8ALlJctX7L3CBuJ1Tu'),(195,'None',36,'I Want You (Live)','4XHHNkoMFjtEPZmjlZUAko'),(196,'None',36,'Stuck Inside of Mobile with the Memphis Blues Again (Live)','3ak1H7N2TKtNBkawbtH80R'),(197,'None',36,'Leopard-Skin Pill-Box Hat (Live)','0TuT8MB58fLLQHK3e1j2io'),(198,'None',36,'Just Like a Woman (Live)','5sSA8xfOZBVCY0jLRum87A'),(199,'None',36,'Temporary Like Achilles (Live)','1KHjBmlYXqTfFkcb6ykyIj'),(200,'None',36,'Absolutely Sweet Marie (Live)','6WOqJRxZtGcDOeeGtaNHW7'),(201,'None',36,'4th Time Around (Live)','1wsqaHIZKqIIywPybI73jQ'),(202,'None',36,'Obviously 5 Believers (Live)','6lLA8a2hES4mihAMR5xbxZ'),(203,'None',36,'Sad Eyed Lady of the Lowlands (Live)','5voOTLOA7LPegmOdNJU7vV'),(204,'None',37,'Secret When You See One','7xSYsSOCz6hbyYrUPns7xV'),(205,'None',37,'Simple Equation','5qSWHgmC72qa5el4k20SS4'),(206,'None',37,'Famous Friend','6bTK6MkSPLDSo0ltxqougJ'),(207,'None',37,'Nice And Mean','1oQOLAKXZcLpzWjrfT5ZKD'),(208,'None',37,'Words For Snow','08tQeH9A5oa3nY0sYcszOM'),(209,'None',37,'Something to Simplify','61Vmekw3Zh2P1R9sWfyoHr'),(210,'None',37,'Her Perfume','4fbWUe925dD2K9UJH0O584'),(211,'None',37,'My High GummyGirl','1iMvAqdjE0lK8ywyeQH9fS'),(212,'None',37,'Terrible To Break','5FsQy84VW2ARMR409BlYRd'),(213,'None',37,'Short Hello and a Long Goodbye','1ZzIj9Z44666w7hmLNEAL5'),(214,'None',38,'Blue on Black (Outlaws Remix)','20fLhqKBu4EcvJ3L4f2v0V'),(215,'None',39,'Beside You','6GG169QHGI51ss9E87sDcx'),(216,'None',40,'I Loved You (feat. Melissa Steel)','4KuS9s0fuqLznp9AJTqTm7'),(217,'None',41,'Goner','2xxnWv91k7zUbScVScmA47'),(218,'None',41,'Boyfriend','5Ima9d3MHMoWCH35932Ilx'),(219,'None',41,'Love You In HiFi','4fUqcVOd3UtB0v9GiwKzWc'),(220,'None',41,'Hello Hello','3ASVJOZFgksyINCAEKBHaA'),(221,'None',41,'I Want You To Want Me','4OsGVvnNzpaZJfaXAYSwuf'),(222,'None',41,'New Thing','6YenSrg6QsEyjf5nKRBJEt'),(223,'None',41,'White Rabbit (feat. Michelle Branch)','3vytvFuEeRHKgmgNA0Ur7X'),(224,'None',41,'Stay The Night','0SCQhXU39NEORLXfibeXpQ'),(225,'None',41,'Who Loves You Baby','4RRdGsOXq23VdHvxzv4l2t'),(226,'None',41,'Girl Of Your Dreams','02rluRUTAr50C9ACC3I0c6'),(227,'None',41,'Wake Up','61iZpDbf8o7Fax7IP5cbOk'),(228,'None',41,'This Town (feat. Shakey Graves)','2O63dvZ7lf0OxB1E82piWp'),(229,'None',41,'Vacation','0QrNShSN5NeDLaBTlJ9S1I'),(230,'None',42,'I Don`t Want U','3WhSCkyPlfwGv5QfpHJmDu'),(231,'None',42,'Sciuri Sciura','7xRYJuv0ItVs0LnE6V6bDs'),(232,'None',42,'Astro Boy','1USvmDlAN92VsYYOH9dgzK'),(233,'None',42,'Without Feathers','1DssoOS5HbghPrusaldaFr'),(234,'None',42,'Snippet','4tJU5Wx5mXwg8wWlcZF5SJ'),(235,'None',42,'Mama Cita','1yRXW3h7af7f0pePUsakaW'),(236,'None',42,'Swing Pool','5JXA6sSdQDg11bzTWxINIA'),(237,'None',42,'Girl Boy','0WG8fqGs2D0VfK4Dp7l0RE'),(238,'None',42,'Amescream','6URd9gv45u63jLMNmOzDiZ'),(239,'None',42,'Big Song','5rBBe361C44Fta9cpuCDGI'),(240,'None',42,'Inside You','6QY0p018yX3gisn9DcpKRz'),(241,'None',42,'Vague','1rIPiAnmyL6fuJ2KKPXDXw'),(242,'None',42,'Jet Star','1KK8NftjpDkLeV1dyxI2Ak'),(243,'None',42,'Instrumental (Live at Snacktime)','0u7w05qMsCJxgIP9oj2Gf8'),(244,'None',42,'Slogan Attempt','4DI8rudOfWlwtdD0xpVOUj'),(245,'None',42,'Swing Pool Instrumental (Live at Snacktime)','78BqLrh5JN7hFbowjVwXnr'),(246,'None',42,'Woody (4 Track Demo)','1qKFjcbYUl4Djgc9pjViPK'),(247,'None',42,'(I Am Taking Out My Eurotrash) I Still Get Rocks Off','52FLvETps1MtJ3HLQgbfSI'),(248,'None',42,'Violent Life','06ZaaOZAM5tZGviQO7Ibr4'),(249,'None',42,'U.F.O.','14HygIFDA7XDwsjJ90uFtx'),(250,'None',42,'I Am There While You Choke on Me','6uqcbDHR2I0xV0VPCZYDCL'),(251,'None',42,'Harmony','5Xo0CjOzkB0IR8HByFhJ11'),(252,'None',42,'Down Under','2r8oWaZ7MrO5dQlbEgLbqZ'),(253,'None',42,'Bean','36HbvFFizLqKMsTdhKQLZ3'),(254,'None',42,'Young Neil','6uyf1lGV2taGhBajjIz81J'),(255,'None',42,'10 Feet High','4L4DxOR9Vw6juTdwJlAuuc'),(256,'None',42,'Jewel','1yO4OSu6j37zegudStXbGl'),(257,'None',42,'Flying Douglas','0Qy0nUsdMFVtpTJZYaf3pk'),(258,'None',42,'Harmony - 7\" Version','4Y7CcGrTbrNfp2KKh5O3ZV'),(259,'None',42,'10 Feet High - 7\" Version','59XN4xD8Azv1xm20ADzReq'),(260,'None',42,'Valentine','3JGgCcueo5aCqCOU47aijR'),(261,'None',42,'Not Too Late','1vWqxGWO3dBmGAlpLJWcbp'),(262,'None',42,'(I Am Taking Out My Eurotrash) I Still Get Rocks Off - KCRW Session','5oXGYhUjw1Ext2FuFmoA2l'),(263,'None',42,'Pier Paolo - KCRW Session','0U9QDDwHFEhv5lmoeXyGV4'),(264,'None',42,'Country Song (La Mia Vita Violenta Outtake)','4XTh6w5eI7DvAHZ0Hemx0J'),(265,'None',42,'It Was All So Sudden (4 Track Demo)','2gomNPO1guIRu01bHuLL76'),(266,'None',43,'Blondes','6kzP50E3nRuuLjtU5Qp56m'),(267,'None',44,'Underground Girl','2SzJwzZxJP2KqfnZhjvEV4'),(268,'None',44,'English Boys','0XGZxHAeXcA8kPujvmPsJI'),(269,'None',44,'Sunday Girl - Remastered','5v0WYr5MCDIKrpkaiQ1AaM'),(270,'None',44,'Suzy And Jeffrey','20ko2WNjLepmD6Dq3nddNg'),(271,'None',44,'Shayla','1o1LMlf2W6zac5J6Vhux9l'),(272,'None',44,'Denis','3o1uXO8htQ3cZrmRJNtH1V'),(273,'None',44,'X Offender','4ngLw54MbkI6Cb8wUw1g5n'),(274,'None',44,'Scenery - 2001 Digital Remaster','7IV8s87E1vPfjlzjB1OE5O'),(275,'None',44,'Picture This','6pzZjYfyq26o6xhp6Krnga'),(276,'None',44,'Angels On The Balcony','2tQf36MndOO1TuCDHkqT2F'),(277,'None',44,'Once I Had A Love (AKA The Disco Song) - 1978 Version','74D7ckDD05GY4ebUmA0ToE'),(278,'None',44,'Island Of Lost Souls','6DEOMD8fQJjCbs4PE368ec'),(279,'None',44,'Llámame (Call Me)','5lz5iSof4vrCXAXFJerFnW'),(280,'None',44,'Heart Of Glass - Disco Version','7kB3kRL3DG1epCpqLr1Z4u'),(281,'None',44,'Ring Of Fire - Live','00hiJVUVNlIpYfuq5iMf2b'),(282,'None',44,'Bang A Gong (Get It On) - Live','5nEi07Sjy6sgnstryWc79D'),(283,'None',44,'\"Heroes\" - Live','5b3M9eMhk6twLNj3vFT8Og'),(284,'None',45,'I Don`t Want U','6Ux0osJJ6MpXb0dw3Tq0iC'),(285,'None',45,'Sciuri Sciura','69KrUizJaQziApPaMTL0yc'),(286,'None',45,'Astro Boy','5XJTR5GGKCSA70kteXfXHD'),(287,'None',45,'Without Feathers','32cznNKauWU9SzbPV8kA7D'),(288,'None',45,'Snippet','1QXEk8TfTGxiwRsULPsi1K'),(289,'None',45,'Mama Cita','34gQgN4yLzHXXw1iWzbvxf'),(290,'None',45,'Swing Pool','07zKduZ3RSrPo0jUDM2XmM'),(291,'None',45,'Girl Boy','3Z5I3tySu3V1dB2Aw3djok'),(292,'None',46,'Blue On Blue','20zgESGCW8jnUKj5FK3J3M'),(293,'None',47,'Equally Damaged','25uiR1K8yXK7orbbxW8bjz'),(294,'None',47,'In Particular','4rz3AwWL2wbJoye11pbULz'),(295,'None',47,'Melody of Certain Three','3SLmmoq4uc8RyUKAUb7QcM'),(296,'None',47,'Hated Because of Great Qualities','3XBWqdsB3RbqTLxEFXeZTI'),(297,'None',47,'Loved Despite of Great Faults','5jYxvAgvta801bge7mNsOy'),(298,'None',47,'Ballad of Lemons','0ElNwsQmTqIPlSfqTkUHaQ'),(299,'None',47,'This Is Not','02qdK5VnAz2LkREkpbxekf'),(300,'None',47,'A Cure','3KHDiL9cHLVPM3ePeVR14o'),(301,'None',47,'For the Damaged','14E52ObKfWYZNWJRXcU3mu'),(302,'None',47,'Mother','4XbNNv2FT78Q60DrZPsW6j'),(303,'None',47,'For the Damaged Coda','6lvJDlBrtabJWiBlMTGxKs'),(347,'None',53,'Pornography','2QeQNF182V61Im0QpjdVta'),(348,'None',53,'Oh My Dis Side (feat. Quavo)','2rMFawCg4BW65jzbwztXAV'),(349,'None',53,'3500 (feat. Future & 2 Chainz)','1SGt65i9AnXYdDQt1AtDRH'),(350,'None',53,'Wasted (feat. Juicy J)','3dtBVBClM5ms0qCBBrqpUb'),(351,'None',53,'90210 (feat. Kacy Hill)','51EC3I1nQXpec4gDk0mQyP'),(352,'None',53,'Pray 4 Love (feat. The Weeknd)','2dJ4rGtsOHOgvTQawsCRtg'),(353,'None',53,'Nightcrawler (feat. Swae Lee & Chief Keef)','3xby7fOyqmeON8jsnom0AT'),(354,'None',53,'Piss On Your Grave (feat. Kanye West)','5H25xsIuRWUI8GwcoAoeSG'),(355,'None',53,'Antidote','1wHZx0LgzFHyeIZkUydNXq'),(356,'None',53,'Impossible','0IabpxMpUV7waD7U4uDIMJ'),(357,'None',53,'Maria I\'m Drunk (feat. Justin Bieber & Young Thug)','6Yqmv7XJLCrQEauMbPGZSw'),(358,'None',53,'Flying High (feat. Toro y Moi)','6HszFW6X5wM8DKX1SO0LaK'),(359,'None',53,'I Can Tell','2hiuiI3ac0I5kJWtkeGHEL'),(360,'None',53,'Apple Pie','6scpNkWEmUxmKY7nYjVLsX'),(361,'None',53,'Ok Alright (feat. ScHoolboy Q)','0MRZ9nMoLc7qQ8Nhovv8C8'),(362,'None',53,'Never Catch Me','3jg8bevUzKYONDLBBQquif'),(363,'None',54,'Rodeo (Remix)','035MzEbx4z2DxuRDymHXbv'),(364,'None',55,'Damn Country Music','2gnDnUxYwUmMdHb3s741WQ'),(365,'None',55,'They Don’t Make \'Em Like That No More','0Pc3pfJI8DSdvxZkWneH0D'),(366,'None',55,'Mississippi Or Me','3FqMZ5dQ4fOCfNhYJQ62oR'),(367,'None',55,'Different \'Round Here','7HRW1XRyOITRJWrygoKL9u'),(368,'None',55,'Ain’t Like I Can Hide It','6Snk73We1i1vuUcd2oRAOA'),(369,'None',55,'Copenhagen In A Cadillac','7gKSILe05xzPx5qqgYtYj5'),(370,'None',55,'Damn Good Day To Leave','68kxxoYgSw8HnZMUDn2slR'),(371,'None',55,'My Last Rodeo','6HumsLwKYoW6taXk0q2fy8'),(372,'None',55,'Workin\' On Me','5yW4e8NG9a14JctdIlXAFt'),(373,'None',55,'Raised Up Right','6TzzKbIZcUlqelIQr57Ce6'),(374,'None',55,'God Made A Good Ol\' Boy','12lojBNKJI93OtfJMO4LLl'),(375,'None',55,'Ain’t My Damn to Give','3J8xrYsBViXHF58PNXcBTK');
/*!40000 ALTER TABLE `album_entry` ENABLE KEYS */;
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
