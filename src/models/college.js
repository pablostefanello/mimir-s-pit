const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const { UUIDV4, STRING, BINARY } = DataTypes;

const Collage = sequelize.define('Collage', {
  idCollage: {
    type: BINARY(16),
    primaryKey: true,
    allowNull: false,
    defaultValue: UUIDV4,
    field: 'idCollage',
  },
  collageName: {
    type: STRING(400),
    field: 'collageName',
  },
  shortName: {
    type: STRING(10),
    field: 'shortName',
  },
}, {
  tableName: 'collage', // Nome da tabela no banco de dados
  timestamps: false, // Se você não quiser colunas createdAt e updatedAt
});

module.exports = Collage;
