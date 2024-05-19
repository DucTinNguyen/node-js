const db = require('../util/database')

class Product {

    constructor(_title, _description, _price, _imgUrl) {
        this.title = _title;
        this.description = _description;
        this.price = _price;
        this.imgUrl = _imgUrl
    }

    save() {


    }

    static fetchAllProducts() {
        return db.execute('SELECT * FROM product');
    }

}
module.exports = {
    Product
}