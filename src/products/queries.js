const getProducts ='select * from products ORDER BY id ASC';
const createProduct='INSERT INTO products  (name, description,quantity_on_stock) VALUES ($1, $2,$3)';
const getProductById='SELECT * FROM products  WHERE id = $1';

module.exports = {
    getProducts,
    createProduct,
    getProductById
}