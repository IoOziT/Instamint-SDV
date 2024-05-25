module.exports.up = async (knex) => {
    await knex.schema.createTable("teabags", (table) => {
        table.text("type").notNullable();
        table.timestamps(true, true, true);
    });
};

module.exports.down = async (knex) => {
    await knex.schema.dropTable("teabags");
};