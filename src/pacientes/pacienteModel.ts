import { DataTypes } from 'sequelize';
import { sequelize } from '../db/index';
import { Sessao } from '../sessoes/sessoesModel';

const Paciente = sequelize.define(
  'Paciente',
  {
    id_paciente: {
      type: DataTypes.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_nascimento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: 'pacientes',
  }
);

Paciente.hasMany(Sessao, {
  as: 'paciente_sessao',
  foreignKey: 'id_paciente',
});

export { Paciente };
