/**
 * @param {import("knex").Knex} knex
 * @returns
 */
export function seed(knex) {
  return knex("likes")
    .delete()
    .then(function () {
      return knex("likes").insert([
        {
          type: "like",
          minter_id: 1,
        },
        {
          type: "like",
          minter_id: 1,
        },
      ])
    })
}
