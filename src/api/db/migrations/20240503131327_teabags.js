/**
 * @type {import("knex").Knex.Migration}
 */
module.exports = {
  async up(knex) {
    await knex.schema.createTable("teabags", (table) => {
      table.inherits("profiles")
      table.primary(["id"])
      table.string("username").notNullable().unique()
      table
        .enum("type", null, {
          useNative: true,
          existingType: true,
          enumName: "enum_profile_type",
        })
        .notNullable()
        .checkIn(["teabag"])
        .defaultTo("teabag")
    })
  },
  async down(knex) {
    await knex.schema.dropTable("teabags")
  },
}
