const { DataTypes } = require('sequelize')
const { v4: uuidv4 } = require('uuid')
const database = require('../db')

const Question = database.define('Question', {
  idQuestion: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: uuidv4(),
    field: 'idQuestion',
  },
  questionType: {
    type: DataTypes.INTEGER,
    field: 'questionType',
  },
  questionAnswer: {
    type: DataTypes.STRING(8),
    field: 'questionAnswer',
  },
}, {
  tableName: 'question',
})

module.exports = Question
