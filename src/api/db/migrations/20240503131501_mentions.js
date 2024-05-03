module.exports.up = async (knex) => {
    await knex.schema.createTable("mentions", (table) => {
        table.integer("comment_id").notNullable().references("id").inTable("comments");
        table.integer("minter_id").notNullable().references("id").inTable("minters");
        table.timestamps(true, true, true);
    });
};

module.exports.down = async (knex) => {
    await knex.schema.dropTable("mentions");
};