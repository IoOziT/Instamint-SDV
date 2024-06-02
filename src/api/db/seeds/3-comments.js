import Comment from "../models/comment"

/**
 * @param {import("knex").Knex} knex
 * @returns
 */
export function seed(knex) {
  return knex("comments")
    .delete()
    .then(function () {
      return knex("comments").insert([
        {
          minter_id: 1,
          content: "Mon premier commentaire",
          nft_id: 1,
        },
        {
          minter_id: 2,
          content: "Mon deuxième commentaire",
          parent_id: 1,
          thread_id: 1,
          nft_id: 1,
        },
      ])
    })
}
