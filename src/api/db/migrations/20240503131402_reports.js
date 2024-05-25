module.exports.up = async (knex) => {
    await knex.schema.createTable("reports", (table) => {
        table.increments("id").primary();
        table.integer("minter_id").notNullable().references("id").inTable("minters");
        table.text("type").notNullable();
        table.integer("object_id").notNullable();
        table.timestamps(true, true, true);
    });
};

module.exports.down = async (knex) => {
    await knex.schema.dropTable("reports");
};