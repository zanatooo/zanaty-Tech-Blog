const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

User.hasMany(post, {
    foreignKey: 'user_id'
})

User.hasMany(Comment,{
    foreinKey: 'user_id'})

Post.belongsTo(User, {
    foreignKey: 'user_id'
    })

Post.hasMany(comment, {
    foreignKey: 'post_id'
})
Comment.belongsTo(user, {
    foreignKey: 'user_id'
})
Comment.belongsTo(Post, {
    foreinKey: 'post_id'
})

module.exports = {
    user,
    post,
    comments
};