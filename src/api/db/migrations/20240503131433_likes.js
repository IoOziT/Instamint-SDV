/**
 * @type {import("knex").Knex.Migration}
 */
module.exports = {
  async up(knex) {
    await knex.schema.createTable("likes", (table) => {
      table.enum("type", ["like", "dislike"], {
        useNative: true,
        enumName: "enum_like_type",
      })
      table
        .integer("minter_id")
        .references("id")
        .inTable("minters")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .notNullable()
      table.integer("nft_id").references("id").inTable("nfts").onUpdate("CASCADE").onDelete("CASCADE").notNullable()
      table.timestamps(true, true)
      table.primary(["minter_id", "nft_id"])
    })
  },
  async down(knex) {
    await knex.schema.dropTable("likes")
    await knex.schema.raw("DROP TYPE enum_like_type")
  },
}
