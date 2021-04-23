const User = require('./User');
const Post = requite('./Post');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// User.hasMany(Post, {
//   foreignKey: 'userId',
//   onDelete: 'CASCADE'
// });

module.exports = {
  User,
  Post
};