const phone_ctrl = require('../controllers/phone_ctrl');
const user_ctrl = require('../controllers/user_ctrl')

module.exports = [

    {
        url: '/api/users/:user_id/phones',
        method: 'get',
        func: [user_ctrl.load_by_id, phone_ctrl.get_all]
    },
    {
        url: '/api/users/:user_id/phones/:phone_id',
        method: 'get',
        func: [user_ctrl.load_by_id, phone_ctrl.get]
    },
    {
        url: '/api/users/:user_id/phones',
        method: 'post',
        func: [user_ctrl.load_by_id, phone_ctrl.create]
    },
    {
        url: '/api/users/:user_id/phones/:phone_id',
        method: 'put',
        func: [user_ctrl.load_by_id, phone_ctrl.update]
    },
    {
        url: '/api/users/:user_id/phones/:phone_id',
        method: 'delete',
        func: [user_ctrl.load_by_id, phone_ctrl.delete]
    },
];
