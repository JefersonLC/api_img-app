import { DataTypes } from 'sequelize';
import '../../../utils/capitalize.js';
import '../../../utils/lower.js';

export const Model = 'User';

export const ModelAttributes = {
  id: {
    type: DataTypes.STRING(100),
    primaryKey: true,
    allowNull: false,
    set(value) {
      this.setDataValue('id', value.lower());
    }
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    set(value) {
      this.setDataValue('name', value.lower());
    },
    get() {
      return this.getDataValue('name').capitalize();
    }
  },
  lastname: {
    type: DataTypes.STRING(100),
    allowNull: false,
    set(value) {
      this.setDataValue('lastname', value.lower());
    },
    get() {
      return this.getDataValue('lastname').capitalize();
    }
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    set(value) {
      this.setDataValue('email', value.trim());
    }
  },
  token: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    field: 'is_verified'
  }
};

export const ModelOptions = {
  tableName: 'users',
  timestamps: false
};
