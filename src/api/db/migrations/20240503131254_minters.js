/**
 * @type {import("knex").Knex.Migration}
 */
module.exports = {
  async up(knex) {
    await knex.schema.createTable("minters", (table) => {
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
        .checkIn(["minter"])
        .defaultTo("minter")
      table.string("email").notNullable().unique()
      table.string("phone")
      table.string("password").notNullable()
      table.boolean("is_public").notNullable()
      table.boolean("is_admin").notNullable().defaultTo(false)
      table.string("reset_password_token", 600).unique()
    })
  },
  async down(knex) {
    await knex.schema.dropTable("minters")
  },
}
