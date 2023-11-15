const user_ctrl = require("../controllers/user_ctrl");
const cart_ctrl = require("../controllers/cart_ctrl")

module.exports = [

    {
        url: '/api/carts/user/:user_id',
        method: 'get',
        func: [user_ctrl.load_by_id, cart_ctrl.getOrCreate]
    },
    {
        url: '/api/carts/user/:user_id/count',
        method: 'get',
        func: [user_ctrl.load_by_id, cart_ctrl.count]
    },
    {
        url: '/api/carts/:cart_id/products/:product_id',
        method: 'post',
        func: cart_ctrl.addProductToCart
    },
    {
        url: '/api/carts/:cart_id/products/:product_id',
        method: 'delete',
        func: cart_ctrl.removeProductFromCart
    },
];
