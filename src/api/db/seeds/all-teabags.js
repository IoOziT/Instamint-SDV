/**
 * @param {import("knex").Knex} knex
 * @returns
 */
export function seed(knex) {
  return knex("teabags")
    .delete()
    .then(function () {
      return knex("teabags").insert([
        {
          type: "Thé vert",
        },
        {
          type: "Thé noir",
        },
      ])
    })
}
