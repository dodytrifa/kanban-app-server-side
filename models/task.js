'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User, { foreignKey: 'userId' })
    }
  };
  Task.init({
    category: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['Backlog', 'Todo', 'Doing', 'Complete']],
          msg: 'Choose: Backlog, Todo, Doing, or Complete'
        },
        notEmpty: {
          msg: 'Category cannot be empty'
        }
      }
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Title cannot be empty'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};