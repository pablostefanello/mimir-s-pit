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
  idQuestionExam: {
    type: DataTypes.UUID,
    references: {
      model: 'Question_Exam',
      key: 'id',
    },
    field: 'idQuestionExam',
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
  timestamps: false,
});

module.exports = Try;
