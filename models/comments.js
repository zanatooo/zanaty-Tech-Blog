const {
    Model,
    DataTypes

} = rquire('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: faalse,
        PrimaryKey: true,
        autoIncrement: true
        
    },
    comment_text: {
        type: DataTyepes.STRING,
        allowNull: false,
        Validate: {
            len: [1]
        }
    },
    user_id: {
        type: DataTypes.INTEGER
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    }
   
},
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    ModelName: 'commnet'

})

module.exports = Comments;