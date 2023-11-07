const user_ctrl = require('../controllers/user_ctrl');

module.exports = [

    {
        url: '/api/users',
        method: 'get',
        func: user_ctrl.get_all
    },
    {
        url: '/api/users/:user_id',
        method: 'get',
        func: user_ctrl.get
    },
    {
        url: '/api/users',
        method: 'post',
        func: user_ctrl.create
    },
    {
        url: '/api/users/:user_id',
        method: 'put',
        func: user_ctrl.update
    },
    {
        url: '/api/users/:user_id',
        method: 'delete',
        func: user_ctrl.delete
    },

];
