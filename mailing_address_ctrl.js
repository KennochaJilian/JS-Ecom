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
            const mailingAddr = req.body;
            mailingAddr.UserId = req.params.user_id;
            const addr = db.MailingAddress.create(mailingAddr)
            res.status(201).json(addr);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async update(req, res) {
        try {
            const [updated] = await db.MailingAddress.update(req.body, {
                where: {
                    UserId: req.params.user_id,
                    id: req.params.mailing_address_id,
                }
            });
            if (updated) {
                const user = await db.MailingAddress.findByPk(req.params.user_id);
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
            const deleted = await db.MailingAddress.destroy({
                where: {
                    UserId: req.params.user_id,
                    id: req.params.mailing_address_id,
                }
            });
            if (deleted) {
                res.status(200).send(`Adress ${req.params.user_id} successfully deleted`);
            } else {
                res.status(404).send('Address not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

module.exports = { mailingCtrl };