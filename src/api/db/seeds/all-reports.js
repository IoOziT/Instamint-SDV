/**
 * @param {import("knex").Knex} knex
 * @returns
 */
export function seed(knex) {
  return knex("reports")
    .delete()
    .then(function () {
      return knex("reports").insert([
        {
          minter_id: 1,
          type: "Nouveau rapport",
          object_id: 123,
        },
        {
          minter_id: 1,
          type: "Rapport important",
          object_id: 456,
        },
      ])
    })
}
