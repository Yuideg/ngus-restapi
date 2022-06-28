const getProducts ='select * from products ORDER BY id ASC';
// const deleteProduct = 'DELETE FROM products WHERE id = $1';
// const updateProduct='UPDATE products  SET name = $1, description = $2,quantity_on_stock=$3 WHERE id = $4';
const createProduct='INSERT INTO products  (name, description,quantity_on_stock) VALUES ($1, $2,$3)';
const getProductById='SELECT * FROM products  WHERE id = $1';

module.exports = {
    getProducts,
    createProduct,
    getProductById
}