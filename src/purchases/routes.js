const { Router } = require("express")
const controller=require('./controller')

const router=Router()
router.get('/',controller.getPurchases);
router.get('/:id',controller.getPurchasesById);
router.post('/:id',controller.createPurchases);
module.exports=router;


