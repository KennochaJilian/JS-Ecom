const mailing_address_ctrl = require('../controllers/mailing_address_ctrl');

module.exports = [

    {
        url: '/api/users/:user_id/mailAddress',
        method: 'get',
        func: mailing_address_ctrl.get_all
    },
    {
        url: '/api/users/:user_id/mailAddress/:mailing_address_id',
        method: 'get',
        func: mailing_address_ctrl.get
    },
    {
        url: '/api/users/:user_id/mailAddress',
        method: 'post',
        func: mailing_address_ctrl.create
    },
    {
        url: '/api/users/:user_id/mailAddress/:mailing_address_id',
        method: 'put',
        func: mailing_address_ctrl.update
    },
    {
        url: '/api/users/:user_id/mailAddress/:mailing_address_id',
        method: 'delete',
        func: mailing_address_ctrl.delete
    },

];
