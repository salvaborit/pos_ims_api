-- creates superuser 'todo_dev' + grants

CREATE DATABASE IF NOT EXISTS pos_ims_db CHARACTER SET utf8;

CREATE USER IF NOT EXISTS 'root'@'localhost' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON pos_ims_db.* TO 'root'@'localhost';
FLUSH PRIVILEGES;
