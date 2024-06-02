/**
 * @type {import("knex").Knex.Migration}
 */
module.exports = {
  async up(knex) {
    await knex.schema.createTable("nfts_hashtags", (table) => {
      table.integer("nft_id").references("id").inTable("nfts").onUpdate("CASCADE").onDelete("CASCADE").notNullable()
      table
        .integer("hashtag_id")
        .references("id")
        .inTable("hashtags")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .notNullable()
      table.primary(["nft_id", "hashtag_id"])
    })
  },
  async down(knex) {
    await knex.schema.dropTable("nfts_hashtags")
  },
}
