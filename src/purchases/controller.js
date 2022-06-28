const queries = require("./queries");
const pool = require("../../config/conn");

  const getPurchases  = (request, response) => {
    const { date1,date2,startPostion,maxResult } = request.body
    let query=''
    if (date1!="" && date1!=undefined && date2==="" |date2===undefined){
      query=`SELECT pr.id,pr.name, pr.description,pr.quantity_on_stock as quantityOnStock,pr.registeredOn,pr.lastUpdatedOn,
      ps.id,ps.product_id, ps.quantity,ps.price_per_piece,ps.purchasedOn
      FROM products as pr JOIN purchases as ps ON pr.id = ps.product_id and 
      pr.registeredOn>=$1;
  `
    pool.query(query,[date1], (error, results) => {
      if (error) {
        const er = {
          status : false,
          message : `No record found! ${error}`
          }
          return response.status(400).json(er)

      }
      response.status(200).json(results.rows)
    })

    }
    else if (date2!="" && date2!=undefined && date1==="" |date1===undefined){
      query=`SELECT pr.id,pr.name, pr.description,pr.quantity_on_stock as quantityOnStock,pr.registeredOn,pr.lastUpdatedOn,
      ps.id,ps.product_id, ps.quantity,ps.price_per_piece,ps.purchasedOn
      FROM products as pr JOIN purchases as ps ON pr.id = ps.product_id and 
      pr.registeredOn>=$1;
  `
      pool.query(query,[date2], (error, results) => {
        if (error) {
          const er = {
            status : false,
            message : `No record found! ${error}`
            }
            return response.status(400).json(er)

        }
        return response.status(200).json(results.rows)
      })
   
  }
  else if (date1!="" && date1!=undefined && date2!="" && date2!=undefined){

    query=`SELECT pr.id,pr.name, pr.description,pr.quantity_on_stock as quantityOnStock,pr.registeredOn,pr.lastUpdatedOn,
      ps.id,ps.product_id, ps.quantity,ps.price_per_piece,ps.purchasedOn
      FROM products as pr JOIN purchases as ps ON pr.id = ps.product_id and 
      pr.registeredOn between $1 and $2;
  `
      pool.query(query,[date1,date2], (error, results) => {
        if (error) {
          const er = {
            status : false,
            message : `No record found! ${error}`
            }
            return response.status(400).json(er)

        }
       return response.status(200).json(results.rows)
      })
  }

}
  const getPurchasesById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query(queries.getPurchasesById, [id], (error, results) => {
      if (error) {
        const er = {
          status : false,
          message : `No record found! ${error}`
          }
          return response.status(400).json(er)

      }
      return response.status(200).json(results.rows)
    })
  }
  
  const createPurchases  = (request, response) => {
    const { quantity,pricePerPiece } = request.body
    const id = parseInt(request.params.id)

  
    pool.query(queries.createPurchases, [id,quantity,pricePerPiece], (error, results) => {
      if (error) {
        const er = {
          status : false,
          message : `Error occured while creating new Purchase! ${error}`
          }
          return response.status(400).json(er)

      }
      const message = {
        status : true,
        message : "Purchase created successfully!"
        }
      return response.status(201).json(message)
    })
  }
  

  module.exports = {
    createPurchases,
    getPurchasesById,
    getPurchases ,
    
  }