const{
    Model,
    DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);

    }
}
User.init({
    id: {
    type: DataTyptes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
},
username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [4]
    }
}
}, {
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 11);
            return newUserData;
        }
    }
}, {
    hooks: {
    async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 11);
        return newUserData;
    },
    async beforeUdate(updatedUserData) {
        updatedUserData.password = await bcreypt.hash(updatedUserData.password, 11);
        return updatedUserData;

    }
    },
    sequelize,
    timestams: false,
    reesztableName: true,
    underscored: true,
    underscored: true,
    modelName: 'user'
})