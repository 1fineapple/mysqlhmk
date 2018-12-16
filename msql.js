DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;


USE bamazon;

CREATE TABLE PRODUCTS(
    item_id INT NOT NULL AUTO_INCREMENT, 
    product_name VARCHAR(30)NULL,
    department_name VARCHAR(30)NULL, 
    price DECIMAL (10,2)NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id) 
    );
    


INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES("Bananas", "produce", 0.33,22);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES("HOT Sauce", "canned products", 5.99, 30);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES("flour", "baking", 1.99, 5);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES("Chips", "junk food", 3.99, 14);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES("Cookies", "junk food", 2.65, 40);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES("Marmite", "canned products", 0.99, 1);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES("Eggplant", "produce", 1.99, 10);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES("Lentils", "canned products", 3.00, 18);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES("ponchos", "apparel",13.99, 50);