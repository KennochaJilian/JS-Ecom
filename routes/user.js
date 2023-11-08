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
        url: '/api/users/signup',
        method: 'post',
        func: user_ctrl.signup
    },
    {
        url: '/api/users/signIn',
        method: 'post',
        func: user_ctrl.signIn
    },
    {
        url: '/api/users/:user_id',
        method: 'put',
        func: [user_ctrl.load_by_id,user_ctrl.update]
    },
    {
        url: '/api/users/:user_id',
        method: 'delete',
        func: [user_ctrl.load_by_id,user_ctrl.delete]
    },
    {
        url: '/api/users/:user_id/roles',
        method: 'get',
        func: [user_ctrl.load_by_id, user_ctrl.getRoles]
    },
    {
        url: '/api/users/:user_id/group/:role_id',
        method: 'post',
        func: [user_ctrl.load_by_id, user_ctrl.addRole]
    }

];
