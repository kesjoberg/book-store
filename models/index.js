const User = require('./user');
const Book = require('./book');
const Order = require('./order');
const Comment = require('./comment');

User.hasMany(Book, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Order, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Book.hasMany(Comment, {
  foreignKey: 'book_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Book, {
  foreignKey: 'book_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Order.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Order.hasMany(Book, {
//   foreignKey: 'order_id',
//   onDelete: 'CASCADE'
// });

Order.belongsTo(Book, {
  foreignKey: 'book_id',
  onDelete: 'CASCADE'
});

module.exports = {User, Comment, Book, Order};
