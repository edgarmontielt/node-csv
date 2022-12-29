<h1 align="center">NodeJS CSV</h1>

<h4 align="center">The repository contains the code to consume a cvs file and insert it into the database with sequelize and mysql</h4>

## Getting Started

First, rebuild node_modules:

```bash
npm install
```

Second, in /model/user fill in:

```
database = name of database
username = username of database
password = password of database
```

Third, in the database management system, run the script located in /sql

```bash
SELECT * FROM `users-db`.users;CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `city` varchar(45) DEFAULT NULL,
  `ip` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1361 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

Fourth, run the script js

```bash
npm run dev
```
