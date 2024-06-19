const knex = require ("../database/knex")
const AppError = require("../utils/AppError")
const DiskStorage = require("../providers/diskStorage")

class DishImageController {
  async update(request, response) {
    const { id } = request.query;
    const dishImageFilename = request.file.filename

    const diskStorage = new DiskStorage()

    const dish = await knex ("dishes")
      .where({ id }).first();
    
    if (!dish) {
      throw new AppError("No dish", 401)
    }

    if (dish.image) {
      await diskStorage.deleteFile(dish.image)
    }
    
    const filename = await diskStorage.saveFile(dishImageFilename)
    dish.image = filename;

    await knex("dishes").update(dish).where({ id })

    return response.json(dish)
  }
}

module.exports = DishImageController;