const db = require('../models');

module.exports  = {
    async get_all(req, res) {
        try {
            const users = await db.User.findAll();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async get(req, res) {
        try {
            console.log(req.params.user_id)
            const user = await db.User.findByPk(req.params.user_id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).send('User not found');
            }
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
    },
    load_by_id: (req, res, next) => {
        db.User.findByPk(req.params.user_id).then(user => {
            req.user = user;
            next();
        }).catch(next);
    }
};
