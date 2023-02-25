const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const productController = require('../controllers/productController.js');

router.route('/')
    .get(productController.getallproduct)
    .post(productController.createproduct);

router.route('/:id')
    .get(productController.getproductbyid)
    .delete(productController.deleteproduct)
    .put(productController.updateproduct);

module.exports = router;