exports.up = knex => knex.schema.createTable("dishes", table => {
  table.increments("id");
  table.text("title");
  table
  .enum("category", ["meal", "dessert", "beverage"], { useNative: true, enumName: "categories"})
  .notNullable().default("meal");
  table.text("description");
  table.decimal("price", 14, 2);
  table.text("image");

  table.timestamp("created_at").default(knex.fn.now());
  table.timestamp("updated_at").default(knex.fn.now());
})

exports.down = knex => knex.schema.dropTable("dishes");