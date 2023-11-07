const { Sequelize, DataTypes } = require('sequelize');

module.exports = sequelize => {

    class User extends Sequelize.Model {
        static associate(db) {
            User.hasMany(db.MailingAddress, {onDelete: 'CASCADE'});
            User.hasMany(db.PaymentMethod, {onDelete: 'CASCADE'});
            User.hasMany(db.Phone, {onDelete: 'CASCADE'});
        };
    }

    User.init({
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emailAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            set(value) {
                this.setDataValue('password', value);
            }
        }}
        ,
    {
        sequelize,
        modelName: 'User'
    });

    return User;
};