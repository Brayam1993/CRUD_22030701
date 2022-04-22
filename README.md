# CRUD_22030701
Example of storing data in JSON file.


MySql Workbench fearure

1._
Notes: To connect to the database in MySql Workbench you should set a user name `root` with password `root`.

2._
Create a data base with name: `node_mysql_crud_users_db`

3._
Create the next table :

CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `age` decimal(11,2) unsigned DEFAULT '0.00',
  `password` decimal(11,2) unsigned DEFAULT '0.00',
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
