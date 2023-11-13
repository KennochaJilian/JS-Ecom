const category_ctrl = require('../controllers/category_ctrl');

module.exports = [

    {
        url: '/api/categories',
        method: 'get',
        func: category_ctrl.get_all
    },
    {
        url: '/api/categories/:category_id',
        method: 'get',
        func: category_ctrl.get
    },
    {
        url: '/api/categories',
        method: 'post',
        func: category_ctrl.create
    },
    {
        url: '/api/categories/:category_id',
        method: 'put',
        func: category_ctrl.update
    },
    {
        url: '/api/categories/:category_id',
        method: 'delete',
        func: category_ctrl.delete
    },
    {
        url: '/api/categories/:category_id/products',
        method: 'get',
        func: category_ctrl.getProducts
    },

];
