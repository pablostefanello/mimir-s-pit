const { DataTypes } = require('sequelize')
const { v4: uuidv4 } = require('uuid')
const database = require('../db')

const QuestionTest = database.define('QuestionTest', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: uuidv4(),
    field: 'id',
  },
  idQuestion: {
    type: DataTypes.UUID,
    references: {
      model: 'Question',
      key: 'idQuestion',
    },
    field: 'idQuestion',
  },
  idTest: {
    type: DataTypes.UUID,
    references: {
      model: 'Test',
      key: 'idTest',
    },
    field: 'idTest',
  },
}, {
  tableName: 'question_test',
});

module.exports = QuestionTest;
