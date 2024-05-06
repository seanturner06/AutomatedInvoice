/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE IF NOT EXISTS `invoice` (
    `inv_id` int(10) unsigned NOT NULL AUTO_INCREMENT, 
    `inv_number` int(10) unsigned NOT NULL, 
    `inv_invoicedate` VARCHAR(20) NOT NULL,
    `inv_customerid` int(10) unsigned NOT NULL,
    `inv_totalamount` decimal(10,2) NOT NULL,
    PRIMARY KEY (`inv_id`)
);

CREATE TABLE IF NOT EXISTS `user` (
    `usr_id` int(10) unsigned NOT NULL AUTO_INCREMENT, 
    `usr_username` VARCHAR(20) NOT NULL,
    `usr_salt` VARCHAR(128) NOT NULL,
    `usr_password` VARCHAR(256) NOT NULL,
    PRIMARY KEY (`usr_id`)
);

INSERT INTO `user` (`usr_id`, `usr_username`, `usr_salt`, `usr_password`) VALUES 
(1, 'admin', '48c8947f69c054a5caa934674ce8881d02bb18fb59d5a63eeaddff735b0e9', '83d9bdb5e20f3571b087db9aabf190a296741c3e864d7742f35658cfccc1b79c4599aad25084aa9a28c649a50c92244227b3e53e197621301d619d1ea01873c4');