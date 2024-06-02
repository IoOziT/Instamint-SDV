/**
 * @param {import("knex").Knex} knex
 * @returns
 */
export function seed(knex) {
  return knex("hashtags")
    .delete()
    .then(function () {
      return knex("hashtags").insert([
        {
          name: "Nature",
        },
        {
          name: "Art",
        },
      ])
    })
}
