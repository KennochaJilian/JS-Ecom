const product_ctrl = require('../controllers/product_ctrl');

module.exports = [

    {
        url: '/api/products',
        method: 'get',
        func: product_ctrl.get_all
    },
    {
        url: '/api/products/:product_id',
        method: 'get',
        func: product_ctrl.get
    },
    {
        url: '/api/products',
        method: 'post',
        func: product_ctrl.create
    },
    {
        url: '/api/products/:product_id',
        method: 'put',
        func: product_ctrl.update
    },
    {
        url: '/api/products/:product_id',
        method: 'delete',
        func: product_ctrl.delete
    },

];
