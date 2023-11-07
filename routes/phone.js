const phone_ctrl = require('../controllers/phone_ctrl');

module.exports = [

    {
        url: '/api/users/:user_id/phones',
        method: 'get',
        func: phone_ctrl.get_all
    },
    {
        url: '/api/users/:user_id/phones/:phone_id',
        method: 'get',
        func: phone_ctrl.get
    },
    {
        url: '/api/users/:user_id/phones',
        method: 'post',
        func: phone_ctrl.create
    },
    {
        url: '/api/users/:user_id/phones/:phone_id',
        method: 'put',
        func: phone_ctrl.update
    },
    {
        url: '/api/users/:user_id/phones/:phone_id',
        method: 'delete',
        func: phone_ctrl.delete
    },

];
