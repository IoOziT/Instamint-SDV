module.exports.up = async (knex) => {
    await knex.schema.createTable("likes", (table) => {
        table.text("type").notNullable();
        table.integer("minter_id").notNullable().references("id").inTable("minters");
        table.timestamp("time").notNullable().defaultTo(knex.fn.now());
        table.timestamps(true, true);
    });
};

module.exports.down = async (knex) => {
    await knex.schema.dropTable("likes");
};