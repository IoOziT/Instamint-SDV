/**
 * @type {import("knex").Knex.Migration}
 */
module.exports = {
  async up(knex) {
    await knex.schema.createTable("comments", (table) => {
      table.increments("id").primary()
      table.integer("nft_id").references("id").inTable("nfts").onUpdate("CASCADE").onDelete("CASCADE").notNullable()
      table
        .integer("minter_id")
        .references("id")
        .inTable("minters")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .notNullable()
      table.string("content", 300).notNullable()
      table.integer("parent_id").onUpdate("CASCADE").onDelete("CASCADE").references("id").inTable("comments")
      table.integer("thread_id").onUpdate("CASCADE").onDelete("CASCADE").references("id").inTable("comments")
      table.timestamps(true, true)
    })
  },
  async down(knex) {
    await knex.schema.dropTable("comments")
  },
}
