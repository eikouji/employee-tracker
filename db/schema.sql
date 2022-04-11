/* create DATABASE */
DROP DATABASE IF EXISTS employeeDB;
DROP DATABASE IF EXISTS departments;
DROP DATABASE IF EXISTS roles;
DROP DATABASE IF EXISTS employee;

CREATE DATABASE employeeDB;
USE employeeDB;

/* department */
CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT INT PRIMARY KEY
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);


/* role */
CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT
    title VARCHAR(30) NOT NULL,
    salary decimal NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
)


/* employee */
CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INTEGER NULL,
    manager_id INTEGER,
    PRIMARY KEY (id)
)
