/**
 * @type {import("knex").Knex.Migration}
 */
module.exports = {
  async up(knex) {
    await knex.schema.createTable("nfts", (table) => {
      table.increments("id").primary()
      table
        .integer("creator_id")
        .references("id")
        .inTable("profiles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .notNullable()
      table
        .integer("owner_id")
        .references("id")
        .inTable("profiles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .notNullable()
      table.string("name").notNullable()
      table.text("description").notNullable().unique()
      table.string("hash", 256).notNullable()
      table.integer("price").checkPositive().notNullable()
      table.timestamp("publication_date").notNullable().defaultTo(knex.fn.now())
      table.timestamps(true, true)
    })
  },
  async down(knex) {
    await knex.schema.dropTable("nfts")
  },
}
