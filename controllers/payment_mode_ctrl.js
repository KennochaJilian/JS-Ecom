const db = require('../models');

module.exports = {
    get_all(req, res) {
        try {
            db.PaymentMethod.findAll({
                where: {
                    UserId: req.user.id
                  }
            }).then(x => {
                if(x.length === 0){
                    res.status(404).send('No PaymentMethod address found');
                }else{
                    res.status(200).json(x);
                }
            })
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async get(req, res) {
            const user = await db.PaymentMethod.findByPk(req.user.id);
            if(!req.user){
                res.status(404).send('User not found');
            }
            const modes = await req.user.getPaymentMethods();
            res.status(200).send(modes)

    },

    async create(req, res) {
        try {
            if(!req.user){
                res.status(404).json('User not found');
            }
            const mode = await db.PaymentMethod.create(req.body)
            await req.user.addPaymentMethods(mode);
            res.status(201).json(mode);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async update(req, res) {
        try {
            const [updated] = await db.PaymentMethod.update(req.body, {
                where: {
                    UserId: req.user.id,
                    id: req.params.payment_method_id,
                }
            });
            if (updated) {
                const phone = await db.PaymentMethod.findByPk(req.user.id);
                res.status(200).json(phone);
            } else {
                res.status(404).send('PaymentMethod not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async delete(req, res) {
        try {
            const deleted = await db.PaymentMethod.destroy({
                where: {
                    UserId: req.user.id,
                    id: req.params.payment_method_id,
                }
            });
            if (deleted) {
                res.status(200).send(`PaymentMethod ${req.user.id} successfully deleted`);
            } else {
                res.status(404).send('PaymentMethod not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
};
