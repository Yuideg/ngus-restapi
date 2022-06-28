const queries = require("./queries");
const pool = require("../../config/conn");





  const getProducts  = (request, response) => {
    pool.query(queries.getProducts, (error, results) => {
      if (error) {
        const er = {
          status : false,
          Message : "record not found!"
          }
          return response.status(400).json((er))

      }
      response.status(200).json(results.rows)
    })
  }
  
  const getProductById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query(queries.getProductById, [id], (error, results) => {
      if (error) {
        const er = {
          status : false,
          message : "Error occured while fetching!"
          }
          return response.status(400).json((er))

      }
      return response.status(200).json(results.rows)
    })
  }
  
  const createProduct  = (request, response) => {
    const {name, description,quantity_on_stock } = request.body
  
    pool.query(queries.createProduct, [name, description,quantity_on_stock], (error, results) => {
      if (error) {
        const er = {
          status : false,
          message : `Error occured while creating new product! ${error}`
          }
          return response.status(400).json(er)

      }
      const message = {
        status : true,
        message : "Product created successfully!"
        }
        

      return response.status(201).json(message);
    })
  }
  
  module.exports = {
    getProducts,
    createProduct ,
    getProductById
    
  }