/**
 * @type {import("knex").Knex.Migration}
 */
module.exports = {
  async up(knex) {
    await knex.schema.createTable("mentions", (table) => {
      table
        .integer("comment_id")
        .references("id")
        .inTable("comments")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .notNullable()
      table
        .integer("minter_id")
        .references("id")
        .inTable("minters")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .notNullable()
      table.timestamps(true, true, true)
    })
  },
  async down(knex) {
    await knex.schema.dropTable("mentions")
  },
}
