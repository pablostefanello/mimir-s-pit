const { DataTypes } = require('sequelize')
const { v4: uuidv4 } = require('uuid')
const database = require('../db')

const Try = database.define('Try', {
  idTry: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: uuidv4(),
    field: 'idTry',
  },
  idQuestionTest: {
    type: DataTypes.UUID,
    references: {
      model: 'Question_Test',
      key: 'id',
    },
    field: 'idQuestionTest',
  },
  answer: {
    type: DataTypes.STRING(8),
    field: 'answer',
  },
  isRight: {
    type: DataTypes.INTEGER,
    field: 'isRight',
  },
}, {
  tableName: 'try',
});

module.exports = Try;
