const path = require('path');

const express = require('express');
const { getAddProducts, postAddProduct } = require('../controllers/products');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', getAddProducts);

// /admin/add-product => POST
router.post('/add-product', postAddProduct);

exports.routes = router;
