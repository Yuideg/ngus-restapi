const express = require("express");
const productRoutes = require('./src/products/routes')
const purchaseRoutes = require('./src/purchases/routes')

const app= express();
const port=9090;
const home=(req,res)=>{
    return res.send("Hello World")

}
app.use(express.json())
app.use("/api/products",productRoutes);
app.use("/api/purchases",purchaseRoutes);
app.listen(port,()=>console.log(`app is running on port ${port}. `));