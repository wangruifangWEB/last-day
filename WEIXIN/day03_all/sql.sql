-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-09-22 11:39:00
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `shopping`
--
CREATE DATABASE IF NOT EXISTS `shopping` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `shopping`;

-- --------------------------------------------------------

--
-- 表的结构 `shoplist`
--

CREATE TABLE `shoplist` (
  `ID` bigint(7) NOT NULL,
  `name` varchar(20) NOT NULL,
  `price` double NOT NULL,
  `pic` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `shoplist`
--

INSERT INTO `shoplist` (`ID`, `name`, `price`, `pic`) VALUES
(1, '鸡蛋', 2.6, 'https://mp.weixin.qq.com/debug/wxadoc/gitbook/images/head_global_z_@all.png'),
(2, '鸡肉', 1.2, 'https://mp.weixin.qq.com/debug/wxadoc/gitbook/images/head_global_z_@all.png'),
(3, '猪肉', 6.3, 'https://mp.weixin.qq.com/debug/wxadoc/gitbook/images/head_global_z_@all.png'),
(4, '芹菜', 6, 'https://mp.weixin.qq.com/debug/wxadoc/gitbook/images/head_global_z_@all.png'),
(5, '韭菜', 26, 'https://mp.weixin.qq.com/debug/wxadoc/gitbook/images/head_global_z_@all.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `shoplist`
--
ALTER TABLE `shoplist`
  ADD PRIMARY KEY (`ID`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `shoplist`
--
ALTER TABLE `shoplist`
  MODIFY `ID` bigint(7) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;