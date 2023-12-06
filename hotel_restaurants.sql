-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2023 at 08:50 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel_restaurants`
--

-- --------------------------------------------------------

--
-- Table structure for table `room_reserve`
--

CREATE TABLE `room_reserve` (
  `room_id` int(11) NOT NULL,
  `cust_name` varchar(20) DEFAULT NULL,
  `cust_email` varchar(20) DEFAULT NULL,
  `room_type` varchar(15) DEFAULT NULL,
  `cust_date` date DEFAULT NULL,
  `cust_contact` int(15) DEFAULT NULL,
  `cust_msg` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room_reserve`
--

INSERT INTO `room_reserve` (`room_id`, `cust_name`, `cust_email`, `room_type`, `cust_date`, `cust_contact`, `cust_msg`) VALUES
(1, 'sam', 'sam89@gmail.com', 'single', '2023-12-20', 799552211, 'book me a room');

-- --------------------------------------------------------

--
-- Table structure for table `table_reserve`
--

CREATE TABLE `table_reserve` (
  `table_id` int(11) NOT NULL,
  `cust_name` varchar(20) DEFAULT NULL,
  `cust_email` varchar(20) DEFAULT NULL,
  `cust_ocassion` varchar(15) DEFAULT NULL,
  `cust_date` date DEFAULT NULL,
  `cust_msg` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `table_reserve`
--

INSERT INTO `table_reserve` (`table_id`, `cust_name`, `cust_email`, `cust_ocassion`, `cust_date`, `cust_msg`) VALUES
(1, 'duaa', 'duaash@live.com', 'birthday', '2023-12-25', 'I need lily flowers');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `room_reserve`
--
ALTER TABLE `room_reserve`
  ADD PRIMARY KEY (`room_id`),
  ADD UNIQUE KEY `cust_email` (`cust_email`,`cust_contact`);

--
-- Indexes for table `table_reserve`
--
ALTER TABLE `table_reserve`
  ADD PRIMARY KEY (`table_id`),
  ADD UNIQUE KEY `cust_email` (`cust_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `room_reserve`
--
ALTER TABLE `room_reserve`
  MODIFY `room_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `table_reserve`
--
ALTER TABLE `table_reserve`
  MODIFY `table_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
