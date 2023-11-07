const db = require('../models');

module.exports = {
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
            const user = await db.User.findByPk(req.params.user_id);
            console.log(user);
            if(!user){
                res.status(404).json('User not found');
            }
            const addr = await db.MailingAddress.create(req.body)
            await user.addMailingAddresses(addr);

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
                const addr = await db.MailingAddress.findByPk(req.params.user_id);
                res.status(200).json(addr);
            } else {
                res.status(404).send('Address not found');
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
