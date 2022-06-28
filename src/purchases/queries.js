const getPurchases ='SELECT * FROM purchases ORDER BY id ASC';
const createPurchases='INSERT INTO purchases  (product_id, quantity,price_per_piece) VALUES ($1, $2,$3)';
const getPurchasesById='SELECT * FROM purchases  WHERE id = $1';

module.exports = {
    getPurchases,
    createPurchases,
    getPurchasesById
}