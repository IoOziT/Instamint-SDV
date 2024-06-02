/**
 * @type {import("knex").Knex.Migration}
 */
module.exports = {
  async up(knex) {
    await knex.schema.createTable("followers", (table) => {
      table.integer("follower_id").references("id").inTable("profiles").notNullable()
      table.integer("followed_id").references("id").inTable("profiles").notNullable()
      table.enum("status", ["pending", "ignored", "accepted"], {
        useNative: true,
        enumName: "enum_follow_request__status",
      })
      table.primary(["follower_id", "followed_id"])
      table.check("?? != ??", ["follower_id", "profile_id"])
    })
  },
  async down(knex) {
    await knex.schema.dropTable("followers")
  },
}
