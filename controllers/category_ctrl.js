const db = require('../models');

module.exports  = {
    async get_all(req, res) {
        try {
            const categories = await db.Category.findAll();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async get(req, res) {
        try {
            const category = await db.Category.findByPk(req.params.category_id);
            if (category) {
                res.status(200).json(category);
            } else {
                res.status(404).send('Category not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async create(req, res) {
        try {
            const category = await db.Category.create(req.body);
            res.status(201).json(category);
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async update(req, res) {
        try {
            const [updated] = await db.Category.update(req.body, {
                where: {
                    id: req.params.category_id
                }
            });
            if (updated) {
                const role = await db.Category.findByPk(req.params.category_id);
                res.status(200).json(role);
            } else {
                res.status(404).send('Category not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    },

    async delete(req, res) {
        try {
            const deleted = await db.Category.destroy({
                where: {
                    id: req.params.category_id
                }
            });
            if (deleted) {
                res.status(200).send(`Category ${req.params.category_id} successfully deleted`);
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    },
    async getProducts(req,res){
        try {
            const category = await db.Category.findByPk(req.params.category_id);
            if (category) {
                const products = await category.getProducts();
                res.status(200).json(products);
            } else {
                res.status(404).send('Product not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }

    }
};
