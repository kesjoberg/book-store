const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Order extends Model {

  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model:'user',
        id: 'id',
      }
    },
    quantity: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    }
  },
  
  {  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'order'
  }
);

module.exports = Order;