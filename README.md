
# Inventory management

This is the form page to perform the information entry function of the warehouse receipt.

If all fields in the ticket are filled in, the warehouse receipt will be sent successfully.
After sending, data will be created in 3 tables:

+ receiptment stores ticket information.

+ products stores product information.

+ receiptment_products will store the primary key of the two tables receiptment and product.


## Authors

- [@minhchiha](https://github.com/Michaelha1808)


## Run Locally

Clone the project 

```bash
  git clone https://github.com/Michaelha1808/Manage-inventory.git
```

Go to the project directory

```bash
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server in development environment

```bash
  npm run dev
```
Build and Start the server in production environment

```bash
  npm run build
  npm run start
```
Open file or open live server file index.html in folder client

```bash
  The folder client is contant ui
```
Created database and table in potgress by the following commands. First is create table products:
```bash
  CREATE TABLE products(
	id SERIAL PRIMARY KEY,
	ma_sp VARCHAR(40),
	name VARCHAR(40),
	unit VARCHAR(40),
	quantity_by_doc NUMERIC,
	quantity_real NUMERIC,
	price FLOAT,
	total_price FLOAT,
	created_at DATE
);
ALTER TABLE products
ALTER COLUMN created_at TYPE TIMESTAMP;

ALTER TABLE products
ALTER COLUMN created_at SET DEFAULT NOW();
```
Create table inventory_locationi:
```bash
CREATE TABLE inventory_locationi(
	id SERIAL PRIMARY KEY,
	name VARCHAR(40),
	locate VARCHAR(200),
	created_at DATE
);
ALTER TABLE inventory_locationi
ALTER COLUMN created_at TYPE TIMESTAMP;

ALTER TABLE inventory_locationi
ALTER COLUMN created_at SET DEFAULT NOW();
```
Create table receiptment:
```bash
CREATE TABLE receiptment(
    id SERIAL PRIMARY KEY,
    delivery_person_name VARCHAR(40),
    according_to VARCHAR(40),
    according_number NUMERIC,
    according_date DATE,
    according_by VARCHAR(40),
    id_inventory INTEGER,
    FOREIGN KEY (id_inventory) REFERENCES inventory_locationi(id),
	organizational_unit VARCHAR(40),
	organization_department VARCHAR(40),
	date_receipment DATE,
	number_receipment NUMERIC,
	debt VARCHAR(40),
	having_yes VARCHAR(40),
	created_at DATE
);

ALTER TABLE receiptment
ALTER COLUMN created_at TYPE TIMESTAMP;

ALTER TABLE receiptment
ALTER COLUMN created_at SET DEFAULT NOW();
```
Create table receiptment_products:
```bash
CREATE TABLE receiptment_products(
    id SERIAL PRIMARY KEY,
    receiptment_id INTEGER,
    product_id INTEGER,
    FOREIGN KEY (receiptment_id) REFERENCES receiptment(id),
    FOREIGN KEY (product_id) REFERENCES products(id),
	created_at DATE
);

ALTER TABLE receiptment_products
ALTER COLUMN created_at TYPE TIMESTAMP;

ALTER TABLE receiptment_products
ALTER COLUMN created_at SET DEFAULT NOW();
```
Insert example data of table inventory_locationi:
```bash
INSERT INTO inventory_locationi (name,locate)
		VALUES ('Hà Nội', 'tầng 1, dãy 2, ngăn 3'),
		 ('TP Hồ Chí Minh', 'tầng 2, dãy 1, ngăn 4'),
		 ('Đà Nẵng', 'tầng 3, dãy 4, ngăn 2'),
		 ('Hải Phòng', 'tầng 4, dãy 3, ngăn 1'),
		 ('Cần Thơ', 'tầng 1, dãy 5, ngăn 6'),
		 ('Đà Lạt', 'tầng 2, dãy 4, ngăn 5'),
		 ('Nha Trang', 'tầng 3, dãy 2, ngăn 7'),
		 ('Vũng Tàu', 'tầng 4, dãy 6, ngăn 2'),
		 ('Bắc Ninh', 'tầng 1, dãy 3, ngăn 8'),
		 ('Quảng Ninh', 'tầng 2, dãy 7, ngăn 3');
```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file,
example in my project is:

`PORT=4000`

`HOST='https://michaelha-manage-inventory.com'`

`POSTGRES_DB='manage_inventory'`

`POSTGRES_HOST='localhost'`

`POSTGRES_PORT=5432`

`POSTGRES_USER='postgres'`

`POSTGRES_PASSWORD='1234@'`


## API Reference

#### Get all inventory location:

```http
  GET /users/inventory
```

#### Create receiptment and product:

```http
  Post /users/receiptment
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `delivery_person_name`| `string` | **Required** |
| `according_to`      | `string` | **Required** |
| `according_number`      | `number` | **Required** |
| `according_date`      | `string` | **Required** YY-MM-DD format |
| `according_by`      | `string` | **Required** |
| `id_inventory`      | `number` | **Required** |
| `organizational_unit`      | `string` | **Required** |
| `organization_department`      | `string` | **Required** |
| `date_receipment`      | `string` | **Required** YY-MM-DD format |
| `number_receipment`      | `number` | **Required** |
| `debt`      | `string` | **Required** |
| `having_yes`      | `string` | **Required** |
| `products`      | `Array Object` | **Required** |
#### products[{}] included
| `ma_sp`      | `string` | **Required** |
| `name`      | `string` | **Required** |
| `unit`      | `string` | **Required** |
| `quantity_by_doc`      | `number` | **Required** |
| `quantity_real`      | `number` | **Required** |
| `price`      | `number` | **Required** |
| `total_price`      | `number` | **Required** |


