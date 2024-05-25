module.exports.up = async (knex) => {
    await knex.schema.createTable("hashtags", (table) => {
        table.increments("id").primary();
        table.text("name").notNullable();
        table.timestamps(true, true, true);
    });
};

module.exports.down = async (knex) => {
    await knex.schema.dropTable("hashtags");
};