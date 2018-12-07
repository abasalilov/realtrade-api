-- ---
-- Globals
-- ---
-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;
-- ---
-- Table 'User'
--
-- ---
-- DROP DATABASE IF EXISTS whitelist;

CREATE DATABASE IF NOT EXISTS realtrade;

USE realtrade;

DROP TABLE IF EXISTS users;
-- ---
-- Table 'users'
--
-- CREATE TABLE users
--              (
--                           id          INTEGER         auto_increment   NOT NULL,
--                           firstname VARCHAR(500) NULL DEFAULT NULL,
--                           lastname VARCHAR(200) NULL DEFAULT NULL,
--                           email VARCHAR(200) NOT NULL UNIQUE,
--                           pw VARCHAR(200) NULL DEFAULT NULL,
--                           updatedAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
--                           createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
--                           PRIMARY KEY (id)
--              );

-- -- ---
DROP TABLE IF EXISTS agents;
-- ---
-- Table 'agents'
--
CREATE TABLE agents
             (
                          id          INTEGER         auto_increment   NOT NULL,
                          firstname VARCHAR(500) NULL DEFAULT NULL,
                          lastname VARCHAR(200) NULL DEFAULT NULL,
                          agency_name VARCHAR(200) NULL DEFAULT NULL,
                          email VARCHAR(200) NOT NULL UNIQUE,
                          pw VARCHAR(200) NULL DEFAULT NULL,
                          eos VARCHAR(200) NULL DEFAULT NULL,
                          updatedAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
                          createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
                          PRIMARY KEY (id)
             );

DROP TABLE IF EXISTS brokers;
-- ---
-- Table 'brokers'
--
CREATE TABLE brokers
             (
                          id          INTEGER         auto_increment   NOT NULL,
                          firstname VARCHAR(500) NULL DEFAULT NULL,
                          lastname VARCHAR(200) NULL DEFAULT NULL,
                          brokerage_name VARCHAR(200) NULL DEFAULT NULL,
                          email VARCHAR(200) NOT NULL UNIQUE,
                          pw VARCHAR(200) NULL DEFAULT NULL,
                          eos VARCHAR(200) NULL DEFAULT NULL,
                          updatedAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
                          createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
                          PRIMARY KEY (id)
             );


DROP TABLE IF EXISTS rt_users;
-- ---
-- Table 'rt_users'
--
CREATE TABLE rt_users
             (
                          id          INTEGER         auto_increment   NOT NULL,
                          firstname VARCHAR(500) NULL DEFAULT NULL,
                          lastname VARCHAR(200) NULL DEFAULT NULL,
                          email VARCHAR(200) NOT NULL UNIQUE,
                          pw VARCHAR(200) NULL DEFAULT NULL,
                          eos VARCHAR(200) NULL DEFAULT NULL,
                          updatedAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
                          createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
                          PRIMARY KEY (id)
             );



-- ---
-- Table Properties
-- ---
-- ALTER TABLE `parts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ---
-- Test Data
-- ---
-- INSERT INTO `parts` (`finalIMGUrl`,`MFGPartNum`,`fileName`,`folderName`) VALUES
-- ('','','','');