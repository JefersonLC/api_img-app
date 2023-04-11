import boom from '@hapi/boom';
import sequelize from '../../database/connection.js';
import env from '../../config/environment.js';

const { models } = sequelize;

export default class ImageService {
  async findAll() {
    const images = await models.Image.findAll({
      include: [
        {
          association: 'user',
          attributes: {
            exclude: [
              'age',
              'email',
              'password',
              'token',
              'isVerified',
              'isAdmin'
            ]
          }
        }
      ],
      attributes: { exclude: ['userId', 'UserId'] }
    });
    return images;
  }

  async create({ image, body, id }) {
    if (!image) throw boom.badRequest('An image was expected');

    const path = image.path.replace(/\\/g, '/');

    const newImage = await models.Image.create({
      description: body.description,
      image: env.DOMAIN + path,
      userId: id
    });

    return newImage;
  }
}
