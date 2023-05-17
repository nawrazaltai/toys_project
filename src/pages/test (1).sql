-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Värd: 127.0.0.1
-- Tid vid skapande: 08 maj 2023 kl 15:48
-- Serverversion: 10.4.28-MariaDB
-- PHP-version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `test`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_owner` int(11) NOT NULL,
  `product_title` varchar(100) NOT NULL,
  `product_description` text NOT NULL,
  `product_condition` varchar(100) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `modified` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumpning av Data i tabell `products`
--

INSERT INTO `products` (`product_id`, `product_owner`, `product_title`, `product_description`, `product_condition`, `created`, `modified`, `url`) VALUES
(3, 1, 'Kitchen Set', 'whatever', '-', '2023-05-01 11:45:52', '2023-05-01 15:40:01', 'https://images.unsplash.com/photo-1624895674105-6c63a2b0ce96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80'),
(4, 1, 'Anna doll', 'whatever', 'whatever', '2023-05-01 11:47:09', '2023-05-01 15:40:49', 'https://images.unsplash.com/photo-1563296102-c5f9255af9dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'),
(5, 1, 'Lego', 'blabla', 'good', '2023-05-01 11:48:49', '2023-05-01 15:42:27', 'https://images.unsplash.com/photo-1603422868789-3c008ba99df9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'),
(6, 1, 'T-Rex Dino', 'lasmdaklsjvdvkff anjfa.', 'good', '2023-05-01 11:49:48', '2023-05-01 15:42:48', 'https://images.unsplash.com/photo-1596138252452-463802fb8fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'),
(7, 1, 'Vintage Robo', 'wdadcdgrgr o343ldmkdvm dasdasd.', 'bad.', '2023-05-01 11:50:43', '2023-05-01 15:43:23', 'https://images.unsplash.com/photo-1546776230-bb86256870ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80'),
(8, 1, 'Rocking Horse', 'fedksmvsvf9', 'asdasdmk33.', '2023-05-01 11:51:05', '2023-05-01 15:43:57', 'https://images.unsplash.com/photo-1572540998592-5f2827735619?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80');

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `modified` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumpning av Data i tabell `users`
--

INSERT INTO `users` (`user_id`, `username`, `first_name`, `last_name`, `email`, `password`, `created`, `modified`) VALUES
(1, 'TestUser', 'Test', 'User', 'test@user.com', 'test123', '2023-04-30 18:41:36', '2023-04-30 18:41:36');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `user_id_FK` (`product_owner`);

--
-- Index för tabell `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT för tabell `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restriktioner för dumpade tabeller
--

--
-- Restriktioner för tabell `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `user_id_FK` FOREIGN KEY (`product_owner`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
