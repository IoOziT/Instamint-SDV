/**
 * @type {import("knex").Knex.Migration}
 */
module.exports = {
  async up(knex) {
    await knex.schema.createTable("profiles", (table) => {
      table.increments("id").primary()
      table
        .enum("type", ["minter", "teabag"], {
          useNative: true,
          enumName: "enum_profile_type",
        })
        .notNullable()
      table.string("username").notNullable().unique()
      table.boolean("is_disabled").notNullable().defaultTo(false)
      table.string("language", 3).defaultTo("en")
      table.text("bio").notNullable()
      table.string("link", 600).notNullable()
      table.string("profile_picture", 600)
      table.string("location")
      table.timestamps(true, true)
      table.timestamp("deletion_date")
    })
  },
  async down(knex) {
    await knex.schema.dropTable("profiles")
    await knex.schema.raw("DROP TYPE enum_profile_type")
  },
}
