/**
 * A mapping of the notification types to the table they reference
 */
const notificationTypes = {
  reply: "comments",
  comment: "comments",
  mention: "comments",
  like: "likes",
  follow: "followers",
  follow_request: "followers",
  follow_request_accepted: "followers",
}

/**
 * @type {import("knex").Knex.Migration}
 */
module.exports = {
  async up(knex) {
    await knex.schema.createTable("notifications", (table) => {
      table.increments("id").primary()
      table.integer("minter_id").notNullable().references("id").inTable("minters")
      table.enum("type", Object.keys(notificationTypes), {
        useNative: true,
        enumName: "enum_notification_type",
      })
      table.integer("object_id").notNullable()
      table.timestamps(true, true)
      table.unique(["minter_id", "type", "object_id"])
    })

    await Promise.all(
      Object.entries(notificationTypes).map(([notificationType, referencedTable]) =>
        knex.schema.createTable(`${notificationType}_notifications`, (table) => {
          table.inherits("notifications")
          table
            .enum("type", null, {
              useNative: true,
              existingType: true,
              enumName: "enum_notification_type",
            })
            .checkIn([notificationType])
            .defaultTo(notificationType)
          table.foreign("object_id").references("id").inTable(referencedTable).onUpdate("CASCADE").onDelete("CASCADE")
          table.unique(["minter_id", "type", "object_id"])
        })
      )
    )
  },
  async down(knex) {
    await Promise.all(
      Object.keys(notificationTypes).map((notificationType) =>
        knex.schema.dropTable(`${notificationType}_notifications`)
      )
    )
    await knex.schema.dropTable("notifications")
    await knex.schema.raw("DROP TYPE enum_notification_type")
  },
}
