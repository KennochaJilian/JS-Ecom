const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => {

    class Phone extends Sequelize.Model {
        static associate(db) {
            Phone.belongsTo(db.User, {foreignKey: 'UserId'});
        };
    }

    Phone.init({
        // Model attributes are defined here
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['home', 'work']]
            }
        }},
        {
        sequelize,
        modelName: 'Phone'
    });

    return Phone;

};