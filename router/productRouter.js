
//reaponde a la ruta '/'

const express = require('express');
const router = express.Router();
const {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController')


router.get('/', getProduct);
router.post('/create', createProduct);
router.post('/update/:id', updateProduct);
router.post('/delete/:id',deleteProduct); 

module.exports = router;