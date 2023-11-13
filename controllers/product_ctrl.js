const db = require('../models');
const logicService = require('../services/product_logic_service');

module.exports  = {
    async get_all(req, res) {
        try {
            const products = await db.Product.findAll({include: [db.Category, db.Image]});
            res.status(200).json(products);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async get(req, res) {
        try {
            const product = await db.Product.findByPk(req.params.product_id, {include: [db.Category, db.Image]});
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).send('Product not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async create(req, res) {
        try {
            const product = await logicService.add(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).send(error);
        }
        res.status(201)
    },

    async update(req, res) {
        try {
            const [updated] = await db.Product.update(req.body, {
                where: {
                    id: req.params.product_id
                }
            });
            if (updated) {
                const product = await db.Product.findByPk(req.params.product_id);
                res.status(200).json(product);
            } else {
                res.status(404).send('Product not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async delete(req, res) {
        // try {
        //     const deleted = await db.Category.destroy({
        //         where: {
        //             id: req.params.category_id
        //         }
        //     });
        //     if (deleted) {
        //         res.status(200).send(`Category ${req.params.category_id} successfully deleted`);
        //     } else {
        //         res.status(404).send('User not found');
        //     }
        // } catch (error) {
        //     res.status(500).send(error);
        // }
        res.status(200).json("Not implemented")
    },
};
