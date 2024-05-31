module.exports.up = async (knex) => {
  await knex.schema.createTable("minters", (table) => {
    table.increments("id").primary();
    table.text("type").notNullable();
    table.text("email").notNullable().unique();
    table.text("phone");
    table.text("password").notNullable();
    table.boolean("is_public").notNullable();
    table.text("reset_password_token").unique();
    table
      .integer("profile_id")
      .references("id")
      .inTable("profiles")
      .notNullable();
    table.timestamps(true, true, true);
  });
};

module.exports.down = async (knex) => {
  await knex.schema.dropTable("minters");
};
