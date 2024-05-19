const { Product } = require("../models/product");


exports.getAddProducts = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAllProducts()
        .then(([result, fieldData]) => {
            console.log("--result", result);
            res.render('shop', {
                prods: result,
                pageTitle: 'Shop',
                path: '/',
                // hasProducts: result.length > 0,
                // activeShop: true,
                // productCSS: true
            });
        })
        .catch(err => console.log(err));

}