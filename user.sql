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

 Date: 01/15/2018 09:31:32 AM
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
  `portrait` text NOT NULL,
  `rtime` datetime DEFAULT NULL,
  `friendsid` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `user`
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('1', 'Tom', '/img/0.jpg', null, ''), ('2', 'Jerry', '/img/1.jpg', null, ''), ('3', 'Eira', '/img/2.jpg', null, ''), ('4', 'Linda', '/img/3.jpg', null, '');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
