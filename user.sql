/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50720
 Source Host           : localhost
 Source Database       : wechat

 Target Server Type    : MySQL
 Target Server Version : 50720
 File Encoding         : utf-8

 Date: 01/17/2018 08:53:07 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `portrait` varchar(255) DEFAULT '/img/default.jpg',
  `rtime` datetime DEFAULT NULL,
  `friendsid` text NOT NULL,
  `nickname` varchar(30) NOT NULL,
  `pwd` varchar(15) NOT NULL,
  `sessionid` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `user`
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('1', '15023945279', '/img/0.jpg', null, '', 'Tom', 'mjj000000', 'xTzrVxV4H8oQR7V9I99vFgtKZobZsOAj'), ('2', '13797266688', '/img/1.jpg', null, '', 'Jerrey', 'mjj000000', ''), ('3', '15111805668', '/img/2.jpg', null, '', 'Erice', 'mjj000000', ''), ('4', '13746567789', '/img/3.jpg', null, '', 'Emily', 'mjj000000', ''), ('11', '18487365007', '/img/default.jpg', '2018-01-16 10:59:15', '', 'Mr yu', '123456', '');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
