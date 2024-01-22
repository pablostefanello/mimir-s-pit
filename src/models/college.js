const { DataTypes } = require('sequelize')
const { v4: uuidv4 } = require('uuid')
const database = require('../db')

const College = database.define('College', {
  idCollege: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: uuidv4(),
    field: 'idCollege',
  },
  collegeName: {
    type: DataTypes.STRING(400),
    field: 'collegeName',
  },
  shortName: {
    type: DataTypes.STRING(10),
    field: 'shortName',
  },
}, {
  tableName: 'college',
})

module.exports = College
