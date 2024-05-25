module.exports.up = async (knex) => {
    await knex.schema.createTable("nfts", (table) => {
        table.increments("id").primary();
        table.integer("owner_id").references("id").inTable("profiles").notNullable();
        table.text("name").notNullable();
        table.text("description").notNullable().unique();
        table.text("url").notNullable();
        table.text("hash").notNullable();
        table.integer("price").notNullable();
        table.timestamp("publication_date").notNullable().defaultTo(knex.fn.now());
        table.timestamps(true, true);
    });
};

module.exports.down = async (knex) => {
    await knex.schema.dropTable("nfts");
};