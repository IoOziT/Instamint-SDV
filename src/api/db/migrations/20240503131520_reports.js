/**
 * A mapping of the report targets to the table they reference
 */
const reportTargets = {
  comment: "comments",
  nft: "nfts",
  profile: "profiles",
}

/**
 * @type {import("knex").Knex.Migration}
 */
module.exports = {
  async up(knex) {
    await knex.schema.createTable("reports", (table) => {
      table.increments("id").primary()
      table.integer("minter_id").notNullable().references("id").inTable("minters")
      table.enum("type", ["comment", "nft", "profile"], {
        useNative: true,
        enumName: "enum_report_type",
      })
      table.integer("object_id").notNullable()
      table.timestamps(true, true)
      table.unique(["minter_id", "type", "object_id"])
    })

    await Promise.all(
      Object.entries(reportTargets).map(([reportTarget, referencedTable]) =>
        knex.schema.createTable(`${reportTarget}_reports`, (table) => {
          table.inherits("reports")
          table
            .enum("type", null, {
              useNative: true,
              existingType: true,
              enumName: "enum_report_type",
            })
            .checkIn([reportTarget])
            .defaultTo(reportTarget)
          table.foreign("object_id").references("id").inTable(referencedTable).onUpdate("CASCADE").onDelete("CASCADE")
          table.unique(["minter_id", "type", "object_id"])
        })
      )
    )
  },
  async down(knex) {
    await Promise.all(
      Object.keys(reportTargets).map((reportTarget) => knex.schema.dropTable(`${reportTarget}_reports`))
    )
    await knex.schema.dropTable("reports")
    await knex.schema.raw("DROP TYPE enum_report_type")
  },
}
