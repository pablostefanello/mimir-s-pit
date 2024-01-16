const { DataTypes } = require('sequelize')
const { v4: uuidv4 } = require('uuid')
const database = require('../db')

const QuestionExam = database.define('QuestionExam', {
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
  idExam: {
    type: DataTypes.UUID,
    references: {
      model: 'Exam',
      key: 'idExam',
    },
    field: 'idExam',
  },
}, {
  tableName: 'question_exam',
  timestamps: false,
});

module.exports = QuestionExam;
