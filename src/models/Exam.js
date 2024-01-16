const { DataTypes } = require('sequelize')
const { v4: uuidv4 } = require('uuid')
const database = require('../db')

const Exam = database.define('Exam', {
  idExam: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: uuidv4(),
    field: 'idExam',
  },
  idCollege: {
    type: DataTypes.UUID,
    references: {
      model: 'College',
      key: 'idCollege',
    },
    field: 'idCollege',
  },
  yearExam: {
    type: DataTypes.INTEGER,
    field: 'yearExam',
  },
  dayExam: {
    type: DataTypes.INTEGER,
    field: 'dayExam',
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
  dateExam: {
    type: DataTypes.DATE,
    field: 'dateExam',
  },
}, {
  tableName: 'exam',
  timestamps: false,
})

module.exports = Exam
