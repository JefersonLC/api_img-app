import ImageService from './images.service.js';

const imageService = new ImageService();

export async function index(req, res, next) {
  try {
    const images = await imageService.findAll();
    res.json(images);
  } catch (error) {
    next(error);
  }
}

export async function create(req, res, next) {
  const body = req.body;
  const image = req.file;
  const { id } = req.user;

  try {
    const newImage = await imageService.create({ image, body, id });
    res.status(201).json(newImage);
  } catch (error) {
    next(error);
  }
}
