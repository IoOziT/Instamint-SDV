/**
 * @param {import("knex").Knex} knex
 * @returns
 */
export function seed(knex) {
  return knex("notifications")
    .delete()
    .then(function () {
      return knex("notifications").insert([
        {
          minter_id: 1,
          type: "reply",
          object_id: 2,
        },
        {
          minter_id: 1,
          type: "comment",
          object_id: 2,
        },
      ])
    })
}
