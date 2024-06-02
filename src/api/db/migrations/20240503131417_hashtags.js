/**
 * @type {import("knex").Knex.Migration}
 */
module.exports = {
  async up(knex) {
    await knex.schema.createTable("hashtags", (table) => {
      table.increments("id").primary()
      table.string("name").notNullable()
      table.timestamps(true, true)
    })
  },
  async down(knex) {
    await knex.schema.dropTable("hashtags")
  },
}
