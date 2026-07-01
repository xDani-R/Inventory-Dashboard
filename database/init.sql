CREATE DATABASE IF NOT EXISTS inventory_dashboard;

USE inventory_dashboard;

CREATE TABLE IF NOT EXISTS productos (

    id INT AUTO_INCREMENT PRIMARY KEY,

    nombre VARCHAR(100) NOT NULL,

    categoria VARCHAR(100) NOT NULL,

    stock INT NOT NULL,

    precio DECIMAL(10,2) NOT NULL

);

INSERT INTO productos (nombre,categoria,stock,precio) VALUES
('Notebook Lenovo','Computación',15,650000),
('Mouse Logitech','Accesorios',40,19990),
('Teclado Mecánico','Accesorios',20,49990),
('Monitor Samsung 24','Monitores',8,189990),
('SSD Kingston 1TB','Almacenamiento',25,79990),
('Memoria RAM 16GB','Hardware',30,69990),
('Notebook ASUS','Computación',10,899990),
('Disco Externo 2TB','Almacenamiento',12,99990),
('Audífonos HyperX','Audio',18,54990),
('Webcam Logitech','Video',22,45990);