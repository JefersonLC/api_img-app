import { DataTypes } from 'sequelize';
import '../../../utils/capitalize.js';
import '../../../utils/lower.js';

export const Model = 'Image';

export const ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING(200),
    allowNull: false,
    et(value) {
      this.setDataValue('name', value.lower());
    },
    get() {
      return this.getDataValue('name').capitalize();
    }
  },
  image: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  userId: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
};

export const ModelOptions = {
  tableName: 'images',
  timestamps: false
};
