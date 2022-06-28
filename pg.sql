create table products(
    id serial primary key,
    name  varchar(100) unique not null, 
    description varchar(100), 
    quantity_on_stock  int ,
    registeredOn TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    lastUpdatedOn TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

create table purchases(
    id serial primary key,
    product_id int not null,
    quantity int default 0,
    price_per_piece NUMERIC(7,2),
    CONSTRAINT fk_products FOREIGN KEY(product_id) REFERENCES products(id),
    purchasedOn TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


    SELECT pr.id,pr.name, pr.description,pr.quantity_on_stock as quantityOnStock,pr.registeredOn,pr.lastUpdatedOn,
    ps.id,ps.product_id, ps.quantity,ps.price_per_piece,ps.purchasedOn
    FROM products as pr JOIN purchases as ps ON pr.id = ps.product_id and 
    pr.registeredOn>=$1;

    SELECT pr.id,pr.name, pr.description,pr.quantity_on_stock as quantityOnStock,pr.registeredOn,pr.lastUpdatedOn,
    ps.id,ps.product_id, ps.quantity,ps.price_per_piece,ps.purchasedOn
    FROM products as pr JOIN purchases as ps ON pr.id = ps.product_id and 
    pr.registeredOn between $1 and  $2;
