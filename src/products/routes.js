const { Router } = require("express")
const controller=require('./controller')

const router=Router()
router.get('/',controller.getProducts);
// router.get('/:id',controller.getProductById);
router.post('/',controller.createProduct);
// router.put('/:id',controller.updateStudent);
// router.delete('/:id',controller.deleteStudent);
module.exports=router;


