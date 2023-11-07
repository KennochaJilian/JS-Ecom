const role_ctrl = require('../controllers/role_ctrl');

module.exports = [

    {
        url: '/api/roles',
        method: 'get',
        func: role_ctrl.get_all
    },
    {
        url: '/api/roles/:role_id',
        method: 'get',
        func: role_ctrl.get
    },
    {
        url: '/api/roles',
        method: 'post',
        func: role_ctrl.create
    },
    {
        url: '/api/roles/:role_id',
        method: 'put',
        func: role_ctrl.update
    },
    {
        url: '/api/roles/:role_id',
        method: 'delete',
        func: role_ctrl.delete
    },

];
