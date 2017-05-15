/*
Navicat MySQL Data Transfer

Source Server         : LocalMysql
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : kongfuhero

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-05-13 15:02:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for account
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '账户对应的角色信息ID',
  `username` varchar(20) NOT NULL COMMENT '用户名',
  `password` varchar(20) NOT NULL COMMENT '密码',
  `question` varchar(30) NOT NULL COMMENT '密保问题',
  `answer` varchar(30) NOT NULL COMMENT '密保答案',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COMMENT='用户信息表';

-- ----------------------------
-- Records of account
-- ----------------------------
INSERT INTO `account` VALUES ('4', '令狐冲', '123', '123', '123');
INSERT INTO `account` VALUES ('6', '段誉', '123', '123', '123');
INSERT INTO `account` VALUES ('9', '叶孤城', '123', '123', '123');
INSERT INTO `account` VALUES ('10', '西门吹雪', '123', '123', '123');
INSERT INTO `account` VALUES ('11', '12345', '12345', '12345', '12345');
INSERT INTO `account` VALUES ('12', '111', '111', '111', '111');
INSERT INTO `account` VALUES ('13', '222', '222', '222', '222');
INSERT INTO `account` VALUES ('14', '333', '333', '333', '333');
INSERT INTO `account` VALUES ('15', '444', '444', '444', '444');
INSERT INTO `account` VALUES ('16', '555', '555', '555', '555');
INSERT INTO `account` VALUES ('17', '666', '666', '666', '666');
INSERT INTO `account` VALUES ('18', '777', '777', '777', '777');
INSERT INTO `account` VALUES ('19', '888', '888', '888', '888');
INSERT INTO `account` VALUES ('20', '999', '999', '999', '999');
INSERT INTO `account` VALUES ('21', '101', '101', '010', '101');
INSERT INTO `account` VALUES ('22', '10110', '10110', '1010', '1010');
INSERT INTO `account` VALUES ('23', '121', '121', '121', '121');
INSERT INTO `account` VALUES ('24', '', '', '', '');
INSERT INTO `account` VALUES ('25', 'sjn', 'sjn', 'sjn', 'sjn');

-- ----------------------------
-- Table structure for arena
-- ----------------------------
DROP TABLE IF EXISTS `arena`;
CREATE TABLE `arena` (
  `rank` int(10) NOT NULL AUTO_INCREMENT COMMENT '竞技场排名',
  `id` int(10) NOT NULL COMMENT '竞技场某一排名对应角色ID',
  PRIMARY KEY (`rank`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COMMENT='竞技场信息表';

-- ----------------------------
-- Records of arena
-- ----------------------------
INSERT INTO `arena` VALUES ('1', '9');
INSERT INTO `arena` VALUES ('2', '25');
INSERT INTO `arena` VALUES ('3', '6');
INSERT INTO `arena` VALUES ('4', '7');
INSERT INTO `arena` VALUES ('5', '12');
INSERT INTO `arena` VALUES ('6', '9');
INSERT INTO `arena` VALUES ('7', '10');
INSERT INTO `arena` VALUES ('8', '13');
INSERT INTO `arena` VALUES ('9', '14');
INSERT INTO `arena` VALUES ('10', '17');
INSERT INTO `arena` VALUES ('11', '11');
INSERT INTO `arena` VALUES ('12', '15');
INSERT INTO `arena` VALUES ('13', '18');
INSERT INTO `arena` VALUES ('14', '19');
INSERT INTO `arena` VALUES ('15', '20');
INSERT INTO `arena` VALUES ('16', '21');
INSERT INTO `arena` VALUES ('17', '22');
INSERT INTO `arena` VALUES ('18', '16');
INSERT INTO `arena` VALUES ('19', '23');
INSERT INTO `arena` VALUES ('20', '24');

-- ----------------------------
-- Table structure for equipment
-- ----------------------------
DROP TABLE IF EXISTS `equipment`;
CREATE TABLE `equipment` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '装备ID',
  `name` varchar(20) NOT NULL COMMENT '装备名',
  `describe` varchar(50) NOT NULL COMMENT '装备描述',
  `rank` tinyint(2) NOT NULL COMMENT '装备等级',
  `attack` smallint(3) NOT NULL COMMENT '装备攻击力加成',
  `defense` smallint(3) NOT NULL COMMENT '装备防御力加成',
  `speed` tinyint(2) NOT NULL COMMENT '装备速度加成',
  `price` int(8) NOT NULL COMMENT '装备价格',
  `type` tinyint(1) NOT NULL COMMENT '装备类型',
  `inshop` tinyint(1) NOT NULL DEFAULT '0' COMMENT '1代表该装备在防具商店出售',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='装备（武器、防具）信息表\r\n装备类型type 0为武器 1为防具';

-- ----------------------------
-- Records of equipment
-- ----------------------------
INSERT INTO `equipment` VALUES ('1', '倚天剑', '峨眉掌门佩剑', '0', '100', '0', '5', '100', '0', '1');
INSERT INTO `equipment` VALUES ('2', '紫金神风裤', '紫金神风裤', '0', '0', '100', '0', '100', '1', '1');
INSERT INTO `equipment` VALUES ('3', '铁剑', '杨过的铁剑', '0', '50', '0', '5', '50', '0', '1');
INSERT INTO `equipment` VALUES ('4', '五方银龙铠', '五方银龙铠', '0', '0', '100', '0', '100', '1', '1');
INSERT INTO `equipment` VALUES ('5', '凤翼轻裘', '凤翼轻裘', '0', '0', '100', '0', '100', '1', '1');
INSERT INTO `equipment` VALUES ('6', '烟罗紫轻裤', '烟罗紫轻裤', '0', '0', '100', '0', '100', '1', '1');

-- ----------------------------
-- Table structure for ladder
-- ----------------------------
DROP TABLE IF EXISTS `ladder`;
CREATE TABLE `ladder` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '副本ID',
  `name` varchar(10) NOT NULL COMMENT '副本名',
  `describe` varchar(100) NOT NULL COMMENT '副本描述',
  `rank` tinyint(2) NOT NULL COMMENT '副本进入等级',
  `experience` int(10) NOT NULL COMMENT '副本通关奖励经验',
  `money` int(8) NOT NULL COMMENT '副本通关奖励金钱',
  `equipment` int(10) NOT NULL COMMENT '副本通关奖励装备',
  `maxfloor` tinyint(3) NOT NULL COMMENT '副本最高层数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='副本信息表';

-- ----------------------------
-- Records of ladder
-- ----------------------------
INSERT INTO `ladder` VALUES ('1', '函谷关副本', '函谷关，西据高原，东临绝涧，南接秦岭，北塞黄河，是中国历史上建置最早的雄关要塞之一。', '0', '50', '150', '0', '6');
INSERT INTO `ladder` VALUES ('2', '函谷关副本', '函谷关，西据高原，东临绝涧，南接秦岭，北塞黄河，是中国历史上建置最早的雄关要塞之一。', '1', '100', '200', '0', '6');
INSERT INTO `ladder` VALUES ('3', '函谷关副本', '函谷关，西据高原，东临绝涧，南接秦岭，北塞黄河，是中国历史上建置最早的雄关要塞之一。', '1', '150', '250', '0', '6');
INSERT INTO `ladder` VALUES ('4', '函谷关副本', '函谷关，西据高原，东临绝涧，南接秦岭，北塞黄河，是中国历史上建置最早的雄关要塞之一。', '1', '200', '300', '0', '6');
INSERT INTO `ladder` VALUES ('5', '函谷关副本', '函谷关，西据高原，东临绝涧，南接秦岭，北塞黄河，是中国历史上建置最早的雄关要塞之一。', '1', '250', '350', '0', '6');
INSERT INTO `ladder` VALUES ('6', '函谷关副本', '函谷关，西据高原，东临绝涧，南接秦岭，北塞黄河，是中国历史上建置最早的雄关要塞之一。', '1', '300', '400', '0', '6');

-- ----------------------------
-- Table structure for ladder_monster
-- ----------------------------
DROP TABLE IF EXISTS `ladder_monster`;
CREATE TABLE `ladder_monster` (
  `id` int(10) NOT NULL COMMENT '副本ID',
  `floor` tinyint(2) NOT NULL COMMENT '怪物层数',
  `monsterid` int(10) NOT NULL COMMENT '副本Floor层怪物ID',
  PRIMARY KEY (`id`,`floor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='副本-怪物关系表';

-- ----------------------------
-- Records of ladder_monster
-- ----------------------------
INSERT INTO `ladder_monster` VALUES ('1', '1', '2');
INSERT INTO `ladder_monster` VALUES ('1', '2', '3');
INSERT INTO `ladder_monster` VALUES ('1', '3', '4');
INSERT INTO `ladder_monster` VALUES ('1', '4', '6');
INSERT INTO `ladder_monster` VALUES ('1', '5', '7');
INSERT INTO `ladder_monster` VALUES ('1', '6', '8');

-- ----------------------------
-- Table structure for monster
-- ----------------------------
DROP TABLE IF EXISTS `monster`;
CREATE TABLE `monster` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '怪物ID',
  `name` varchar(20) NOT NULL COMMENT '怪物名称',
  `describe` varchar(50) NOT NULL COMMENT '怪物描述',
  `rank` tinyint(2) NOT NULL COMMENT '怪物等级',
  `attack` smallint(3) NOT NULL COMMENT '怪物攻击力',
  `defense` smallint(3) NOT NULL COMMENT '怪物防御力',
  `life` smallint(4) NOT NULL DEFAULT '0' COMMENT '怪物血量',
  `infield` tinyint(2) NOT NULL COMMENT '标记野怪是否在野外出现，1表示出现',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COMMENT='怪物信息表';

-- ----------------------------
-- Records of monster
-- ----------------------------
INSERT INTO `monster` VALUES ('1', '小野猪', '一只小野猪，没什么攻击力的样子', '1', '10', '10', '50', '1');
INSERT INTO `monster` VALUES ('2', '野猪<弱化>', '副本第一层需要挑战的怪物', '1', '10', '10', '50', '0');
INSERT INTO `monster` VALUES ('3', '野猪<普通>', '副本第二层需要挑战的怪物', '2', '15', '15', '60', '0');
INSERT INTO `monster` VALUES ('4', '野猪<普通>', '副本第三层需要挑战的怪物', '3', '20', '20', '80', '0');
INSERT INTO `monster` VALUES ('5', '福利使者', '我是发福利的，不要打我！！', '1', '0', '0', '1', '1');
INSERT INTO `monster` VALUES ('6', '野猪<强化>', '副本第四层需要挑战的怪物', '4', '25', '25', '100', '0');
INSERT INTO `monster` VALUES ('7', '野猪<精英>', '副本第五层需要挑战的怪物', '5', '30', '30', '110', '0');
INSERT INTO `monster` VALUES ('8', '刚毛猪<BOSS>', '副本第六层需要挑战的怪物', '6', '35', '35', '130', '0');
INSERT INTO `monster` VALUES ('9', '野猪', '野外怪物', '2', '12', '12', '55', '1');
INSERT INTO `monster` VALUES ('10', '野猪', '野外怪物', '3', '14', '14', '60', '1');
INSERT INTO `monster` VALUES ('11', '野猪', '野外怪物', '4', '16', '16', '65', '1');
INSERT INTO `monster` VALUES ('12', '野猪', '野外怪物', '5', '18', '18', '70', '1');

-- ----------------------------
-- Table structure for person
-- ----------------------------
DROP TABLE IF EXISTS `person`;
CREATE TABLE `person` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '人物ID',
  `rank` tinyint(2) NOT NULL DEFAULT '1' COMMENT '等级',
  `attack` smallint(3) NOT NULL DEFAULT '5' COMMENT '攻击力',
  `defense` smallint(3) NOT NULL DEFAULT '5' COMMENT '防御力',
  `weapon` smallint(3) DEFAULT '-1' COMMENT '武器编号',
  `armor` smallint(3) DEFAULT '-1' COMMENT '防具编号',
  `money` int(8) NOT NULL DEFAULT '0' COMMENT '金钱数量',
  `life` int(4) NOT NULL DEFAULT '100' COMMENT '生命值',
  `speed` tinyint(2) NOT NULL DEFAULT '0' COMMENT '速度',
  `experience` int(10) NOT NULL DEFAULT '0' COMMENT '当前经验',
  `taskid` int(10) NOT NULL DEFAULT '1' COMMENT '当前任务ID',
  `arenarank` int(10) NOT NULL COMMENT '竞技场排名',
  `name` varchar(15) NOT NULL COMMENT '角色名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COMMENT='角色信息表';

-- ----------------------------
-- Records of person
-- ----------------------------
INSERT INTO `person` VALUES ('4', '11', '250', '200', '3', '2', '350', '100', '12', '100', '1', '1', '令狐冲');
INSERT INTO `person` VALUES ('6', '1', '110', '110', '1', '6', '4700', '100', '5', '0', '1', '3', '段誉');
INSERT INTO `person` VALUES ('7', '1', '105', '105', '1', '2', '4800', '100', '5', '0', '1', '4', '冬成');
INSERT INTO `person` VALUES ('9', '1', '5', '5', '-1', '-1', '0', '100', '0', '0', '1', '6', '叶孤城');
INSERT INTO `person` VALUES ('10', '1', '1500', '5', '-1', '-1', '0', '100', '0', '0', '1', '7', '西门吹雪');
INSERT INTO `person` VALUES ('11', '1', '5', '5', '-1', '-1', '0', '100', '0', '0', '1', '11', '12345');
INSERT INTO `person` VALUES ('12', '1', '105', '105', '1', '6', '1772', '100', '5', '100', '1', '5', '111');
INSERT INTO `person` VALUES ('13', '1', '55', '105', '3', '6', '99450', '100', '5', '0', '1', '8', '222');
INSERT INTO `person` VALUES ('14', '1', '5', '5', '-1', '-1', '0', '100', '0', '0', '1', '9', '333');
INSERT INTO `person` VALUES ('15', '1', '5', '5', '-1', '-1', '0', '100', '0', '0', '1', '12', '444');
INSERT INTO `person` VALUES ('16', '1', '55', '105', '3', '2', '750', '100', '5', '0', '1', '18', '555');
INSERT INTO `person` VALUES ('17', '1', '105', '105', '1', '6', '600', '100', '5', '0', '1', '10', '666');
INSERT INTO `person` VALUES ('18', '1', '5', '105', '-1', '4', '500', '100', '0', '0', '1', '13', '777');
INSERT INTO `person` VALUES ('19', '1', '5', '5', '-1', '-1', '600', '100', '0', '0', '1', '14', '888');
INSERT INTO `person` VALUES ('20', '1', '5', '105', '-1', '6', '600', '100', '0', '0', '1', '15', '999');
INSERT INTO `person` VALUES ('21', '1', '5', '5', '-1', '-1', '0', '100', '0', '0', '1', '16', '1011');
INSERT INTO `person` VALUES ('22', '1', '5', '105', '-1', '6', '450', '100', '0', '0', '1', '17', '01010');
INSERT INTO `person` VALUES ('23', '1', '5', '105', '-1', '6', '600', '100', '0', '0', '1', '19', '121');
INSERT INTO `person` VALUES ('24', '1', '5', '5', '-1', '-1', '0', '100', '0', '0', '1', '20', '');
INSERT INTO `person` VALUES ('25', '1', '105', '105', '1', '4', '900', '100', '5', '100', '1', '2', 'sjn');

-- ----------------------------
-- Table structure for person_equipment
-- ----------------------------
DROP TABLE IF EXISTS `person_equipment`;
CREATE TABLE `person_equipment` (
  `id` int(10) NOT NULL COMMENT '角色ID',
  `equipmentid` int(10) NOT NULL COMMENT '拥有装备ID',
  PRIMARY KEY (`id`,`equipmentid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色-装备关联表';

-- ----------------------------
-- Records of person_equipment
-- ----------------------------
INSERT INTO `person_equipment` VALUES ('4', '1');
INSERT INTO `person_equipment` VALUES ('4', '3');
INSERT INTO `person_equipment` VALUES ('6', '1');
INSERT INTO `person_equipment` VALUES ('6', '2');
INSERT INTO `person_equipment` VALUES ('6', '3');
INSERT INTO `person_equipment` VALUES ('6', '4');
INSERT INTO `person_equipment` VALUES ('6', '5');
INSERT INTO `person_equipment` VALUES ('6', '6');
INSERT INTO `person_equipment` VALUES ('12', '1');
INSERT INTO `person_equipment` VALUES ('12', '2');
INSERT INTO `person_equipment` VALUES ('12', '3');
INSERT INTO `person_equipment` VALUES ('12', '4');
INSERT INTO `person_equipment` VALUES ('12', '5');
INSERT INTO `person_equipment` VALUES ('12', '6');
INSERT INTO `person_equipment` VALUES ('13', '1');
INSERT INTO `person_equipment` VALUES ('13', '2');
INSERT INTO `person_equipment` VALUES ('13', '3');
INSERT INTO `person_equipment` VALUES ('13', '4');
INSERT INTO `person_equipment` VALUES ('13', '5');
INSERT INTO `person_equipment` VALUES ('13', '6');
INSERT INTO `person_equipment` VALUES ('16', '1');
INSERT INTO `person_equipment` VALUES ('16', '2');
INSERT INTO `person_equipment` VALUES ('16', '3');
INSERT INTO `person_equipment` VALUES ('17', '1');
INSERT INTO `person_equipment` VALUES ('17', '2');
INSERT INTO `person_equipment` VALUES ('17', '5');
INSERT INTO `person_equipment` VALUES ('17', '6');
INSERT INTO `person_equipment` VALUES ('18', '1');
INSERT INTO `person_equipment` VALUES ('18', '2');
INSERT INTO `person_equipment` VALUES ('18', '4');
INSERT INTO `person_equipment` VALUES ('18', '5');
INSERT INTO `person_equipment` VALUES ('18', '6');
INSERT INTO `person_equipment` VALUES ('19', '2');
INSERT INTO `person_equipment` VALUES ('19', '4');
INSERT INTO `person_equipment` VALUES ('19', '5');
INSERT INTO `person_equipment` VALUES ('19', '6');
INSERT INTO `person_equipment` VALUES ('20', '2');
INSERT INTO `person_equipment` VALUES ('20', '4');
INSERT INTO `person_equipment` VALUES ('20', '5');
INSERT INTO `person_equipment` VALUES ('20', '6');
INSERT INTO `person_equipment` VALUES ('22', '1');
INSERT INTO `person_equipment` VALUES ('22', '2');
INSERT INTO `person_equipment` VALUES ('22', '3');
INSERT INTO `person_equipment` VALUES ('22', '4');
INSERT INTO `person_equipment` VALUES ('22', '5');
INSERT INTO `person_equipment` VALUES ('22', '6');
INSERT INTO `person_equipment` VALUES ('23', '2');
INSERT INTO `person_equipment` VALUES ('23', '4');
INSERT INTO `person_equipment` VALUES ('23', '5');
INSERT INTO `person_equipment` VALUES ('23', '6');
INSERT INTO `person_equipment` VALUES ('25', '1');
INSERT INTO `person_equipment` VALUES ('25', '4');

-- ----------------------------
-- Table structure for person_task
-- ----------------------------
DROP TABLE IF EXISTS `person_task`;
CREATE TABLE `person_task` (
  `id` int(10) NOT NULL COMMENT '人物ID',
  `taskid` int(10) NOT NULL COMMENT '任务ID',
  `status` tinyint(2) NOT NULL DEFAULT '0' COMMENT '任务状态，0表示未接，1表示已接，2表示已完成',
  `killed` tinyint(2) NOT NULL DEFAULT '0' COMMENT '当前已击杀的怪物数',
  PRIMARY KEY (`id`,`taskid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of person_task
-- ----------------------------
INSERT INTO `person_task` VALUES ('4', '2', '2', '1');
INSERT INTO `person_task` VALUES ('12', '1', '2', '1');
INSERT INTO `person_task` VALUES ('25', '1', '2', '1');

-- ----------------------------
-- Table structure for task
-- ----------------------------
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '任务ID',
  `name` varchar(20) NOT NULL COMMENT '任务名',
  `describe` varchar(50) NOT NULL COMMENT '任务描述',
  `experience` int(10) NOT NULL COMMENT '任务完成奖励经验',
  `equipment` int(10) NOT NULL COMMENT '任务完成奖励装备',
  `monsterid` int(10) NOT NULL COMMENT '任务击杀怪物ID',
  `monsteramount` tinyint(2) NOT NULL COMMENT '任务击杀怪物数量',
  `money` int(8) NOT NULL COMMENT '任务完成奖励金钱',
  `minimumrank` tinyint(2) NOT NULL COMMENT '领取任务所需的最低等级',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='任务信息表';

-- ----------------------------
-- Records of task
-- ----------------------------
INSERT INTO `task` VALUES ('1', '拯救村民', '小野猪袭击了村庄，作为立志成为武林英雄的你，快去拯救村民吧！', '100', '0', '1', '1', '100', '0');
SET FOREIGN_KEY_CHECKS=1;
