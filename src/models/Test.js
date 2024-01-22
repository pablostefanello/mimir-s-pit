const { DataTypes } = require('sequelize')
const { v4: uuidv4 } = require('uuid')
const database = require('../db')

const Test = database.define('Test', {
  idTest: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: uuidv4(),
    field: 'idTest',
  },
  idExam: {
    type: DataTypes.UUID,
    references: {
      model: 'Exam',
      key: 'idExam',
    },
    field: 'idExam',
  },
  dayTest: {
    type: DataTypes.INTEGER,
    field: 'dayTest',
  },
  language: {
    type: DataTypes.STRING(30),
    field: 'language',
  },
  color: {
    type: DataTypes.INTEGER,
    field: 'color',
  },
  colorCode: {
    type: DataTypes.STRING(6),
    field: 'colorCode',
  },
  dateTest: {
    type: DataTypes.DATE,
    field: 'dateTest',
  },
}, {
  tableName: 'test',
})

module.exports = Test
