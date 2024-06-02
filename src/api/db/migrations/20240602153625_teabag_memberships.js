/**
 * @type {import("knex").Knex.Migration}
 */
module.exports = {
  async up(knex) {
    await knex.schema.createTable("teabag_memberships", (table) => {
      table.integer("minter_id").references("id").inTable("minters")
      table.integer("teabag_id").references("id").inTable("teabags")
      table.primary(["minter_id", "teabag_id"])
    })
  },
  async down(knex) {
    await knex.dropTable("teabag_memberships")
  },
}
