-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.27-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para redsale
CREATE DATABASE IF NOT EXISTS `redsale` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `redsale`;

-- Volcando estructura para tabla redsale.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `img` varchar(200) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla redsale.categories: ~7 rows (aproximadamente)
INSERT INTO `categories` (`id`, `title`, `description`, `img`, `createdAt`, `updatedAt`) VALUES
	(1, 'title', 'description', 'http://redsale.com.ar/img', '2023-06-27 16:39:54', '2023-06-27 16:39:55'),
	(3, 'Teclado', 'description', 'http://redsale.com.ar/img.jpg', '2023-07-05 15:59:39', '2023-07-05 15:59:39'),
	(4, 'Auriculares', 'description', 'http://redsale.com.ar/img.jpg', '2023-07-05 16:01:34', '2023-07-05 16:01:34'),
	(5, 'Gabinete', 'description', 'http://redsale.com.ar/img.jpg', '2023-07-05 16:02:15', '2023-07-05 16:02:15'),
	(6, 'Mouse', 'description', 'http://redsale.com.ar/img.jpg', '2023-07-05 16:03:06', '2023-07-05 16:03:06'),
	(7, 'GamePad', 'description', 'http://redsale.com.ar/img.jpg', '2023-07-05 16:04:03', '2023-07-05 16:04:03');

-- Volcando estructura para tabla redsale.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `slug` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `color` varchar(200) NOT NULL,
  `size` varchar(200) NOT NULL DEFAULT '',
  `price` decimal(20,6) NOT NULL DEFAULT 0.000000,
  `old_price` decimal(20,6) NOT NULL DEFAULT 0.000000,
  `discount_rate` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `img` varchar(200) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`category_id`),
  CONSTRAINT `categoryId` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla redsale.products: ~6 rows (aproximadamente)
INSERT INTO `products` (`id`, `title`, `slug`, `description`, `color`, `size`, `price`, `old_price`, `discount_rate`, `category_id`, `img`, `createdAt`, `updatedAt`) VALUES
	(20, 'laptop lenovo', 'laptop-lenovo', 'laptops', 'red', 'mx-mx', 1000.000000, 2000.000000, 5, 1, 'https://www.cordobanotebooks.com.ar/wp-content/uploads/2023/05/82SF0009US.jpg', '2023-07-03 16:13:59', '2023-07-03 16:13:59'),
	(26, 'laptop Sony', 'laptop-lenovo', 'laptops', 'red', 'mx-mx', 1000.000000, 2000.000000, 5, 1, 'https://www.cordobanotebooks.com.ar/wp-content/uploads/2023/05/82SF0009US.jpg', '2023-07-03 18:31:31', '2023-07-03 18:31:31'),
	(27, 'laptop exo', 'laptop-lenovo', 'laptops', 'red', 'mx-mx', 1000.000000, 2000.000000, 5, 1, 'https://www.cordobanotebooks.com.ar/wp-content/uploads/2023/05/82SF0009US.jpg', '2023-07-03 18:32:04', '2023-07-03 18:32:04'),
	(28, 'laptop Asus', 'laptop-lenovo', 'laptops', 'red', 'mx-mx', 1000.000000, 2000.000000, 5, 1, 'https://www.cordobanotebooks.com.ar/wp-content/uploads/2023/05/82SF0009US.jpg', '2023-07-05 13:41:14', '2023-07-05 13:41:14'),
	(30, 'laptop HP', 'laptop-lenovo', 'laptops', 'red', 'mx-mx', 1000.000000, 2000.000000, 5, 1, 'https://www.cordobanotebooks.com.ar/wp-content/uploads/2023/05/82SF0009US.jpg', '2023-07-05 15:45:46', '2023-07-05 15:45:46'),
	(31, 'laptop Apple', 'laptop-lenovo', 'laptops', 'red', 'mx-mx', 1000.000000, 2000.000000, 5, 1, 'https://www.cordobanotebooks.com.ar/wp-content/uploads/2023/05/82SF0009US.jpg', '2023-07-05 15:46:59', '2023-07-05 15:46:59'),
	(32, 'laptop Redragon', 'laptop-lenovo', 'laptops', 'red', 'mx-mx', 1000.000000, 2000.000000, 5, 1, 'https://www.cordobanotebooks.com.ar/wp-content/uploads/2023/05/82SF0009US.jpg', '2023-07-05 16:16:28', '2023-07-05 16:16:28');

-- Volcando estructura para tabla redsale.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla redsale.roles: ~2 rows (aproximadamente)
INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
	(1, 'user', '2023-06-29 17:09:23', '2023-06-29 17:09:24'),
	(2, 'administrador', '2023-06-29 17:09:24', '2023-06-29 17:09:25');

-- Volcando estructura para tabla redsale.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(70) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `roleid` (`roleId`),
  CONSTRAINT `roleid` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla redsale.users: ~1 rows (aproximadamente)
INSERT INTO `users` (`id`, `username`, `password`, `email`, `roleId`, `createdAt`, `updatedAt`) VALUES
	(46, 'cortes', '$2b$12$MZ1rCMhwgOmUKak4O4ZnyOCExQxzSr01zSEgA8moP0qPYXMqq4jOa', 'cortes@gmail.com', 1, '2023-07-03 15:02:37', '2023-07-03 15:02:37');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
