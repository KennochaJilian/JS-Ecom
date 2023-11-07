const paymentMethodCtrl = require('../controllers/payment_mode_ctrl');

module.exports = [

    {
        url: '/api/users/:user_id/payment_methods',
        method: 'get',
        func: paymentMethodCtrl.get_all
    },
    {
        url: '/api/users/:user_id/payment_methods/:payment_method',
        method: 'get',
        func: paymentMethodCtrl.get
    },
    {
        url: '/api/users/:user_id/payment_methods',
        method: 'post',
        func: paymentMethodCtrl.create
    },
    {
        url: '/api/users/:user_id/payment_methods/:payment_method',
        method: 'put',
        func: paymentMethodCtrl.update
    },
    {
        url: '/api/users/:user_id/payment_methods/:payment_method',
        method: 'delete',
        func: paymentMethodCtrl.delete
    },

];
