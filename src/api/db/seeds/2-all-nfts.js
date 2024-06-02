/**
 * @param {import("knex").Knex} knex
 * @returns
 */
export function seed(knex) {
  return knex("nfts")
    .delete()
    .then(function () {
      return knex("nfts").insert([
        {
          name: "Mon NFT 1",
          description: "Description de mon premier NFT",
          url: "https://example.com/nft1",
          hash: "0x123456789abcdef",
          price: 100,
          owner_id: 1,
        },
        {
          name: "Mon NFT 2",
          description: "Description de mon deuxième NFT",
          url: "https://example.com/nft2",
          hash: "0x987654321fedcba",
          price: 200,
          owner_id: 1,
        },
      ])
    })
}
