const paymentMethodCtrl = require('../controllers/payment_mode_ctrl');
const user_ctrl = require('../controllers/user_ctrl')

module.exports = [

    {
        url: '/api/users/:user_id/payment_methods',
        method: 'get',
        func: [user_ctrl.load_by_id, paymentMethodCtrl.get_all]
    },
    {
        url: '/api/users/:user_id/payment_methods/:payment_method',
        method: 'get',
        func: [user_ctrl.load_by_id, paymentMethodCtrl.get]
    },
    {
        url: '/api/users/:user_id/payment_methods',
        method: 'post',
        func: [user_ctrl.load_by_id, paymentMethodCtrl.create]
    },
    {
        url: '/api/users/:user_id/payment_methods/:payment_method',
        method: 'put',
        func: [user_ctrl.load_by_id, paymentMethodCtrl.update]
    },
    {
        url: '/api/users/:user_id/payment_methods/:payment_method',
        method: 'delete',
        func: [user_ctrl.load_by_id, paymentMethodCtrl.delete]
    },

];
