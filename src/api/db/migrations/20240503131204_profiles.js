module.exports.up = async (knex) => {
  await knex.schema.createTable("profiles", (table) => {
    table.increments("id").primary();
    table.text("type").notNullable();
    table.text("username").notNullable().unique();
    table.boolean("is_disabled").notNullable();
    table.text("language").notNullable();
    table.text("bio").notNullable();
    table.text("link").notNullable();
    table.text("profil_picture");
    table.text("location");

    table.timestamps(true, true);
    table.timestamp("deletion_date");
  });
};

module.exports.down = async (knex) => {
  await knex.schema.dropTable("profiles");
};
