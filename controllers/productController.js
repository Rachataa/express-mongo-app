const Product = require('../models/Product.js');

const getallproduct = (req, res, next) => {
    Product.find((err, products) => {
        if (err) return next(err);
        res.json(products);
    })
}

const createproduct = (req, res, next) => {
    Product.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
}

const getproductbyid = (req, res, next) => {
    Product.findById(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
}

const updateproduct = (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
}

const deleteproduct = (req, res, next) => {
    Product.findByIdAndDelete(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post);
    })
}

module.exports = {
    getallproduct,
    createproduct,
    getproductbyid,
    updateproduct,
    deleteproduct
}