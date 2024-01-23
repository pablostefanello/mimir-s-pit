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
        field: 'idCollege'
    },
    examYear: {
        type: DataTypes.INTEGER,
    },
}, {
    tableName: 'exam',
})

module.exports = Exam