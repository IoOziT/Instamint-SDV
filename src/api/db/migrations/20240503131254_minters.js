module.exports.up = async (knex) => {
  await knex.schema.createTable("minters", (table) => {
    table.increments("id").primary();
    table.enum("type", ["minters"]).notNullable().defaultTo("minters");
    table.text("email").notNullable().unique();
    table.text("phone");
    table.text("password").notNullable();
    table.boolean("is_public").notNullable();
    table.text("reset_password_token").unique();
    table.integer("profile_id").references("id").inTable("profiles");
    table.timestamps(true, true, true);
    table.boolean("is_admin").notNullable().defaultTo(false);
  });
};

module.exports.down = async (knex) => {
  await knex.schema.dropTable("minters");
};
