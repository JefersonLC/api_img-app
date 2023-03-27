import { DataTypes } from 'sequelize';

export const Model = 'Image';

export const ModelAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING(150),
    allowNull: false,
    set(value) {
      this.setDataValue('description', value.trim());
    }
  },
  image: {
    type: DataTypes.STRING(150),
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
