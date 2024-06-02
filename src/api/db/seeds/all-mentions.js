/**
 * @param {import("knex").Knex} knex
 * @returns
 */
export function seed(knex) {
  return knex("mentions")
    .delete()
    .then(function () {
      return knex("mentions").insert([
        {
          comment_id: 1,
          minter_id: 1,
        },
        {
          comment_id: 2,
          minter_id: 1,
        },
      ])
    })
}
