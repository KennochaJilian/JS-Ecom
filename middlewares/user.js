const db = require("../models");

module.exports = {
    load_user: (req,res, next) => {
        if(!req.auth){
            next();
        }
        console.log(req.auth)
        db.User.findByPk(req.auth.id).then(user => {
            req.user = user;
            next();
        }).catch(next);
    }
}