const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/diskStorage");

class DishImageController {
  async update(request, response) {
    const { id } = request.params.id;
    const dishImageFilename = request.file.filename;

    const diskStorage = new DiskStorage();

    try {
      const dish = await knex("dishes").where({ id }).first();

      if (!dish) {
        throw new AppError("Dish not found", 404);
      }

      if (dish.image) {
        await diskStorage.deleteFile(dish.image);
      }

      const filename = await diskStorage.saveFile(dishImageFilename);
      dish.image = filename;

      await knex("dishes").update(dish).where({ id });

      return response.json({ filename });
    } catch (error) {
      console.error("Error updating dish image:", error);
      return response.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}

module.exports = DishImageController;
