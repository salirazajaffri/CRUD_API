const express = require('express');
const router = express.Router();

const product_controller= require('../controllers/product.controller');

router.get('/createform',product_controller.product_formcreate);//load insert form 
router.post('/create',product_controller.product_create); //perform insert operation 


router.get('/list',product_controller.product_list);// get all documents
router.post('/:id/delete',product_controller.product_delete);

router.post('/:id/update',product_controller.product_update);
router.post('/updateform/:id',product_controller.product_updateform);

module.exports=router;