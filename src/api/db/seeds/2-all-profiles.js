exports.seed = function (knex) {
  return knex("profiles")
    .del()
    .then(function () {
      return knex("profiles").insert([
        {
          type: "user",
          username: "utilisateur1",
          is_disabled: false,
          language: "français",
          bio: "Bonjour, je suis utilisateur 1.",
          link: "https://example.com/user1",
          profil_picture: "https://example.com/user1.jpg",
          location: "Paris, France",
          deletion_date: new Date(),
        },
        {
          type: "user",
          username: "utilisateur2",
          is_disabled: false,
          language: "anglais",
          bio: "Hello, I am user 2.",
          link: "https://example.com/user2",
          profil_picture: "https://example.com/user2.jpg",
          location: "New York, USA",
          deletion_date: new Date(),
        },
      ]);
    });
};
