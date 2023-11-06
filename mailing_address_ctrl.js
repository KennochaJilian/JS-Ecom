const db = require('./db');

const mailingCtrl = {
    get_all(req, res) {
        try {
            db.MailingAddress.findAll({
                where: {
                    UserId: req.params.user_id
                  }
            }).then(x => {
                if(x.length === 0){
                    res.status(404).send('No mailling address found');
                }else{
                    res.status(200).json(x);
                }
            })
        } catch (error) {
            res.status(500).send(error);
        }
    },

    get(req, res) {
        try {
            db.MailingAddress.findAll({
                where: {
                    id: req.params.mailing_address_id,
                    UserId: req.params.user_id
                  }
            }).then(x => {
                if(x.length === 0){
                    res.status(404).send('Not allowed');
                }else{
                    res.status(200).json(x);
                }
            });
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async create(req, res) {
        try {
            const user = await db.User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async update(req, res) {
        try {
            const [updated] = await db.User.update(req.body, {
                where: {
                    id: req.params.user_id
                }
            });
            if (updated) {
                const user = await db.User.findByPk(req.params.user_id);
                res.status(200).json(user);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async delete(req, res) {
        try {
            const deleted = await db.User.destroy({
                where: {
                    id: req.params.user_id
                }
            });
            if (deleted) {
                res.status(200).send(`User ${req.params.user_id} successfully deleted`);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = { mailingCtrl };