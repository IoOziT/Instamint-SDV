/**
 * @param {import("knex").Knex} knex
 * @returns
 */
export function seed(knex) {
  return knex("minters")
    .delete()
    .then(function () {
      return knex("minters").insert([
        {
          username: "utilisateur1",
          email: "admin@example.com",
          phone: "123-456-7890",
          password: "motdepasse",
          is_public: true,
          is_admin: true,
          language: "fr",
          bio: "Bonjour, je suis utilisateur 1.",
          link: "https://example.com/user1",
          profil_picture: "https://example.com/user1.jpg",
          location: "Paris, France",
        },
        {
          username: "user2",
          email: "test@example.com",
          phone: "123-456-0000",
          password: "motdepasse2",
          is_public: true,
          is_admin: false,
          username: "user2",
          language: "en",
          bio: "Hello, I am user 2.",
          link: "https://example.com/user2",
          profil_picture: "https://example.com/user2.jpg",
          location: "New York, USA",
        },
      ])
    })
}
