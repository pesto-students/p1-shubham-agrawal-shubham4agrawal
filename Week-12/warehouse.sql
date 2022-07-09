-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 09, 2022 at 05:37 PM
-- Server version: 8.0.29
-- PHP Version: 7.2.34-28+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `warehouse-1`
--

-- --------------------------------------------------------

--
-- Table structure for table `CITIES`
--

CREATE TABLE `CITIES` (
  `city_name` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `pincode` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `CITIES`
--

INSERT INTO `CITIES` (`city_name`, `state`, `pincode`) VALUES
('jaipur', 'rajasthan', 123123),
('jodhpur', 'rajasthan', 133122),
('mumbai', 'maharashtra', 400069),
('pune', 'maharashtra', 400120),
('nagpur', 'maharashtra', 411123),
('bangalore', 'karnataka', 543765);

-- --------------------------------------------------------

--
-- Table structure for table `CUSTOMERS`
--

CREATE TABLE `CUSTOMERS` (
  `cust_id` int NOT NULL,
  `cust_name` varchar(100) NOT NULL,
  `city_name` varchar(50) NOT NULL,
  `cust_address` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `CUSTOMERS`
--

INSERT INTO `CUSTOMERS` (`cust_id`, `cust_name`, `city_name`, `cust_address`) VALUES
(1, 'Mr Patil', 'mumbai', NULL),
(2, 'Ram', 'pune', NULL),
(3, 'ramesh', 'pune', NULL),
(4, 'rehan', 'nagpur', NULL),
(5, 'pooran', 'mumbai', NULL),
(6, 'adi', 'bangalore', NULL),
(7, 'shiv', 'jaipur', NULL),
(8, 'aayush', 'pune', NULL),
(9, 'varun', 'bangalore', NULL),
(10, 'bhagyesh', 'pune', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ITEMS`
--

CREATE TABLE `ITEMS` (
  `item_id` int NOT NULL,
  `description` varchar(100) NOT NULL,
  `weight` decimal(10,0) NOT NULL,
  `cost` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ITEMS`
--

INSERT INTO `ITEMS` (`item_id`, `description`, `weight`, `cost`) VALUES
(1, 'pen', '10', '25'),
(2, 'eraser', '10', '5'),
(3, 'book', '56', '50'),
(4, 'bottle', '100', '200');

-- --------------------------------------------------------

--
-- Table structure for table `ORDERS`
--

CREATE TABLE `ORDERS` (
  `order_id` int NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cust_id` int NOT NULL,
  `ordered_items` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ORDERS`
--

INSERT INTO `ORDERS` (`order_id`, `cust_id`, `ordered_items`) VALUES
(1, 1, '[{\"qty\": \"2\", \"description\": \"pen\"}, {\"qty\": \"4\", \"description\": \"pencil\"}]'),
(2, 2, '[{\"qty\": \"4\", \"description\": \"pen\"}, {\"qty\": \"1\", \"description\": \"pencil\"}, {\"qty\": \"10\", \"description\": \"book\"}]'),
(3, 2, '[{\"qty\": \"14\", \"description\": \"pen\"}, {\"qty\": \"10\", \"description\": \"pencil\"}, {\"qty\": \"12\", \"description\": \"book\"}, {\"qty\": \"1\", \"description\": \"bottle\"}]');

-- --------------------------------------------------------

--
-- Table structure for table `STORES`
--

CREATE TABLE `STORES` (
  `sid` int NOT NULL,
  `sname` varchar(100) NOT NULL,
  `wid` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `STORES`
--

INSERT INTO `STORES` (`sid`, `sname`, `wid`) VALUES
(1, 'ambika general stores', 1),
(2, 'madras stores', 1),
(3, 'bhagwati stores', 2),
(4, 'rn mart', 3),
(5, 'souled stores', 2),
(6, 'urban monkey', 5),
(7, 'dell stores', 1),
(8, 'sweet shop', 6),
(9, 'krishna technologies', 1),
(10, 'ramesh dairy', 2);

-- --------------------------------------------------------

--
-- Table structure for table `WAREHOUSES`
--

CREATE TABLE `WAREHOUSES` (
  `wid` int NOT NULL,
  `wname` varchar(50) NOT NULL,
  `city_name` varchar(50) NOT NULL,
  `extra_content` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `WAREHOUSES`
--

INSERT INTO `WAREHOUSES` (`wid`, `wname`, `city_name`, `extra_content`) VALUES
(1, 'jumbo house', 'pune', NULL),
(2, 'raman warehouse', 'pune', NULL),
(3, 'sbi warehouse', 'mumbai', NULL),
(4, 'flipkart warehouse', 'bangalore', NULL),
(5, 'amazon warehouse', 'mumbai', NULL),
(6, 'shaanti and om warehouse', 'mumbai', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `CITIES`
--
ALTER TABLE `CITIES`
  ADD PRIMARY KEY (`pincode`),
  ADD UNIQUE KEY `name` (`city_name`);

--
-- Indexes for table `CUSTOMERS`
--
ALTER TABLE `CUSTOMERS`
  ADD PRIMARY KEY (`cust_id`),
  ADD KEY `city_name` (`city_name`);

--
-- Indexes for table `ITEMS`
--
ALTER TABLE `ITEMS`
  ADD PRIMARY KEY (`item_id`),
  ADD UNIQUE KEY `description` (`description`);

--
-- Indexes for table `ORDERS`
--
ALTER TABLE `ORDERS`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `STORES`
--
ALTER TABLE `STORES`
  ADD PRIMARY KEY (`sid`),
  ADD KEY `wid` (`wid`);

--
-- Indexes for table `WAREHOUSES`
--
ALTER TABLE `WAREHOUSES`
  ADD PRIMARY KEY (`wid`),
  ADD KEY `city_name` (`city_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `CUSTOMERS`
--
ALTER TABLE `CUSTOMERS`
  MODIFY `cust_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `ITEMS`
--
ALTER TABLE `ITEMS`
  MODIFY `item_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `ORDERS`
--
ALTER TABLE `ORDERS`
  MODIFY `order_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `STORES`
--
ALTER TABLE `STORES`
  MODIFY `sid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `WAREHOUSES`
--
ALTER TABLE `WAREHOUSES`
  MODIFY `wid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `CUSTOMERS`
--
ALTER TABLE `CUSTOMERS`
  ADD CONSTRAINT `CUSTOMERS_ibfk_1` FOREIGN KEY (`city_name`) REFERENCES `CITIES` (`city_name`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `STORES`
--
ALTER TABLE `STORES`
  ADD CONSTRAINT `wid` FOREIGN KEY (`wid`) REFERENCES `WAREHOUSES` (`wid`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `WAREHOUSES`
--
ALTER TABLE `WAREHOUSES`
  ADD CONSTRAINT `city_name` FOREIGN KEY (`city_name`) REFERENCES `CITIES` (`city_name`) ON DELETE RESTRICT ON UPDATE RESTRICT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
