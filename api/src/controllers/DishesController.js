const knex = require("../database/knex");
const DiskStorage = require("../providers/diskStorage");
const diskStorage = new DiskStorage();

class DishesController {
  async create(request, response) {
    const { title, category, price, description, tags } = request.body;
    let imageFile;

    if (request.file) {
      const { filename } = request.file;
      imageFile = await diskStorage.saveFile(filename);
    }

    const [dish_id] = await knex("dishes").insert({
      title,
      category,
      description,
      price,
      image: imageFile || null
    });

    const parsedTags = JSON.parse(tags);

    if (Array.isArray(parsedTags)) {
      const tagsInsert = parsedTags.map(name => {
        return {
          dish_id,
          name
        };
      });

      await knex("tags").insert(tagsInsert);
    }

    return response.json();
  }

  async show(request, response){
    const { id } = request.params

    const dish = await knex("dishes").where({ id }).first();
    const tags = await knex("tags").where({ dish_id: id }).orderBy("name");

    return response.json({
      ...dish,
      tags
    });
  }

  async delete(request, response){
    const { id } = request.params

    await knex("dishes").where({ id }).delete()

    return response.json()
  }

  async index(request, response) {
    const { title, description, tags } = request.query;
  
    let dishes;
  
    if (tags) {
      const filterTags = tags.split(',').map(tag => tag.trim());
  
      dishes = await knex("tags")
        .select([
          "dishes.id",
          "dishes.title",
          "dishes.category",
          "dishes.description",
          "dishes.price",
          "dishes.image",
        ])
        .innerJoin("dishes", "dishes.id", "tags.dish_id")
        .where(builder => {
          if (title) {
            builder.where("dishes.title", 'like', `%${title}%`);
          }
          if (description) {
            builder.orWhere("dishes.description", 'like', `%${description}%`);
          }
        })
        .whereIn("name", filterTags)
        .groupBy("dishes.id")
        .orderBy("dishes.title");
  
    } else {
      dishes = await knex("dishes")
        .where(builder => {
          if (title) {
            builder.where("title", 'like', `%${title}%`);
          }
          if (description) {
            builder.orWhere("description", 'like', `%${description}%`);
          }
        })
        .orderBy("title");
    }
  
    const allTags = await knex("tags");
    const dishesWithTags = dishes.map(dish => {
      const dishTags = allTags.filter(tag => tag.dish_id === dish.id);
  
      return {
        ...dish,
        tags: dishTags
      };
    });
  
    return response.json(dishesWithTags);
  }

  async update(request, response) {
    const { id } = request.params
    const { title, description, category, price, tags} = request.body
    let imageFile;

    const dish = await knex("dishes").where({ id }).first()

    if (request.file) {

      if (dish.image) {
        await diskStorage.deleteFile(dish.image);
      }
      const { filename } = request.file;
      imageFile = await diskStorage.saveFile(filename);
    }


    if (!dish) {
      throw new AppError("Dish not found", 404)
    }

    await knex("dishes").where({ id }).update({
        title: title ?? dish.title,
        description: description ?? dish.description,
        category: category ?? dish.category,
        price: price ?? dish.price,
        updated_at: knex.fn.now(),
        image: imageFile ?? dish.image
    })

    const parsedTags = JSON.parse(tags);

    await knex("tags").where({ dish_id: id }).del();

    if (Array.isArray(parsedTags)) {
      const tagsInsert = parsedTags.map(name => {
        return {
          dish_id: id,
          name
        };
      });

    const uniqueTags = Array.from(new Set(tagsInsert.map(tag => tag.name)))
      .map(name => {
        return tagsInsert.find(tag => tag.name === name);
      });

      await knex("tags").insert(uniqueTags);
    }

    return response.json()
  }
}
  module.exports = DishesController;